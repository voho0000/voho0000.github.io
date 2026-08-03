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
}`,c=[{id:`workbench`,label:`健康存摺安全版（目前預設）`,description:`單一病人版報告，強調資料時效、類型不明與歷史申報安全。`,prompt:i},{id:`colleague`,label:`v14`,description:`保留 DCSI、R／PR 規則、固定段落及個別化目標值。`,prompt:a}],l=[{id:`workbench`,label:`八面向安全稽核版（目前預設）`,description:`檢查事實、時間、類型、用藥、數據、可讀性、行動性與隱私。`,prompt:o},{id:`colleague`,label:`audit`,description:`以病人傷害風險為主，並輸出結構化 JSON 稽核結果。`,prompt:s}],u=`20260803155337`,ee=[{id:`A`,label:`A｜現行流程・不帶入指引`,description:`生成 LLM 收到 system prompt 與病人資料；不附指引全文。`,usesGuideline:!1,llmWritesPatientText:!0},{id:`B`,label:`B｜現行流程・帶入指引全文`,description:`生成與稽核都額外附上整份《2022第2型糖尿病臨床照護指引》。需先載入指引 TXT。`,usesGuideline:!0,llmWritesPatientText:!0},{id:`C`,label:`C｜模組選擇流程（草案・未經醫療團隊核准）`,description:`LLM 只依病人資料輸出模組代碼與選取理由；病人可見正文由程式以固定文字組合，LLM 不改寫、不補數值。`,usesGuideline:!1,llmWritesPatientText:!1}];function d(e){let t=ee.find(t=>t.id===e);if(!t)throw Error(`未知的流程 arm：${e}`);return t}function f(e){if(e.totalTokens<=e.tokenLimit)return null;let t=e.totalTokens-e.tokenLimit;return{code:`token-limit`,message:`估計輸入約 ${e.totalTokens.toLocaleString(`zh-TW`)} tokens，超過模型上限 ${e.tokenLimit.toLocaleString(`zh-TW`)} tokens 約 ${t.toLocaleString(`zh-TW`)} tokens。`,howToFix:`本工具不會自動截斷指引或病人資料。請改選不帶入指引的 A，或改用輸入上限更大的模型。`,hard:!0}}function p(e){let t=[];return e.model||t.push({code:`no-model`,message:`還沒選定 Gemini 模型。`,howToFix:`請在模型下拉選單選擇，或在自訂欄位輸入完整的模型 ID。`,hard:!0}),e.requiresClientKey&&!e.apiKey.trim()&&t.push({code:`no-api-key`,message:`這個版本沒有伺服器可以代為保管金鑰，必須在頁面輸入 Gemini 金鑰。`,howToFix:`請在上方「Gemini 臨時存取金鑰」貼上金鑰。重新整理頁面即清除，不會寫入任何儲存空間。`,hard:!0}),e.arm===`B`&&!e.guidelineText.trim()&&t.push({code:`guideline-missing`,message:`已選 B（帶入指引全文），但目前沒有載入任何指引 TXT。`,howToFix:`請先按「載入指引 TXT」選擇完整的指引檔案；否則請改選 A，以免以為帶入了其實沒有。`,hard:!0}),t}function m(e){let t=[];e.llmText.trim()||t.push(e.rawInput.trim()?{code:`not-formatted`,message:`已經有原始病人資料，但還沒整理成 LLM 好讀文字。`,howToFix:`請按上方步驟 01 的「整理為 LLM 好讀文字」。更換病人檔案後也需要重新整理一次。`,hard:!0}:{code:`no-patient-data`,message:`還沒有病人資料。`,howToFix:`請在步驟 01 上傳 JSON／TXT、貼上文字，或按「載入去識別示範」，再按「整理為 LLM 好讀文字」。`,hard:!0}),e.arm!==`C`&&!e.generatorPrompt.trim()&&t.push({code:`empty-generator-prompt`,message:`生成用的 system prompt 是空白的。`,howToFix:`請在下方貼上 prompt，或按「恢復工作台預設」載回預設版本。`,hard:!0}),t.push(...p(e));let n=f(e);return n&&t.push(n),t}function te(e){let t=[];e.llmText.trim()||t.push({code:`no-patient-data`,message:`稽核需要 LLM 好讀病人資料，目前是空的。`,howToFix:`請先完成步驟 01 的整理。`,hard:!0}),e.report.trim()||t.push({code:`no-report`,message:`還沒有可稽核的報告。`,howToFix:`請先執行「生成衛教報告」，或直接把要稽核的報告貼進報告欄位。`,hard:!0}),e.evalPrompt.trim()||t.push({code:`empty-eval-prompt`,message:`稽核用的 system prompt 是空白的。`,howToFix:`請在下方貼上 prompt，或按「恢復工作台預設」載回預設版本。`,hard:!0}),t.push(...p(e));let n=f(e);return n&&t.push(n),t}function h(e){return e.some(e=>e.hard)}var ne=652078,re=283353,ie=1048576;function g(e){return e>=19968&&e<=40959||e>=13312&&e<=19903||e>=63744&&e<=64255||e>=12288&&e<=12351||e>=65280&&e<=65519}function _(e){let t=0,n=0,r=0,i=0,a=0;for(let o of e){a+=1;let e=o.codePointAt(0)??0;g(e)?t+=1:e<128?o===` `||o===`	`||o===`
`||o===`\r`||o===`\f`||o===`\v`?r+=1:n+=1:i+=1}return{total:a,cjk:t,asciiVisible:n,whitespace:r,other:i}}function ae(e){if(!e)return 0;let{cjk:t,asciiVisible:n,whitespace:r,other:i}=_(e);return Math.round(t+n/4+r/5+i/2)}function oe(e){return e?[...e].length===652078?{tokens:re,method:`measured`}:{tokens:ae(e),method:`estimate`}:{tokens:0,method:`estimate`}}function se(e){return[...e].length}function v(e){return e.toLocaleString(`zh-TW`)}var ce=`【參考指引全文：2022第2型糖尿病臨床照護指引】`;function le(e,t,n){let r=n??{tokens:ae(t),method:`estimate`};return{label:e,chars:se(t),tokens:r.tokens,method:r.method}}function y(e,t,n){let r=n.text??``,i=r.trim().length>0,a=n.include&&i,o=t.map(e=>e.text),s=a?`${o.join(`

`)}\n\n${ce}\n${r}`:o.join(`

