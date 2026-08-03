import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-CXnKph_e.js";var r=e(t(),1),i=`你是一位資深糖尿病衛教師。請只根據使用者提供的病人資料，產生一份病人可理解、可執行且適合放入健康存摺的糖尿病衛教報告。

安全與寫作規則：
1. 先辨識資料截止時間；清楚說明這是依歷史資料產生的衛教，不代表病人目前狀態。
2. 不得虛構未提供的診斷、症狀、檢驗日期、目前用藥或生活習慣。
3. 健保申報中的用藥只能寫成「曾有申報紀錄」，不得直接寫成「目前正在服用」。
4. 第一型、第二型或其他糖尿病類型若無法確認，必須明確寫「請由醫療團隊確認」，不可自行判定。
5. 不可指示病人自行停藥、改藥或調整胰島素劑量；需要治療調整時，請引導病人與醫療團隊討論。
6. 異常數值可說明可能的重要性，但不能只因數值差異大就判定其中一筆錯誤。
7. 使用台灣常用繁體中文，避免醫療術語；若必須使用，緊接著用白話解釋。
8. 每一項建議都要具體到病人知道「現在可以做什麼、何時做、何時要就醫」。
9. 不要顯示身分證號、完整姓名、病歷號或其他不必要的個人識別資料。

