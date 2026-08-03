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
}`,c=[{id:`workbench`,label:`健康存摺安全版（目前預設）`,description:`單一病人版報告，強調資料時效、類型不明與歷史申報安全。`,prompt:i},{id:`colleague`,label:`v14`,description:`保留 DCSI、R／PR 規則、固定段落及個別化目標值。`,prompt:a}],l=[{id:`workbench`,label:`八面向安全稽核版（目前預設）`,description:`檢查事實、時間、類型、用藥、數據、可讀性、行動性與隱私。`,prompt:o},{id:`colleague`,label:`audit`,description:`以病人傷害風險為主，並輸出結構化 JSON 稽核結果。`,prompt:s}],u=`20260803163803`,d=[{id:`A`,label:`A｜現行流程・不帶入指引`,description:`生成 LLM 收到 system prompt 與病人資料；不附指引全文。`,usesGuideline:!1,llmWritesPatientText:!0},{id:`B`,label:`B｜現行流程・帶入指引全文`,description:`生成與稽核都額外附上整份《2022第2型糖尿病臨床照護指引》。需先載入指引 TXT。`,usesGuideline:!0,llmWritesPatientText:!0},{id:`C`,label:`C｜模組選擇流程（草案・未經醫療團隊核准）`,description:`LLM 只依病人資料輸出模組代碼與選取理由；病人可見正文由程式以固定文字組合，LLM 不改寫、不補數值。`,usesGuideline:!1,llmWritesPatientText:!1}];function ee(e){let t=d.find(t=>t.id===e);if(!t)throw Error(`未知的流程 arm：${e}`);return t}function f(e){if(e.totalTokens<=e.tokenLimit)return null;let t=e.totalTokens-e.tokenLimit;return{code:`token-limit`,message:`估計輸入約 ${e.totalTokens.toLocaleString(`zh-TW`)} tokens，超過模型上限 ${e.tokenLimit.toLocaleString(`zh-TW`)} tokens 約 ${t.toLocaleString(`zh-TW`)} tokens。`,howToFix:`本工具不會自動截斷指引或病人資料。請改選不帶入指引的 A，或改用輸入上限更大的模型。`,hard:!0}}function p(e){let t=[];return e.model||t.push({code:`no-model`,message:`還沒選定 Gemini 模型。`,howToFix:`請在模型下拉選單選擇，或在自訂欄位輸入完整的模型 ID。`,hard:!0}),e.requiresClientKey&&!e.apiKey.trim()&&t.push({code:`no-api-key`,message:`這個版本沒有伺服器可以代為保管金鑰，必須在頁面輸入 Gemini 金鑰。`,howToFix:`請在上方「Gemini 臨時存取金鑰」貼上金鑰。重新整理頁面即清除，不會寫入任何儲存空間。`,hard:!0}),e.arm===`B`&&!e.guidelineText.trim()&&t.push({code:`guideline-missing`,message:`已選 B（帶入指引全文），但目前沒有載入任何指引 TXT。`,howToFix:`請先按「載入指引 TXT」選擇完整的指引檔案；否則請改選 A，以免以為帶入了其實沒有。`,hard:!0}),t}function te(e){let t=[];e.llmText.trim()||t.push(e.rawInput.trim()?{code:`not-formatted`,message:`已經有原始病人資料，但還沒整理成 LLM 好讀文字。`,howToFix:`請按上方步驟 01 的「整理為 LLM 好讀文字」。更換病人檔案後也需要重新整理一次。`,hard:!0}:{code:`no-patient-data`,message:`還沒有病人資料。`,howToFix:`請在步驟 01 上傳 JSON／TXT、貼上文字，或按「載入去識別示範」，再按「整理為 LLM 好讀文字」。`,hard:!0}),e.arm!==`C`&&!e.generatorPrompt.trim()&&t.push({code:`empty-generator-prompt`,message:`生成用的 system prompt 是空白的。`,howToFix:`請在下方貼上 prompt，或按「恢復工作台預設」載回預設版本。`,hard:!0}),t.push(...p(e));let n=f(e);return n&&t.push(n),t}function ne(e){let t=[];e.llmText.trim()||t.push({code:`no-patient-data`,message:`稽核需要 LLM 好讀病人資料，目前是空的。`,howToFix:`請先完成步驟 01 的整理。`,hard:!0}),e.report.trim()||t.push({code:`no-report`,message:`還沒有可稽核的報告。`,howToFix:`請先執行「生成衛教報告」，或直接把要稽核的報告貼進報告欄位。`,hard:!0}),e.evalPrompt.trim()||t.push({code:`empty-eval-prompt`,message:`稽核用的 system prompt 是空白的。`,howToFix:`請在下方貼上 prompt，或按「恢復工作台預設」載回預設版本。`,hard:!0}),t.push(...p(e));let n=f(e);return n&&t.push(n),t}function re(e){return e.some(e=>e.hard)}var ie=652078,ae=283353,oe=1048576;function m(e){return e>=19968&&e<=40959||e>=13312&&e<=19903||e>=63744&&e<=64255||e>=12288&&e<=12351||e>=65280&&e<=65519}function h(e){let t=0,n=0,r=0,i=0,a=0;for(let o of e){a+=1;let e=o.codePointAt(0)??0;m(e)?t+=1:e<128?o===` `||o===`	`||o===`
`||o===`\r`||o===`\f`||o===`\v`?r+=1:n+=1:i+=1}return{total:a,cjk:t,asciiVisible:n,whitespace:r,other:i}}function se(e){if(!e)return 0;let{cjk:t,asciiVisible:n,whitespace:r,other:i}=h(e);return Math.round(t+n/4+r/5+i/2)}function ce(e){return e?[...e].length===652078?{tokens:ae,method:`measured`}:{tokens:se(e),method:`estimate`}:{tokens:0,method:`estimate`}}function le(e){return[...e].length}function g(e){return e.toLocaleString(`zh-TW`)}var ue=`【參考指引全文：2022第2型糖尿病臨床照護指引】`;function de(e,t,n){let r=n??{tokens:se(t),method:`estimate`};return{label:e,chars:le(t),tokens:r.tokens,method:r.method}}function _(e,t,n){let r=n.text??``,i=r.trim().length>0,a=n.include&&i,o=t.map(e=>e.text),s=a?`${o.join(`

`)}\n\n${ue}\n${r}`:o.join(`