`),c=[le(`system prompt`,e),...t.map(e=>le(e.label,e.text,e.count))];return a&&c.push(le(`指引全文`,r,oe(r))),{text:s,systemPrompt:e,parts:c,totalChars:c.reduce((e,t)=>e+t.chars,0),totalTokens:c.reduce((e,t)=>e+t.tokens,0),hasEstimate:c.some(e=>e.method===`estimate`),guidelineIncluded:a,guidelineRequestedButMissing:n.include&&!i}}function ue(e){return y(e.systemPrompt,[{label:`病人資料`,text:e.patientText}],{include:e.includeGuideline,text:e.guidelineText})}function de(e){return y(e.systemPrompt,[{label:`病人資料`,text:`【病人資料】\n${e.patientText}`},{label:`待評估報告`,text:`【待評估報告】\n${e.report}`}],{include:e.includeGuideline,text:e.guidelineText})}function fe(e){return y(e.systemPrompt,[{label:`病人事實摘要`,text:e.factsText}],{include:!1,text:``})}var pe=[`REPORT_DATE`,`BIRTHDAY`,`INDX_DATE`,`SEX`,`P4P`,`HT`,`HL`,`CKD`,`T`,`DCSI`,`AGEGP`,`GRADE`],me={REPORT_DATE:`報告日期`,BIRTHDAY:`出生日期`,INDX_DATE:`糖尿病指標日期`,SEX:`性別代碼`,P4P:`是否參加糖尿病P4P`,HT:`高血壓`,HL:`高血脂`,CKD:`慢性腎臟病`,T:`糖尿病病程年數`,DCSI:`DCSI總分`,AGEGP:`年齡分組`,GRADE:`整體分級`},he={medication:`用藥紀錄`,labData:`檢驗資料`,chinesemed:`中藥用藥`,imaging:`影像資料`,allergy:`過敏資料`,surgery:`手術資料`,discharge:`出院資料`,medDays:`用藥天數資料`,patientSummary:`病人摘要`,cancerScreening:`癌症篩檢`,adultHealthCheck:`成人健檢`};function b(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function x(e){return e==null||e===``||e===`null`?`未提供`:typeof e==`object`?JSON.stringify(e):String(e).replaceAll(`\r`,` `).replaceAll(`
`,` `).trim()||`未提供`}function S(e){return Array.isArray(e)?e.map(S):b(e)?Object.fromEntries(Object.keys(e).sort().map(t=>[t,S(e[t])])):e}function ge(e){let t=new Map;for(let n of e){let e=JSON.stringify(S(n)),r=t.get(e);r?r.count+=1:t.set(e,{record:n,count:1})}return[...t.values()]}function C(e,t){let n=pe.indexOf(e),r=pe.indexOf(t);if(n!==-1||r!==-1)return n===-1?1:r===-1?-1:n-r;let i=e.match(/^(R|PR)(\d+)$/),a=t.match(/^(R|PR)(\d+)$/);return i&&a?i[1]===a[1]?Number(i[2])-Number(a[2]):i[1]===`R`?-1:1:i?-1:a?1:e.localeCompare(t)}function w(e,t=0){let n=`  `.repeat(t);if(Array.isArray(e))return e.length?e.flatMap((e,r)=>b(e)||Array.isArray(e)?[`${n}- 第 ${r+1} 筆`,...w(e,t+1)]:[`${n}- ${x(e)}`]):[`${n}（空陣列）`];if(b(e)){let r=Object.entries(e);return r.length?r.flatMap(([e,r])=>b(r)||Array.isArray(r)?[`${n}${e}：`,...w(r,t+1)]:[`${n}${e}：${x(r)}`]):[`${n}（空物件）`]}return[`${n}${x(e)}`]}function T(e,t){let n=e[t];return b(n)&&Array.isArray(n.rObject)?n.rObject:[]}function _e(e){return b(e)?Object.entries(e).filter(([,e])=>e!=null&&e!==``&&e!==`null`).map(([e,t])=>`${e}:${x(t)}`).join(`｜`):x(e)}function ve(e){if(!b(e))return[`【輸入資料】`,...w(e),``,`【資料使用限制】`,`以上僅重新排版，沒有推定缺少的診斷、日期、用藥狀態或治療資訊。`].join(`
`);if(![`downloadType`,`userInfo`,`userInput`,`rawSources`].some(t=>t in e))return[`【來源JSON欄位】`,...w(e),``,`【資料使用限制】`,`以上保留來源欄位並重新排版；空值或未出現欄位不得自行解讀為0或正常。`].join(`
`);let t=[`【檔案與基本資料】`,`資料匯出類型：${x(e.downloadType)}`],n=b(e.userInfo)?e.userInfo:{},r=b(e.userInput)?e.userInput:{},i=b(e.rawSources)?e.rawSources:{};for(let[e,r]of Object.entries(n))t.push(`${e}：${x(r)}`);t.push(``,`【來源模型欄位】`,`以下保留來源原值；未提供不等同於0。`);let a=Object.keys(r).sort(C);a.length||t.push(`未提供來源模型欄位。`);for(let e of a){let n=me[e]?`（${me[e]}）`:``;t.push(`${e}${n}：${x(r[e])}`)}t.push(``,`【DCSI與風險欄位說明】`),t.push(`僅保留來源DCSI、R與PR原始欄位；整理階段不重新解釋分數。來源未出現的欄位不得自行補值，也不得直接視為0。`),t.push(``,`【資料來源概況】`);let o=Object.entries(i);o.length||t.push(`未提供rawSources資料來源。`);for(let[e,n]of o){let r=b(n)&&Array.isArray(n.rObject)?n.rObject:[];t.push(`${he[e]??e}（${e}）：${r.length}筆${r.length?``:`，來源為空陣列`}`)}let s=T(i,`medication`),c=ge(s),l=new Map;for(let e of c){let t=b(e.record)?e.record:{},n=`${x(t.drug_date).replaceAll(`/`,`-`)}｜${`ICD ${x(t.icd_code)}｜${x(t.icd_cname)}`}`,r=_e(Object.fromEntries(Object.entries(t).filter(([e])=>![`drug_date`,`icd_code`,`icd_cname`].includes(e)))),i=l.get(n)??[];i.push({text:r||`原紀錄沒有其他欄位`,count:e.count}),l.set(n,i)}t.push(``,`【用藥紀錄】`),t.push(`來源共${s.length}筆；完全相同紀錄合併後${c.length}筆。重複次數以×N保留；不同欄位不合併。`),s.length||t.push(`未提供用藥紀錄。`);for(let e of[...l.keys()].sort().reverse()){t.push(e);for(let n of l.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}let u=T(i,`labData`),ee=ge(u),d=new Map;for(let e of ee){let t=b(e.record)?e.record:{},n=[x(t.fee_ym),x(t.order_code),x(t.order_name),`方法:${x(t.assay_method)}`,`檢體或模式:${x(t.inspect_mode)}`].join(`｜`),r=`${x(t.assay_item_name)}=${x(t.assay_value)}`;x(t.unit_data)!==`未提供`&&(r+=` ${x(t.unit_data)}`),r+=`｜參考:${x(t.consult_value)}`;let i=Object.entries(t).filter(([e,t])=>![`fee_ym`,`order_code`,`order_name`,`assay_method`,`inspect_mode`,`assay_item_name`,`assay_value`,`unit_data`,`consult_value`].includes(e)&&t!=null&&t!==``).map(([e,t])=>`${e}:${x(t)}`);i.length&&(r+=`｜其他欄位:${i.join(`、`)}`);let a=d.get(n)??[];a.push({text:r,count:e.count}),d.set(n,a)}t.push(``,`【檢驗與檢查紀錄】`),t.push(`來源共${u.length}筆；完全相同紀錄合併後${ee.length}筆。若來源只有費用年月而沒有採檢日時，不得推定同月份內的先後順序。`),u.length||t.push(`未提供檢驗與檢查紀錄。`);for(let e of[...d.keys()].sort().reverse()){t.push(e);for(let n of d.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}t.push(``,`【其他來源的非空紀錄】`);let f=0;for(let[e]of o.filter(([e])=>![`medication`,`labData`].includes(e))){let n=T(i,e);if(!n.length)continue;f+=n.length;let r=ge(n);t.push(`${he[e]??e}（${e}）：來源${n.length}筆，完全相同紀錄合併後${r.length}筆。`),r.forEach((e,n)=>{t.push(`- ${n+1}. ${_e(e.record)}${e.count>1?`｜×${e.count}`:``}`)})}f||t.push(`其餘來源目前沒有可列出的紀錄。`);let p=Object.keys(e).filter(e=>![`downloadType`,`userInfo`,`userInput`,`rawSources`].includes(e));if(p.length){t.push(``,`【其他根層欄位】`);for(let n of p)t.push(`${n}：${x(e[n])}`)}return t.push(``,`【資料使用限制】`),t.push(`以上為來源JSON重新排版；除合併完全相同紀錄外，未刪除不同結果，也未判定哪一筆較可信。重複筆數均以×N保留。`),t.push(`不同檢驗數值可能代表真實病程變化，也可能涉及資料品質；若有疑義，應由醫療人員結合實際採檢時間與臨床狀況確認。`),t.push(`來源未提供的日期、糖尿病類型、診斷、檢驗、用藥狀態或治療資訊不得自行補寫；歷史申報用藥不得直接描述為目前仍在使用。`),t.join(`
`)}var E=300;function ye(e,t=E){let n=e.replace(/\s+/g,` `).trim();return n.length<=t?n:`${n.slice(0,t)}…（原始回應共 ${n.length} 字，此處僅顯示前 ${t} 字）`}function be(e,t){let n=t.toLowerCase();return e===400&&(n.includes(`api key not valid`)||n.includes(`api_key_invalid`))?{title:`Gemini 不接受這把 API 金鑰（HTTP 400）`,advice:`請確認貼上的是完整、未過期的金鑰，且該金鑰已啟用 Generative Language API。重新貼一次時注意不要含到前後空白。`}:e===400?{title:`Gemini 認為這次請求的內容或參數有問題（HTTP 400）`,advice:`常見原因是模型 ID 不支援目前的請求格式，或輸入內容含有無法處理的欄位。請對照下方原始錯誤，先試著改用預設模型。`}:e===401||e===403?{title:`這把金鑰沒有呼叫此模型的權限（HTTP `+e+`）`,advice:`請確認金鑰所屬專案已啟用 Generative Language API、未被限制來源網域，且帳單設定允許使用這個模型。`}:e===404?{title:`找不到這個模型 ID（HTTP 404）`,advice:`請確認模型名稱拼寫正確且你的金鑰有權存取。可先切回預設的 gemini-3.6-flash 確認流程本身正常。`}:e===413?{title:`請求內容過大，被拒絕（HTTP 413）`,advice:`這通常發生在帶入指引全文（B）時。請確認是否真的需要整份指引；本工具不會自動截斷指引，需要縮減請由你決定。`}:e===429?{title:`超過配額或速率上限（HTTP 429）`,advice:`免費層級對大型輸入特別容易觸發。請稍候再試、改用較小的輸入（例如改跑 A），或換一把有額度的金鑰。`}:e===408||e===504||e===524||e===522?{title:`請求逾時（HTTP ${e}）`,advice:`帶入指引全文時輸入約 283,353 tokens，單次回應可能需要數分鐘，中間的代理層可能先行斷線。可改跑 A 確認流程正常，或改用回應較快的模型。`}:e===499?{title:`連線在回應完成前被中斷（HTTP 499）`,advice:`多半是瀏覽器或中間代理層提前關閉連線。若是在 B 模式發生，請視為逾時處理。`}:e>=500?{title:`Gemini 端暫時性錯誤（HTTP ${e}）`,advice:`這不是你的輸入造成的。請稍候重試；若持續發生，改用另一個模型或稍後再跑。`}:{title:`Gemini 回傳 HTTP ${e}`,advice:`請參考下方原始錯誤內容判斷原因。`}}function xe(e){let t=e.trim();return t&&t.toLowerCase()!==`unknown`?t:``}function D(e){let{status:t=null,apiMessage:n=``,rawBody:r=``,cause:i,timedOut:a=!1}=e,o=xe(e.statusText??``);if(i instanceof Error&&i.name===`AbortError`&&!a)return{title:`已依你的要求停止這次請求`,advice:`沒有送出任何後續請求；你可以調整設定後重新執行。`,raw:``,status:null,aborted:!0,timedOut:!1};if(a||i instanceof Error&&i.name===`TimeoutError`)return{title:`等待 Gemini 回應超過設定的時間上限`,advice:`帶入指引全文時輸入約 283,353 tokens，回應時間會明顯拉長。可以延長逾時上限、改跑 A 對照，或改用較快的模型。請求已中止，沒有部分結果。`,raw:i instanceof Error?i.message:``,status:null,aborted:!1,timedOut:!0};if(i instanceof TypeError)return{title:`瀏覽器無法送出這次請求（網路層失敗）`,advice:`常見原因：網路中斷、瀏覽器擴充功能或企業代理封鎖了對 Gemini 的請求、或 CORS 被擋。請開瀏覽器主控台看是否有被封鎖的紀錄，並試著關閉擴充功能後重試。`,raw:i.message,status:null,aborted:!1,timedOut:!1};if(t===null)return{title:`請求失敗`,advice:`請參考下方原始錯誤內容。`,raw:i instanceof Error?i.message:String(i??``),status:null,aborted:!1,timedOut:!1};if(!n&&r){let e=/^\s*<(?:!doctype|html)/i.test(r),n=be(t,r);return{title:e?`回應不是 Gemini 的 JSON，而是一頁 HTML（HTTP ${t}${o?` ${o}`:``}）`:n.title,advice:e?`這代表請求沒有走到 Gemini，或在中途被代理層攔下並改回錯誤頁。${n.advice}`:n.advice,raw:ye(r),status:t,aborted:!1,timedOut:!1}}let s=be(t,n);return{title:s.title,advice:s.advice,raw:n?ye(n):``,status:t,aborted:!1,timedOut:!1}}var Se=`https://generativelanguage.googleapis.com/v1/interactions`;function O(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}async function k(e){let t=await e.text(),n=null;try{let e=JSON.parse(t);O(e)&&(n=e)}catch{n=null}return{ok:e.ok,status:e.status,statusText:e.statusText,json:n,rawBody:t}}function Ce(e){return typeof e.output_text==`string`?e.output_text:typeof e.outputText==`string`?e.outputText:[...Array.isArray(e.steps)?e.steps:[]].reverse().flatMap(e=>!O(e)||e.type!==`model_output`||!Array.isArray(e.content)?[]:e.content).filter(e=>O(e)&&e.type===`text`&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()||(Array.isArray(e.outputs)?e.outputs:[]).flatMap(e=>O(e)&&Array.isArray(e.content)?e.content:[]).filter(e=>O(e)&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()||(Array.isArray(e.candidates)?e.candidates:[]).flatMap(e=>{if(!O(e))return[];let t=e.content;return O(t)&&Array.isArray(t.parts)?t.parts:[]}).filter(e=>O(e)&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()}function A(e){if(!e)return``;let t=e.error;return O(t)&&typeof t.message==`string`?t.message:typeof e.error==`string`?e.error:``}function j(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(new DOMException(`timeout`,`TimeoutError`)),t);return{signal:AbortSignal.any([e,n.signal]),timedOut:()=>n.signal.aborted,cleanup:()=>clearTimeout(r)}}var M=class extends Error{constructor(e){super(e.title),this.name=`GeminiRequestError`,this.failure=e}};async function we(e){let{apiKey:t,model:n,systemPrompt:r,input:i,signal:a,direct:o,simulate:s}=e,c=j(a,e.timeoutMs??9e5),l=Date.now();try{if(o&&!t.trim())throw new M(D({status:null,apiMessage:`這個版本需要在頁面輸入 Gemini API 金鑰。`}));let e=await k(o?await fetch(Se,{method:`POST`,signal:c.signal,headers:{"Content-Type":`application/json`,"x-goog-api-key":t.trim()},body:JSON.stringify({model:n,input:i,system_instruction:r,store:!1})}):await fetch(`/api/gemini`,{method:`POST`,signal:c.signal,headers:{"Content-Type":`application/json`},body:JSON.stringify({apiKey:t,model:n,systemPrompt:r,input:i})}));if(!e.ok)throw new M(D({status:e.status,statusText:e.statusText,apiMessage:A(e.json),rawBody:e.json?``:e.rawBody}));if(!e.json)throw new M(D({status:e.status,statusText:e.statusText,rawBody:e.rawBody}));let a=o?Ce(e.json):String(e.json.text??``);if(!a.trim())throw new M(D({status:e.status,apiMessage:A(e.json)||`Gemini 已回應，但回應中找不到文字輸出。`,rawBody:e.json?``:e.rawBody}));return{text:a,usage:O(e.json.usage)?e.json.usage:O(e.json.usage_metadata)?e.json.usage_metadata:null,elapsedMs:Date.now()-l}}catch(e){throw e instanceof M?e:new M(D({cause:e,timedOut:c.timedOut()}))}finally{c.cleanup()}}async function Te(e){let{apiKey:t,model:n,text:r,direct:i,signal:a}=e,o=i?`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}:countTokens`:`/api/gemini/count-tokens`,s=await k(i?await fetch(o,{method:`POST`,signal:a,headers:{"Content-Type":`application/json`,"x-goog-api-key":t.trim()},body:JSON.stringify({contents:[{parts:[{text:r}]}]})}):await fetch(o,{method:`POST`,signal:a,headers:{"Content-Type":`application/json`},body:JSON.stringify({apiKey:t,model:n,text:r})}));if(!s.ok||!s.json)throw new M(D({status:s.status,statusText:s.statusText,apiMessage:A(s.json),rawBody:s.json?``:s.rawBody}));let c=s.json.totalTokens??s.json.total_tokens??s.json.tokens,l=Number(c);if(!Number.isFinite(l))throw new M(D({status:s.status,apiMessage:`countTokens 回應中沒有 totalTokens。`}));return l}var Ee=`draft-0.1`,N=[{id:`BASE-01`,topic:`BASE`,title:`資料時效與使用範圍`,appliesWhen:`每份報告固定顯示，由程式自動加入，LLM 不需選取。`,typeGate:`any`,autoOnly:!0,patientText:`關於這份報告