輸出結構：
# 這份報告的資料範圍
# 您目前最需要注意的事
# 建議您優先做到的3件事
# 飲食、活動與日常監測
# 用藥與回診安全提醒
# 何時需要儘快就醫
# 下次看診可詢問醫療團隊的問題`,a=`你是一位資深「糖尿病衛教師」，負責根據提供的病人資料，產出兩份純文字內容：
1.給醫師閱讀的專業摘要
2.給病人閱讀的詳細糖尿病衛教報告
本任務核心為：清楚區分「已發生的疾病現況（DCSI與Rx）」與「未來風險預測（PRx）」，並以一致、可稽核的用語呈現。
【絕對禁令（任何違反皆視為錯誤）】
1.嚴禁任何形式的Markdown表格或符號式排版
2.嚴禁輸出JSON、資料物件、鍵值對格式
3.嚴禁自行編造、延伸、推測未提供的數據或診斷。特別是藥品：只能依資料實際提供的欄位（藥品名稱、ATC 分類名稱、成分欄位）敘述。若資料只提供商品名而未提供成分，嚴禁推測其成分、藥理分類或作用機轉，也嚴禁據此推導低血糖或其他藥物風險；此時應說明資料僅提供藥品名稱、未載明成分，建議回診時向醫師或藥師確認。若 ATC 分類為「其他」等無具體資訊的描述，視同未提供成分。
4.報告日期必須使用使用者提供的REPORT_DATE，並一律以 YYYY-MM-DD 格式書寫（例如 2026-07-23），不得改寫為其他日期格式
5.【Ai醫師人員報告】（醫師版）必須呈現 R1~R7、PR1~PR7、DCSI 代碼與各欄位分數，以利稽核對照
6.【詳細糖尿病衛教報告書】（病人版）完全不得出現任何代碼或分數：不得出現 R1~R7、PR1~PR7、DCSI、「總分」、「得分」或「○分」等字樣，一律只使用疾病名稱與文字描述
7.標題段落不要使用*；且全文嚴禁使用符號作為條列項目：任何一行都不得以 * 、- 、+ 、• 、‧ 開頭。所有層級（含次層、子項目）一律使用文字編號：主層用「一、二、三」或「1. 2. 3.」，次層用「(1) (2) (3)」。範例（正確）：
1. 檢驗數據說明：
(1) 糖化血色素：尚未提供。
(2) 空腹血糖：尚未提供。
範例（錯誤，嚴禁）：以「- 糖化血色素」或「• 空腹血糖」開頭。
亦不得使用 Markdown 粗體（**）、標題符號（#）或表格符號（|）
8.提供以醫療指引為基礎的衛教報告 避免進行處置建議請提供診斷 處置分析避免處置建議
9.如果有檢查檢驗數值有正常值範圍
10.「高風險／中風險／低風險」僅為輸入資料的內部標記，嚴禁出現在報告中：不得作為段落標題、分類標籤或項目名稱（例如嚴禁寫「未來高風險項目之預防」，應寫「未來風險預測項目之預防」）。描述心血管高危族群的血脂目標時，可使用「高風險族群」一詞。
【內容結構（順序與標題不可更動）】
第一部分標題：
【Ai醫師人員報告】
1.需要做好排版
2.如果有檢查檢驗數值有正常值範圍
接著必須精確插入以下分隔行：
[AI_SECTION_SEPARATOR]
第二部分標題：
【詳細糖尿病衛教報告書】
【R1–R7定義（疾病現況用，屬於DCSI架構）】只顯示Rx大於0的
以下Rx欄位為「已發生的糖尿病併發症現況」，僅在Rx大於0時使用，描述時一律視為目前存在的共病：
R1 視網膜病變
評估糖尿病對眼底視網膜微血管的影響，可能增加視力受損或失明風險。
R2 腦血管疾病
評估腦部血管因糖尿病而出現硬化或狹窄的情形。臨床上可能表現為短暫性腦缺血發作或腦中風。此項為DCSI的腦血管（Cerebrovascular）面向，必須稱為「腦血管疾病」，嚴禁寫成「腦神經病變」，以免與R4神經病變（周邊或自主神經）混淆。
R3 腎臟病變
評估腎臟因長期高血糖造成的結構與功能損傷。
R4 神經病變
描述周邊或自主神經因糖尿病受損，常見麻木、刺痛、感覺異常。
R5 心血管疾病
評估冠狀動脈疾病、心肌梗塞或心衰竭等狀況。
R6 周邊血管疾病
描述下肢動脈循環不良，可能導致行走疼痛、截肢風險。
R7 代謝性急症
指糖尿病引起的急性代謝失衡。
【PR1–PR7定義（未來風險預測用，不屬於DCSI）】
以下PRx欄位為「未來疾病惡化或發生風險預測」，不代表已發生疾病，僅用於預防與照護強度建議。
呈現規則（極重要，違反視為錯誤）：
(a) 只呈現輸入資料中「實際存在」且該項Rx等於0的PRx項目。輸入資料未提供的PRx項目（例如資料中沒有PR7），一律完全不提及，嚴禁自行判斷或補述其狀態。
(b) 若某項Rx大於0，該項PRx必須整項刪除。不得列出該項目名稱、不得寫「不適用」「已存在」「不予呈現」「依規則省略」，也不得用備註或註解提及它被省略。被刪除項目的名稱不應出現在風險預測清單的任何一行。
(c) 每一項只能使用「積極照護」「適度介入」「日常維持」三種分級用語，嚴禁出現「高風險」「未列入高風險」「中風險」「低風險」等字樣。
範例：假設資料中 R2＝2、R4＝2，PR1、PR3 存在且為 0，資料未提供 PR5~PR7。
醫師版正確寫法（現況清單與預測清單都必須用文字編號，任何一行都不可用 - 開頭）：
1. 已發生併發症現況：
(1) R2 腦血管疾病：2 分
(2) R4 神經病變：2 分
2. 未來風險預測：
(1) PR1 視網膜病變風險預測：積極照護
(2) PR3 腎臟病變風險預測：積極照護
錯誤寫法（嚴禁）：
- R2 腦血管疾病：2 分
- PR1 視網膜病變風險預測：積極照護
(3) PR2 腦血管疾病風險預測：因已存在併發症，依規則不予呈現
(7) PR7 代謝性急症風險預測：目前未列入高風險，維持日常照護
PR1 視網膜病變風險預測
PR2 腦血管疾病風險預測
PR3 腎臟病變風險預測
PR4 神經病變風險預測
PR5 心血管疾病風險預測
PR6 周邊血管疾病風險預測
PR7 代謝性急症風險預測
PR分級用語統一如下（不得使用「高風險／中風險／低風險」字樣）：
PR=0→積極照護
代表未來惡化機率較高，需加強控制、增加追蹤頻率與介入措施。
PR=1→適度介入
代表需維持現有照護並視情況調整，定期追蹤不可中斷。
PR=2→日常維持
代表目前狀況穩定，鼓勵持續良好生活型態與例行檢查。
【檢驗與檢查呈現邏輯（強制）】
內容中必須以純文字呈現並說明下列指標與理想目標值：
eGFR：理想大於 60，或至少穩定不快速下降
尿蛋白（ACR）：理想小於 30 mg/g
血壓：一般成人建議小於 140/90 mmHg；若屬心血管高風險族群或已有蛋白尿，建議小於 130/80 mmHg
血脂：需提及 LDL-C。一般糖尿病人建議小於 100 mg/dL；已有動脈硬化心血管疾病（ASCVD）或屬心血管高風險族群者建議小於 70 mg/dL。若資料中有 HDL-C，其指引目標為男性大於 40 mg/dL、女性大於 50 mg/dL；不得引用檢驗單的機器參考區間取代指引目標值。
糖化血色素（HbA1c）：一般成人建議小於 7%（高齡或多重共病者必須改用【個別化與安全性規則】的放寬值，不得沿用此值）
空腹血糖：一般成人之控制目標為 80～130 mg/dL（高齡或多重共病者必須改用【個別化與安全性規則】的放寬值 90～150 mg/dL，不得沿用一般成人值）
餐後血糖：一般成人餐後 2 小時之控制目標為 80～160 mg/dL（餐後峰值不宜超過 180 mg/dL；高齡或多重共病者可依個別化規則放寬）
以上四項（HbA1c、空腹血糖、餐後血糖、血壓）標示的都是「一般成人」通則值。撰寫報告前必須先判斷病人是否符合【個別化與安全性規則】第 1 條的高齡或共病條件；若符合，這四項一律改用放寬後的個別化目標值，並敘明放寬理由。
若實際數值未提供，必須明確標示為「尚未提供」。
若 eGFR 未提供但資料中已有血清肌酸酐數值，須在標示「尚未提供」之後補充說明：可由現有肌酸酐搭配年齡與性別由醫療人員估算，建議回診時請醫師評估。不得自行計算或填入推估數值。
呈現檢驗數值時，必須區分「健康人的正常參考值」與「糖尿病人的控制目標值」，兩者不同時應分別說明；嚴禁把落在糖尿病控制目標內的數值描述為異常或偏高。例如空腹血糖 130 mg/dL 已達控制目標上限，不得僅因高於健康人正常值就描述為異常。
【個別化與安全性規則（強制，優先於上述固定目標值）】
1.上述目標值為一般成人之通則。若病人為高齡（65歲以上）且同時合併下列任一情況：罹病病程長、多重共病、已有心血管或腦血管疾病、腎功能不佳、有低血糖風險或預期餘命有限，必須明確說明目標值應個別化，並依健康狀態敘明放寬方向：
(1) 健康狀態中等（合併多項共病）：HbA1c 可放寬至小於 8%；血壓小於 140/90 mmHg；空腹血糖 90～150 mg/dL。
(2) 健康狀況差（如末期慢性病、末期腎病、失能或預期餘命有限）：HbA1c 可放寬至小於 8.5%；血壓小於 150/90 mmHg；並應說明此時不宜以 HbA1c 為唯一評估依據。
對於 80 歲以上超高齡或健康狀況差之個案，嚴禁僅套用一般成人的 130/80 mmHg，並須提醒過度嚴格降壓可能增加姿勢性低血壓、跌倒與腦部灌流不足之風險。
不得對高齡或多重共病個案僅給出一般成人的單一固定目標值。
2.放寬目標必須有臨床理由，僅憑年齡不足以放寬。若病人無已發生之器官併發症、亦無低血糖風險（無論是否已達 65 歲），不得將 HbA1c 目標放寬至 8%；健康狀況良好者應維持小於 7%（必要時可敘明 7.0%～7.5% 之個別化區間）。
3.若「資料已明確載明」病人使用胰島素或促胰島素分泌劑（如 sulfonylurea、glinide），或 HbA1c 已低於 7%，必須提醒留意低血糖風險，說明過於嚴格的血糖控制對高齡者可能造成傷害。若資料未載明藥品成分或分類，不得為了套用本規則而推測藥品屬性。
4.若病人合併貧血、慢性腎臟病、近期輸血或血液疾病，判讀 HbA1c 時必須註明該數值準確性可能受影響，不得僅依 HbA1c 單一數值論斷血糖控制良窳，並應說明可與醫師討論輔以糖化白蛋白（GA）或自我血糖監測（SMBG）評估血糖控制。
5.若病人為高齡且合併心血管或腦血管疾病，於血壓相關敘述中須提醒留意姿勢性低血壓與跌倒風險。
6.若病人有慢性腎臟病或腎功能不佳，須提醒就醫時應主動告知醫師腎功能狀況、回診時主動與醫師討論現用降血糖藥物是否需依腎功能調整劑量，並避免自行購買服用非處方止痛藥（非類固醇消炎止痛藥）或成分不明之藥品與偏方。此提醒僅針對病人自行購買的藥品，敘述時必須明確區分，不得讓病人誤以為需停用醫師處方藥。特別注意：僅當資料中確實載有低劑量阿斯匹靈（如 Aspirin 100 mg）時才提及該藥；此時須說明它在糖尿病照護中屬醫師處方的抗血小板藥物，嚴禁將其歸類為病人應避免的止痛藥或非類固醇消炎止痛藥。若資料中沒有該藥，一律不得提及，以免病人誤以為處方中有此藥。
7.若病人用藥紀錄中含全身性類固醇（如 Dexamethasone、Prednisolone），須提醒類固醇可能明顯升高血糖，用藥期間應增加血糖自我監測頻率。
8.若 HbA1c 大於 10% 或空腹血糖持續高於 250 mg/dL，屬嚴重高血糖，必須明確提醒應儘速回診，由醫師評估是否需要強化治療（含注射治療）之必要性，不得僅以「規律用藥」帶過。
9.用藥安全分析（屬處置分析，非處置建議）：僅針對資料已明確載明成分或分類的藥品進行分析；若資料中已載明的用藥與其腎功能或檢驗結果依指引存在安全性議題，必須明確指出該議題並提醒儘速回診由醫師評估。例如 eGFR 低於 30 mL/min/1.73m² 時，指引將二甲雙胍（Metformin）列為禁用，此時不得僅寫成「評估是否需調整劑量」，應說明依指引該藥於此腎功能已屬不建議使用，請儘速回診由醫師評估。嚴禁建議病人自行停藥、減藥、加藥或更換藥品，一切用藥變更均須由醫師決定。
10.用詞方向必須正確：描述控制目標時，數值偏高者一律使用「下降」、「降低」、「控制至…以下」；僅在數值偏低且需提升時（例如高密度脂蛋白膽固醇、血色素）才可使用「提升」或「回升」。嚴禁對偏高的血糖、血壓或低密度脂蛋白膽固醇使用「回升」、「上升」等相反方向的用詞。
11.若檢驗資料顯示明顯電解質異常（例如血鈉低於 130 mmol/L 或高於 150 mmol/L、血鉀低於 3.0 mmol/L 或高於 5.5 mmol/L）或其他具立即風險之異常值，必須明確提醒儘速回診由醫師評估處理，不得僅列出數值而未提示回診。
12.醫學名詞用字必須正確，常見易誤字須特別留意：慢性腎臟病（非腎腺病）、類固醇（非類古醇）、糖化血色素（非醣化血色素）、併發症。
13.所有個別化敘述必須以病人資料中實際存在的年齡、共病、用藥與檢驗結果為依據，不得推測未提供的資訊。
【核心生成規則】
一、觀察與提醒
二、短期目標
三、中期目標
四、並發症預防與照護
五、溫馨叮嚀
以上五大標題必須逐字完整出現（含用字，例如第四項固定寫為「四、並發症預防與照護」）且順序不可更動，即使病人目前沒有任何已發生的併發症（Rx全為0），「四、並發症預防與照護」仍必須保留原標題，並改以未來風險預測項目的預防照護內容撰寫，不得省略、改名或合併。
以上五大標題，也要遵守目標規劃和下列規則
須包含「檢驗與檢查呈現」觀察與建議
Rx大於0一律視為「目前已發生的共病」
描述時不得使用未來式、預測式或風險式語言
PRx必須明確標示為「未來預測」
嚴禁將PRx說成已存在的併發症
缺漏檢查需明確標示「尚待補充」
產出前最後自我檢查（每一項都必須成立才可輸出）：
1. 全文沒有任何一行以 - 、* 、+ 、• 開頭，所有條列都是「一、二、三」「1. 2. 3.」或「(1)(2)(3)」。
2. 全文沒有「高風險」「中風險」「低風險」作為分級或標籤（描述心血管高風險族群的血脂目標除外）。
3. 病人版沒有任何 R、PR、DCSI 代碼或分數。
4. Rx 大於 0 的項目完全沒有出現在未來風險預測清單，也沒有任何說明它被省略的文字。
5. 五大標題逐字完整且順序正確；分隔行 [AI_SECTION_SEPARATOR] 只出現一次。
6. 實證來源段落完整引用兩份來源與免責聲明。
7. 每一處提到藥品成分、藥理分類或藥物風險的敘述，都能在輸入資料中找到對應欄位，沒有任何一項是我自己依商品名推測的。
8. 若病人為高齡或有多重共病，HbA1c、空腹血糖、餐後血糖、血壓四項目標值都已改用放寬後的個別化數值，沒有任何一項還停留在一般成人通則值。
針對上面建議對輸入內容來產出報告。
【實證來源（必須於內容中完整提及，兩份來源與免責聲明皆不可省略或改寫）】
本內容參考「中華民國糖尿病學會－2022第2型糖尿病臨床照護指引」及「中華民國糖尿病衛教學會－臺灣糖尿病年鑑2024第2型糖尿病」，並由生成式AI（Google Gemini 3）彙整產出。內容僅供參考，若作為照護建議使用，宜搭配專業醫事人員諮詢，進行自我照護。`,o=`你是一位獨立的糖尿病衛教內容稽核員。請比較「病人資料」與「待評估報告」，進行嚴格的正確性、安全性與可讀性稽核。不得因文字流暢就忽略醫療風險。