`),c=[de(`system prompt`,e),...t.map(e=>de(e.label,e.text,e.count))];return a&&c.push(de(`指引全文`,r,ce(r))),{text:s,systemPrompt:e,parts:c,totalChars:c.reduce((e,t)=>e+t.chars,0),totalTokens:c.reduce((e,t)=>e+t.tokens,0),hasEstimate:c.some(e=>e.method===`estimate`),guidelineIncluded:a,guidelineRequestedButMissing:n.include&&!i}}function fe(e){return _(e.systemPrompt,[{label:`病人資料`,text:e.patientText}],{include:e.includeGuideline,text:e.guidelineText})}function pe(e){return _(e.systemPrompt,[{label:`病人資料`,text:`【病人資料】\n${e.patientText}`},{label:`待評估報告`,text:`【待評估報告】\n${e.report}`}],{include:e.includeGuideline,text:e.guidelineText})}function me(e){return _(e.systemPrompt,[{label:`病人事實摘要`,text:e.factsText}],{include:!1,text:``})}var he=[`REPORT_DATE`,`BIRTHDAY`,`INDX_DATE`,`SEX`,`P4P`,`HT`,`HL`,`CKD`,`T`,`DCSI`,`AGEGP`,`GRADE`],ge={REPORT_DATE:`報告日期`,BIRTHDAY:`出生日期`,INDX_DATE:`糖尿病指標日期`,SEX:`性別代碼`,P4P:`是否參加糖尿病P4P`,HT:`高血壓`,HL:`高血脂`,CKD:`慢性腎臟病`,T:`糖尿病病程年數`,DCSI:`DCSI總分`,AGEGP:`年齡分組`,GRADE:`整體分級`},_e={medication:`用藥紀錄`,labData:`檢驗資料`,chinesemed:`中藥用藥`,imaging:`影像資料`,allergy:`過敏資料`,surgery:`手術資料`,discharge:`出院資料`,medDays:`用藥天數資料`,patientSummary:`病人摘要`,cancerScreening:`癌症篩檢`,adultHealthCheck:`成人健檢`};function v(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function y(e){return e==null||e===``||e===`null`?`未提供`:typeof e==`object`?JSON.stringify(e):String(e).replaceAll(`\r`,` `).replaceAll(`
`,` `).trim()||`未提供`}function b(e){return Array.isArray(e)?e.map(b):v(e)?Object.fromEntries(Object.keys(e).sort().map(t=>[t,b(e[t])])):e}function ve(e){let t=new Map;for(let n of e){let e=JSON.stringify(b(n)),r=t.get(e);r?r.count+=1:t.set(e,{record:n,count:1})}return[...t.values()]}function x(e,t){let n=he.indexOf(e),r=he.indexOf(t);if(n!==-1||r!==-1)return n===-1?1:r===-1?-1:n-r;let i=e.match(/^(R|PR)(\d+)$/),a=t.match(/^(R|PR)(\d+)$/);return i&&a?i[1]===a[1]?Number(i[2])-Number(a[2]):i[1]===`R`?-1:1:i?-1:a?1:e.localeCompare(t)}function ye(e,t=0){let n=`  `.repeat(t);if(Array.isArray(e))return e.length?e.flatMap((e,r)=>v(e)||Array.isArray(e)?[`${n}- 第 ${r+1} 筆`,...ye(e,t+1)]:[`${n}- ${y(e)}`]):[`${n}（空陣列）`];if(v(e)){let r=Object.entries(e);return r.length?r.flatMap(([e,r])=>v(r)||Array.isArray(r)?[`${n}${e}：`,...ye(r,t+1)]:[`${n}${e}：${y(r)}`]):[`${n}（空物件）`]}return[`${n}${y(e)}`]}function S(e,t){let n=e[t];return v(n)&&Array.isArray(n.rObject)?n.rObject:[]}function be(e){return v(e)?Object.entries(e).filter(([,e])=>e!=null&&e!==``&&e!==`null`).map(([e,t])=>`${e}:${y(t)}`).join(`｜`):y(e)}function xe(e){if(!v(e))return[`【輸入資料】`,...ye(e),``,`【資料使用限制】`,`以上僅重新排版，沒有推定缺少的診斷、日期、用藥狀態或治療資訊。`].join(`
`);if(![`downloadType`,`userInfo`,`userInput`,`rawSources`].some(t=>t in e))return[`【來源JSON欄位】`,...ye(e),``,`【資料使用限制】`,`以上保留來源欄位並重新排版；空值或未出現欄位不得自行解讀為0或正常。`].join(`
`);let t=[`【檔案與基本資料】`,`資料匯出類型：${y(e.downloadType)}`],n=v(e.userInfo)?e.userInfo:{},r=v(e.userInput)?e.userInput:{},i=v(e.rawSources)?e.rawSources:{};for(let[e,r]of Object.entries(n))t.push(`${e}：${y(r)}`);t.push(``,`【來源模型欄位】`,`以下保留來源原值；未提供不等同於0。`);let a=Object.keys(r).sort(x);a.length||t.push(`未提供來源模型欄位。`);for(let e of a){let n=ge[e]?`（${ge[e]}）`:``;t.push(`${e}${n}：${y(r[e])}`)}t.push(``,`【DCSI與風險欄位說明】`),t.push(`僅保留來源DCSI、R與PR原始欄位；整理階段不重新解釋分數。來源未出現的欄位不得自行補值，也不得直接視為0。`),t.push(``,`【資料來源概況】`);let o=Object.entries(i);o.length||t.push(`未提供rawSources資料來源。`);for(let[e,n]of o){let r=v(n)&&Array.isArray(n.rObject)?n.rObject:[];t.push(`${_e[e]??e}（${e}）：${r.length}筆${r.length?``:`，來源為空陣列`}`)}let s=S(i,`medication`),c=ve(s),l=new Map;for(let e of c){let t=v(e.record)?e.record:{},n=`${y(t.drug_date).replaceAll(`/`,`-`)}｜${`ICD ${y(t.icd_code)}｜${y(t.icd_cname)}`}`,r=be(Object.fromEntries(Object.entries(t).filter(([e])=>![`drug_date`,`icd_code`,`icd_cname`].includes(e)))),i=l.get(n)??[];i.push({text:r||`原紀錄沒有其他欄位`,count:e.count}),l.set(n,i)}t.push(``,`【用藥紀錄】`),t.push(`來源共${s.length}筆；完全相同紀錄合併後${c.length}筆。重複次數以×N保留；不同欄位不合併。`),s.length||t.push(`未提供用藥紀錄。`);for(let e of[...l.keys()].sort().reverse()){t.push(e);for(let n of l.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}let u=S(i,`labData`),d=ve(u),ee=new Map;for(let e of d){let t=v(e.record)?e.record:{},n=[y(t.fee_ym),y(t.order_code),y(t.order_name),`方法:${y(t.assay_method)}`,`檢體或模式:${y(t.inspect_mode)}`].join(`｜`),r=`${y(t.assay_item_name)}=${y(t.assay_value)}`;y(t.unit_data)!==`未提供`&&(r+=` ${y(t.unit_data)}`),r+=`｜參考:${y(t.consult_value)}`;let i=Object.entries(t).filter(([e,t])=>![`fee_ym`,`order_code`,`order_name`,`assay_method`,`inspect_mode`,`assay_item_name`,`assay_value`,`unit_data`,`consult_value`].includes(e)&&t!=null&&t!==``).map(([e,t])=>`${e}:${y(t)}`);i.length&&(r+=`｜其他欄位:${i.join(`、`)}`);let a=ee.get(n)??[];a.push({text:r,count:e.count}),ee.set(n,a)}t.push(``,`【檢驗與檢查紀錄】`),t.push(`來源共${u.length}筆；完全相同紀錄合併後${d.length}筆。若來源只有費用年月而沒有採檢日時，不得推定同月份內的先後順序。`),u.length||t.push(`未提供檢驗與檢查紀錄。`);for(let e of[...ee.keys()].sort().reverse()){t.push(e);for(let n of ee.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}t.push(``,`【其他來源的非空紀錄】`);let f=0;for(let[e]of o.filter(([e])=>![`medication`,`labData`].includes(e))){let n=S(i,e);if(!n.length)continue;f+=n.length;let r=ve(n);t.push(`${_e[e]??e}（${e}）：來源${n.length}筆，完全相同紀錄合併後${r.length}筆。`),r.forEach((e,n)=>{t.push(`- ${n+1}. ${be(e.record)}${e.count>1?`｜×${e.count}`:``}`)})}f||t.push(`其餘來源目前沒有可列出的紀錄。`);let p=Object.keys(e).filter(e=>![`downloadType`,`userInfo`,`userInput`,`rawSources`].includes(e));if(p.length){t.push(``,`【其他根層欄位】`);for(let n of p)t.push(`${n}：${y(e[n])}`)}return t.push(``,`【資料使用限制】`),t.push(`以上為來源JSON重新排版；除合併完全相同紀錄外，未刪除不同結果，也未判定哪一筆較可信。重複筆數均以×N保留。`),t.push(`不同檢驗數值可能代表真實病程變化，也可能涉及資料品質；若有疑義，應由醫療人員結合實際採檢時間與臨床狀況確認。`),t.push(`來源未提供的日期、糖尿病類型、診斷、檢驗、用藥狀態或治療資訊不得自行補寫；歷史申報用藥不得直接描述為目前仍在使用。`),t.join(`
`)}var C=300;function Se(e,t=C){let n=e.replace(/\s+/g,` `).trim();return n.length<=t?n:`${n.slice(0,t)}…（原始回應共 ${n.length} 字，此處僅顯示前 ${t} 字）`}function Ce(e,t){let n=t.toLowerCase();return e===400&&(n.includes(`api key not valid`)||n.includes(`api_key_invalid`))?{title:`Gemini 不接受這把 API 金鑰（HTTP 400）`,advice:`請確認貼上的是完整、未過期的金鑰，且該金鑰已啟用 Generative Language API。重新貼一次時注意不要含到前後空白。`}:e===400?{title:`Gemini 認為這次請求的內容或參數有問題（HTTP 400）`,advice:`常見原因是模型 ID 不支援目前的請求格式，或輸入內容含有無法處理的欄位。請對照下方原始錯誤，先試著改用預設模型。`}:e===401||e===403?{title:`這把金鑰沒有呼叫此模型的權限（HTTP `+e+`）`,advice:`請確認金鑰所屬專案已啟用 Generative Language API、未被限制來源網域，且帳單設定允許使用這個模型。`}:e===404?{title:`找不到這個模型 ID（HTTP 404）`,advice:`請確認模型名稱拼寫正確且你的金鑰有權存取。可先切回預設的 gemini-3.6-flash 確認流程本身正常。`}:e===413?{title:`請求內容過大，被拒絕（HTTP 413）`,advice:`這通常發生在帶入指引全文（B）時。請確認是否真的需要整份指引；本工具不會自動截斷指引，需要縮減請由你決定。`}:e===429?{title:`超過配額或速率上限（HTTP 429）`,advice:`免費層級對大型輸入特別容易觸發。請稍候再試、改用較小的輸入（例如改跑 A），或換一把有額度的金鑰。`}:e===408||e===504||e===524||e===522?{title:`請求逾時（HTTP ${e}）`,advice:`帶入指引全文時輸入約 283,353 tokens，單次回應可能需要數分鐘，中間的代理層可能先行斷線。可改跑 A 確認流程正常，或改用回應較快的模型。`}:e===499?{title:`連線在回應完成前被中斷（HTTP 499）`,advice:`多半是瀏覽器或中間代理層提前關閉連線。若是在 B 模式發生，請視為逾時處理。`}:e>=500?{title:`Gemini 端暫時性錯誤（HTTP ${e}）`,advice:`這不是你的輸入造成的。請稍候重試；若持續發生，改用另一個模型或稍後再跑。`}:{title:`Gemini 回傳 HTTP ${e}`,advice:`請參考下方原始錯誤內容判斷原因。`}}function we(e){let t=e.trim();return t&&t.toLowerCase()!==`unknown`?t:``}function w(e){let{status:t=null,apiMessage:n=``,rawBody:r=``,cause:i,timedOut:a=!1}=e,o=we(e.statusText??``);if(i instanceof Error&&i.name===`AbortError`&&!a)return{title:`已依你的要求停止這次請求`,advice:`沒有送出任何後續請求；你可以調整設定後重新執行。`,raw:``,status:null,aborted:!0,timedOut:!1};if(a||i instanceof Error&&i.name===`TimeoutError`)return{title:`等待 Gemini 回應超過設定的時間上限`,advice:`帶入指引全文時輸入約 283,353 tokens，回應時間會明顯拉長。可以延長逾時上限、改跑 A 對照，或改用較快的模型。請求已中止，沒有部分結果。`,raw:i instanceof Error?i.message:``,status:null,aborted:!1,timedOut:!0};if(i instanceof TypeError)return{title:`瀏覽器無法送出這次請求（網路層失敗）`,advice:`常見原因：網路中斷、瀏覽器擴充功能或企業代理封鎖了對 Gemini 的請求、或 CORS 被擋。請開瀏覽器主控台看是否有被封鎖的紀錄，並試著關閉擴充功能後重試。`,raw:i.message,status:null,aborted:!1,timedOut:!1};if(t===null)return{title:`請求失敗`,advice:`請參考下方原始錯誤內容。`,raw:i instanceof Error?i.message:String(i??``),status:null,aborted:!1,timedOut:!1};if(!n&&r){let e=/^\s*<(?:!doctype|html)/i.test(r),n=Ce(t,r);return{title:e?`回應不是 Gemini 的 JSON，而是一頁 HTML（HTTP ${t}${o?` ${o}`:``}）`:n.title,advice:e?`這代表請求沒有走到 Gemini，或在中途被代理層攔下並改回錯誤頁。${n.advice}`:n.advice,raw:Se(r),status:t,aborted:!1,timedOut:!1}}let s=Ce(t,n);return{title:s.title,advice:s.advice,raw:n?Se(n):``,status:t,aborted:!1,timedOut:!1}}var Te=`https://generativelanguage.googleapis.com/v1/interactions`;function T(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}async function E(e){let t=await e.text(),n=null;try{let e=JSON.parse(t);T(e)&&(n=e)}catch{n=null}return{ok:e.ok,status:e.status,statusText:e.statusText,json:n,rawBody:t}}function Ee(e){return typeof e.output_text==`string`?e.output_text:typeof e.outputText==`string`?e.outputText:[...Array.isArray(e.steps)?e.steps:[]].reverse().flatMap(e=>!T(e)||e.type!==`model_output`||!Array.isArray(e.content)?[]:e.content).filter(e=>T(e)&&e.type===`text`&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()||(Array.isArray(e.outputs)?e.outputs:[]).flatMap(e=>T(e)&&Array.isArray(e.content)?e.content:[]).filter(e=>T(e)&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()||(Array.isArray(e.candidates)?e.candidates:[]).flatMap(e=>{if(!T(e))return[];let t=e.content;return T(t)&&Array.isArray(t.parts)?t.parts:[]}).filter(e=>T(e)&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()}function D(e){if(!e)return``;let t=e.error;return T(t)&&typeof t.message==`string`?t.message:typeof e.error==`string`?e.error:``}function O(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(new DOMException(`timeout`,`TimeoutError`)),t);return{signal:AbortSignal.any([e,n.signal]),timedOut:()=>n.signal.aborted,cleanup:()=>clearTimeout(r)}}var k=class extends Error{constructor(e){super(e.title),this.name=`GeminiRequestError`,this.failure=e}};async function De(e){let{apiKey:t,model:n,systemPrompt:r,input:i,signal:a,direct:o,simulate:s}=e,c=O(a,e.timeoutMs??9e5),l=Date.now();try{if(o&&!t.trim())throw new k(w({status:null,apiMessage:`這個版本需要在頁面輸入 Gemini API 金鑰。`}));let e=await E(o?await fetch(Te,{method:`POST`,signal:c.signal,headers:{"Content-Type":`application/json`,"x-goog-api-key":t.trim()},body:JSON.stringify({model:n,input:i,system_instruction:r,store:!1})}):await fetch(`/api/gemini`,{method:`POST`,signal:c.signal,headers:{"Content-Type":`application/json`},body:JSON.stringify({apiKey:t,model:n,systemPrompt:r,input:i})}));if(!e.ok)throw new k(w({status:e.status,statusText:e.statusText,apiMessage:D(e.json),rawBody:e.json?``:e.rawBody}));if(!e.json)throw new k(w({status:e.status,statusText:e.statusText,rawBody:e.rawBody}));let a=o?Ee(e.json):String(e.json.text??``);if(!a.trim())throw new k(w({status:e.status,apiMessage:D(e.json)||`Gemini 已回應，但回應中找不到文字輸出。`,rawBody:e.json?``:e.rawBody}));return{text:a,usage:T(e.json.usage)?e.json.usage:T(e.json.usage_metadata)?e.json.usage_metadata:null,elapsedMs:Date.now()-l}}catch(e){throw e instanceof k?e:new k(w({cause:e,timedOut:c.timedOut()}))}finally{c.cleanup()}}async function Oe(e){let{apiKey:t,model:n,text:r,direct:i,signal:a}=e,o=i?`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}:countTokens`:`/api/gemini/count-tokens`,s=await E(i?await fetch(o,{method:`POST`,signal:a,headers:{"Content-Type":`application/json`,"x-goog-api-key":t.trim()},body:JSON.stringify({contents:[{parts:[{text:r}]}]})}):await fetch(o,{method:`POST`,signal:a,headers:{"Content-Type":`application/json`},body:JSON.stringify({apiKey:t,model:n,text:r})}));if(!s.ok||!s.json)throw new k(w({status:s.status,statusText:s.statusText,apiMessage:D(s.json),rawBody:s.json?``:s.rawBody}));let c=s.json.totalTokens??s.json.total_tokens??s.json.tokens,l=Number(c);if(!Number.isFinite(l))throw new k(w({status:s.status,apiMessage:`countTokens 回應中沒有 totalTokens。`}));return l}var ke=`draft-0.1`,A=[{id:`BASE-01`,topic:`BASE`,title:`資料時效與使用範圍`,appliesWhen:`每份報告固定顯示，由程式自動加入，LLM 不需選取。`,typeGate:`any`,autoOnly:!0,patientText:`關於這份報告

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

若一隻腳突然劇烈疼痛、變得明顯冰冷或蒼白、發紫、麻木或無力，請立即就醫。若有傷口、紅腫、流膿、異味或發燒，也要儘快就醫，不要自行處理或等待傷口自然好轉。`},{id:`TYPE-UNCLEAR`,topic:`TYPE`,title:`糖尿病類型不明或資料互相矛盾`,appliesWhen:`診斷碼、用藥或病史對第一型與第二型的指向不一致，或無法確認類型。由程式依 patient-facts 判定自動加入。`,typeGate:`any`,autoOnly:!0,patientText:`目前資料無法一致確認您的糖尿病類型。第一型與第二型糖尿病在胰島素使用、低血糖與生病期間的照護方式可能不同，請在下次回診時向醫師確認診斷類型及適合您的自我照護方式。`}],j=new Map(A.map(e=>[e.id,e]));A.filter(e=>!e.autoOnly);var M=`draft-0.1`,N=[{id:`SC-MONITOR`,behavior:`monitoring`,title:`掌握自己的數字`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`掌握自己的數字

知道自己的數字，回診時才問得出重點。

1. 找出最近一次的糖化血色素、血壓、血脂與腎功能檢查結果與日期。若不確定，可在回診時請醫療團隊協助查詢。
2. 若醫療團隊建議您在家測血糖，請記錄測量的時間點（空腹、飯後或睡前）與數值，回診時一起帶去。
3. 在家量血壓時，先坐著休息五分鐘，手臂與心臟同高，同一時間每天量，並把數值記下來。
4. 不要只看單一次的數字。一段時間的變化比單次結果更能反映真實狀況。

下次回診可以確認

1. 我的糖化血色素、血壓與血脂目標各是多少？
2. 我需要在家自我監測血糖嗎？多久測一次、什麼時間點測？`},{id:`SC-MEDS`,behavior:`taking-medication`,title:`把藥用對、用得安全`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`把藥用對、用得安全

規律用藥是控制糖尿病最直接的一環，而任何調整都應該由醫師決定。