這份內容是依報告產生當時可取得的既往健康資料整理，不會隨您之後的檢查、症狀或用藥變化自動更新。請先查看本報告的「資料截至日期」；如果您最近的健康狀況已有改變，請以最新檢查結果及醫療團隊的評估為準。

本報告用來幫助您準備自我照護與回診時要確認的問題，不能取代診斷或處方。請勿只依本報告自行停藥、換藥、增減藥量或改變胰島素劑量。`},{id:`BASE-02`,topic:`BASE`,title:`共用足部照護`,appliesWhen:`選到 NERVE-CORE 或 LEG-CIRCULATION-CORE 任一時由程式自動加入，只加入一次。LLM 不需選取。`,typeGate:`any`,autoOnly:!0,patientText:`每天花一分鐘照顧雙腳

1. 每天查看腳背、腳底、腳趾縫與腳跟。看不到腳底時，可使用鏡子或請家人協助。
2. 留意水泡、破皮、裂傷、紅腫、變色、滲液、異味、厚繭或指甲周圍發炎。
3. 每天以溫水清潔並擦乾，尤其要擦乾腳趾縫。水溫先用手肘確認，不要用熱水袋、電毯或暖暖包直接熱敷足部。
4. 不赤腳走路，也不要只穿襪子或薄底拖鞋行走。穿鞋前先摸摸鞋內是否有砂石、破損或凸起物，並選擇合腳、不磨腳的鞋襪。
5. 不要自行剪除厚繭、雞眼，也不要在傷口上使用來路不明的藥膏或偏方。

若發現傷口、紅腫、流膿、明顯變色，或傷口沒有改善，請儘快就醫，不要等到下一次例行回診。`},{id:`EYE-CORE`,topic:`R1`,title:`保護視力與眼底健康`,appliesWhen:`資料顯示已發生視網膜病變（R1 大於 0），或視網膜病變屬未來風險預測項目（PR1 存在）。`,typeGate:`any`,autoOnly:!1,patientText:`保護視力與眼底健康

糖尿病可能影響眼底的小血管。早期視網膜病變常沒有明顯不舒服，視力看起來正常也不代表眼底一定正常，所以定期眼底檢查很重要。

現在可以做的事

1. 找出最近一次眼底或散瞳眼科檢查的日期與結果。如果只做過一般視力檢查，回診時可確認是否也完成眼底檢查。
2. 依眼科醫師安排持續追蹤。一般情況至少每年評估一次；若連續檢查正常，醫師可能延長至每一至二年一次；若先前檢查已有變化，追蹤時間可能需要縮短。
3. 按醫療團隊共同訂定的目標照顧血糖、血壓與血脂；若有吸菸，請尋求戒菸協助。
4. 若正在計畫懷孕、已懷孕，或近期血糖快速改變，請主動告知眼科與糖尿病照護團隊。

下次回診可以確認

1. 我上一次眼底檢查是何時？結果是否需要眼科追蹤？
2. 我下一次檢查應安排在何時？需要散瞳檢查，還是眼底攝影即可？

需要立即處理的情況

如果突然看不見、視力快速下降，或突然出現明顯黑影、重影，請在當天儘速就醫，不要等到下次回診。`},{id:`EYE-T1`,topic:`R1`,title:`第一型糖尿病眼底檢查補充`,appliesWhen:`已選 EYE-CORE，且糖尿病類型已明確確認為第一型。`,typeGate:`type1-confirmed`,autoOnly:!1,patientText:`第一型糖尿病在發病五年內，應完成第一次包含散瞳的完整眼科檢查；之後依眼科檢查結果安排追蹤。`},{id:`EYE-T2`,topic:`R1`,title:`第二型糖尿病眼底檢查補充`,appliesWhen:`已選 EYE-CORE，且糖尿病類型已明確確認為第二型。`,typeGate:`type2-confirmed`,autoOnly:!1,patientText:`第二型糖尿病在確診時可能已存在一段時間，因此診斷後應儘快完成第一次包含散瞳的完整眼科檢查；之後依眼科檢查結果安排追蹤。`},{id:`STROKE-CORE`,topic:`R2`,title:`辨識腦中風警訊，保護腦血管`,appliesWhen:`資料顯示已發生腦血管疾病（R2 大於 0），或腦血管疾病屬未來風險預測項目（PR2 存在）。`,typeGate:`any`,autoOnly:!1,patientText:`辨識腦中風警訊，保護腦血管

血糖、血壓、血脂、吸菸與心律問題都可能影響腦血管。照顧腦血管的重點，是持續管理可以改善的因素，也要讓自己和家人知道中風警訊出現時該怎麼做。

現在可以做的事

1. 依醫療團隊安排量測並記錄血糖、血壓與血脂，回診時帶著紀錄一起討論。
2. 規律使用醫師開立的藥物，不自行停藥或更改劑量。
3. 若有吸菸，請尋求戒菸門診或戒菸專線協助。飲食、活動與體重目標則依個人身體狀況和醫療團隊共同訂定。
4. 若曾有短暫單側無力、嘴歪、說話不清、突然視力異常或走路不穩，即使症狀後來消失，也要儘速告訴醫師。

下次回診可以確認

1. 我的血壓、血脂與血糖控制目標各是多少？
2. 我是否有心房顫動、頸動脈問題或曾經短暫性腦缺血，需要進一步追蹤？

需要立即處理的情況

請記住「微笑、舉手、說你好」：微笑時臉部不對稱、雙手舉起時一側無力下垂，或說話突然不清楚，只要出現其中一項，就要記下發生時間並立即撥打 119。不要等待症狀自行消失，也不要自行開車就醫。`},{id:`KIDNEY-CORE`,topic:`R3`,title:`保護腎功能`,appliesWhen:`資料顯示已發生腎臟病變（R3 大於 0）、CKD 欄位為 1，或腎病變屬未來風險預測項目（PR3 存在）。`,typeGate:`any`,autoOnly:!1,patientText:`保護腎功能

糖尿病腎臟病變早期通常沒有明顯症狀，不能只靠有沒有水腫或有沒有不舒服來判斷。了解尿液白蛋白／肌酸酐比值（UACR）、血清肌酸酐與腎絲球過濾率（eGFR），才能較完整地掌握腎臟狀況。

現在可以做的事

1. 找出最近一次 UACR、肌酸酐與 eGFR 的檢查日期和數值。一般應至少每年評估一次；若結果異常，醫療團隊可能安排更密集追蹤。
2. 依醫療團隊安排照顧血糖與血壓，並規律使用處方藥。不要只看單次數字，應和醫師一起看一段時間的變化趨勢。
3. 看診或領藥時主動告知醫師、牙醫師與藥師自己的腎功能狀況。
4. 不自行長期服用非處方消炎止痛藥，也不要使用成分不明的中草藥、保健品或偏方。這不代表要停用醫師開立的藥物；任何處方調整都應由醫師決定。
5. 飲水量、鹽分、蛋白質與鉀的限制需依個人腎功能、心臟狀況與營養評估決定，不要自行套用網路上的腎臟飲食。

下次回診可以確認

1. 我的 UACR、肌酸酐與 eGFR 各是多少？和上一次相比是否穩定？
2. 現在的藥物是否需要依腎功能調整？多久應再檢查一次？
3. 是否需要轉介腎臟科或營養師？

需要儘速就醫的情況

如果尿量突然明顯變少、腳或臉突然腫起、呼吸變喘、持續噁心嘔吐或意識變得不清楚，請儘速就醫；若呼吸困難或意識改變明顯，請立即撥打 119。`},{id:`KIDNEY-T1`,topic:`R3`,title:`第一型糖尿病腎臟檢查補充`,appliesWhen:`已選 KIDNEY-CORE，且糖尿病類型已明確確認為第一型。`,typeGate:`type1-confirmed`,autoOnly:!1,patientText:`第一型糖尿病通常從發病五年後開始定期接受 UACR、血清肌酸酐與 eGFR 檢查；若醫療團隊另有安排，依個別狀況提早或增加檢查。`},{id:`KIDNEY-T2`,topic:`R3`,title:`第二型糖尿病腎臟檢查補充`,appliesWhen:`已選 KIDNEY-CORE，且糖尿病類型已明確確認為第二型。`,typeGate:`type2-confirmed`,autoOnly:!1,patientText:`第二型糖尿病在診斷時就應開始接受 UACR、血清肌酸酐與 eGFR 檢查，之後至少每年追蹤一次；若結果異常，依醫療團隊安排增加追蹤頻率。`},{id:`NERVE-CORE`,topic:`R4`,title:`照顧神經與足部感覺`,appliesWhen:`資料顯示已發生神經病變（R4 大於 0），或神經病變屬未來風險預測項目（PR4 存在）。選到時程式會自動加入 BASE-02。`,typeGate:`any`,autoOnly:!1,patientText:`照顧神經與足部感覺

糖尿病神經病變可能出現麻木、刺痛、灼熱、疼痛、感覺變鈍或平衡變差；也有人早期沒有症狀。麻木不等於沒有問題，因為感覺變差時，小傷口可能不容易被發現。其他疾病或營養問題也可能造成類似症狀，因此需要由醫療人員評估，不能只靠症狀自行判斷。

現在可以做的事

1. 每天留意雙腳是否有麻、刺、痛、灼熱、感覺變差或走路不穩，並完成本報告的足部照護步驟。
2. 不要因為腳沒有痛就忽略傷口，也不要以熱水、電毯或熱敷來測試足部感覺。
3. 若出現站起來容易暈、心跳異常、反覆噁心或腹瀉便祕、排尿困難、性功能改變，或低血糖時越來越沒有警訊，請主動告訴醫療團隊，因為這些也可能和自主神經功能有關。
4. 依醫療團隊共同訂定的目標照顧血糖、血壓與血脂；不要自行購買止痛藥或神經痛藥物長期服用。

下次回診可以確認

1. 我是否需要做足部感覺、單股尼龍纖維、音叉震動感或跟腱反射檢查？
2. 麻木或疼痛是否可能有糖尿病以外的原因，例如維生素 B12、甲狀腺或腎功能問題？
3. 如果疼痛影響睡眠或走路，適合我的治療方式是什麼？

