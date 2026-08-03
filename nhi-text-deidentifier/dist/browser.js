"use strict";
var NhiRawDeidentifier = (() => {
  // src/text-rules.ts
  function deidentifyText(text, options = { nameMode: "partial" }) {
    const nameMode = options?.nameMode === "full" ? "full" : "partial";
    function maskName(name) {
      const trimmed = name.trim();
      if (!trimmed)
        return trimmed;
      if (/\s/.test(trimmed)) {
        const parts = trimmed.split(/\s+/);
        if (parts.length === 2) {
          const last = parts[1];
          return `${parts[0]} ${last.length <= 1 ? last : `${last[0]}***`}`;
        }
        return parts.map(
          (part, index) => index === 0 || index === parts.length - 1 ? part : "***"
        ).join(" ");
      }
      const characters = Array.from(trimmed);
      if (characters.length <= 1)
        return trimmed;
      if (characters.length === 2)
        return `${characters[0]}O`;
      return characters[0] + "O".repeat(characters.length - 2) + characters.at(-1);
    }
    function maskBirthDate(value) {
      return value.replace(
        /^(\d{4})(\s*[/\.\-／]\s*)\d{1,2}(\s*[/\.\-／]\s*)\d{1,2}$/,
        (_match, year, firstSeparator, secondSeparator) => `${year}${firstSeparator}XX${secondSeparator}XX`
      );
    }
    return String(text).replace(
      /((?:出生日期|出生年月日|生日)\s*[:：]?\s*)(\d{4}\s*[/\.\-／]\s*\d{1,2}\s*[/\.\-／]\s*\d{1,2})/g,
      (_match, label, value) => `${label}${maskBirthDate(value)}`
    ).replace(
      /((?:病歷號碼|病歷號數|病歷號|病歷編號)\s*[:：]?\s*)([A-Za-z0-9\-]+)/gi,
      (_match, label) => `${label}[已去識別]`
    ).replace(
      /((?:國民身分證統一編號|身分證統一編號|身分證字號|身份證字號|身分證號|身份證號|身分證|身份證)\s*[:：]?\s*)([A-Za-z0-9*＊\-]+)/gi,
      (_match, label) => `${label}[已去識別]`
    ).replace(
      /((?:聯絡電話|連絡電話|行動電話(?:號碼)?|手機(?:號碼)?|電話(?:號碼)?)\s*[:：]?\s*)([+＋]?(?:[（(]?[0-9０-９][0-9０-９ \t()（）.．\-－–—/／]{4,40}[0-9０-９])(?:[ \t]*(?:#|＃|分機|ext\.?)\s*[0-9０-９]{1,8})?)/gi,
      (match, label, value) => (value.match(/[0-9０-９]/g)?.length ?? 0) >= 7 ? `${label}[已去識別電話]` : match
    ).replace(
      /((?:戶籍地址|通訊地址|聯絡地址|現住地址|住址|地址)\s*[:：]?\s*)([^\n\r<]+?)(?=[ \t]*(?:[,，;；][ \t]*[^,，;；:\n\r<：]{1,30}|(?:病患姓名|病人姓名|患者姓名|姓名|身分證|身份證|出生日期|出生年月日|生日|病歷號碼|病歷號|病歷編號|聯絡電話|連絡電話|行動電話|手機|電話|病理診斷|臨床診斷|診斷|主訴|處方|檢驗結果))[ \t]*[:：]|[\n\r<]|$)/g,
      (_match, label) => `${label}[已去識別地址]`
    ).replace(
      /((?:病患姓名|病人姓名|患者姓名|姓名)\s*[:：]?\s*)([一-鿿]{2,15})/g,
      (_match, label, value) => `${label}${nameMode === "full" ? "[已去識別姓名]" : maskName(value)}`
    ).replace(
      /((?:病患姓名|病人姓名|患者姓名|姓名)\s*[:：]?\s*)([A-Za-z][A-Za-z .'\-]{1,38})/gi,
      (_match, label, value) => `${label}${nameMode === "full" ? "[已去識別姓名]" : maskName(value)}`
    );
  }
  function setDefaultNameModeInCode(source, nameMode) {
    return source.replace(
      /function deidentifyText\(text, options = \{(?: nameMode: "(?:partial|full)" )?\}\)/,
      `function deidentifyText(text, options = { nameMode: "${nameMode}" })`
    );
  }
  var DEFAULT_DEIDENTIFIER_CODE = `${deidentifyText.toString()}

// 使用方式：
// console.log(deidentifyText("姓名：王測試\\n電話：0912-345-678"));
// console.log(deidentifyText("姓名：王測試", { nameMode: "full" }));
`;

  // src/browser.ts
  var SAMPLE_TEXTS = {
    complete: [
      "姓名：王測試",
      "身分證：F223456789",
      "出生日期：1962-04-15",
      "病歷號碼：MRN-7788",
      "電話：0912-345-678",
      "地址：台北市測試區測試路99號",
      "病理診斷：高血壓"
    ].join("\n"),
    singleLine: "姓名：王測試 身分證：F223456789 出生日期：1962-04-15病歷號碼：MRN-7788電話：0912-345-678地址：台北市測試區測試路99號病理診斷：高血壓",
    report: [
      "病患姓名：Amy Chen",
      "聯絡電話：(02) 2345-6789 分機 123",
      "通訊地址：台中市測試區健康路100號",
      "檢驗結果：Glucose 98 mg/dL"
    ].join("\n"),
    clinical: [
      "主訴：咳嗽三天，無發燒。",
      "診斷：急性上呼吸道感染",
      "處方：症狀治療並返診追蹤"
    ].join("\n")
  };
  var autoRunTimer;
  var latestRunId = 0;
  function element(id) {
    const found = document.getElementById(id);
    if (!found)
      throw new Error(`Missing element: ${id}`);
    return found;
  }
  function setStatus(message, kind = "normal") {
    const status = element("status");
    status.textContent = message;
    status.dataset.kind = kind;
  }
  function executeInWorker(code, input, nameMode) {
    return new Promise((resolve, reject) => {
      const workerSource = `
"use strict";
${code}
self.onmessage = (event) => {
  try {
    if (typeof deidentifyText !== "function") {
      throw new Error("程式碼必須定義 deidentifyText(text) 函式");
    }
    const output = deidentifyText(String(event.data.input), {
      nameMode: event.data.nameMode,
    });
    if (typeof output !== "string") {
      throw new Error("deidentifyText(text) 必須回傳字串");
    }
    self.postMessage({ output });
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : "執行失敗" });
  }
};`;
      const url = URL.createObjectURL(
        new Blob([workerSource], { type: "text/javascript" })
      );
      const worker = new Worker(url);
      const finish = () => {
        worker.terminate();
        URL.revokeObjectURL(url);
      };
      const timeout = window.setTimeout(() => {
        finish();
        reject(new Error("執行超過 1.5 秒，已自動停止。"));
      }, 1500);
      worker.onmessage = (event) => {
        window.clearTimeout(timeout);
        finish();
        if (event.data.error)
          reject(new Error(event.data.error));
        else
          resolve(event.data.output ?? "");
      };
      worker.onerror = () => {
        window.clearTimeout(timeout);
        finish();
        reject(new Error("JavaScript 語法錯誤或無法執行。"));
      };
      worker.postMessage({ input, nameMode });
    });
  }
  async function runCode() {
    const runId = ++latestRunId;
    const input = element("input-text").value;
    const output = element("output-text");
    if (!input.trim()) {
      output.value = "";
      setStatus("請先貼上要處理的文字。", "error");
      return;
    }
    const buttons = [element("apply-code")];
    buttons.forEach((button) => {
      button.disabled = true;
    });
    setStatus("正在隔離環境中執行程式碼…");
    try {
      const result = await executeInWorker(
        element("code-editor").value,
        input,
        element("name-mode").value
      );
      if (runId !== latestRunId)
        return;
      output.value = result;
      setStatus(
        result === input ? "執行完成，但結果沒有變化。請人工確認程式碼與原文格式。" : "執行完成。請逐項檢查結果，確認後再複製分享。",
        result === input ? "normal" : "success"
      );
    } catch (error) {
      if (runId !== latestRunId)
        return;
      output.value = "";
      setStatus(
        `程式碼無法執行：${error instanceof Error ? error.message : "執行失敗"}`,
        "error"
      );
    } finally {
      if (runId === latestRunId) {
        buttons.forEach((button) => {
          button.disabled = false;
        });
      }
    }
  }
  function clearScheduledAutoRun() {
    if (autoRunTimer !== void 0) {
      window.clearTimeout(autoRunTimer);
      autoRunTimer = void 0;
    }
  }
  function clearResult() {
    clearScheduledAutoRun();
    latestRunId += 1;
    element("output-text").value = "";
    setStatus("");
  }
  function scheduleAutoRun() {
    clearScheduledAutoRun();
    if (!element("input-text").value.trim()) {
      clearResult();
      return;
    }
    setStatus("文字已變更，正在自動產生結果…");
    autoRunTimer = window.setTimeout(() => {
      autoRunTimer = void 0;
      void runCode();
    }, 250);
  }
  function loadSampleText() {
    const select = element("sample-data");
    const sample = SAMPLE_TEXTS[select.value];
    if (!sample)
      return;
    element("input-text").value = sample;
    element("output-text").value = "";
    const label = select.selectedOptions[0]?.textContent?.trim() ?? "測試資料";
    setStatus(`已帶入「${label}」，正在自動產生結果…`);
    clearScheduledAutoRun();
    void runCode();
  }
  function handleInputChanged() {
    element("sample-data").value = "";
    scheduleAutoRun();
  }
  function selectedNameMode() {
    return element("name-mode").value;
  }
  function syncCodeDefaultNameMode() {
    const editor = element("code-editor");
    editor.value = setDefaultNameModeInCode(editor.value, selectedNameMode());
  }
  function handleNameModeChanged() {
    clearScheduledAutoRun();
    syncCodeDefaultNameMode();
    if (element("input-text").value.trim()) {
      setStatus("姓名處理方式已變更，正在自動更新結果…");
      void runCode();
    } else {
      clearResult();
    }
  }
  function markCodeChanged() {
    clearScheduledAutoRun();
    latestRunId += 1;
    element("output-text").value = "";
    setStatus("程式碼已修改，請按「執行修改後程式碼」查看新結果。");
  }
  function restoreDefaultCode() {
    element("code-editor").value = DEFAULT_DEIDENTIFIER_CODE;
    syncCodeDefaultNameMode();
    if (element("input-text").value.trim()) {
      void runCode();
    } else {
      setStatus("已恢復預設程式碼。", "success");
    }
  }
  async function copyCode() {
    const editor = element("code-editor");
    try {
      await navigator.clipboard.writeText(editor.value);
    } catch {
      editor.focus();
      editor.select();
      if (!document.execCommand("copy")) {
        setStatus("無法自動複製；請在程式碼框中全選後手動複製。", "error");
        return;
      }
    }
    setStatus("程式碼已複製。", "success");
  }
  window.addEventListener("DOMContentLoaded", () => {
    element("code-editor").value = DEFAULT_DEIDENTIFIER_CODE;
    syncCodeDefaultNameMode();
    element("apply-code").addEventListener("click", () => void runCode());
    element("copy-code").addEventListener("click", () => void copyCode());
    element("reset-code").addEventListener("click", restoreDefaultCode);
    element("sample-data").addEventListener("change", loadSampleText);
    element("name-mode").addEventListener("change", handleNameModeChanged);
    element("input-text").addEventListener("input", handleInputChanged);
    element("code-editor").addEventListener("input", markCodeChanged);
  });
})();