1. 依醫師指示的時間與劑量服藥。若經常忘記，可使用藥盒、手機提醒，或請醫療團隊協助簡化用藥。
2. 服藥後若出現不舒服，先聯絡醫療團隊或藥師確認，不要自行停藥、減藥或更換藥品。
3. 每次看診、看牙或到藥局時，主動出示目前所有正在使用的藥品清單，包含中草藥、保健食品與別家醫院開立的藥。
4. 不要自行購買來路不明的藥品、偏方或宣稱可以取代處方的產品。

下次回診可以確認

1. 我目前實際在使用的藥有哪些？有沒有可以簡化的？
2. 我的藥物需要依腎功能或年齡調整嗎？`},{id:`SC-EAT`,behavior:`healthy-eating`,title:`吃得穩定，不必吃得痛苦`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`吃得穩定，不必吃得痛苦

糖尿病的飲食不是不能吃，而是讓份量與時間穩定下來。

1. 三餐時間盡量固定，不要為了控制血糖而跳過正餐。
2. 主食（飯、麵、麵包、根莖類、水果）是影響血糖最主要的來源。份量比種類更重要，可請營養師協助換算適合您的份量。
3. 每餐先吃蔬菜與蛋白質，再吃主食，有助於減緩血糖上升。
4. 含糖飲料是最容易被忽略的來源，包含手搖飲、罐裝飲料與運動飲料。改喝白開水或無糖茶是最快見效的一步。
5. 若同時有腎臟或心臟問題，鹽分、蛋白質與水分的限制需要依個人狀況設計，不要自行套用網路上的飲食法。

下次回診可以確認

1. 適合我的每餐主食份量大約是多少？
2. 我可以轉介營養師做個別化的飲食計畫嗎？`},{id:`SC-ACTIVE`,behavior:`being-active`,title:`動起來，從做得到的強度開始`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`動起來，從做得到的強度開始

規律活動能同時改善血糖、血壓與血脂，重點是能持續。

1. 從您現在做得到的強度開始，逐步增加。走路是最容易開始也最容易持續的方式。
2. 盡量減少長時間久坐。每坐約一小時起來活動幾分鐘，累積起來也有效果。
3. 活動時穿合腳的鞋襪，結束後檢查雙腳有沒有磨破或紅腫。
4. 若活動時出現胸悶、胸痛、明顯喘不過氣、頭暈或冒冷汗，請立即停止並儘速就醫。
5. 若已有足部傷口、視網膜病變、心臟疾病或平衡問題，開始新的運動前請先與醫療團隊討論適合的方式與強度。

下次回診可以確認

1. 以我目前的身體狀況，適合哪一類活動？有沒有需要避免的動作？
2. 我需要先做運動前評估嗎？`},{id:`SC-RISK-REDUCE`,behavior:`reducing-risks`,title:`降低併發症風險的例行事項`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`降低併發症風險的例行事項

有些事情一年只要做一次，但少做的代價很大。

1. 依醫療團隊安排完成每年的眼底、腎功能、足部與口腔檢查。這些檢查在早期通常沒有症狀，不能靠感覺判斷要不要做。
2. 若有吸菸，戒菸是對血管保護效益最大的一件事，可請醫療團隊轉介戒菸服務或撥打戒菸專線。
3. 依醫療團隊建議接種疫苗。
4. 維持口腔清潔並定期洗牙。牙周發炎與血糖控制會互相影響。

下次回診可以確認

1. 我今年還有哪些檢查沒有完成？
2. 我適合接種哪些疫苗？`},{id:`SC-HYPO`,behavior:`problem-solving`,title:`認識低血糖並知道怎麼處理`,core:!1,appliesWhen:`資料中有胰島素或促胰島素分泌劑（如 sulfonylurea、glinide）的申報紀錄時納入。`,patientText:`認識低血糖並知道怎麼處理

某些糖尿病藥物可能造成低血糖，事先知道怎麼處理就不會慌張。

1. 常見症狀包含發抖、冒冷汗、心悸、飢餓感、頭暈、視線模糊、注意力不集中或突然情緒改變。
2. 懷疑低血糖時，若手邊有血糖機請先測量。無法測量時，先當作低血糖處理。
3. 立即補充約 15 公克的醣類，例如半杯果汁、含糖飲料或方糖。等待 15 分鐘後再測一次，若仍偏低可再補充一次。
4. 症狀改善後，若距離下一餐還久，可再吃一份含澱粉的點心。
5. 隨身攜帶糖果或含糖飲料，並讓家人、同事知道您可能發生低血糖以及該怎麼幫您。

需要立即處理的情況

若出現意識不清、抽搐或無法自行吞嚥，旁人不可強行餵食，請立即撥打 119。

下次回診可以確認

1. 我目前的藥物中，哪些可能造成低血糖？
2. 我最近是否有低血糖發作？需要調整治療嗎？`},{id:`SC-SICKDAY`,behavior:`problem-solving`,title:`生病或使用類固醇期間的照護`,core:!1,appliesWhen:`資料中有全身性類固醇的申報紀錄，或年齡 65 歲以上，或已發生併發症項目較多時納入。`,patientText:`生病或使用類固醇期間的照護

感染、發燒或使用類固醇期間，血糖可能明顯上升。

1. 生病期間不要自行停用糖尿病藥物，除非醫師另有指示。
2. 這段期間血糖可能比平常高，若醫療團隊有教您自我監測，建議增加測量頻率。
3. 注意補充水分。發燒、腹瀉或嘔吐時特別容易脫水。
4. 使用類固醇期間血糖上升是常見反應，停藥後可能回降。用藥前後請主動告知糖尿病照護團隊。

需要儘速就醫的情況

持續嘔吐無法進食、血糖持續偏高不下、呼吸變喘、意識改變或明顯脫水，請儘速就醫。`},{id:`SC-COPING`,behavior:`healthy-coping`,title:`照顧情緒也是照顧糖尿病`,core:!1,appliesWhen:`已發生併發症較多或整體疾病負擔較高時納入。`,patientText:`照顧情緒也是照顧糖尿病

長期管理慢性病本來就累，情緒低落或倦怠並不代表您做得不好。

1. 覺得疲乏、沮喪或對自我照護失去動力，是常見且可以被協助的狀況，不是意志力的問題。
2. 一次只調整一件事。設定小而具體的目標，比一次改變全部更容易持續。
3. 讓家人或朋友知道您正在做的事，需要時請他們協助提醒或陪同回診。
4. 若情緒低落持續超過兩週、影響睡眠或日常生活，請主動告訴醫療團隊，可安排進一步評估與轉介。

需要立即處理的情況