需要儘速就醫的情況

如果新出現明顯無力、走路突然不穩，或足部有傷口、紅腫、化膿、發燒、明顯變色，請儘速就醫。`},{id:`NERVE-T1`,topic:`R4`,title:`第一型糖尿病神經檢查補充`,appliesWhen:`已選 NERVE-CORE，且糖尿病類型已明確確認為第一型。`,typeGate:`type1-confirmed`,autoOnly:!1,patientText:`第一型糖尿病在發病五年後，建議每年接受簡單的神經與足部感覺評估；有症狀時不必等待滿五年，應提早告訴醫療團隊。`},{id:`NERVE-T2`,topic:`R4`,title:`第二型糖尿病神經檢查補充`,appliesWhen:`已選 NERVE-CORE，且糖尿病類型已明確確認為第二型。`,typeGate:`type2-confirmed`,autoOnly:!1,patientText:`第二型糖尿病從診斷開始，建議每年接受簡單的神經與足部感覺評估；若已有麻、痛、灼熱或感覺變差，請在回診時主動提出。`},{id:`HEART-CORE`,topic:`R5`,title:`保護心臟與預防急性發作`,appliesWhen:`資料顯示已發生心血管疾病（R5 大於 0），或心血管疾病屬未來風險預測項目（PR5 存在）。`,typeGate:`any`,autoOnly:!1,patientText:`保護心臟與預防急性發作

糖尿病常和高血壓、血脂異常、吸菸、腎功能問題及心血管疾病互相影響。保護心臟不是只看血糖，還要一起管理血壓、血脂、生活型態與醫師開立的藥物。

現在可以做的事

1. 依醫療團隊安排記錄血糖與血壓，並確認最近一次血脂、腎功能及心臟相關檢查結果。
2. 規律使用醫師開立的藥物，不自行停藥或更改劑量。若服藥後不舒服，先聯絡醫療團隊或藥師確認。
3. 若有吸菸，請尋求戒菸協助。運動強度應依體力、心臟狀況、足部狀況和醫療團隊建議逐步增加；若活動時胸悶或喘，先停止活動並接受評估。
4. 留意近期是否比以前更容易喘、平躺時喘、腳腫、心悸、容易疲倦，或短時間內體重快速增加，並把變化告訴醫療團隊。

下次回診可以確認

1. 我的血壓與低密度脂蛋白膽固醇（LDL-C）目標是多少？
2. 我是否需要進一步評估冠狀動脈疾病或心臟衰竭？
3. 目前藥物是否已兼顧血糖、心臟與腎臟安全？任何調整都應由醫師決定。

需要立即處理的情況

若突然出現胸悶或胸痛、喘不過氣、冒冷汗、噁心、頭暈或昏厥，或出現不尋常的背部疼痛並伴隨不適，請立即撥打 119，不要自行開車，也不要嘗試以大力咳嗽取代就醫。`},{id:`LEG-CIRCULATION-CORE`,topic:`R6`,title:`維持下肢循環，預防傷口惡化`,appliesWhen:`資料顯示已發生周邊血管疾病（R6 大於 0），或周邊血管病變屬未來風險預測項目（PR6 存在）。選到時程式會自動加入 BASE-02。`,typeGate:`any`,autoOnly:!1,patientText:`維持下肢循環，預防傷口惡化

周邊動脈疾病是腿部與足部的動脈循環變差。有些人沒有症狀；也有人走一段路後小腿痠痛，休息後改善，或出現足部冰冷、顏色變淡、傷口不容易癒合。這和單純神經麻木不同，但兩種問題也可能同時存在。

現在可以做的事

1. 每天觀察兩腳的溫度、顏色與傷口，並完成本報告的足部照護步驟。
2. 留意走路時是否固定在相近距離出現小腿、臀部或大腿疼痛，以及休息後是否改善。把發作位置、走路距離和持續時間記下來。
3. 若有吸菸，戒菸是保護下肢循環最重要的行動之一，可請醫療團隊轉介戒菸服務。
4. 規律活動可能有幫助，但若已有足部傷口、休息時也疼痛、明顯變色或疑似嚴重缺血，應先接受醫療評估，再決定適合的運動方式。
5. 依醫療團隊安排管理血糖、血壓與血脂，並規律使用處方藥；不要自行購買抗血小板藥物，也不要自行停用既有處方。

下次回診可以確認

1. 是否需要檢查足部脈搏，或安排足踝／腳趾與手臂血壓比值（ABI／TBI）？
2. 我的足部傷口和走路疼痛是否與循環不足有關？
3. 適合我的走路訓練與鞋具是什麼？

需要立即處理的情況

若一隻腳突然劇烈疼痛、變得明顯冰冷或蒼白、發紫、麻木或無力，請立即就醫。若有傷口、紅腫、流膿、異味或發燒，也要儘快就醫，不要自行處理或等待傷口自然好轉。`},{id:`TYPE-UNCLEAR`,topic:`TYPE`,title:`糖尿病類型不明或資料互相矛盾`,appliesWhen:`診斷碼、用藥或病史對第一型與第二型的指向不一致，或無法確認類型。由程式依 patient-facts 判定自動加入。`,typeGate:`any`,autoOnly:!0,patientText:`目前資料無法一致確認您的糖尿病類型。第一型與第二型糖尿病在胰島素使用、低血糖與生病期間的照護方式可能不同，請在下次回診時向醫師確認診斷類型及適合您的自我照護方式。`}],P=new Map(N.map(e=>[e.id,e])),F=N.filter(e=>!e.autoOnly);function I(){return F.map(e=>`${e.id}｜${e.title}\n  適用：${e.appliesWhen}`).join(`
`)}var De=`你是糖尿病衛教報告的「模組選擇器」。

你的唯一任務：依病人資料判斷應該選用哪些衛教模組，輸出模組代碼與選取理由。

嚴格限制：
1. 你不撰寫任何病人可見的衛教內容。病人看到的正文由程式以已核准的固定文字組合，你寫的任何說明文字都不會出現在病人版報告中。
2. 你不得推測資料沒有的診斷、檢驗、日期或目前用藥。
3. 申報用藥只代表「曾有申報紀錄」，不得當成目前正在使用。
4. R 欄位是已發生的併發症現況；PR 欄位是未來風險預測。兩者都可以作為選取模組的依據，但你必須在 evidence 中寫清楚是哪一個。
5. 來源未出現的欄位不得視為 0，也不得補值。
6. 糖尿病類型只有在 diabetes type 判定為 type1-confirmed 或 type2-confirmed 時，才可以選 T1／T2 補充模組。判定為 conflicting 或 absent 時一律不選。
7. 只能從下方目錄選取，不得自創模組代碼。

可選模組目錄：
${I()}

輸出格式：只輸出一個 JSON 物件，不要加說明文字或程式碼圍籬。