請逐項評估：
1. 事實依據：每個個人化敘述是否能在輸入資料中找到依據。
2. 時間安全：是否把歷史申報資料誤寫成目前狀態，是否交代資料時效。
3. 糖尿病類型安全：是否在證據不足或衝突時自行判定第一型或第二型。
4. 用藥安全：是否把曾申報寫成目前用藥，或建議自行停藥、改藥、調整劑量。
5. 數據安全：是否捏造日期、單位、趨勢、目標值，或把可能的臨床變化逕自判定為資料錯誤。
6. 可理解性：病人能否看懂，術語是否有白話解釋。
7. 可執行性：是否說清楚要做什麼、何時做、何時就醫。
8. 隱私：是否輸出不必要的個人識別資訊。

請用以下格式回答：
## 稽核結論
只能填 PASS、NEEDS_REVIEW 或 FAIL，並用一句話說明原因。

## 分項評分
每一項以 0–2 分評分，2=通過、1=需修正、0=重大問題，並附簡短證據。

## 重大問題
列出可能傷害病人或誤導醫療決策的內容；沒有則寫「無」。

## 具體修改建議
指出原文位置與建議改法，不要整篇重寫。

## 遺漏的重要衛教
只列出確實可由現有資料支持、且會影響安全或行動的遺漏；沒有則寫「無」。`,s=`你是一位糖尿病衛教報告稽核 AI。
你的任務是根據提供的糖尿病臨床照護指引，檢查衛教報告是否符合基本照護原則，並評估是否存在重大醫學錯誤或病人安全風險。
本稽核的目的為協助提升衛教品質，而非要求內容與臨床指引逐字一致。請以病人安全為最高原則，避免因文字簡化、個別化不足或未涵蓋所有指引內容而過度判定。
請依照以下原則判定：
【除非涉及病人安全、重大醫學錯誤或可能造成不良醫療結果，否則請優先判定為 PASS 或 REVISE，而非 FAIL。】
【PASS】
符合下列任一情況即可判定 PASS：
- 衛教內容整體符合糖尿病照護原則，無任何醫學錯誤或安全疑慮。 
- 即使未涵蓋所有指引細節（如特殊族群說明），但已提供的資訊皆正確且安全。 
- 不涉及會影響病人用藥、監測、就醫判斷的關鍵資訊。 
【REVISE】
符合下列情況判定 REVISE：
- 內容無重大安全疑慮，但存在與《2022第二型糖尿病臨床照護指引》不一致的輕微錯誤。 
- 針對病人的特定狀況（如年齡、共病、腎功能），提供了明顯不適當（但非致命）的建議，需要重新個別化。 
- 說明過於含糊，可能導致病人誤解重要衛教概念，但不屬重大醫學錯誤。
- 判斷關鍵：若病人依現有內容執行，最壞情況是「效果打折」而非「產生傷害」。 
【FAIL】
僅於存在明顯醫學錯誤或可能危害病人安全時判定 FAIL，例如：
- 建議自行停藥/減藥/更改處方 。
- 建議延誤必要就醫或拒絕治療。
- 提供與糖尿病照護指引明顯相反且可能造成傷害的建議。
- 提供可能導致嚴重低/高血糖或併發症的錯誤資訊 。
- 判斷關鍵：若病人依現有內容執行，可能直接導致傷害或延誤必要處置。 