若出現傷害自己的念頭，請立即告訴身邊的人並尋求協助，或撥打 1925 安心專線。`}],P=new Map(N.map(e=>[e.id,e]));function Ae(e){let t={},n=[];for(let e of N)e.core&&(n.push(e.id),t[e.id]=`核心自我照護模組，固定納入。`);let r=e.medicationClasses.map(e=>e.atcClass).join(` `);/胰島素|insulin|磺醯脲|sulfonyl|glinide|瑞格列|格列/i.test(r)&&(n.push(`SC-HYPO`),t[`SC-HYPO`]=`申報用藥分類中出現胰島素或促胰島素分泌劑，需納入低血糖處理。`);let i=/腎上腺素|類固醇|corticoster|prednis|dexameth/i.test(r),a=e.ageYears.known?e.ageYears.value:null,o=e.existingComplications.filter(e=>(e.value??0)>0).length;(i||a!==null&&a>=65||o>=3)&&(n.push(`SC-SICKDAY`),t[`SC-SICKDAY`]=[i?`申報用藥分類中出現全身性類固醇`:``,a!==null&&a>=65?`年齡 ${a} 歲`:``,o>=3?`已發生併發症 ${o} 項`:``].filter(Boolean).join(`；`)+`。`);let s=e.dcsiTotal.known?e.dcsiTotal.value:null;return(s!==null&&s>=4||o>=3)&&(n.push(`SC-COPING`),t[`SC-COPING`]=`疾病負擔較高（DCSI ${s??`未知`}，已發生併發症 ${o} 項）。`),{moduleIds:n,reasons:t}}var je=`2022-guideline-extract-0.1`,Me=`中華民國糖尿病學會《2022第2型糖尿病臨床照護指引》`,Ne=new Map([{id:`hba1c-general`,category:`glycemic-target`,appliesTo:`一般成人`,statement:`糖化血色素控制目標為低於 7.0%，並需個別化考量。`,citation:{table:`表一 血糖控制目標`,pdfPage:13},patientFacing:!0},{id:`fpg-general`,category:`glycemic-target`,appliesTo:`一般成人`,statement:`空腹血糖控制目標為 80–130 mg/dL。`,citation:{section:`第九章 血糖控制目標`,pdfPage:72},patientFacing:!0},{id:`ppg-general`,category:`glycemic-target`,appliesTo:`一般成人`,statement:`餐後血糖控制目標為 80–160 mg/dL。`,citation:{section:`第九章 血糖控制目標`,pdfPage:72},patientFacing:!0},{id:`hba1c-elderly-healthy`,category:`glycemic-target`,appliesTo:`65 歲以上、共病少且認知與身體機能正常`,statement:`糖化血色素目標放寬為低於 7–7.5%。`,citation:{table:`表二 高齡者血糖目標`,pdfPage:72},patientFacing:!0},{id:`hba1c-elderly-intermediate`,category:`glycemic-target`,appliesTo:`65 歲以上、多種共病或認知與身體機能輕至中度異常`,statement:`糖化血色素目標放寬為低於 8.0%。`,citation:{table:`表二 高齡者血糖目標`,pdfPage:72},patientFacing:!0},{id:`hba1c-elderly-poor`,category:`glycemic-target`,appliesTo:`65 歲以上、末期慢性病或認知與身體機能中至重度異常`,statement:`不以糖化血色素作為唯一控制目標，重點在避免低血糖與有症狀的高血糖。`,citation:{table:`表二 高齡者血糖目標`,pdfPage:72},patientFacing:!0},{id:`hba1c-unreliable`,category:`measurement-caveat`,appliesTo:`貧血、變異血色素、慢性腎病變或懷孕`,statement:`糖化血色素可能無法代表平均血糖，可加測糖化白蛋白與自我血糖監測輔助判讀。`,citation:{table:`表九 註 1`,pdfPage:19},patientFacing:!0},{id:`bp-treatment-threshold`,category:`bp-target`,appliesTo:`糖尿病人`,statement:`血壓達到或超過 140/90 mmHg 通常即開始高血壓治療。`,citation:{section:`第十四章 心血管併發症`,pdfPage:147},patientFacing:!0},{id:`bp-target-general`,category:`bp-target`,appliesTo:`一般糖尿病人`,statement:`血壓控制在 140/90 mmHg 以下。`,citation:{section:`第十四章 心血管併發症`,pdfPage:147},patientFacing:!0},{id:`bp-target-intensive`,category:`bp-target`,appliesTo:`可耐受且屬心血管或腦血管高危族群`,statement:`在病人可承受的情況下可進一步控制至 130/80 mmHg。`,citation:{section:`第十四章 心血管併發症`,pdfPage:147},patientFacing:!0},{id:`ldl-general`,category:`lipid-target`,appliesTo:`所有糖尿病人`,statement:`低密度脂蛋白膽固醇目標為低於 100 mg/dL。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`ldl-cvd`,category:`lipid-target`,appliesTo:`已有心血管疾病`,statement:`低密度脂蛋白膽固醇目標為低於 70 mg/dL。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`hdl-target`,category:`lipid-target`,appliesTo:`所有糖尿病人`,statement:`高密度脂蛋白膽固醇目標為男性高於 40 mg/dL、女性高於 50 mg/dL。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`tg-target`,category:`lipid-target`,appliesTo:`所有糖尿病人`,statement:`三酸甘油酯目標為低於 150 mg/dL；達到或超過 500 mg/dL 時需藥物處理。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`metformin-egfr-30`,category:`medication-safety`,appliesTo:`eGFR 低於 30 mL/min/1.73m²`,statement:`此腎功能下 metformin 屬禁用。`,citation:{section:`第十一章 藥物治療`,pdfPage:100},patientFacing:!1},{id:`metformin-egfr-30-45`,category:`medication-safety`,appliesTo:`eGFR 介於 30–45 mL/min/1.73m²`,statement:`metformin 應減量使用。`,citation:{section:`第十一章 藥物治療`,pdfPage:100},patientFacing:!1},{id:`albuminuria-diagnosis`,category:`kidney`,appliesTo:`尿液白蛋白/肌酸酐比值異常者`,statement:`異常結果應於 3–6 個月內重複測定，3 次檢查中有 2 次異常才診斷為蛋白尿。`,citation:{table:`表九 註 2`,pdfPage:19},patientFacing:!0},{id:`kidney-intensive-followup`,category:`screening-interval`,appliesTo:`UACR 超過 300 mg/g 或 eGFR 介於 30–60 mL/min/1.73m²`,statement:`至少每半年監測追蹤一次。`,citation:{table:`表九 註 3`,pdfPage:19},patientFacing:!0},{id:`interval-hba1c`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`糖化血色素與靜脈血漿血糖建議每 3 個月監測一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-education`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`糖尿病衛教建議每 3 個月進行一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-lipid`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`血脂建議每年檢查一次；若血脂異常或正在使用降血脂藥物，改為每 3–6 個月。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-kidney`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`肌酸酐、eGFR、尿液常規與白蛋白尿建議每年檢查一次；異常需追蹤者改為每 3–6 個月。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-eye`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`視力與眼底檢查建議每年一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-foot`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`足部脈搏與踝臂動脈收縮壓比值建議每年檢查一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-neuropathy`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`神經病變評估（單股纖維壓覺、128 Hz 音叉震動感、肌腱反射）建議每年一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-oral`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`口腔檢查建議每年一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-self-management`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`體重、血壓、血糖與足部的自我管理需經常進行。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-retina-followup`,category:`screening-interval`,appliesTo:`已完成眼底檢查者`,statement:`眼底沒有變化或僅輕微變化時每年一次；比上次檢查惡化時每 3–6 個月一次；懷孕時需更頻繁追蹤。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`screening-adult`,category:`screening-interval`,appliesTo:`40 歲以上一般民眾`,statement:`40 歲以上建議每 3 年篩檢一次糖尿病，65 歲以上建議每年篩檢一次。`,citation:{section:`第五章 糖尿病人的篩檢`,pdfPage:50},patientFacing:!0},{id:`referral-eye-sameday`,category:`referral-urgency`,appliesTo:`突發性視力喪失或視網膜剝離徵象`,statement:`當天轉診眼科專科醫師。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`referral-eye-week`,category:`referral-urgency`,appliesTo:`視網膜前或玻璃體出血、新生血管、虹膜炎`,statement:`一週內轉診眼科專科醫師。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`referral-eye-months`,category:`referral-urgency`,appliesTo:`重度視網膜病變、無法解釋的視力衰退、黃斑部水腫、白內障或無法看見眼底`,statement:`1–2 個月內轉診眼科專科醫師。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`referral-foot`,category:`referral-urgency`,appliesTo:`有足部潰瘍或感染`,statement:`轉診至足部照護團隊。`,citation:{table:`表九 註 5`,pdfPage:19},patientFacing:!0}].map(e=>[e.id,e]));function F(e){let t=e.citation.table??e.citation.section??``;return`${Me}${t?`，${t}`:``}（PDF 第 ${e.citation.pdfPage} 頁）`}function I(e){let t=Ne.get(e);if(!t)throw Error(`規則不存在：${e}`);return t}function L(e,t,n,r=!1){let i=I(t);return{metric:e,value:i.statement,ruleId:t,reason:n,needsClinicianConfirmation:r,citation:F(i)}}function R(e){return e.existingComplications.filter(e=>(e.value??0)>0).map(e=>Number(e.code.slice(1)))}function Pe(e){let t=[],n=[],r=[],i=R(e),a=i.includes(5),o=i.includes(2),s=i.includes(3)||e.comorbidityFlags.ckd.known&&e.comorbidityFlags.ckd.value,c=e.ageYears.known?e.ageYears.value:null,l=c!==null&&c>=65;if(!l)t.push(L(`糖化血色素`,`hba1c-general`,c===null?`年齡未知，先套用一般成人通則`:`年齡 ${c} 歲，未達 65 歲高齡放寬條件`,c===null)),t.push(L(`空腹血糖`,`fpg-general`,`一般成人通則`)),t.push(L(`餐後血糖`,`ppg-general`,`一般成人通則`));else{let n=`DCSI ${e.dcsiTotal.known?e.dcsiTotal.value:`未知`}，已發生併發症 ${i.length} 項`;t.push({metric:`糖化血色素`,value:null,ruleId:null,reason:`年齡 ${c} 歲屬高齡，指引依健康狀態分為三級（低於 7–7.5%／低於 8.0%／不以糖化血色素為唯一目標）。健康狀態需評估共病、認知與身體機能及預期餘命，申報資料無法判定。目前可得的負擔指標：${n}。`,needsClinicianConfirmation:!0,citation:F(I(`hba1c-elderly-intermediate`))}),r.push(`高齡者的健康狀態分級，因此糖化血色素、空腹與餐後血糖目標都需醫療團隊定案。`)}if(e.comorbidityFlags.ckd.known&&e.comorbidityFlags.ckd.value){let e=I(`hba1c-unreliable`);n.push({code:`hba1c-reliability`,severity:`attention`,message:`資料標記有慢性腎臟病。${e.statement}`,ruleId:e.id,citation:F(e)})}if(a||o?(t.push(L(`血壓`,`bp-target-intensive`,`資料顯示已有${a?`心血管`:``}${a&&o?`與`:``}${o?`腦血管`:``}疾病，屬可考慮加嚴的族群；是否可耐受需醫療團隊評估。`,!0)),l&&n.push({code:`orthostatic-risk`,severity:`attention`,message:`高齡合併心血管或腦血管疾病，降壓過於嚴格可能增加姿勢性低血壓與跌倒風險，血壓目標需個別化。`,ruleId:`bp-target-intensive`,citation:F(I(`bp-target-intensive`))})):t.push(L(`血壓`,`bp-target-general`,`未見已發生的心血管或腦血管疾病，套用一般目標`)),a||o?t.push(L(`低密度脂蛋白膽固醇`,`ldl-cvd`,`資料顯示已有心血管或腦血管疾病`)):t.push(L(`低密度脂蛋白膽固醇`,`ldl-general`,`一般糖尿病人通則`)),t.push(L(`高密度脂蛋白膽固醇`,`hdl-target`,e.sexCode.known?`性別代碼 ${e.sexCode.value}`:`性別未知，兩個目標值都列出`,!e.sexCode.known)),t.push(L(`三酸甘油酯`,`tg-target`,`一般糖尿病人通則`)),s){let e=I(`kidney-intensive-followup`);n.push({code:`kidney-followup`,severity:`attention`,message:`資料顯示腎臟相關問題。若 ${e.appliesTo}，${e.statement}實際數值需由檢驗結果確認。`,ruleId:e.id,citation:F(e)})}let u=e.labItems.find(e=>/eGFR/i.test(e.itemName)),d=e.medicationClasses.some(e=>/抗糖尿病|metformin|雙胍/i.test(e.atcClass));return d&&!u?r.push(`資料中有抗糖尿病藥物的申報紀錄，但沒有可用的 eGFR 數值，因此無法依指引判定 metformin 的腎功能安全性。`):d&&u&&n.push({code:`metformin-renal`,severity:`attention`,message:`資料中同時有抗糖尿病藥物申報紀錄與 eGFR 數值（${u.rawValues.slice(0,3).join(`、`)}），請依指引核對 metformin 的腎功能適用性。申報用藥不代表目前仍在使用。`,ruleId:`metformin-egfr-30`,citation:F(I(`metformin-egfr-30`))}),!e.labHasDrawDates&&e.labRecordCount>0&&r.push(`檢驗資料只有費用年月、沒有採檢日，因此無法判定任何一項是否為「最近一次」，也無法建立趨勢。`),e.diabetesType.verdict!==`type1-confirmed`&&e.diabetesType.verdict!==`type2-confirmed`&&r.push(`糖尿病類型判定為 ${e.diabetesType.verdict}，不得據以套用分型專屬建議。`),{targets:t,safetyFlags:n,undetermined:r}}var z={0:`積極照護`,1:`適度介入`,2:`日常維持`},Fe={1:`EYE-CORE`,2:`STROKE-CORE`,3:`KIDNEY-CORE`,4:`NERVE-CORE`,5:`HEART-CORE`,6:`LEG-CIRCULATION-CORE`},Ie={1:`視網膜病變`,2:`腦血管疾病`,3:`腎臟病變`,4:`神經病變`,5:`心血管疾病`,6:`周邊血管疾病`};function Le(e){let t=[],n=e.comorbidityFlags.ckd,r=n.known&&n.value;for(let n=1;n<=6;n+=1){let i=e.existingComplications.find(e=>e.code===`R${n}`),a=e.riskPredictions.find(e=>e.code===`PR${n}`),o=!!i?.present,s=o?i?.value??null:null,c=a?.present?a.value:null,l={topic:n,topicName:Ie[n],moduleId:Fe[n],rValue:s,prValue:c};if(s!==null&&s>0){t.push({...l,kind:`established`,reason:`R${n}=${s}，屬已發生的併發症現況。`});continue}if(n===3&&r){t.push({...l,kind:`established`,reason:`來源 CKD 欄位為 1（已有慢性腎臟病），即使 R3${o?`=${s}`:` 缺值`} 也以已發生處理。`});continue}if(c===0){t.push(o?{...l,kind:`prevention-active`,reason:`R${n}=${s} 且 PR${n}=0（${z[0]}），納入預防內容。`}:{...l,kind:`status-unconfirmed`,reason:`PR${n}=0（${z[0]}）但來源未提供 R${n}，無法確認現況；納入模組但不得敘述為尚未發生。`});continue}if(c===1){t.push({...l,kind:`prevention-moderate`,reason:`PR${n}=1（${z[1]}）${o?``:`，且來源未提供 R`+n}，以簡短提醒呈現，不展開完整模組。`});continue}if(c===2){t.push({...l,kind:`excluded`,reason:`PR${n}=2（${z[2]}），維持既有照護即可，不納入主題內容。`});continue}t.push({...l,kind:`excluded`,reason:`來源未提供 R${n} 與 PR${n}，不得補值，因此不納入。`})}return t}var Re=`你是糖尿病衛教報告的輔助判讀器。

重要：哪些併發症主題要納入報告，**已經由程式依 R 與 PR 欄位判定完成**，你不需要也不能改變它。病人可見的衛教正文也全部由程式以已核准的固定文字組合，你寫的任何文字都不會出現在病人版報告中。

你只負責三件規則做不到的事：

1. 排出這位病人最該優先處理的前三項，並說明理由。可以從程式已納入的模組中挑選。
2. 指出資料中需要醫療團隊注意的地方，例如用藥分類與檢驗結果之間的疑慮、資料明顯矛盾、或缺少關鍵資訊。
3. 如果你認為程式的主題判定有問題，寫在 disagreements。你的意見會被記錄下來供人工檢視，但不會覆寫程式判定。

限制：
- 不得推測資料沒有的診斷、檢驗、日期或目前用藥。
- 申報用藥只代表曾有申報紀錄，不得當成目前正在使用。
- 不得提出停藥、加藥、換藥或調整劑量的建議。
- 來源未出現的欄位不得視為 0。

輸出格式：只輸出一個 JSON 物件，不要加說明文字或程式碼圍籬。

{
  "priorities": [
    { "module_id": "已納入的模組代碼", "why": "為什麼這位病人該優先處理這一項" }
  ],
  "clinician_notes": ["給醫療團隊的提醒，每則 80 字以內"],
  "data_concerns": ["資料品質或矛盾之處"],
  "disagreements": [
    { "topic": "R3", "program_decision": "程式的判定", "your_view": "你的看法與理由" }
  ]
}`;function ze(e){let t=e.trim(),n=t.match(/```(?:json)?\s*([\s\S]*?)```/i),r=n?n[1].trim():t,i;try{i=JSON.parse(r)}catch{let e=r.indexOf(`{`),t=r.lastIndexOf(`}`);if(e===-1||t<=e)throw Error(`輔助判讀器沒有回傳可解析的 JSON。`);i=JSON.parse(r.slice(e,t+1))}if(!i||typeof i!=`object`)throw Error(`輔助判讀器回傳的不是 JSON 物件。`);let a=i,o=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`).map(String):[];return{priorities:(Array.isArray(a.priorities)?a.priorities:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({module_id:String(e.module_id??``).trim(),why:String(e.why??``).trim()})).filter(e=>e.module_id),clinician_notes:o(a.clinician_notes),data_concerns:o(a.data_concerns),disagreements:(Array.isArray(a.disagreements)?a.disagreements:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({topic:String(e.topic??``).trim(),program_decision:String(e.program_decision??``).trim(),your_view:String(e.your_view??``).trim()})).filter(e=>e.topic)}}function Be(e,t){let n=Le(t),r=n.filter(e=>e.kind===`established`).sort((e,t)=>(t.rValue??0)-(e.rValue??0)||e.topic-t.topic),i=n.filter(e=>e.kind===`prevention-active`||e.kind===`status-unconfirmed`).sort((e,t)=>e.topic-t.topic),a=n.filter(e=>e.kind===`prevention-moderate`).sort((e,t)=>e.topic-t.topic),o=t.diabetesType.verdict===`type1-confirmed`?`T1`:t.diabetesType.verdict===`type2-confirmed`?`T2`:null,s={"EYE-CORE":`EYE`,"KIDNEY-CORE":`KIDNEY`,"NERVE-CORE":`NERVE`},c=[];for(let e of[...r,...i]){c.push(e.moduleId);let t=s[e.moduleId];o&&t&&j.has(`${t}-${o}`)&&c.push(`${t}-${o}`)}let l=[`BASE-01`],u=t.diabetesType.verdict;(u===`conflicting`||u===`absent`)&&l.push(`TYPE-UNCLEAR`),l.push(...c),(c.includes(`NERVE-CORE`)||c.includes(`LEG-CIRCULATION-CORE`))&&l.push(`BASE-02`);let d=Ae(t),ee=new Set([...l,...d.moduleIds]),f=(e?.priorities??[]).map(e=>e.module_id).filter(e=>!ee.has(e));return{decisions:n,topicModuleIds:c,moderateTopics:a,selfCareModuleIds:d.moduleIds,selfCareReasons:d.reasons,patientModuleIds:l,targets:Pe(t),selection:e,rejectedPriorities:f}}function Ve(){return[`※ DRAFT｜衛教模組 ${ke}／自我照護模組 ${M}／指引門檻表 ${je} 均尚未經醫療團隊核准，僅供流程比較，不得提供給病人。`,``]}var He={established:`以下這一段，是因為您的既往健康資料顯示已經有這方面的狀況。`,"prevention-active":`以下這一段是預防性的。依您的既往健康資料評估，這一項建議採取比較積極的追蹤與預防。這是風險評估，不代表您已經有這個疾病。`,"status-unconfirmed":`以下這一段建議您特別留意。依您的既往健康資料評估，這一項需要比較積極的追蹤；但目前資料無法確認您是否已經有這方面的狀況，請在回診時向醫療團隊確認。`,"prevention-moderate":``};function Ue(e,t){let n=[...Ve()];n.push(`糖尿病衛教報告`),n.push(`報告產生日期：${t.reportDate??`未提供`}`),n.push(`資料截至日期：${t.dataCutoff??`未提供`}`),n.push(``);let r=new Map(e.decisions.map(e=>[e.moduleId,e.kind]));for(let t of e.patientModuleIds){let e=j.get(t);if(!e)continue;let i=r.get(t);(i===`established`||i===`prevention-active`||i===`status-unconfirmed`)&&n.push(He[i],``),n.push(e.patientText,``)}if(e.moderateTopics.length&&(n.push(`持續留意但目前不需要特別加強的項目`,``),n.push(`以下項目依您的既往健康資料評估，目前建議維持適度追蹤即可。這些是風險評估而不是診斷；如果您已經有相關診斷，請以醫療團隊的評估為準。`,``),e.moderateTopics.forEach((e,t)=>{n.push(`${t+1}. ${e.topicName}：依醫療團隊安排持續定期檢查，若出現新的不適再主動提出。`)}),n.push(``)),e.selfCareModuleIds.length){n.push(`每天可以做的事`,``);for(let t of e.selfCareModuleIds){let e=P.get(t);e&&n.push(e.patientText,``)}}return n.join(`
`).trimEnd()}function We(e,t,n){let r=[...Ve()];r.push(`【AI 醫療人員報告】`),r.push(`報告產生日期：${n.reportDate??`未提供`}`),r.push(`資料截至日期：${n.dataCutoff??`未提供`}`),r.push(`年齡：${t.ageYears.known?`${t.ageYears.value} 歲`:`未提供`}｜性別代碼：${t.sexCode.known?t.sexCode.value:`未提供`}｜病程：${t.diabetesDurationYears.known?`${t.diabetesDurationYears.value} 年`:`未提供`}`),r.push(``),r.push(`一、疾病嚴重度與風險預測（代碼與分數）`),r.push(`DCSI 總分：${t.dcsiTotal.known?t.dcsiTotal.value:`來源未提供`}`),r.push(`已發生併發症現況：`);for(let e of t.existingComplications)r.push(`  ${e.code}：${e.present?e.rawValue:`來源未出現此欄位（不得視為 0）`}`);r.push(`未來風險預測：`);for(let e of t.riskPredictions){let t=e.present&&e.value!==null?z[e.value]??`未定義分級`:``;r.push(`  ${e.code}：${e.present?`${e.rawValue}（${t}）`:`來源未出現此欄位（不得視為 0）`}`)}r.push(``),r.push(`二、主題納入判定（程式，依 R／PR）`);for(let t of e.decisions){let e=t.kind===`established`?`已發生・完整模組`:t.kind===`prevention-active`?`積極照護・完整模組`:t.kind===`status-unconfirmed`?`⚠ 現況不明・完整模組（R 缺值，未敘述為尚未發生）`:t.kind===`prevention-moderate`?`適度介入・簡短提醒`:`不納入`;r.push(`  R${t.topic} ${t.topicName}｜${e}｜${t.reason}`)}r.push(``),r.push(`三、糖尿病類型`),r.push(`  程式判定：${t.diabetesType.verdict}`),r.push(`  第一型診斷碼：${t.diabetesType.type1IcdCodes.join(`、`)||`無`}`),r.push(`  第二型診斷碼：${t.diabetesType.type2IcdCodes.join(`、`)||`無`}`),r.push(`  說明：${t.diabetesType.note}`),r.push(``),r.push(`四、個別化目標（依指引門檻表推導）`);for(let t of e.targets.targets)r.push(`  ${t.metric}：${t.value??`需醫療團隊定案`}`),r.push(`    依據：${t.reason}`),t.citation&&r.push(`    出處：${t.citation}`),t.needsClinicianConfirmation&&r.push(`    ⚠ 需醫療團隊確認後才可定案。`);if(r.push(``),e.targets.safetyFlags.length){r.push(`五、安全提示`);for(let t of e.targets.safetyFlags)r.push(`  [${t.severity}] ${t.message}`),t.citation&&r.push(`    出處：${t.citation}`);r.push(``)}if(e.targets.undetermined.length){r.push(`六、資料不足、無法判定的項目`);for(let t of e.targets.undetermined)r.push(`  - ${t}`);r.push(``)}r.push(`七、自我照護模組納入理由`);for(let t of e.selfCareModuleIds)r.push(`  ${t}：${e.selfCareReasons[t]??``}`);if(r.push(``),r.push(`八、輔助判讀器（LLM）輸出`),!e.selection)r.push(`  未執行。`);else{r.push(`  優先順序：`),e.selection.priorities.length||r.push(`    （無）`);for(let t of e.selection.priorities)r.push(`    ${t.module_id}：${t.why}`);e.rejectedPriorities.length&&r.push(`    ⚠ 下列優先項不在已納入清單中，已忽略：${e.rejectedPriorities.join(`、`)}`),r.push(`  給醫療團隊的提醒：`),e.selection.clinician_notes.length||r.push(`    （無）`);for(let t of e.selection.clinician_notes)r.push(`    - ${t}`);r.push(`  資料疑慮：`),e.selection.data_concerns.length||r.push(`    （無）`);for(let t of e.selection.data_concerns)r.push(`    - ${t}`);r.push(`  對程式判定的不同意見（僅記錄，未覆寫）：`),e.selection.disagreements.length||r.push(`    （無）`);for(let t of e.selection.disagreements)r.push(`    ${t.topic}｜程式：${t.program_decision}｜LLM：${t.your_view}`)}r.push(``),r.push(`九、資料限制`);for(let e of t.dataQualityFlags)r.push(`  - ${e}`);return r.push(`  用藥為健保申報紀錄，共 ${t.medicationRecordCount} 筆，不代表目前仍在使用。`),r.push(``),r.push(`門檻值來源：${Ne.size} 條規則，${F(Ne.get(`hba1c-general`)).split(`，`)[0]}。`),r.join(`
`).trimEnd()}function Ge(e){let t=[`【程式已完成的主題判定（不可更改）】`];for(let n of e.decisions){let e=n.kind===`established`?`已納入・已發生`:n.kind===`prevention-active`?`已納入・積極照護`:n.kind===`prevention-moderate`?`簡短提醒`:`未納入`;t.push(`${n.moduleId}（R${n.topic} ${n.topicName}）：${e}｜${n.reason}`)}t.push(``,`【程式已納入的自我照護模組】`);for(let n of e.selfCareModuleIds)t.push(`${n}：${e.selfCareReasons[n]??``}`);t.push(``,`【程式推導的個別化目標】`);for(let n of e.targets.targets)t.push(`${n.metric}：${n.value??`需醫療團隊定案`}（${n.reason}）`);if(e.targets.undetermined.length){t.push(``,`【資料不足無法判定】`);for(let n of e.targets.undetermined)t.push(`- ${n}`)}return t.join(`
`)}function B(e){return{known:!0,value:e}}function V(e){return{known:!1,reason:e}}var Ke=/^E10/i,H=/^E11/i,qe=/^E1[234]/i;function U(e){if(e==null||e===``)return null;let t=Number(String(e).trim());return Number.isFinite(t)?t:null}function W(e){if(e==null)return null;let t=String(e).trim().replaceAll(`/`,`-`);return/^\d{4}-\d{2}-\d{2}$/.test(t)?t:null}function G(e,t){let n=Date.parse(`${e}T00:00:00Z`),r=Date.parse(`${t}T00:00:00Z`);return!Number.isFinite(n)||!Number.isFinite(r)?null:Math.round((r-n)/864e5)}function K(e,t){let n=U(e);return n===null?V(`來源未提供 ${t} 欄位`):B(n===1)}function q(e,t){let n=[];for(let r=1;r<=7;r+=1){let i=`${t}${r}`,a=Object.hasOwn(e,i),o=a?e[i]:null;n.push({code:i,present:a,value:a?U(o):null,rawValue:a&&o!=null?String(o):null})}return n}function J(e){let t=new Set,n=new Set,r=new Set;for(let i of e){if(!v(i))continue;let e=String(i.icd_code??``).trim();e&&(Ke.test(e)?t.add(e):H.test(e)?n.add(e):qe.test(e)&&r.add(e))}let i=[...t].sort(),a=[...n].sort(),o=[...r].sort();return i.length&&a.length?{verdict:`conflicting`,type1IcdCodes:i,type2IcdCodes:a,otherDiabetesIcdCodes:o,note:`申報資料同時出現第一型與第二型糖尿病診斷碼，無法據此判定類型；不得啟用任何 T1／T2 補充模組。`}:i.length?{verdict:`type1-confirmed`,type1IcdCodes:i,type2IcdCodes:[],otherDiabetesIcdCodes:o,note:`申報資料只出現第一型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。`}:a.length?{verdict:`type2-confirmed`,type1IcdCodes:[],type2IcdCodes:a,otherDiabetesIcdCodes:o,note:`申報資料只出現第二型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。`}:{verdict:`absent`,type1IcdCodes:[],type2IcdCodes:[],otherDiabetesIcdCodes:o,note:`申報用藥紀錄中沒有 E10／E11 糖尿病診斷碼，無法判定類型。`}}function Y(e,t){let n=new Map,r=[];for(let t of e){if(!v(t))continue;let e=String(t.drug_atc5_name??``).trim()||`未分類或來源未提供分類`,i=String(t.drug_ename??``).trim(),a=W(t.drug_date);a&&r.push(a);let o=n.get(e)??{names:new Set,count:0,dates:[]};i&&o.names.add(i),o.count+=1,a&&o.dates.push(a),n.set(e,o)}let i=[...n.entries()].map(([e,n])=>{let r=[...n.dates].sort(),i=r.length?r[r.length-1]:null;return{atcClass:e,drugNames:[...n.names].sort().slice(0,8),recordCount:n.count,lastClaimDate:i,daysSinceLastClaim:i&&t?G(i,t):null}}).sort((e,t)=>e.lastClaimDate&&t.lastClaimDate&&e.lastClaimDate!==t.lastClaimDate?t.lastClaimDate.localeCompare(e.lastClaimDate):t.recordCount-e.recordCount),a=r.sort();return{classes:i,dateRange:a.length?B({earliest:a[0],latest:a[a.length-1]}):V(`用藥紀錄沒有可解析的日期`)}}function X(e){let t=new Map,n=!1;for(let r of e){if(!v(r))continue;(W(r.assay_date)||W(r.inspect_date))&&(n=!0);let e=String(r.assay_item_name??``).trim()||String(r.order_name??``).trim()||`未提供項目名稱`,i=String(r.assay_value??``).trim();if(!i)continue;let a=t.get(e)??{values:[],units:new Set,refs:new Set,months:new Set};a.values.push(i);let o=String(r.unit_data??``).trim();o&&o!==`null`&&a.units.add(o);let s=String(r.consult_value??``).trim();s&&s!==`null`&&a.refs.add(s);let c=String(r.fee_ym??``).trim();c&&a.months.add(c),t.set(e,a)}return{items:[...t.entries()].map(([e,t])=>({itemName:e,rawValues:t.values,unit:t.units.size===1?[...t.units][0]:t.units.size>1?[...t.units].join(` / `):null,referenceRange:t.refs.size?[...t.refs][0]:null,feeMonths:[...t.months].sort(),hasDrawDates:n})).sort((e,t)=>t.rawValues.length-e.rawValues.length),hasDrawDates:n}}function Je(e){let t=v(e)?e:{},n=v(t.userInput)?t.userInput:{},r=v(t.rawSources)?t.rawSources:{},i=W(n.REPORT_DATE),a=W(n.BIRTHDAY),o=W(n.INDX_DATE),s=a&&i?G(a,i):null,c=U(n.T),l=S(r,`medication`),u=S(r,`labData`),{classes:d,dateRange:ee}=Y(l,i),{items:f,hasDrawDates:p}=X(u),te=[];!p&&u.length&&te.push(`檢驗紀錄只有費用年月、沒有採檢日期，因此無法建立時間順序或趨勢。任何「趨勢」「最近一次」的敘述都沒有資料支持。`),i||te.push(`來源未提供 REPORT_DATE，無法標示資料截止日。`);let ne=q(n,`R`),re=q(n,`PR`),ie=[...ne,...re].filter(e=>!e.present).map(e=>e.code);ie.length&&te.push(`來源未出現下列欄位，不得補值也不得視為 0：${ie.join(`、`)}。`);let ae=J(l);return ae.verdict===`conflicting`&&te.push(ae.note),{reportDate:i?B(i):V(`來源未提供 REPORT_DATE`),dataCutoff:i?B(i):V(`來源未提供資料截止日`),birthday:a?B(a):V(`來源未提供 BIRTHDAY`),ageYears:s===null?V(`缺少出生日期或報告日期，無法計算年齡`):B(Math.floor(s/365.25)),sexCode:n.SEX!==void 0&&n.SEX!==null&&n.SEX!==``?B(String(n.SEX)):V(`來源未提供 SEX`),diabetesOnsetDate:o?B(o):V(`來源未提供 INDX_DATE`),diabetesDurationYears:c===null?V(`來源未提供 T`):B(Number(c.toFixed(1))),comorbidityFlags:{hypertension:K(n.HT,`HT`),hyperlipidemia:K(n.HL,`HL`),ckd:K(n.CKD,`CKD`),p4p:K(n.P4P,`P4P`)},dcsiTotal:U(n.DCSI)===null?V(`來源未提供 DCSI`):B(U(n.DCSI)),grade:n.GRADE===void 0?V(`來源未提供 GRADE`):B(String(n.GRADE)),ageGroup:n.AGEGP===void 0?V(`來源未提供 AGEGP`):B(String(n.AGEGP)),existingComplications:ne,riskPredictions:re,diabetesType:ae,medicationClasses:d,medicationRecordCount:l.length,medicationDateRange:ee,labItems:f,labRecordCount:u.length,labHasDrawDates:p,dataQualityFlags:te}}function Z(e,t){return e.known?t?t(e.value):String(e.value):`未知（${e.reason}）`}function Ye(e,t={}){let n=t.maxMedicationClasses??25,r=[];r.push(`【基本判斷依據】`),r.push(`報告日期：${Z(e.reportDate)}`),r.push(`年齡：${Z(e.ageYears,e=>`${e} 歲`)}`),r.push(`性別代碼：${Z(e.sexCode)}`),r.push(`糖尿病病程年數：${Z(e.diabetesDurationYears,e=>`${e} 年`)}`),r.push(`DCSI 總分：${Z(e.dcsiTotal)}`),r.push(`高血壓：${Z(e.comorbidityFlags.hypertension,e=>e?`是`:`否`)}`),r.push(`高血脂：${Z(e.comorbidityFlags.hyperlipidemia,e=>e?`是`:`否`)}`),r.push(`慢性腎臟病：${Z(e.comorbidityFlags.ckd,e=>e?`是`:`否`)}`),r.push(``,`【已發生併發症現況（R）】`);for(let t of e.existingComplications)r.push(`${t.code}：${t.present?`${t.rawValue}`:`來源未出現此欄位（不得視為 0）`}`);r.push(``,`【未來風險預測（PR）】`);for(let t of e.riskPredictions)r.push(`${t.code}：${t.present?`${t.rawValue}`:`來源未出現此欄位（不得視為 0）`}`);r.push(``,`【糖尿病類型證據】`),r.push(`判定：${e.diabetesType.verdict}`),r.push(`第一型診斷碼：${e.diabetesType.type1IcdCodes.join(`、`)||`無`}`),r.push(`第二型診斷碼：${e.diabetesType.type2IcdCodes.join(`、`)||`無`}`),r.push(`說明：${e.diabetesType.note}`),r.push(``,`【用藥申報分類（非目前用藥）】`),r.push(`共 ${e.medicationRecordCount} 筆申報紀錄，涵蓋 ${e.medicationClasses.length} 個 ATC 分類。以下為最近申報的前 ${Math.min(n,e.medicationClasses.length)} 類。`);for(let t of e.medicationClasses.slice(0,n)){let e=t.lastClaimDate?`最後申報 ${t.lastClaimDate}${t.daysSinceLastClaim===null?``:`（距報告日 ${t.daysSinceLastClaim} 天）`}`:`來源無日期`;r.push(`- ${t.atcClass}｜${t.recordCount} 筆｜${e}`)}if(r.push(``,`【檢驗資料可用性】`),r.push(`共 ${e.labRecordCount} 筆；是否有採檢日：${e.labHasDrawDates?`有`:`沒有，只有費用年月`}`),e.dataQualityFlags.length){r.push(``,`【資料限制】`);for(let t of e.dataQualityFlags)r.push(`- ${t}`)}return r.join(`
`)}var Q=n(),Xe=5*1024*1024,Ze=`gemini-3.6-flash`,Qe=`__custom__`,$e=`dmEducationGeminiTransientCredential2026`,et=15,tt=2e5,nt=[{value:`gemini-3.6-flash`,label:`Gemini 3.6 Flash｜預設・較高品質`},{value:`gemini-3.5-flash-lite`,label:`Gemini 3.5 Flash-Lite｜較快・較低成本`},{value:Qe,label:`自訂模型 ID`}],rt=`{
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
}`;function it(e,t){let n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)}function at(e){return`${g(le(e))} 字`}function ot(e){let t=e.match(/"audit_status"\s*:\s*"(PASS|REVISE|FAIL)"/i)?.[1]?.toUpperCase(),n=e.match(/(?:^|\n)\s*(?:##\s*稽核結論\s*\n\s*)?(PASS|REVISE|NEEDS_REVIEW|FAIL)\b/im)?.[1]?.toUpperCase(),r=t||n;return r===`FAIL`?{label:`FAIL`,tone:`danger`}:r===`REVISE`?{label:`REVISE`,tone:`warning`}:r===`NEEDS_REVIEW`?{label:`需人工覆核`,tone:`warning`}:r===`PASS`?{label:`PASS`,tone:`success`}:{label:`已完成`,tone:`neutral`}}function st({blockers:e,label:t}){return e.length?(0,Q.jsxs)(`div`,{className:`blockerList`,role:`status`,children:[(0,Q.jsx)(`strong`,{children:t}),(0,Q.jsx)(`ul`,{children:e.map(e=>(0,Q.jsxs)(`li`,{className:e.hard?`hard`:`soft`,children:[(0,Q.jsx)(`span`,{className:`blockerMessage`,children:e.message}),(0,Q.jsx)(`span`,{className:`blockerFix`,children:e.howToFix})]},e.code))})]}):null}function ct({input:e,title:t,note:n}){let r=e.totalTokens>oe,i=Math.min(999,Math.round(e.totalTokens/oe*100));return(0,Q.jsxs)(`details`,{className:`compositionPanel`,children:[(0,Q.jsxs)(`summary`,{children:[t,`：約 `,g(e.totalTokens),` tokens（`,g(e.totalChars),` 字）`,(0,Q.jsxs)(`span`,{className:r?`limitBadge over`:`limitBadge`,children:[`模型上限的 `,i,`%`]})]}),(0,Q.jsx)(`table`,{children:(0,Q.jsxs)(`tbody`,{children:[e.parts.map(e=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:e.label}),(0,Q.jsxs)(`td`,{children:[g(e.chars),` 字`]}),(0,Q.jsxs)(`td`,{children:[`約 `,g(e.tokens),` tokens`,(0,Q.jsx)(`em`,{children:e.method===`measured`?`實測`:`估算`})]})]},e.label)),(0,Q.jsxs)(`tr`,{className:`totalRow`,children:[(0,Q.jsx)(`th`,{children:`合計`}),(0,Q.jsxs)(`td`,{children:[g(e.totalChars),` 字`]}),(0,Q.jsxs)(`td`,{children:[`約 `,g(e.totalTokens),` tokens`]})]})]})}),(0,Q.jsxs)(`p`,{children:[n?`${n} `:``,e.hasEstimate?`標示「估算」的段落是以字元組成推估，誤差在指引全文上約 0.1%，其他文字可能更大；需要精確值請按「用 countTokens 精算」。`:`所有段落都是 Gemini 官方實測值。`]})]})}function lt(){let[e,t]=(0,r.useState)(``),[n,a]=(0,r.useState)(``),[s,f]=(0,r.useState)(``),[p,m]=(0,r.useState)(`raw`),[h,se]=(0,r.useState)(``),[ue,de]=(0,r.useState)(!1),[_,he]=(0,r.useState)(Ze),[ge,_e]=(0,r.useState)(``),[v,y]=(0,r.useState)(`workbench`),[b,ve]=(0,r.useState)(`workbench`),[x,ye]=(0,r.useState)(i),[S,be]=(0,r.useState)(o),[C,Se]=(0,r.useState)(``),[Ce,we]=(0,r.useState)(``),[Te,T]=(0,r.useState)(null),[E,Ee]=(0,r.useState)(`A`),[D,O]=(0,r.useState)(``),[ke,A]=(0,r.useState)(``),[j,M]=(0,r.useState)(``),[N,P]=(0,r.useState)(`idle`),[Ae,je]=(0,r.useState)(null),[Me,Ne]=(0,r.useState)(0),[F,I]=(0,r.useState)(et),[L,R]=(0,r.useState)(null),[Pe,z]=(0,r.useState)(``),[Fe,Ie]=(0,r.useState)(!1),[Le,Ve]=(0,r.useState)(``),He=(0,r.useRef)(null),B=(0,r.useRef)(null),V=(0,r.useRef)(null),Ke=(0,r.useRef)(null),H=N!==`idle`,qe=(0,r.useMemo)(()=>ot(j),[j]),U=_===Qe?ge.trim():_,W=ee(E),G=E===`B`,K=typeof window<`u`&&window.location.hostname.endsWith(`github.io`),q=(0,r.useMemo)(()=>{let t=e.trim();if(!t.startsWith(`{`)&&!t.startsWith(`[`))return null;try{return JSON.parse(t)}catch{return null}},[e]),J=(0,r.useMemo)(()=>q?Je(q):null,[q]),Y=(0,r.useMemo)(()=>E===`C`?me({systemPrompt:Re,factsText:J?`${Ye(J)}\n\n${Ge(Be(null,J))}`:``}):fe({systemPrompt:x,patientText:n,includeGuideline:G,guidelineText:C}),[E,J,x,n,G,C]),X=(0,r.useMemo)(()=>pe({systemPrompt:S,patientText:n,report:D,includeGuideline:G,guidelineText:C}),[S,n,D,G,C]),Z={arm:E,llmText:n,rawInput:e,generatorPrompt:x,evalPrompt:S,report:D,model:U,apiKey:h,requiresClientKey:K,guidelineText:C,tokenLimit:oe},lt=(0,r.useMemo)(()=>{let e=te({...Z,totalTokens:Y.totalTokens});return E===`C`&&!q&&e.push({code:`arm-c-needs-json`,message:`C（模組選擇流程）需要原始 JSON 病人資料才能做確定性事實抽取。`,howToFix:`請在步驟 01 上傳或貼上原始 JSON。純文字輸入無法使用 C。`,hard:!0}),e},[E,n,e,x,U,h,K,C,Y.totalTokens,q]),ut=(0,r.useMemo)(()=>ne({...Z,totalTokens:X.totalTokens}),[E,n,S,D,U,h,K,C,X.totalTokens]),dt=(0,r.useMemo)(()=>Te===null?ce(C):{tokens:Te,method:`measured`},[C,Te]);(0,r.useEffect)(()=>{if(Ae===null)return;let e=window.setInterval(()=>{Ne(Math.floor((Date.now()-Ae)/1e3))},250);return()=>window.clearInterval(e)},[Ae]),(0,r.useEffect)(()=>{L&&Ke.current&&Ke.current.scrollIntoView({block:`nearest`,behavior:`smooth`})},[L]);function $(e,t){R({title:e,advice:t,raw:``,status:null,aborted:!1,timedOut:!1})}function ft(e){if(y(e),e===`custom`)return;let t=c.find(t=>t.id===e);t&&ye(t.prompt)}function pt(e){if(ve(e),e===`custom`)return;let t=l.find(t=>t.id===e);t&&be(t.prompt)}function mt(){ft(v===`custom`?`workbench`:v)}function ht(){pt(b===`custom`?`workbench`:b)}async function gt(e){if(R(null),e.size>Xe){$(`指引 TXT 超過 5 MB`,`請確認是否選到正確的檔案；本工具不會自動截斷指引。`);return}if(!e.name.toLowerCase().endsWith(`.txt`)){$(`指引目前只支援 TXT`,`請先把 PDF 轉成純文字 TXT 再載入。`);return}let t=await e.text();if(!t.trim()){$(`指引 TXT 沒有可用文字`,`檔案讀起來是空的，請確認轉檔結果。`);return}Se(t),we(e.name),T(null);let n=le(t);z(n===652078?`已載入指引：${g(n)} 字元，與已知全文完全相同，token 數採用官方實測值 ${g(ae)}。`:`已載入指引：${g(n)} 字元。與已知全文（${g(ie)} 字元）不同，token 數為估算值。`)}function _t(e){let t=e.target.files?.[0];t&&gt(t),e.target.value=``}async function vt(e){if(R(null),e.size>Xe){$(`檔案超過 5 MB`,`請先縮小檔案再上傳。`);return}let n=e.name.toLowerCase();if(!n.endsWith(`.json`)&&!n.endsWith(`.txt`)){$(`目前只支援 JSON 與 TXT`,`請改用 .json 或 .txt 檔案。`);return}let r=await e.text();if(le(r)>tt&&r.includes(`糖尿病臨床照護指引`)){$(`這個檔案看起來是指引全文，不是病人資料`,`已經略過，沒有覆蓋你目前的病人資料。指引請用下方「載入指引 TXT」按鈕載入。`);return}t(r),f(e.name),a(``),O(``),A(``),M(``),m(`raw`),z(`已載入新的病人資料，請重新按「整理為 LLM 好讀文字」。`)}function yt(e){let t=e.target.files?.[0];t&&vt(t),e.target.value=``}function bt(e){e.preventDefault(),Ie(!1);let t=e.dataTransfer.files?.[0];t&&vt(t)}function xt(){if(R(null),z(``),!e.trim()){$(`還沒有病人資料`,`請先上傳檔案、貼上文字，或按「載入去識別示範」。`);return}P(`formatting`);try{let t=e.trim();t.startsWith(`{`)||t.startsWith(`[`)?a(xe(JSON.parse(t))):a(t),m(`formatted`),O(``),A(``),M(``)}catch{$(`這段內容看起來像 JSON，但格式無法解析`,`請檢查括號、逗號或引號是否成對；也可以改用 TXT 純文字輸入。`)}finally{P(`idle`)}}async function St(e,t,n){return De({apiKey:h,model:U,systemPrompt:e,input:t,signal:n,direct:K,timeoutMs:F*60*1e3,simulate:void 0})}async function Ct(){if(R(null),z(``),re(lt)){let e=lt.find(e=>e.hard);return e&&$(e.message,e.howToFix),``}P(`generating`),je(Date.now()),Ne(0);let e=new AbortController;V.current=e;try{if(E===`C`){if(!J)throw Error(`缺少可用的 JSON 病人資料。`);let t={reportDate:J.reportDate.known?J.reportDate.value:null,dataCutoff:J.dataCutoff.known?J.dataCutoff.value:null},n=Be(ze((await St(Re,Y.text,e.signal)).text),J),r=Ue(n,t);O(r),A(We(n,J,t)),M(``);let i=n.decisions.filter(e=>e.kind!==`excluded`&&e.kind!==`prevention-moderate`).length;return z(`完成：程式依 R／PR 納入 ${i} 個併發症主題、${n.moderateTopics.length} 個簡短提醒、${n.selfCareModuleIds.length} 個自我照護模組。病人可見正文完全來自固定文字；LLM 只提供優先排序與提醒${n.selection?.disagreements.length?`，並對程式判定提出 ${n.selection.disagreements.length} 點不同意見（已記錄未採用）`:``}。`),r}let t=await St(x,Y.text,e.signal);return O(t.text),A(``),M(``),t.text}catch(e){return e instanceof k?e.failure.aborted||R(e.failure):R(w({cause:e})),``}finally{V.current===e&&(V.current=null),je(null),P(`idle`)}}async function wt(e){R(null);let t=e||D,r=ne({...Z,report:t,totalTokens:X.totalTokens});if(re(r)){let e=r.find(e=>e.hard);e&&$(e.message,e.howToFix);return}P(`evaluating`),je(Date.now()),Ne(0);let i=new AbortController;V.current=i;try{M((await St(S,pe({systemPrompt:S,patientText:n,report:t,includeGuideline:G,guidelineText:C}).text,i.signal)).text)}catch(e){e instanceof k?e.failure.aborted||R(e.failure):R(w({cause:e}))}finally{V.current===i&&(V.current=null),je(null),P(`idle`)}}function Tt(){V.current?.abort()}async function Et(){let e=await Ct();e&&await wt(e)}async function Dt(){if(R(null),!C.trim()){$(`還沒載入指引`,`請先按「載入指引 TXT」。`);return}if(K&&!h.trim()){$(`精算需要 Gemini 金鑰`,`請先在上方輸入金鑰；countTokens 不會產生生成費用。`);return}P(`counting`);let e=new AbortController;V.current=e;try{let t=await Oe({apiKey:h,model:U,text:C,direct:K,signal:e.signal});T(t),z(`countTokens 實測：指引全文為 ${g(t)} tokens。`)}catch(e){e instanceof k?e.failure.aborted||R(e.failure):R(w({cause:e}))}finally{V.current===e&&(V.current=null),je(null),P(`idle`)}}async function Ot(e,t){await navigator.clipboard.writeText(e),Ve(t),window.setTimeout(()=>Ve(``),1600)}function kt(){t(``),a(``),f(``),O(``),A(``),M(``),R(null),z(``),m(`raw`)}let At=H||re(lt),jt=H||re(ut);return(0,Q.jsxs)(`main`,{children:[(0,Q.jsxs)(`header`,{className:`topbar`,children:[(0,Q.jsxs)(`a`,{className:`brand`,href:`#top`,"aria-label":`糖衛工作台首頁`,children:[(0,Q.jsx)(`span`,{className:`brandMark`,children:`糖衛`}),(0,Q.jsx)(`span`,{children:`報告工作台`})]}),(0,Q.jsxs)(`div`,{className:`topMeta`,children:[(0,Q.jsxs)(`span`,{className:`privacyPill`,children:[(0,Q.jsx)(`span`,{className:`statusDot`}),`不寫入本站資料庫`]}),(0,Q.jsx)(`span`,{className:`modelPill`,children:`金鑰僅暫存本頁`})]})]}),(0,Q.jsxs)(`section`,{className:`hero`,id:`top`,children:[(0,Q.jsxs)(`div`,{className:`heroCopy`,children:[(0,Q.jsx)(`p`,{className:`eyebrow`,children:`DIABETES EDUCATION REPORT LAB`}),(0,Q.jsx)(`h1`,{children:`從病人資料，到可讀的衛教報告與品質稽核。`}),(0,Q.jsx)(`p`,{className:`heroLead`,children:`上傳 JSON、TXT 或直接貼上文字；先確認 LLM 好讀版本，再用可編輯的 prompt 生成報告並獨立稽核。`})]}),(0,Q.jsxs)(`div`,{className:`flowMap`,"aria-label":`處理流程`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`01`}),(0,Q.jsx)(`strong`,{children:`整理資料`}),(0,Q.jsx)(`small`,{children:`保留來源與限制`})]}),(0,Q.jsx)(`i`,{children:`→`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`02`}),(0,Q.jsx)(`strong`,{children:`生成報告`}),(0,Q.jsx)(`small`,{children:`自訂 system prompt`})]}),(0,Q.jsx)(`i`,{children:`→`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`03`}),(0,Q.jsx)(`strong`,{children:`品質稽核`}),(0,Q.jsx)(`small`,{children:`看見風險與修改建議`})]})]})]}),L&&(0,Q.jsxs)(`div`,{className:`errorBanner`,role:`alert`,ref:Ke,children:[(0,Q.jsx)(`strong`,{children:`目前無法繼續`}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`b`,{children:L.title}),(0,Q.jsx)(`i`,{children:L.advice}),L.raw&&(0,Q.jsxs)(`code`,{children:[`原始錯誤：`,L.raw]})]}),(0,Q.jsx)(`button`,{onClick:()=>R(null),"aria-label":`關閉錯誤訊息`,children:`×`})]}),Pe&&!L&&(0,Q.jsxs)(`div`,{className:`noticeBanner`,role:`status`,children:[(0,Q.jsx)(`span`,{children:Pe}),(0,Q.jsx)(`button`,{onClick:()=>z(``),"aria-label":`關閉提示`,children:`×`})]}),(0,Q.jsxs)(`section`,{className:`workspace`,children:[(0,Q.jsxs)(`article`,{className:`stepCard inputCard`,children:[(0,Q.jsxs)(`div`,{className:`stepHeading`,children:[(0,Q.jsx)(`div`,{className:`stepNumber`,children:`01`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{children:`INPUT`}),(0,Q.jsx)(`h2`,{children:`病人資料整理`}),(0,Q.jsx)(`span`,{children:`JSON 會在瀏覽器內轉成文字；TXT 與貼上的純文字會保留原文。`})]})]}),(0,Q.jsxs)(`div`,{className:`inputGrid`,children:[(0,Q.jsxs)(`div`,{className:`dropZone ${Fe?`dragging`:``}`,onDragOver:e=>{e.preventDefault(),Ie(!0)},onDragLeave:()=>Ie(!1),onDrop:bt,children:[(0,Q.jsx)(`input`,{ref:He,type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:yt,hidden:!0}),(0,Q.jsxs)(`div`,{className:`fileGlyph`,children:[`JSON`,(0,Q.jsx)(`br`,{}),`TXT`]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:s||`拖曳檔案到這裡`}),(0,Q.jsx)(`p`,{children:s?`${at(e)}，可重新上傳替換`:`支援 .json、.txt，單檔上限 5 MB`})]}),(0,Q.jsx)(`button`,{className:`secondaryButton`,onClick:()=>He.current?.click(),children:`選擇檔案`})]}),(0,Q.jsxs)(`div`,{className:`editorShell inputEditor`,children:[(0,Q.jsxs)(`div`,{className:`editorToolbar`,children:[(0,Q.jsxs)(`div`,{className:`tabs`,role:`tablist`,"aria-label":`病人資料版本`,children:[(0,Q.jsx)(`button`,{className:p===`raw`?`active`:``,onClick:()=>m(`raw`),children:`原始輸入`}),(0,Q.jsx)(`button`,{className:p===`formatted`?`active`:``,onClick:()=>m(`formatted`),children:`LLM 好讀文字`})]}),(0,Q.jsx)(`span`,{children:at(p===`raw`?e:n)})]}),(0,Q.jsx)(`textarea`,{"aria-label":p===`raw`?`原始病人資料`:`LLM好讀病人資料`,value:p===`raw`?e:n,onChange:e=>p===`raw`?t(e.target.value):a(e.target.value),placeholder:p===`raw`?`在此貼上 JSON 或純文字病人資料…`:`整理後的文字會顯示在這裡，您仍可手動修改。`,spellCheck:!1})]})]}),(0,Q.jsxs)(`div`,{className:`cardActions splitActions`,children:[(0,Q.jsxs)(`div`,{className:`inlineActions`,children:[(0,Q.jsx)(`button`,{className:`primaryButton`,onClick:xt,disabled:H,children:`整理為 LLM 好讀文字`}),(0,Q.jsx)(`button`,{className:`textButton`,onClick:()=>{t(rt),f(`示範資料.json`),m(`raw`),a(``),z(`已載入示範資料，請按「整理為 LLM 好讀文字」。`)},disabled:H,children:`載入去識別示範`})]}),(0,Q.jsxs)(`div`,{className:`inlineActions`,children:[n&&(0,Q.jsx)(`button`,{className:`textButton`,onClick:()=>void Ot(n,`資料`),children:Le===`資料`?`已複製`:`複製整理文字`}),n&&(0,Q.jsx)(`button`,{className:`textButton`,onClick:()=>it(`病人資料_整理版_for_llm.txt`,n),children:`下載 TXT`}),(e||n)&&(0,Q.jsx)(`button`,{className:`dangerTextButton`,onClick:kt,children:`清除本頁資料`})]})]})]}),(0,Q.jsxs)(`article`,{className:`stepCard generatorCard`,children:[(0,Q.jsxs)(`div`,{className:`stepHeading`,children:[(0,Q.jsx)(`div`,{className:`stepNumber`,children:`02`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{children:`GENERATE`}),(0,Q.jsx)(`h2`,{children:`生成糖尿病衛教報告`}),(0,Q.jsx)(`span`,{children:`prompt 與模型都可修改；API 金鑰僅在執行時使用，不會寫入本站。`})]})]}),(0,Q.jsxs)(`div`,{className:`guidelinePanel`,children:[(0,Q.jsxs)(`div`,{className:`guidelinePanelCopy`,children:[(0,Q.jsx)(`span`,{className:`guidelineEyebrow`,children:`GUIDELINE A/B/C TEST`}),(0,Q.jsx)(`strong`,{children:`流程比較`}),(0,Q.jsx)(`p`,{children:W.description})]}),(0,Q.jsxs)(`div`,{className:`guidelineControls`,children:[(0,Q.jsx)(`input`,{ref:B,type:`file`,accept:`.txt,text/plain`,onChange:_t,hidden:!0}),(0,Q.jsx)(`select`,{className:`textInput guidelineSelect`,"aria-label":`選擇生成流程`,value:E,onChange:e=>Ee(e.target.value),disabled:H,children:d.map(e=>(0,Q.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,Q.jsx)(`button`,{className:`secondaryButton`,onClick:()=>B.current?.click(),disabled:H,children:C?`更換指引 TXT`:`載入指引 TXT`}),C&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`button`,{className:`secondaryButton`,onClick:()=>void Dt(),disabled:H,children:N===`counting`?`精算中…`:`用 countTokens 精算`}),(0,Q.jsx)(`button`,{className:`dangerTextButton`,onClick:()=>{Se(``),we(``),T(null),E===`B`&&Ee(`A`)},disabled:H,children:`移除指引`})]})]}),(0,Q.jsxs)(`dl`,{className:`guidelineFacts`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`指引是否已載入`}),(0,Q.jsx)(`dd`,{className:C?`ok`:`missing`,children:C?`已載入：${Ce}`:`尚未載入`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`指引字元數`}),(0,Q.jsx)(`dd`,{children:C?`${g(le(C))} 字元`:`—`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`指引 token 數`}),(0,Q.jsx)(`dd`,{children:C?`${g(dt.tokens)} tokens（${dt.method===`measured`?`實測`:`估算`}）`:`—`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`本次生成會帶入指引`}),(0,Q.jsxs)(`dd`,{className:Y.guidelineIncluded?`ok`:`missing`,children:[Y.guidelineIncluded?`會帶入`:`不會帶入`,Y.guidelineRequestedButMissing&&`（已選 B 但指引是空的）`]})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`本次稽核會帶入指引`}),(0,Q.jsx)(`dd`,{className:X.guidelineIncluded?`ok`:`missing`,children:X.guidelineIncluded?`會帶入`:`不會帶入`})]})]}),(0,Q.jsxs)(`p`,{className:`guidelinePrivacy`,children:[`指引只保留在本頁；選擇 B 並執行時才會隨請求送出，不寫入本站資料庫。整份指引會明顯增加輸入量、等待時間與費用。 本工具在任何情況下都不會自動截斷指引或病人資料。`,E===`C`&&` C 使用模組目錄 draft-0.1，尚未經醫療團隊核准，組出的報告只能用於流程比較。`]})]}),(0,Q.jsxs)(`div`,{className:`twoColumns`,children:[(0,Q.jsxs)(`div`,{className:`settingsPane`,children:[(0,Q.jsxs)(`div`,{className:`credentialBox`,children:[(0,Q.jsxs)(`div`,{className:`labelRow credentialLabelRow`,children:[(0,Q.jsx)(`label`,{className:`fieldLabel`,htmlFor:$e,children:`Gemini 臨時存取金鑰`}),(0,Q.jsx)(`span`,{children:`重新整理即清除`})]}),(0,Q.jsxs)(`div`,{className:`passwordRow`,children:[(0,Q.jsx)(`input`,{id:$e,name:`dmEducationGeminiTransientCredentialManualEntry`,className:`textInput apiKeyInput`,type:ue?`text`:`password`,value:h,onChange:e=>se(e.target.value),placeholder:`請手動貼上本次使用的 Gemini 金鑰`,autoComplete:`new-password`,autoCapitalize:`off`,autoCorrect:`off`,"data-1p-ignore":`true`,"data-lpignore":`true`,"data-bwignore":`true`,"data-form-type":`other`,spellCheck:!1}),(0,Q.jsx)(`button`,{type:`button`,className:`showKeyButton`,onClick:()=>de(e=>!e),children:ue?`隱藏`:`顯示`})]}),(0,Q.jsx)(`p`,{className:`fieldNote`,children:`只暫存在本頁記憶體，不寫入資料庫或瀏覽器儲存空間。GitHub Pages 版會由瀏覽器直接傳給 Google Gemini；私人站版則透過本站伺服器。請只在可信任的網址輸入金鑰。`})]}),(0,Q.jsx)(`label`,{className:`fieldLabel modelLabel`,htmlFor:`model`,children:`Gemini 模型`}),(0,Q.jsx)(`select`,{id:`model`,className:`textInput selectInput`,value:_,onChange:e=>he(e.target.value),children:nt.map(e=>(0,Q.jsx)(`option`,{value:e.value,children:e.label},e.value))}),_===Qe&&(0,Q.jsx)(`input`,{className:`textInput customModelInput`,"aria-label":`自訂Gemini模型ID`,value:ge,onChange:e=>_e(e.target.value),placeholder:`例如 gemini-flash-latest`,spellCheck:!1}),(0,Q.jsx)(`p`,{className:`fieldNote`,children:`生成與品質稽核目前使用同一個模型；選擇自訂時請輸入 Gemini API 支援的模型 ID。`}),(0,Q.jsx)(`label`,{className:`fieldLabel modelLabel`,htmlFor:`timeout`,children:`單次請求逾時上限（分鐘）`}),(0,Q.jsx)(`input`,{id:`timeout`,className:`textInput`,type:`number`,min:1,max:60,value:F,onChange:e=>I(Math.max(1,Math.min(60,Number(e.target.value)||et)))}),(0,Q.jsx)(`p`,{className:`fieldNote`,children:`帶入指引全文時單次可能需要數分鐘。逾時會明確顯示為逾時，與你按「停止」區分。`}),(0,Q.jsx)(`label`,{className:`fieldLabel promptPresetLabel`,htmlFor:`generatorPromptPreset`,children:`生成規則版本`}),(0,Q.jsxs)(`select`,{id:`generatorPromptPreset`,className:`textInput selectInput`,value:v,onChange:e=>ft(e.target.value),disabled:E===`C`,children:[c.map(e=>(0,Q.jsx)(`option`,{value:e.id,children:e.label},e.id)),(0,Q.jsx)(`option`,{value:`custom`,children:`自訂內容（目前文字）`})]}),(0,Q.jsx)(`p`,{className:`fieldNote`,children:E===`C`?`C 使用固定的模組選擇器 prompt，不使用這裡的生成 prompt。`:v===`custom`?`下方文字已手動修改，重新整理頁面後不會保留。`:c.find(e=>e.id===v)?.description}),(0,Q.jsxs)(`div`,{className:`labelRow`,children:[(0,Q.jsx)(`label`,{className:`fieldLabel`,htmlFor:`generatorPrompt`,children:`生成用 system prompt`}),(0,Q.jsx)(`button`,{className:`miniButton`,onClick:mt,children:v===`custom`?`恢復工作台預設`:`重新載入此版本`})]}),(0,Q.jsx)(`textarea`,{id:`generatorPrompt`,className:`promptEditor`,value:E===`C`?Re:x,onChange:e=>{ye(e.target.value),y(`custom`)},readOnly:E===`C`,spellCheck:!1}),(0,Q.jsx)(`p`,{className:`fieldNote`,children:`病人資料會自動接在 system prompt 後送出，不必複製到 prompt 內。`})]}),(0,Q.jsxs)(`div`,{className:`outputPane`,children:[(0,Q.jsxs)(`div`,{className:`outputHeader`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`outputDot teal`}),(0,Q.jsx)(`strong`,{children:E===`C`?`組合後的病人版報告`:`Gemini 報告`})]}),(0,Q.jsx)(`span`,{children:D?at(D):`等待生成`})]}),(0,Q.jsx)(`textarea`,{"aria-label":`Gemini產生的糖尿病衛教報告`,className:`outputEditor`,value:D,onChange:e=>{O(e.target.value),M(``)},placeholder:`產生的報告會顯示在這裡。您可以人工修改後，再送交 eval LLM 稽核。`,spellCheck:!1}),(0,Q.jsxs)(`div`,{className:`outputActions`,children:[(0,Q.jsx)(`button`,{onClick:()=>void Ot(D,`報告`),disabled:!D,children:Le===`報告`?`已複製`:`複製`}),(0,Q.jsx)(`button`,{onClick:()=>it(`糖尿病衛教報告.txt`,D),disabled:!D,children:`下載 TXT`})]}),ke&&(0,Q.jsxs)(`details`,{className:`tracePanel`,open:!0,children:[(0,Q.jsx)(`summary`,{children:`醫師版報告（含 DCSI、R1–R7、PR1–PR7 代碼與分數，病人版不顯示）`}),(0,Q.jsx)(`pre`,{children:ke}),(0,Q.jsxs)(`div`,{className:`traceActions`,children:[(0,Q.jsx)(`button`,{onClick:()=>void Ot(ke,`醫師版`),children:Le===`醫師版`?`已複製`:`複製醫師版`}),(0,Q.jsx)(`button`,{onClick:()=>it(`糖尿病衛教報告_醫師版.txt`,ke),children:`下載醫師版 TXT`})]})]})]})]}),(0,Q.jsxs)(`div`,{className:`cardActionsColumn`,children:[(0,Q.jsx)(ct,{input:Y,title:`本次生成會送出的輸入`,note:E===`C`?`C 只送出精簡事實摘要，不送原始申報明細，也不送指引。`:void 0}),(0,Q.jsx)(st,{blockers:lt,label:`目前不能生成的原因`}),(0,Q.jsxs)(`div`,{className:`cardActions`,children:[(0,Q.jsx)(`button`,{className:`primaryButton`,onClick:()=>void Ct(),disabled:At,children:N===`generating`?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{className:`spinner`}),`Gemini 生成中… `,Me,` 秒`]}):`生成衛教報告`}),(0,Q.jsx)(`button`,{className:`secondaryButton runAll`,onClick:()=>void Et(),disabled:At,children:`生成並接續稽核`}),N===`generating`&&(0,Q.jsx)(`button`,{className:`stopButton`,onClick:Tt,children:`停止生成`})]})]})]}),(0,Q.jsxs)(`article`,{className:`stepCard evalCard`,children:[(0,Q.jsxs)(`div`,{className:`stepHeading`,children:[(0,Q.jsx)(`div`,{className:`stepNumber`,children:`03`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{children:`EVALUATE`}),(0,Q.jsx)(`h2`,{children:`獨立品質稽核`}),(0,Q.jsx)(`span`,{children:`eval LLM 同時看到整理後病人資料與待評估報告。`})]})]}),(0,Q.jsxs)(`div`,{className:`twoColumns`,children:[(0,Q.jsxs)(`div`,{className:`settingsPane`,children:[(0,Q.jsx)(`label`,{className:`fieldLabel`,htmlFor:`evalPromptPreset`,children:`稽核規則版本`}),(0,Q.jsxs)(`select`,{id:`evalPromptPreset`,className:`textInput selectInput`,value:b,onChange:e=>pt(e.target.value),children:[l.map(e=>(0,Q.jsx)(`option`,{value:e.id,children:e.label},e.id)),(0,Q.jsx)(`option`,{value:`custom`,children:`自訂內容（目前文字）`})]}),(0,Q.jsx)(`p`,{className:`fieldNote`,children:b===`custom`?`下方文字已手動修改，重新整理頁面後不會保留。`:l.find(e=>e.id===b)?.description}),b===`colleague`&&!G&&(0,Q.jsxs)(`p`,{className:`promptWarning`,children:[`這個版本假設稽核模型已取得臨床指引；目前流程選的是 `,E,`，不會自動附上兩份 PDF，因此輸出的指引章節與引用仍需人工核對。`]}),(0,Q.jsxs)(`div`,{className:`labelRow`,children:[(0,Q.jsx)(`label`,{className:`fieldLabel`,htmlFor:`evalPrompt`,children:`eval LLM system prompt`}),(0,Q.jsx)(`button`,{className:`miniButton`,onClick:ht,children:b===`custom`?`恢復工作台預設`:`重新載入此版本`})]}),(0,Q.jsx)(`textarea`,{id:`evalPrompt`,className:`promptEditor evalPrompt`,value:S,onChange:e=>{be(e.target.value),ve(`custom`)},spellCheck:!1}),(0,Q.jsxs)(`div`,{className:`evalInputMap`,children:[(0,Q.jsx)(`span`,{children:`稽核輸入`}),(0,Q.jsx)(`strong`,{children:`病人資料`}),(0,Q.jsx)(`i`,{children:`＋`}),(0,Q.jsx)(`strong`,{children:`報告`}),(0,Q.jsx)(`i`,{children:`＋`}),(0,Q.jsx)(`strong`,{children:`評分規則`}),X.guidelineIncluded&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`i`,{children:`＋`}),(0,Q.jsx)(`strong`,{children:`指引全文`})]})]})]}),(0,Q.jsxs)(`div`,{className:`outputPane evalOutput`,children:[(0,Q.jsxs)(`div`,{className:`outputHeader`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`outputDot amber`}),(0,Q.jsx)(`strong`,{children:`稽核結果`})]}),j?(0,Q.jsx)(`span`,{className:`verdict ${qe.tone}`,children:qe.label}):(0,Q.jsx)(`span`,{children:`等待稽核`})]}),(0,Q.jsx)(`textarea`,{"aria-label":`eval LLM稽核結果`,className:`outputEditor`,value:j,onChange:e=>M(e.target.value),placeholder:`這裡會列出稽核結論、分項評分、重大問題與具體修改建議。`,spellCheck:!1}),(0,Q.jsxs)(`div`,{className:`outputActions`,children:[(0,Q.jsx)(`button`,{onClick:()=>void Ot(j,`稽核`),disabled:!j,children:Le===`稽核`?`已複製`:`複製`}),(0,Q.jsx)(`button`,{onClick:()=>it(`衛教報告_稽核結果.txt`,j),disabled:!j,children:`下載 TXT`})]})]})]}),(0,Q.jsxs)(`div`,{className:`cardActionsColumn`,children:[(0,Q.jsx)(ct,{input:X,title:`本次稽核會送出的輸入`}),(0,Q.jsx)(st,{blockers:ut,label:`目前不能稽核的原因`}),(0,Q.jsxs)(`div`,{className:`cardActions`,children:[(0,Q.jsx)(`button`,{className:`primaryButton amberButton`,onClick:()=>void wt(),disabled:jt,children:N===`evaluating`?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{className:`spinner`}),`品質稽核中… `,Me,` 秒`]}):`執行品質稽核`}),N===`evaluating`&&(0,Q.jsx)(`button`,{className:`stopButton`,onClick:Tt,children:`停止稽核`})]})]})]})]}),(0,Q.jsxs)(`section`,{className:`safetyNote`,children:[(0,Q.jsx)(`div`,{className:`safetyIcon`,children:`i`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`上線前的必要提醒`}),(0,Q.jsx)(`p`,{children:`此工具是內容生成與稽核工作台，不是診斷系統。正式提供病人前，仍應由醫療團隊核准固定衛教內容、prompt、模型版本與發送規則，並建立人工抽查及版本紀錄。`})]})]}),(0,Q.jsxs)(`footer`,{children:[(0,Q.jsx)(`span`,{children:`糖尿病衛教報告工作台`}),(0,Q.jsx)(`span`,{children:`資料僅在本頁處理；按下生成或稽核時才送往 Gemini API。`}),(0,Q.jsx)(`span`,{className:`buildStamp`,children:`build ${u}`})]})]})}export{lt as default};