{
  "selected_modules": [
    {
      "module_id": "EYE-CORE",
      "reason": "為什麼選這個模組",
      "evidence": "引用病人資料中的具體欄位與值，例如 R1=2 或 PR1 存在"
    }
  ],
  "diabetes_type_verdict": "type1-confirmed | type2-confirmed | conflicting | absent",
  "notes_for_clinician": "給醫療團隊看的簡短提醒，100 字以內；沒有則填空字串"
}`,L=[`BASE-01`,`TYPE-UNCLEAR`,`EYE-CORE`,`EYE-T1`,`EYE-T2`,`STROKE-CORE`,`KIDNEY-CORE`,`KIDNEY-T1`,`KIDNEY-T2`,`HEART-CORE`,`NERVE-CORE`,`NERVE-T1`,`NERVE-T2`,`LEG-CIRCULATION-CORE`,`BASE-02`];function Oe(e){let t=e.trim(),n=t.match(/```(?:json)?\s*([\s\S]*?)```/i),r=n?n[1].trim():t,i;try{i=JSON.parse(r)}catch{let e=r.indexOf(`{`),t=r.lastIndexOf(`}`);if(e===-1||t<=e)throw Error(`模組選擇器沒有回傳可解析的 JSON。`);i=JSON.parse(r.slice(e,t+1))}if(!i||typeof i!=`object`)throw Error(`模組選擇器回傳的不是 JSON 物件。`);let a=i;return{selected_modules:(Array.isArray(a.selected_modules)?a.selected_modules:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({module_id:String(e.module_id??``).trim(),reason:String(e.reason??``).trim(),evidence:String(e.evidence??``).trim()})).filter(e=>e.module_id),diabetes_type_verdict:String(a.diabetes_type_verdict??`absent`).trim(),notes_for_clinician:String(a.notes_for_clinician??``).trim()}}function ke(e,t){let n=[],r=new Set;for(let t of e.selected_modules){let e=P.get(t.module_id);if(!e){n.push({moduleId:t.module_id,action:`removed`,reason:`不在已核准的模組目錄中。`});continue}if(e.autoOnly){n.push({moduleId:t.module_id,action:`removed`,reason:`此模組由程式依規則自動加入，不接受 LLM 選取。`});continue}r.add(t.module_id)}let i=t.diabetesType.verdict;for(let e of N)r.has(e.id)&&e.typeGate!==`any`&&(e.typeGate===`type1-confirmed`&&i!==`type1-confirmed`&&(r.delete(e.id),n.push({moduleId:e.id,action:`removed`,reason:`糖尿病類型判定為 ${i}，未明確確認為第一型，依規則不得加入補充模組。`})),e.typeGate===`type2-confirmed`&&i!==`type2-confirmed`&&(r.delete(e.id),n.push({moduleId:e.id,action:`removed`,reason:`糖尿病類型判定為 ${i}，未明確確認為第二型，依規則不得加入補充模組。`})));for(let[e,t]of Object.entries({"EYE-T1":`EYE-CORE`,"EYE-T2":`EYE-CORE`,"KIDNEY-T1":`KIDNEY-CORE`,"KIDNEY-T2":`KIDNEY-CORE`,"NERVE-T1":`NERVE-CORE`,"NERVE-T2":`NERVE-CORE`}))r.has(e)&&!r.has(t)&&(r.delete(e),n.push({moduleId:e,action:`removed`,reason:`未選取對應的 ${t}，補充模組不得單獨出現。`}));return r.add(`BASE-01`),n.push({moduleId:`BASE-01`,action:`added`,reason:`每份報告固定加入。`}),(r.has(`NERVE-CORE`)||r.has(`LEG-CIRCULATION-CORE`))&&(r.add(`BASE-02`),n.push({moduleId:`BASE-02`,action:`added`,reason:`選到神經病變或周邊血管疾病模組，依規則加入共用足部照護。`})),(i===`conflicting`||i===`absent`)&&(r.add(`TYPE-UNCLEAR`),n.push({moduleId:`TYPE-UNCLEAR`,action:`added`,reason:`糖尿病類型判定為 ${i}，依規則加入類型確認提醒。`})),{moduleIds:L.filter(e=>r.has(e)),corrections:n,selection:e}}function Ae(e,t){let n=[];n.push(`※ DRAFT｜模組目錄 ${Ee} 尚未經醫療團隊核准，僅供工作台流程比較，不得提供給病人。`,``),n.push(`糖尿病衛教報告`),n.push(`報告產生日期：${t.reportDate??`未提供`}`),n.push(`資料截至日期：${t.dataCutoff??`未提供`}`),n.push(``);for(let t of e.moduleIds){let e=P.get(t);e&&(n.push(e.patientText),n.push(``))}return n.join(`
`).trimEnd()}function je(e,t){let n=[];n.push(`【選模組稽核紀錄（醫療團隊用，病人版不顯示）】`),n.push(`模組目錄版本：${Ee}（已核准：否）`),n.push(`糖尿病類型判定（程式抽取）：${t.diabetesType.verdict}`),n.push(`　第一型診斷碼：${t.diabetesType.type1IcdCodes.join(`、`)||`無`}`),n.push(`　第二型診斷碼：${t.diabetesType.type2IcdCodes.join(`、`)||`無`}`),n.push(`LLM 自報的類型判定：${e.selection.diabetes_type_verdict}`),e.selection.diabetes_type_verdict!==t.diabetesType.verdict&&n.push(`　⚠ LLM 判定與程式抽取不一致，已以程式抽取為準。`),n.push(``,`LLM 選取的模組：`),e.selection.selected_modules.length||n.push(`　（無）`);for(let t of e.selection.selected_modules)n.push(`　- ${t.module_id}｜理由：${t.reason}｜證據：${t.evidence}`);n.push(``,`程式套用規則後的調整：`),e.corrections.length||n.push(`　（無）`);for(let t of e.corrections)n.push(`　- ${t.action===`removed`?`移除`:`加入`} ${t.moduleId}：${t.reason}`);if(n.push(``,`最終組合順序：${e.moduleIds.join(` → `)}`),e.selection.notes_for_clinician&&n.push(``,`LLM 給醫療團隊的提醒：${e.selection.notes_for_clinician}`),t.dataQualityFlags.length){n.push(``,`資料限制：`);for(let e of t.dataQualityFlags)n.push(`　- ${e}`)}return n.join(`
`)}function R(e){return{known:!0,value:e}}function z(e){return{known:!1,reason:e}}var Me=/^E10/i,Ne=/^E11/i,Pe=/^E1[234]/i;function B(e){if(e==null||e===``)return null;let t=Number(String(e).trim());return Number.isFinite(t)?t:null}function V(e){if(e==null)return null;let t=String(e).trim().replaceAll(`/`,`-`);return/^\d{4}-\d{2}-\d{2}$/.test(t)?t:null}function H(e,t){let n=Date.parse(`${e}T00:00:00Z`),r=Date.parse(`${t}T00:00:00Z`);return!Number.isFinite(n)||!Number.isFinite(r)?null:Math.round((r-n)/864e5)}function U(e,t){let n=B(e);return n===null?z(`來源未提供 ${t} 欄位`):R(n===1)}function W(e,t){let n=[];for(let r=1;r<=7;r+=1){let i=`${t}${r}`,a=Object.hasOwn(e,i),o=a?e[i]:null;n.push({code:i,present:a,value:a?B(o):null,rawValue:a&&o!=null?String(o):null})}return n}function Fe(e){let t=new Set,n=new Set,r=new Set;for(let i of e){if(!b(i))continue;let e=String(i.icd_code??``).trim();e&&(Me.test(e)?t.add(e):Ne.test(e)?n.add(e):Pe.test(e)&&r.add(e))}let i=[...t].sort(),a=[...n].sort(),o=[...r].sort();return i.length&&a.length?{verdict:`conflicting`,type1IcdCodes:i,type2IcdCodes:a,otherDiabetesIcdCodes:o,note:`申報資料同時出現第一型與第二型糖尿病診斷碼，無法據此判定類型；不得啟用任何 T1／T2 補充模組。`}:i.length?{verdict:`type1-confirmed`,type1IcdCodes:i,type2IcdCodes:[],otherDiabetesIcdCodes:o,note:`申報資料只出現第一型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。`}:a.length?{verdict:`type2-confirmed`,type1IcdCodes:[],type2IcdCodes:a,otherDiabetesIcdCodes:o,note:`申報資料只出現第二型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。`}:{verdict:`absent`,type1IcdCodes:[],type2IcdCodes:[],otherDiabetesIcdCodes:o,note:`申報用藥紀錄中沒有 E10／E11 糖尿病診斷碼，無法判定類型。`}}function Ie(e,t){let n=new Map,r=[];for(let t of e){if(!b(t))continue;let e=String(t.drug_atc5_name??``).trim()||`未分類或來源未提供分類`,i=String(t.drug_ename??``).trim(),a=V(t.drug_date);a&&r.push(a);let o=n.get(e)??{names:new Set,count:0,dates:[]};i&&o.names.add(i),o.count+=1,a&&o.dates.push(a),n.set(e,o)}let i=[...n.entries()].map(([e,n])=>{let r=[...n.dates].sort(),i=r.length?r[r.length-1]:null;return{atcClass:e,drugNames:[...n.names].sort().slice(0,8),recordCount:n.count,lastClaimDate:i,daysSinceLastClaim:i&&t?H(i,t):null}}).sort((e,t)=>e.lastClaimDate&&t.lastClaimDate&&e.lastClaimDate!==t.lastClaimDate?t.lastClaimDate.localeCompare(e.lastClaimDate):t.recordCount-e.recordCount),a=r.sort();return{classes:i,dateRange:a.length?R({earliest:a[0],latest:a[a.length-1]}):z(`用藥紀錄沒有可解析的日期`)}}function Le(e){let t=new Map,n=!1;for(let r of e){if(!b(r))continue;(V(r.assay_date)||V(r.inspect_date))&&(n=!0);let e=String(r.assay_item_name??``).trim()||String(r.order_name??``).trim()||`未提供項目名稱`,i=String(r.assay_value??``).trim();if(!i)continue;let a=t.get(e)??{values:[],units:new Set,refs:new Set,months:new Set};a.values.push(i);let o=String(r.unit_data??``).trim();o&&o!==`null`&&a.units.add(o);let s=String(r.consult_value??``).trim();s&&s!==`null`&&a.refs.add(s);let c=String(r.fee_ym??``).trim();c&&a.months.add(c),t.set(e,a)}return{items:[...t.entries()].map(([e,t])=>({itemName:e,rawValues:t.values,unit:t.units.size===1?[...t.units][0]:t.units.size>1?[...t.units].join(` / `):null,referenceRange:t.refs.size?[...t.refs][0]:null,feeMonths:[...t.months].sort(),hasDrawDates:n})).sort((e,t)=>t.rawValues.length-e.rawValues.length),hasDrawDates:n}}function Re(e){let t=b(e)?e:{},n=b(t.userInput)?t.userInput:{},r=b(t.rawSources)?t.rawSources:{},i=V(n.REPORT_DATE),a=V(n.BIRTHDAY),o=V(n.INDX_DATE),s=a&&i?H(a,i):null,c=B(n.T),l=T(r,`medication`),u=T(r,`labData`),{classes:ee,dateRange:d}=Ie(l,i),{items:f,hasDrawDates:p}=Le(u),m=[];!p&&u.length&&m.push(`檢驗紀錄只有費用年月、沒有採檢日期，因此無法建立時間順序或趨勢。任何「趨勢」「最近一次」的敘述都沒有資料支持。`),i||m.push(`來源未提供 REPORT_DATE，無法標示資料截止日。`);let te=W(n,`R`),h=W(n,`PR`),ne=[...te,...h].filter(e=>!e.present).map(e=>e.code);ne.length&&m.push(`來源未出現下列欄位，不得補值也不得視為 0：${ne.join(`、`)}。`);let re=Fe(l);return re.verdict===`conflicting`&&m.push(re.note),{reportDate:i?R(i):z(`來源未提供 REPORT_DATE`),dataCutoff:i?R(i):z(`來源未提供資料截止日`),birthday:a?R(a):z(`來源未提供 BIRTHDAY`),ageYears:s===null?z(`缺少出生日期或報告日期，無法計算年齡`):R(Math.floor(s/365.25)),sexCode:n.SEX!==void 0&&n.SEX!==null&&n.SEX!==``?R(String(n.SEX)):z(`來源未提供 SEX`),diabetesOnsetDate:o?R(o):z(`來源未提供 INDX_DATE`),diabetesDurationYears:c===null?z(`來源未提供 T`):R(Number(c.toFixed(1))),comorbidityFlags:{hypertension:U(n.HT,`HT`),hyperlipidemia:U(n.HL,`HL`),ckd:U(n.CKD,`CKD`),p4p:U(n.P4P,`P4P`)},dcsiTotal:B(n.DCSI)===null?z(`來源未提供 DCSI`):R(B(n.DCSI)),grade:n.GRADE===void 0?z(`來源未提供 GRADE`):R(String(n.GRADE)),ageGroup:n.AGEGP===void 0?z(`來源未提供 AGEGP`):R(String(n.AGEGP)),existingComplications:te,riskPredictions:h,diabetesType:re,medicationClasses:ee,medicationRecordCount:l.length,medicationDateRange:d,labItems:f,labRecordCount:u.length,labHasDrawDates:p,dataQualityFlags:m}}function G(e,t){return e.known?t?t(e.value):String(e.value):`未知（${e.reason}）`}function ze(e,t={}){let n=t.maxMedicationClasses??25,r=[];r.push(`【基本判斷依據】`),r.push(`報告日期：${G(e.reportDate)}`),r.push(`年齡：${G(e.ageYears,e=>`${e} 歲`)}`),r.push(`性別代碼：${G(e.sexCode)}`),r.push(`糖尿病病程年數：${G(e.diabetesDurationYears,e=>`${e} 年`)}`),r.push(`DCSI 總分：${G(e.dcsiTotal)}`),r.push(`高血壓：${G(e.comorbidityFlags.hypertension,e=>e?`是`:`否`)}`),r.push(`高血脂：${G(e.comorbidityFlags.hyperlipidemia,e=>e?`是`:`否`)}`),r.push(`慢性腎臟病：${G(e.comorbidityFlags.ckd,e=>e?`是`:`否`)}`),r.push(``,`【已發生併發症現況（R）】`);for(let t of e.existingComplications)r.push(`${t.code}：${t.present?`${t.rawValue}`:`來源未出現此欄位（不得視為 0）`}`);r.push(``,`【未來風險預測（PR）】`);for(let t of e.riskPredictions)r.push(`${t.code}：${t.present?`${t.rawValue}`:`來源未出現此欄位（不得視為 0）`}`);r.push(``,`【糖尿病類型證據】`),r.push(`判定：${e.diabetesType.verdict}`),r.push(`第一型診斷碼：${e.diabetesType.type1IcdCodes.join(`、`)||`無`}`),r.push(`第二型診斷碼：${e.diabetesType.type2IcdCodes.join(`、`)||`無`}`),r.push(`說明：${e.diabetesType.note}`),r.push(``,`【用藥申報分類（非目前用藥）】`),r.push(`共 ${e.medicationRecordCount} 筆申報紀錄，涵蓋 ${e.medicationClasses.length} 個 ATC 分類。以下為最近申報的前 ${Math.min(n,e.medicationClasses.length)} 類。`);for(let t of e.medicationClasses.slice(0,n)){let e=t.lastClaimDate?`最後申報 ${t.lastClaimDate}${t.daysSinceLastClaim===null?``:`（距報告日 ${t.daysSinceLastClaim} 天）`}`:`來源無日期`;r.push(`- ${t.atcClass}｜${t.recordCount} 筆｜${e}`)}if(r.push(``,`【檢驗資料可用性】`),r.push(`共 ${e.labRecordCount} 筆；是否有採檢日：${e.labHasDrawDates?`有`:`沒有，只有費用年月`}`),e.dataQualityFlags.length){r.push(``,`【資料限制】`);for(let t of e.dataQualityFlags)r.push(`- ${t}`)}return r.join(`
`)}var K=n(),Be=5*1024*1024,Ve=`gemini-3.6-flash`,He=`__custom__`,Ue=`dmEducationGeminiTransientCredential2026`,We=15,Ge=2e5,Ke=[{value:`gemini-3.6-flash`,label:`Gemini 3.6 Flash｜預設・較高品質`},{value:`gemini-3.5-flash-lite`,label:`Gemini 3.5 Flash-Lite｜較快・較低成本`},{value:He,label:`自訂模型 ID`}],qe=`{
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
}`;function Je(e,t){let n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)}function Ye(e){return`${v(se(e))} 字`}function Xe(e){let t=e.match(/"audit_status"\s*:\s*"(PASS|REVISE|FAIL)"/i)?.[1]?.toUpperCase(),n=e.match(/(?:^|\n)\s*(?:##\s*稽核結論\s*\n\s*)?(PASS|REVISE|NEEDS_REVIEW|FAIL)\b/im)?.[1]?.toUpperCase(),r=t||n;return r===`FAIL`?{label:`FAIL`,tone:`danger`}:r===`REVISE`?{label:`REVISE`,tone:`warning`}:r===`NEEDS_REVIEW`?{label:`需人工覆核`,tone:`warning`}:r===`PASS`?{label:`PASS`,tone:`success`}:{label:`已完成`,tone:`neutral`}}function Ze({blockers:e,label:t}){return e.length?(0,K.jsxs)(`div`,{className:`blockerList`,role:`status`,children:[(0,K.jsx)(`strong`,{children:t}),(0,K.jsx)(`ul`,{children:e.map(e=>(0,K.jsxs)(`li`,{className:e.hard?`hard`:`soft`,children:[(0,K.jsx)(`span`,{className:`blockerMessage`,children:e.message}),(0,K.jsx)(`span`,{className:`blockerFix`,children:e.howToFix})]},e.code))})]}):null}function Qe({input:e,title:t,note:n}){let r=e.totalTokens>ie,i=Math.min(999,Math.round(e.totalTokens/ie*100));return(0,K.jsxs)(`details`,{className:`compositionPanel`,children:[(0,K.jsxs)(`summary`,{children:[t,`：約 `,v(e.totalTokens),` tokens（`,v(e.totalChars),` 字）`,(0,K.jsxs)(`span`,{className:r?`limitBadge over`:`limitBadge`,children:[`模型上限的 `,i,`%`]})]}),(0,K.jsx)(`table`,{children:(0,K.jsxs)(`tbody`,{children:[e.parts.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:e.label}),(0,K.jsxs)(`td`,{children:[v(e.chars),` 字`]}),(0,K.jsxs)(`td`,{children:[`約 `,v(e.tokens),` tokens`,(0,K.jsx)(`em`,{children:e.method===`measured`?`實測`:`估算`})]})]},e.label)),(0,K.jsxs)(`tr`,{className:`totalRow`,children:[(0,K.jsx)(`th`,{children:`合計`}),(0,K.jsxs)(`td`,{children:[v(e.totalChars),` 字`]}),(0,K.jsxs)(`td`,{children:[`約 `,v(e.totalTokens),` tokens`]})]})]})}),(0,K.jsxs)(`p`,{children:[n?`${n} `:``,e.hasEstimate?`標示「估算」的段落是以字元組成推估，誤差在指引全文上約 0.1%，其他文字可能更大；需要精確值請按「用 countTokens 精算」。`:`所有段落都是 Gemini 官方實測值。`]})]})}function $e(){let[e,t]=(0,r.useState)(``),[n,a]=(0,r.useState)(``),[s,f]=(0,r.useState)(``),[p,g]=(0,r.useState)(`raw`),[_,ae]=(0,r.useState)(``),[ce,le]=(0,r.useState)(!1),[y,pe]=(0,r.useState)(Ve),[me,he]=(0,r.useState)(``),[b,x]=(0,r.useState)(`workbench`),[S,ge]=(0,r.useState)(`workbench`),[C,w]=(0,r.useState)(i),[T,_e]=(0,r.useState)(o),[E,ye]=(0,r.useState)(``),[be,xe]=(0,r.useState)(``),[Se,O]=(0,r.useState)(null),[k,Ce]=(0,r.useState)(`A`),[A,j]=(0,r.useState)(``),[Ee,N]=(0,r.useState)(``),[P,F]=(0,r.useState)(``),[I,L]=(0,r.useState)(`idle`),[R,z]=(0,r.useState)(null),[Me,Ne]=(0,r.useState)(0),[Pe,B]=(0,r.useState)(We),[V,H]=(0,r.useState)(null),[U,W]=(0,r.useState)(``),[Fe,Ie]=(0,r.useState)(!1),[Le,G]=(0,r.useState)(``),$e=(0,r.useRef)(null),et=(0,r.useRef)(null),q=(0,r.useRef)(null),tt=(0,r.useRef)(null),J=I!==`idle`,nt=(0,r.useMemo)(()=>Xe(P),[P]),rt=y===He?me.trim():y,it=d(k),Y=k===`B`,at=typeof window<`u`&&window.location.hostname.endsWith(`github.io`),ot=(0,r.useMemo)(()=>{let t=e.trim();if(!t.startsWith(`{`)&&!t.startsWith(`[`))return null;try{return JSON.parse(t)}catch{return null}},[e]),X=(0,r.useMemo)(()=>ot?Re(ot):null,[ot]),Z=(0,r.useMemo)(()=>k===`C`?fe({systemPrompt:De,factsText:X?ze(X):``}):ue({systemPrompt:C,patientText:n,includeGuideline:Y,guidelineText:E}),[k,X,C,n,Y,E]),Q=(0,r.useMemo)(()=>de({systemPrompt:T,patientText:n,report:A,includeGuideline:Y,guidelineText:E}),[T,n,A,Y,E]),st={arm:k,llmText:n,rawInput:e,generatorPrompt:C,evalPrompt:T,report:A,model:rt,apiKey:_,requiresClientKey:at,guidelineText:E,tokenLimit:ie},ct=(0,r.useMemo)(()=>{let e=m({...st,totalTokens:Z.totalTokens});return k===`C`&&!ot&&e.push({code:`arm-c-needs-json`,message:`C（模組選擇流程）需要原始 JSON 病人資料才能做確定性事實抽取。`,howToFix:`請在步驟 01 上傳或貼上原始 JSON。純文字輸入無法使用 C。`,hard:!0}),e},[k,n,e,C,rt,_,at,E,Z.totalTokens,ot]),lt=(0,r.useMemo)(()=>te({...st,totalTokens:Q.totalTokens}),[k,n,T,A,rt,_,at,E,Q.totalTokens]),ut=(0,r.useMemo)(()=>Se===null?oe(E):{tokens:Se,method:`measured`},[E,Se]);(0,r.useEffect)(()=>{if(R===null)return;let e=window.setInterval(()=>{Ne(Math.floor((Date.now()-R)/1e3))},250);return()=>window.clearInterval(e)},[R]),(0,r.useEffect)(()=>{V&&tt.current&&tt.current.scrollIntoView({block:`nearest`,behavior:`smooth`})},[V]);function $(e,t){H({title:e,advice:t,raw:``,status:null,aborted:!1,timedOut:!1})}function dt(e){if(x(e),e===`custom`)return;let t=c.find(t=>t.id===e);t&&w(t.prompt)}function ft(e){if(ge(e),e===`custom`)return;let t=l.find(t=>t.id===e);t&&_e(t.prompt)}function pt(){dt(b===`custom`?`workbench`:b)}function mt(){ft(S===`custom`?`workbench`:S)}async function ht(e){if(H(null),e.size>Be){$(`指引 TXT 超過 5 MB`,`請確認是否選到正確的檔案；本工具不會自動截斷指引。`);return}if(!e.name.toLowerCase().endsWith(`.txt`)){$(`指引目前只支援 TXT`,`請先把 PDF 轉成純文字 TXT 再載入。`);return}let t=await e.text();if(!t.trim()){$(`指引 TXT 沒有可用文字`,`檔案讀起來是空的，請確認轉檔結果。`);return}ye(t),xe(e.name),O(null);let n=se(t);W(n===652078?`已載入指引：${v(n)} 字元，與已知全文完全相同，token 數採用官方實測值 ${v(re)}。`:`已載入指引：${v(n)} 字元。與已知全文（${v(ne)} 字元）不同，token 數為估算值。`)}function gt(e){let t=e.target.files?.[0];t&&ht(t),e.target.value=``}async function _t(e){if(H(null),e.size>Be){$(`檔案超過 5 MB`,`請先縮小檔案再上傳。`);return}let n=e.name.toLowerCase();if(!n.endsWith(`.json`)&&!n.endsWith(`.txt`)){$(`目前只支援 JSON 與 TXT`,`請改用 .json 或 .txt 檔案。`);return}let r=await e.text();if(se(r)>Ge&&r.includes(`糖尿病臨床照護指引`)){$(`這個檔案看起來是指引全文，不是病人資料`,`已經略過，沒有覆蓋你目前的病人資料。指引請用下方「載入指引 TXT」按鈕載入。`);return}t(r),f(e.name),a(``),j(``),N(``),F(``),g(`raw`),W(`已載入新的病人資料，請重新按「整理為 LLM 好讀文字」。`)}function vt(e){let t=e.target.files?.[0];t&&_t(t),e.target.value=``}function yt(e){e.preventDefault(),Ie(!1);let t=e.dataTransfer.files?.[0];t&&_t(t)}function bt(){if(H(null),W(``),!e.trim()){$(`還沒有病人資料`,`請先上傳檔案、貼上文字，或按「載入去識別示範」。`);return}L(`formatting`);try{let t=e.trim();t.startsWith(`{`)||t.startsWith(`[`)?a(ve(JSON.parse(t))):a(t),g(`formatted`),j(``),N(``),F(``)}catch{$(`這段內容看起來像 JSON，但格式無法解析`,`請檢查括號、逗號或引號是否成對；也可以改用 TXT 純文字輸入。`)}finally{L(`idle`)}}async function xt(e,t,n){return we({apiKey:_,model:rt,systemPrompt:e,input:t,signal:n,direct:at,timeoutMs:Pe*60*1e3,simulate:void 0})}async function St(){if(H(null),W(``),h(ct)){let e=ct.find(e=>e.hard);return e&&$(e.message,e.howToFix),``}L(`generating`),z(Date.now()),Ne(0);let e=new AbortController;q.current=e;try{if(k===`C`){if(!X)throw Error(`缺少可用的 JSON 病人資料。`);let t=Oe((await xt(De,Z.text,e.signal)).text),n=ke(t,X),r=Ae(n,{reportDate:X.reportDate.known?X.reportDate.value:null,dataCutoff:X.dataCutoff.known?X.dataCutoff.value:null});return j(r),N(je(n,X)),F(``),W(`模組選擇完成：LLM 選了 ${t.selected_modules.length} 個模組，程式套用規則後實際組入 ${n.moduleIds.length} 個。病人可見正文完全來自固定文字。`),r}let t=await xt(C,Z.text,e.signal);return j(t.text),N(``),F(``),t.text}catch(e){return e instanceof M?e.failure.aborted||H(e.failure):H(D({cause:e})),``}finally{q.current===e&&(q.current=null),z(null),L(`idle`)}}async function Ct(e){H(null);let t=e||A,r=te({...st,report:t,totalTokens:Q.totalTokens});if(h(r)){let e=r.find(e=>e.hard);e&&$(e.message,e.howToFix);return}L(`evaluating`),z(Date.now()),Ne(0);let i=new AbortController;q.current=i;try{F((await xt(T,de({systemPrompt:T,patientText:n,report:t,includeGuideline:Y,guidelineText:E}).text,i.signal)).text)}catch(e){e instanceof M?e.failure.aborted||H(e.failure):H(D({cause:e}))}finally{q.current===i&&(q.current=null),z(null),L(`idle`)}}function wt(){q.current?.abort()}async function Tt(){let e=await St();e&&await Ct(e)}async function Et(){if(H(null),!E.trim()){$(`還沒載入指引`,`請先按「載入指引 TXT」。`);return}if(at&&!_.trim()){$(`精算需要 Gemini 金鑰`,`請先在上方輸入金鑰；countTokens 不會產生生成費用。`);return}L(`counting`);let e=new AbortController;q.current=e;try{let t=await Te({apiKey:_,model:rt,text:E,direct:at,signal:e.signal});O(t),W(`countTokens 實測：指引全文為 ${v(t)} tokens。`)}catch(e){e instanceof M?e.failure.aborted||H(e.failure):H(D({cause:e}))}finally{q.current===e&&(q.current=null),z(null),L(`idle`)}}async function Dt(e,t){await navigator.clipboard.writeText(e),G(t),window.setTimeout(()=>G(``),1600)}function Ot(){t(``),a(``),f(``),j(``),N(``),F(``),H(null),W(``),g(`raw`)}let kt=J||h(ct),At=J||h(lt);return(0,K.jsxs)(`main`,{children:[(0,K.jsxs)(`header`,{className:`topbar`,children:[(0,K.jsxs)(`a`,{className:`brand`,href:`#top`,"aria-label":`糖衛工作台首頁`,children:[(0,K.jsx)(`span`,{className:`brandMark`,children:`糖衛`}),(0,K.jsx)(`span`,{children:`報告工作台`})]}),(0,K.jsxs)(`div`,{className:`topMeta`,children:[(0,K.jsxs)(`span`,{className:`privacyPill`,children:[(0,K.jsx)(`span`,{className:`statusDot`}),`不寫入本站資料庫`]}),(0,K.jsx)(`span`,{className:`modelPill`,children:`金鑰僅暫存本頁`})]})]}),(0,K.jsxs)(`section`,{className:`hero`,id:`top`,children:[(0,K.jsxs)(`div`,{className:`heroCopy`,children:[(0,K.jsx)(`p`,{className:`eyebrow`,children:`DIABETES EDUCATION REPORT LAB`}),(0,K.jsx)(`h1`,{children:`從病人資料，到可讀的衛教報告與品質稽核。`}),(0,K.jsx)(`p`,{className:`heroLead`,children:`上傳 JSON、TXT 或直接貼上文字；先確認 LLM 好讀版本，再用可編輯的 prompt 生成報告並獨立稽核。`})]}),(0,K.jsxs)(`div`,{className:`flowMap`,"aria-label":`處理流程`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`01`}),(0,K.jsx)(`strong`,{children:`整理資料`}),(0,K.jsx)(`small`,{children:`保留來源與限制`})]}),(0,K.jsx)(`i`,{children:`→`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`02`}),(0,K.jsx)(`strong`,{children:`生成報告`}),(0,K.jsx)(`small`,{children:`自訂 system prompt`})]}),(0,K.jsx)(`i`,{children:`→`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`03`}),(0,K.jsx)(`strong`,{children:`品質稽核`}),(0,K.jsx)(`small`,{children:`看見風險與修改建議`})]})]})]}),V&&(0,K.jsxs)(`div`,{className:`errorBanner`,role:`alert`,ref:tt,children:[(0,K.jsx)(`strong`,{children:`目前無法繼續`}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`b`,{children:V.title}),(0,K.jsx)(`i`,{children:V.advice}),V.raw&&(0,K.jsxs)(`code`,{children:[`原始錯誤：`,V.raw]})]}),(0,K.jsx)(`button`,{onClick:()=>H(null),"aria-label":`關閉錯誤訊息`,children:`×`})]}),U&&!V&&(0,K.jsxs)(`div`,{className:`noticeBanner`,role:`status`,children:[(0,K.jsx)(`span`,{children:U}),(0,K.jsx)(`button`,{onClick:()=>W(``),"aria-label":`關閉提示`,children:`×`})]}),(0,K.jsxs)(`section`,{className:`workspace`,children:[(0,K.jsxs)(`article`,{className:`stepCard inputCard`,children:[(0,K.jsxs)(`div`,{className:`stepHeading`,children:[(0,K.jsx)(`div`,{className:`stepNumber`,children:`01`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{children:`INPUT`}),(0,K.jsx)(`h2`,{children:`病人資料整理`}),(0,K.jsx)(`span`,{children:`JSON 會在瀏覽器內轉成文字；TXT 與貼上的純文字會保留原文。`})]})]}),(0,K.jsxs)(`div`,{className:`inputGrid`,children:[(0,K.jsxs)(`div`,{className:`dropZone ${Fe?`dragging`:``}`,onDragOver:e=>{e.preventDefault(),Ie(!0)},onDragLeave:()=>Ie(!1),onDrop:yt,children:[(0,K.jsx)(`input`,{ref:$e,type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:vt,hidden:!0}),(0,K.jsxs)(`div`,{className:`fileGlyph`,children:[`JSON`,(0,K.jsx)(`br`,{}),`TXT`]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`strong`,{children:s||`拖曳檔案到這裡`}),(0,K.jsx)(`p`,{children:s?`${Ye(e)}，可重新上傳替換`:`支援 .json、.txt，單檔上限 5 MB`})]}),(0,K.jsx)(`button`,{className:`secondaryButton`,onClick:()=>$e.current?.click(),children:`選擇檔案`})]}),(0,K.jsxs)(`div`,{className:`editorShell inputEditor`,children:[(0,K.jsxs)(`div`,{className:`editorToolbar`,children:[(0,K.jsxs)(`div`,{className:`tabs`,role:`tablist`,"aria-label":`病人資料版本`,children:[(0,K.jsx)(`button`,{className:p===`raw`?`active`:``,onClick:()=>g(`raw`),children:`原始輸入`}),(0,K.jsx)(`button`,{className:p===`formatted`?`active`:``,onClick:()=>g(`formatted`),children:`LLM 好讀文字`})]}),(0,K.jsx)(`span`,{children:Ye(p===`raw`?e:n)})]}),(0,K.jsx)(`textarea`,{"aria-label":p===`raw`?`原始病人資料`:`LLM好讀病人資料`,value:p===`raw`?e:n,onChange:e=>p===`raw`?t(e.target.value):a(e.target.value),placeholder:p===`raw`?`在此貼上 JSON 或純文字病人資料…`:`整理後的文字會顯示在這裡，您仍可手動修改。`,spellCheck:!1})]})]}),(0,K.jsxs)(`div`,{className:`cardActions splitActions`,children:[(0,K.jsxs)(`div`,{className:`inlineActions`,children:[(0,K.jsx)(`button`,{className:`primaryButton`,onClick:bt,disabled:J,children:`整理為 LLM 好讀文字`}),(0,K.jsx)(`button`,{className:`textButton`,onClick:()=>{t(qe),f(`示範資料.json`),g(`raw`),a(``),W(`已載入示範資料，請按「整理為 LLM 好讀文字」。`)},disabled:J,children:`載入去識別示範`})]}),(0,K.jsxs)(`div`,{className:`inlineActions`,children:[n&&(0,K.jsx)(`button`,{className:`textButton`,onClick:()=>void Dt(n,`資料`),children:Le===`資料`?`已複製`:`複製整理文字`}),n&&(0,K.jsx)(`button`,{className:`textButton`,onClick:()=>Je(`病人資料_整理版_for_llm.txt`,n),children:`下載 TXT`}),(e||n)&&(0,K.jsx)(`button`,{className:`dangerTextButton`,onClick:Ot,children:`清除本頁資料`})]})]})]}),(0,K.jsxs)(`article`,{className:`stepCard generatorCard`,children:[(0,K.jsxs)(`div`,{className:`stepHeading`,children:[(0,K.jsx)(`div`,{className:`stepNumber`,children:`02`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{children:`GENERATE`}),(0,K.jsx)(`h2`,{children:`生成糖尿病衛教報告`}),(0,K.jsx)(`span`,{children:`prompt 與模型都可修改；API 金鑰僅在執行時使用，不會寫入本站。`})]})]}),(0,K.jsxs)(`div`,{className:`guidelinePanel`,children:[(0,K.jsxs)(`div`,{className:`guidelinePanelCopy`,children:[(0,K.jsx)(`span`,{className:`guidelineEyebrow`,children:`GUIDELINE A/B/C TEST`}),(0,K.jsx)(`strong`,{children:`流程比較`}),(0,K.jsx)(`p`,{children:it.description})]}),(0,K.jsxs)(`div`,{className:`guidelineControls`,children:[(0,K.jsx)(`input`,{ref:et,type:`file`,accept:`.txt,text/plain`,onChange:gt,hidden:!0}),(0,K.jsx)(`select`,{className:`textInput guidelineSelect`,"aria-label":`選擇生成流程`,value:k,onChange:e=>Ce(e.target.value),disabled:J,children:ee.map(e=>(0,K.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,K.jsx)(`button`,{className:`secondaryButton`,onClick:()=>et.current?.click(),disabled:J,children:E?`更換指引 TXT`:`載入指引 TXT`}),E&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`button`,{className:`secondaryButton`,onClick:()=>void Et(),disabled:J,children:I===`counting`?`精算中…`:`用 countTokens 精算`}),(0,K.jsx)(`button`,{className:`dangerTextButton`,onClick:()=>{ye(``),xe(``),O(null),k===`B`&&Ce(`A`)},disabled:J,children:`移除指引`})]})]}),(0,K.jsxs)(`dl`,{className:`guidelineFacts`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`指引是否已載入`}),(0,K.jsx)(`dd`,{className:E?`ok`:`missing`,children:E?`已載入：${be}`:`尚未載入`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`指引字元數`}),(0,K.jsx)(`dd`,{children:E?`${v(se(E))} 字元`:`—`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`指引 token 數`}),(0,K.jsx)(`dd`,{children:E?`${v(ut.tokens)} tokens（${ut.method===`measured`?`實測`:`估算`}）`:`—`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`本次生成會帶入指引`}),(0,K.jsxs)(`dd`,{className:Z.guidelineIncluded?`ok`:`missing`,children:[Z.guidelineIncluded?`會帶入`:`不會帶入`,Z.guidelineRequestedButMissing&&`（已選 B 但指引是空的）`]})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`本次稽核會帶入指引`}),(0,K.jsx)(`dd`,{className:Q.guidelineIncluded?`ok`:`missing`,children:Q.guidelineIncluded?`會帶入`:`不會帶入`})]})]}),(0,K.jsxs)(`p`,{className:`guidelinePrivacy`,children:[`指引只保留在本頁；選擇 B 並執行時才會隨請求送出，不寫入本站資料庫。整份指引會明顯增加輸入量、等待時間與費用。 本工具在任何情況下都不會自動截斷指引或病人資料。`,k===`C`&&` C 使用模組目錄 draft-0.1，尚未經醫療團隊核准，組出的報告只能用於流程比較。`]})]}),(0,K.jsxs)(`div`,{className:`twoColumns`,children:[(0,K.jsxs)(`div`,{className:`settingsPane`,children:[(0,K.jsxs)(`div`,{className:`credentialBox`,children:[(0,K.jsxs)(`div`,{className:`labelRow credentialLabelRow`,children:[(0,K.jsx)(`label`,{className:`fieldLabel`,htmlFor:Ue,children:`Gemini 臨時存取金鑰`}),(0,K.jsx)(`span`,{children:`重新整理即清除`})]}),(0,K.jsxs)(`div`,{className:`passwordRow`,children:[(0,K.jsx)(`input`,{id:Ue,name:`dmEducationGeminiTransientCredentialManualEntry`,className:`textInput apiKeyInput`,type:ce?`text`:`password`,value:_,onChange:e=>ae(e.target.value),placeholder:`請手動貼上本次使用的 Gemini 金鑰`,autoComplete:`new-password`,autoCapitalize:`off`,autoCorrect:`off`,"data-1p-ignore":`true`,"data-lpignore":`true`,"data-bwignore":`true`,"data-form-type":`other`,spellCheck:!1}),(0,K.jsx)(`button`,{type:`button`,className:`showKeyButton`,onClick:()=>le(e=>!e),children:ce?`隱藏`:`顯示`})]}),(0,K.jsx)(`p`,{className:`fieldNote`,children:`只暫存在本頁記憶體，不寫入資料庫或瀏覽器儲存空間。GitHub Pages 版會由瀏覽器直接傳給 Google Gemini；私人站版則透過本站伺服器。請只在可信任的網址輸入金鑰。`})]}),(0,K.jsx)(`label`,{className:`fieldLabel modelLabel`,htmlFor:`model`,children:`Gemini 模型`}),(0,K.jsx)(`select`,{id:`model`,className:`textInput selectInput`,value:y,onChange:e=>pe(e.target.value),children:Ke.map(e=>(0,K.jsx)(`option`,{value:e.value,children:e.label},e.value))}),y===He&&(0,K.jsx)(`input`,{className:`textInput customModelInput`,"aria-label":`自訂Gemini模型ID`,value:me,onChange:e=>he(e.target.value),placeholder:`例如 gemini-flash-latest`,spellCheck:!1}),(0,K.jsx)(`p`,{className:`fieldNote`,children:`生成與品質稽核目前使用同一個模型；選擇自訂時請輸入 Gemini API 支援的模型 ID。`}),(0,K.jsx)(`label`,{className:`fieldLabel modelLabel`,htmlFor:`timeout`,children:`單次請求逾時上限（分鐘）`}),(0,K.jsx)(`input`,{id:`timeout`,className:`textInput`,type:`number`,min:1,max:60,value:Pe,onChange:e=>B(Math.max(1,Math.min(60,Number(e.target.value)||We)))}),(0,K.jsx)(`p`,{className:`fieldNote`,children:`帶入指引全文時單次可能需要數分鐘。逾時會明確顯示為逾時，與你按「停止」區分。`}),(0,K.jsx)(`label`,{className:`fieldLabel promptPresetLabel`,htmlFor:`generatorPromptPreset`,children:`生成規則版本`}),(0,K.jsxs)(`select`,{id:`generatorPromptPreset`,className:`textInput selectInput`,value:b,onChange:e=>dt(e.target.value),disabled:k===`C`,children:[c.map(e=>(0,K.jsx)(`option`,{value:e.id,children:e.label},e.id)),(0,K.jsx)(`option`,{value:`custom`,children:`自訂內容（目前文字）`})]}),(0,K.jsx)(`p`,{className:`fieldNote`,children:k===`C`?`C 使用固定的模組選擇器 prompt，不使用這裡的生成 prompt。`:b===`custom`?`下方文字已手動修改，重新整理頁面後不會保留。`:c.find(e=>e.id===b)?.description}),(0,K.jsxs)(`div`,{className:`labelRow`,children:[(0,K.jsx)(`label`,{className:`fieldLabel`,htmlFor:`generatorPrompt`,children:`生成用 system prompt`}),(0,K.jsx)(`button`,{className:`miniButton`,onClick:pt,children:b===`custom`?`恢復工作台預設`:`重新載入此版本`})]}),(0,K.jsx)(`textarea`,{id:`generatorPrompt`,className:`promptEditor`,value:k===`C`?De:C,onChange:e=>{w(e.target.value),x(`custom`)},readOnly:k===`C`,spellCheck:!1}),(0,K.jsx)(`p`,{className:`fieldNote`,children:`病人資料會自動接在 system prompt 後送出，不必複製到 prompt 內。`})]}),(0,K.jsxs)(`div`,{className:`outputPane`,children:[(0,K.jsxs)(`div`,{className:`outputHeader`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{className:`outputDot teal`}),(0,K.jsx)(`strong`,{children:k===`C`?`組合後的病人版報告`:`Gemini 報告`})]}),(0,K.jsx)(`span`,{children:A?Ye(A):`等待生成`})]}),(0,K.jsx)(`textarea`,{"aria-label":`Gemini產生的糖尿病衛教報告`,className:`outputEditor`,value:A,onChange:e=>{j(e.target.value),F(``)},placeholder:`產生的報告會顯示在這裡。您可以人工修改後，再送交 eval LLM 稽核。`,spellCheck:!1}),(0,K.jsxs)(`div`,{className:`outputActions`,children:[(0,K.jsx)(`button`,{onClick:()=>void Dt(A,`報告`),disabled:!A,children:Le===`報告`?`已複製`:`複製`}),(0,K.jsx)(`button`,{onClick:()=>Je(`糖尿病衛教報告.txt`,A),disabled:!A,children:`下載 TXT`})]}),Ee&&(0,K.jsxs)(`details`,{className:`tracePanel`,children:[(0,K.jsx)(`summary`,{children:`選模組稽核紀錄（醫療團隊用）`}),(0,K.jsx)(`pre`,{children:Ee})]})]})]}),(0,K.jsxs)(`div`,{className:`cardActionsColumn`,children:[(0,K.jsx)(Qe,{input:Z,title:`本次生成會送出的輸入`,note:k===`C`?`C 只送出精簡事實摘要，不送原始申報明細，也不送指引。`:void 0}),(0,K.jsx)(Ze,{blockers:ct,label:`目前不能生成的原因`}),(0,K.jsxs)(`div`,{className:`cardActions`,children:[(0,K.jsx)(`button`,{className:`primaryButton`,onClick:()=>void St(),disabled:kt,children:I===`generating`?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{className:`spinner`}),`Gemini 生成中… `,Me,` 秒`]}):`生成衛教報告`}),(0,K.jsx)(`button`,{className:`secondaryButton runAll`,onClick:()=>void Tt(),disabled:kt,children:`生成並接續稽核`}),I===`generating`&&(0,K.jsx)(`button`,{className:`stopButton`,onClick:wt,children:`停止生成`})]})]})]}),(0,K.jsxs)(`article`,{className:`stepCard evalCard`,children:[(0,K.jsxs)(`div`,{className:`stepHeading`,children:[(0,K.jsx)(`div`,{className:`stepNumber`,children:`03`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{children:`EVALUATE`}),(0,K.jsx)(`h2`,{children:`獨立品質稽核`}),(0,K.jsx)(`span`,{children:`eval LLM 同時看到整理後病人資料與待評估報告。`})]})]}),(0,K.jsxs)(`div`,{className:`twoColumns`,children:[(0,K.jsxs)(`div`,{className:`settingsPane`,children:[(0,K.jsx)(`label`,{className:`fieldLabel`,htmlFor:`evalPromptPreset`,children:`稽核規則版本`}),(0,K.jsxs)(`select`,{id:`evalPromptPreset`,className:`textInput selectInput`,value:S,onChange:e=>ft(e.target.value),children:[l.map(e=>(0,K.jsx)(`option`,{value:e.id,children:e.label},e.id)),(0,K.jsx)(`option`,{value:`custom`,children:`自訂內容（目前文字）`})]}),(0,K.jsx)(`p`,{className:`fieldNote`,children:S===`custom`?`下方文字已手動修改，重新整理頁面後不會保留。`:l.find(e=>e.id===S)?.description}),S===`colleague`&&!Y&&(0,K.jsxs)(`p`,{className:`promptWarning`,children:[`這個版本假設稽核模型已取得臨床指引；目前流程選的是 `,k,`，不會自動附上兩份 PDF，因此輸出的指引章節與引用仍需人工核對。`]}),(0,K.jsxs)(`div`,{className:`labelRow`,children:[(0,K.jsx)(`label`,{className:`fieldLabel`,htmlFor:`evalPrompt`,children:`eval LLM system prompt`}),(0,K.jsx)(`button`,{className:`miniButton`,onClick:mt,children:S===`custom`?`恢復工作台預設`:`重新載入此版本`})]}),(0,K.jsx)(`textarea`,{id:`evalPrompt`,className:`promptEditor evalPrompt`,value:T,onChange:e=>{_e(e.target.value),ge(`custom`)},spellCheck:!1}),(0,K.jsxs)(`div`,{className:`evalInputMap`,children:[(0,K.jsx)(`span`,{children:`稽核輸入`}),(0,K.jsx)(`strong`,{children:`病人資料`}),(0,K.jsx)(`i`,{children:`＋`}),(0,K.jsx)(`strong`,{children:`報告`}),(0,K.jsx)(`i`,{children:`＋`}),(0,K.jsx)(`strong`,{children:`評分規則`}),Q.guidelineIncluded&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`i`,{children:`＋`}),(0,K.jsx)(`strong`,{children:`指引全文`})]})]})]}),(0,K.jsxs)(`div`,{className:`outputPane evalOutput`,children:[(0,K.jsxs)(`div`,{className:`outputHeader`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{className:`outputDot amber`}),(0,K.jsx)(`strong`,{children:`稽核結果`})]}),P?(0,K.jsx)(`span`,{className:`verdict ${nt.tone}`,children:nt.label}):(0,K.jsx)(`span`,{children:`等待稽核`})]}),(0,K.jsx)(`textarea`,{"aria-label":`eval LLM稽核結果`,className:`outputEditor`,value:P,onChange:e=>F(e.target.value),placeholder:`這裡會列出稽核結論、分項評分、重大問題與具體修改建議。`,spellCheck:!1}),(0,K.jsxs)(`div`,{className:`outputActions`,children:[(0,K.jsx)(`button`,{onClick:()=>void Dt(P,`稽核`),disabled:!P,children:Le===`稽核`?`已複製`:`複製`}),(0,K.jsx)(`button`,{onClick:()=>Je(`衛教報告_稽核結果.txt`,P),disabled:!P,children:`下載 TXT`})]})]})]}),(0,K.jsxs)(`div`,{className:`cardActionsColumn`,children:[(0,K.jsx)(Qe,{input:Q,title:`本次稽核會送出的輸入`}),(0,K.jsx)(Ze,{blockers:lt,label:`目前不能稽核的原因`}),(0,K.jsxs)(`div`,{className:`cardActions`,children:[(0,K.jsx)(`button`,{className:`primaryButton amberButton`,onClick:()=>void Ct(),disabled:At,children:I===`evaluating`?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{className:`spinner`}),`品質稽核中… `,Me,` 秒`]}):`執行品質稽核`}),I===`evaluating`&&(0,K.jsx)(`button`,{className:`stopButton`,onClick:wt,children:`停止稽核`})]})]})]})]}),(0,K.jsxs)(`section`,{className:`safetyNote`,children:[(0,K.jsx)(`div`,{className:`safetyIcon`,children:`i`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`strong`,{children:`上線前的必要提醒`}),(0,K.jsx)(`p`,{children:`此工具是內容生成與稽核工作台，不是診斷系統。正式提供病人前，仍應由醫療團隊核准固定衛教內容、prompt、模型版本與發送規則，並建立人工抽查及版本紀錄。`})]})]}),(0,K.jsxs)(`footer`,{children:[(0,K.jsx)(`span`,{children:`糖尿病衛教報告工作台`}),(0,K.jsx)(`span`,{children:`資料僅在本頁處理；按下生成或稽核時才送往 Gemini API。`}),(0,K.jsx)(`span`,{className:`buildStamp`,children:`build ${u}`})]})]})}export{$e as default};