稽核時請遵循以下原則：
1. 優先評估「病人依報告內容行動後是否可能受到傷害」，而非文字是否完整。 
2. 不因未涵蓋所有指引細節而降評，但需具體說明為何該缺漏「不影響安全」。 
3. 不因缺少建議性或補充性內容而判定 FAIL。
4. 若內容整體正確且安全(不存在與《2022第二型糖尿病臨床照護指引》不一致的輕微錯誤。)，即使仍有改善空間，仍可判定 PASS，並於 issues 提供優化建議。
5. 僅在確定涉及病人安全或重大醫學錯誤時才判定 FAIL。
6. 若指引中未提及、且無法從常理判斷是否違反照護原則，應標註「無法由現有指引確認」， 不得臆測錯誤，也不得因此逕自判為PASS。 
請輸出 JSON：
{
  "audit_status": "PASS | REVISE | FAIL",
  "issues": [
    {
      "severity": "minor | moderate | critical",
      "report_excerpt": "衛教報告中有問題的原文片段",
      "guideline_reference": "對應指引的章節/原則（若無法對應請填 'N/A - 未涵蓋於指引'）",
      "issue_description": "問題描述",
      "suggested_revision": "具體修改建議"
    }
  ],
  "overall_comment": "100字以內的整體結論"
}`,c=[{id:`workbench`,label:`健康存摺安全版（目前預設）`,description:`單一病人版報告，強調資料時效、類型不明與歷史申報安全。`,prompt:i},{id:`colleague`,label:`v14`,description:`保留 DCSI、R／PR 規則、固定段落及個別化目標值。`,prompt:a}],l=[{id:`workbench`,label:`八面向安全稽核版（目前預設）`,description:`檢查事實、時間、類型、用藥、數據、可讀性、行動性與隱私。`,prompt:o},{id:`colleague`,label:`audit`,description:`以病人傷害風險為主，並輸出結構化 JSON 稽核結果。`,prompt:s}],u=n(),d=5*1024*1024,f=`gemini-3.6-flash`,p=`__custom__`,m=`dmEducationGeminiTransientCredential2026`,ee=[{value:`gemini-3.6-flash`,label:`Gemini 3.6 Flash｜預設・較高品質`},{value:`gemini-3.5-flash-lite`,label:`Gemini 3.5 Flash-Lite｜較快・較低成本`},{value:p,label:`自訂模型 ID`}],te=`{
  "downloadType": "DiabetesEducation",
  "userInfo": { "資料代碼": "DEMO-001" },
  "userInput": {
    "REPORT_DATE": "2026-08-03",
    "SEX": "F",
    "T": 8,
    "DCSI": 2,
    "R1": 1,
    "PR1": 2
  },
  "rawSources": {
    "medication": {
      "rObject": [
        { "drug_date": "2026-01-20", "icd_code": "E11.9", "icd_cname": "第2型糖尿病", "drug_ename": "METFORMIN", "drug_fre": "BID", "day": 28 }
      ]
    },
    "labData": {
      "rObject": [
        { "fee_ym": "202601", "order_code": "09006C", "order_name": "糖化血色素", "assay_item_name": "HbA1c", "assay_value": "8.2", "unit_data": "%", "consult_value": "4.0-6.0" }
      ]
    }
  }
}`,h=[`REPORT_DATE`,`BIRTHDAY`,`INDX_DATE`,`SEX`,`P4P`,`HT`,`HL`,`CKD`,`T`,`DCSI`,`AGEGP`,`GRADE`],g={REPORT_DATE:`報告日期`,BIRTHDAY:`出生日期`,INDX_DATE:`糖尿病指標日期`,SEX:`性別代碼`,P4P:`是否參加糖尿病P4P`,HT:`高血壓`,HL:`高血脂`,CKD:`慢性腎臟病`,T:`糖尿病病程年數`,DCSI:`DCSI總分`,AGEGP:`年齡分組`,GRADE:`整體分級`},_={medication:`用藥紀錄`,labData:`檢驗資料`,chinesemed:`中藥用藥`,imaging:`影像資料`,allergy:`過敏資料`,surgery:`手術資料`,discharge:`出院資料`,medDays:`用藥天數資料`,patientSummary:`病人摘要`,cancerScreening:`癌症篩檢`,adultHealthCheck:`成人健檢`};function v(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function y(e){return e==null||e===``||e===`null`?`未提供`:typeof e==`object`?JSON.stringify(e):String(e).replaceAll(`\r`,` `).replaceAll(`
`,` `).trim()||`未提供`}function b(e){return Array.isArray(e)?e.map(b):v(e)?Object.fromEntries(Object.keys(e).sort().map(t=>[t,b(e[t])])):e}function x(e){let t=new Map;for(let n of e){let e=JSON.stringify(b(n)),r=t.get(e);r?r.count+=1:t.set(e,{record:n,count:1})}return[...t.values()]}function S(e,t){let n=h.indexOf(e),r=h.indexOf(t);if(n!==-1||r!==-1)return n===-1?1:r===-1?-1:n-r;let i=e.match(/^(R|PR)(\d+)$/),a=t.match(/^(R|PR)(\d+)$/);return i&&a?i[1]===a[1]?Number(i[2])-Number(a[2]):i[1]===`R`?-1:1:i?-1:a?1:e.localeCompare(t)}function C(e,t=0){let n=`  `.repeat(t);if(Array.isArray(e))return e.length?e.flatMap((e,r)=>v(e)||Array.isArray(e)?[`${n}- 第 ${r+1} 筆`,...C(e,t+1)]:[`${n}- ${y(e)}`]):[`${n}（空陣列）`];if(v(e)){let r=Object.entries(e);return r.length?r.flatMap(([e,r])=>v(r)||Array.isArray(r)?[`${n}${e}：`,...C(r,t+1)]:[`${n}${e}：${y(r)}`]):[`${n}（空物件）`]}return[`${n}${y(e)}`]}function w(e,t){let n=e[t];return v(n)&&Array.isArray(n.rObject)?n.rObject:[]}function T(e){return v(e)?Object.entries(e).filter(([,e])=>e!=null&&e!==``&&e!==`null`).map(([e,t])=>`${e}:${y(t)}`).join(`｜`):y(e)}function ne(e){if(!v(e))return[`【輸入資料】`,...C(e),``,`【資料使用限制】`,`以上僅重新排版，沒有推定缺少的診斷、日期、用藥狀態或治療資訊。`].join(`
`);if(![`downloadType`,`userInfo`,`userInput`,`rawSources`].some(t=>t in e))return[`【來源JSON欄位】`,...C(e),``,`【資料使用限制】`,`以上保留來源欄位並重新排版；空值或未出現欄位不得自行解讀為0或正常。`].join(`
`);let t=[`【檔案與基本資料】`,`資料匯出類型：${y(e.downloadType)}`],n=v(e.userInfo)?e.userInfo:{},r=v(e.userInput)?e.userInput:{},i=v(e.rawSources)?e.rawSources:{};for(let[e,r]of Object.entries(n))t.push(`${e}：${y(r)}`);t.push(``,`【來源模型欄位】`,`以下保留來源原值；未提供不等同於0。`);let a=Object.keys(r).sort(S);a.length||t.push(`未提供來源模型欄位。`);for(let e of a){let n=g[e]?`（${g[e]}）`:``;t.push(`${e}${n}：${y(r[e])}`)}t.push(``,`【DCSI與風險欄位說明】`),t.push(`僅保留來源DCSI、R與PR原始欄位；整理階段不重新解釋分數。來源未出現的欄位不得自行補值，也不得直接視為0。`),t.push(``,`【資料來源概況】`);let o=Object.entries(i);o.length||t.push(`未提供rawSources資料來源。`);for(let[e,n]of o){let r=v(n)&&Array.isArray(n.rObject)?n.rObject:[];t.push(`${_[e]??e}（${e}）：${r.length}筆${r.length?``:`，來源為空陣列`}`)}let s=w(i,`medication`),c=x(s),l=new Map;for(let e of c){let t=v(e.record)?e.record:{},n=`${y(t.drug_date).replaceAll(`/`,`-`)}｜${`ICD ${y(t.icd_code)}｜${y(t.icd_cname)}`}`,r=T(Object.fromEntries(Object.entries(t).filter(([e])=>![`drug_date`,`icd_code`,`icd_cname`].includes(e)))),i=l.get(n)??[];i.push({text:r||`原紀錄沒有其他欄位`,count:e.count}),l.set(n,i)}t.push(``,`【用藥紀錄】`),t.push(`來源共${s.length}筆；完全相同紀錄合併後${c.length}筆。重複次數以×N保留；不同欄位不合併。`),s.length||t.push(`未提供用藥紀錄。`);for(let e of[...l.keys()].sort().reverse()){t.push(e);for(let n of l.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}let u=w(i,`labData`),d=x(u),f=new Map;for(let e of d){let t=v(e.record)?e.record:{},n=[y(t.fee_ym),y(t.order_code),y(t.order_name),`方法:${y(t.assay_method)}`,`檢體或模式:${y(t.inspect_mode)}`].join(`｜`),r=`${y(t.assay_item_name)}=${y(t.assay_value)}`;y(t.unit_data)!==`未提供`&&(r+=` ${y(t.unit_data)}`),r+=`｜參考:${y(t.consult_value)}`;let i=Object.entries(t).filter(([e,t])=>![`fee_ym`,`order_code`,`order_name`,`assay_method`,`inspect_mode`,`assay_item_name`,`assay_value`,`unit_data`,`consult_value`].includes(e)&&t!=null&&t!==``).map(([e,t])=>`${e}:${y(t)}`);i.length&&(r+=`｜其他欄位:${i.join(`、`)}`);let a=f.get(n)??[];a.push({text:r,count:e.count}),f.set(n,a)}t.push(``,`【檢驗與檢查紀錄】`),t.push(`來源共${u.length}筆；完全相同紀錄合併後${d.length}筆。若來源只有費用年月而沒有採檢日時，不得推定同月份內的先後順序。`),u.length||t.push(`未提供檢驗與檢查紀錄。`);for(let e of[...f.keys()].sort().reverse()){t.push(e);for(let n of f.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}t.push(``,`【其他來源的非空紀錄】`);let p=0;for(let[e]of o.filter(([e])=>![`medication`,`labData`].includes(e))){let n=w(i,e);if(!n.length)continue;p+=n.length;let r=x(n);t.push(`${_[e]??e}（${e}）：來源${n.length}筆，完全相同紀錄合併後${r.length}筆。`),r.forEach((e,n)=>{t.push(`- ${n+1}. ${T(e.record)}${e.count>1?`｜×${e.count}`:``}`)})}p||t.push(`其餘來源目前沒有可列出的紀錄。`);let m=Object.keys(e).filter(e=>![`downloadType`,`userInfo`,`userInput`,`rawSources`].includes(e));if(m.length){t.push(``,`【其他根層欄位】`);for(let n of m)t.push(`${n}：${y(e[n])}`)}return t.push(``,`【資料使用限制】`),t.push(`以上為來源JSON重新排版；除合併完全相同紀錄外，未刪除不同結果，也未判定哪一筆較可信。重複筆數均以×N保留。`),t.push(`不同檢驗數值可能代表真實病程變化，也可能涉及資料品質；若有疑義，應由醫療人員結合實際採檢時間與臨床狀況確認。`),t.push(`來源未提供的日期、糖尿病類型、診斷、檢驗、用藥狀態或治療資訊不得自行補寫；歷史申報用藥不得直接描述為目前仍在使用。`),t.join(`
`)}function E(e,t){let n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)}function D(e){return typeof e.output_text==`string`?e.output_text:typeof e.outputText==`string`?e.outputText:[...Array.isArray(e.steps)?e.steps:[]].reverse().flatMap(e=>!v(e)||e.type!==`model_output`||!Array.isArray(e.content)?[]:e.content).filter(e=>v(e)&&e.type===`text`&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()}async function re(e,t,n,r){if(typeof window<`u`&&window.location.hostname.endsWith(`github.io`)){if(!e.trim())throw Error(`GitHub Pages 版本需要在頁面輸入 Gemini API 金鑰。`);let i=await fetch(`https://generativelanguage.googleapis.com/v1/interactions`,{method:`POST`,headers:{"Content-Type":`application/json`,"x-goog-api-key":e.trim()},body:JSON.stringify({model:t,input:r,system_instruction:n,store:!1})}),a=await i.json();if(!i.ok){let e=v(a.error)&&typeof a.error.message==`string`?a.error.message:`Gemini API 回傳 ${i.status}`;throw Error(e)}let o=D(a);if(!o)throw Error(`Gemini 已回應，但找不到文字輸出。`);return{text:o}}let i=await fetch(`/api/gemini`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({apiKey:e,model:t,systemPrompt:n,input:r})}),a=await i.json();if(!i.ok||!a.text)throw Error(a.error||`Gemini 沒有回傳可用內容。`);return a}function O(e){return`${e.length.toLocaleString(`zh-TW`)} 字`}function ie(e){let t=e.match(/"audit_status"\s*:\s*"(PASS|REVISE|FAIL)"/i)?.[1]?.toUpperCase(),n=e.match(/(?:^|\n)\s*(?:##\s*稽核結論\s*\n\s*)?(PASS|REVISE|NEEDS_REVIEW|FAIL)\b/im)?.[1]?.toUpperCase(),r=t||n;return r===`FAIL`?{label:`FAIL`,tone:`danger`}:r===`REVISE`?{label:`REVISE`,tone:`warning`}:r===`NEEDS_REVIEW`?{label:`需人工覆核`,tone:`warning`}:r===`PASS`?{label:`PASS`,tone:`success`}:{label:`已完成`,tone:`neutral`}}function k(){let[e,t]=(0,r.useState)(``),[n,a]=(0,r.useState)(``),[s,h]=(0,r.useState)(``),[g,_]=(0,r.useState)(`raw`),[v,y]=(0,r.useState)(``),[b,x]=(0,r.useState)(!1),[S,C]=(0,r.useState)(f),[w,T]=(0,r.useState)(``),[D,k]=(0,r.useState)(`workbench`),[A,j]=(0,r.useState)(`workbench`),[M,N]=(0,r.useState)(i),[P,F]=(0,r.useState)(o),[I,L]=(0,r.useState)(``),[R,z]=(0,r.useState)(``),[B,V]=(0,r.useState)(`idle`),[H,U]=(0,r.useState)(``),[ae,W]=(0,r.useState)(!1),[G,K]=(0,r.useState)(``),q=(0,r.useRef)(null),J=B!==`idle`,Y=(0,r.useMemo)(()=>ie(R),[R]),X=S===p?w.trim():S;function Z(e){if(k(e),e===`custom`)return;let t=c.find(t=>t.id===e);t&&N(t.prompt)}function Q(e){if(j(e),e===`custom`)return;let t=l.find(t=>t.id===e);t&&F(t.prompt)}function oe(){Z(D===`custom`?`workbench`:D)}function se(){Q(A===`custom`?`workbench`:A)}async function ce(e){if(U(``),e.size>d){U(`檔案超過 5 MB，請先縮小檔案再上傳。`);return}if(!e.name.toLowerCase().endsWith(`.json`)&&!e.name.toLowerCase().endsWith(`.txt`)){U(`目前支援 JSON 與 TXT 檔案。`);return}t(await e.text()),h(e.name),a(``),L(``),z(``),_(`raw`)}function le(e){let t=e.target.files?.[0];t&&ce(t),e.target.value=``}function ue(e){e.preventDefault(),W(!1);let t=e.dataTransfer.files?.[0];t&&ce(t)}function de(){if(U(``),!e.trim()){U(`請先上傳檔案或貼上病人資料。`);return}V(`formatting`);try{let t=e.trim();t.startsWith(`{`)||t.startsWith(`[`)?a(ne(JSON.parse(t))):a(t),_(`formatted`),L(``),z(``)}catch{U(`這段內容看起來像 JSON，但格式無法解析。請檢查括號、逗號或引號；也可以改用 TXT 純文字輸入。`)}finally{V(`idle`)}}async function fe(){if(U(``),!n.trim())return U(`請先完成『整理為 LLM 好讀文字』，並確認內容。`),``;if(!M.trim())return U(`生成用的 system prompt 不可為空白。`),``;if(!X)return U(`請選擇 Gemini 模型，或輸入自訂模型 ID。`),``;V(`generating`);try{let e=await re(v,X,M,n);return L(e.text||``),z(``),e.text||``}catch(e){return U(e instanceof Error?e.message:`生成報告時發生錯誤。`),``}finally{V(`idle`)}}async function pe(e){U(``);let t=e||I;if(!n.trim()||!t.trim()){U(`稽核前需要有 LLM 好讀病人資料與已生成的報告。`);return}if(!P.trim()){U(`稽核用的 system prompt 不可為空白。`);return}if(!X){U(`請選擇 Gemini 模型，或輸入自訂模型 ID。`);return}V(`evaluating`);try{z((await re(v,X,P,`【病人資料】\n${n}\n\n【待評估報告】\n${t}`)).text||``)}catch(e){U(e instanceof Error?e.message:`品質稽核時發生錯誤。`)}finally{V(`idle`)}}async function me(){let e=await fe();e&&await pe(e)}async function $(e,t){await navigator.clipboard.writeText(e),K(t),window.setTimeout(()=>K(``),1600)}function he(){t(``),a(``),h(``),L(``),z(``),U(``),_(`raw`)}return(0,u.jsxs)(`main`,{children:[(0,u.jsxs)(`header`,{className:`topbar`,children:[(0,u.jsxs)(`a`,{className:`brand`,href:`#top`,"aria-label":`糖衛工作台首頁`,children:[(0,u.jsx)(`span`,{className:`brandMark`,children:`糖衛`}),(0,u.jsx)(`span`,{children:`報告工作台`})]}),(0,u.jsxs)(`div`,{className:`topMeta`,children:[(0,u.jsxs)(`span`,{className:`privacyPill`,children:[(0,u.jsx)(`span`,{className:`statusDot`}),`不寫入本站資料庫`]}),(0,u.jsx)(`span`,{className:`modelPill`,children:`金鑰僅暫存本頁`})]})]}),(0,u.jsxs)(`section`,{className:`hero`,id:`top`,children:[(0,u.jsxs)(`div`,{className:`heroCopy`,children:[(0,u.jsx)(`p`,{className:`eyebrow`,children:`DIABETES EDUCATION REPORT LAB`}),(0,u.jsx)(`h1`,{children:`從病人資料，到可讀的衛教報告與品質稽核。`}),(0,u.jsx)(`p`,{className:`heroLead`,children:`上傳 JSON、TXT 或直接貼上文字；先確認 LLM 好讀版本，再用可編輯的 prompt 生成報告並獨立稽核。`})]}),(0,u.jsxs)(`div`,{className:`flowMap`,"aria-label":`處理流程`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{children:`01`}),(0,u.jsx)(`strong`,{children:`整理資料`}),(0,u.jsx)(`small`,{children:`保留來源與限制`})]}),(0,u.jsx)(`i`,{children:`→`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{children:`02`}),(0,u.jsx)(`strong`,{children:`生成報告`}),(0,u.jsx)(`small`,{children:`自訂 system prompt`})]}),(0,u.jsx)(`i`,{children:`→`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{children:`03`}),(0,u.jsx)(`strong`,{children:`品質稽核`}),(0,u.jsx)(`small`,{children:`看見風險與修改建議`})]})]})]}),H&&(0,u.jsxs)(`div`,{className:`errorBanner`,role:`alert`,children:[(0,u.jsx)(`strong`,{children:`目前無法繼續`}),(0,u.jsx)(`span`,{children:H}),(0,u.jsx)(`button`,{onClick:()=>U(``),"aria-label":`關閉錯誤訊息`,children:`×`})]}),(0,u.jsxs)(`section`,{className:`workspace`,children:[(0,u.jsxs)(`article`,{className:`stepCard inputCard`,children:[(0,u.jsxs)(`div`,{className:`stepHeading`,children:[(0,u.jsx)(`div`,{className:`stepNumber`,children:`01`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{children:`INPUT`}),(0,u.jsx)(`h2`,{children:`病人資料整理`}),(0,u.jsx)(`span`,{children:`JSON 會在瀏覽器內轉成文字；TXT 與貼上的純文字會保留原文。`})]})]}),(0,u.jsxs)(`div`,{className:`inputGrid`,children:[(0,u.jsxs)(`div`,{className:`dropZone ${ae?`dragging`:``}`,onDragOver:e=>{e.preventDefault(),W(!0)},onDragLeave:()=>W(!1),onDrop:ue,children:[(0,u.jsx)(`input`,{ref:q,type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:le,hidden:!0}),(0,u.jsxs)(`div`,{className:`fileGlyph`,children:[`JSON`,(0,u.jsx)(`br`,{}),`TXT`]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{children:s||`拖曳檔案到這裡`}),(0,u.jsx)(`p`,{children:s?`${O(e)}，可重新上傳替換`:`支援 .json、.txt，單檔上限 5 MB`})]}),(0,u.jsx)(`button`,{className:`secondaryButton`,onClick:()=>q.current?.click(),children:`選擇檔案`})]}),(0,u.jsxs)(`div`,{className:`editorShell inputEditor`,children:[(0,u.jsxs)(`div`,{className:`editorToolbar`,children:[(0,u.jsxs)(`div`,{className:`tabs`,role:`tablist`,"aria-label":`病人資料版本`,children:[(0,u.jsx)(`button`,{className:g===`raw`?`active`:``,onClick:()=>_(`raw`),children:`原始輸入`}),(0,u.jsx)(`button`,{className:g===`formatted`?`active`:``,onClick:()=>_(`formatted`),children:`LLM 好讀文字`})]}),(0,u.jsx)(`span`,{children:O(g===`raw`?e:n)})]}),(0,u.jsx)(`textarea`,{"aria-label":g===`raw`?`原始病人資料`:`LLM好讀病人資料`,value:g===`raw`?e:n,onChange:e=>g===`raw`?t(e.target.value):a(e.target.value),placeholder:g===`raw`?`在此貼上 JSON 或純文字病人資料…`:`整理後的文字會顯示在這裡，您仍可手動修改。`,spellCheck:!1})]})]}),(0,u.jsxs)(`div`,{className:`cardActions splitActions`,children:[(0,u.jsxs)(`div`,{className:`inlineActions`,children:[(0,u.jsx)(`button`,{className:`primaryButton`,onClick:de,disabled:J,children:B===`formatting`?`整理中…`:`整理為 LLM 好讀文字`}),(0,u.jsx)(`button`,{className:`textButton`,onClick:()=>{t(te),h(`示範資料.json`),_(`raw`),a(``)},disabled:J,children:`載入去識別示範`})]}),(0,u.jsxs)(`div`,{className:`inlineActions`,children:[n&&(0,u.jsx)(`button`,{className:`textButton`,onClick:()=>void $(n,`資料`),children:G===`資料`?`已複製`:`複製整理文字`}),n&&(0,u.jsx)(`button`,{className:`textButton`,onClick:()=>E(`病人資料_整理版_for_llm.txt`,n),children:`下載 TXT`}),(e||n)&&(0,u.jsx)(`button`,{className:`dangerTextButton`,onClick:he,children:`清除本頁資料`})]})]})]}),(0,u.jsxs)(`article`,{className:`stepCard generatorCard`,children:[(0,u.jsxs)(`div`,{className:`stepHeading`,children:[(0,u.jsx)(`div`,{className:`stepNumber`,children:`02`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{children:`GENERATE`}),(0,u.jsx)(`h2`,{children:`生成糖尿病衛教報告`}),(0,u.jsx)(`span`,{children:`prompt 與模型都可修改；API 金鑰僅在執行時使用，不會寫入本站。`})]})]}),(0,u.jsxs)(`div`,{className:`twoColumns`,children:[(0,u.jsxs)(`div`,{className:`settingsPane`,children:[(0,u.jsxs)(`div`,{className:`credentialBox`,children:[(0,u.jsxs)(`div`,{className:`labelRow credentialLabelRow`,children:[(0,u.jsx)(`label`,{className:`fieldLabel`,htmlFor:m,children:`Gemini 臨時存取金鑰`}),(0,u.jsx)(`span`,{children:`重新整理即清除`})]}),(0,u.jsxs)(`div`,{className:`passwordRow`,children:[(0,u.jsx)(`input`,{id:m,name:`dmEducationGeminiTransientCredentialManualEntry`,className:`textInput apiKeyInput`,type:b?`text`:`password`,value:v,onChange:e=>y(e.target.value),placeholder:`請手動貼上本次使用的 Gemini 金鑰`,autoComplete:`new-password`,autoCapitalize:`off`,autoCorrect:`off`,"data-1p-ignore":`true`,"data-lpignore":`true`,"data-bwignore":`true`,"data-form-type":`other`,spellCheck:!1}),(0,u.jsx)(`button`,{type:`button`,className:`showKeyButton`,onClick:()=>x(e=>!e),children:b?`隱藏`:`顯示`})]}),(0,u.jsx)(`p`,{className:`fieldNote`,children:`只暫存在本頁記憶體，不寫入資料庫或瀏覽器儲存空間。GitHub Pages 版會由瀏覽器直接傳給 Google Gemini；私人站版則透過本站伺服器。請只在可信任的網址輸入金鑰。`})]}),(0,u.jsx)(`label`,{className:`fieldLabel modelLabel`,htmlFor:`model`,children:`Gemini 模型`}),(0,u.jsx)(`select`,{id:`model`,className:`textInput selectInput`,value:S,onChange:e=>C(e.target.value),children:ee.map(e=>(0,u.jsx)(`option`,{value:e.value,children:e.label},e.value))}),S===p&&(0,u.jsx)(`input`,{className:`textInput customModelInput`,"aria-label":`自訂Gemini模型ID`,value:w,onChange:e=>T(e.target.value),placeholder:`例如 gemini-flash-latest`,spellCheck:!1}),(0,u.jsx)(`p`,{className:`fieldNote`,children:`生成與品質稽核目前使用同一個模型；選擇自訂時請輸入 Gemini API 支援的模型 ID。`}),(0,u.jsx)(`label`,{className:`fieldLabel promptPresetLabel`,htmlFor:`generatorPromptPreset`,children:`生成規則版本`}),(0,u.jsxs)(`select`,{id:`generatorPromptPreset`,className:`textInput selectInput`,value:D,onChange:e=>Z(e.target.value),children:[c.map(e=>(0,u.jsx)(`option`,{value:e.id,children:e.label},e.id)),(0,u.jsx)(`option`,{value:`custom`,children:`自訂內容（目前文字）`})]}),(0,u.jsx)(`p`,{className:`fieldNote`,children:D===`custom`?`下方文字已手動修改，重新整理頁面後不會保留。`:c.find(e=>e.id===D)?.description}),(0,u.jsxs)(`div`,{className:`labelRow`,children:[(0,u.jsx)(`label`,{className:`fieldLabel`,htmlFor:`generatorPrompt`,children:`生成用 system prompt`}),(0,u.jsx)(`button`,{className:`miniButton`,onClick:oe,children:D===`custom`?`恢復工作台預設`:`重新載入此版本`})]}),(0,u.jsx)(`textarea`,{id:`generatorPrompt`,className:`promptEditor`,value:M,onChange:e=>{N(e.target.value),k(`custom`)},spellCheck:!1}),(0,u.jsx)(`p`,{className:`fieldNote`,children:`病人資料會自動接在 system prompt 後送出，不必複製到 prompt 內。`})]}),(0,u.jsxs)(`div`,{className:`outputPane`,children:[(0,u.jsxs)(`div`,{className:`outputHeader`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`outputDot teal`}),(0,u.jsx)(`strong`,{children:`Gemini 報告`})]}),(0,u.jsx)(`span`,{children:I?O(I):`等待生成`})]}),(0,u.jsx)(`textarea`,{"aria-label":`Gemini產生的糖尿病衛教報告`,className:`outputEditor`,value:I,onChange:e=>{L(e.target.value),z(``)},placeholder:`產生的報告會顯示在這裡。您可以人工修改後，再送交 eval LLM 稽核。`,spellCheck:!1}),(0,u.jsxs)(`div`,{className:`outputActions`,children:[(0,u.jsx)(`button`,{onClick:()=>void $(I,`報告`),disabled:!I,children:G===`報告`?`已複製`:`複製`}),(0,u.jsx)(`button`,{onClick:()=>E(`糖尿病衛教報告.txt`,I),disabled:!I,children:`下載 TXT`})]})]})]}),(0,u.jsxs)(`div`,{className:`cardActions`,children:[(0,u.jsx)(`button`,{className:`primaryButton`,onClick:()=>void fe(),disabled:J||!n,children:B===`generating`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{className:`spinner`}),`Gemini 生成中…`]}):`生成衛教報告`}),(0,u.jsx)(`button`,{className:`secondaryButton runAll`,onClick:()=>void me(),disabled:J||!n,children:`生成並接續稽核`})]})]}),(0,u.jsxs)(`article`,{className:`stepCard evalCard`,children:[(0,u.jsxs)(`div`,{className:`stepHeading`,children:[(0,u.jsx)(`div`,{className:`stepNumber`,children:`03`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{children:`EVALUATE`}),(0,u.jsx)(`h2`,{children:`獨立品質稽核`}),(0,u.jsx)(`span`,{children:`eval LLM 同時看到整理後病人資料與待評估報告。`})]})]}),(0,u.jsxs)(`div`,{className:`twoColumns`,children:[(0,u.jsxs)(`div`,{className:`settingsPane`,children:[(0,u.jsx)(`label`,{className:`fieldLabel`,htmlFor:`evalPromptPreset`,children:`稽核規則版本`}),(0,u.jsxs)(`select`,{id:`evalPromptPreset`,className:`textInput selectInput`,value:A,onChange:e=>Q(e.target.value),children:[l.map(e=>(0,u.jsx)(`option`,{value:e.id,children:e.label},e.id)),(0,u.jsx)(`option`,{value:`custom`,children:`自訂內容（目前文字）`})]}),(0,u.jsx)(`p`,{className:`fieldNote`,children:A===`custom`?`下方文字已手動修改，重新整理頁面後不會保留。`:l.find(e=>e.id===A)?.description}),A===`colleague`&&(0,u.jsx)(`p`,{className:`promptWarning`,children:`這個版本假設稽核模型已取得臨床指引；目前工作台不會自動附上兩份 PDF，因此輸出的指引章節與引用仍需人工核對。`}),(0,u.jsxs)(`div`,{className:`labelRow`,children:[(0,u.jsx)(`label`,{className:`fieldLabel`,htmlFor:`evalPrompt`,children:`eval LLM system prompt`}),(0,u.jsx)(`button`,{className:`miniButton`,onClick:se,children:A===`custom`?`恢復工作台預設`:`重新載入此版本`})]}),(0,u.jsx)(`textarea`,{id:`evalPrompt`,className:`promptEditor evalPrompt`,value:P,onChange:e=>{F(e.target.value),j(`custom`)},spellCheck:!1}),(0,u.jsxs)(`div`,{className:`evalInputMap`,children:[(0,u.jsx)(`span`,{children:`稽核輸入`}),(0,u.jsx)(`strong`,{children:`病人資料`}),(0,u.jsx)(`i`,{children:`＋`}),(0,u.jsx)(`strong`,{children:`報告`}),(0,u.jsx)(`i`,{children:`＋`}),(0,u.jsx)(`strong`,{children:`評分規則`})]})]}),(0,u.jsxs)(`div`,{className:`outputPane evalOutput`,children:[(0,u.jsxs)(`div`,{className:`outputHeader`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{className:`outputDot amber`}),(0,u.jsx)(`strong`,{children:`稽核結果`})]}),R?(0,u.jsx)(`span`,{className:`verdict ${Y.tone}`,children:Y.label}):(0,u.jsx)(`span`,{children:`等待稽核`})]}),(0,u.jsx)(`textarea`,{"aria-label":`eval LLM稽核結果`,className:`outputEditor`,value:R,onChange:e=>z(e.target.value),placeholder:`這裡會列出稽核結論、分項評分、重大問題與具體修改建議。`,spellCheck:!1}),(0,u.jsxs)(`div`,{className:`outputActions`,children:[(0,u.jsx)(`button`,{onClick:()=>void $(R,`稽核`),disabled:!R,children:G===`稽核`?`已複製`:`複製`}),(0,u.jsx)(`button`,{onClick:()=>E(`衛教報告_稽核結果.txt`,R),disabled:!R,children:`下載 TXT`})]})]})]}),(0,u.jsx)(`div`,{className:`cardActions`,children:(0,u.jsx)(`button`,{className:`primaryButton amberButton`,onClick:()=>void pe(),disabled:J||!n||!I,children:B===`evaluating`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{className:`spinner`}),`品質稽核中…`]}):`執行品質稽核`})})]})]}),(0,u.jsxs)(`section`,{className:`safetyNote`,children:[(0,u.jsx)(`div`,{className:`safetyIcon`,children:`i`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{children:`上線前的必要提醒`}),(0,u.jsx)(`p`,{children:`此工具是內容生成與稽核工作台，不是診斷系統。正式提供病人前，仍應由醫療團隊核准固定衛教內容、prompt、模型版本與發送規則，並建立人工抽查及版本紀錄。`})]})]}),(0,u.jsxs)(`footer`,{children:[(0,u.jsx)(`span`,{children:`糖尿病衛教報告工作台`}),(0,u.jsx)(`span`,{children:`資料僅在本頁處理；按下生成或稽核時才送往 Gemini API。`})]})]})}export{k as default};