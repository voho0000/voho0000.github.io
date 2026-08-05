import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-CXnKph_e.js";var r=e(t(),1),i=`20260805024811`,a={BASE:`固定納入`,TYPE:`糖尿病類型`,R1:`R1 眼睛`,R2:`R2 腦血管`,R3:`R3 腎臟`,R4:`R4 神經`,R5:`R5 心臟`,R6:`R6 下肢循環`},o={any:`不限型別`,"type1-confirmed":`僅第一型`,"type2-confirmed":`僅第二型`},s={"healthy-eating":`健康飲食`,"being-active":`規律活動`,monitoring:`自我監測`,"taking-medication":`規律用藥`,"problem-solving":`問題處理`,"reducing-risks":`降低風險`,"healthy-coping":`情緒調適`},c={"kidney-or-heart":`已知有腎臟或心臟問題`,"sick-day-hold-drugs":`有生病日需暫停的藥物`,sglt2:`使用 SGLT2 抑制劑`},l={"glycemic-target":`血糖目標`,"bp-target":`血壓目標`,"lipid-target":`血脂目標`,kidney:`腎臟`,"medication-safety":`用藥安全`,"screening-interval":`篩檢間隔`,"referral-urgency":`轉診急迫度`,"measurement-caveat":`判讀注意事項`},u=[`glycemic-target`,`bp-target`,`lipid-target`,`kidney`,`screening-interval`,`referral-urgency`,`medication-safety`,`measurement-caveat`],d={established:`已發生・完整模組`,"prevention-active":`尚未發生・預防內容`,"prevention-moderate":`尚未發生・適度介入`,excluded:`不納入`},f={established:`traceOutcome traceEstablished`,"prevention-active":`traceOutcome tracePrevention`,"prevention-moderate":`traceOutcome traceModerate`,excluded:`traceOutcome traceExcluded`},p={info:`留意`,attention:`需注意`,urgent:`需儘速處理`},m=`draft-0.2`,h=[{id:`BASE-01`,topic:`BASE`,title:`關於這份報告`,appliesWhen:`每份報告固定顯示，由程式自動加入。`,typeGate:`any`,autoOnly:!0,patientText:`這份內容是依報告產生當時可取得的既往健康資料整理，不會隨您之後的檢查、症狀或用藥變化自動更新。請先查看上方的「資料截至日期」；如果您最近的健康狀況已有改變，請以最新檢查結果及醫療團隊的評估為準。

本報告用來幫助您準備自我照護，不能取代診斷或處方。請勿只依本報告自行停藥、換藥、增減藥量或改變胰島素劑量。`},{id:`TYPE-UNCLEAR`,topic:`TYPE`,title:`關於您的糖尿病類型`,appliesWhen:`診斷碼、用藥或病史指向不一致，或無法確認類型時由程式自動加入。`,typeGate:`any`,autoOnly:!0,patientText:`目前資料無法一致確認您的糖尿病類型。第一型與第二型糖尿病在胰島素使用、低血糖與生病期間的照護方式可能不同，請在下次回診時向醫師確認診斷類型及適合您的自我照護方式。`},{id:`EYE-CORE`,topic:`R1`,title:`眼睛與視力`,appliesWhen:`R1 大於 0，或視網膜病變屬高風險預測項目。`,typeGate:`any`,autoOnly:!1,patientText:`糖尿病可能影響眼底的小血管。早期視網膜病變常沒有明顯不舒服，視力看起來正常也不代表眼底一定正常，所以定期眼底檢查很重要。

1. 找出最近一次眼底或散瞳眼科檢查的日期與結果。如果只做過一般視力檢查，回診時可確認是否也完成眼底檢查。
2. 若正在計畫懷孕、已懷孕，或近期血糖快速改變，請主動告知眼科與糖尿病照護團隊。`,urgentSigns:`突然看不見、視力快速下降，或突然出現明顯黑影、重影：當天儘速就醫。`,needsShared:[`smoking`]},{id:`EYE-T1`,topic:`R1`,title:`第一型糖尿病眼底檢查補充`,appliesWhen:`已選 EYE-CORE，且糖尿病類型已明確確認為第一型。`,typeGate:`type1-confirmed`,autoOnly:!1,patientText:`第一型糖尿病在發病五年內，應完成第一次包含散瞳的完整眼科檢查。`},{id:`EYE-T2`,topic:`R1`,title:`第二型糖尿病眼底檢查補充`,appliesWhen:`已選 EYE-CORE，且糖尿病類型已明確確認為第二型。`,typeGate:`type2-confirmed`,autoOnly:!1,patientText:`第二型糖尿病在確診時可能已存在一段時間，因此診斷後應儘快完成第一次包含散瞳的完整眼科檢查。`},{id:`STROKE-CORE`,topic:`R2`,title:`腦血管`,appliesWhen:`R2 大於 0，或腦血管疾病屬高風險預測項目。`,typeGate:`any`,autoOnly:!1,patientText:`血糖、血壓、血脂、吸菸與心律問題都可能影響腦血管。照顧腦血管的重點，是持續管理可以改善的因素，也要讓自己和家人知道中風警訊出現時該怎麼做。

1. 若曾有短暫單側無力、嘴歪、說話不清、突然視力異常或走路不穩，即使症狀後來消失，也要儘速告訴醫師。
2. 若曾被告知有心房顫動或頸動脈問題，回診時可確認是否需要進一步追蹤。`,urgentSigns:`記住「微笑、舉手、說你好」：微笑時臉部不對稱、雙手舉起時一側無力下垂，或說話突然不清楚，只要出現其中一項，就記下發生時間並立即撥打 119。不要等症狀自行消失，也不要自行開車就醫。`,needsShared:[`smoking`]},{id:`KIDNEY-CORE`,topic:`R3`,title:`腎臟`,appliesWhen:`R3 大於 0、CKD 欄位為 1，或腎病變屬高風險預測項目。`,typeGate:`any`,autoOnly:!1,patientText:`糖尿病腎臟病變早期通常沒有明顯症狀，不能只靠有沒有水腫或有沒有不舒服來判斷。了解尿液白蛋白／肌酸酐比值（UACR）、血清肌酸酐與腎絲球過濾率（eGFR），才能較完整地掌握腎臟狀況。

1. 看診或領藥時主動告知醫師、牙醫師與藥師自己的腎功能狀況。
2. 不自行長期服用非處方消炎止痛藥，也不要使用成分不明的中草藥、保健品或偏方。這不代表要停用醫師開立的藥物；任何處方調整都應由醫師決定。
3. 飲水量、鹽分、蛋白質與鉀的限制需依個人腎功能、心臟狀況與營養評估決定，不要自行套用網路上的腎臟飲食。`,urgentSigns:`尿量突然明顯變少、腳或臉突然腫起、呼吸變喘、持續噁心嘔吐或意識變得不清楚：儘速就醫；若呼吸困難或意識改變明顯，立即撥打 119。`},{id:`KIDNEY-T1`,topic:`R3`,title:`第一型糖尿病腎臟檢查補充`,appliesWhen:`已選 KIDNEY-CORE，且糖尿病類型已明確確認為第一型。`,typeGate:`type1-confirmed`,autoOnly:!1,patientText:`第一型糖尿病通常從發病五年後開始定期接受 UACR、血清肌酸酐與 eGFR 檢查。`},{id:`KIDNEY-T2`,topic:`R3`,title:`第二型糖尿病腎臟檢查補充`,appliesWhen:`已選 KIDNEY-CORE，且糖尿病類型已明確確認為第二型。`,typeGate:`type2-confirmed`,autoOnly:!1,patientText:`第二型糖尿病在診斷時就應開始接受 UACR、血清肌酸酐與 eGFR 檢查。`},{id:`NERVE-CORE`,topic:`R4`,title:`神經與感覺`,appliesWhen:`R4 大於 0，或神經病變屬高風險預測項目。`,typeGate:`any`,autoOnly:!1,patientText:`糖尿病神經病變可能出現麻木、刺痛、灼熱、疼痛、感覺變鈍或平衡變差；也有人早期沒有症狀。麻木不等於沒有問題，因為感覺變差時，小傷口可能不容易被發現。其他疾病或營養問題也可能造成類似症狀，需要由醫療人員評估。

1. 不要因為腳沒有痛就忽略傷口，也不要以熱水、電毯或熱敷來測試足部感覺。
2. 若出現站起來容易暈、心跳異常、反覆噁心或腹瀉便祕、排尿困難、性功能改變，或低血糖時越來越沒有警訊，請主動告訴醫療團隊，這些也可能和自主神經功能有關。
3. 不要自行購買止痛藥或神經痛藥物長期服用。`,urgentSigns:`新出現明顯無力、走路突然不穩，或足部有傷口、紅腫、化膿、發燒、明顯變色：儘速就醫。`,needsShared:[`foot`]},{id:`NERVE-T1`,topic:`R4`,title:`第一型糖尿病神經檢查補充`,appliesWhen:`已選 NERVE-CORE，且糖尿病類型已明確確認為第一型。`,typeGate:`type1-confirmed`,autoOnly:!1,patientText:`第一型糖尿病在發病五年後開始每年評估；有症狀時不必等待滿五年，應提早提出。`},{id:`NERVE-T2`,topic:`R4`,title:`第二型糖尿病神經檢查補充`,appliesWhen:`已選 NERVE-CORE，且糖尿病類型已明確確認為第二型。`,typeGate:`type2-confirmed`,autoOnly:!1,patientText:`第二型糖尿病從診斷開始每年評估；若已有麻、痛、灼熱或感覺變差，請在回診時主動提出。`},{id:`HEART-CORE`,topic:`R5`,title:`心臟`,appliesWhen:`R5 大於 0，或心血管疾病屬高風險預測項目。`,typeGate:`any`,autoOnly:!1,patientText:`糖尿病常和高血壓、血脂異常、吸菸、腎功能問題及心血管疾病互相影響。保護心臟不是只看血糖。

1. 留意近期是否比以前更容易喘、平躺時喘、腳腫、心悸、容易疲倦，或短時間內體重快速增加，並把變化告訴醫療團隊。
2. 運動強度依體力、心臟狀況與醫療團隊建議逐步增加；若活動時胸悶或喘，先停止活動並接受評估。`,urgentSigns:`突然胸悶或胸痛、喘不過氣、冒冷汗、噁心、頭暈或昏厥，或不尋常的背部疼痛併隨不適：立即撥打 119。不要自行開車，也不要嘗試以大力咳嗽取代就醫。`,needsShared:[`smoking`]},{id:`LEG-CIRCULATION-CORE`,topic:`R6`,title:`下肢循環`,appliesWhen:`R6 大於 0，或周邊血管病變屬高風險預測項目。`,typeGate:`any`,autoOnly:!1,patientText:`周邊動脈疾病是腿部與足部的動脈循環變差。有些人沒有症狀；也有人走一段路後小腿痠痛、休息後改善，或出現足部冰冷、顏色變淡、傷口不容易癒合。這和單純神經麻木不同，但兩種問題也可能同時存在。

1. 留意走路時是否固定在相近距離出現小腿、臀部或大腿疼痛，以及休息後是否改善。把發作位置、走路距離和持續時間記下來，回診時提供給醫療團隊。
2. 若已有足部傷口、休息時也疼痛、明顯變色或疑似嚴重缺血，應先接受醫療評估，再決定適合的運動方式。
3. 不要自行購買抗血小板藥物。`,urgentSigns:`一隻腳突然劇烈疼痛、變得明顯冰冷或蒼白、發紫、麻木或無力：立即就醫。若有傷口、紅腫、流膿、異味或發燒，也要儘快就醫。`,needsShared:[`foot`,`smoking`]}],g=new Map(h.map(e=>[e.id,e]));h.filter(e=>!e.autoOnly);var _=`2022-guideline-extract-0.2`,v=`中華民國糖尿病學會《2022第2型糖尿病臨床照護指引》`,y=[{id:`hba1c-general`,targetValue:`低於 7.0%，並需個別化考量。`,category:`glycemic-target`,appliesTo:`一般成人`,statement:`糖化血色素控制目標為低於 7.0%，並需個別化考量。`,citation:{table:`表一 血糖控制目標`,pdfPage:13},patientFacing:!0},{id:`fpg-general`,targetValue:`80–130 mg/dL。`,category:`glycemic-target`,appliesTo:`一般成人`,statement:`空腹血糖控制目標為 80–130 mg/dL。`,citation:{section:`第九章 血糖控制目標`,pdfPage:72},patientFacing:!0},{id:`ppg-general`,targetValue:`80–160 mg/dL。`,category:`glycemic-target`,appliesTo:`一般成人`,statement:`餐後血糖控制目標為 80–160 mg/dL。`,citation:{section:`第九章 血糖控制目標`,pdfPage:72},patientFacing:!0},{id:`hba1c-elderly-healthy`,targetValue:`放寬為低於 7–7.5%。`,category:`glycemic-target`,appliesTo:`65 歲以上、共病少且認知與身體機能正常`,statement:`糖化血色素目標放寬為低於 7–7.5%。`,citation:{table:`表二 高齡者血糖目標`,pdfPage:72},patientFacing:!0},{id:`hba1c-elderly-intermediate`,targetValue:`放寬為低於 8.0%。`,category:`glycemic-target`,appliesTo:`65 歲以上、多種共病或認知與身體機能輕至中度異常`,statement:`糖化血色素目標放寬為低於 8.0%。`,citation:{table:`表二 高齡者血糖目標`,pdfPage:72},patientFacing:!0},{id:`hba1c-elderly-poor`,targetValue:`不以糖化血色素作為唯一控制目標，重點在避免低血糖與有症狀的高血糖。`,category:`glycemic-target`,appliesTo:`65 歲以上、末期慢性病或認知與身體機能中至重度異常`,statement:`不以糖化血色素作為唯一控制目標，重點在避免低血糖與有症狀的高血糖。`,citation:{table:`表二 高齡者血糖目標`,pdfPage:72},patientFacing:!0},{id:`hypoglycemia-levels`,category:`glycemic-target`,appliesTo:`所有糖尿病人`,statement:`血糖低於 70 mg/dL 為第一級低血糖，低於 54 mg/dL 為第二級低血糖。`,citation:{table:`表一 低血糖分級`,pdfPage:141},patientFacing:!0},{id:`hba1c-unreliable`,category:`measurement-caveat`,appliesTo:`貧血、變異血色素、慢性腎病變或懷孕`,statement:`糖化血色素可能無法代表平均血糖，可加測糖化白蛋白與自我血糖監測輔助判讀。`,citation:{table:`表九 註 1`,pdfPage:19},patientFacing:!0},{id:`bp-treatment-threshold`,category:`bp-target`,appliesTo:`糖尿病人`,statement:`血壓達到或超過 140/90 mmHg 通常即開始高血壓治療。`,citation:{section:`第十四章 心血管併發症`,pdfPage:147},patientFacing:!0},{id:`bp-target-general`,targetValue:`140/90 mmHg 以下。`,category:`bp-target`,appliesTo:`一般糖尿病人`,statement:`血壓控制在 140/90 mmHg 以下。`,citation:{section:`第十四章 心血管併發症`,pdfPage:147},patientFacing:!0},{id:`bp-target-intensive`,targetValue:`在病人可承受的情況下可進一步控制至 130/80 mmHg。`,category:`bp-target`,appliesTo:`可耐受且屬心血管或腦血管高危族群`,statement:`在病人可承受的情況下可進一步控制至 130/80 mmHg。`,citation:{section:`第十四章 心血管併發症`,pdfPage:147},patientFacing:!0},{id:`ldl-general`,targetValue:`低於 100 mg/dL。`,category:`lipid-target`,appliesTo:`所有糖尿病人`,statement:`低密度脂蛋白膽固醇目標為低於 100 mg/dL。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`ldl-cvd`,targetValue:`低於 70 mg/dL。`,category:`lipid-target`,appliesTo:`已有心血管疾病`,statement:`低密度脂蛋白膽固醇目標為低於 70 mg/dL。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`hdl-target`,targetValue:`男性高於 40 mg/dL、女性高於 50 mg/dL。`,category:`lipid-target`,appliesTo:`所有糖尿病人`,statement:`高密度脂蛋白膽固醇目標為男性高於 40 mg/dL、女性高於 50 mg/dL。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`tg-target`,targetValue:`低於 150 mg/dL；達到或超過 500 mg/dL 時需藥物處理。`,category:`lipid-target`,appliesTo:`所有糖尿病人`,statement:`三酸甘油酯目標為低於 150 mg/dL；達到或超過 500 mg/dL 時需藥物處理。`,citation:{table:`表一 血脂的目標建議`,pdfPage:154},patientFacing:!0},{id:`metformin-egfr-30`,category:`medication-safety`,appliesTo:`eGFR 低於 30 mL/min/1.73m²`,statement:`此腎功能下 metformin 屬禁用。`,citation:{section:`第十一章 藥物治療`,pdfPage:100},patientFacing:!1},{id:`metformin-egfr-30-45`,category:`medication-safety`,appliesTo:`eGFR 介於 30–45 mL/min/1.73m²`,statement:`metformin 應減量使用。`,citation:{section:`第十一章 藥物治療`,pdfPage:100},patientFacing:!1},{id:`albuminuria-diagnosis`,category:`kidney`,appliesTo:`尿液白蛋白/肌酸酐比值異常者`,statement:`異常結果應於 3–6 個月內重複測定，3 次檢查中有 2 次異常才診斷為蛋白尿。`,citation:{table:`表九 註 2`,pdfPage:19},patientFacing:!0},{id:`kidney-intensive-followup`,category:`screening-interval`,appliesTo:`UACR 超過 300 mg/g 或 eGFR 介於 30–60 mL/min/1.73m²（低於 30 不在本註範圍）`,statement:`至少每半年監測追蹤一次。`,citation:{table:`表九 註 3`,pdfPage:19},patientFacing:!0},{id:`interval-hba1c`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`糖化血色素與血糖建議每 3 個月監測一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-education`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`糖尿病衛教建議每 3 個月進行一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-lipid`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`血脂建議每年檢查一次；若血脂異常或正在使用降血脂藥物，改為每 3–6 個月。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-kidney`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`肌酸酐、eGFR、尿液常規與白蛋白尿建議每年檢查一次；異常需追蹤者改為每 3–6 個月。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-eye`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`視力與眼底檢查建議每年一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-foot`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`足部脈搏與踝臂動脈收縮壓比值建議每年檢查一次。`,patientStatement:`建議每年檢查一次腳的血液循環。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-neuropathy`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`神經病變評估（單股纖維壓覺、128 Hz 音叉震動感、肌腱反射）建議每年一次。`,patientStatement:`建議每年做一次足部感覺檢查。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-oral`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`口腔檢查建議每年一次。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-self-management`,category:`screening-interval`,appliesTo:`糖尿病人`,statement:`體重、血壓、血糖與足部的自我管理需經常進行。`,citation:{table:`表九 臨床監測項目與建議頻率`,pdfPage:19},patientFacing:!0},{id:`interval-retina-followup`,category:`screening-interval`,appliesTo:`已完成眼底檢查者`,statement:`眼底沒有變化或僅輕微變化時每年一次；比上次檢查惡化時每 3–6 個月一次；懷孕時需更頻繁追蹤。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`screening-adult`,category:`screening-interval`,appliesTo:`40 歲以上一般民眾`,statement:`40 歲以上建議每 3 年篩檢一次糖尿病，65 歲以上建議每年篩檢一次。`,citation:{section:`第五章 糖尿病人的篩檢`,pdfPage:50},patientFacing:!0},{id:`referral-nephrology`,category:`referral-urgency`,appliesTo:`eGFR 低於 30，或腎病病因不明、貧血、次發性副甲狀腺功能過高症、代謝性骨疾病、頑抗性高血壓、電解質不平衡`,statement:`建議轉介腎臟專科醫師，以增進醫療照護品質並延緩透析時機。`,citation:{section:`糖尿病腎臟疾病－轉介腎臟專科醫師`,pdfPage:200},patientFacing:!1},{id:`referral-eye-sameday`,category:`referral-urgency`,appliesTo:`突發性視力喪失或視網膜剝離徵象`,statement:`當天轉診眼科專科醫師。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`referral-eye-week`,category:`referral-urgency`,appliesTo:`視網膜前或玻璃體出血、新生血管、虹膜炎`,statement:`一週內轉診眼科專科醫師。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`referral-eye-months`,category:`referral-urgency`,appliesTo:`重度視網膜病變、無法解釋的視力衰退、黃斑部水腫、白內障或無法看見眼底`,statement:`1–2 個月內轉診眼科專科醫師。`,citation:{table:`表九 註 4`,pdfPage:19},patientFacing:!0},{id:`referral-foot`,category:`referral-urgency`,appliesTo:`有足部潰瘍或感染`,statement:`轉診至足部照護團隊。`,citation:{table:`表九 註 5`,pdfPage:19},patientFacing:!0}],b=new Map(y.map(e=>[e.id,e]));function x(e){let t=e.citation.table??e.citation.section??``;return`${v}${t?`，${t}`:``}（PDF 第 ${e.citation.pdfPage} 頁）`}function S(e){let t=e.citation.table??e.citation.section??``;return`${t?`${t}，`:``}p.${e.citation.pdfPage}`}var C=`draft-0.1`,w=[{id:`SC-MONITOR`,behavior:`monitoring`,title:`掌握自己的數字`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`知道自己的數字，回診時才問得出重點。

1. 找出最近一次的糖化血色素、血壓、血脂與腎功能檢查結果與日期。若不確定，可在回診時請醫療團隊協助查詢。
2. 若醫療團隊建議您在家測血糖，請記錄測量的時間點（空腹、飯後或睡前）與數值，回診時一起帶去。
3. 在家量血壓時，先坐著休息五分鐘，手臂與心臟同高，同一時間每天量，並把數值記下來。
4. 不要只看單一次的數字。一段時間的變化比單次結果更能反映真實狀況。`},{id:`SC-MEDS`,behavior:`taking-medication`,title:`把藥用對、用得安全`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`規律用藥是控制糖尿病最直接的一環，而任何調整都應該由醫師決定。

1. 依醫師指示的時間與劑量服藥。若經常忘記，可使用藥盒、手機提醒，或請醫療團隊協助簡化用藥。
2. 服藥後若出現不舒服，先聯絡醫療團隊或藥師確認，不要自行停藥、減藥或更換藥品。
3. 每次看診、看牙或到藥局時，主動出示目前所有正在使用的藥品清單，包含中草藥、保健食品與別家醫院開立的藥。
4. 不要自行購買來路不明的藥品、偏方或宣稱可以取代處方的產品。`},{id:`SC-EAT`,behavior:`healthy-eating`,title:`吃得穩定，不必吃得痛苦`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`糖尿病的飲食不是不能吃，而是讓份量與時間穩定下來。

1. 三餐時間盡量固定，不要為了控制血糖而跳過正餐。
2. 主食（飯、麵、麵包、根莖類、水果）是影響血糖最主要的來源。份量比種類更重要，可請營養師協助換算適合您的份量。
3. 每餐先吃蔬菜與蛋白質，再吃主食，有助於減緩血糖上升。
4. 含糖飲料是最容易被忽略的來源，包含手搖飲、罐裝飲料與運動飲料。改喝白開水或無糖茶是最快見效的一步。
5. 若同時有腎臟或心臟問題，鹽分、蛋白質與水分的限制需要依個人狀況設計，不要自行套用網路上的飲食法。`,definiteVariants:[{when:`kidney-or-heart`,from:`5. 若同時有腎臟或心臟問題，鹽分、蛋白質與水分的限制需要依個人狀況設計，不要自行套用網路上的飲食法。`,to:`5. 您的資料顯示已有腎臟或心臟方面的狀況，鹽分、蛋白質與水分的份量需要由營養師與醫療團隊為您個別設計，不要自行套用網路上的飲食法。`}]},{id:`SC-ACTIVE`,behavior:`being-active`,title:`動起來，從做得到的強度開始`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`規律活動能同時改善血糖、血壓與血脂，重點是能持續。

1. 從您現在做得到的強度開始，逐步增加。走路是最容易開始也最容易持續的方式。
2. 盡量減少長時間久坐。每坐約一小時起來活動幾分鐘，累積起來也有效果。
3. 若活動時出現胸悶、胸痛、明顯喘不過氣、頭暈或冒冷汗，請立即停止並儘速就醫。
4. 若已有足部傷口、視網膜病變、心臟疾病或平衡問題，開始新的運動前請先與醫療團隊討論適合的方式與強度。`},{id:`SC-RISK-REDUCE`,behavior:`reducing-risks`,title:`疫苗與口腔`,core:!0,appliesWhen:`每份報告固定納入。`,patientText:`1. 依醫療團隊建議接種疫苗。
2. 維持口腔清潔並定期洗牙。牙周發炎與血糖控制會互相影響。`},{id:`SC-HYPO`,behavior:`problem-solving`,title:`認識低血糖並知道怎麼處理`,core:!1,appliesWhen:`資料中有胰島素或促胰島素分泌劑（如 sulfonylurea、glinide）的申報紀錄時納入。`,patientText:`某些糖尿病藥物可能造成低血糖，事先知道怎麼處理就不會慌張。

1. 常見症狀包含發抖、冒冷汗、心悸、飢餓感、頭暈、視線模糊、注意力不集中或突然情緒改變。
2. 懷疑低血糖時，若手邊有血糖機請先測量。無法測量時，先當作低血糖處理。
3. 立即補充約 15 公克的醣類，例如半杯果汁、含糖飲料或方糖。等待 15 分鐘後再測一次，若仍偏低可再補充一次。
4. 症狀改善後，若距離下一餐還久，可再吃一份含澱粉的點心。
5. 隨身攜帶糖果或含糖飲料，並讓家人、同事知道您可能發生低血糖以及該怎麼幫您。`,urgentSigns:`低血糖時出現意識不清、抽搐或無法自行吞嚥：旁人不可強行餵食，請立即撥打 119。`},{id:`SC-SICKDAY`,behavior:`problem-solving`,title:`生病或使用類固醇期間的照護`,core:!1,appliesWhen:`資料中有全身性類固醇的申報紀錄，或年齡 65 歲以上，或已發生併發症項目較多時納入。`,patientText:`感染、發燒或使用類固醇期間，血糖可能明顯上升。

1. 生病期間不要自行停用糖尿病藥物，除非醫師另有指示。
2. 這段期間血糖可能比平常高，若醫療團隊有教您自我監測，建議增加測量頻率。
3. 注意補充水分。發燒、腹瀉或嘔吐時特別容易脫水。
4. 使用類固醇期間血糖上升是常見反應，停藥後可能回降。用藥前後請主動告知糖尿病照護團隊。`,definiteVariants:[{when:`sick-day-hold-drugs`,from:`1. 生病期間不要自行停用糖尿病藥物，除非醫師另有指示。`,to:`1. 生病期間不要自行停用糖尿病藥物，除非醫師另有指示。
2. 您使用的藥物中，有些在發燒、嚴重腹瀉嘔吐或無法進食而脫水時可能需要暫停。請事先和醫療團隊確認「哪幾種要停、什麼情況停、什麼時候恢復」，把答案記下來備用，不要等生病當下才問。`},{when:`sglt2`,from:`3. 注意補充水分。發燒、腹瀉或嘔吐時特別容易脫水。`,to:`3. 注意補充水分並保持會陰部清潔。您使用的藥物中有一類會讓糖分從尿液排出，較容易發生泌尿道或生殖器感染。
4. 特別注意：這類藥物在少數情況下，即使血糖不高也可能發生酮酸中毒。若出現持續噁心嘔吐、腹痛、呼吸變喘或呼氣有水果味，即使血糖看起來正常也要儘速就醫。`}],urgentSigns:`生病期間持續嘔吐無法進食、血糖持續偏高不下、呼吸變喘、意識改變或明顯脫水：儘速就醫。`},{id:`SC-COPING`,behavior:`healthy-coping`,title:`照顧情緒也是照顧糖尿病`,core:!1,appliesWhen:`已發生併發症較多或整體疾病負擔較高時納入。`,patientText:`長期管理慢性病本來就累，情緒低落或倦怠並不代表您做得不好。

1. 覺得疲乏、沮喪或對自我照護失去動力，是常見且可以被協助的狀況，不是意志力的問題。
2. 一次只調整一件事。設定小而具體的目標，比一次改變全部更容易持續。
3. 讓家人或朋友知道您正在做的事，需要時請他們協助提醒或陪同回診。
4. 若情緒低落持續超過兩週、影響睡眠或日常生活，請主動告訴醫療團隊，可安排進一步評估與轉介。`,urgentSigns:`若出現傷害自己的念頭：請立即告訴身邊的人並尋求協助，或撥打 1925 安心專線。`}],T=new Map(w.map(e=>[e.id,e]));function E(e,t,n=null){let r={},i=[];for(let e of w)e.core&&(i.push(e.id),r[e.id]=`核心自我照護模組，固定納入。`);let a=e.medicationClasses.map(e=>e.atcClass).join(` `),o=/胰島素|insulin|磺醯脲|sulfonyl|glinide|瑞格列|格列/i.test(a),s=n!==null&&n<70;(o||s)&&(i.push(`SC-HYPO`),r[`SC-HYPO`]=[s?`資料中實測血糖最低 ${n} mg/dL，低於 70`:``,o?`申報用藥分類中出現胰島素或促胰島素分泌劑`:``].filter(Boolean).join(`；`)+`，需納入低血糖處理。`);let c=/腎上腺素|類固醇|corticoster|prednis|dexameth/i.test(a),l=e.medicationIngredients.join(` `),u=/metformin|雙胍|gliflozin/i.test(l),d=e.ageYears.known?e.ageYears.value:null,f=t;(c||u||d!==null&&d>=65||f>=3)&&(i.push(`SC-SICKDAY`),r[`SC-SICKDAY`]=[c?`申報用藥分類中出現全身性類固醇`:``,d!==null&&d>=65?`年齡 ${d} 歲`:``,u?`申報用藥含生病期間可能需要暫停的類別（metformin 或 SGLT2 抑制劑）`:``,f>=3?`已發生併發症 ${f} 項`:``].filter(Boolean).join(`；`)+`。`);let p=e.dcsiTotal.known?e.dcsiTotal.value:null;return(p!==null&&p>=4||f>=3)&&(i.push(`SC-COPING`),r[`SC-COPING`]=`疾病負擔較高（DCSI ${p??`未知`}，已發生併發症 ${f} 項）。`),{moduleIds:i,reasons:r}}var D=[{id:`SHARED-TARGETS`,title:`血糖、血壓與血脂`,appliesWhen:`always`,text:`這三項會一起影響眼睛、腎臟、神經、心臟與腦部的血管，所以不是只顧血糖就夠。

1. 依醫療團隊共同訂定的目標控制，不必和別人比較數字。每個人的目標會依年齡、共病與用藥調整。
2. 這三項要一起看，只顧其中一項效果有限。`},{id:`SHARED-FOOT`,title:`每天花一分鐘照顧雙腳`,appliesWhen:`foot`,text:`1. 每天查看腳背、腳底、腳趾縫與腳跟。看不到腳底時，可使用鏡子或請家人協助。
2. 留意水泡、破皮、裂傷、紅腫、變色、滲液、異味、厚繭或指甲周圍發炎。
3. 每天以溫水清潔並擦乾，尤其要擦乾腳趾縫。水溫先用手肘確認，不要用熱水袋、電毯或暖暖包直接熱敷足部。
4. 不赤腳走路，也不要只穿襪子或薄底拖鞋行走。穿鞋前先摸摸鞋內是否有砂石、破損或凸起物。
5. 不要自行剪除厚繭、雞眼，也不要在傷口上使用來路不明的藥膏或偏方。`},{id:`SHARED-SMOKING`,title:`關於吸菸`,appliesWhen:`smoking`,text:`吸菸會同時傷害眼底、腎臟與全身大小血管，戒菸是對血管保護效益最大的一件事。可請醫療團隊轉介戒菸服務，或撥打戒菸專線。`}],O=new Map(D.map(e=>[e.id,e])),ee={1:[`interval-eye`,`interval-retina-followup`],2:[],3:[`interval-kidney`,`kidney-intensive-followup`],4:[`interval-neuropathy`],5:[`interval-lipid`],6:[`interval-foot`]},te=[`interval-hba1c`,`interval-lipid`,`interval-kidney`,`interval-oral`];function ne(e,t={}){let n=new Set(te);for(let t of e)for(let e of ee[t]??[])n.add(e);t.kidneyIntensive||n.delete(`kidney-intensive-followup`),n.has(`kidney-intensive-followup`)&&n.delete(`interval-kidney`),n.has(`interval-retina-followup`)&&n.delete(`interval-eye`);let r=y.filter(e=>n.has(e.id)&&e.patientFacing);return r.length?{rules:r,text:ie(r)}:{rules:[],text:``}}var re={"interval-hba1c":`血糖控制指標`,"interval-lipid":`血脂`,"interval-kidney":`腎功能與尿液檢查`,"interval-oral":`口腔`,"interval-eye":`眼底`,"interval-retina-followup":`眼底檢查`,"interval-neuropathy":`神經與足部感覺`,"interval-foot":`足部循環`,"kidney-intensive-followup":`腎功能與尿液檢查（您的檢查結果顯示需要加強追蹤）`};function ie(e){return e.length?`${e.map((e,t)=>`${t+1}. ${re[e.id]??``}：${e.patientStatement??e.statement}`).join(`
`)}

實際的檢查時間由醫療團隊依您的狀況安排，上面是一般的參考間隔。`:``}var ae={"kidney-intensive-followup":`腎功能與尿液白蛋白`};function oe(e){return e.map(e=>{let t=ae[e.id];return`  ${t?`${t}：`:``}${e.statement}　〔${S(e)}〕`})}var k=n(),se=[{id:`education`,label:`衛教模組 ${m}`},{id:`selfCare`,label:`自我照護模組 ${C}`},{id:`rules`,label:`指引門檻表 ${_}`}];function ce({approved:e}){return(0,k.jsx)(`span`,{className:e?`libraryBadge libraryBadgeOk`:`libraryBadge libraryBadgeDraft`,children:e?`已核准`:`DRAFT・未經醫療團隊核准`})}function le({text:e}){return(0,k.jsx)(k.Fragment,{children:e.split(/\n{2,}/).map((e,t)=>(0,k.jsx)(`p`,{className:`libraryBody`,children:e},t))})}function ue(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`p`,{className:`fieldNote`,children:`病人版報告的併發症段落只會用到這裡的文字，模型不改寫。 主題模組只留該疾病特有的內容；每份報告都講一次的通用內容集中在下方的共同區塊。`}),h.map(e=>(0,k.jsxs)(`article`,{className:`libraryItem`,children:[(0,k.jsxs)(`header`,{className:`libraryItemHead`,children:[(0,k.jsx)(`h3`,{children:e.title}),(0,k.jsx)(`code`,{children:e.id}),(0,k.jsx)(`span`,{className:`libraryTag`,children:a[e.topic]}),e.typeGate===`any`?null:(0,k.jsx)(`span`,{className:`libraryTag`,children:o[e.typeGate]}),e.autoOnly?(0,k.jsx)(`span`,{className:`libraryTag`,children:`程式自動加入`}):null]}),(0,k.jsxs)(`p`,{className:`libraryMeta`,children:[`納入條件：`,e.appliesWhen]}),(0,k.jsx)(le,{text:e.patientText}),e.urgentSigns?(0,k.jsxs)(`p`,{className:`libraryUrgent`,children:[(0,k.jsx)(`strong`,{children:`就醫警訊`}),e.urgentSigns]}):null]},e.id)),(0,k.jsx)(`h3`,{className:`librarySubhead`,children:`共同區塊（整份報告各出現一次）`}),D.map(e=>(0,k.jsxs)(`article`,{className:`libraryItem`,children:[(0,k.jsxs)(`header`,{className:`libraryItemHead`,children:[(0,k.jsx)(`h3`,{children:e.title}),(0,k.jsx)(`code`,{children:e.id}),(0,k.jsx)(`span`,{className:`libraryTag`,children:e.appliesWhen===`always`?`固定納入`:`由主題觸發：${e.appliesWhen}`})]}),(0,k.jsx)(le,{text:e.text})]},e.id))]})}function de(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`p`,{className:`fieldNote`,children:`以 DSMES／ADCES7 七項自我照護行為為骨架。臨床照護指引不是為這些行為寫的， 所以這些文字不引指引，需由醫療團隊依院內衛教單張核定。`}),w.map(e=>(0,k.jsxs)(`article`,{className:`libraryItem`,children:[(0,k.jsxs)(`header`,{className:`libraryItemHead`,children:[(0,k.jsx)(`h3`,{children:e.title}),(0,k.jsx)(`code`,{children:e.id}),(0,k.jsx)(`span`,{className:`libraryTag`,children:s[e.behavior]??e.behavior}),e.core?(0,k.jsx)(`span`,{className:`libraryTag`,children:`固定納入`}):null]}),(0,k.jsxs)(`p`,{className:`libraryMeta`,children:[`納入條件：`,e.appliesWhen]}),(0,k.jsx)(le,{text:e.patientText}),e.definiteVariants?.length?(0,k.jsxs)(`div`,{className:`libraryVariants`,children:[(0,k.jsx)(`strong`,{children:`整句替換（兩句擇一，不會同時出現）`}),(0,k.jsx)(`p`,{className:`libraryVariantHint`,children:`正文寫成「若…」是因為要能給所有人看。程式已從資料確認這位病人符合下列條件時，那一句改用直述句。`}),e.definiteVariants.map((e,t)=>(0,k.jsxs)(`div`,{className:`libraryVariant`,children:[(0,k.jsx)(`p`,{className:`libraryVariantWhen`,children:(0,k.jsx)(`span`,{className:`libraryTag`,children:c[e.when]??e.when})}),(0,k.jsxs)(`p`,{className:`libraryVariantLine`,children:[(0,k.jsx)(`span`,{className:`libraryVariantSide`,children:`未確認時`}),(0,k.jsx)(`span`,{className:`libraryVariantFrom`,children:e.from})]}),(0,k.jsxs)(`p`,{className:`libraryVariantLine`,children:[(0,k.jsx)(`span`,{className:`libraryVariantSide libraryVariantSideOn`,children:`已確認時`}),(0,k.jsx)(`span`,{className:`libraryVariantTo`,children:e.to})]})]},t))]}):null,e.urgentSigns?(0,k.jsxs)(`p`,{className:`libraryUrgent`,children:[(0,k.jsx)(`strong`,{children:`就醫警訊`}),e.urgentSigns]}):null]},e.id))]})}function fe(){let e=[...u,...y.map(e=>e.category).filter(e=>!u.includes(e))].filter((e,t,n)=>n.indexOf(e)===t).map(e=>({category:e,rules:y.filter(t=>t.category===e)})).filter(e=>e.rules.length>0);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`p`,{className:`fieldNote`,children:[`來源：`,v,`。這裡記錄的是門檻數值、追蹤間隔與轉診急迫度等事實，以自己的文字陳述並附出處， 不重製指引原文。頁次指 PDF 實體頁次，可直接跳頁核對。共 `,y.length,` 條。`]}),e.map(e=>(0,k.jsxs)(`section`,{className:`libraryGroup`,children:[(0,k.jsxs)(`h3`,{className:`librarySubhead`,children:[l[e.category]??e.category,(0,k.jsx)(`span`,{className:`libraryCount`,children:e.rules.length})]}),(0,k.jsx)(`div`,{className:`libraryTableWrap`,children:(0,k.jsxs)(`table`,{className:`libraryTable`,children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{children:`適用對象`}),(0,k.jsx)(`th`,{children:`門檻／間隔（醫師版用字）`}),(0,k.jsx)(`th`,{children:`病人版用字`}),(0,k.jsx)(`th`,{children:`出處`})]})}),(0,k.jsx)(`tbody`,{children:e.rules.map(e=>(0,k.jsxs)(`tr`,{children:[(0,k.jsxs)(`td`,{children:[(0,k.jsx)(`code`,{children:e.id}),(0,k.jsx)(`span`,{children:e.appliesTo})]}),(0,k.jsx)(`td`,{children:e.statement}),(0,k.jsx)(`td`,{children:e.patientFacing?e.patientStatement??e.statement:(0,k.jsx)(`span`,{className:`libraryMuted`,children:`不對病人顯示`})}),(0,k.jsx)(`td`,{className:`libraryCitation`,children:S(e)})]},e.id))})]})})]},e.category))]})}function pe(){let[e,t]=(0,r.useState)(`education`);return(0,k.jsxs)(`article`,{className:`stepCard`,children:[(0,k.jsxs)(`div`,{className:`stepHeading`,children:[(0,k.jsx)(`span`,{className:`stepNumber`,children:`05`}),(0,k.jsxs)(`div`,{className:`stepHeadingText`,children:[(0,k.jsx)(`p`,{className:`eyebrow`,children:`CONTENT`}),(0,k.jsx)(`h2`,{children:`報告會用到的固定內容`}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`唯讀。病人讀到的每一句衛教文字都出自這裡，模型不改寫（唯一例外是病人版的「您的檢驗數值」一段）。 內容改動走版本控制與送審，不在頁面上編輯。`})]})]}),(0,k.jsxs)(`div`,{className:`stepBody`,children:[(0,k.jsx)(`div`,{className:`tabs`,children:se.map(n=>(0,k.jsx)(`button`,{type:`button`,className:e===n.id?`active`:``,onClick:()=>t(n.id),children:n.label},n.id))}),(0,k.jsx)(`p`,{className:`libraryStatus`,children:(0,k.jsx)(ce,{approved:!1})}),(0,k.jsxs)(`div`,{className:`libraryScroll`,children:[e===`education`?(0,k.jsx)(ue,{}):null,e===`selfCare`?(0,k.jsx)(de,{}):null,e===`rules`?(0,k.jsx)(fe,{}):null]})]})]})}function A(e){let t=[];return e.rValue!==null&&t.push(`R${e.topic}=${e.rValue}`),e.prValue!==null&&t.push(`PR${e.topic}=${e.prValue}`),t.length?t.join(`　`):`R${e.topic}／PR${e.topic} 皆缺值`}function j(e){return g.get(e)?.title??T.get(e)?.title??O.get(e)?.title??e}function me(e){let t=g.get(e)?.topic;return t===`BASE`?`固定`:t===`TYPE`?`類型說明`:`主題`}function M(e,t){let n=e?b.get(e):void 0;return n?S(n):t}function N({n:e,title:t,note:n,count:r,children:i}){return(0,k.jsxs)(`section`,{className:`traceStage`,children:[(0,k.jsxs)(`header`,{className:`traceStageHead`,children:[(0,k.jsx)(`span`,{className:`traceStep`,children:e}),(0,k.jsx)(`h4`,{children:t}),r?(0,k.jsx)(`span`,{className:`traceCount`,children:r}):null]}),n?(0,k.jsx)(`p`,{className:`traceNote`,children:n}):null,i]})}function he({plan:e,facts:t}){let n=e.targets.targets.filter(e=>e.value),r=e.patientModuleIds;return(0,k.jsxs)(`div`,{className:`traceBoard`,children:[(0,k.jsx)(`p`,{className:`traceLead`,children:`以下每一段都由程式判定，不需要 API 金鑰，也不會因為換模型而改變。左邊是輸入訊號，右邊是判定結果。`}),(0,k.jsx)(N,{n:`1`,title:`併發症主題：R／PR → 納入方式`,note:`同一個主題，來源只會給 R 或 PR 其中一個。給了 R 代表已發生；只給 PR 代表尚未發生，才會有風險預測。`,count:`${e.decisions.filter(e=>e.kind!==`excluded`).length}／${e.decisions.length} 納入`,children:(0,k.jsx)(`ul`,{className:`traceRows`,children:e.decisions.map(e=>(0,k.jsxs)(`li`,{className:e.kind===`excluded`?`traceRow traceRowOff`:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceSignal`,children:A(e)}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsx)(`span`,{className:f[e.kind],children:d[e.kind]}),(0,k.jsx)(`span`,{className:`traceSubject`,children:e.topicName}),(0,k.jsx)(`p`,{className:`traceReason`,children:e.reason})]},e.topic))})}),(0,k.jsxs)(N,{n:`2`,title:`依指引推導的目標`,note:`目標值來自門檻表，不是模型生成的。括號內是可回查的章表與頁次。`,count:`${n.length} 項`,children:[n.length?(0,k.jsx)(`ul`,{className:`traceRows`,children:n.map(e=>(0,k.jsxs)(`li`,{className:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceSignal`,children:e.metric}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsx)(`span`,{className:`traceValue`,children:e.value}),M(e.ruleId,e.citation)?(0,k.jsx)(`span`,{className:`traceCitation`,children:M(e.ruleId,e.citation)}):null,(0,k.jsx)(`p`,{className:`traceReason`,children:e.reason})]},e.metric))}):(0,k.jsx)(`p`,{className:`traceEmpty`,children:`沒有可解出的目標。`}),e.targets.undetermined.length?(0,k.jsx)(`ul`,{className:`traceNoteList`,children:e.targets.undetermined.map((e,t)=>(0,k.jsxs)(`li`,{children:[`資料不足、未判定：`,e]},t))}):null]}),(0,k.jsxs)(N,{n:`3`,title:`檢驗門檻判定`,note:`由實際數值觸發。這一段只做數值比對；判讀交給 LLM（下方②）。`,count:`${e.labThresholds.length} 則・已判定 ${e.evaluatedAnalytes} 項指標`,children:[e.labThresholds.length?(0,k.jsx)(`ul`,{className:`traceRows`,children:e.labThresholds.map((e,t)=>(0,k.jsxs)(`li`,{className:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceSeverity traceSeverity-${e.severity}`,children:p[e.severity]??e.severity}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsx)(`span`,{className:`traceValue`,children:e.clinicianMessage}),M(e.ruleId,e.citation)?(0,k.jsx)(`span`,{className:`traceCitation`,children:M(e.ruleId,e.citation)}):null]},`${e.code}-${t}`))}):(0,k.jsx)(`p`,{className:`traceEmpty`,children:`沒有數值達到門檻。`}),e.unevaluatedNumericItems>0?(0,k.jsxs)(`p`,{className:`traceNote`,children:[`另有 `,e.unevaluatedNumericItems,` 種有數值但未納入門檻判定的項目，會交給 LLM 判讀。`]}):null]}),(0,k.jsx)(N,{n:`4`,title:`追蹤間隔`,note:`由納入的主題決定要列哪些項目，間隔本身出自門檻表。`,count:`${e.followUp.rules.length} 項`,children:e.followUp.rules.length?(0,k.jsx)(`ul`,{className:`traceRows`,children:e.followUp.rules.map(e=>(0,k.jsxs)(`li`,{className:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceSignal`,children:e.id}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsx)(`span`,{className:`traceValue`,children:e.patientStatement??e.statement})]},e.id))}):(0,k.jsx)(`p`,{className:`traceEmpty`,children:`沒有適用的固定間隔。`})}),(0,k.jsx)(N,{n:`5`,title:`自我照護模組`,note:`與併發症主題無關，依用藥、低血糖紀錄與併發症數量觸發。`,count:`${e.selfCareModuleIds.length} 個`,children:(0,k.jsx)(`ul`,{className:`traceRows`,children:e.selfCareModuleIds.map(t=>(0,k.jsxs)(`li`,{className:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceSignal`,children:t}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsx)(`span`,{className:`traceValue`,children:j(t)}),e.selfCareReasons[t]?(0,k.jsx)(`p`,{className:`traceReason`,children:e.selfCareReasons[t]}):null]},t))})}),(0,k.jsxs)(N,{n:`6`,title:`病人版報告的段落順序`,note:`這就是組裝結果。正文逐字來自固定模組，模型不改寫。`,count:`${r.length+e.sharedBlockIds.length+e.selfCareModuleIds.length} 段`,children:[(0,k.jsxs)(`ol`,{className:`traceOutline`,children:[r.map(e=>(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`span`,{className:`traceOutlineTag`,children:me(e)}),j(e),(0,k.jsx)(`code`,{children:e})]},e)),e.sharedBlockIds.map(e=>(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`span`,{className:`traceOutlineTag`,children:`共同`}),j(e),(0,k.jsx)(`code`,{children:e})]},e)),e.selfCareModuleIds.map(e=>(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`span`,{className:`traceOutlineTag`,children:`自我照護`}),j(e),(0,k.jsx)(`code`,{children:e})]},`sc-${e}`))]}),e.urgentSigns.length?(0,k.jsxs)(`p`,{className:`traceNote`,children:[`另有 `,e.urgentSigns.length,` 則就醫警訊，集中放在報告開頭。`]}):null]}),(0,k.jsx)(N,{n:`→`,title:`接下來 LLM 會補的三件事`,note:`按下產出才會執行。任何一次失敗都只會少掉該段，不影響上面已經定案的內容。`,children:(0,k.jsxs)(`ul`,{className:`traceRows`,children:[(0,k.jsxs)(`li`,{className:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceLlmTag`,children:`①`}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsx)(`span`,{className:`traceValue`,children:`模組挑選：只回代碼與優先序，改不了上面第 1 段的判定`})]}),(0,k.jsxs)(`li`,{className:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceLlmTag`,children:`②`}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsxs)(`span`,{className:`traceValue`,children:[`檢驗判讀：讀原始紀錄找第 3 段沒涵蓋的異常，結果進醫師版`,t.labItems.length?`（原始紀錄 ${t.labItems.length} 筆）`:``]})]}),(0,k.jsxs)(`li`,{className:`traceRow`,children:[(0,k.jsx)(`span`,{className:`traceLlmTag`,children:`③`}),(0,k.jsx)(`span`,{className:`traceArrow`,children:`→`}),(0,k.jsx)(`span`,{className:`traceValue`,children:`檢驗敘述：寫成病人看的段落，數值會逐一比對來源後才採用`})]})]})})]})}var ge=196,_e=48,ve=[{id:`ingest`,x:262,y:16,title:`健保申報 JSON`,sub:`用藥 · 檢驗 · R/PR · DCSI`,tone:`flowNeutral`},{id:`decide`,x:262,y:112,title:`確定性事實與判定`,sub:`主題 · 目標 · 門檻（程式）`,tone:`flowNeutral`},{id:`selector`,x:16,y:208,title:`① 模組挑選`,sub:`只回代碼與優先序`,tone:`flowLlm`},{id:`labReview`,x:262,y:208,title:`② 檢驗判讀`,sub:`讀原始紀錄`,tone:`flowLlm`},{id:`narrative`,x:508,y:208,title:`③ 檢驗敘述`,sub:`寫成病人看的段落`,tone:`flowLlm`},{id:`assemble`,x:262,y:304,title:`驗證與組裝`,sub:`數值比對 · 禁止事項`,tone:`flowNeutral`},{id:`patientReport`,x:140,y:400,title:`病人版衛教報告`,sub:`正文來自固定模組`,tone:`flowOut`},{id:`clinicianReport`,x:384,y:400,title:`醫師版報告`,sub:`附指引章表與頁次`,tone:`flowOut`}],ye=[`M360 64 L360 112`,`M360 160 L360 184 L114 184 L114 208`,`M360 160 L360 208`,`M360 160 L360 184 L606 184 L606 208`,`M114 256 L114 280 L360 280 L360 304`,`M360 256 L360 304`,`M606 256 L606 280 L360 280 L360 304`,`M360 352 L360 376 L238 376 L238 400`,`M360 352 L360 376 L482 376 L482 400`],be={ingest:[`ingest`],decide:[`decide`],selector:[`selector`],labReview:[`labReview`],narrative:[`narrative`],assemble:[`assemble`,`patientReport`,`clinicianReport`]};function xe({highlight:e,compact:t=!1}){let n=e?.length?new Set(e):null,r=t?`flowArrowMini`:`flowArrow`;return(0,k.jsxs)(`svg`,{className:t?`flowDiagram flowMini`:`flowDiagram`,viewBox:`0 0 720 464`,role:`img`,"aria-label":n?`資料流位置：目前在「${ve.filter(e=>n.has(e.id)).map(e=>e.title).join(`、`)}」`:`資料流：程式判定為主，三次 LLM 呼叫只負責規則做不到的事`,children:[(0,k.jsx)(`defs`,{children:(0,k.jsx)(`marker`,{id:r,viewBox:`0 0 10 10`,refX:`8`,refY:`5`,markerWidth:`6`,markerHeight:`6`,orient:`auto-start-reverse`,children:(0,k.jsx)(`path`,{d:`M2 1L8 5L2 9`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})}),ve.map(e=>{let r=n?!n.has(e.id):!1;return(0,k.jsxs)(`g`,{className:`${e.tone}${r?` flowDim`:``}${n&&!r?` flowActive`:``}`,children:[(0,k.jsx)(`rect`,{x:e.x,y:e.y,width:ge,height:_e,rx:6}),(0,k.jsx)(`text`,{className:`flowTitle`,x:e.x+ge/2,y:t?e.y+30:e.y+21,textAnchor:`middle`,children:e.title}),t?null:(0,k.jsx)(`text`,{className:`flowSub`,x:e.x+ge/2,y:e.y+38,textAnchor:`middle`,children:e.sub})]},e.id)}),(0,k.jsx)(`g`,{className:n?`flowLine flowDim`:`flowLine`,markerEnd:`url(#${r})`,children:ye.map(e=>(0,k.jsx)(`path`,{d:e},e))})]})}var Se=1048576;function Ce(e){return e>=19968&&e<=40959||e>=13312&&e<=19903||e>=63744&&e<=64255||e>=12288&&e<=12351||e>=65280&&e<=65519}function we(e){let t=0,n=0,r=0,i=0,a=0;for(let o of e){a+=1;let e=o.codePointAt(0)??0;Ce(e)?t+=1:e<128?o===` `||o===`	`||o===`
`||o===`\r`||o===`\f`||o===`\v`?r+=1:n+=1:i+=1}return{total:a,cjk:t,asciiVisible:n,whitespace:r,other:i}}function P(e){if(!e)return 0;let{cjk:t,asciiVisible:n,whitespace:r,other:i}=we(e);return Math.round(t+n/4+r/5+i/2)}function Te(e){return[...e].length}function F(e){return e.toLocaleString(`zh-TW`)}var I={idle:`待命`,running:`執行中`,ok:`完成`,failed:`失敗`,skipped:`未執行`};function L({port:e}){let[t,n]=(0,r.useState)(!1),i=!e.text;return(0,k.jsxs)(`div`,{className:`pipePort`,children:[(0,k.jsxs)(`button`,{type:`button`,className:`pipePortHead`,onClick:()=>n(e=>!e),disabled:i,"aria-expanded":t,children:[(0,k.jsx)(`span`,{className:`pipePortArrow`,children:t?`▾`:`▸`}),(0,k.jsx)(`span`,{className:`pipePortLabel`,children:e.label}),(0,k.jsx)(`span`,{className:`pipePortSize`,children:i?`—`:`${F(Te(e.text))} 字`})]}),t&&!i?(0,k.jsx)(`pre`,{className:e.code?`pipePortBody pipePortCode`:`pipePortBody`,children:e.text}):null]})}function R({label:e,hint:t,ports:n}){return n.length?(0,k.jsxs)(`div`,{className:`pipeGroup`,children:[(0,k.jsxs)(`p`,{className:`pipeGroupLabel`,children:[e,t?(0,k.jsx)(`span`,{children:t}):null]}),n.map(e=>(0,k.jsx)(L,{port:e},e.label))]}):null}function z({station:e,index:t}){return(0,k.jsxs)(`li`,{className:`pipeStation pipeStation-${e.kind} pipeState-${e.state}`,children:[(0,k.jsxs)(`div`,{className:`pipeStationHead`,children:[(0,k.jsx)(`span`,{className:`pipeIndex`,children:t}),(0,k.jsx)(`h4`,{children:e.title}),(0,k.jsx)(`span`,{className:`pipeKind`,children:e.kind===`llm`?`LLM`:`程式`}),(0,k.jsx)(`span`,{className:`pipeState pipeState-${e.state}`,children:I[e.state]})]}),(0,k.jsx)(`p`,{className:`pipeRole`,children:e.role}),be[e.id]?(0,k.jsx)(`div`,{className:`pipeMap`,children:(0,k.jsx)(xe,{highlight:be[e.id],compact:!0})}):null,(0,k.jsx)(R,{label:`材料`,ports:e.inputs}),(0,k.jsx)(R,{label:`食譜`,hint:e.kind===`llm`?`system prompt 與實際執行的程式碼`:`實際執行的程式碼`,ports:e.recipe}),e.steps?.length?(0,k.jsxs)(`div`,{className:`pipeGroup`,children:[(0,k.jsxs)(`p`,{className:`pipeGroupLabel`,children:[`做了什麼`,(0,k.jsx)(`span`,{children:`依序`})]}),(0,k.jsx)(`ol`,{className:`pipeSteps`,children:e.steps.map((e,t)=>(0,k.jsx)(`li`,{children:e},t))})]}):null,(0,k.jsx)(R,{label:`成品`,ports:e.outputs}),e.problems?.length?(0,k.jsx)(`ul`,{className:`pipeProblems`,children:e.problems.map((e,t)=>(0,k.jsx)(`li`,{children:e},t))}):null]})}function Ee({stations:e}){return(0,k.jsx)(`ol`,{className:`pipeBoard`,children:e.map((e,t)=>(0,k.jsx)(z,{station:e,index:t+1},e.id))})}var B=`/**
 * 病人資料 → LLM 好讀文字。
 *
 * 由 app/page.tsx 原樣搬出，輸出格式逐字不變（tests/lib.test.mjs 有快照斷言）。
 * 搬出的唯一目的是讓它可以被單元測試。
 */

export type JsonRecord = Record<string, unknown>;

export const USER_INPUT_ORDER = [
  "REPORT_DATE",
  "BIRTHDAY",
  "INDX_DATE",
  "SEX",
  "P4P",
  "HT",
  "HL",
  "CKD",
  "T",
  "DCSI",
  "AGEGP",
  "GRADE",
];

export const USER_INPUT_LABELS: Record<string, string> = {
  REPORT_DATE: "報告日期",
  BIRTHDAY: "出生日期",
  INDX_DATE: "糖尿病指標日期",
  SEX: "性別代碼",
  P4P: "是否參加糖尿病P4P",
  HT: "高血壓",
  HL: "高血脂",
  CKD: "慢性腎臟病",
  T: "糖尿病病程年數",
  DCSI: "DCSI總分",
  AGEGP: "年齡分組",
  GRADE: "整體分級",
};

export const SOURCE_LABELS: Record<string, string> = {
  medication: "用藥紀錄",
  labData: "檢驗資料",
  chinesemed: "中藥用藥",
  imaging: "影像資料",
  allergy: "過敏資料",
  surgery: "手術資料",
  discharge: "出院資料",
  medDays: "用藥天數資料",
  patientSummary: "病人摘要",
  cancerScreening: "癌症篩檢",
  adultHealthCheck: "成人健檢",
};

/**
 * 純計費與系統欄位，臨床判讀完全用不到，但佔掉大量 token。
 *
 * 實測五位病人：拿掉這些欄位與和成分名重複的商品名，輸入從 234,688 降到
 * 153,295 tokens（省 35%）；用藥最多的那位從 119,637 降到 61,794（省 48%）。
 *
 * order_code 刻意保留——那是尿液（06012C／06013C）與血液唯一可靠的判別依據，
 * 砍掉會讓尿糖混進血糖，那個 bug 已經出現過一次。
 */
const BILLING_ONLY_FIELDS = new Set([
  "drug_code",
  "drug_ing_code",
  "func_seq_no",
  "fee_ym",
  "drug_multi_mark",
  "drug_std_qty",
  "assay_method",
]);

export function isRecord(value: unknown): value is JsonRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function clean(value: unknown): string {
  if (value === null || value === undefined || value === "" || value === "null") {
    return "未提供";
  }
  if (typeof value === "object") return JSON.stringify(value);
  return String(value).replaceAll("\\r", " ").replaceAll("\\n", " ").trim() || "未提供";
}

function stableValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stableValue);
  if (isRecord(value)) {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stableValue(value[key])]),
    );
  }
  return value;
}

export function countExact(records: unknown[]): Array<{ record: unknown; count: number }> {
  const counted = new Map<string, { record: unknown; count: number }>();
  for (const record of records) {
    const key = JSON.stringify(stableValue(record));
    const existing = counted.get(key);
    if (existing) existing.count += 1;
    else counted.set(key, { record, count: 1 });
  }
  return [...counted.values()];
}

export function compareUserInputKeys(a: string, b: string): number {
  const aIndex = USER_INPUT_ORDER.indexOf(a);
  const bIndex = USER_INPUT_ORDER.indexOf(b);
  if (aIndex !== -1 || bIndex !== -1) {
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  }
  const aRisk = a.match(/^(R|PR)(\\d+)$/);
  const bRisk = b.match(/^(R|PR)(\\d+)$/);
  if (aRisk && bRisk) {
    if (aRisk[1] !== bRisk[1]) return aRisk[1] === "R" ? -1 : 1;
    return Number(aRisk[2]) - Number(bRisk[2]);
  }
  if (aRisk) return -1;
  if (bRisk) return 1;
  return a.localeCompare(b);
}

function genericLines(value: unknown, depth = 0): string[] {
  const indent = "  ".repeat(depth);
  if (Array.isArray(value)) {
    if (!value.length) return [\`\${indent}（空陣列）\`];
    return value.flatMap((item, index) => {
      if (isRecord(item) || Array.isArray(item)) {
        return [\`\${indent}- 第 \${index + 1} 筆\`, ...genericLines(item, depth + 1)];
      }
      return [\`\${indent}- \${clean(item)}\`];
    });
  }
  if (isRecord(value)) {
    const entries = Object.entries(value);
    if (!entries.length) return [\`\${indent}（空物件）\`];
    return entries.flatMap(([key, item]) => {
      if (isRecord(item) || Array.isArray(item)) {
        return [\`\${indent}\${key}：\`, ...genericLines(item, depth + 1)];
      }
      return [\`\${indent}\${key}：\${clean(item)}\`];
    });
  }
  return [\`\${indent}\${clean(value)}\`];
}

export function sourceRecords(rawSources: JsonRecord, key: string): unknown[] {
  const source = rawSources[key];
  if (!isRecord(source)) return [];
  return Array.isArray(source.rObject) ? source.rObject : [];
}

function compactRecord(record: unknown): string {
  if (!isRecord(record)) return clean(record);
  return Object.entries(record)
    .filter(([, value]) => value !== null && value !== undefined && value !== "" && value !== "null")
    .map(([key, value]) => \`\${key}:\${clean(value)}\`)
    .join("｜");
}

export function formatPatientJson(value: unknown): string {
  if (!isRecord(value)) {
    return [
      "【輸入資料】",
      ...genericLines(value),
      "",
      "【資料使用限制】",
      "以上僅重新排版，沒有推定缺少的診斷、日期、用藥狀態或治療資訊。",
    ].join("\\n");
  }

  const hasKnownStructure = ["downloadType", "userInfo", "userInput", "rawSources"].some((key) => key in value);
  if (!hasKnownStructure) {
    return [
      "【來源JSON欄位】",
      ...genericLines(value),
      "",
      "【資料使用限制】",
      "以上保留來源欄位並重新排版；空值或未出現欄位不得自行解讀為0或正常。",
    ].join("\\n");
  }

  const lines: string[] = ["【檔案與基本資料】", \`資料匯出類型：\${clean(value.downloadType)}\`];
  const userInfo = isRecord(value.userInfo) ? value.userInfo : {};
  const userInput = isRecord(value.userInput) ? value.userInput : {};
  const rawSources = isRecord(value.rawSources) ? value.rawSources : {};

  for (const [key, item] of Object.entries(userInfo)) lines.push(\`\${key}：\${clean(item)}\`);

  lines.push("", "【來源模型欄位】", "以下保留來源原值；未提供不等同於0。");
  const userInputKeys = Object.keys(userInput).sort(compareUserInputKeys);
  if (!userInputKeys.length) lines.push("未提供來源模型欄位。");
  for (const key of userInputKeys) {
    const label = USER_INPUT_LABELS[key] ? \`（\${USER_INPUT_LABELS[key]}）\` : "";
    lines.push(\`\${key}\${label}：\${clean(userInput[key])}\`);
  }

  lines.push("", "【DCSI與風險欄位說明】");
  lines.push("僅保留來源DCSI、R與PR原始欄位；整理階段不重新解釋分數。來源未出現的欄位不得自行補值，也不得直接視為0。");

  lines.push("", "【資料來源概況】");
  const sourceEntries = Object.entries(rawSources);
  if (!sourceEntries.length) lines.push("未提供rawSources資料來源。");
  for (const [key, source] of sourceEntries) {
    const records = isRecord(source) && Array.isArray(source.rObject) ? source.rObject : [];
    lines.push(\`\${SOURCE_LABELS[key] ?? key}（\${key}）：\${records.length}筆\${records.length ? "" : "，來源為空陣列"}\`);
  }

  const medications = sourceRecords(rawSources, "medication");
  const medicationUnique = countExact(medications);
  const medicationGroups = new Map<string, Array<{ text: string; count: number }>>();
  for (const item of medicationUnique) {
    const record = isRecord(item.record) ? item.record : {};
    const date = clean(record.drug_date).replaceAll("/", "-");
    const diagnosis = \`ICD \${clean(record.icd_code)}｜\${clean(record.icd_cname)}\`;
    const key = \`\${date}｜\${diagnosis}\`;
    // drug_ename 是商品名，和 drug_ing_name 的成分名語意重複，只留成分名。
    const detail = compactRecord(
      Object.fromEntries(
        Object.entries(record).filter(
          ([field]) =>
            !["drug_date", "icd_code", "icd_cname", "drug_ename"].includes(field) &&
            !BILLING_ONLY_FIELDS.has(field),
        ),
      ),
    );
    const group = medicationGroups.get(key) ?? [];
    group.push({ text: detail || "原紀錄沒有其他欄位", count: item.count });
    medicationGroups.set(key, group);
  }

  lines.push("", "【用藥紀錄】");
  lines.push(\`來源共\${medications.length}筆；完全相同紀錄合併後\${medicationUnique.length}筆。重複次數以×N保留；不同欄位不合併。\`);
  if (!medications.length) lines.push("未提供用藥紀錄。");
  for (const key of [...medicationGroups.keys()].sort().reverse()) {
    lines.push(key);
    for (const item of medicationGroups.get(key) ?? []) {
      lines.push(\`- \${item.text}\${item.count > 1 ? \`｜×\${item.count}\` : ""}\`);
    }
  }

  const labs = sourceRecords(rawSources, "labData");
  const labUnique = countExact(labs);
  const labGroups = new Map<string, Array<{ text: string; count: number }>>();
  for (const item of labUnique) {
    const record = isRecord(item.record) ? item.record : {};
    const key = [
      clean(record.fee_ym),
      clean(record.order_code),
      clean(record.order_name),
      \`檢體或模式:\${clean(record.inspect_mode)}\`,
    ].join("｜");
    let detail = \`\${clean(record.assay_item_name)}=\${clean(record.assay_value)}\`;
    if (clean(record.unit_data) !== "未提供") detail += \` \${clean(record.unit_data)}\`;
    detail += \`｜參考:\${clean(record.consult_value)}\`;
    const extras = Object.entries(record)
      .filter(([field, itemValue]) =>
        ![
          "fee_ym",
          "order_code",
          "order_name",
          "assay_method",
          "inspect_mode",
          "assay_item_name",
          "assay_value",
          "unit_data",
          "consult_value",
        ].includes(field) && !BILLING_ONLY_FIELDS.has(field) && itemValue !== null && itemValue !== undefined && itemValue !== "",
      )
      .map(([field, itemValue]) => \`\${field}:\${clean(itemValue)}\`);
    if (extras.length) detail += \`｜其他欄位:\${extras.join("、")}\`;
    const group = labGroups.get(key) ?? [];
    group.push({ text: detail, count: item.count });
    labGroups.set(key, group);
  }

  lines.push("", "【檢驗與檢查紀錄】");
  lines.push(\`來源共\${labs.length}筆；完全相同紀錄合併後\${labUnique.length}筆。若來源只有費用年月而沒有採檢日時，不得推定同月份內的先後順序。\`);
  if (!labs.length) lines.push("未提供檢驗與檢查紀錄。");
  for (const key of [...labGroups.keys()].sort().reverse()) {
    lines.push(key);
    for (const item of labGroups.get(key) ?? []) {
      lines.push(\`- \${item.text}\${item.count > 1 ? \`｜×\${item.count}\` : ""}\`);
    }
  }

  lines.push("", "【其他來源的非空紀錄】");
  let otherCount = 0;
  for (const [key] of sourceEntries.filter(([sourceKey]) => !["medication", "labData"].includes(sourceKey))) {
    const records = sourceRecords(rawSources, key);
    if (!records.length) continue;
    otherCount += records.length;
    const unique = countExact(records);
    lines.push(\`\${SOURCE_LABELS[key] ?? key}（\${key}）：來源\${records.length}筆，完全相同紀錄合併後\${unique.length}筆。\`);
    unique.forEach((item, index) => {
      lines.push(\`- \${index + 1}. \${compactRecord(item.record)}\${item.count > 1 ? \`｜×\${item.count}\` : ""}\`);
    });
  }
  if (!otherCount) lines.push("其餘來源目前沒有可列出的紀錄。");

  const otherRootKeys = Object.keys(value).filter(
    (key) => !["downloadType", "userInfo", "userInput", "rawSources"].includes(key),
  );
  if (otherRootKeys.length) {
    lines.push("", "【其他根層欄位】");
    for (const key of otherRootKeys) lines.push(\`\${key}：\${clean(value[key])}\`);
  }

  lines.push("", "【資料使用限制】");
  lines.push("以上為來源JSON重新排版；除合併完全相同紀錄外，未刪除不同結果，也未判定哪一筆較可信。重複筆數均以×N保留。");
  lines.push("不同檢驗數值可能代表真實病程變化，也可能涉及資料品質；若有疑義，應由醫療人員結合實際採檢時間與臨床狀況確認。");
  lines.push("來源未提供的日期、糖尿病類型、診斷、檢驗、用藥狀態或治療資訊不得自行補寫；歷史申報用藥不得直接描述為目前仍在使用。");
  return lines.join("\\n");
}
`,V=`/**
 * 第一層：確定性事實抽取（arm C）。
 *
 * 目的是把「申報資料可以支持的結論」和「申報資料無法支持的推論」在程式層就分開，
 * 而不是寫成 prompt 規則交給模型記住。
 *
 * 三條硬規則：
 *   1. 來源沒有的欄位一律是 unknown，不補值、不視為 0、不視為正常。
 *   2. 用藥一律標記為「曾有申報紀錄」＋最後申報日，永遠不產生「目前用藥」欄位。
 *   3. 檢驗只有費用年月時，不產生任何順序或趨勢欄位。
 */

import { isRecord, sourceRecords, type JsonRecord } from "./format-patient.ts";

export type Unknown = { known: false; reason: string };
export type Known<T> = { known: true; value: T };
export type Maybe<T> = Known<T> | Unknown;

function known<T>(value: T): Known<T> {
  return { known: true, value };
}

function unknown(reason: string): Unknown {
  return { known: false, reason };
}

export type DiabetesTypeEvidence = {
  /** 判定結果。conflicting 與 absent 都不得用來啟用 T1／T2 補充模組。 */
  verdict: "type1-confirmed" | "type2-confirmed" | "conflicting" | "absent";
  type1IcdCodes: string[];
  type2IcdCodes: string[];
  otherDiabetesIcdCodes: string[];
  note: string;
};

export type MedicationClassFact = {
  atcClass: string;
  /** 這個分類出現過的藥品名稱（去重，最多列 8 個） */
  drugNames: string[];
  recordCount: number;
  /** 最後一次申報日期；來源沒有日期時為 null */
  lastClaimDate: string | null;
  /** 距報告日的天數；無法計算時為 null */
  daysSinceLastClaim: number | null;
};

export type LabItemFact = {
  itemName: string;
  /** 健保醫令代碼。判定檢體與項目時比名稱可靠得多。 */
  orderCodes: string[];
  /** 來源出現過的所有原始值，逐字保留、不排序成趨勢 */
  rawValues: string[];
  unit: string | null;
  referenceRange: string | null;
  /** 來源提供的費用年月集合 */
  feeMonths: string[];
  /** 來源是否提供實際採檢日 */
  hasDrawDates: boolean;
};

export type RiskField = {
  code: string;
  present: boolean;
  value: number | null;
  rawValue: string | null;
};

export type PatientFacts = {
  reportDate: Maybe<string>;
  dataCutoff: Maybe<string>;
  birthday: Maybe<string>;
  ageYears: Maybe<number>;
  sexCode: Maybe<string>;
  /**
   * 已解讀的性別，來源是 userInfo.gender（直接就是 M／F）。
   *
   * 刻意不從 userInput.SEX 推。五位病人剛好 SEX=0→M、SEX=1→F，但那是從
   * 五筆歸納出來的，不是規格。血球參考值是性別分層的（M 13.1-17.2／F 11.0-15.2），
   * 猜錯會讓 Hb 12.5 的男性被判為正常——寧可未知，也不要錯。
   */
  sex: Maybe<"男性" | "女性">;
  diabetesOnsetDate: Maybe<string>;
  diabetesDurationYears: Maybe<number>;
  comorbidityFlags: {
    hypertension: Maybe<boolean>;
    hyperlipidemia: Maybe<boolean>;
    ckd: Maybe<boolean>;
    p4p: Maybe<boolean>;
  };
  /**
   * 申報診斷碼裡直接指向慢性腎臟病的碼。
   *
   * CKD 欄位為 0、R3 也沒有值的病人仍可能有這些碼——DCSI 只認診斷碼，
   * 而診斷碼只出現在有開藥的就診，漏掉的機會不小。
   */
  ckdIcdCodes: string[];
  dcsiTotal: Maybe<number>;
  grade: Maybe<string>;
  ageGroup: Maybe<string>;
  /** 已發生併發症現況 R1–R7 */
  existingComplications: RiskField[];
  /** 未來風險預測 PR1–PR7 */
  riskPredictions: RiskField[];
  diabetesType: DiabetesTypeEvidence;
  /** 申報用藥的成分名（去重）。ATC5 分類太粗，SGLT2i 只會顯示「抗糖尿病藥物」。 */
  medicationIngredients: string[];
  medicationClasses: MedicationClassFact[];
  medicationRecordCount: number;
  medicationDateRange: Maybe<{ earliest: string; latest: string }>;
  labItems: LabItemFact[];
  labRecordCount: number;
  labHasDrawDates: boolean;
  /** 抽取過程中偵測到、需要人工注意的資料品質問題 */
  dataQualityFlags: string[];
};

/**
 * 慢性腎臟病／糖尿病腎病變的申報診斷碼。
 *
 * 用 DCSI 腎病變本來就採用的碼集（ICD-9 250.4x、580–588、593.9、V42.0、V45.1、V56.x
 * 對應到 ICD-10），因為要補的正是 R3 應該抓到卻沒抓到的那一塊。
 * 刻意不含 N17（急性腎損傷）——那是急性事件，不是慢性腎臟病。
 */
const CKD_ICD = /^(E1[0-4]2|N0[0-8]|N1[89]|N2[5-8]|Z940|Z992|Z49)/i;

const T1_ICD = /^E10/i;
const T2_ICD = /^E11/i;
const OTHER_DM_ICD = /^E1[234]/i;

function toNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(String(value).trim());
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeDate(value: unknown): string | null {
  if (value === null || value === undefined) return null;
  const text = String(value).trim().replaceAll("/", "-");
  return /^\\d{4}-\\d{2}-\\d{2}$/.test(text) ? text : null;
}

function daysBetween(from: string, to: string): number | null {
  const a = Date.parse(\`\${from}T00:00:00Z\`);
  const b = Date.parse(\`\${to}T00:00:00Z\`);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  return Math.round((b - a) / 86_400_000);
}

function flagFromCode(value: unknown, label: string): Maybe<boolean> {
  const numeric = toNumber(value);
  if (numeric === null) return unknown(\`來源未提供 \${label} 欄位\`);
  return known(numeric === 1);
}

function riskFields(userInput: JsonRecord, prefix: "R" | "PR"): RiskField[] {
  const fields: RiskField[] = [];
  for (let index = 1; index <= 7; index += 1) {
    const code = \`\${prefix}\${index}\`;
    const present = Object.hasOwn(userInput, code);
    const raw = present ? userInput[code] : null;
    fields.push({
      code,
      present,
      value: present ? toNumber(raw) : null,
      rawValue: present && raw !== null && raw !== undefined ? String(raw) : null,
    });
  }
  return fields;
}

function detectDiabetesType(medications: unknown[]): DiabetesTypeEvidence {
  const type1 = new Set<string>();
  const type2 = new Set<string>();
  const other = new Set<string>();

  for (const record of medications) {
    if (!isRecord(record)) continue;
    const code = String(record.icd_code ?? "").trim();
    if (!code) continue;
    if (T1_ICD.test(code)) type1.add(code);
    else if (T2_ICD.test(code)) type2.add(code);
    else if (OTHER_DM_ICD.test(code)) other.add(code);
  }

  const type1Codes = [...type1].sort();
  const type2Codes = [...type2].sort();
  const otherCodes = [...other].sort();

  if (type1Codes.length && type2Codes.length) {
    return {
      verdict: "conflicting",
      type1IcdCodes: type1Codes,
      type2IcdCodes: type2Codes,
      otherDiabetesIcdCodes: otherCodes,
      note: "申報資料同時出現第一型與第二型糖尿病診斷碼，無法據此判定類型；不得啟用任何 T1／T2 補充模組。",
    };
  }
  if (type1Codes.length) {
    return {
      verdict: "type1-confirmed",
      type1IcdCodes: type1Codes,
      type2IcdCodes: [],
      otherDiabetesIcdCodes: otherCodes,
      note: "申報資料只出現第一型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。",
    };
  }
  if (type2Codes.length) {
    return {
      verdict: "type2-confirmed",
      type1IcdCodes: [],
      type2IcdCodes: type2Codes,
      otherDiabetesIcdCodes: otherCodes,
      note: "申報資料只出現第二型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。",
    };
  }
  return {
    verdict: "absent",
    type1IcdCodes: [],
    type2IcdCodes: [],
    otherDiabetesIcdCodes: otherCodes,
    note: "申報用藥紀錄中沒有 E10／E11 糖尿病診斷碼，無法判定類型。",
  };
}

function extractMedications(medications: unknown[], reportDate: string | null) {
  const byClass = new Map<string, { names: Set<string>; count: number; dates: string[] }>();
  const allDates: string[] = [];

  for (const record of medications) {
    if (!isRecord(record)) continue;
    const atcClass = String(record.drug_atc5_name ?? "").trim() || "未分類或來源未提供分類";
    const name = String(record.drug_ename ?? "").trim();
    const date = normalizeDate(record.drug_date);
    if (date) allDates.push(date);

    const entry = byClass.get(atcClass) ?? { names: new Set<string>(), count: 0, dates: [] };
    if (name) entry.names.add(name);
    entry.count += 1;
    if (date) entry.dates.push(date);
    byClass.set(atcClass, entry);
  }

  const classes: MedicationClassFact[] = [...byClass.entries()]
    .map(([atcClass, entry]) => {
      const sorted = [...entry.dates].sort();
      const lastClaimDate = sorted.length ? sorted[sorted.length - 1] : null;
      return {
        atcClass,
        drugNames: [...entry.names].sort().slice(0, 8),
        recordCount: entry.count,
        lastClaimDate,
        daysSinceLastClaim: lastClaimDate && reportDate ? daysBetween(lastClaimDate, reportDate) : null,
      };
    })
    .sort((a, b) => {
      if (a.lastClaimDate && b.lastClaimDate && a.lastClaimDate !== b.lastClaimDate) {
        return b.lastClaimDate.localeCompare(a.lastClaimDate);
      }
      return b.recordCount - a.recordCount;
    });

  const sortedDates = allDates.sort();
  const dateRange: Maybe<{ earliest: string; latest: string }> = sortedDates.length
    ? known({ earliest: sortedDates[0], latest: sortedDates[sortedDates.length - 1] })
    : unknown("用藥紀錄沒有可解析的日期");

  return { classes, dateRange };
}

function extractLabs(labs: unknown[]) {
  const byItem = new Map<
    string,
    { values: string[]; units: Set<string>; refs: Set<string>; months: Set<string>; codes: Set<string> }
  >();
  let hasDrawDates = false;

  for (const record of labs) {
    if (!isRecord(record)) continue;
    if (normalizeDate(record.assay_date) || normalizeDate(record.inspect_date)) hasDrawDates = true;

    const itemName = String(record.assay_item_name ?? "").trim() || String(record.order_name ?? "").trim() || "未提供項目名稱";
    const value = String(record.assay_value ?? "").trim();
    if (!value) continue;

    // 分組鍵必須含單位與醫令代碼。只用名稱的話，尿液鏡檢的 WBC（/HPF，參考 0–3）
    // 會和血液的 WBC（10^3/μL，參考 4–10）併成同一項，單位與參考範圍全混在一起，
    // 判定「超出範圍」時會產生大量假警報。
    const unitKey = String(record.unit_data ?? "").trim();
    const codeKey = String(record.order_code ?? "").trim();
    const groupKey = \`\${itemName}｜\${unitKey}｜\${codeKey}\`;

    const entry = byItem.get(groupKey) ?? {
      values: [],
      units: new Set<string>(),
      refs: new Set<string>(),
      months: new Set<string>(),
      codes: new Set<string>(),
    };
    const orderCode = String(record.order_code ?? "").trim();
    if (orderCode) entry.codes.add(orderCode);
    entry.values.push(value);
    const unit = String(record.unit_data ?? "").trim();
    if (unit && unit !== "null") entry.units.add(unit);
    const ref = String(record.consult_value ?? "").trim();
    if (ref && ref !== "null") entry.refs.add(ref);
    const month = String(record.fee_ym ?? "").trim();
    if (month) entry.months.add(month);
    byItem.set(groupKey, entry);
  }

  const items: LabItemFact[] = [...byItem.entries()]
    .map(([groupKey, entry]) => ({
      itemName: groupKey.split("｜")[0],
      orderCodes: [...entry.codes].sort(),
      rawValues: entry.values,
      unit: entry.units.size === 1 ? [...entry.units][0] : entry.units.size > 1 ? [...entry.units].join(" / ") : null,
      referenceRange: entry.refs.size ? [...entry.refs][0] : null,
      feeMonths: [...entry.months].sort(),
      hasDrawDates,
    }))
    .sort((a, b) => b.rawValues.length - a.rawValues.length);

  return { items, hasDrawDates };
}

export function extractPatientFacts(input: unknown): PatientFacts {
  const root = isRecord(input) ? input : {};
  const userInput = isRecord(root.userInput) ? root.userInput : {};
  const rawSources = isRecord(root.rawSources) ? root.rawSources : {};

  const reportDate = normalizeDate(userInput.REPORT_DATE);
  const birthday = normalizeDate(userInput.BIRTHDAY);
  const onset = normalizeDate(userInput.INDX_DATE);

  const ageDays = birthday && reportDate ? daysBetween(birthday, reportDate) : null;
  const durationRaw = toNumber(userInput.T);

  const medications = sourceRecords(rawSources, "medication");
  const labs = sourceRecords(rawSources, "labData");
  const { classes, dateRange } = extractMedications(medications, reportDate);
  const { items, hasDrawDates } = extractLabs(labs);

  const dataQualityFlags: string[] = [];
  if (!hasDrawDates && labs.length) {
    dataQualityFlags.push(
      "檢驗紀錄只有費用年月、沒有採檢日期，因此無法建立時間順序或趨勢。任何「趨勢」「最近一次」的敘述都沒有資料支持。",
    );
  }
  if (!reportDate) dataQualityFlags.push("來源未提供 REPORT_DATE，無法標示資料截止日。");
  const existingComplications = riskFields(userInput, "R");
  const riskPredictions = riskFields(userInput, "PR");
  const missingRisk = [...existingComplications, ...riskPredictions].filter((item) => !item.present).map((item) => item.code);
  if (missingRisk.length) {
    dataQualityFlags.push(\`來源未出現下列欄位，不得補值也不得視為 0：\${missingRisk.join("、")}。\`);
  }

  const diabetesType = detectDiabetesType(medications);
  if (diabetesType.verdict === "conflicting") {
    dataQualityFlags.push(diabetesType.note);
  }

  const genderRaw = String((isRecord(root.userInfo) ? root.userInfo.gender : "") ?? "").trim().toUpperCase();
  const resolvedSex: "男性" | "女性" | null =
    genderRaw === "M" || genderRaw === "男" ? "男性" : genderRaw === "F" || genderRaw === "女" ? "女性" : null;

  return {
    reportDate: reportDate ? known(reportDate) : unknown("來源未提供 REPORT_DATE"),
    dataCutoff: reportDate ? known(reportDate) : unknown("來源未提供資料截止日"),
    birthday: birthday ? known(birthday) : unknown("來源未提供 BIRTHDAY"),
    ageYears: ageDays !== null ? known(Math.floor(ageDays / 365.25)) : unknown("缺少出生日期或報告日期，無法計算年齡"),
    sexCode: userInput.SEX !== undefined && userInput.SEX !== null && userInput.SEX !== ""
      ? known(String(userInput.SEX))
      : unknown("來源未提供 SEX"),
    sex: resolvedSex ? known(resolvedSex) : unknown("userInfo.gender 未提供或無法解讀"),
    diabetesOnsetDate: onset ? known(onset) : unknown("來源未提供 INDX_DATE"),
    diabetesDurationYears: durationRaw !== null ? known(Number(durationRaw.toFixed(1))) : unknown("來源未提供 T"),
    ckdIcdCodes: [
      ...new Set(
        medications
          .map((record) => (isRecord(record) ? String(record.icd_code ?? "").trim() : ""))
          .filter((code) => code && CKD_ICD.test(code.replace(/\\./g, ""))),
      ),
    ].sort(),
    comorbidityFlags: {
      hypertension: flagFromCode(userInput.HT, "HT"),
      hyperlipidemia: flagFromCode(userInput.HL, "HL"),
      ckd: flagFromCode(userInput.CKD, "CKD"),
      p4p: flagFromCode(userInput.P4P, "P4P"),
    },
    dcsiTotal: toNumber(userInput.DCSI) !== null ? known(toNumber(userInput.DCSI) as number) : unknown("來源未提供 DCSI"),
    grade: userInput.GRADE !== undefined ? known(String(userInput.GRADE)) : unknown("來源未提供 GRADE"),
    ageGroup: userInput.AGEGP !== undefined ? known(String(userInput.AGEGP)) : unknown("來源未提供 AGEGP"),
    existingComplications,
    riskPredictions,
    diabetesType,
    medicationIngredients: [
      ...new Set(
        medications
          .map((record) => (isRecord(record) ? String(record.drug_ing_name ?? "").trim() : ""))
          .filter(Boolean),
      ),
    ].sort(),
    medicationClasses: classes,
    medicationRecordCount: medications.length,
    medicationDateRange: dateRange,
    labItems: items,
    labRecordCount: labs.length,
    labHasDrawDates: hasDrawDates,
    dataQualityFlags,
  };
}

function maybeText<T>(value: Maybe<T>, format?: (item: T) => string): string {
  if (!value.known) return \`未知（\${value.reason}）\`;
  return format ? format(value.value) : String(value.value);
}

/**
 * 給 arm C 的 LLM 看的精簡事實摘要。
 * 刻意不含病人正文、不含指引內容，只有選模組需要的判斷依據。
 */
export function factsForSelectorPrompt(facts: PatientFacts, options: { maxMedicationClasses?: number } = {}): string {
  const maxClasses = options.maxMedicationClasses ?? 25;
  const lines: string[] = [];

  lines.push("【基本判斷依據】");
  lines.push(\`報告日期：\${maybeText(facts.reportDate)}\`);
  lines.push(\`年齡：\${maybeText(facts.ageYears, (v) => \`\${v} 歲\`)}\`);
  lines.push(\`性別：\${facts.sex.known ? facts.sex.value : maybeText(facts.sex)}\`);
  lines.push(\`糖尿病病程年數：\${maybeText(facts.diabetesDurationYears, (v) => \`\${v} 年\`)}\`);
  lines.push(\`DCSI 總分：\${maybeText(facts.dcsiTotal)}\`);
  lines.push(\`高血壓：\${maybeText(facts.comorbidityFlags.hypertension, (v) => (v ? "是" : "否"))}\`);
  lines.push(\`高血脂：\${maybeText(facts.comorbidityFlags.hyperlipidemia, (v) => (v ? "是" : "否"))}\`);
  lines.push(\`慢性腎臟病：\${maybeText(facts.comorbidityFlags.ckd, (v) => (v ? "是" : "否"))}\`);

  lines.push("", "【已發生併發症現況（R）】");
  for (const item of facts.existingComplications) {
    lines.push(\`\${item.code}：\${item.present ? \`\${item.rawValue}\` : "來源未出現此欄位（不得視為 0）"}\`);
  }

  lines.push("", "【未來風險預測（PR）】");
  for (const item of facts.riskPredictions) {
    lines.push(\`\${item.code}：\${item.present ? \`\${item.rawValue}\` : "來源未出現此欄位（不得視為 0）"}\`);
  }

  lines.push("", "【糖尿病類型證據】");
  lines.push(\`判定：\${facts.diabetesType.verdict}\`);
  lines.push(\`第一型診斷碼：\${facts.diabetesType.type1IcdCodes.join("、") || "無"}\`);
  lines.push(\`第二型診斷碼：\${facts.diabetesType.type2IcdCodes.join("、") || "無"}\`);
  lines.push(\`說明：\${facts.diabetesType.note}\`);

  lines.push("", "【用藥申報分類（非目前用藥）】");
  lines.push(
    \`共 \${facts.medicationRecordCount} 筆申報紀錄，涵蓋 \${facts.medicationClasses.length} 個 ATC 分類。以下為最近申報的前 \${Math.min(maxClasses, facts.medicationClasses.length)} 類。\`,
  );
  for (const item of facts.medicationClasses.slice(0, maxClasses)) {
    const last = item.lastClaimDate
      ? \`最後申報 \${item.lastClaimDate}\${item.daysSinceLastClaim !== null ? \`（距報告日 \${item.daysSinceLastClaim} 天）\` : ""}\`
      : "來源無日期";
    lines.push(\`- \${item.atcClass}｜\${item.recordCount} 筆｜\${last}\`);
  }

  lines.push("", "【檢驗資料可用性】");
  lines.push(\`共 \${facts.labRecordCount} 筆；是否有採檢日：\${facts.labHasDrawDates ? "有" : "沒有，只有費用年月"}\`);

  if (facts.dataQualityFlags.length) {
    lines.push("", "【資料限制】");
    for (const flag of facts.dataQualityFlags) lines.push(\`- \${flag}\`);
  }

  return lines.join("\\n");
}
`,H=`/**
 * arm C 的組裝層。
 *
 * 責任分配（這一版和上一版最大的差別）：
 *
 *   併發症主題要不要納入 → **程式**依 R／PR 判定，不由 LLM 決定。
 *     上一版讓 LLM 依「R>0 或 PR 存在」選模組，結果五位病人幾乎都選滿六個主題，
 *     個人化整個塌掉。原因不是模型選錯，是規則太寬。
 *
 *   LLM 只負責規則做不到的事：排出前三優先、指出資料中需要醫療團隊注意的地方，
 *   以及對程式的判定提出不同意見（不同意見會被記錄，但不會覆寫程式判定）。
 *
 *   病人可見正文一律由程式以固定文字組合，LLM 不改寫、不補數值。
 */

import {
  EDUCATION_MODULES,
  MODULE_BY_ID,
  MODULE_CATALOG_APPROVED,
  MODULE_CATALOG_VERSION,
} from "./education-modules.ts";
import { SELF_CARE_BY_ID, SELF_CARE_VERSION, selectSelfCareModules } from "./self-care-modules.ts";
import { RULES_VERSION, RULES_SOURCE, RULES_BY_ID, citationShort } from "./guideline-rules.ts";
import { resolveTargets, type ResolvedPlanTargets } from "./resolve-targets.ts";
import type { PatientFacts } from "./patient-facts.ts";
import { SHARED_CARE_BLOCKS, followUpForClinician, followUpSchedule } from "./shared-care.ts";
import {
  describeRange,
  describeRangeForClinician,
  evaluateThresholds,
  extractLabFindings,
  lowestMeasuredGlucose,
  type Analyte,
} from "./lab-findings.ts";
import { ANALYTE_TO_MODULE, compareToTargets, outOfTargetOnly } from "./target-comparison.ts";
import { formatLabReview, type LabReviewCheck } from "./lab-llm.ts";
import { formatLabNarrative, type LabNarrativeCheck } from "./lab-narrative.ts";

/**
 * PR 數值的極性——整個 arm C 的臨床意義都掛在這一個常數上，改錯會把每位病人的
 * 風險判定整個反過來，因此把來源寫在這裡，並且只在這裡定義一次。
 *
 * **2026-08-04：由資料來源方確認為 zero-is-low-risk。**
 *   PR=0 日常維持、PR=1 適度介入、PR=2 積極照護。
 *   同時確認先前流傳的 prompt（v14 及其衍生說法）在這一點上是錯的。
 *
 * 這推翻了先前依資料歸納的設定，過程記在這裡以免重蹈：
 *
 *   歸納一：舊批次匯出同時給了數值與中文敘述，同一位病人 PR3=0、PR4=0、PR6=0，
 *     敘述為「腎病變:高風險, 神經病變:高風險, 周邊血管病變:高風險」。
 *     那份對照現在看來要嘛是另一套編碼，要嘛是匯出時就已對錯，不可作為依據。
 *
 *   歸納二：三位 CKD=1 的病人 PR3 全部為 0，唯一 PR3=2 的病人 CKD=0。
 *     依確認後的極性，等於風險模型對已有慢性腎臟病的人預測「腎病變日常維持」。
 *     ⚠ 這個現象沒有被解釋掉，值得向來源方追問——但 n 只有 3，
 *     而且推導規則本來就不對我們公開，不足以推翻書面確認。
 *
 * 教訓：靠六位病人的資料歸納一個決定臨床方向的常數，即使內部一致也可能是錯的。
 * 這種常數要的是規格，不是統計。
 */
/** 風險最低，維持既有照護即可，不納入主題內容 */
export const PR_LOW = 0;
/** 中等風險，只給簡短提醒 */
export const PR_MODERATE = 1;
/** 風險最高，需要完整模組 */
export const PR_HIGH = 2;

/** PR 分級用語。沿用 v14 已定義的三級，避免病人版出現「高／中／低風險」標籤。 */
export const PR_ACTION_TIER: Record<number, string> = {
  [PR_HIGH]: "積極照護",
  [PR_MODERATE]: "適度介入",
  [PR_LOW]: "日常維持",
};

const TOPIC_TO_MODULE: Record<number, string> = {
  1: "EYE-CORE",
  2: "STROKE-CORE",
  3: "KIDNEY-CORE",
  4: "NERVE-CORE",
  5: "HEART-CORE",
  6: "LEG-CIRCULATION-CORE",
};

const TOPIC_NAMES: Record<number, string> = {
  1: "視網膜病變",
  2: "腦血管疾病",
  3: "腎臟病變",
  4: "神經病變",
  5: "心血管疾病",
  6: "周邊血管疾病",
  // 第 7 項沒有對應的衛教模組（來源也不提供 PR7），但主管機關要求現況必須呈現。
  7: "代謝性急症",
};

export type TopicKind =
  | "established"
  | "prevention-active"
  | "prevention-moderate"
  | "excluded";

export type TopicDecision = {
  topic: number;
  topicName: string;
  moduleId: string;
  kind: TopicKind;
  rValue: number | null;
  prValue: number | null;
  reason: string;
};

/**
 * 確定性的主題判定。
 *
 * 先講來源的資料模型，因為判定完全建立在它上面：
 * **同一個主題，R 與 PR 只會出現其中一個。** 已發生的併發症輸出 R（值恆 ≥1），
 * 尚未發生的才輸出 PR 風險預測。實測六位病人 × 7 個主題共 42 個位置，
 * 兩者同時出現的次數是 0，恰有其一的是 37（其餘 5 個是 R7/PR7，
 * 因為來源只提供 PR1–PR6，沒有 PR7）。
 *
 * 所以「R 缺值 + PR 存在」不是資訊不明，而是**該併發症尚未發生**——
 * 正因為沒發生，模型才會為它產生風險預測。
 *
 *   R 存在（恆 >0）            → 已發生，完整模組
 *   R 缺值、PR 為高風險        → 尚未發生，完整模組（預防內容）
 *   R 缺值、PR 為中風險        → 尚未發生，只給簡短提醒
 *   R 缺值、PR 為低風險        → 不納入
 *   R 與 PR 皆缺               → 真的無從判斷，不納入
 *
 * 另外：來源的 CKD 欄位若為 1，代表已有慢性腎臟病，即使 R3 缺值也要以
 * 已發生處理，否則會對 CKD 病人說「腎臟尚未受影響」。
 */
export function decideTopics(facts: PatientFacts): TopicDecision[] {
  const decisions: TopicDecision[] = [];
  const ckdFlag = facts.comorbidityFlags.ckd;
  const hasCkdFlag = ckdFlag.known && ckdFlag.value;
  const ckdIcdCodes = facts.ckdIcdCodes;

  for (let topic = 1; topic <= 6; topic += 1) {
    const r = facts.existingComplications.find((item) => item.code === \`R\${topic}\`);
    const pr = facts.riskPredictions.find((item) => item.code === \`PR\${topic}\`);
    const rPresent = Boolean(r?.present);
    const rValue = rPresent ? (r?.value ?? null) : null;
    const prValue = pr?.present ? pr.value : null;
    const base = {
      topic,
      topicName: TOPIC_NAMES[topic],
      moduleId: TOPIC_TO_MODULE[topic],
      rValue,
      prValue,
    };

    if (rValue !== null && rValue > 0) {
      decisions.push({ ...base, kind: "established", reason: \`R\${topic}=\${rValue}，屬已發生的併發症現況。\` });
      continue;
    }

    // 來源 CKD 欄位與申報診斷碼都是獨立於 DCSI 的既有診斷宣告，優先於 R3 的缺值。
    // DCSI 只認診斷碼，而診斷碼只出現在有開藥的就診，所以 R3 漏掉腎病變的機會不小。
    if (topic === 3 && (hasCkdFlag || ckdIcdCodes.length > 0)) {
      const basis = hasCkdFlag
        ? "來源 CKD 欄位為 1"
        : \`申報診斷碼出現慢性腎臟病（\${ckdIcdCodes.join("、")}）\`;
      decisions.push({
        ...base,
        kind: "established",
        reason: \`\${basis}，即使 R3\${rPresent ? \`=\${rValue}\` : " 缺值"} 也以已發生處理。\`,
      });
      continue;
    }

    // 走到這裡代表 R 不存在或為 0（R>0 已在上面判為已發生），兩種情形都是尚未發生。
    if (prValue === PR_HIGH) {
      decisions.push({
        ...base,
        kind: "prevention-active",
        reason: \`來源以 PR\${topic}=\${PR_HIGH}（\${PR_ACTION_TIER[PR_HIGH]}）呈現、未輸出 R\${topic}，依資料模型代表尚未發生；納入預防內容。\`,
      });
      continue;
    }
    if (prValue === PR_MODERATE) {
      decisions.push({
        ...base,
        kind: "prevention-moderate",
        reason: \`PR\${topic}=\${PR_MODERATE}（\${PR_ACTION_TIER[PR_MODERATE]}），尚未發生；納入預防內容。\`,
      });
      continue;
    }
    if (prValue === PR_LOW) {
      decisions.push({
        ...base,
        kind: "excluded",
        reason: \`PR\${topic}=\${PR_LOW}（\${PR_ACTION_TIER[PR_LOW]}），維持既有照護即可，不納入主題內容。\`,
      });
      continue;
    }
    decisions.push({
      ...base,
      kind: "excluded",
      reason: \`來源同時未提供 R\${topic} 與 PR\${topic}，無從判斷是否發生，不得補值，因此不納入。\`,
    });
  }

  return decisions;
}

export const MODULE_SELECTOR_PROMPT = \`你是糖尿病衛教報告的輔助判讀器。

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
  "echo": { "age_years": 輸入中的年齡數字, "dcsi": 輸入中的 DCSI 總分（沒有就填 null） },
  "priorities": [
    { "module_id": "已納入的模組代碼", "why": "為什麼這位病人該優先處理這一項" }
  ],
  "clinician_notes": ["給醫療團隊的提醒，每則 80 字以內"],
  "data_concerns": ["資料品質或矛盾之處"],
  "disagreements": [
    { "topic": "R3", "program_decision": "程式的判定", "your_view": "你的看法與理由" }
  ]
}\`;

export type SelectorOutput = {
  /**
   * 輸入中的年齡與 DCSI，由判讀器抄回來。
   *
   * 輸出檔沒有病人識別碼是刻意的（不把識別資料寫進中介檔），代價是放錯
   * 資料夾不會有任何症狀——實測就發生過兩位病人的輸出對調，而且是靠肉眼
   * 讀出「病程 1.6 年」對不上才發現的。抄回兩個數字就能自動核對。
   */
  echo: { ageYears: number | null; dcsi: number | null } | null;
  priorities: Array<{ module_id: string; why: string }>;
  clinician_notes: string[];
  data_concerns: string[];
  disagreements: Array<{ topic: string; program_decision: string; your_view: string }>;
};

export function parseModuleSelection(raw: string): SelectorOutput {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`/i);
  const candidate = fenced ? fenced[1].trim() : trimmed;

  let parsed: unknown;
  try {
    parsed = JSON.parse(candidate);
  } catch {
    const first = candidate.indexOf("{");
    const last = candidate.lastIndexOf("}");
    if (first === -1 || last <= first) throw new Error("輔助判讀器沒有回傳可解析的 JSON。");
    parsed = JSON.parse(candidate.slice(first, last + 1));
  }
  if (!parsed || typeof parsed !== "object") throw new Error("輔助判讀器回傳的不是 JSON 物件。");
  const record = parsed as Record<string, unknown>;

  const strings = (value: unknown): string[] =>
    Array.isArray(value) ? value.filter((item) => typeof item === "string").map(String) : [];

  const echoRaw = (record.echo ?? null) as Record<string, unknown> | null;
  const num = (value: unknown) => (typeof value === "number" && Number.isFinite(value) ? value : null);

  return {
    echo: echoRaw ? { ageYears: num(echoRaw.age_years), dcsi: num(echoRaw.dcsi) } : null,
    priorities: (Array.isArray(record.priorities) ? record.priorities : [])
      .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
      .map((item) => ({ module_id: String(item.module_id ?? "").trim(), why: String(item.why ?? "").trim() }))
      .filter((item) => item.module_id),
    clinician_notes: strings(record.clinician_notes),
    data_concerns: strings(record.data_concerns),
    disagreements: (Array.isArray(record.disagreements) ? record.disagreements : [])
      .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
      .map((item) => ({
        topic: String(item.topic ?? "").trim(),
        program_decision: String(item.program_decision ?? "").trim(),
        your_view: String(item.your_view ?? "").trim(),
      }))
      .filter((item) => item.topic),
  };
}

export type ResolvedPlan = {
  decisions: TopicDecision[];
  /** 完整展開的併發症主題模組，已排序 */
  topicModuleIds: string[];
  /** 只給簡短提醒的主題 */
  moderateTopics: TopicDecision[];
  selfCareModuleIds: string[];
  selfCareReasons: Record<string, string>;
  /** 給模組文字挑選變體用的成分名 */
  medicationIngredients: string[];
  /** 病人版最終順序（含 BASE 與類型提醒） */
  patientModuleIds: string[];
  targets: ResolvedPlanTargets;
  selection: SelectorOutput | null;
  /** LLM 指定但不在已納入清單中的優先項，已被忽略 */
  rejectedPriorities: string[];
  /** 病人版可讀的檢驗數值敘述（不含時序宣稱、不含筆數） */
  labNotes: string[];
  /** 醫師版：含筆數與結果種類數 */
  labNotesForClinician: string[];
  /** 由實際數值觸發、可給病人看的門檻提醒 */
  labPatientMessages: string[];
  /** 文末數值，每一則帶著它自己的說明，讓病人不必自行配對。 */
  labNoteEntries: Array<{ text: string; messages: string[] }>;
  /** 由實際數值觸發、給醫師看的門檻判定（含數值與出處） */
  labThresholds: ReturnType<typeof evaluateThresholds>;
  /** 共同照護區塊，整份報告各出現一次 */
  sharedBlockIds: string[];
  followUp: ReturnType<typeof followUpSchedule>;
  /** 各主題的就醫警訊，集中成單一清單 */
  urgentSigns: string[];
  /** 目標值與實際檢驗值的逐項比對 */
  targetComparisons: ReturnType<typeof compareToTargets>;
  /** 模組代碼 → 該器官相關的檢驗值敘述，用來嵌進對應段落 */
  labByModule: Record<string, string[]>;
  /** 同上，但每一則帶著它自己的說明。 */
  labEntriesByModule: Record<string, Array<{ text: string; messages: string[] }>>;
  /** 該器官段落建議的檢查項目中，資料裡完全沒有紀錄的那些。 */
  missingByModule: Record<string, string[]>;
  /** 用藥與檢驗資料的時間落差（天）；無法計算時為 null */
  medicationLabGapDays: number | null;
  /** 已納入門檻判定的指標數 */
  evaluatedAnalytes: number;
  /** 已由程式逐條判定的檢驗項目，供判讀器那一段去重 */
  evaluatedAnalyteKeys: string[];
  /** 有數值但未納入判定的檢驗項目種類數 */
  unevaluatedNumericItems: number;
};

export function resolvePlan(selection: SelectorOutput | null, facts: PatientFacts): ResolvedPlan {
  const decisions = decideTopics(facts);

  const established = decisions
    .filter((item) => item.kind === "established")
    .sort((a, b) => (b.rValue ?? 0) - (a.rValue ?? 0) || a.topic - b.topic);
  const active = decisions
    .filter((item) => item.kind === "prevention-active")
    .sort((a, b) => a.topic - b.topic);
  const moderate = decisions.filter((item) => item.kind === "prevention-moderate").sort((a, b) => a.topic - b.topic);

  // 分型專屬補充模組只有在糖尿病類型明確確認時才附加，且必須跟在對應的 CORE 之後。
  const typeSuffix =
    facts.diabetesType.verdict === "type1-confirmed"
      ? "T1"
      : facts.diabetesType.verdict === "type2-confirmed"
        ? "T2"
        : null;
  const TYPE_VARIANTS: Record<string, string> = {
    "EYE-CORE": "EYE",
    "KIDNEY-CORE": "KIDNEY",
    "NERVE-CORE": "NERVE",
  };

  // PR=1 與 PR=2 都展開完整模組；兩者的差別只留在醫師版與判定路徑的分級標示上。
  const topicModuleIds: string[] = [];
  for (const item of [...established, ...active, ...moderate]) {
    topicModuleIds.push(item.moduleId);
    const prefix = TYPE_VARIANTS[item.moduleId];
    if (typeSuffix && prefix && MODULE_BY_ID.has(\`\${prefix}-\${typeSuffix}\`)) {
      topicModuleIds.push(\`\${prefix}-\${typeSuffix}\`);
    }
  }

  const patientModuleIds: string[] = ["BASE-01"];
  const verdict = facts.diabetesType.verdict;
  if (verdict === "conflicting" || verdict === "absent") patientModuleIds.push("TYPE-UNCLEAR");
  patientModuleIds.push(...topicModuleIds);
  if (topicModuleIds.includes("NERVE-CORE") || topicModuleIds.includes("LEG-CIRCULATION-CORE")) {
    patientModuleIds.push("BASE-02");
  }

  // 檢驗數值：接進門檻判定。沒有採檢日，所以一律以「曾出現」敘述。
  const labFindings = extractLabFindings(facts);
  const labThresholds = evaluateThresholds(labFindings, facts);

  // 計數只有一個來源：主題判定。低血糖模組要看實測值，所以檢驗判定必須先跑。
  const lowestGlucose = lowestMeasuredGlucose(labFindings);
  const selfCare = selectSelfCareModules(facts, established.length, lowestGlucose);

  // 簡短提醒的主題雖然沒有展開完整模組，仍然出現在報告中，因此也算有效的優先項。
  const includedIds = new Set([
    ...patientModuleIds,
    ...selfCare.moduleIds,
    ...moderate.map((item) => item.moduleId),
  ]);
  const rejectedPriorities = (selection?.priorities ?? [])
    .map((item) => item.module_id)
    .filter((id) => !includedIds.has(id));


  // 共同照護區塊：由選到的主題決定，整份報告各出現一次。
  const needed = new Set<string>();
  for (const id of topicModuleIds) {
    for (const key of MODULE_BY_ID.get(id)?.needsShared ?? []) needed.add(key);
  }
  const sharedBlockIds = SHARED_CARE_BLOCKS.filter(
    (block) => block.appliesWhen === "always" || needed.has(block.appliesWhen),
  ).map((block) => block.id);

  // 就醫警訊集中；同一份報告裡不重複。
  const urgentSigns: string[] = [];
  for (const id of topicModuleIds) {
    const signs = MODULE_BY_ID.get(id)?.urgentSigns;
    if (signs && !urgentSigns.includes(signs)) urgentSigns.push(signs);
  }
  for (const id of selfCare.moduleIds) {
    const signs = SELF_CARE_BY_ID.get(id)?.urgentSigns;
    if (signs && !urgentSigns.includes(signs)) urgentSigns.push(signs);
  }

  const includedTopics = [...established, ...active].map((item) => item.topic);
  const targetComparisons = compareToTargets(labFindings, facts);

  // 把檢驗值嵌進對應的器官段落。稽核指出數值全放在文末附錄時，
  // 病人必須自己把「數值」和「建議」兩段對照，等於把工作丟回去。
  const labByModule: Record<string, string[]> = {};
  const labEntriesByModule: Record<string, Array<{ text: string; messages: string[] }>> = {};
  const inlined = new Set<string>();
  for (const finding of labFindings) {
    const moduleId = ANALYTE_TO_MODULE[finding.analyte];
    if (!moduleId || !topicModuleIds.includes(moduleId)) continue;
    const text = describeRange(finding);
    (labByModule[moduleId] ??= []).push(text);
    (labEntriesByModule[moduleId] ??= []).push({
      text,
      messages: [
        ...labThresholds
          .filter((hit) => hit.analyte === finding.analyte && hit.patientMessage)
          .map((hit) => hit.patientMessage as string),
        ...targetComparisons
          .filter((item) => item.analyte === finding.analyte && item.outOfTarget && item.patientMessage)
          .map((item) => item.patientMessage as string),
      ],
    });
    inlined.add(finding.analyte);
  }

  // 段落裡教了要看哪些檢查，就要說明哪一項資料中完全沒有——
  // 否則會出現「說您有腎臟問題、只給一個正常的肌酸酐」這種讀不通的組合。
  const missingByModule: Record<string, string[]> = {};
  const measured = new Set(labFindings.map((item) => item.analyte));
  for (const [moduleId, expected] of Object.entries(EXPECTED_ANALYTES)) {
    if (!topicModuleIds.includes(moduleId)) continue;
    const missing = expected.filter((item) => !measured.has(item.analyte)).map((item) => item.label);
    if (missing.length) missingByModule[moduleId] = missing;
  }

  // 用藥申報停在兩年前、檢驗卻是近月，這種落差醫師需要知道。
  let medicationLabGapDays: number | null = null;
  if (facts.medicationDateRange.known && facts.reportDate.known) {
    const latest = Date.parse(\`\${facts.medicationDateRange.value.latest}T00:00:00Z\`);
    const report = Date.parse(\`\${facts.reportDate.value}T00:00:00Z\`);
    if (Number.isFinite(latest) && Number.isFinite(report)) {
      medicationLabGapDays = Math.round((report - latest) / 86_400_000);
    }
  }

  return {
    decisions,
    topicModuleIds,
    moderateTopics: moderate,
    selfCareModuleIds: selfCare.moduleIds,
    selfCareReasons: selfCare.reasons,
    medicationIngredients: facts.medicationIngredients,
    patientModuleIds,
    targets: resolveTargets(facts, established.length),
    selection,
    rejectedPriorities,
    // 已經嵌進器官段落的就不在文末摘要重複一次。
    labNotes: labFindings.filter((f) => !inlined.has(f.analyte)).map(describeRange),
    labNotesForClinician: labFindings.map(describeRangeForClinician),
    labPatientMessages: labThresholds
      .map((hit) => hit.patientMessage)
      .filter((message): message is string => Boolean(message)),
    // 輕重之分靠排序表達，不靠在前面加一個摘要區塊。
    // 摘要區塊只會列出「血鈉異常」這種病人看不懂又無從行動的臨床名詞，
    // 而且緊接著的資料限制說明會立刻否定它。
    labNoteEntries: labFindings
      .filter((f) => !inlined.has(f.analyte))
      .map((f) => {
        // 說明有兩個來源：門檻判定與目標比對。先前只配對前者，導致
        // 「飯前血糖 20–315」底下沒有說明，而說明掉到區塊最後變成孤兒。
        const hits = labThresholds.filter((hit) => hit.analyte === f.analyte && hit.patientMessage);
        const offTarget = targetComparisons.filter(
          (item) => item.analyte === f.analyte && item.outOfTarget && item.patientMessage,
        );
        const messages = [
          ...hits.map((hit) => hit.patientMessage as string),
          ...offTarget.map((item) => item.patientMessage as string),
        ];
        return {
          text: describeRange(f),
          messages,
          rank: hits.some((hit) => hit.severity === "urgent") ? 0 : messages.length ? 1 : 2,
        };
      })
      .sort((a, b) => a.rank - b.rank)
      .map(({ text, messages }) => ({ text, messages })),
    labThresholds,
    sharedBlockIds,
    targetComparisons,
    labByModule,
    labEntriesByModule,
    missingByModule,
    medicationLabGapDays,
    evaluatedAnalytes: labFindings.length,
    evaluatedAnalyteKeys: labFindings.map((item) => item.analyte),
    unevaluatedNumericItems: facts.labItems.filter(
      (item) => item.rawValues.some((v) => /^[≧≥><＞＜]?\\s*\\d/.test(v.trim())),
    ).length - labFindings.length,
    followUp: followUpSchedule(includedTopics, {
      kidneyIntensive: labThresholds.some((hit) => hit.code === "kidney-intensive-followup"),
    }),
    urgentSigns,
  };
}

function draftBanner(narrative = false): string[] {
  const extra = narrative
    ? ["※ 本報告的「您的檢驗數值」一段由模型直接撰寫，未經醫療團隊逐句核准；數值已由程式逐一比對來源。"]
    : [];
  if (MODULE_CATALOG_APPROVED) return extra.length ? [...extra, ""] : [];
  return [
    \`※ DRAFT｜衛教模組 \${MODULE_CATALOG_VERSION}／自我照護模組 \${SELF_CARE_VERSION}／指引門檻表 \${RULES_VERSION} 均尚未經醫療團隊核准，僅供流程比較，不得提供給病人。\`,
    ...extra,
    "",
  ];
}

/**
 * 中風險主題的一句話提醒。
 *
 * 先前這一區只印病名，讀者拿到「1. 腦血管疾病 2. 心血管疾病」加一句免責聲明——
 * 製造焦慮又不給出路。列出一個項目就要能回答「那我該做什麼」。
 */
/**
 * 各器官段落「應該要有」的檢查項目。資料中完全沒有紀錄時要講出來，
 * 因為那本身就是一件病人可以在回診時處理的事。
 */
const EXPECTED_ANALYTES: Record<string, Array<{ analyte: Analyte; label: string }>> = {
  "KIDNEY-CORE": [
    { analyte: "UACR", label: "尿液白蛋白／肌酸酐比值（UACR）" },
    { analyte: "creatinine", label: "血清肌酸酐" },
    { analyte: "eGFR", label: "腎絲球過濾率（eGFR）" },
  ],
};



export type AssembleOptions = {
  /**
   * 這份報告實際產出的日期，由呼叫端給（通常是今天）。
   *
   * 不可用來源的 REPORT_DATE 代替。那是資料匯出當時的日期，會讓一份今天
   * 產出的報告顯示成十幾天前做的，而病人版還要讀者「請先查看資料截至日期」——
   * 兩個日期一樣就等於沒有給任何資訊。
   */
  reportDate: string | null;
  /** 資料的截止日，來自來源的 REPORT_DATE。 */
  dataCutoff: string | null;
  /** 檢驗判讀器的輸出；未執行時省略。只影響醫師版。 */
  labReview?: LabReviewCheck;
  /**
   * 病人版的檢驗敘述；未執行時省略，改用程式組出的固定句型。
   *
   * 這是報告中唯一一段未經逐句核准的文字。程式驗證它引用的數值與禁止事項，
   * 但不改寫它——判定是它的職責。
   */
  labNarrative?: LabNarrativeCheck;
};

/**
 * 安全提示的分級標籤。
 *
 * 內部鍵值沿用 info／attention／urgent（排序要用），但**印出來的字不能暗示即時性**。
 * 這些數值全部來自沒有採檢日的申報資料——一筆 Na 124 可能是兩年前住院時測的、
 * 早就處理完了。標成「urgent」等於要醫師對一個可能已經不存在的狀況立刻反應。
 *
 * 分級真正的意思是「該優先核實哪一項目前狀態」，不是「現在有多急」。
 */
const SEVERITY_LABEL: Record<"info" | "attention" | "urgent", string> = {
  urgent: "優先核實",
  attention: "留意",
  info: "參考",
};

/**
 * 三個標題層級要一眼分得出來，否則「腦血管」和「掌握自己的數字」看起來
 * 是同一種東西——前者是你的狀況，後者是要做的事。
 *
 *   ──── 分隔線＋【】  區塊
 *   ◆                  模組
 *   1. 2. 3.／・        內容（指令／資訊）
 */
function section(lines: string[], title: string) {
  lines.push("────────────────────────────────", \`【\${title}】\`, "");
}

/**
 * 病人版：逐字使用固定文字，不出現代碼、分數或高／中／低風險標籤。
 *
 * 結構經過一次重整：主題模組只放該疾病特有的內容，通用照護、追蹤時程與
 * 就醫警訊各集中一次，避免六個模組串起來後同一件事講六遍。
 */
export function assemblePatientReport(plan: ResolvedPlan, options: AssembleOptions): string {
  const lines: string[] = [...draftBanner(Boolean(options.labNarrative))];

  lines.push("糖尿病衛教報告");
  lines.push(\`報告產生日期：\${options.reportDate ?? "未提供"}\`);
  lines.push(\`資料截至日期：\${options.dataCutoff ?? "未提供"}\`);
  lines.push("");

  const byId = new Map(plan.decisions.map((item) => [item.moduleId, item]));
  /**
   * suffix：狀態直接寫在標題上。
   * 區塊開頭那句「以下是已經有的狀況」在第 17 行，讀到第 45 行的「腎臟」時
   * 已經隔了 30 行，而器官名本身是中性的——單看標題分不出是「你已經有」
   * 還是「你要預防」。
   *
   * merged：分型補充模組（EYE-T2 等）原本各自起一個「第二型糖尿病眼底檢查補充」
   * 標題，讀起來像文件章節編號而不是對病人說話。改為併進母模組的內文。
   */
  // 有 LLM 敘述時，數值全部集中在那一段；器官段落不再嵌入，否則同一個 eGFR
  // 會用兩種語氣講兩次。缺檢提示保留——那是程式知道而敘述器不知道的事
  // （它只描述存在的紀錄，不知道「該有而沒有」）。
  const inlineValues = !options.labNarrative;
  const emit = (id: string, suffix = "", merged: string[] = []) => {
    const moduleDef = MODULE_BY_ID.get(id);
    if (!moduleDef) return;
    lines.push(\`◆ \${moduleDef.title}\${suffix}\`, "");
    lines.push(moduleDef.patientText, "");
    for (const extra of merged) lines.push(extra, "");
    // 相關數值直接放在該器官段落，病人不必自己回頭對照文末附錄。
    const entries = inlineValues ? plan.labEntriesByModule[id] : undefined;
    if (entries?.length) {
      // 時間限制在報告開頭講過一次，這裡不重複，否則每個器官段落都會再唸一遍。
      // 標題帶上器官名，才不會和文末的「您的其他檢驗數值」撞名。
      lines.push(\`您的\${moduleDef.title}相關數值：\`, "");
      // 數值是資訊、不是待辦。用「・」和行動項目的「1. 2. 3.」區隔，
      // 否則同一份報告裡「1. 血糖 55–459」和「1. 每天查看腳背」讀起來是同一種東西。
      entries.forEach((entry) => {
        lines.push(\`・\${entry.text}\`);
        for (const message of entry.messages) lines.push(\`   \${message}\`);
      });
      lines.push("");
    }
    const missing = inlineValues ? plan.missingByModule[id] : undefined;
    if (missing?.length) {
      lines.push(\`您的資料中沒有\${missing.join("、")}的紀錄。回診時可以確認是否需要安排。\`, "");
    }
  };

  for (const id of ["BASE-01", "TYPE-UNCLEAR"]) {
    if (plan.patientModuleIds.includes(id)) emit(id);
  }

  // 檢驗資料的時間限制整份報告只講一次，之後各處直接列數值。
  const hasAnyValues = plan.labNotes.length > 0 || Object.keys(plan.labByModule).length > 0;
  if (hasAnyValues) {
    lines.push(
      "以下提到的檢驗數值都來自健保申報紀錄。這些紀錄只有費用年月、沒有檢查日期，因此無法確認先後順序，也無法確認哪一筆最新。",
      "",
    );
  }

  // 緊急就醫時機放在最前面。這是全份唯一「延誤會造成傷害」的內容，
  // 其餘都是參考資料——沒有人會在急性事件當下翻兩百行去找它。
  if (plan.urgentSigns.length) {
    section(lines, "什麼情況要立刻就醫");
    // 分兩組。先前是一串 1–9，要逐條讀完才知道哪幾條該打 119。
    // 「儘速就醫；若呼吸困難明顯再打 119」這種混合式的主要指示是儘速就醫，
    // 放進 119 那組會誇大。只有整條就是叫人打 119 的才算。
    const needs119 = (text: string) => /119/.test(text) && !/儘速就醫|當天/.test(text);
    const groups: Array<[string, string[]]> = [
      ["立即撥打 119", plan.urgentSigns.filter(needs119)],
      ["儘速就醫", plan.urgentSigns.filter((item) => !needs119(item))],
    ];
    for (const [title, items] of groups) {
      if (!items.length) continue;
      lines.push(\`◆ \${title}\`, "");
      items.forEach((item, index) => lines.push(\`\${index + 1}. \${item}\`, ""));
    }
  }


  const topicIds = plan.patientModuleIds.filter((id) => !["BASE-01", "TYPE-UNCLEAR"].includes(id));
  /**
   * 已發生與預防不分區。
   *
   * R 欄位來自我們看不到推導方式的來源倉儲，分成「您已有的」與「預防的」
   * 兩區等於要病人自己去想「我到底有沒有」——而那個問題我們答不了。
   * 該給的衛教照給，順序上已發生的排前面，但不標示狀態。
   */
  const orderedIds: string[] = [];
  // 順序：已發生排前面，其次積極照護，再來適度介入。三種都會展開完整模組。
  for (const kind of ["established", "prevention-active", "prevention-moderate"] as const) {
    for (const id of topicIds) {
      if (/-T[12]$/.test(id)) continue;
      const decision = byId.get(id);
      const parent = decision ? null : topicIds.find((other) => byId.get(other) && id.startsWith(other.split("-")[0]));
      const actual = decision?.kind ?? (parent ? byId.get(parent)?.kind : undefined);
      if (actual !== kind) continue;
      orderedIds.push(id);
    }
  }

  if (orderedIds.length) {
    // 有些主題是風險預測選進來的。原本這句話掛在「持續留意」那一區，
    // 那一區併進來之後若不補回來，病人會把預測讀成已經確診。
    const fromPrediction = orderedIds.some((id) => {
      const decision = byId.get(id) ?? byId.get(topicIds.find((other) => id.startsWith(other.split("-")[0])) ?? "");
      return decision?.kind === "prevention-active" || decision?.kind === "prevention-moderate";
    });
    section(lines, "與您有關的健康重點");
    lines.push(
      "以下項目是依您的健康紀錄挑選出來，建議您特別注意。如果您不確定自己是否有相關診斷，請在回診時向醫療團隊確認。",
      ...(fromPrediction
        ? ["其中有些項目來自風險評估而不是診斷，列出來是為了提早注意，不代表您已經有這個疾病。"]
        : []),
      "",
    );
    for (const id of orderedIds) {
      const extras = topicIds
        .filter((other) => /-T[12]$/.test(other) && other.split("-")[0] === id.split("-")[0])
        .map((other) => MODULE_BY_ID.get(other)?.patientText)
        .filter((text): text is string => Boolean(text));
      emit(id, "", extras);
    }
  }

  if (options.labNarrative) {
    // LLM 直接寫的連貫段落。固定句型只涵蓋程式有規則的項目，而且會把
    // 「曾出現偏低」與「曾出現偏高」並排成兩句，要讀者自己合起來想。
    section(lines, "您的檢驗數值");
    lines.push(...formatLabNarrative(options.labNarrative), "");
  } else {
  // 沒有配對到任何數值的提醒（例如「資料中沒有 HbA1c 紀錄」、低血糖跨了兩種
    // 血糖項目）也必須印出來。先前整段包在 labNoteEntries.length 裡，數值全部
    // 被嵌進器官段落時 labNoteEntries 是空的，這些提醒就跟著消失了。
    const pairedMessages = new Set([
      ...plan.labNoteEntries.flatMap((entry) => entry.messages),
      ...Object.values(plan.labEntriesByModule).flatMap((entries) => entries.flatMap((entry) => entry.messages)),
    ]);
    const looseMessages = [
      ...plan.labPatientMessages.filter((message) => !pairedMessages.has(message)),
      ...outOfTargetOnly(plan.targetComparisons)
        .map((item) => item.patientMessage)
        .filter((message): message is string => Boolean(message))
        .filter((message) => !pairedMessages.has(message)),
    ];

    if (plan.labNoteEntries.length || looseMessages.length) {
      section(lines, "您的其他檢驗數值");
      plan.labNoteEntries.forEach((entry) => {
        lines.push(\`・\${entry.text}\`);
        for (const message of entry.messages) lines.push(\`   \${message}\`);
      });
      if (plan.labNoteEntries.length) lines.push("");
      for (const message of looseMessages) lines.push(message, "");
    }
  }

  if (plan.followUp.text) {
    section(lines, "追蹤時程");
    lines.push(plan.followUp.text, "");
  }

  // 「照護重點」與「每天可以做的事」是我們的內部分類（跨主題共用區塊 vs
  // DSMES 自我照護模組），不是病人的分類——兩區都是「要做的事」，分成兩塊
  // 只會讓人以為有什麼差別。合成一區。
  if (plan.sharedBlockIds.length || plan.selfCareModuleIds.length) {
    section(lines, "日常照護");
    for (const id of plan.sharedBlockIds) {
      const block = SHARED_CARE_BLOCKS.find((item) => item.id === id);
      if (!block) continue;
      lines.push(\`◆ \${block.title}\`, "");
      lines.push(block.text, "");
    }
    const kidneyOrHeart = plan.decisions.some(
      (item) => item.kind === "established" && (item.topic === 3 || item.topic === 5),
    );
    const ingredients = plan.medicationIngredients.join(" ");
    const active: Record<string, boolean> = {
      "kidney-or-heart": kidneyOrHeart,
      "sick-day-hold-drugs": /metformin|雙胍|gliflozin/i.test(ingredients),
      sglt2: /gliflozin/i.test(ingredients),
    };
    for (const id of plan.selfCareModuleIds) {
      const moduleDef = SELF_CARE_BY_ID.get(id);
      if (!moduleDef) continue;
      let text = moduleDef.patientText;
      let changed = false;
      for (const variant of moduleDef.definiteVariants ?? []) {
        if (!active[variant.when]) continue;
        text = text.replace(variant.from, variant.to);
        changed = true;
      }
      if (changed) text = renumber(text);
      lines.push(\`◆ \${moduleDef.title}\`, "");
      lines.push(text, "");
    }
  }

  return lines.join("\\n").trimEnd();
}

/** 醫師版：含 DCSI、R1–R7、PR1–PR7 代碼與分數（法規要求），以及個別化目標與安全旗標。 */
/**
 * 條列重新編號。變體會插入或移除條目，直接沿用原文的數字會撞號
 * （實測出現過 1, 2, 2, 3, 4, 4）。
 */
function renumber(text: string): string {
  let n = 0;
  return text
    .split("\\n")
    .map((line) => (/^\\d+\\.\\s/.test(line) ? line.replace(/^\\d+\\.\\s/, \`\${++n}. \`) : line))
    .join("\\n");
}

const DIABETES_TYPE_LABEL: Record<PatientFacts["diabetesType"]["verdict"], string> = {
  "type1-confirmed": "診斷碼指向第 1 型",
  "type2-confirmed": "第 2 型",
  conflicting: "⚠ 第 1 型與第 2 型診斷碼並存",
  absent: "資料中無糖尿病診斷碼",
};

export function assembleClinicianReport(plan: ResolvedPlan, facts: PatientFacts, options: AssembleOptions): string {
  const lines: string[] = [...draftBanner()];

  lines.push("【AI 醫療人員報告】");
  lines.push(\`報告產生日期：\${options.reportDate ?? "未提供"}\`);
  lines.push(\`資料截至日期：\${options.dataCutoff ?? "未提供"}\`);
  lines.push(\`年齡：\${facts.ageYears.known ? \`\${facts.ageYears.value} 歲\` : "未提供"}｜性別：\${facts.sex.known ? facts.sex.value : "未提供"}｜糖尿病病程：\${facts.diabetesDurationYears.known ? \`\${facts.diabetesDurationYears.value} 年\` : "未提供"}\`);
  lines.push("");

  const NUM = ["一", "二", "三", "四", "五", "六", "七", "八"];
  let sectionNo = 0;
  const section = (title: string) => \`\${NUM[sectionNo++]}、\${title}\`;

  lines.push(section("併發症現況與風險預測"));
  lines.push(\`DCSI 總分：\${facts.dcsiTotal.known ? facts.dcsiTotal.value : "來源未提供"}\`);
  const rByTopic = new Map(facts.existingComplications.map((item) => [item.code.slice(1), item]));
  const prByTopic = new Map(facts.riskPredictions.map((item) => [item.code.slice(2), item]));
  const kindByTopic = new Map(plan.decisions.map((item) => [String(item.topic), item.kind]));
  const topics = Object.keys(TOPIC_NAMES).map(Number).sort((a, b) => a - b);
  const width = Math.max(...topics.map((topic) => TOPIC_NAMES[topic].length));
  for (const topic of topics) {
    const key = String(topic);
    const r = rByTopic.get(key);
    const pr = prByTopic.get(key);
    let state: string;
    if (r?.present) {
      state = \`已發生（嚴重度 \${r.rawValue}）\`;
    } else if (kindByTopic.get(key) === "established") {
      state = "已發生（依來源 CKD 註記；本項未輸出嚴重度）";
    } else if (pr?.present && pr.value !== null) {
      state = \`未發生｜風險預測：\${PR_ACTION_TIER[pr.value] ?? "未定義分級"}\`;
    } else {
      state = "來源未提供現況與風險預測";
    }
    lines.push(\`  \${TOPIC_NAMES[topic].padEnd(width, "　")}  \${state}\`);
  }
  lines.push("  （來源對每一項只輸出其一：已發生者給嚴重度分數，未發生者給風險預測。）");
  lines.push("");

  // 只在類型有疑義時提出來。判定為第二型是常態，寫出來只是佔版面。
  if (facts.diabetesType.verdict !== "type2-confirmed") {
    lines.push(section("糖尿病類型"));
    lines.push(\`  \${DIABETES_TYPE_LABEL[facts.diabetesType.verdict]}｜\${facts.diabetesType.note}\`);
    const icd = [...facts.diabetesType.type1IcdCodes, ...facts.diabetesType.type2IcdCodes];
    if (icd.length) lines.push(\`  相關診斷碼：\${icd.join("、")}\`);
    lines.push("");
  }

  // 只列推導得出的目標值。推導依據、出處與「需醫療團隊確認」這類警語刻意不印——
  // 這是給醫師看的報告，目標值本來就由他決定，把程式的推理過程貼上去只是雜訊。
  // 目標名稱也用檢驗報告的縮寫，和第四節一致。
  const METRIC_LABEL: Record<string, string> = {
    血壓: "BP",
    低密度脂蛋白膽固醇: "LDL-C",
    高密度脂蛋白膽固醇: "HDL-C",
    三酸甘油酯: "TG",
    糖化血色素: "HbA1c",
    空腹血糖: "Glucose AC",
    餐後血糖: "Glucose PC",
  };
  const decided = plan.targets.targets.filter((item) => item.value);
  if (decided.length) {
    lines.push(\`\${section("依指引推導的個別化目標")}　來源：\${RULES_SOURCE}\`);
    for (const item of decided) {
      const rule = item.ruleId ? RULES_BY_ID.get(item.ruleId) : undefined;
      lines.push(\`  \${METRIC_LABEL[item.metric] ?? item.metric}：\${rule?.targetValue ?? item.value}\${rule ? \`　〔\${citationShort(rule)}〕\` : ""}\`);
    }
    lines.push("");
  }

  // 追蹤間隔是醫師要開單的依據，先前只出現在病人版，而且病人版用的是
  // 白話說法（「每年做一次足部感覺檢查」）。醫師版用原本的事實陳述並附出處。
  if (plan.followUp.rules.length) {
    lines.push(section("依指引的追蹤間隔"));
    lines.push(...followUpForClinician(plan.followUp.rules));
    lines.push("");
  }

  // 只保留病人特有的安全提示。申報資料的通則性限制（檢驗只有費用年月、申報用藥
  // 不等於目前用藥等）刻意不列——那些每份報告都一樣，醫師本來就知道，列了只是雜訊。
  const disagreements = plan.selection?.disagreements ?? [];
  const offTarget = outOfTargetOnly(plan.targetComparisons);
  if (plan.targets.safetyFlags.length || plan.labThresholds.length || offTarget.length || disagreements.length) {
    lines.push(section("需核實的檢驗結果"));
    // 依嚴重度排，不依插入順序——先前 [參考] 會排在 [優先核實] 前面。
    const RANK = { urgent: 0, attention: 1, info: 2 } as const;
    const rows: Array<{ severity: "info" | "attention" | "urgent"; text: string }> = [];
    for (const item of offTarget) {
      rows.push({
        severity: item.severity,
        text: \`\${item.clinicianMessage}\${item.citationShort ? \`　〔\${item.citationShort}〕\` : ""}\`,
      });
    }
    // 由實際數值觸發的門檻判定排在最前面，因為它們最具體。
    for (const hit of plan.labThresholds) {
      const rule = hit.ruleId ? RULES_BY_ID.get(hit.ruleId) : undefined;
      rows.push({
        severity: hit.severity,
        text: \`\${hit.clinicianMessage}\${rule ? \`　〔\${citationShort(rule)}〕\` : ""}\`,
      });
    }
    // 帶實際數值的判定已經涵蓋通則版本，兩則並列等於同一件事講兩次。
    // 具體那則（帶實際數值）涵蓋通則版；完全沒有 HbA1c 時談它可不可信也沒有意義。
    const supersededFlags =
      plan.labThresholds.some((hit) => hit.code === "hba1c-unreliable" || hit.code === "hba1c-missing")
        ? new Set(["hba1c-reliability"])
        : new Set<string>();
    for (const flag of plan.targets.safetyFlags) {
      if (supersededFlags.has(flag.code)) continue;
      const rule = flag.ruleId ? RULES_BY_ID.get(flag.ruleId) : undefined;
      rows.push({
        severity: flag.severity,
        text: \`\${flag.message}\${rule ? \`　〔\${citationShort(rule)}〕\` : ""}\`,
      });
    }
    rows.sort((a, b) => RANK[a.severity] - RANK[b.severity]);
    for (const row of rows) lines.push(\`  [\${SEVERITY_LABEL[row.severity]}] \${row.text}\`);
    // 輔助判讀器對程式判定的異議很少出現；一旦出現就是需要人看的訊號。
    for (const item of disagreements) {
      lines.push(\`  [異議] \${item.topic}｜程式：\${item.program_decision}\`);
      lines.push(\`    LLM：\${item.your_view}\`);
    }
    lines.push("");
  }

  // 檢驗結果合併成一節。分成「程式依指引判的」與「判讀器判的」兩節，
  // 會讓血鈉、血鉀、血糖在同一份報告出現兩次——來源不同，但醫師看到的是同一個數字。
  if (plan.labNotesForClinician.length || options.labReview) {
    lines.push(section("檢驗結果"));
    if (plan.labNotesForClinician.length) {
      lines.push("  依指引門檻表逐條判定的核心指標：");
      for (const note of plan.labNotesForClinician) lines.push(\`  \${note}\`);
    }
    if (options.labReview) {
      lines.push(formatLabReview(options.labReview, new Set(plan.evaluatedAnalyteKeys)));
    }
    lines.push("");
  }

  return lines.join("\\n").trimEnd();
}

/** 舊名保留，供既有呼叫端使用。 */
export const assembleClinicianTrace = assembleClinicianReport;

export { EDUCATION_MODULES };

/** 把程式已完成的主題判定寫成文字，讓輔助判讀器知道哪些已納入。 */
export function decisionsForPrompt(plan: ResolvedPlan): string {
  const lines: string[] = ["【程式已完成的主題判定（不可更改）】"];
  for (const item of plan.decisions) {
    const label =
      item.kind === "established"
        ? "已納入・已發生"
        : item.kind === "prevention-active"
          ? "已納入・積極照護"
            : item.kind === "prevention-moderate"
              ? "已納入・適度介入"
              : "未納入";
    lines.push(\`\${item.moduleId}（R\${item.topic} \${item.topicName}）：\${label}｜\${item.reason}\`);
  }
  lines.push("", "【程式已納入的自我照護模組】");
  for (const id of plan.selfCareModuleIds) lines.push(\`\${id}：\${plan.selfCareReasons[id] ?? ""}\`);
  lines.push("", "【程式推導的個別化目標】");
  for (const item of plan.targets.targets) {
    lines.push(\`\${item.metric}：\${item.value ?? "需醫療團隊定案"}（\${item.reason}）\`);
  }
  if (plan.targets.undetermined.length) {
    lines.push("", "【資料不足無法判定】");
    for (const item of plan.targets.undetermined) lines.push(\`- \${item}\`);
  }
  return lines.join("\\n");
}
`,De=`/**
 * 檢驗判讀：由 LLM 直接讀原始申報紀錄判斷異常。
 *
 * 為什麼是 LLM 而不是規則：健保申報的檢驗資料很髒。實測五位病人 9,001 筆紀錄，
 * 16.3% 的單位是 \`無\`／\`NIL\`／\`N\` 這類佔位字、16.1% 的值不是數字、29.1% 沒有可用
 * 參考值、還有亂碼項目名稱。參考值有 5 種寫法、值有 5 種形態。
 *
 * 更關鍵的是「不知道自己不知道」：開發過程中規則式解析連續踩了四個坑
 * （Sugar(One touch) 整批漏抓、\`[7-25][7-25]\` 被讀成 7~7、尿液 WBC 與血液 WBC
 * 併成同一項、eAG 換算值被當成實測血糖），每一個都是事後才發現，而其中一個是
 * 安靜地判錯而不是安靜地漏掉。3000 位病人不會有人去核對。
 *
 * 所以判定交給 LLM。程式只做一件不涉及判斷的事：**驗證它引用的數值與項目名稱
 * 確實出現在來源裡**。那是抄寫檢查，不是重新判讀——因為在這個量級，唯一比
 * 「漏掉」更糟的是「看起來合理但不存在的數字」。
 */

import { analyteForItemName } from "./lab-findings.ts";
import type { LabItemFact, PatientFacts } from "./patient-facts.ts";

export const LAB_REVIEW_PROMPT = \`你是協助整理檢驗報告的助手，讀者是忙碌的醫師。

輸入分兩部分：先是這位病人的基本資料（含性別 gender 與生日 birthday，以及已發生併發症 R 與風險預測 PR 的原始欄位），接著是健保申報檢驗紀錄原文，每一筆包含項目名稱、數值、單位與來源提供的參考值。

輸入不含用藥資料。不要推測或提及任何藥物。

請直接讀這些紀錄，判斷哪些項目異常，並整理成醫師 60 秒內看得完的形式。

**只列出與糖尿病長期照護有關的異常。**判斷標準有兩層，兩層都要通過：

第一層，這個異常要跟糖尿病有關——是糖尿病或其併發症造成的、會影響糖尿病治療決策、或會影響糖尿病用藥安全。包括血糖與糖化血色素、腎功能與尿液白蛋白、血脂、肝功能、電解質、與腎病變相關的貧血。

第二層，這個異常要能代表**持續的狀態**，而不是某一次急性事件的當下切片。這批紀錄沒有採檢日期，無法分辨一筆數值是本月測的還是兩年前住院時測的。因此只反映當下急性狀況的項目一律不列，即使數值再誇張：白血球與白血球分類、發炎指標、細菌培養、血液氣體與酸鹼、血液滲透壓、凝血功能。那些沒有時間點就無法判讀，列出來只會讓人誤以為是目前狀態。

其他與糖尿病無關的異常也不要列出：心肌指標、腫瘤標記、甲狀腺功能、與腎病變無關的血液學異常。醫師會另外看那些；放進這份報告只會讓真正要看的東西被淹沒。

判讀原則：
- 以每一筆自己帶的參考值為主要依據。參考值有多種寫法，例如上下限分放兩格、兩格各放整段區間、不等式、或純文字說明；也有很多筆根本沒有參考值。
- 糖尿病人的血糖與糖化血色素要用糖尿病控制目標判讀，不可直接套用健康人的參考範圍。空腹血糖目標 80–130 mg/dL、糖化血色素一般成人低於 7.0%（高齡者依健康狀態放寬）。
- 尿液檢查與血液檢查是不同東西。同名項目（例如 WBC、Glucose）出現在尿液與血液時，判讀依據完全不同，不可混為一談。
- 由 HbA1c 換算出來的估計平均血糖（eAG）不是實測血糖。
- 資料很髒。單位可能是「無」「NIL」這種佔位字、值可能是文字或陰陽性符號、項目名稱可能有亂碼。看不懂的就說看不懂，不要硬猜。

嚴格限制：
- 只能使用輸入中實際出現的項目名稱與數值。每一個數值都會被逐一比對來源，寫出來源沒有的數字會被標記出來。
- worst 欄位只放一個數值。把兩個值寫成一個字串會讓比對失敗，該筆會被標記為不可信。
- 半定量與定性結果（例如尿蛋白 3+、潛血 4+、(-)、Negative）也要判讀，不要因為不是數字就略過。
- 參考值若依年齡或性別分層（例如 [0-14d] … [15-30d] … [≧18y]M 4-5.52 F 3.78-4.99 這種寫法），必須依開頭基本資料的 gender 與 birthday 算出本人的年齡層與性別，取對應的那一段判讀，不要用第一段，也不要兩段都列。判讀理由中要寫出你用的是哪一段。
- 參考值若標註修訂日期（例如「2019/7/1起 ≧18years 變更為 …」），一律以修訂後的區間為準。
- 不得推測診斷，不得提出處置建議。
- 這些紀錄只有費用年月、沒有採檢日期，不得敘述趨勢、先後順序或「最近一次」。
- 數值可能來自兩年前的急性事件，不得當成目前狀態。
- 若某一組看起來是急性事件、檢體條件或資料標示問題而非臨床發現，就直說，不要硬掰意義。

輸出格式：只輸出一個 JSON 物件，不要加說明文字或程式碼圍籬。

{
  "abnormal": [
    {
      "item": "項目名稱，逐字照抄",
      "worst": "最偏離的那一個數值，逐字照抄。只放一個值，不要寫成「A (high) / B (low)」，高低都有時把較嚴重的放這裡、另一個放 worst_other",
      "worst_other": "另一個方向的極值，沒有就填空字串",
      "unit": "單位，沒有就填空字串",
      "reference": "該筆的參考值原文",
      "direction": "high | low | both",
      "why": "為什麼判為異常，30 字以內"
    }
  ],
  "groups": [
    { "system": "系統名稱", "items": ["項目名稱"], "pattern": "一句話描述整體型態，並說明它與糖尿病的關聯" }
  ],
  "worth_a_look": ["值得醫師優先看的組合與理由，每則 60 字以內"],
  "data_quality_notes": ["讀的過程中發現的資料品質問題，每則 60 字以內；沒有則留空陣列"]
}\`;

export type LabAbnormal = {
  item: string;
  worst: string;
  worstOther: string;
  unit: string;
  reference: string;
  direction: string;
  why: string;
};

export type LabReview = {
  abnormal: LabAbnormal[];
  groups: Array<{ system: string; items: string[]; pattern: string }>;
  worth_a_look: string[];
  data_quality_notes: string[];
};

/**
 * 判讀器只拿到項目名稱，分不出檢體。程式知道——醫令 06012C／06013C 是尿液。
 * 「RBC ＞1000 /uL」是血尿，和血液 RBC 並列在同一張表裡會被誤讀。
 */
const URINE_ORDER_CODES = /^(06012C|06013C)$/;

export type LabReviewCheck = {
  review: LabReview;
  /** 引用了來源中找不到的數值 */
  unverifiedValues: LabAbnormal[];
  /** 引用了來源中沒有的項目名稱 */
  unknownItems: string[];
  /** 來源中實際存在的檢驗筆數，用來說明判讀涵蓋範圍 */
  sourceRecords: number;
};

function numeric(raw: string): string | null {
  const match = String(raw).trim().match(/-?\\d+(?:\\.\\d+)?/);
  return match ? String(Number(match[0])) : null;
}

/**
 * 交給判讀器的輸入：基本資料 + 檢驗紀錄，**不含用藥**。
 *
 * 基本資料必須帶：這批資料的參考值是分層的，例如
 * \`[≧18y]M 4-5.52 F 3.78-4.99\`。不知道年齡與性別就選不出該用哪一段，
 * 而 prompt 又要求它選——先前是切在【檢驗與檢查紀錄】，把人口學資料
 * 整塊切掉了，等於下了一條做不到的指令。
 *
 * 用藥刻意不帶：metformin×eGFR 這類連動已經是規則表裡的確定性判定且附出處，
 * 讓判讀器也看到藥會產出第二份同主題意見而無仲裁機制；而且申報用藥可能
 * 停在兩年前，會誘導它推理「目前療法」——那正是 prompt 禁止的事。
 * 用藥段也是整份輸入最大的一塊（實測一位病人佔 93%）。
 */
export function labSectionOf(llmText: string): string {
  const start = llmText.indexOf("【檢驗與檢查紀錄】");
  if (start === -1) return "";
  const end = llmText.indexOf("【其他來源的非空紀錄】", start);
  const labs = llmText.slice(start, end === -1 ? undefined : end);

  // 用藥紀錄之前的所有區塊：基本資料、DCSI 與 R/PR、資料來源概況。
  const headerEnd = llmText.indexOf("【用藥紀錄】");
  const header = headerEnd === -1 ? "" : llmText.slice(0, headerEnd).trimEnd();
  return header ? \`\${header}\\n\\n\${labs}\` : labs;
}

/**
 * 解析並驗證 LLM 的判讀。
 *
 * 刻意**不刪除**它判定的異常——判定是它的職責，程式不覆寫。
 * 但引用不存在的數值或項目會被標記出來，讓醫師知道哪幾筆不可信。
 */
export function parseLabReview(raw: string, facts: PatientFacts): LabReviewCheck {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`/i);
  const candidate = fenced ? fenced[1].trim() : trimmed;

  let parsed: unknown;
  try {
    parsed = JSON.parse(candidate);
  } catch {
    const first = candidate.indexOf("{");
    const last = candidate.lastIndexOf("}");
    if (first === -1 || last <= first) throw new Error("檢驗判讀器沒有回傳可解析的 JSON。");
    parsed = JSON.parse(candidate.slice(first, last + 1));
  }
  const record = (parsed ?? {}) as Record<string, unknown>;

  const strings = (value: unknown): string[] =>
    Array.isArray(value) ? value.filter((item) => typeof item === "string").map(String) : [];

  const abnormal: LabAbnormal[] = (Array.isArray(record.abnormal) ? record.abnormal : [])
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
    .map((item) => ({
      item: String(item.item ?? "").trim(),
      worst: String(item.worst ?? "").trim(),
      worstOther: String(item.worst_other ?? "").trim(),
      unit: String(item.unit ?? "").trim(),
      reference: String(item.reference ?? "").trim(),
      direction: String(item.direction ?? "").trim(),
      why: String(item.why ?? "").trim(),
    }))
    .filter((item) => item.item);

  // 來源中實際存在的項目名稱與數值
  const sourceItems = new Set(facts.labItems.map((item) => item.itemName));
  const sourceValues = new Set<string>();
  let sourceRecords = 0;
  for (const item of facts.labItems) {
    for (const value of item.rawValues) {
      sourceRecords += 1;
      const n = numeric(value);
      if (n !== null) sourceValues.add(n);
    }
  }

  // 只檢查「有解析出數字」的引用。定性結果（3+、(-)、Negative）沒有數字可比，
  // 不能因此判為不可信——那是判讀器的職責範圍，不是抄寫問題。
  const unverifiedValues = abnormal.filter((item) => {
    for (const field of [item.worst, item.worstOther]) {
      if (!field) continue;
      const n = numeric(field);
      if (n !== null && !sourceValues.has(n)) return true;
    }
    return false;
  });
  const unknownItems = [...new Set(abnormal.map((item) => item.item).filter((name) => !sourceItems.has(name)))];

  /**
   * 依來源的醫令代碼標出尿液檢體。判讀器只拿到項目名稱，分不出來；程式分得出來。
   *
   * 要連單位一起比對：同一位病人的 RBC 同時存在於血液（x10^6/ul）與尿液（/uL），
   * 只比名稱會把血液那筆也標成尿液。名稱在來源中全部都是尿液時才可以只看名稱。
   */
  const isUrine = (item: LabItemFact) => item.orderCodes.some((code) => URINE_ORDER_CODES.test(code));
  const byName = new Map<string, LabItemFact[]>();
  for (const item of facts.labItems) {
    byName.set(item.itemName, [...(byName.get(item.itemName) ?? []), item]);
  }
  for (const item of abnormal) {
    if (/尿|urine|dipstick/i.test(item.item)) continue;
    const sameName = byName.get(item.item) ?? [];
    if (!sameName.length) continue;
    // 同名可能同時存在於血液與尿液（RBC 就是）。用引用的數值找出是哪一筆——
    // 判讀器的輸出不一定帶單位，但數值一定帶，而抄寫檢查本來就在比對數值。
    const matched = sameName.filter((source) =>
      [item.worst, item.worstOther].some(
        (value) => value && source.rawValues.some((raw) => raw.trim() === value.trim() || numeric(raw) === numeric(value)),
      ),
    );
    const decisive = matched.length ? matched : sameName;
    if (decisive.every(isUrine)) item.item = \`\${item.item}（尿液）\`;
  }

  return {
    review: {
      abnormal,
      groups: (Array.isArray(record.groups) ? record.groups : [])
        .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
        .map((item) => ({
          system: String(item.system ?? "").trim(),
          items: (Array.isArray(item.items) ? item.items : []).map(String),
          pattern: String(item.pattern ?? "").trim(),
        }))
        .filter((item) => item.system),
      worth_a_look: strings(record.worth_a_look),
      data_quality_notes: strings(record.data_quality_notes),
    },
    unverifiedValues,
    unknownItems,
    sourceRecords,
  };
}

/**
 * @param alreadyShown 上一區已經逐條判定過的核心指標，這裡不重複列。
 */
export function formatLabReview(check: LabReviewCheck, alreadyShown: Set<string> = new Set()): string {
  const { review } = check;
  const lines: string[] = [];
  const shown = review.abnormal.filter((item) => {
    const analyte = analyteForItemName(item.item, item.unit || null);
    return !(analyte && alreadyShown.has(analyte));
  });
  lines.push(
    \`  以下由輔助判讀器讀取 \${check.sourceRecords} 筆原始紀錄判定，只列與糖尿病相關且非急性事件當下的異常。\`,
  );

  if (shown.length) {
    for (const item of shown) {
      const unit = item.unit ? \` \${item.unit}\` : "";
      const other = item.worstOther ? \`／另一端 \${item.worstOther}\` : "";
      const flag = check.unverifiedValues.includes(item) ? "  ⚠ 此數值在來源中找不到" : "";
      lines.push(\`  \${item.item}：\${item.worst}\${unit}\${other}（參考 \${item.reference || "來源未提供"}）\${item.why ? \`｜\${item.why}\` : ""}\${flag}\`);
    }
  } else {
    lines.push("  （無其他與糖尿病相關的異常）");
  }

  for (const group of review.groups) {
    lines.push(\`  \${group.system}：\${group.pattern}\`);
  }

  if (review.worth_a_look.length) {
    lines.push("  值得優先看：");
    for (const item of review.worth_a_look) lines.push(\`    - \${item}\`);
  }

  if (review.data_quality_notes.length) {
    lines.push("  判讀器提到的資料品質問題：");
    for (const item of review.data_quality_notes) lines.push(\`    - \${item}\`);
  }

  if (check.unverifiedValues.length || check.unknownItems.length) {
    lines.push("  ⚠ 抄寫檢查：");
    if (check.unverifiedValues.length) {
      lines.push(\`    \${check.unverifiedValues.length} 筆引用的數值在來源中找不到（已於上方逐筆標示）。\`);
    }
    if (check.unknownItems.length) {
      lines.push(\`    來源沒有這些項目名稱：\${check.unknownItems.join("、")}\`);
    }
  }

  return lines.join("\\n");
}
`,Oe=`/**
 * 病人版的檢驗說明：由 LLM 直接寫成連貫的段落。
 *
 * 為什麼不是固定句子：實測比較過兩種做法。只讓 LLM 從已核准的句子庫挑選與排序，
 * 得到的是把「曾出現偏低」和「曾出現偏高」並排的清單，讀者要自己合起來想；
 * 直接生成則會寫出「同一段期間內同時出現過高與過低，是值得討論的情況」。
 * 而且固定句子只涵蓋我們事先想到的項目——同一位病人的血鎂、血磷、白蛋白、
 * 尿蛋白完全不會被提到，因為程式層沒有對應規則。
 *
 * 代價要說清楚：**這一段文字沒有經過醫療團隊逐句核准**，和報告其他部分不同。
 * 因此草稿橫幅會標示它，而且程式對它做兩件事：
 *
 *   1. 逐一比對它引用的每一個數值確實出現在來源紀錄裡
 *   2. 掃描它有沒有踩到禁止事項（推測診斷、處置建議、聲稱時序）
 *
 * 檢查不會改寫它的文字——判定是它的職責。但不通過的部分會被標記出來，
 * 讓人知道哪幾句不可信。
 */

import { GUIDELINE_RULES } from "./guideline-rules.ts";
import { extractLabFindings, missingCoreAnalytes } from "./lab-findings.ts";
import { labSectionOf } from "./lab-llm.ts";
import type { PatientFacts } from "./patient-facts.ts";

export const LAB_NARRATIVE_PROMPT = \`你要為一位第 2 型糖尿病人寫「檢驗數值」這一段衛教內容，讀者是病人本人，不是醫療人員。

輸入分三部分：這位病人的基本資料（含性別 gender 與生日 birthday）、健保申報檢驗紀錄原文、以及一份程式初步判定「可能完全沒有紀錄」的核心指標清單。輸入不含用藥資料，不要推測或提及任何藥物。

**那份清單是待你核對的假設，不是事實。** 它是程式用項目名稱比對出來的，而各院的名稱寫法差很多（同一個檢驗可能寫成 Glu-AC、GLU_AC 或血液及體液葡萄糖），程式曾經因此整批漏抓。請你自己在紀錄裡找一遍：確實找不到的才寫進文中；若你在紀錄裡找到了，就不要說它沒做，並把它列進 found_after_all。

寫作原則：
- 依生理系統分段，例如血糖、腎臟、血液、電解質。同一段裡把相關的數值串起來講，不要一項一句。
- 只寫與糖尿病長期照護有關的項目。與糖尿病無關的異常不要寫，即使數值再誇張。
- 只反映某一次急性事件當下狀態的項目不要寫：白血球與白血球分類、發炎指標、細菌培養、血液氣體與酸鹼、凝血功能。這批紀錄沒有採檢日期，寫了會讓人誤以為是目前狀態。
- 參考值若依年齡或性別分層，依基本資料算出本人的年齡層與性別，取對應的那一段判讀。
- 用一般人看得懂的話。醫學縮寫第一次出現時用中文說明。
- 經你核對後確實找不到的核心指標，每一項都要在文中提到，說明那是評估什麼用的、以及可以在回診時確認是否需要安排。缺檢和異常一樣值得病人知道。
- 清單以外的項目不要說「沒有做」——你只需要核對清單上那幾項。
- 不要寫開場白或結語，只寫這一段本身。

嚴格禁止：
- 不得使用輸入中沒有出現的數值。每一個數字都會被逐一比對來源。
- 不得推測診斷，不得寫出任何病名作為結論。
- 不得提出處置建議，不得叫病人開始、停止、調整任何藥物或治療。
- 不得敘述趨勢、先後順序、「最近一次」、「已改善」、「持續惡化」。這批紀錄只有費用年月、沒有採檢日期。
- 不得把數值寫成目前狀態；數值可能來自兩年前的急性事件。

輸出格式：只輸出一個 JSON 物件，不要加說明文字或程式碼圍籬。

{
  "narrative": "整段內容，段落之間用 \\\\n\\\\n 分隔",
  "cited_values": [
    { "item": "項目名稱，逐字照抄來源", "value": "你在文中引用的數值，逐字照抄" }
  ],
  "found_after_all": [
    { "item": "程式說沒有、但你在紀錄中找到的核心指標", "as": "它在紀錄中實際的項目名稱" }
  ]
}\`;

/**
 * 敘述器的完整輸入。網頁與管線共用同一個組裝函式——先前兩邊各自拼字串，
 * 只要有一邊忘了加缺檢清單，那一邊的輸出就會少一段而沒有任何症狀。
 */
export function buildNarrativeInput(llmText: string, facts: PatientFacts): string {
  const missing = missingCoreAnalytes(extractLabFindings(facts));
  return [
    labSectionOf(llmText),
    "【程式初步判定：可能完全沒有紀錄的核心指標（待你核對）】",
    missing.length ? missing.map((item) => \`- \${item}\`).join("\\n") : "（無，核心指標都有紀錄）",
  ].join("\\n\\n");
}

export type LabNarrativeCheck = {
  narrative: string;
  /**
   * 程式判定為缺檢、但敘述器在原始紀錄中找到的項目。
   *
   * 這是給我們看的訊號，不是給病人的：出現任何一筆就代表項目名稱比對有漏，
   * 而那個漏會同時影響門檻判定與模組觸發。實測就發生過 63 筆 Glu-AC 漏抓，
   * 導致報告寫「最低 68」而真正的最低是 20 mg/dL。
   */
  foundAfterAll: Array<{ item: string; as: string }>;
  /** 引用了來源中找不到的數值 */
  unverifiedValues: Array<{ item: string; value: string }>;
  /** 文中出現但沒有列進 cited_values 的數字 */
  uncitedNumbers: string[];
  /** 踩到禁止事項的句子 */
  bannedPhrases: string[];
};

/**
 * 禁止事項的偵測樣式。
 *
 * 刻意只抓「明確違規」而不抓「可能違規」——誤報會讓標記失去意義，
 * 而這個標記的用途是告訴人「這幾句不可信」，必須夠準才有人看。
 */
const BANNED = [
  { pattern: /最近一次|最新一筆|目前的?數值為|已(改善|惡化)|持續(上升|下降|惡化)|趨勢/, label: "聲稱時序或趨勢" },
  { pattern: /建議(您)?(開始|停用|停止|加|減|換|調整).{0,6}(藥|劑量|治療)|應(停用|加藥|減量)/, label: "處置建議" },
  { pattern: /(診斷為|確診為|罹患了|您(有|患有)).{0,10}(症|病變|症候群)/, label: "推測診斷" },
];

/** 文中允許出現、不必列入 cited_values 的數字（分級、電話、份量等）。 */
const ALLOWED_NUMBERS = new Set(["1", "2", "3", "4", "5", "15", "24", "119", "1925"]);

/**
 * 指引門檻表裡出現過的數字。敘述提到「一般目標低於 7.0%」「飯前 80–130」時
 * 那些不是病人的檢驗值，但也不能無條件放行——它們必須真的來自門檻表，
 * 否則就是模型自己編的目標值。這和醫師版那條「印出的百分比必須在門檻表中
 * 找得到」是同一個檢查。
 */
const GUIDELINE_NUMBERS = new Set(
  GUIDELINE_RULES.flatMap((rule) =>
    [...\`\${rule.statement} \${rule.targetValue ?? ""} \${rule.patientStatement ?? ""}\`.matchAll(
      /(?<![\\d.])\\d+(?:\\.\\d+)?(?![\\d.])/g,
    )].map((match) => String(Number(match[0]))),
  ),
);

function numeric(raw: string): string | null {
  const match = String(raw).trim().match(/-?\\d+(?:\\.\\d+)?/);
  return match ? String(Number(match[0])) : null;
}

export function parseLabNarrative(raw: string, facts: PatientFacts): LabNarrativeCheck {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`/i);
  const candidate = fenced ? fenced[1].trim() : trimmed;

  let parsed: unknown;
  try {
    parsed = JSON.parse(candidate);
  } catch {
    const first = candidate.indexOf("{");
    const last = candidate.lastIndexOf("}");
    if (first === -1 || last <= first) throw new Error("檢驗敘述器沒有回傳可解析的 JSON。");
    parsed = JSON.parse(candidate.slice(first, last + 1));
  }
  const record = (parsed ?? {}) as Record<string, unknown>;
  const narrative = String(record.narrative ?? "").trim();

  const cited = (Array.isArray(record.cited_values) ? record.cited_values : [])
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
    .map((item) => ({ item: String(item.item ?? "").trim(), value: String(item.value ?? "").trim() }))
    .filter((item) => item.value);

  // 來源中實際存在的數值
  const sourceValues = new Set<string>();
  for (const item of facts.labItems) {
    for (const value of item.rawValues) {
      const n = numeric(value);
      if (n !== null) sourceValues.add(n);
    }
  }

  const unverifiedValues = cited.filter((item) => {
    const n = numeric(item.value);
    return n !== null && !sourceValues.has(n);
  });

  // 文中每一個數字都要能對應到 cited_values 或允許清單，否則就是沒被驗證過的數字
  const citedNumbers = new Set(cited.map((item) => numeric(item.value)).filter((n): n is string => n !== null));
  const uncitedNumbers = [
    ...new Set(
      [...narrative.matchAll(/(?<![\\d.])\\d+(?:\\.\\d+)?(?![\\d.])/g)]
        .map((match) => match[0])
        .filter((raw) => {
          const n = numeric(raw);
          return n !== null && !citedNumbers.has(n) && !ALLOWED_NUMBERS.has(n) && !GUIDELINE_NUMBERS.has(n);
        }),
    ),
  ];

  const bannedPhrases = BANNED.filter((rule) => rule.pattern.test(narrative)).map((rule) => rule.label);

  const foundAfterAll = (Array.isArray(record.found_after_all) ? record.found_after_all : [])
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
    .map((item) => ({ item: String(item.item ?? "").trim(), as: String(item.as ?? "").trim() }))
    .filter((item) => item.item);

  return { narrative, foundAfterAll, unverifiedValues, uncitedNumbers, bannedPhrases };
}

/** 病人版渲染。檢查不通過的部分會被標示出來，但文字本身不改寫。 */
export function formatLabNarrative(check: LabNarrativeCheck): string[] {
  const lines = [check.narrative];
  const problems: string[] = [];
  if (check.unverifiedValues.length) {
    problems.push(\`引用了來源中找不到的數值：\${check.unverifiedValues.map((v) => \`\${v.item} \${v.value}\`).join("、")}\`);
  }
  if (check.uncitedNumbers.length) {
    problems.push(\`文中這些數字既不在引用清單也不在指引門檻表，未經比對：\${check.uncitedNumbers.join("、")}\`);
  }
  if (check.bannedPhrases.length) {
    problems.push(\`可能踩到禁止事項：\${check.bannedPhrases.join("、")}\`);
  }
  if (check.foundAfterAll.length) {
    problems.push(
      \`程式判定為缺檢但實際存在：\${check.foundAfterAll.map((v) => \`\${v.item}（紀錄中寫作 \${v.as}）\`).join("、")}——項目名稱比對有漏，需修正\`,
    );
  }
  if (problems.length) {
    lines.push("", \`⚠ 這一段未通過自動檢查，不可直接提供給病人：\${problems.join("；")}\`);
  }
  return lines;
}
`,ke=`/**
 * 第四層：確定性輸出驗證器。
 *
 * 這裡只檢查「可以用程式 100% 判定」的事。判斷語氣、可讀性、臨床合理性
 * 仍然需要人或 LLM 稽核——但那些不應該和這些機械規則混在一起評分。
 *
 * 用途有二：
 *   1. 在 LLM 稽核之前先跑，把機械違規直接標出來。
 *   2. 作為 A/B/C 比較的評分器。它不會漂移，所以跨 arm 的分數可以直接比較。
 */

export type CheckId =
  | "no-symbol-bullets"
  | "no-markdown-emphasis"
  | "no-risk-labels"
  | "no-internal-codes"
  | "required-headings"
  | "single-separator"
  | "pr-omitted-when-r-positive"
  | "iso-report-date"
  | "numbers-supported"
  | "no-self-medication-change"
  | "evidence-sources";

export type CheckResult = {
  id: CheckId;
  label: string;
  passed: boolean;
  /** 違規的具體位置與內容，最多列 10 筆 */
  violations: string[];
  /** 這項檢查是否適用於目前的 profile */
  applicable: boolean;
};

export type ValidationReport = {
  profile: ValidationProfile;
  results: CheckResult[];
  applicableCount: number;
  passedCount: number;
  /** 通過率，0–1。分母只算適用的檢查。 */
  score: number;
};

export type ValidationProfile = "v14" | "workbench" | "modules";

/**
 * 指引與一般照護中會合法出現、但不會出現在病人申報資料裡的數值。
 * 出現在這份清單裡的數字不會被 numbers-supported 判為捏造。
 * 這份清單本身就是「應該被抽出來管理的門檻值」——目前 v14 prompt 把它們寫死在散文裡。
 */
export const GUIDELINE_TARGET_NUMBERS = new Set([
  "7", "7.0", "7.5", "8", "8.0", "8.5", // HbA1c 目標
  "70", "100", "40", "50", // LDL-C / HDL-C 目標
  "130", "140", "150", "80", "90", // 血壓目標
  "160", "180", "250", // 血糖目標與嚴重高血糖門檻
  "30", "60", "15", "45", // eGFR 分期與 UACR
  "1.73", // eGFR 單位 mL/min/1.73m²
  "65", "80", // 年齡門檻
  "119", "1925", // 緊急電話與安心專線
  "128", // 音叉震動感檢查頻率 128 Hz
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", // 條列編號
  "0", "12", "24", "48",
  "2022", "2024", "2026", // 指引、年鑑與報告年份
]);

const REQUIRED_V14_HEADINGS = [
  "一、觀察與提醒",
  "二、短期目標",
  "三、中期目標",
  "四、並發症預防與照護",
  "五、溫馨叮嚀",
];

const RISK_LABEL_PATTERN = /(高風險|中風險|低風險)/g;
const RISK_LABEL_ALLOWED = /高風險族群/;
const INTERNAL_CODE_PATTERN = /\\b(?:R[1-7]|PR[1-7]|DCSI)\\b|總分|得分|[0-9０-９]\\s*分(?![鐘鍾])/g;
const SELF_MED_CHANGE_PATTERN = /自行(?:停藥|減藥|加藥|換藥|停用|調整劑量|增減劑量|增減藥量|更改劑量|更換藥品)/g;
/**
 * 「不自行停藥」「請勿自行停藥」「切勿自行減藥」都是正確衛教，只有肯定句才是違規。
 * 判定方式：看該次出現前 15 字內有沒有否定詞。
 * 已知限制：前文若因其他原因出現否定詞會漏判，屬於寧可漏報不誤報的取捨。
 */
const NEGATION_NEAR = /[不勿禁避免切別毋]/;
const NEGATION_WINDOW = 15;

function collectLineViolations(text: string, test: (line: string) => string | null): string[] {
  const violations: string[] = [];
  const lines = text.split("\\n");
  for (let index = 0; index < lines.length; index += 1) {
    const hit = test(lines[index]);
    if (hit !== null) violations.push(\`第 \${index + 1} 行：\${hit}\`);
    if (violations.length >= 10) break;
  }
  return violations;
}

function extractNumbers(text: string): string[] {
  return [...text.matchAll(/\\d+(?:\\.\\d+)?/g)].map((match) => match[0]);
}

function check(id: CheckId, label: string, applicable: boolean, violations: string[]): CheckResult {
  return { id, label, applicable, passed: applicable ? violations.length === 0 : true, violations };
}

export type ValidateArgs = {
  report: string;
  /** 生成時實際送進去的病人資料，用來做 numbers-supported */
  patientText: string;
  profile: ValidationProfile;
  /** 已發生併發症為正的項目編號，例如 [2, 4]，用來檢查對應 PR 是否已省略 */
  positiveComplications?: number[];
  /**
   * 由輸入資料合法推導出來、但不會逐字出現的數字，例如以出生日期與報告日期算出的年齡。
   * 不列進來的話 numbers-supported 會把正確的推導誤判為捏造。
   */
  derivedNumbers?: Array<string | number>;
};

/** DRAFT 橫幅是版本標記，不是臨床內容，數字檢查要排除它。 */
function stripBanner(text: string): string {
  return text
    .split("\\n")
    .filter((line) => !line.trimStart().startsWith("※ DRAFT"))
    .join("\\n");
}

export function validateReport(args: ValidateArgs): ValidationReport {
  const { patientText, profile, positiveComplications = [], derivedNumbers = [] } = args;
  const report = stripBanner(args.report);
  const isV14 = profile === "v14";
  const isModules = profile === "modules";
  const results: CheckResult[] = [];

  results.push(
    check(
      "no-symbol-bullets",
      "沒有任何一行以 - * + • ‧ 開頭",
      isV14,
      collectLineViolations(report, (line) => {
        const trimmed = line.trimStart();
        return /^[-*+•‧]\\s/.test(trimmed) ? trimmed.slice(0, 60) : null;
      }),
    ),
  );

  results.push(
    check(
      "no-markdown-emphasis",
      "沒有 Markdown 粗體、標題符號或表格符號",
      isV14,
      collectLineViolations(report, (line) => {
        if (/\\*\\*/.test(line)) return \`使用了 ** ：\${line.trim().slice(0, 60)}\`;
        if (/^\\s*#/.test(line)) return \`使用了 # 標題：\${line.trim().slice(0, 60)}\`;
        if (/\\|.*\\|/.test(line)) return \`疑似表格：\${line.trim().slice(0, 60)}\`;
        return null;
      }),
    ),
  );

  results.push(
    check(
      "no-risk-labels",
      "沒有把高／中／低風險當成分級標籤",
      isV14,
      collectLineViolations(report, (line) => {
        const matches = line.match(RISK_LABEL_PATTERN);
        if (!matches) return null;
        const withoutAllowed = line.replace(new RegExp(RISK_LABEL_ALLOWED.source, "g"), "");
        return RISK_LABEL_PATTERN.test(withoutAllowed) ? line.trim().slice(0, 60) : null;
      }),
    ),
  );

  results.push(
    check(
      "no-internal-codes",
      "病人可見內容沒有 R／PR／DCSI 代碼或分數",
      isV14 || isModules,
      (() => {
        // v14 的醫師版允許代碼，只檢查分隔線之後的病人版。
        const patientSection = isV14 && report.includes("[AI_SECTION_SEPARATOR]")
          ? report.split("[AI_SECTION_SEPARATOR]").slice(1).join("\\n")
          : report;
        return collectLineViolations(patientSection, (line) => {
          const matches = line.match(INTERNAL_CODE_PATTERN);
          return matches ? \`\${matches.join("、")}｜\${line.trim().slice(0, 50)}\` : null;
        });
      })(),
    ),
  );

  results.push(
    check(
      "required-headings",
      "五大標題逐字完整且順序正確",
      isV14,
      (() => {
        const positions = REQUIRED_V14_HEADINGS.map((heading) => ({ heading, at: report.indexOf(heading) }));
        const missing = positions.filter((item) => item.at === -1).map((item) => \`缺少「\${item.heading}」\`);
        if (missing.length) return missing;
        const order = positions.map((item) => item.at);
        const sorted = [...order].sort((a, b) => a - b);
        return order.every((value, index) => value === sorted[index]) ? [] : ["五大標題出現順序與規定不符"];
      })(),
    ),
  );

  results.push(
    check(
      "single-separator",
      "[AI_SECTION_SEPARATOR] 恰好出現一次",
      isV14,
      (() => {
        const count = report.split("[AI_SECTION_SEPARATOR]").length - 1;
        return count === 1 ? [] : [\`出現 \${count} 次\`];
      })(),
    ),
  );

  results.push(
    check(
      "pr-omitted-when-r-positive",
      "已發生併發症的項目不出現在未來風險預測清單",
      isV14 && positiveComplications.length > 0,
      positiveComplications
        .filter((index) => new RegExp(\`PR\${index}\\\\b\`).test(report))
        .map((index) => \`R\${index} 大於 0，但報告中仍出現 PR\${index}\`),
    ),
  );

  results.push(
    check(
      "iso-report-date",
      "報告日期使用 YYYY-MM-DD",
      isV14,
      (() => {
        const badFormats = [...report.matchAll(/\\d{4}\\s*年\\s*\\d{1,2}\\s*月\\s*\\d{1,2}\\s*日|\\d{4}\\/\\d{1,2}\\/\\d{1,2}/g)].map(
          (match) => match[0],
        );
        return badFormats.slice(0, 10).map((item) => \`非 ISO 日期格式：\${item}\`);
      })(),
    ),
  );

  results.push(
    check(
      "numbers-supported",
      "報告中的數字都能在輸入資料或指引目標值中找到",
      true,
      (() => {
        const inputNumbers = new Set(extractNumbers(patientText));
        for (const value of derivedNumbers) inputNumbers.add(String(value));
        const unsupported = new Set<string>();
        for (const value of extractNumbers(report)) {
          if (inputNumbers.has(value)) continue;
          if (GUIDELINE_TARGET_NUMBERS.has(value)) continue;
          unsupported.add(value);
        }
        return [...unsupported].slice(0, 10).map((value) => \`輸入資料中找不到的數字：\${value}\`);
      })(),
    ),
  );

  results.push(
    check(
      "no-self-medication-change",
      "沒有建議病人自行停藥、改藥或調整劑量",
      true,
      collectLineViolations(report, (line) => {
        for (const match of line.matchAll(SELF_MED_CHANGE_PATTERN)) {
          const before = line.slice(Math.max(0, (match.index ?? 0) - NEGATION_WINDOW), match.index);
          if (!NEGATION_NEAR.test(before)) return \`\${match[0]}｜\${line.trim().slice(0, 60)}\`;
        }
        return null;
      }),
    ),
  );

  results.push(
    check(
      "evidence-sources",
      "完整引用兩份來源與免責聲明",
      isV14,
      (() => {
        const missing: string[] = [];
        if (!report.includes("2022第2型糖尿病臨床照護指引")) missing.push("缺少 2022 臨床照護指引來源");
        if (!report.includes("糖尿病年鑑")) missing.push("缺少臺灣糖尿病年鑑來源");
        return missing;
      })(),
    ),
  );

  const applicable = results.filter((item) => item.applicable);
  const passed = applicable.filter((item) => item.passed);

  return {
    profile,
    results,
    applicableCount: applicable.length,
    passedCount: passed.length,
    score: applicable.length ? passed.length / applicable.length : 1,
  };
}

export function summarizeValidation(report: ValidationReport): string {
  const lines = [\`確定性驗證：\${report.passedCount}/\${report.applicableCount} 項通過（\${Math.round(report.score * 100)}%）\`];
  for (const item of report.results) {
    if (!item.applicable) continue;
    lines.push(\`\${item.passed ? "✓" : "✗"} \${item.label}\`);
    for (const violation of item.violations) lines.push(\`    \${violation}\`);
  }
  return lines.join("\\n");
}
`;function Ae(e,t){let n=t,r=t-1;if(r>=0&&e[r].trim().endsWith(`*/`)){for(;r>=0&&!e[r].trim().startsWith(`/*`);)--r;r>=0&&(n=r)}else for(;r>=0&&e[r].trim().startsWith(`//`);)n=r,--r;return n}function je(e,t){let n=e.split(`
`),r=RegExp(`^\\s*(?:export\\s+)?(?:async\\s+)?(?:function|const|type|class)\\s+${t}\\b`),i=n.findIndex(e=>r.test(e));if(i===-1)return null;let a=Ae(n,i),o=0,s=!1;for(let e=i;e<n.length;e+=1){for(let t of n[e])t===`{`||t===`(`||t===`[`?(o+=1,s=!0):(t===`}`||t===`)`||t===`]`)&&--o;if(!s&&n[e].trimEnd().endsWith(`;`)||s&&o<=0)return n.slice(a,e+1).join(`
`)}return null}function U(e,t,n){return t.map(t=>je(e,t)??`// ⚠ 在 ${n} 中找不到 ${t}，可能已改名`).join(`

`)}function Me(e){let t=[];return e.rawInput.trim()?e.parsedJson||t.push({code:`not-json`,message:`這份內容不是可解析的 JSON。`,howToFix:`這條流程需要結構化欄位（R／PR／CKD／檢驗紀錄）才能判定主題與門檻，純文字無法使用。請改上傳原始 JSON。`,hard:!0}):t.push({code:`no-input`,message:`還沒有病人資料。`,howToFix:`上傳健保申報 JSON、貼上 JSON 內容，或按「載入去識別示範」。`,hard:!0}),e.model.trim()||t.push({code:`no-model`,message:`沒有選擇模型。`,howToFix:`在下方選一個模型，或填入自訂模型 ID。`,hard:!0}),e.requiresClientKey&&!e.apiKey.trim()&&t.push({code:`no-key`,message:`這個版本需要在頁面輸入 Gemini API 金鑰。`,howToFix:`在下方貼上金鑰。金鑰只留在這一頁的記憶體，重新整理即清除。`,hard:!0}),e.totalTokens>e.tokenLimit&&t.push({code:`over-limit`,message:`輸入約 ${e.totalTokens.toLocaleString(`zh-TW`)} tokens，超過模型上限 ${e.tokenLimit.toLocaleString(`zh-TW`)}。`,howToFix:`本工具不會自動截斷病人資料。請改用可接受更長輸入的模型，或減少送入的紀錄。`,hard:!0}),t}function Ne(e){return e.some(e=>e.hard)}function Pe(e,t,n){let r=n??{tokens:P(t),method:`estimate`};return{label:e,chars:Te(t),tokens:r.tokens,method:r.method}}function Fe(e){let t=[{label:`① 模組挑選：system prompt`,text:e.selectorPrompt},{label:`① 模組挑選：病人事實摘要`,text:e.factsText},{label:`② 檢驗判讀：system prompt`,text:e.labReviewPrompt},{label:`② 檢驗判讀：檢驗紀錄`,text:e.labText},{label:`③ 檢驗敘述：system prompt`,text:e.narrativePrompt},{label:`③ 檢驗敘述：檢驗紀錄與缺檢清單`,text:e.narrativeText}],n=t.map(e=>Pe(e.label,e.text));return{text:t.map(e=>e.text).join(`

`),systemPrompt:e.selectorPrompt,parts:n,totalChars:n.reduce((e,t)=>e+t.chars,0),totalTokens:n.reduce((e,t)=>e+t.tokens,0)}}var Ie=[`REPORT_DATE`,`BIRTHDAY`,`INDX_DATE`,`SEX`,`P4P`,`HT`,`HL`,`CKD`,`T`,`DCSI`,`AGEGP`,`GRADE`],Le={REPORT_DATE:`報告日期`,BIRTHDAY:`出生日期`,INDX_DATE:`糖尿病指標日期`,SEX:`性別代碼`,P4P:`是否參加糖尿病P4P`,HT:`高血壓`,HL:`高血脂`,CKD:`慢性腎臟病`,T:`糖尿病病程年數`,DCSI:`DCSI總分`,AGEGP:`年齡分組`,GRADE:`整體分級`},W={medication:`用藥紀錄`,labData:`檢驗資料`,chinesemed:`中藥用藥`,imaging:`影像資料`,allergy:`過敏資料`,surgery:`手術資料`,discharge:`出院資料`,medDays:`用藥天數資料`,patientSummary:`病人摘要`,cancerScreening:`癌症篩檢`,adultHealthCheck:`成人健檢`},Re=new Set([`drug_code`,`drug_ing_code`,`func_seq_no`,`fee_ym`,`drug_multi_mark`,`drug_std_qty`,`assay_method`]);function G(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function K(e){return e==null||e===``||e===`null`?`未提供`:typeof e==`object`?JSON.stringify(e):String(e).replaceAll(`\r`,` `).replaceAll(`
`,` `).trim()||`未提供`}function ze(e){return Array.isArray(e)?e.map(ze):G(e)?Object.fromEntries(Object.keys(e).sort().map(t=>[t,ze(e[t])])):e}function Be(e){let t=new Map;for(let n of e){let e=JSON.stringify(ze(n)),r=t.get(e);r?r.count+=1:t.set(e,{record:n,count:1})}return[...t.values()]}function Ve(e,t){let n=Ie.indexOf(e),r=Ie.indexOf(t);if(n!==-1||r!==-1)return n===-1?1:r===-1?-1:n-r;let i=e.match(/^(R|PR)(\d+)$/),a=t.match(/^(R|PR)(\d+)$/);return i&&a?i[1]===a[1]?Number(i[2])-Number(a[2]):i[1]===`R`?-1:1:i?-1:a?1:e.localeCompare(t)}function He(e,t=0){let n=`  `.repeat(t);if(Array.isArray(e))return e.length?e.flatMap((e,r)=>G(e)||Array.isArray(e)?[`${n}- 第 ${r+1} 筆`,...He(e,t+1)]:[`${n}- ${K(e)}`]):[`${n}（空陣列）`];if(G(e)){let r=Object.entries(e);return r.length?r.flatMap(([e,r])=>G(r)||Array.isArray(r)?[`${n}${e}：`,...He(r,t+1)]:[`${n}${e}：${K(r)}`]):[`${n}（空物件）`]}return[`${n}${K(e)}`]}function Ue(e,t){let n=e[t];return G(n)&&Array.isArray(n.rObject)?n.rObject:[]}function We(e){return G(e)?Object.entries(e).filter(([,e])=>e!=null&&e!==``&&e!==`null`).map(([e,t])=>`${e}:${K(t)}`).join(`｜`):K(e)}function Ge(e){if(!G(e))return[`【輸入資料】`,...He(e),``,`【資料使用限制】`,`以上僅重新排版，沒有推定缺少的診斷、日期、用藥狀態或治療資訊。`].join(`
`);if(![`downloadType`,`userInfo`,`userInput`,`rawSources`].some(t=>t in e))return[`【來源JSON欄位】`,...He(e),``,`【資料使用限制】`,`以上保留來源欄位並重新排版；空值或未出現欄位不得自行解讀為0或正常。`].join(`
`);let t=[`【檔案與基本資料】`,`資料匯出類型：${K(e.downloadType)}`],n=G(e.userInfo)?e.userInfo:{},r=G(e.userInput)?e.userInput:{},i=G(e.rawSources)?e.rawSources:{};for(let[e,r]of Object.entries(n))t.push(`${e}：${K(r)}`);t.push(``,`【來源模型欄位】`,`以下保留來源原值；未提供不等同於0。`);let a=Object.keys(r).sort(Ve);a.length||t.push(`未提供來源模型欄位。`);for(let e of a){let n=Le[e]?`（${Le[e]}）`:``;t.push(`${e}${n}：${K(r[e])}`)}t.push(``,`【DCSI與風險欄位說明】`),t.push(`僅保留來源DCSI、R與PR原始欄位；整理階段不重新解釋分數。來源未出現的欄位不得自行補值，也不得直接視為0。`),t.push(``,`【資料來源概況】`);let o=Object.entries(i);o.length||t.push(`未提供rawSources資料來源。`);for(let[e,n]of o){let r=G(n)&&Array.isArray(n.rObject)?n.rObject:[];t.push(`${W[e]??e}（${e}）：${r.length}筆${r.length?``:`，來源為空陣列`}`)}let s=Ue(i,`medication`),c=Be(s),l=new Map;for(let e of c){let t=G(e.record)?e.record:{},n=`${K(t.drug_date).replaceAll(`/`,`-`)}｜${`ICD ${K(t.icd_code)}｜${K(t.icd_cname)}`}`,r=We(Object.fromEntries(Object.entries(t).filter(([e])=>![`drug_date`,`icd_code`,`icd_cname`,`drug_ename`].includes(e)&&!Re.has(e)))),i=l.get(n)??[];i.push({text:r||`原紀錄沒有其他欄位`,count:e.count}),l.set(n,i)}t.push(``,`【用藥紀錄】`),t.push(`來源共${s.length}筆；完全相同紀錄合併後${c.length}筆。重複次數以×N保留；不同欄位不合併。`),s.length||t.push(`未提供用藥紀錄。`);for(let e of[...l.keys()].sort().reverse()){t.push(e);for(let n of l.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}let u=Ue(i,`labData`),d=Be(u),f=new Map;for(let e of d){let t=G(e.record)?e.record:{},n=[K(t.fee_ym),K(t.order_code),K(t.order_name),`檢體或模式:${K(t.inspect_mode)}`].join(`｜`),r=`${K(t.assay_item_name)}=${K(t.assay_value)}`;K(t.unit_data)!==`未提供`&&(r+=` ${K(t.unit_data)}`),r+=`｜參考:${K(t.consult_value)}`;let i=Object.entries(t).filter(([e,t])=>![`fee_ym`,`order_code`,`order_name`,`assay_method`,`inspect_mode`,`assay_item_name`,`assay_value`,`unit_data`,`consult_value`].includes(e)&&!Re.has(e)&&t!=null&&t!==``).map(([e,t])=>`${e}:${K(t)}`);i.length&&(r+=`｜其他欄位:${i.join(`、`)}`);let a=f.get(n)??[];a.push({text:r,count:e.count}),f.set(n,a)}t.push(``,`【檢驗與檢查紀錄】`),t.push(`來源共${u.length}筆；完全相同紀錄合併後${d.length}筆。若來源只有費用年月而沒有採檢日時，不得推定同月份內的先後順序。`),u.length||t.push(`未提供檢驗與檢查紀錄。`);for(let e of[...f.keys()].sort().reverse()){t.push(e);for(let n of f.get(e)??[])t.push(`- ${n.text}${n.count>1?`｜×${n.count}`:``}`)}t.push(``,`【其他來源的非空紀錄】`);let p=0;for(let[e]of o.filter(([e])=>![`medication`,`labData`].includes(e))){let n=Ue(i,e);if(!n.length)continue;p+=n.length;let r=Be(n);t.push(`${W[e]??e}（${e}）：來源${n.length}筆，完全相同紀錄合併後${r.length}筆。`),r.forEach((e,n)=>{t.push(`- ${n+1}. ${We(e.record)}${e.count>1?`｜×${e.count}`:``}`)})}p||t.push(`其餘來源目前沒有可列出的紀錄。`);let m=Object.keys(e).filter(e=>![`downloadType`,`userInfo`,`userInput`,`rawSources`].includes(e));if(m.length){t.push(``,`【其他根層欄位】`);for(let n of m)t.push(`${n}：${K(e[n])}`)}return t.push(``,`【資料使用限制】`),t.push(`以上為來源JSON重新排版；除合併完全相同紀錄外，未刪除不同結果，也未判定哪一筆較可信。重複筆數均以×N保留。`),t.push(`不同檢驗數值可能代表真實病程變化，也可能涉及資料品質；若有疑義，應由醫療人員結合實際採檢時間與臨床狀況確認。`),t.push(`來源未提供的日期、糖尿病類型、診斷、檢驗、用藥狀態或治療資訊不得自行補寫；歷史申報用藥不得直接描述為目前仍在使用。`),t.join(`
`)}var Ke=300;function qe(e,t=Ke){let n=e.replace(/\s+/g,` `).trim();return n.length<=t?n:`${n.slice(0,t)}…（原始回應共 ${n.length} 字，此處僅顯示前 ${t} 字）`}function Je(e,t){let n=t.toLowerCase();return e===429||e>=500?!0:e===400&&(n.includes(`api key not valid`)||n.includes(`api_key_invalid`))?!1:!!(e===400&&(n.includes(`invalid argument`)||n.includes(`invalid_request`)))}function Ye(e,t){let n=t.toLowerCase();return e===400&&(n.includes(`api key not valid`)||n.includes(`api_key_invalid`))?{title:`Gemini 不接受這把 API 金鑰（HTTP 400）`,advice:`請確認貼上的是完整、未過期的金鑰，且該金鑰已啟用 Generative Language API。重新貼一次時注意不要含到前後空白。`}:e===400?{title:`Gemini 認為這次請求的內容或參數有問題（HTTP 400）`,advice:`常見原因是模型 ID 不支援目前的請求格式，或輸入內容含有無法處理的欄位。請對照下方原始錯誤，先試著改用預設模型。`}:e===401||e===403?{title:`這把金鑰沒有呼叫此模型的權限（HTTP `+e+`）`,advice:`請確認金鑰所屬專案已啟用 Generative Language API、未被限制來源網域，且帳單設定允許使用這個模型。`}:e===404?{title:`找不到這個模型 ID（HTTP 404）`,advice:`請確認模型名稱拼寫正確且你的金鑰有權存取。可先切回預設的 gemini-3.6-flash 確認流程本身正常。`}:e===413?{title:`請求內容過大，被拒絕（HTTP 413）`,advice:`檢驗紀錄很多的病人，②③ 兩次呼叫的輸入會很大。本工具不會自動截斷病人資料，需要縮減請由你決定，或改用可接受更長輸入的模型。`}:e===429?{title:`超過配額或速率上限（HTTP 429）`,advice:`每產出一份報告會送出三次呼叫，免費層級的額度用得很快。下方原文會寫明是哪一項配額、上限多少、建議多久後重試。請等額度恢復、改用其他模型，或換一把有額度的金鑰。`}:e===408||e===504||e===524||e===522?{title:`請求逾時（HTTP ${e}）`,advice:`檢驗紀錄多的病人，單次回應可能需要數分鐘，中間的代理層可能先行斷線。可延長逾時上限，或改用回應較快的模型。`}:e===499?{title:`連線在回應完成前被中斷（HTTP 499）`,advice:`多半是瀏覽器或中間代理層提前關閉連線。若發生在輸入很大的病人身上，請比照逾時處理。`}:e>=500?{title:`Gemini 端暫時性錯誤（HTTP ${e}）`,advice:`這不是你的輸入造成的。請稍候重試；若持續發生，改用另一個模型或稍後再跑。`}:{title:`Gemini 回傳 HTTP ${e}`,advice:`請參考下方原始錯誤內容判斷原因。`}}function Xe(e){let t=e.trim();return t&&t.toLowerCase()!==`unknown`?t:``}function q(e){let{status:t=null,apiMessage:n=``,rawBody:r=``,cause:i,timedOut:a=!1}=e,o=Xe(e.statusText??``);if(i instanceof Error&&i.name===`AbortError`&&!a)return{title:`已依你的要求停止這次請求`,advice:`沒有送出任何後續請求；你可以調整設定後重新執行。`,raw:``,status:null,aborted:!0,timedOut:!1,retryable:!1};if(a||i instanceof Error&&i.name===`TimeoutError`)return{title:`等待 Gemini 回應超過設定的時間上限`,advice:`檢驗紀錄多的病人回應時間會明顯拉長。可以延長逾時上限，或改用較快的模型。請求已中止，沒有部分結果。`,raw:i instanceof Error?i.message:``,status:null,aborted:!1,timedOut:!0,retryable:!1};if(i instanceof TypeError)return{title:`瀏覽器無法送出這次請求（網路層失敗）`,advice:`常見原因：網路中斷、瀏覽器擴充功能或企業代理封鎖了對 Gemini 的請求、或 CORS 被擋。請開瀏覽器主控台看是否有被封鎖的紀錄，並試著關閉擴充功能後重試。`,raw:i.message,status:null,aborted:!1,timedOut:!1,retryable:!1};if(t===null)return{title:`請求失敗`,advice:`請參考下方原始錯誤內容。`,raw:i instanceof Error?i.message:String(i??``),status:null,aborted:!1,timedOut:!1,retryable:!1};if(!n&&r){let e=/^\s*<(?:!doctype|html)/i.test(r),n=Ye(t,r);return{title:e?`回應不是 Gemini 的 JSON，而是一頁 HTML（HTTP ${t}${o?` ${o}`:``}）`:n.title,advice:e?`這代表請求沒有走到 Gemini，或在中途被代理層攔下並改回錯誤頁。${n.advice}`:n.advice,raw:qe(r),status:t,aborted:!1,timedOut:!1,retryable:Je(t,r)}}let s=Ye(t,n);return{title:s.title,advice:s.advice,raw:n?qe(n):``,status:t,aborted:!1,timedOut:!1,retryable:Je(t,n)}}var Ze=`https://generativelanguage.googleapis.com/v1/interactions`;function J(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}async function Qe(e){let t=await e.text(),n=null;try{let e=JSON.parse(t);J(e)&&(n=e)}catch{n=null}return{ok:e.ok,status:e.status,statusText:e.statusText,json:n,rawBody:t}}function $e(e){return typeof e.output_text==`string`?e.output_text:typeof e.outputText==`string`?e.outputText:[...Array.isArray(e.steps)?e.steps:[]].reverse().flatMap(e=>!J(e)||e.type!==`model_output`||!Array.isArray(e.content)?[]:e.content).filter(e=>J(e)&&e.type===`text`&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()||(Array.isArray(e.outputs)?e.outputs:[]).flatMap(e=>J(e)&&Array.isArray(e.content)?e.content:[]).filter(e=>J(e)&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()||(Array.isArray(e.candidates)?e.candidates:[]).flatMap(e=>{if(!J(e))return[];let t=e.content;return J(t)&&Array.isArray(t.parts)?t.parts:[]}).filter(e=>J(e)&&typeof e.text==`string`).map(e=>String(e.text)).join(`
`).trim()}function et(e){if(!e)return``;let t=e.error;return J(t)&&typeof t.message==`string`?t.message:typeof e.error==`string`?e.error:``}function tt(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(new DOMException(`timeout`,`TimeoutError`)),t);return{signal:AbortSignal.any([e,n.signal]),timedOut:()=>n.signal.aborted,cleanup:()=>clearTimeout(r)}}var Y=class extends Error{constructor(e){super(e.title),this.name=`GeminiRequestError`,this.failure=e}},nt=4;async function rt(e){let t;for(let n=1;n<=nt;n+=1)try{return await it(e)}catch(r){if(t=r,!(r instanceof Y&&r.failure.retryable&&n<nt))throw r;await new Promise((t,i)=>{let a=setTimeout(t,1500*2**(n-1));e.signal.addEventListener(`abort`,()=>{clearTimeout(a),i(r)},{once:!0})})}throw t}async function it(e){let{apiKey:t,model:n,systemPrompt:r,input:i,signal:a,direct:o,simulate:s}=e,c=tt(a,e.timeoutMs??9e5),l=Date.now();try{if(o&&!t.trim())throw new Y(q({status:null,apiMessage:`這個版本需要在頁面輸入 Gemini API 金鑰。`}));let e=await Qe(o?await fetch(Ze,{method:`POST`,signal:c.signal,headers:{"Content-Type":`application/json`,"x-goog-api-key":t.trim()},body:JSON.stringify({model:n,input:i,system_instruction:r,store:!1})}):await fetch(`/api/gemini`,{method:`POST`,signal:c.signal,headers:{"Content-Type":`application/json`},body:JSON.stringify({apiKey:t,model:n,systemPrompt:r,input:i})}));if(!e.ok)throw new Y(q({status:e.status,statusText:e.statusText,apiMessage:et(e.json),rawBody:e.json?``:e.rawBody}));if(!e.json)throw new Y(q({status:e.status,statusText:e.statusText,rawBody:e.rawBody}));let a=o?$e(e.json):String(e.json.text??``);if(!a.trim())throw new Y(q({status:e.status,apiMessage:et(e.json)||`Gemini 已回應，但回應中找不到文字輸出。`,rawBody:e.json?``:e.rawBody}));return{text:a,usage:J(e.json.usage)?e.json.usage:J(e.json.usage_metadata)?e.json.usage_metadata:null,elapsedMs:Date.now()-l}}catch(e){throw e instanceof Y?e:new Y(q({cause:e,timedOut:c.timedOut()}))}finally{c.cleanup()}}var at={eGFR:`腎絲球過濾率（eGFR）`,UACR:`尿液白蛋白／肌酸酐比值（UACR）`,HbA1c:`糖化血色素（HbA1c）`,"fasting-glucose":`飯前血糖`,"postprandial-glucose":`餐後血糖`,"LDL-C":`低密度脂蛋白膽固醇（LDL-C）`,"HDL-C":`高密度脂蛋白膽固醇（HDL-C）`,triglyceride:`三酸甘油酯`,creatinine:`血清肌酸酐`,potassium:`血鉀`,sodium:`血鈉`,haemoglobin:`血色素（Hb）`,"glucose-unspecified":`血糖（未標示採檢時機）`},ot={eGFR:`eGFR`,UACR:`UACR`,HbA1c:`HbA1c`,"fasting-glucose":`Glucose AC`,"postprandial-glucose":`Glucose PC`,"LDL-C":`LDL-C`,"HDL-C":`HDL-C`,triglyceride:`TG`,creatinine:`Cr`,potassium:`K`,sodium:`Na`,haemoglobin:`Hb`,"glucose-unspecified":`Glucose`},st=[{analyte:`eGFR`,name:/^eGFR(\s*\((MDRD|CKD-EPI)\))?$/i},{analyte:`UACR`,name:/Albumin\s*\/\s*Creatinine/i},{analyte:`HbA1c`,name:/^(HbA1c|Hb\s*A1c)/i,unit:/%/},{analyte:`fasting-glucose`,name:/(Glu(cose)?[-_\s]*AC|Glucose\(AC\)|Sugar[-_\s]*AC|空腹|飯前)/i,unit:/mg\s*\/?\s*d[lL]/i,excludeOrderCodes:/^(06012C|06013C)$/},{analyte:`postprandial-glucose`,name:/(Glu(cose)?[-_\s]*PC|Sugar[-_\s]*PC|餐後|飯後)/i,unit:/mg\s*\/?\s*d[lL]/i,excludeOrderCodes:/^(06012C|06013C)$/},{analyte:`glucose-unspecified`,name:/(glucose|sugar|血糖|葡萄糖)/i,excludeName:/estimated\s+average\s+glucose|\beAG\b/i,unit:/mg\s*\/?\s*d[lL]/i,excludeOrderCodes:/^(06012C|06013C)$/,includeOrderCodes:/^(09005C|09140C)$/},{analyte:`LDL-C`,name:/LDL[-\s]?(cholesterol|Cho)/i,unit:/mg\s*\/?\s*d[lL]/i},{analyte:`HDL-C`,name:/HDL[-\s]?(cholesterol|Cho)/i,unit:/mg\s*\/?\s*d[lL]/i},{analyte:`triglyceride`,name:/Triglyceride/i,unit:/mg\s*\/?\s*d[lL]/i},{analyte:`potassium`,name:/^(K|Potassium|血鉀)$/i,unit:/mmol\s*\/?\s*L/i},{analyte:`sodium`,name:/^(Na|Sodium|血鈉)$/i,unit:/mmol\s*\/?\s*L/i},{analyte:`haemoglobin`,name:/^(H[Bb]|H[ae]?moglobin|H[ae]?moglobin\s*血色素|血色素)$/i,excludeName:/A1c|A1C|糖化/i,unit:/g\s*\/?\s*d[lL]/i},{analyte:`creatinine`,name:/(Creatinine|\bCREA?\b|肌酸酐)/i,excludeName:/eGFR|Dipstick|Albumin\s*\/\s*Creatinine|screening/i,includeOrderCodes:/^09015C$/,excludeOrderCodes:/^(06012C|06013C|13007C)$/,unit:/mg\s*\/?\s*d[lL]/i}];function ct(e){let t=e.trim(),n=t.match(/^([≧≥>＞<＜≦≤]?)\s*(\d+(?:\.\d+)?)/);if(!n)return null;let r=Number(n[2]);if(!Number.isFinite(r))return null;let i=n[1];return{raw:t,value:r,qualifier:i===`≧`||i===`≥`?`>=`:i===`>`||i===`＞`?`>`:i===`≦`||i===`≤`?`<=`:i===`<`||i===`＜`?`<`:`=`}}function lt(e){for(let t of st)if(!(!(t.includeOrderCodes&&e.orderCodes.some(e=>t.includeOrderCodes.test(e)))&&!t.name.test(e.itemName))&&!t.excludeName?.test(e.itemName)&&!(t.excludeOrderCodes&&e.orderCodes.some(e=>t.excludeOrderCodes.test(e)))&&!(t.unit&&!(e.unit&&t.unit.test(e.unit))))return t.analyte;return null}function ut(e){let t=e.filter(e=>e.analyte===`fasting-glucose`||e.analyte===`postprandial-glucose`||e.analyte===`glucose-unspecified`).map(e=>e.min);return t.length?Math.min(...t):null}function dt(e,t){for(let n of st)if(n.name.test(e)&&!n.excludeName?.test(e)&&!(n.unit&&t&&!n.unit.test(t)))return n.analyte;return null}var ft=[[`HbA1c`,`糖化血色素（HbA1c）`],[`eGFR`,`腎絲球過濾率（eGFR）`],[`UACR`,`尿液白蛋白／肌酸酐比值（UACR）`],[`creatinine`,`血清肌酸酐`],[`LDL-C`,`低密度脂蛋白膽固醇`],[`HDL-C`,`高密度脂蛋白膽固醇`],[`triglyceride`,`三酸甘油酯`]];function pt(e){let t=new Set(e.map(e=>e.analyte));return ft.filter(([e])=>!t.has(e)).map(([,e])=>e)}function mt(e){let t=new Map;for(let n of e.labItems){let r=lt(n);if(!r)continue;let i=n.rawValues.map(ct).filter(e=>e!==null);if(!i.length)continue;let a=t.get(r),o=a?[...a.values,...i]:i;t.set(r,{analyte:r,label:at[r],unit:a?.unit??n.unit,values:o,min:Math.min(...o.map(e=>e.value)),max:Math.max(...o.map(e=>e.value)),feeMonths:[...new Set([...a?.feeMonths??[],...n.feeMonths])].sort(),hasDrawDates:e.labHasDrawDates})}return[...t.values()]}function ht(e){if(!e)return``;let t=e.trim();return!t||/^(無|未提供|N\/A|null)$/i.test(t)?``:` ${t.replace(/m\s*[︿^]\s*2|(?<=\d\.\d{2})m2\b/gi,`m²`)}`}function gt(e){let t=[...new Set(e.values.map(e=>e.raw))],n=[...new Set(e.values.filter(e=>e.qualifier!==`=`).map(e=>e.raw))];if(t.length<=3)return t.join(`、`);let r=`${e.min}–${e.max}`;return n.length?`${r}（含 ${n.slice(0,3).join(`、`)}）`:r}function _t(e){let t=e.feeMonths.length?`費用年月 ${e.feeMonths.join(`、`)}`:`來源未提供年月`,n=new Set(e.values.map(e=>e.raw)).size>3?`多次紀錄，`:``;return`${e.label}：${n}${gt(e)}${ht(e.unit)}（${t}）`}function vt(e){let t=e.feeMonths.length?`費用年月 ${e.feeMonths.join(`、`)}`:`來源未提供年月`,n=new Set(e.values.map(e=>e.raw)).size,r=e.analyte===`glucose-unspecified`?`未標示採檢時機，`:``;return`${ot[e.analyte]}：${gt(e)}${ht(e.unit)}（${r}共 ${e.values.length} 筆／${n} 種結果，${t}）`}var yt=`（一般臨床門檻，非本指引條列）`;function bt(e){let t=b.get(e);return t?{statement:t.statement,citation:x(t)}:null}function xt(e,t){let n=[],r=t=>e.find(e=>e.analyte===t),i=e=>e.min===e.max?``:`（範圍 ${e.min}–${e.max}）`,a=(e,t,n)=>[...new Set(e.values.filter(e=>e.value>=t&&e.value<n).map(e=>e.raw))].join(`、`),o=e=>e.min===e.max?``:`，範圍 ${e.min}–${e.max}`,s=r(`eGFR`),c=r(`UACR`),l=s&&s.min<60,u=c&&c.values.some(e=>e.value>300||e.value===300&&e.qualifier===`>=`);if(l||u){let e=[];l&&e.push(`eGFR 曾出現低於 60 的數值（${a(s,0,60)}）`),u&&e.push(`UACR 曾出現達到或超過 300 mg/g 的結果（${[...new Set(c.values.map(e=>e.raw))].join(`、`)}）`);let t=bt(`kidney-intensive-followup`);n.push({code:`kidney-intensive-followup`,analyte:`eGFR`,ruleId:`kidney-intensive-followup`,severity:`attention`,clinicianMessage:`${e.join(`；`)}。依指引${t?.statement??``}`,patientMessage:`您的資料中曾出現腎功能或尿蛋白的異常結果。指引建議這種情況至少每半年追蹤一次，請與醫療團隊確認您目前需要的追蹤頻率。（資料只有費用年月，無法確認這些結果的先後順序或是否為最新。）`,citation:t?.citation??null})}let d=!!(l||u||t.comorbidityFlags.ckd.known&&t.comorbidityFlags.ckd.value),f=r(`haemoglobin`),p=r(`potassium`),m=r(`sodium`),h=[f&&f.max<11?`血色素持續偏低（最高 ${f.max} g/dL）`:``,p&&(p.min<3||p.max>5.5)?`血鉀異常`:``,m&&(m.min<130||m.max>150)?`血鈉異常`:``].filter(Boolean),g=s&&s.min<30?[`eGFR 曾出現低於 30 的數值（最低 ${s.min}）`,...h]:d&&h.length?[`已有腎臟疾病證據`,...h]:[];if(g.length){let e=bt(`referral-nephrology`);n.push({code:`referral-nephrology`,analyte:`eGFR`,ruleId:`referral-nephrology`,severity:`attention`,clinicianMessage:`${g.join(`、`)}。${e?.statement??``}`,patientMessage:null,citation:e?.citation??null})}let _=t.medicationClasses.some(e=>/抗糖尿病|metformin|雙胍|胰島素/i.test(e.atcClass));if(s&&_){if(s.min<30){let e=bt(`metformin-egfr-30`);n.push({code:`metformin-contraindicated`,analyte:`eGFR`,ruleId:`metformin-egfr-30`,severity:`urgent`,clinicianMessage:`eGFR 曾出現低於 30 的數值（最低 ${s.min}）。${e?.statement??``}`,patientMessage:null,citation:e?.citation??null})}else if(s.min<45){let e=bt(`metformin-egfr-30-45`);n.push({code:`metformin-reduce`,analyte:`eGFR`,ruleId:`metformin-egfr-30-45`,severity:`attention`,clinicianMessage:`eGFR 曾出現介於 30–45 的數值（${a(s,30,45)}）。${e?.statement??``}`,patientMessage:null,citation:e?.citation??null})}}let v=r(`potassium`);if(v&&(v.min<3.5||v.max>5.5)){let e=v.min<3.5,t=e?`最低 ${v.min}`:`最高 ${v.max}`;n.push({code:`potassium-abnormal`,analyte:`potassium`,ruleId:null,severity:v.min<3||v.max>6?`urgent`:`attention`,clinicianMessage:`K 曾出現${e?`偏低`:`偏高`}數值（${t}${o(v)} mmol/L）。${yt}`,patientMessage:`您的資料中曾出現${e?`偏低`:`偏高`}的血鉀數值（${t} mmol/L）。血鉀太${e?`低`:`高`}可能影響心跳與肌肉力量${e?`，利尿劑與腹瀉嘔吐都可能造成`:`，腎功能下降時較容易發生`}。這些紀錄沒有檢查日期，請在回診時主動提出。`,citation:null})}let y=r(`sodium`);if(y&&(y.min<130||y.max>150)){let e=y.min<130?`最低 ${y.min}`:`最高 ${y.max}`;n.push({code:`sodium-abnormal`,analyte:`sodium`,ruleId:null,severity:`urgent`,clinicianMessage:`Na 曾出現異常值（${e}${o(y)} mmol/L）。${yt}`,patientMessage:`您的資料中曾出現異常的血鈉數值。這些紀錄沒有檢查日期，請在回診時主動提出，由醫療團隊確認目前狀況。`,citation:null})}let b=r(`eGFR`),x=t.comorbidityFlags.ckd.known&&t.comorbidityFlags.ckd.value===!0?!0:!!(b&&b.min<60),S=r(`haemoglobin`);S&&S.min<11&&n.push({code:`anaemia`,analyte:`haemoglobin`,ruleId:null,severity:S.min<8?`urgent`:`attention`,clinicianMessage:`Hb 曾出現 ${S.min} g/dL${i(S)}${x?`，合併腎功能不全，需考慮腎性貧血`:``}。${yt}`,patientMessage:`您的資料中曾出現偏低的血色素（${S.min} g/dL），也就是貧血。${x?`腎功能下降的人比較容易發生貧血。`:``}貧血可能讓您容易疲倦、喘或頭暈，也會讓糖化血色素這個指標看起來比實際情況好。請在回診時主動提出。`,citation:null});let C=!!(S&&S.max<11),w=r(`HbA1c`);w||n.push({code:`hba1c-missing`,analyte:`HbA1c`,ruleId:`interval-hba1c`,severity:`attention`,clinicianMessage:`資料中沒有糖化血色素紀錄。`,patientMessage:`您的資料中沒有糖化血色素（HbA1c）的紀錄。這是評估一段期間血糖控制的指標，回診時可以確認是否需要安排。`,citation:bt(`interval-hba1c`)?.citation??null}),w&&(x||C)&&n.push({code:`hba1c-unreliable`,analyte:`HbA1c`,ruleId:`hba1c-unreliable`,severity:`attention`,clinicianMessage:`HbA1c ${w.min===w.max?w.min:`${w.min}–${w.max}`} % 在${x?`腎功能不全`:``}${x&&C?`合併`:``}${C?`貧血`:``}的情況下可能低估實際血糖，建議併用自我血糖監測或糖化白蛋白判讀。`,patientMessage:`您的糖化血色素是 ${w.min===w.max?w.min:`${w.min}–${w.max}`}%，看起來在目標範圍內，但這個數字對您可能不準。${x?`腎功能下降`:``}${x&&C?`與`:``}${C?`貧血`:``}都會讓它比實際血糖低。請不要只看這個數字就認為血糖控制良好，回診時請醫療團隊一起看您平時的血糖紀錄。`,citation:null});let T=[r(`fasting-glucose`),r(`postprandial-glucose`),r(`glucose-unspecified`)].filter(e=>!!e),E=T.length?Math.min(...T.map(e=>e.min)):null;E!==null&&E<70&&n.push({code:`hypoglycemia`,analyte:null,ruleId:`hypoglycemia-levels`,severity:E<54?`urgent`:`attention`,clinicianMessage:`Glucose 曾出現 ${E} mg/dL，屬低血糖範圍${E<54?`（低於 54，屬嚴重低血糖）`:``}。`,patientMessage:`您的資料中曾出現偏低的血糖數值。低血糖可能造成發抖、冒冷汗、頭暈或意識改變，請在回診時主動提出，讓醫療團隊了解發生的情況。`,citation:null});let D=r(`glucose-unspecified`);return D&&D.max>=200&&n.push({code:`glucose-unspecified-high`,analyte:`glucose-unspecified`,ruleId:null,severity:D.max>=300?`urgent`:`attention`,clinicianMessage:`Glucose 曾出現 ${D.max} mg/dL${i(D)}。${yt}`,patientMessage:`您的資料中曾出現偏高的血糖數值。這些紀錄沒有註明是飯前還是飯後測的，也沒有檢查日期，請在回診時和醫療團隊一起看實際結果。`,citation:null}),n}var St=`你是協助整理檢驗報告的助手，讀者是忙碌的醫師。

輸入分兩部分：先是這位病人的基本資料（含性別 gender 與生日 birthday，以及已發生併發症 R 與風險預測 PR 的原始欄位），接著是健保申報檢驗紀錄原文，每一筆包含項目名稱、數值、單位與來源提供的參考值。

輸入不含用藥資料。不要推測或提及任何藥物。

請直接讀這些紀錄，判斷哪些項目異常，並整理成醫師 60 秒內看得完的形式。

**只列出與糖尿病長期照護有關的異常。**判斷標準有兩層，兩層都要通過：

第一層，這個異常要跟糖尿病有關——是糖尿病或其併發症造成的、會影響糖尿病治療決策、或會影響糖尿病用藥安全。包括血糖與糖化血色素、腎功能與尿液白蛋白、血脂、肝功能、電解質、與腎病變相關的貧血。

第二層，這個異常要能代表**持續的狀態**，而不是某一次急性事件的當下切片。這批紀錄沒有採檢日期，無法分辨一筆數值是本月測的還是兩年前住院時測的。因此只反映當下急性狀況的項目一律不列，即使數值再誇張：白血球與白血球分類、發炎指標、細菌培養、血液氣體與酸鹼、血液滲透壓、凝血功能。那些沒有時間點就無法判讀，列出來只會讓人誤以為是目前狀態。

其他與糖尿病無關的異常也不要列出：心肌指標、腫瘤標記、甲狀腺功能、與腎病變無關的血液學異常。醫師會另外看那些；放進這份報告只會讓真正要看的東西被淹沒。

判讀原則：
- 以每一筆自己帶的參考值為主要依據。參考值有多種寫法，例如上下限分放兩格、兩格各放整段區間、不等式、或純文字說明；也有很多筆根本沒有參考值。
- 糖尿病人的血糖與糖化血色素要用糖尿病控制目標判讀，不可直接套用健康人的參考範圍。空腹血糖目標 80–130 mg/dL、糖化血色素一般成人低於 7.0%（高齡者依健康狀態放寬）。
- 尿液檢查與血液檢查是不同東西。同名項目（例如 WBC、Glucose）出現在尿液與血液時，判讀依據完全不同，不可混為一談。
- 由 HbA1c 換算出來的估計平均血糖（eAG）不是實測血糖。
- 資料很髒。單位可能是「無」「NIL」這種佔位字、值可能是文字或陰陽性符號、項目名稱可能有亂碼。看不懂的就說看不懂，不要硬猜。

嚴格限制：
- 只能使用輸入中實際出現的項目名稱與數值。每一個數值都會被逐一比對來源，寫出來源沒有的數字會被標記出來。
- worst 欄位只放一個數值。把兩個值寫成一個字串會讓比對失敗，該筆會被標記為不可信。
- 半定量與定性結果（例如尿蛋白 3+、潛血 4+、(-)、Negative）也要判讀，不要因為不是數字就略過。
- 參考值若依年齡或性別分層（例如 [0-14d] … [15-30d] … [≧18y]M 4-5.52 F 3.78-4.99 這種寫法），必須依開頭基本資料的 gender 與 birthday 算出本人的年齡層與性別，取對應的那一段判讀，不要用第一段，也不要兩段都列。判讀理由中要寫出你用的是哪一段。
- 參考值若標註修訂日期（例如「2019/7/1起 ≧18years 變更為 …」），一律以修訂後的區間為準。
- 不得推測診斷，不得提出處置建議。
- 這些紀錄只有費用年月、沒有採檢日期，不得敘述趨勢、先後順序或「最近一次」。
- 數值可能來自兩年前的急性事件，不得當成目前狀態。
- 若某一組看起來是急性事件、檢體條件或資料標示問題而非臨床發現，就直說，不要硬掰意義。

輸出格式：只輸出一個 JSON 物件，不要加說明文字或程式碼圍籬。

{
  "abnormal": [
    {
      "item": "項目名稱，逐字照抄",
      "worst": "最偏離的那一個數值，逐字照抄。只放一個值，不要寫成「A (high) / B (low)」，高低都有時把較嚴重的放這裡、另一個放 worst_other",
      "worst_other": "另一個方向的極值，沒有就填空字串",
      "unit": "單位，沒有就填空字串",
      "reference": "該筆的參考值原文",
      "direction": "high | low | both",
      "why": "為什麼判為異常，30 字以內"
    }
  ],
  "groups": [
    { "system": "系統名稱", "items": ["項目名稱"], "pattern": "一句話描述整體型態，並說明它與糖尿病的關聯" }
  ],
  "worth_a_look": ["值得醫師優先看的組合與理由，每則 60 字以內"],
  "data_quality_notes": ["讀的過程中發現的資料品質問題，每則 60 字以內；沒有則留空陣列"]
}`,Ct=/^(06012C|06013C)$/;function wt(e){let t=String(e).trim().match(/-?\d+(?:\.\d+)?/);return t?String(Number(t[0])):null}function Tt(e){let t=e.indexOf(`【檢驗與檢查紀錄】`);if(t===-1)return``;let n=e.indexOf(`【其他來源的非空紀錄】`,t),r=e.slice(t,n===-1?void 0:n),i=e.indexOf(`【用藥紀錄】`),a=i===-1?``:e.slice(0,i).trimEnd();return a?`${a}\n\n${r}`:r}function Et(e,t){let n=e.trim(),r=n.match(/```(?:json)?\s*([\s\S]*?)```/i),i=r?r[1].trim():n,a;try{a=JSON.parse(i)}catch{let e=i.indexOf(`{`),t=i.lastIndexOf(`}`);if(e===-1||t<=e)throw Error(`檢驗判讀器沒有回傳可解析的 JSON。`);a=JSON.parse(i.slice(e,t+1))}let o=a??{},s=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`).map(String):[],c=(Array.isArray(o.abnormal)?o.abnormal:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({item:String(e.item??``).trim(),worst:String(e.worst??``).trim(),worstOther:String(e.worst_other??``).trim(),unit:String(e.unit??``).trim(),reference:String(e.reference??``).trim(),direction:String(e.direction??``).trim(),why:String(e.why??``).trim()})).filter(e=>e.item),l=new Set(t.labItems.map(e=>e.itemName)),u=new Set,d=0;for(let e of t.labItems)for(let t of e.rawValues){d+=1;let e=wt(t);e!==null&&u.add(e)}let f=c.filter(e=>{for(let t of[e.worst,e.worstOther]){if(!t)continue;let e=wt(t);if(e!==null&&!u.has(e))return!0}return!1}),p=[...new Set(c.map(e=>e.item).filter(e=>!l.has(e)))],m=e=>e.orderCodes.some(e=>Ct.test(e)),h=new Map;for(let e of t.labItems)h.set(e.itemName,[...h.get(e.itemName)??[],e]);for(let e of c){if(/尿|urine|dipstick/i.test(e.item))continue;let t=h.get(e.item)??[];if(!t.length)continue;let n=t.filter(t=>[e.worst,e.worstOther].some(e=>e&&t.rawValues.some(t=>t.trim()===e.trim()||wt(t)===wt(e))));(n.length?n:t).every(m)&&(e.item=`${e.item}（尿液）`)}return{review:{abnormal:c,groups:(Array.isArray(o.groups)?o.groups:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({system:String(e.system??``).trim(),items:(Array.isArray(e.items)?e.items:[]).map(String),pattern:String(e.pattern??``).trim()})).filter(e=>e.system),worth_a_look:s(o.worth_a_look),data_quality_notes:s(o.data_quality_notes)},unverifiedValues:f,unknownItems:p,sourceRecords:d}}function Dt(e,t=new Set){let{review:n}=e,r=[],i=n.abnormal.filter(e=>{let n=dt(e.item,e.unit||null);return!(n&&t.has(n))});if(r.push(`  以下由輔助判讀器讀取 ${e.sourceRecords} 筆原始紀錄判定，只列與糖尿病相關且非急性事件當下的異常。`),i.length)for(let t of i){let n=t.unit?` ${t.unit}`:``,i=t.worstOther?`／另一端 ${t.worstOther}`:``,a=e.unverifiedValues.includes(t)?`  ⚠ 此數值在來源中找不到`:``;r.push(`  ${t.item}：${t.worst}${n}${i}（參考 ${t.reference||`來源未提供`}）${t.why?`｜${t.why}`:``}${a}`)}else r.push(`  （無其他與糖尿病相關的異常）`);for(let e of n.groups)r.push(`  ${e.system}：${e.pattern}`);if(n.worth_a_look.length){r.push(`  值得優先看：`);for(let e of n.worth_a_look)r.push(`    - ${e}`)}if(n.data_quality_notes.length){r.push(`  判讀器提到的資料品質問題：`);for(let e of n.data_quality_notes)r.push(`    - ${e}`)}return(e.unverifiedValues.length||e.unknownItems.length)&&(r.push(`  ⚠ 抄寫檢查：`),e.unverifiedValues.length&&r.push(`    ${e.unverifiedValues.length} 筆引用的數值在來源中找不到（已於上方逐筆標示）。`),e.unknownItems.length&&r.push(`    來源沒有這些項目名稱：${e.unknownItems.join(`、`)}`)),r.join(`
`)}var Ot=`你要為一位第 2 型糖尿病人寫「檢驗數值」這一段衛教內容，讀者是病人本人，不是醫療人員。

輸入分三部分：這位病人的基本資料（含性別 gender 與生日 birthday）、健保申報檢驗紀錄原文、以及一份程式初步判定「可能完全沒有紀錄」的核心指標清單。輸入不含用藥資料，不要推測或提及任何藥物。

**那份清單是待你核對的假設，不是事實。** 它是程式用項目名稱比對出來的，而各院的名稱寫法差很多（同一個檢驗可能寫成 Glu-AC、GLU_AC 或血液及體液葡萄糖），程式曾經因此整批漏抓。請你自己在紀錄裡找一遍：確實找不到的才寫進文中；若你在紀錄裡找到了，就不要說它沒做，並把它列進 found_after_all。

寫作原則：
- 依生理系統分段，例如血糖、腎臟、血液、電解質。同一段裡把相關的數值串起來講，不要一項一句。
- 只寫與糖尿病長期照護有關的項目。與糖尿病無關的異常不要寫，即使數值再誇張。
- 只反映某一次急性事件當下狀態的項目不要寫：白血球與白血球分類、發炎指標、細菌培養、血液氣體與酸鹼、凝血功能。這批紀錄沒有採檢日期，寫了會讓人誤以為是目前狀態。
- 參考值若依年齡或性別分層，依基本資料算出本人的年齡層與性別，取對應的那一段判讀。
- 用一般人看得懂的話。醫學縮寫第一次出現時用中文說明。
- 經你核對後確實找不到的核心指標，每一項都要在文中提到，說明那是評估什麼用的、以及可以在回診時確認是否需要安排。缺檢和異常一樣值得病人知道。
- 清單以外的項目不要說「沒有做」——你只需要核對清單上那幾項。
- 不要寫開場白或結語，只寫這一段本身。

嚴格禁止：
- 不得使用輸入中沒有出現的數值。每一個數字都會被逐一比對來源。
- 不得推測診斷，不得寫出任何病名作為結論。
- 不得提出處置建議，不得叫病人開始、停止、調整任何藥物或治療。
- 不得敘述趨勢、先後順序、「最近一次」、「已改善」、「持續惡化」。這批紀錄只有費用年月、沒有採檢日期。
- 不得把數值寫成目前狀態；數值可能來自兩年前的急性事件。

輸出格式：只輸出一個 JSON 物件，不要加說明文字或程式碼圍籬。

{
  "narrative": "整段內容，段落之間用 \\n\\n 分隔",
  "cited_values": [
    { "item": "項目名稱，逐字照抄來源", "value": "你在文中引用的數值，逐字照抄" }
  ],
  "found_after_all": [
    { "item": "程式說沒有、但你在紀錄中找到的核心指標", "as": "它在紀錄中實際的項目名稱" }
  ]
}`;function kt(e,t){let n=pt(mt(t));return[Tt(e),`【程式初步判定：可能完全沒有紀錄的核心指標（待你核對）】`,n.length?n.map(e=>`- ${e}`).join(`
`):`（無，核心指標都有紀錄）`].join(`

`)}var At=[{pattern:/最近一次|最新一筆|目前的?數值為|已(改善|惡化)|持續(上升|下降|惡化)|趨勢/,label:`聲稱時序或趨勢`},{pattern:/建議(您)?(開始|停用|停止|加|減|換|調整).{0,6}(藥|劑量|治療)|應(停用|加藥|減量)/,label:`處置建議`},{pattern:/(診斷為|確診為|罹患了|您(有|患有)).{0,10}(症|病變|症候群)/,label:`推測診斷`}],jt=new Set([`1`,`2`,`3`,`4`,`5`,`15`,`24`,`119`,`1925`]),Mt=new Set(y.flatMap(e=>[...`${e.statement} ${e.targetValue??``} ${e.patientStatement??``}`.matchAll(/(?<![\d.])\d+(?:\.\d+)?(?![\d.])/g)].map(e=>String(Number(e[0])))));function Nt(e){let t=String(e).trim().match(/-?\d+(?:\.\d+)?/);return t?String(Number(t[0])):null}function Pt(e,t){let n=e.trim(),r=n.match(/```(?:json)?\s*([\s\S]*?)```/i),i=r?r[1].trim():n,a;try{a=JSON.parse(i)}catch{let e=i.indexOf(`{`),t=i.lastIndexOf(`}`);if(e===-1||t<=e)throw Error(`檢驗敘述器沒有回傳可解析的 JSON。`);a=JSON.parse(i.slice(e,t+1))}let o=a??{},s=String(o.narrative??``).trim(),c=(Array.isArray(o.cited_values)?o.cited_values:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({item:String(e.item??``).trim(),value:String(e.value??``).trim()})).filter(e=>e.value),l=new Set;for(let e of t.labItems)for(let t of e.rawValues){let e=Nt(t);e!==null&&l.add(e)}let u=c.filter(e=>{let t=Nt(e.value);return t!==null&&!l.has(t)}),d=new Set(c.map(e=>Nt(e.value)).filter(e=>e!==null)),f=[...new Set([...s.matchAll(/(?<![\d.])\d+(?:\.\d+)?(?![\d.])/g)].map(e=>e[0]).filter(e=>{let t=Nt(e);return t!==null&&!d.has(t)&&!jt.has(t)&&!Mt.has(t)}))],p=At.filter(e=>e.pattern.test(s)).map(e=>e.label);return{narrative:s,foundAfterAll:(Array.isArray(o.found_after_all)?o.found_after_all:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({item:String(e.item??``).trim(),as:String(e.as??``).trim()})).filter(e=>e.item),unverifiedValues:u,uncitedNumbers:f,bannedPhrases:p}}function Ft(e){let t=[e.narrative],n=[];return e.unverifiedValues.length&&n.push(`引用了來源中找不到的數值：${e.unverifiedValues.map(e=>`${e.item} ${e.value}`).join(`、`)}`),e.uncitedNumbers.length&&n.push(`文中這些數字既不在引用清單也不在指引門檻表，未經比對：${e.uncitedNumbers.join(`、`)}`),e.bannedPhrases.length&&n.push(`可能踩到禁止事項：${e.bannedPhrases.join(`、`)}`),e.foundAfterAll.length&&n.push(`程式判定為缺檢但實際存在：${e.foundAfterAll.map(e=>`${e.item}（紀錄中寫作 ${e.as}）`).join(`、`)}——項目名稱比對有漏，需修正`),n.length&&t.push(``,`⚠ 這一段未通過自動檢查，不可直接提供給病人：${n.join(`；`)}`),t}function It(e){let t=b.get(e);if(!t)throw Error(`規則不存在：${e}`);return t}function X(e,t,n,r=!1){let i=It(t);return{metric:e,value:i.statement,ruleId:t,reason:n,needsClinicianConfirmation:r,citation:x(i)}}function Lt(e){return e.existingComplications.filter(e=>(e.value??0)>0).map(e=>Number(e.code.slice(1)))}function Rt(e,t){let n=[],r=[],i=[],a=Lt(e),o=t??a.length,s=a.includes(5),c=a.includes(2),l=a.includes(3)||e.comorbidityFlags.ckd.known&&e.comorbidityFlags.ckd.value,u=e.ageYears.known?e.ageYears.value:null,d=u!==null&&u>=65;if(!d)n.push(X(`糖化血色素`,`hba1c-general`,u===null?`年齡未知，先套用一般成人通則`:`年齡 ${u} 歲，未達 65 歲高齡放寬條件`,u===null)),n.push(X(`空腹血糖`,`fpg-general`,`一般成人通則`)),n.push(X(`餐後血糖`,`ppg-general`,`一般成人通則`));else{let t=`DCSI ${e.dcsiTotal.known?e.dcsiTotal.value:`未知`}，已發生併發症 ${o} 項`;n.push({metric:`糖化血色素`,value:null,ruleId:null,reason:`年齡 ${u} 歲屬高齡，指引依健康狀態分為三級（低於 7–7.5%／低於 8.0%／不以糖化血色素為唯一目標）。健康狀態需評估共病、認知與身體機能及預期餘命，申報資料無法判定。目前可得的負擔指標：${t}。`,needsClinicianConfirmation:!0,citation:x(It(`hba1c-elderly-intermediate`))}),i.push(`高齡者的健康狀態分級，因此糖化血色素、空腹與餐後血糖目標都需醫療團隊定案。`)}if(e.comorbidityFlags.ckd.known&&e.comorbidityFlags.ckd.value){let e=It(`hba1c-unreliable`);r.push({code:`hba1c-reliability`,severity:`attention`,message:e.statement,ruleId:e.id,citation:x(e)})}s||c?(n.push(X(`血壓`,`bp-target-intensive`,`資料顯示已有${s?`心血管`:``}${s&&c?`與`:``}${c?`腦血管`:``}疾病，屬可考慮加嚴的族群；是否可耐受需醫療團隊評估。`,!0)),d&&r.push({code:`orthostatic-risk`,severity:`attention`,message:`高齡合併心血管或腦血管疾病，降壓過於嚴格可能增加姿勢性低血壓與跌倒風險，血壓目標需個別化。`,ruleId:`bp-target-intensive`,citation:x(It(`bp-target-intensive`))})):n.push(X(`血壓`,`bp-target-general`,`未見已發生的心血管或腦血管疾病，套用一般目標`)),s||c?n.push(X(`低密度脂蛋白膽固醇`,`ldl-cvd`,`資料顯示已有心血管或腦血管疾病`)):n.push(X(`低密度脂蛋白膽固醇`,`ldl-general`,`一般糖尿病人通則`)),n.push(X(`高密度脂蛋白膽固醇`,`hdl-target`,e.sex.known?e.sex.value:`性別未知，兩個目標值都列出`,!e.sex.known)),n.push(X(`三酸甘油酯`,`tg-target`,`一般糖尿病人通則`));let f=e.labItems.find(e=>/eGFR/i.test(e.itemName));return e.medicationClasses.some(e=>/抗糖尿病|metformin|雙胍/i.test(e.atcClass))&&!f&&i.push(`資料中有抗糖尿病藥物的申報紀錄，但沒有可用的 eGFR 數值，因此無法依指引判定 metformin 的腎功能安全性。`),l&&!f&&i.push(`資料標記腎臟相關問題，但沒有可用的 eGFR 或 UACR 數值可供判定追蹤頻率。`),!e.labHasDrawDates&&e.labRecordCount>0&&i.push(`檢驗資料只有費用年月、沒有採檢日，因此無法判定任何一項是否為「最近一次」，也無法建立趨勢。`),e.diabetesType.verdict!==`type1-confirmed`&&e.diabetesType.verdict!==`type2-confirmed`&&i.push(`糖尿病類型判定為 ${e.diabetesType.verdict}，不得據以套用分型專屬建議。`),{targets:n,safetyFlags:r,undetermined:i}}function zt(e){let t=b.get(e);return t?x(t):null}function Bt(e){let t=b.get(e);return t?S(t):null}function Vt(e){let t=e.existingComplications.filter(e=>(e.value??0)>0).map(e=>Number(e.code.slice(1)));return t.includes(2)||t.includes(5)}function Ht(e,t){let n=[],r=t=>e.find(e=>e.analyte===t),i=t.ageYears.known?t.ageYears.value:null,a=i!==null&&i>=65,o=r(`HbA1c`);if(o){let e=o.max,t=e>(a?8:7);n.push({analyte:`HbA1c`,label:`糖化血色素`,worst:e,target:a?`高齡者依健康狀態分為 <7–7.5%／<8.0%／不以此為唯一目標`:`低於 7.0%`,outOfTarget:t,severity:e>=10?`urgent`:t?`attention`:`info`,clinicianMessage:t?`HbA1c 曾出現 ${e}%，超過${a?`指引高齡分級中最寬的數值門檻 8.0%（健康狀況差者不以糖化血色素為唯一目標，需醫療團隊判定）`:`一般成人目標 7.0%`}。`:`HbA1c 曾出現 ${e}%，未超過${a?`高齡分級中最寬的數值門檻 8.0%`:`一般成人目標 7.0%`}。`,patientMessage:t?`您的資料中曾出現偏高的糖化血色素（${e}%）。這是反映一段期間平均血糖的指標，請與醫療團隊確認適合您的目標值與下一步。`:null,citation:zt(a?`hba1c-elderly-intermediate`:`hba1c-general`),citationShort:Bt(a?`hba1c-elderly-intermediate`:`hba1c-general`),targetNeedsConfirmation:a})}let s=r(`postprandial-glucose`);if(s){let e=s.max,t=e>160;n.push({analyte:`postprandial-glucose`,label:`餐後血糖`,worst:e,target:`80–160 mg/dL`,outOfTarget:t,severity:e>=250?`attention`:`info`,clinicianMessage:`Glucose PC 曾出現 ${s.min}–${s.max} mg/dL${t?`，最高超過目標上限 160`:``}。`,patientMessage:t?`您的資料中曾出現偏高的餐後血糖（最高 ${e} mg/dL）。這些紀錄沒有附檢查日期，請在回診時和醫療團隊一起看實際結果。`:null,citation:zt(`ppg-general`),citationShort:Bt(`ppg-general`),targetNeedsConfirmation:a})}let c=r(`fasting-glucose`);if(c){let e=c.max,t=e>130;n.push({analyte:`fasting-glucose`,label:`飯前血糖`,worst:e,target:`80–130 mg/dL（高齡或多重共病可放寬至 90–150）`,outOfTarget:t,severity:e>=250?`attention`:`info`,clinicianMessage:`Glucose AC 曾出現 ${c.min}–${c.max} mg/dL${t?`，最高超過一般成人目標上限 130`:``}。`,patientMessage:t?`您的資料中曾出現偏高的飯前血糖（最高 ${e} mg/dL）。這些紀錄沒有附檢查日期，請在回診時和醫療團隊一起看實際結果。`:null,citation:zt(`fpg-general`),citationShort:Bt(`fpg-general`),targetNeedsConfirmation:a})}let l=r(`LDL-C`);if(l){let e=Vt(t),r=e?70:100,i=l.max,a=i>r;n.push({analyte:`LDL-C`,label:`低密度脂蛋白膽固醇`,worst:i,target:`低於 ${r} mg/dL`,outOfTarget:a,severity:a?`attention`:`info`,clinicianMessage:`LDL-C 曾出現 ${i} mg/dL，目標低於 ${r}（${e?`已有心血管或腦血管疾病`:`一般糖尿病人`}）。`,patientMessage:a?`您的資料中曾出現偏高的低密度脂蛋白膽固醇（${i} mg/dL）。請與醫療團隊確認您的目標值。`:null,citation:zt(e?`ldl-cvd`:`ldl-general`),citationShort:Bt(e?`ldl-cvd`:`ldl-general`),targetNeedsConfirmation:!1})}let u=r(`HDL-C`);if(u){let e=u.min,t=e<40,r=e<50;n.push({analyte:`HDL-C`,label:`高密度脂蛋白膽固醇`,worst:e,target:`男性高於 40、女性高於 50 mg/dL`,outOfTarget:r,severity:t?`attention`:`info`,clinicianMessage:t?`HDL-C 曾出現 ${e} mg/dL，低於男女兩種目標值。`:r?`HDL-C 曾出現 ${e} mg/dL，若為女性則低於目標（>50）；來源性別代碼意義未確認。`:`HDL-C 曾出現 ${e} mg/dL。`,patientMessage:t?`您的資料中曾出現偏低的高密度脂蛋白膽固醇（${e} mg/dL）。請與醫療團隊確認是否需要處理。`:null,citation:zt(`hdl-target`),citationShort:Bt(`hdl-target`),targetNeedsConfirmation:!t&&r})}let d=r(`triglyceride`);if(d){let e=d.max,t=e>=150;n.push({analyte:`triglyceride`,label:`三酸甘油酯`,worst:e,target:`低於 150 mg/dL`,outOfTarget:t,severity:e>=500?`urgent`:t?`attention`:`info`,clinicianMessage:`三酸甘油酯曾出現 ${e} mg/dL${e>=500?`，達到需藥物處理的門檻`:t?`，高於目標 150`:``}。`,patientMessage:t?`您的資料中曾出現偏高的三酸甘油酯（${e} mg/dL）。請與醫療團隊確認是否需要調整。`:null,citation:zt(`tg-target`),citationShort:Bt(`tg-target`),targetNeedsConfirmation:!1})}return n}function Ut(e){return e.filter(e=>e.outOfTarget)}var Wt={eGFR:`KIDNEY-CORE`,UACR:`KIDNEY-CORE`,creatinine:`KIDNEY-CORE`,"LDL-C":`HEART-CORE`,"HDL-C":`HEART-CORE`,triglyceride:`HEART-CORE`},Gt={2:`積極照護`,1:`適度介入`,0:`日常維持`},Kt={1:`EYE-CORE`,2:`STROKE-CORE`,3:`KIDNEY-CORE`,4:`NERVE-CORE`,5:`HEART-CORE`,6:`LEG-CIRCULATION-CORE`},qt={1:`視網膜病變`,2:`腦血管疾病`,3:`腎臟病變`,4:`神經病變`,5:`心血管疾病`,6:`周邊血管疾病`,7:`代謝性急症`};function Jt(e){let t=[],n=e.comorbidityFlags.ckd,r=n.known&&n.value,i=e.ckdIcdCodes;for(let n=1;n<=6;n+=1){let a=e.existingComplications.find(e=>e.code===`R${n}`),o=e.riskPredictions.find(e=>e.code===`PR${n}`),s=!!a?.present,c=s?a?.value??null:null,l=o?.present?o.value:null,u={topic:n,topicName:qt[n],moduleId:Kt[n],rValue:c,prValue:l};if(c!==null&&c>0){t.push({...u,kind:`established`,reason:`R${n}=${c}，屬已發生的併發症現況。`});continue}if(n===3&&(r||i.length>0)){let e=r?`來源 CKD 欄位為 1`:`申報診斷碼出現慢性腎臟病（${i.join(`、`)}）`;t.push({...u,kind:`established`,reason:`${e}，即使 R3${s?`=${c}`:` 缺值`} 也以已發生處理。`});continue}if(l===2){t.push({...u,kind:`prevention-active`,reason:`來源以 PR${n}=2（${Gt[2]}）呈現、未輸出 R${n}，依資料模型代表尚未發生；納入預防內容。`});continue}if(l===1){t.push({...u,kind:`prevention-moderate`,reason:`PR${n}=1（${Gt[1]}），尚未發生；納入預防內容。`});continue}if(l===0){t.push({...u,kind:`excluded`,reason:`PR${n}=0（${Gt[0]}），維持既有照護即可，不納入主題內容。`});continue}t.push({...u,kind:`excluded`,reason:`來源同時未提供 R${n} 與 PR${n}，無從判斷是否發生，不得補值，因此不納入。`})}return t}var Yt=`你是糖尿病衛教報告的輔助判讀器。

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
  "echo": { "age_years": 輸入中的年齡數字, "dcsi": 輸入中的 DCSI 總分（沒有就填 null） },
  "priorities": [
    { "module_id": "已納入的模組代碼", "why": "為什麼這位病人該優先處理這一項" }
  ],
  "clinician_notes": ["給醫療團隊的提醒，每則 80 字以內"],
  "data_concerns": ["資料品質或矛盾之處"],
  "disagreements": [
    { "topic": "R3", "program_decision": "程式的判定", "your_view": "你的看法與理由" }
  ]
}`;function Xt(e){let t=e.trim(),n=t.match(/```(?:json)?\s*([\s\S]*?)```/i),r=n?n[1].trim():t,i;try{i=JSON.parse(r)}catch{let e=r.indexOf(`{`),t=r.lastIndexOf(`}`);if(e===-1||t<=e)throw Error(`輔助判讀器沒有回傳可解析的 JSON。`);i=JSON.parse(r.slice(e,t+1))}if(!i||typeof i!=`object`)throw Error(`輔助判讀器回傳的不是 JSON 物件。`);let a=i,o=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`).map(String):[],s=a.echo??null,c=e=>typeof e==`number`&&Number.isFinite(e)?e:null;return{echo:s?{ageYears:c(s.age_years),dcsi:c(s.dcsi)}:null,priorities:(Array.isArray(a.priorities)?a.priorities:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({module_id:String(e.module_id??``).trim(),why:String(e.why??``).trim()})).filter(e=>e.module_id),clinician_notes:o(a.clinician_notes),data_concerns:o(a.data_concerns),disagreements:(Array.isArray(a.disagreements)?a.disagreements:[]).filter(e=>!!e&&typeof e==`object`).map(e=>({topic:String(e.topic??``).trim(),program_decision:String(e.program_decision??``).trim(),your_view:String(e.your_view??``).trim()})).filter(e=>e.topic)}}function Zt(e,t){let n=Jt(t),r=n.filter(e=>e.kind===`established`).sort((e,t)=>(t.rValue??0)-(e.rValue??0)||e.topic-t.topic),i=n.filter(e=>e.kind===`prevention-active`).sort((e,t)=>e.topic-t.topic),a=n.filter(e=>e.kind===`prevention-moderate`).sort((e,t)=>e.topic-t.topic),o=t.diabetesType.verdict===`type1-confirmed`?`T1`:t.diabetesType.verdict===`type2-confirmed`?`T2`:null,s={"EYE-CORE":`EYE`,"KIDNEY-CORE":`KIDNEY`,"NERVE-CORE":`NERVE`},c=[];for(let e of[...r,...i,...a]){c.push(e.moduleId);let t=s[e.moduleId];o&&t&&g.has(`${t}-${o}`)&&c.push(`${t}-${o}`)}let l=[`BASE-01`],u=t.diabetesType.verdict;(u===`conflicting`||u===`absent`)&&l.push(`TYPE-UNCLEAR`),l.push(...c),(c.includes(`NERVE-CORE`)||c.includes(`LEG-CIRCULATION-CORE`))&&l.push(`BASE-02`);let d=mt(t),f=xt(d,t),p=ut(d),m=E(t,r.length,p),h=new Set([...l,...m.moduleIds,...a.map(e=>e.moduleId)]),_=(e?.priorities??[]).map(e=>e.module_id).filter(e=>!h.has(e)),v=new Set;for(let e of c)for(let t of g.get(e)?.needsShared??[])v.add(t);let y=D.filter(e=>e.appliesWhen===`always`||v.has(e.appliesWhen)).map(e=>e.id),b=[];for(let e of c){let t=g.get(e)?.urgentSigns;t&&!b.includes(t)&&b.push(t)}for(let e of m.moduleIds){let t=T.get(e)?.urgentSigns;t&&!b.includes(t)&&b.push(t)}let x=[...r,...i].map(e=>e.topic),S=Ht(d,t),C={},w={},O=new Set;for(let e of d){let t=Wt[e.analyte];if(!t||!c.includes(t))continue;let n=_t(e);(C[t]??=[]).push(n),(w[t]??=[]).push({text:n,messages:[...f.filter(t=>t.analyte===e.analyte&&t.patientMessage).map(e=>e.patientMessage),...S.filter(t=>t.analyte===e.analyte&&t.outOfTarget&&t.patientMessage).map(e=>e.patientMessage)]}),O.add(e.analyte)}let ee={},te=new Set(d.map(e=>e.analyte));for(let[e,t]of Object.entries($t)){if(!c.includes(e))continue;let n=t.filter(e=>!te.has(e.analyte)).map(e=>e.label);n.length&&(ee[e]=n)}let re=null;if(t.medicationDateRange.known&&t.reportDate.known){let e=Date.parse(`${t.medicationDateRange.value.latest}T00:00:00Z`),n=Date.parse(`${t.reportDate.value}T00:00:00Z`);Number.isFinite(e)&&Number.isFinite(n)&&(re=Math.round((n-e)/864e5))}return{decisions:n,topicModuleIds:c,moderateTopics:a,selfCareModuleIds:m.moduleIds,selfCareReasons:m.reasons,medicationIngredients:t.medicationIngredients,patientModuleIds:l,targets:Rt(t,r.length),selection:e,rejectedPriorities:_,labNotes:d.filter(e=>!O.has(e.analyte)).map(_t),labNotesForClinician:d.map(vt),labPatientMessages:f.map(e=>e.patientMessage).filter(e=>!!e),labNoteEntries:d.filter(e=>!O.has(e.analyte)).map(e=>{let t=f.filter(t=>t.analyte===e.analyte&&t.patientMessage),n=S.filter(t=>t.analyte===e.analyte&&t.outOfTarget&&t.patientMessage),r=[...t.map(e=>e.patientMessage),...n.map(e=>e.patientMessage)];return{text:_t(e),messages:r,rank:t.some(e=>e.severity===`urgent`)?0:r.length?1:2}}).sort((e,t)=>e.rank-t.rank).map(({text:e,messages:t})=>({text:e,messages:t})),labThresholds:f,sharedBlockIds:y,targetComparisons:S,labByModule:C,labEntriesByModule:w,missingByModule:ee,medicationLabGapDays:re,evaluatedAnalytes:d.length,evaluatedAnalyteKeys:d.map(e=>e.analyte),unevaluatedNumericItems:t.labItems.filter(e=>e.rawValues.some(e=>/^[≧≥><＞＜]?\s*\d/.test(e.trim()))).length-d.length,followUp:ne(x,{kidneyIntensive:f.some(e=>e.code===`kidney-intensive-followup`)}),urgentSigns:b}}function Qt(e=!1){let t=e?[`※ 本報告的「您的檢驗數值」一段由模型直接撰寫，未經醫療團隊逐句核准；數值已由程式逐一比對來源。`]:[];return[`※ DRAFT｜衛教模組 ${m}／自我照護模組 ${C}／指引門檻表 ${_} 均尚未經醫療團隊核准，僅供流程比較，不得提供給病人。`,...t,``]}var $t={"KIDNEY-CORE":[{analyte:`UACR`,label:`尿液白蛋白／肌酸酐比值（UACR）`},{analyte:`creatinine`,label:`血清肌酸酐`},{analyte:`eGFR`,label:`腎絲球過濾率（eGFR）`}]},en={urgent:`優先核實`,attention:`留意`,info:`參考`};function tn(e,t){e.push(`────────────────────────────────`,`【${t}】`,``)}function nn(e,t){let n=[...Qt(!!t.labNarrative)];n.push(`糖尿病衛教報告`),n.push(`報告產生日期：${t.reportDate??`未提供`}`),n.push(`資料截至日期：${t.dataCutoff??`未提供`}`),n.push(``);let r=new Map(e.decisions.map(e=>[e.moduleId,e])),i=!t.labNarrative,a=(t,r=``,a=[])=>{let o=g.get(t);if(!o)return;n.push(`◆ ${o.title}${r}`,``),n.push(o.patientText,``);for(let e of a)n.push(e,``);let s=i?e.labEntriesByModule[t]:void 0;s?.length&&(n.push(`您的${o.title}相關數值：`,``),s.forEach(e=>{n.push(`・${e.text}`);for(let t of e.messages)n.push(`   ${t}`)}),n.push(``));let c=i?e.missingByModule[t]:void 0;c?.length&&n.push(`您的資料中沒有${c.join(`、`)}的紀錄。回診時可以確認是否需要安排。`,``)};for(let t of[`BASE-01`,`TYPE-UNCLEAR`])e.patientModuleIds.includes(t)&&a(t);if((e.labNotes.length>0||Object.keys(e.labByModule).length>0)&&n.push(`以下提到的檢驗數值都來自健保申報紀錄。這些紀錄只有費用年月、沒有檢查日期，因此無法確認先後順序，也無法確認哪一筆最新。`,``),e.urgentSigns.length){tn(n,`什麼情況要立刻就醫`);let t=e=>/119/.test(e)&&!/儘速就醫|當天/.test(e),r=[[`立即撥打 119`,e.urgentSigns.filter(t)],[`儘速就醫`,e.urgentSigns.filter(e=>!t(e))]];for(let[e,t]of r)t.length&&(n.push(`◆ ${e}`,``),t.forEach((e,t)=>n.push(`${t+1}. ${e}`,``)))}let o=e.patientModuleIds.filter(e=>![`BASE-01`,`TYPE-UNCLEAR`].includes(e)),s=[];for(let e of[`established`,`prevention-active`,`prevention-moderate`])for(let t of o){if(/-T[12]$/.test(t))continue;let n=r.get(t),i=n?null:o.find(e=>r.get(e)&&t.startsWith(e.split(`-`)[0]));(n?.kind??(i?r.get(i)?.kind:void 0))===e&&s.push(t)}if(s.length){let e=s.some(e=>{let t=r.get(e)??r.get(o.find(t=>e.startsWith(t.split(`-`)[0]))??``);return t?.kind===`prevention-active`||t?.kind===`prevention-moderate`});tn(n,`與您有關的健康重點`),n.push(`以下項目是依您的健康紀錄挑選出來，建議您特別注意。如果您不確定自己是否有相關診斷，請在回診時向醫療團隊確認。`,...e?[`其中有些項目來自風險評估而不是診斷，列出來是為了提早注意，不代表您已經有這個疾病。`]:[],``);for(let e of s)a(e,``,o.filter(t=>/-T[12]$/.test(t)&&t.split(`-`)[0]===e.split(`-`)[0]).map(e=>g.get(e)?.patientText).filter(e=>!!e))}if(t.labNarrative)tn(n,`您的檢驗數值`),n.push(...Ft(t.labNarrative),``);else{let t=new Set([...e.labNoteEntries.flatMap(e=>e.messages),...Object.values(e.labEntriesByModule).flatMap(e=>e.flatMap(e=>e.messages))]),r=[...e.labPatientMessages.filter(e=>!t.has(e)),...Ut(e.targetComparisons).map(e=>e.patientMessage).filter(e=>!!e).filter(e=>!t.has(e))];if(e.labNoteEntries.length||r.length){tn(n,`您的其他檢驗數值`),e.labNoteEntries.forEach(e=>{n.push(`・${e.text}`);for(let t of e.messages)n.push(`   ${t}`)}),e.labNoteEntries.length&&n.push(``);for(let e of r)n.push(e,``)}}if(e.followUp.text&&(tn(n,`追蹤時程`),n.push(e.followUp.text,``)),e.sharedBlockIds.length||e.selfCareModuleIds.length){tn(n,`日常照護`);for(let t of e.sharedBlockIds){let e=D.find(e=>e.id===t);e&&(n.push(`◆ ${e.title}`,``),n.push(e.text,``))}let t=e.decisions.some(e=>e.kind===`established`&&(e.topic===3||e.topic===5)),r=e.medicationIngredients.join(` `),i={"kidney-or-heart":t,"sick-day-hold-drugs":/metformin|雙胍|gliflozin/i.test(r),sglt2:/gliflozin/i.test(r)};for(let t of e.selfCareModuleIds){let e=T.get(t);if(!e)continue;let r=e.patientText,a=!1;for(let t of e.definiteVariants??[])i[t.when]&&(r=r.replace(t.from,t.to),a=!0);a&&(r=rn(r)),n.push(`◆ ${e.title}`,``),n.push(r,``)}}return n.join(`
`).trimEnd()}function rn(e){let t=0;return e.split(`
`).map(e=>/^\d+\.\s/.test(e)?e.replace(/^\d+\.\s/,`${++t}. `):e).join(`
`)}var an={"type1-confirmed":`診斷碼指向第 1 型`,"type2-confirmed":`第 2 型`,conflicting:`⚠ 第 1 型與第 2 型診斷碼並存`,absent:`資料中無糖尿病診斷碼`};function on(e,t,n){let r=[...Qt()];r.push(`【AI 醫療人員報告】`),r.push(`報告產生日期：${n.reportDate??`未提供`}`),r.push(`資料截至日期：${n.dataCutoff??`未提供`}`),r.push(`年齡：${t.ageYears.known?`${t.ageYears.value} 歲`:`未提供`}｜性別：${t.sex.known?t.sex.value:`未提供`}｜糖尿病病程：${t.diabetesDurationYears.known?`${t.diabetesDurationYears.value} 年`:`未提供`}`),r.push(``);let i=[`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`],a=0,o=e=>`${i[a++]}、${e}`;r.push(o(`併發症現況與風險預測`)),r.push(`DCSI 總分：${t.dcsiTotal.known?t.dcsiTotal.value:`來源未提供`}`);let s=new Map(t.existingComplications.map(e=>[e.code.slice(1),e])),c=new Map(t.riskPredictions.map(e=>[e.code.slice(2),e])),l=new Map(e.decisions.map(e=>[String(e.topic),e.kind])),u=Object.keys(qt).map(Number).sort((e,t)=>e-t),d=Math.max(...u.map(e=>qt[e].length));for(let e of u){let t=String(e),n=s.get(t),i=c.get(t),a;a=n?.present?`已發生（嚴重度 ${n.rawValue}）`:l.get(t)===`established`?`已發生（依來源 CKD 註記；本項未輸出嚴重度）`:i?.present&&i.value!==null?`未發生｜風險預測：${Gt[i.value]??`未定義分級`}`:`來源未提供現況與風險預測`,r.push(`  ${qt[e].padEnd(d,`　`)}  ${a}`)}if(r.push(`  （來源對每一項只輸出其一：已發生者給嚴重度分數，未發生者給風險預測。）`),r.push(``),t.diabetesType.verdict!==`type2-confirmed`){r.push(o(`糖尿病類型`)),r.push(`  ${an[t.diabetesType.verdict]}｜${t.diabetesType.note}`);let e=[...t.diabetesType.type1IcdCodes,...t.diabetesType.type2IcdCodes];e.length&&r.push(`  相關診斷碼：${e.join(`、`)}`),r.push(``)}let f={血壓:`BP`,低密度脂蛋白膽固醇:`LDL-C`,高密度脂蛋白膽固醇:`HDL-C`,三酸甘油酯:`TG`,糖化血色素:`HbA1c`,空腹血糖:`Glucose AC`,餐後血糖:`Glucose PC`},p=e.targets.targets.filter(e=>e.value);if(p.length){r.push(`${o(`依指引推導的個別化目標`)}　來源：${v}`);for(let e of p){let t=e.ruleId?b.get(e.ruleId):void 0;r.push(`  ${f[e.metric]??e.metric}：${t?.targetValue??e.value}${t?`　〔${S(t)}〕`:``}`)}r.push(``)}e.followUp.rules.length&&(r.push(o(`依指引的追蹤間隔`)),r.push(...oe(e.followUp.rules)),r.push(``));let m=e.selection?.disagreements??[],h=Ut(e.targetComparisons);if(e.targets.safetyFlags.length||e.labThresholds.length||h.length||m.length){r.push(o(`需核實的檢驗結果`));let t={urgent:0,attention:1,info:2},n=[];for(let e of h)n.push({severity:e.severity,text:`${e.clinicianMessage}${e.citationShort?`　〔${e.citationShort}〕`:``}`});for(let t of e.labThresholds){let e=t.ruleId?b.get(t.ruleId):void 0;n.push({severity:t.severity,text:`${t.clinicianMessage}${e?`　〔${S(e)}〕`:``}`})}let i=e.labThresholds.some(e=>e.code===`hba1c-unreliable`||e.code===`hba1c-missing`)?new Set([`hba1c-reliability`]):new Set;for(let t of e.targets.safetyFlags){if(i.has(t.code))continue;let e=t.ruleId?b.get(t.ruleId):void 0;n.push({severity:t.severity,text:`${t.message}${e?`　〔${S(e)}〕`:``}`})}n.sort((e,n)=>t[e.severity]-t[n.severity]);for(let e of n)r.push(`  [${en[e.severity]}] ${e.text}`);for(let e of m)r.push(`  [異議] ${e.topic}｜程式：${e.program_decision}`),r.push(`    LLM：${e.your_view}`);r.push(``)}if(e.labNotesForClinician.length||n.labReview){if(r.push(o(`檢驗結果`)),e.labNotesForClinician.length){r.push(`  依指引門檻表逐條判定的核心指標：`);for(let t of e.labNotesForClinician)r.push(`  ${t}`)}n.labReview&&r.push(Dt(n.labReview,new Set(e.evaluatedAnalyteKeys))),r.push(``)}return r.join(`
`).trimEnd()}function sn(e){let t=[`【程式已完成的主題判定（不可更改）】`];for(let n of e.decisions){let e=n.kind===`established`?`已納入・已發生`:n.kind===`prevention-active`?`已納入・積極照護`:n.kind===`prevention-moderate`?`已納入・適度介入`:`未納入`;t.push(`${n.moduleId}（R${n.topic} ${n.topicName}）：${e}｜${n.reason}`)}t.push(``,`【程式已納入的自我照護模組】`);for(let n of e.selfCareModuleIds)t.push(`${n}：${e.selfCareReasons[n]??``}`);t.push(``,`【程式推導的個別化目標】`);for(let n of e.targets.targets)t.push(`${n.metric}：${n.value??`需醫療團隊定案`}（${n.reason}）`);if(e.targets.undetermined.length){t.push(``,`【資料不足無法判定】`);for(let n of e.targets.undetermined)t.push(`- ${n}`)}return t.join(`
`)}function Z(e){return{known:!0,value:e}}function Q(e){return{known:!1,reason:e}}var cn=/^(E1[0-4]2|N0[0-8]|N1[89]|N2[5-8]|Z940|Z992|Z49)/i,ln=/^E10/i,un=/^E11/i,dn=/^E1[234]/i;function fn(e){if(e==null||e===``)return null;let t=Number(String(e).trim());return Number.isFinite(t)?t:null}function pn(e){if(e==null)return null;let t=String(e).trim().replaceAll(`/`,`-`);return/^\d{4}-\d{2}-\d{2}$/.test(t)?t:null}function mn(e,t){let n=Date.parse(`${e}T00:00:00Z`),r=Date.parse(`${t}T00:00:00Z`);return!Number.isFinite(n)||!Number.isFinite(r)?null:Math.round((r-n)/864e5)}function hn(e,t){let n=fn(e);return n===null?Q(`來源未提供 ${t} 欄位`):Z(n===1)}function gn(e,t){let n=[];for(let r=1;r<=7;r+=1){let i=`${t}${r}`,a=Object.hasOwn(e,i),o=a?e[i]:null;n.push({code:i,present:a,value:a?fn(o):null,rawValue:a&&o!=null?String(o):null})}return n}function _n(e){let t=new Set,n=new Set,r=new Set;for(let i of e){if(!G(i))continue;let e=String(i.icd_code??``).trim();e&&(ln.test(e)?t.add(e):un.test(e)?n.add(e):dn.test(e)&&r.add(e))}let i=[...t].sort(),a=[...n].sort(),o=[...r].sort();return i.length&&a.length?{verdict:`conflicting`,type1IcdCodes:i,type2IcdCodes:a,otherDiabetesIcdCodes:o,note:`申報資料同時出現第一型與第二型糖尿病診斷碼，無法據此判定類型；不得啟用任何 T1／T2 補充模組。`}:i.length?{verdict:`type1-confirmed`,type1IcdCodes:i,type2IcdCodes:[],otherDiabetesIcdCodes:o,note:`申報資料只出現第一型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。`}:a.length?{verdict:`type2-confirmed`,type1IcdCodes:[],type2IcdCodes:a,otherDiabetesIcdCodes:o,note:`申報資料只出現第二型糖尿病診斷碼。注意申報診斷碼是計費用途，仍應由醫療團隊確認。`}:{verdict:`absent`,type1IcdCodes:[],type2IcdCodes:[],otherDiabetesIcdCodes:o,note:`申報用藥紀錄中沒有 E10／E11 糖尿病診斷碼，無法判定類型。`}}function vn(e,t){let n=new Map,r=[];for(let t of e){if(!G(t))continue;let e=String(t.drug_atc5_name??``).trim()||`未分類或來源未提供分類`,i=String(t.drug_ename??``).trim(),a=pn(t.drug_date);a&&r.push(a);let o=n.get(e)??{names:new Set,count:0,dates:[]};i&&o.names.add(i),o.count+=1,a&&o.dates.push(a),n.set(e,o)}let i=[...n.entries()].map(([e,n])=>{let r=[...n.dates].sort(),i=r.length?r[r.length-1]:null;return{atcClass:e,drugNames:[...n.names].sort().slice(0,8),recordCount:n.count,lastClaimDate:i,daysSinceLastClaim:i&&t?mn(i,t):null}}).sort((e,t)=>e.lastClaimDate&&t.lastClaimDate&&e.lastClaimDate!==t.lastClaimDate?t.lastClaimDate.localeCompare(e.lastClaimDate):t.recordCount-e.recordCount),a=r.sort();return{classes:i,dateRange:a.length?Z({earliest:a[0],latest:a[a.length-1]}):Q(`用藥紀錄沒有可解析的日期`)}}function yn(e){let t=new Map,n=!1;for(let r of e){if(!G(r))continue;(pn(r.assay_date)||pn(r.inspect_date))&&(n=!0);let e=String(r.assay_item_name??``).trim()||String(r.order_name??``).trim()||`未提供項目名稱`,i=String(r.assay_value??``).trim();if(!i)continue;let a=`${e}｜${String(r.unit_data??``).trim()}｜${String(r.order_code??``).trim()}`,o=t.get(a)??{values:[],units:new Set,refs:new Set,months:new Set,codes:new Set},s=String(r.order_code??``).trim();s&&o.codes.add(s),o.values.push(i);let c=String(r.unit_data??``).trim();c&&c!==`null`&&o.units.add(c);let l=String(r.consult_value??``).trim();l&&l!==`null`&&o.refs.add(l);let u=String(r.fee_ym??``).trim();u&&o.months.add(u),t.set(a,o)}return{items:[...t.entries()].map(([e,t])=>({itemName:e.split(`｜`)[0],orderCodes:[...t.codes].sort(),rawValues:t.values,unit:t.units.size===1?[...t.units][0]:t.units.size>1?[...t.units].join(` / `):null,referenceRange:t.refs.size?[...t.refs][0]:null,feeMonths:[...t.months].sort(),hasDrawDates:n})).sort((e,t)=>t.rawValues.length-e.rawValues.length),hasDrawDates:n}}function bn(e){let t=G(e)?e:{},n=G(t.userInput)?t.userInput:{},r=G(t.rawSources)?t.rawSources:{},i=pn(n.REPORT_DATE),a=pn(n.BIRTHDAY),o=pn(n.INDX_DATE),s=a&&i?mn(a,i):null,c=fn(n.T),l=Ue(r,`medication`),u=Ue(r,`labData`),{classes:d,dateRange:f}=vn(l,i),{items:p,hasDrawDates:m}=yn(u),h=[];!m&&u.length&&h.push(`檢驗紀錄只有費用年月、沒有採檢日期，因此無法建立時間順序或趨勢。任何「趨勢」「最近一次」的敘述都沒有資料支持。`),i||h.push(`來源未提供 REPORT_DATE，無法標示資料截止日。`);let g=gn(n,`R`),_=gn(n,`PR`),v=[...g,..._].filter(e=>!e.present).map(e=>e.code);v.length&&h.push(`來源未出現下列欄位，不得補值也不得視為 0：${v.join(`、`)}。`);let y=_n(l);y.verdict===`conflicting`&&h.push(y.note);let b=String((G(t.userInfo)?t.userInfo.gender:``)??``).trim().toUpperCase(),x=b===`M`||b===`男`?`男性`:b===`F`||b===`女`?`女性`:null;return{reportDate:i?Z(i):Q(`來源未提供 REPORT_DATE`),dataCutoff:i?Z(i):Q(`來源未提供資料截止日`),birthday:a?Z(a):Q(`來源未提供 BIRTHDAY`),ageYears:s===null?Q(`缺少出生日期或報告日期，無法計算年齡`):Z(Math.floor(s/365.25)),sexCode:n.SEX!==void 0&&n.SEX!==null&&n.SEX!==``?Z(String(n.SEX)):Q(`來源未提供 SEX`),sex:x?Z(x):Q(`userInfo.gender 未提供或無法解讀`),diabetesOnsetDate:o?Z(o):Q(`來源未提供 INDX_DATE`),diabetesDurationYears:c===null?Q(`來源未提供 T`):Z(Number(c.toFixed(1))),ckdIcdCodes:[...new Set(l.map(e=>G(e)?String(e.icd_code??``).trim():``).filter(e=>e&&cn.test(e.replace(/\./g,``))))].sort(),comorbidityFlags:{hypertension:hn(n.HT,`HT`),hyperlipidemia:hn(n.HL,`HL`),ckd:hn(n.CKD,`CKD`),p4p:hn(n.P4P,`P4P`)},dcsiTotal:fn(n.DCSI)===null?Q(`來源未提供 DCSI`):Z(fn(n.DCSI)),grade:n.GRADE===void 0?Q(`來源未提供 GRADE`):Z(String(n.GRADE)),ageGroup:n.AGEGP===void 0?Q(`來源未提供 AGEGP`):Z(String(n.AGEGP)),existingComplications:g,riskPredictions:_,diabetesType:y,medicationIngredients:[...new Set(l.map(e=>G(e)?String(e.drug_ing_name??``).trim():``).filter(Boolean))].sort(),medicationClasses:d,medicationRecordCount:l.length,medicationDateRange:f,labItems:p,labRecordCount:u.length,labHasDrawDates:m,dataQualityFlags:h}}function $(e,t){return e.known?t?t(e.value):String(e.value):`未知（${e.reason}）`}function xn(e,t={}){let n=t.maxMedicationClasses??25,r=[];r.push(`【基本判斷依據】`),r.push(`報告日期：${$(e.reportDate)}`),r.push(`年齡：${$(e.ageYears,e=>`${e} 歲`)}`),r.push(`性別：${e.sex.known?e.sex.value:$(e.sex)}`),r.push(`糖尿病病程年數：${$(e.diabetesDurationYears,e=>`${e} 年`)}`),r.push(`DCSI 總分：${$(e.dcsiTotal)}`),r.push(`高血壓：${$(e.comorbidityFlags.hypertension,e=>e?`是`:`否`)}`),r.push(`高血脂：${$(e.comorbidityFlags.hyperlipidemia,e=>e?`是`:`否`)}`),r.push(`慢性腎臟病：${$(e.comorbidityFlags.ckd,e=>e?`是`:`否`)}`),r.push(``,`【已發生併發症現況（R）】`);for(let t of e.existingComplications)r.push(`${t.code}：${t.present?`${t.rawValue}`:`來源未出現此欄位（不得視為 0）`}`);r.push(``,`【未來風險預測（PR）】`);for(let t of e.riskPredictions)r.push(`${t.code}：${t.present?`${t.rawValue}`:`來源未出現此欄位（不得視為 0）`}`);r.push(``,`【糖尿病類型證據】`),r.push(`判定：${e.diabetesType.verdict}`),r.push(`第一型診斷碼：${e.diabetesType.type1IcdCodes.join(`、`)||`無`}`),r.push(`第二型診斷碼：${e.diabetesType.type2IcdCodes.join(`、`)||`無`}`),r.push(`說明：${e.diabetesType.note}`),r.push(``,`【用藥申報分類（非目前用藥）】`),r.push(`共 ${e.medicationRecordCount} 筆申報紀錄，涵蓋 ${e.medicationClasses.length} 個 ATC 分類。以下為最近申報的前 ${Math.min(n,e.medicationClasses.length)} 類。`);for(let t of e.medicationClasses.slice(0,n)){let e=t.lastClaimDate?`最後申報 ${t.lastClaimDate}${t.daysSinceLastClaim===null?``:`（距報告日 ${t.daysSinceLastClaim} 天）`}`:`來源無日期`;r.push(`- ${t.atcClass}｜${t.recordCount} 筆｜${e}`)}if(r.push(``,`【檢驗資料可用性】`),r.push(`共 ${e.labRecordCount} 筆；是否有採檢日：${e.labHasDrawDates?`有`:`沒有，只有費用年月`}`),e.dataQualityFlags.length){r.push(``,`【資料限制】`);for(let t of e.dataQualityFlags)r.push(`- ${t}`)}return r.join(`
`)}var Sn=5*1024*1024,Cn=`gemini-3.6-flash`,wn=`__custom__`,Tn=`dmEducationGeminiTransientCredential2026`,En=15,Dn=[{value:`gemini-3.6-flash`,label:`Gemini 3.6 Flash｜預設・較高品質`},{value:`gemini-3.5-flash-lite`,label:`Gemini 3.5 Flash-Lite｜較快・較低成本`},{value:wn,label:`自訂模型 ID`}],On=[{id:`selector`,label:`① 模組挑選`,role:`只回模組代碼、優先序與異議。它寫的任何文字都不會出現在報告裡。`,text:Yt},{id:`labReview`,label:`② 檢驗判讀`,role:`讀原始檢驗紀錄判斷異常，結果進醫師版。程式逐一比對它引用的每一個數值。`,text:St},{id:`narrative`,label:`③ 檢驗敘述`,role:`把檢驗結果寫成給病人看的段落。這是報告中唯一未經逐句核准的文字。`,text:Ot}],kn={ingest:[{label:`format-patient.ts — formatPatientJson()`,text:U(B,[`formatPatientJson`],`format-patient.ts`)},{label:`patient-facts.ts — extractPatientFacts()`,text:U(V,[`extractPatientFacts`],`patient-facts.ts`)}],decide:[{label:`module-plan.ts — decideTopics()`,text:U(H,[`decideTopics`],`module-plan.ts`)},{label:`module-plan.ts — resolvePlan()`,text:U(H,[`resolvePlan`],`module-plan.ts`)}],selector:[{label:`module-plan.ts — parseModuleSelection()`,text:U(H,[`parseModuleSelection`],`module-plan.ts`)}],labReview:[{label:`lab-llm.ts — parseLabReview()`,text:U(De,[`parseLabReview`],`lab-llm.ts`)}],narrative:[{label:`lab-narrative.ts — parseLabNarrative()`,text:U(Oe,[`parseLabNarrative`],`lab-narrative.ts`)}],assemble:[{label:`lab-narrative.ts — formatLabNarrative()（把核實結果就地標示）`,text:U(Oe,[`formatLabNarrative`],`lab-narrative.ts`)},{label:`module-plan.ts — assemblePatientReport()`,text:U(H,[`assemblePatientReport`],`module-plan.ts`)},{label:`module-plan.ts — assembleClinicianReport()`,text:U(H,[`assembleClinicianReport`],`module-plan.ts`)},{label:`validate-report.ts — validateReport()`,text:U(ke,[`validateReport`],`validate-report.ts`)}]},An=[{id:`patient`,label:`病人版衛教報告`,filename:`病人版衛教報告.txt`,note:`由固定模組組裝，只有「您的檢驗數值」一段是模型寫的。`},{id:`clinician`,label:`醫師版報告`,filename:`醫師版報告.txt`,note:`由固定模組組裝，附指引章表與頁次。`},{id:`rawSelector`,label:`① 原始回應`,filename:`原始回應-模組挑選.txt`,note:`模組挑選的完整回應，未解析。它的意見改不了程式的主題判定，僅供核對。`},{id:`rawLabReview`,label:`② 原始回應`,filename:`原始回應-檢驗判讀.txt`,note:`檢驗判讀的完整回應，未解析。報告中只採用通過數值比對的部分。`},{id:`rawNarrative`,label:`③ 原始回應`,filename:`原始回應-檢驗敘述.txt`,note:`檢驗敘述的完整回應，未解析。報告中的版本已經過數值比對與禁止事項掃描。`}],jn=`{
  "downloadType": "DiabetesEducation",
  "userInfo": { "userId": "SAMPLE-DEMO-NOT-A-REAL-PATIENT", "gender": "F", "birthday": "1960/01/01" },
  "userInput": {
    "REPORT_DATE": "2026-08-01",
    "BIRTHDAY": "1960-01-01",
    "SEX": "1",
    "T": 8,
    "DCSI": 3,
    "CKD": 1,
    "R5": 2,
    "PR1": 2,
    "PR4": 1,
    "PR6": 0
  },
  "rawSources": {
    "medication": {
      "rObject": [
        { "drug_date": "2026-01-10", "icd_code": "E119", "icd_cname": "第2型糖尿病", "drug_atc5_name": "其他抗糖尿病藥物", "drug_ing_name": "METFORMIN HCL", "drug_fre": "BID", "day": 28 },
        { "drug_date": "2026-01-10", "icd_code": "E119", "icd_cname": "第2型糖尿病", "drug_atc5_name": "抗糖尿病藥物", "drug_ing_name": "DAPAGLIFLOZIN", "drug_fre": "QD", "day": 28 }
      ]
    },
    "labData": {
      "rObject": [
        { "fee_ym": "202601", "order_code": "09006C", "order_name": "醣化血紅素", "assay_item_name": "HbA1c", "assay_value": "9.0", "unit_data": "%", "consult_value": "[4.0][6.0]" },
        { "fee_ym": "202601", "order_code": "09005C", "order_name": "血液及體液葡萄糖-空腹", "assay_item_name": "Glu-AC", "assay_value": "200", "unit_data": "mg/dL", "consult_value": "[70][100]" },
        { "fee_ym": "202601", "order_code": "09005C", "order_name": "血液及體液葡萄糖-空腹", "assay_item_name": "Glu-AC", "assay_value": "60", "unit_data": "mg/dL", "consult_value": "[70][100]" },
        { "fee_ym": "202601", "order_code": "09015C", "order_name": "腎絲球過濾率", "assay_item_name": "eGFR", "assay_value": "45.0", "unit_data": "mL/min/1.73m2", "consult_value": "[90][]" },
        { "fee_ym": "202601", "order_code": "09011C", "order_name": "鉀", "assay_item_name": "K", "assay_value": "3.4", "unit_data": "mmol/L", "consult_value": "[3.5][5.1]" },
        { "fee_ym": "202601", "order_code": "08011C", "order_name": "血色素檢查", "assay_item_name": "Hb", "assay_value": "10.0", "unit_data": "g/dL", "consult_value": "[[≧18y]M 13.1-17.2 F 11.0-15.2][]" }
      ]
    }
  }
}`;function Mn(e,t){let n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)}function Nn({blockers:e}){return e.length?(0,k.jsxs)(`div`,{className:`blockerList`,role:`status`,children:[(0,k.jsx)(`strong`,{children:`目前不能執行的原因`}),(0,k.jsx)(`ul`,{children:e.map(e=>(0,k.jsxs)(`li`,{className:e.hard?`hard`:`soft`,children:[(0,k.jsx)(`span`,{className:`blockerMessage`,children:e.message}),(0,k.jsx)(`span`,{className:`blockerFix`,children:e.howToFix})]},e.code))})]}):null}function Pn({input:e}){let t=e.totalTokens>Se,n=Math.min(999,Math.round(e.totalTokens/Se*100));return(0,k.jsxs)(`details`,{className:`compositionPanel`,children:[(0,k.jsxs)(`summary`,{children:[`三次呼叫合計送出：約 `,F(e.totalTokens),` tokens（`,F(e.totalChars),` 字）`,(0,k.jsxs)(`span`,{className:t?`limitBadge over`:`limitBadge`,children:[`模型上限的 `,n,`%`]})]}),(0,k.jsx)(`table`,{children:(0,k.jsx)(`tbody`,{children:e.parts.map(e=>(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{children:e.label}),(0,k.jsxs)(`td`,{children:[F(e.chars),` 字`]}),(0,k.jsxs)(`td`,{children:[`約 `,F(e.tokens),` tokens`,(0,k.jsx)(`em`,{children:`估算`})]})]},e.label))})}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`②③ 讀的是同一份檢驗紀錄，重複的部分在這裡看得見。本工具在任何情況下都不會自動截斷病人資料。`})]})}function Fn(){let[e,t]=(0,r.useState)(``),[n,a]=(0,r.useState)(``),[o,s]=(0,r.useState)(`raw`),[c,l]=(0,r.useState)(``),[u,d]=(0,r.useState)(!1),[f,p]=(0,r.useState)(Cn),[h,g]=(0,r.useState)(``),[y,b]=(0,r.useState)(En),[x,S]=(0,r.useState)(`patient`),[w,T]=(0,r.useState)(``),[E,D]=(0,r.useState)(``),[O,ee]=(0,r.useState)({}),[te,ne]=(0,r.useState)({selector:`idle`,labReview:`idle`,narrative:`idle`}),[re,ie]=(0,r.useState)({}),[ae,oe]=(0,r.useState)([]),[se,ce]=(0,r.useState)(`idle`),[le,ue]=(0,r.useState)(null),[de,fe]=(0,r.useState)(0),[A,j]=(0,r.useState)(null),[me,M]=(0,r.useState)(``),[N,ge]=(0,r.useState)(!1),[_e,ve]=(0,r.useState)(``),ye=(0,r.useRef)(null),be=(0,r.useRef)(null),Ce=f===wn?h.trim():f,we=typeof window<`u`&&window.location.hostname.endsWith(`github.io`),P=(0,r.useMemo)(()=>{let t=e.trim();if(!t.startsWith(`{`)&&!t.startsWith(`[`))return null;try{return JSON.parse(t)}catch{return null}},[e]),I=(0,r.useMemo)(()=>P?bn(P):null,[P]),L=(0,r.useMemo)(()=>P?Ge(P):``,[P]),R=(0,r.useMemo)(()=>I?Zt(null,I):null,[I]),z=(0,r.useMemo)(()=>I?xn(I):``,[I]),B=(0,r.useMemo)(()=>R?sn(R):``,[R]),V=(0,r.useMemo)(()=>z&&B?`${z}\n\n${B}`:``,[z,B]),H=(0,r.useMemo)(()=>Tt(L),[L]),De=(0,r.useMemo)(()=>I?kt(L,I):``,[L,I]),Oe=(0,r.useMemo)(()=>Fe({selectorPrompt:Yt,factsText:V,labReviewPrompt:St,labText:H,narrativePrompt:Ot,narrativeText:De}),[V,H,De]),ke=(0,r.useMemo)(()=>Me({rawInput:e,parsedJson:!!P,model:Ce,apiKey:c,requiresClientKey:we,totalTokens:Oe.totalTokens,tokenLimit:Se}),[e,P,Ce,c,we,Oe.totalTokens]);(0,r.useEffect)(()=>{if(le===null)return;let e=window.setInterval(()=>{fe(Math.floor((Date.now()-le)/1e3))},1e3);return()=>window.clearInterval(e)},[le]),(0,r.useEffect)(()=>{A&&be.current?.scrollIntoView({behavior:`smooth`,block:`center`})},[A]);function Ae(){T(``),D(``),oe([]),M(``)}function je(e){if(e.size>Sn){j(q({apiMessage:`檔案 ${e.name} 超過 5 MB 上限。`}));return}let n=new FileReader;n.onload=()=>{t(String(n.result??``)),a(e.name),Ae(),j(null)},n.readAsText(e,`utf-8`)}async function U(){if(j(null),M(``),oe([]),ee({}),ie({}),ne({selector:`running`,labReview:`running`,narrative:`running`}),Ne(ke)||!I)return;ce(`running`),ue(Date.now()),fe(0);let e=new AbortController;ye.current=e;let t=(t,n)=>rt({apiKey:c,model:Ce,systemPrompt:t,input:n,signal:e.signal,direct:we,timeoutMs:y*60*1e3});try{let e=await Promise.allSettled([t(Yt,V),t(St,H),t(Ot,De)]),n=t=>e[t].status===`fulfilled`?e[t].value.text:null,r=(e,t)=>{if(!e)return null;try{return t(e)}catch{return null}};ee({rawSelector:n(0)??``,rawLabReview:n(1)??``,rawNarrative:n(2)??``});let i=r(n(0),Xt),a=r(n(1),e=>Et(e,I)),o=r(n(2),e=>Pt(e,I));ne({selector:e[0].status===`fulfilled`&&i?`ok`:`failed`,labReview:e[1].status===`fulfilled`&&a?`ok`:`failed`,narrative:e[2].status===`fulfilled`&&o?`ok`:`failed`}),ie({selector:{taken:i?[`優先序 ${i.priorities.length} 項，其中 ${i.priorities.length-Zt(i,I).rejectedPriorities.length} 項在已納入清單中、被採用`,`clinician_notes ${i.clinician_notes.length} 則、data_concerns ${i.data_concerns.length} 則：目前一律丟棄，不進任何報告`,`disagreements ${i.disagreements.length} 則：僅供核對，改不了程式的主題判定`]:[],problems:i?[...Zt(i,I).rejectedPriorities.length?[`指定了 ${Zt(i,I).rejectedPriorities.length} 個不在納入清單中的模組，已忽略`]:[],...i.echo&&I.dcsiTotal.known&&i.echo.dcsi!==null&&i.echo.dcsi!==I.dcsiTotal.value?[`回抄的 DCSI（${i.echo.dcsi}）與輸入不符，可能不是同一位病人`]:[]]:[`回應無法解析，這一站的產出全部不採用`]},labReview:{taken:a?[`異常項目 ${a.review.abnormal.length} 則、系統性歸納 ${a.review.groups.length} 組，進醫師版`,`涵蓋來源檢驗 ${F(a.sourceRecords)} 筆`]:[],problems:a?[...a.unverifiedValues.length?[`${a.unverifiedValues.length} 個數值在來源中找不到，已在報告中就地標示`]:[],...a.unknownItems.length?[`${a.unknownItems.length} 個項目名稱來源中沒有`]:[]]:[`回應無法解析，醫師版退回程式輸出`]},narrative:{taken:o?[`敘述 ${F(Te(o.narrative))} 字，放進病人版的「您的檢驗數值」`]:[],problems:o?[...o.unverifiedValues.length?[`${o.unverifiedValues.length} 個數值在來源中找不到`]:[],...o.uncitedNumbers.length?[`${o.uncitedNumbers.length} 個數字既未引用也不在門檻表：${o.uncitedNumbers.join(`、`)}`]:[],...o.bannedPhrases.length?[`踩到禁止事項：${o.bannedPhrases.join(`、`)}`]:[],...o.foundAfterAll.length?[`程式判缺檢但實際存在 ${o.foundAfterAll.length} 項，是程式的漏`]:[]]:[`回應無法解析，病人版退回固定句型`]}});let s={reportDate:new Date().toISOString().slice(0,10),dataCutoff:I.dataCutoff.known?I.dataCutoff.value:null},c=Zt(i,I);T(nn(c,{...s,labNarrative:o??void 0})),D(on(c,I,{...s,labReview:a??void 0})),S(`patient`);let l=[],u=[i?null:`① 模組挑選`,a?null:`② 檢驗判讀`,o?null:`③ 檢驗敘述`].filter(Boolean);o?.foundAfterAll.length&&l.push(`敘述器在紀錄中找到程式判定為缺檢的 ${o.foundAfterAll.length} 項（${o.foundAfterAll.map(e=>`${e.item} → ${e.as}`).join(`、`)}）：項目名稱比對有漏，需修正程式。`),o?.unverifiedValues.length&&l.push(`病人版敘述引用了 ${o.unverifiedValues.length} 個來源中找不到的數值，已在報告中就地標示。`),o?.bannedPhrases.length&&l.push(`病人版敘述可能踩到禁止事項：${o.bannedPhrases.join(`、`)}。`),a?.unverifiedValues.length&&l.push(`醫師版判讀引用了 ${a.unverifiedValues.length} 個來源中找不到的數值，已在報告中就地標示。`),u.length&&l.push(`${u.join(`、`)}未取得，該部分已退回程式輸出。`),oe(l);let d=c.decisions.filter(e=>e.kind!==`excluded`&&e.kind!==`prevention-moderate`).length;M(`完成：程式依 R／PR 納入 ${d} 個併發症主題、${c.selfCareModuleIds.length} 個自我照護模組${l.length?``:`；自動檢查全數通過`}。`)}catch(e){e instanceof Y?e.failure.aborted||j(e.failure):j(q({cause:e}))}finally{ye.current===e&&(ye.current=null),ue(null),ce(`idle`)}}async function Pe(e,t){await navigator.clipboard.writeText(e),ve(t),window.setTimeout(()=>ve(``),1500)}let Ie=(0,r.useMemo)(()=>{let t=e=>e.map(e=>({...e,code:!0})),n=(e,n,r,i,a)=>{let o=On.find(t=>t.id===e),s=O[a]??``;return{id:e,kind:`llm`,title:n,role:r,state:te[e],inputs:[{label:e===`selector`?`送出的輸入（確定性事實＋判定結果）`:`送出的輸入（檢驗紀錄）`,text:i}],recipe:[{label:`system prompt（唯讀，隨版本送審）`,text:o?.text??``},...t(kn[e])],steps:re[e]?.taken,outputs:[{label:`原始回應（未解析）`,text:s}],problems:re[e]?.problems}};return[{id:`ingest`,kind:`program`,title:`讀取申報 JSON`,role:`把申報 JSON 拆成兩份東西：一份給模型讀的純文字，一份給程式判定用的結構化事實。不改任何數值。`,state:L?`ok`:`idle`,inputs:[{label:`原始 JSON`,text:e}],recipe:t(kn.ingest),steps:I?[`讀到檢驗 ${F(I.labRecordCount)} 筆、用藥 ${F(I.medicationRecordCount)} 筆`,I.labHasDrawDates?`檢驗有採檢日`:`檢驗只有費用年月、沒有採檢日，因此後面所有敘述都不得聲稱時序`,`R／PR 欄位缺 key 就記成「未提供」，不補 0`]:[],outputs:[{label:`LLM 好讀文字（給②③讀原始紀錄）`,text:L},{label:`確定性事實（給下一站判定）`,text:z}]},{id:`decide`,kind:`program`,title:`確定性判定`,role:`依 R／PR 與指引門檻表決定主題、目標與追蹤間隔。這一站不呼叫模型，換模型不會改變結果。`,state:R?`ok`:`idle`,inputs:[{label:`確定性事實`,text:z}],recipe:t(kn.decide),steps:R?[`逐一判定 6 個併發症主題：納入 ${R.decisions.filter(e=>e.kind!==`excluded`).length} 個`,`依併發症與年齡解出指引目標 ${R.targets.targets.filter(e=>e.value).length} 項`,`把檢驗值比對門檻表：命中 ${R.labThresholds.length} 則`,`依用藥與低血糖紀錄選出自我照護模組 ${R.selfCareModuleIds.length} 個`]:[],outputs:[{label:`主題判定結果（附每一項的理由）`,text:B}]},n(`selector`,`① 模組挑選`,`只回模組代碼與優先序。它改不了上一站的主題判定，寫的任何文字也不會出現在病人版。`,V,`rawSelector`),n(`labReview`,`② 檢驗判讀`,`讀原始檢驗紀錄，找程式門檻沒涵蓋到的異常。結果進醫師版，每個數值都會被比對回來源。`,H,`rawLabReview`),n(`narrative`,`③ 檢驗敘述`,`把檢驗結果寫成病人看得懂的段落。這是報告裡唯一未經逐句核准的文字。`,De,`rawNarrative`),{id:`assemble`,kind:`program`,title:`驗證與組裝`,role:`拿前面五站的產出，把模型寫的部分逐一比對來源數值、掃描禁止事項，通過的才組進報告；沒通過的就地標示，不改寫也不刪除。`,state:w?`ok`:`idle`,inputs:[{label:`主題判定結果（第 2 站）`,text:B},{label:`① 原始回應（第 3 站）`,text:O.rawSelector??``},{label:`② 原始回應（第 4 站）`,text:O.rawLabReview??``},{label:`③ 原始回應（第 5 站）`,text:O.rawNarrative??``}],recipe:t(kn.assemble),steps:w?[`解析三份原始回應；任何一份解析不了就整份丟棄，該段退回程式輸出`,`把③敘述裡的每個數字比對回原始檢驗紀錄，對不上的標記為未核實`,`掃描禁止事項（時序宣稱、風險標籤、叫病人自行停藥等）`,`依固定模組逐字組裝兩份報告；未通過的部分就地加註警語，文字本身不改寫`,...ae.map(e=>`⚠ ${e}`)]:[],outputs:[{label:`病人版衛教報告`,text:w},{label:`醫師版報告`,text:E}]}]},[e,L,I,R,z,B,V,H,De,te,re,O,w,E,ae]),Le=An.find(e=>e.id===x)??An[0],W=x===`patient`?w:x===`clinician`?E:O[x]??``;return(0,k.jsxs)(`main`,{className:`workspace`,children:[(0,k.jsxs)(`header`,{className:`topbar`,children:[(0,k.jsxs)(`div`,{className:`brand`,children:[(0,k.jsx)(`span`,{className:`brandMark`,children:`糖衛`}),(0,k.jsx)(`span`,{children:`報告產生器`})]}),(0,k.jsxs)(`div`,{className:`topMeta`,children:[(0,k.jsxs)(`span`,{className:`privacyPill`,children:[(0,k.jsx)(`span`,{className:`statusDot`}),`不寫入本站資料庫`]}),(0,k.jsx)(`span`,{className:`privacyPill`,children:`金鑰僅暫存本頁`})]})]}),(0,k.jsxs)(`section`,{className:`hero`,children:[(0,k.jsxs)(`div`,{className:`heroCopy`,children:[(0,k.jsx)(`p`,{className:`eyebrow`,children:`DIABETES EDUCATION REPORT`}),(0,k.jsxs)(`h1`,{children:[`一份健保申報 JSON，`,(0,k.jsx)(`br`,{}),`兩份可用的報告。`]}),(0,k.jsx)(`p`,{className:`heroLead`,children:`併發症主題、個別化目標與追蹤間隔完全由程式依 R／PR 與指引門檻表判定；LLM 只負責規則做不到的三件事。 病人可見的衛教正文來自固定模組，不由模型改寫。`})]}),(0,k.jsx)(xe,{})]}),(0,k.jsxs)(`article`,{className:`stepCard`,children:[(0,k.jsxs)(`div`,{className:`stepHeading`,children:[(0,k.jsx)(`span`,{className:`stepNumber`,children:`01`}),(0,k.jsxs)(`div`,{className:`stepHeadingText`,children:[(0,k.jsx)(`p`,{className:`eyebrow`,children:`INPUT`}),(0,k.jsx)(`h2`,{children:`病人資料`}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`需要原始 JSON。這條流程要讀 R／PR／CKD 與檢驗紀錄的結構化欄位，純文字無法判定主題與門檻。`})]})]}),(0,k.jsxs)(`div`,{className:`stepBody`,children:[(0,k.jsxs)(`div`,{className:`inputGrid`,children:[(0,k.jsxs)(`div`,{className:N?`dropZone dragging`:`dropZone`,onDragOver:e=>{e.preventDefault(),ge(!0)},onDragLeave:()=>ge(!1),onDrop:e=>{e.preventDefault(),ge(!1);let t=e.dataTransfer.files?.[0];t&&je(t)},children:[(0,k.jsx)(`span`,{className:`fileGlyph`,children:`JSON`}),(0,k.jsx)(`p`,{children:`拖曳檔案到這裡`}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`上限 5 MB，只在瀏覽器內處理`}),(0,k.jsxs)(`label`,{className:`secondaryButton`,children:[`選擇檔案`,(0,k.jsx)(`input`,{type:`file`,accept:`.json,application/json`,hidden:!0,onChange:e=>{let t=e.target.files?.[0];t&&je(t),e.target.value=``}})]}),n?(0,k.jsx)(`p`,{className:`fieldNote`,children:n}):null]}),(0,k.jsxs)(`div`,{className:`editorShell`,children:[(0,k.jsxs)(`div`,{className:`editorToolbar`,children:[(0,k.jsxs)(`div`,{className:`tabs`,children:[(0,k.jsx)(`button`,{type:`button`,className:o===`raw`?`active`:``,onClick:()=>s(`raw`),children:`原始 JSON`}),(0,k.jsx)(`button`,{type:`button`,className:o===`formatted`?`active`:``,onClick:()=>s(`formatted`),disabled:!L,children:`LLM 好讀文字`})]}),(0,k.jsxs)(`span`,{className:`fieldNote`,children:[F(Te(o===`raw`?e:L)),` 字`]})]}),(0,k.jsx)(`textarea`,{className:`inputEditor`,value:o===`raw`?e:L,readOnly:o===`formatted`,onChange:e=>{t(e.target.value),Ae()},placeholder:`在此貼上健保申報 JSON…`,spellCheck:!1}),(0,k.jsxs)(`div`,{className:`inlineActions`,children:[(0,k.jsx)(`button`,{type:`button`,className:`textButton`,onClick:()=>{t(jn),a(``),Ae()},children:`載入合成示範資料`}),(0,k.jsx)(`span`,{className:`fieldNote`,children:`示範資料為虛構，非真實病人`})]})]})]}),R&&I?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`dl`,{className:`factGrid`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{children:`已發生的併發症主題`}),(0,k.jsxs)(`dd`,{children:[R.decisions.filter(e=>e.kind===`established`).length,` 項`]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{children:`預防重點・積極照護`}),(0,k.jsxs)(`dd`,{children:[R.decisions.filter(e=>e.kind===`prevention-active`).length,` 項`]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{children:`預防重點・適度介入`}),(0,k.jsxs)(`dd`,{children:[R.moderateTopics.length,` 項`]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{children:`需核實的檢驗結果`}),(0,k.jsxs)(`dd`,{children:[R.labThresholds.length,` 則`]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{children:`自我照護模組`}),(0,k.jsxs)(`dd`,{children:[R.selfCareModuleIds.length,` 個`]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{children:`依指引推導的目標`}),(0,k.jsxs)(`dd`,{children:[R.targets.targets.filter(e=>e.value).length,` 項`]})]})]}),(0,k.jsxs)(`details`,{className:`traceToggle`,open:!0,children:[(0,k.jsx)(`summary`,{children:`看這位病人實際跑出來的判定路徑`}),(0,k.jsx)(he,{plan:R,facts:I})]})]}):null]})]}),(0,k.jsxs)(`article`,{className:`stepCard generatorCard`,children:[(0,k.jsxs)(`div`,{className:`stepHeading`,children:[(0,k.jsx)(`span`,{className:`stepNumber`,children:`02`}),(0,k.jsxs)(`div`,{className:`stepHeadingText`,children:[(0,k.jsx)(`p`,{className:`eyebrow`,children:`RUN`}),(0,k.jsx)(`h2`,{children:`產出兩份報告`}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`按一次並行送出三個請求。金鑰只在執行時使用，不寫入本站。`})]})]}),(0,k.jsxs)(`div`,{className:`stepBody`,children:[(0,k.jsxs)(`div`,{className:`settingsPane`,children:[(0,k.jsxs)(`div`,{className:`credentialBox`,children:[(0,k.jsxs)(`div`,{className:`credentialLabelRow`,children:[(0,k.jsx)(`label`,{className:`fieldLabel`,htmlFor:Tn,children:`Gemini 臨時存取金鑰`}),(0,k.jsx)(`span`,{className:`fieldNote`,children:`重新整理即清除`})]}),(0,k.jsxs)(`div`,{className:`passwordRow`,children:[(0,k.jsx)(`input`,{id:Tn,className:`apiKeyInput`,type:u?`text`:`password`,value:c,onChange:e=>l(e.target.value),autoComplete:`off`,spellCheck:!1,placeholder:`貼上金鑰`}),(0,k.jsx)(`button`,{type:`button`,className:`showKeyButton`,onClick:()=>d(e=>!e),children:u?`隱藏`:`顯示`})]}),(0,k.jsxs)(`p`,{className:`fieldNote`,children:[`只暫存在本頁記憶體，不寫入資料庫或瀏覽器儲存空間。`,we?`此版本由瀏覽器直接傳給 Google Gemini。`:`私人站版透過本站伺服器轉送。`,`請只在可信任的網址輸入金鑰。`]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`label`,{className:`fieldLabel`,htmlFor:`modelSelect`,children:`Gemini 模型`}),(0,k.jsx)(`select`,{id:`modelSelect`,className:`selectInput`,value:f,onChange:e=>p(e.target.value),children:Dn.map(e=>(0,k.jsx)(`option`,{value:e.value,children:e.label},e.value))}),f===wn?(0,k.jsx)(`input`,{className:`customModelInput`,value:h,onChange:e=>g(e.target.value),placeholder:`輸入 Gemini API 支援的模型 ID`}):null]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`label`,{className:`fieldLabel`,htmlFor:`timeoutInput`,children:`單次請求逾時上限（分鐘）`}),(0,k.jsx)(`input`,{id:`timeoutInput`,className:`textInput`,type:`number`,min:1,max:60,value:y,onChange:e=>b(Number(e.target.value)||En)}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`逾時會明確顯示為逾時，與你按「停止」區分。`})]})]}),(0,k.jsx)(Pn,{input:Oe}),A?(0,k.jsxs)(`div`,{className:`errorBanner`,ref:be,role:`alert`,children:[(0,k.jsx)(`strong`,{children:A.title}),(0,k.jsx)(`p`,{children:A.advice}),A.raw?(0,k.jsx)(`pre`,{children:A.raw}):null]}):null,me?(0,k.jsx)(`div`,{className:`noticeBanner`,children:me}):null,ae.length?(0,k.jsxs)(`div`,{className:`blockerList`,role:`status`,children:[(0,k.jsx)(`strong`,{children:`自動檢查發現`}),(0,k.jsx)(`ul`,{children:ae.map(e=>(0,k.jsx)(`li`,{className:`soft`,children:(0,k.jsx)(`span`,{className:`blockerMessage`,children:e})},e))})]}):null,(0,k.jsx)(Nn,{blockers:ke}),(0,k.jsxs)(`div`,{className:`cardActions`,children:[(0,k.jsx)(`button`,{type:`button`,className:`primaryButton`,onClick:U,disabled:se!==`idle`||Ne(ke),children:se===`running`?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:`spinner`}),`三次呼叫並行中… `,de,` 秒`]}):`產出兩份報告`}),se===`running`?(0,k.jsx)(`button`,{type:`button`,className:`stopButton`,onClick:()=>ye.current?.abort(),children:`停止`}):null]})]})]}),(0,k.jsxs)(`article`,{className:`stepCard`,children:[(0,k.jsxs)(`div`,{className:`stepHeading`,children:[(0,k.jsx)(`span`,{className:`stepNumber`,children:`03`}),(0,k.jsxs)(`div`,{className:`stepHeadingText`,children:[(0,k.jsx)(`p`,{className:`eyebrow`,children:`OUTPUT`}),(0,k.jsx)(`h2`,{children:`兩份報告`}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`兩份由同一份判定組出，主題、目標與門檻一致。`})]})]}),(0,k.jsxs)(`div`,{className:`stepBody`,children:[(0,k.jsxs)(`div`,{className:`outputHeader`,children:[(0,k.jsx)(`div`,{className:`tabs`,children:An.map(e=>(0,k.jsx)(`button`,{type:`button`,className:x===e.id?`active`:``,onClick:()=>S(e.id),children:e.label},e.id))}),(0,k.jsxs)(`div`,{className:`outputActions`,children:[(0,k.jsx)(`span`,{className:`fieldNote`,children:W?`${F(Te(W))} 字`:`等待產出`}),(0,k.jsx)(`button`,{type:`button`,className:`miniButton`,onClick:()=>Pe(W,x),disabled:!W,children:_e===x?`已複製`:`複製`}),(0,k.jsx)(`button`,{type:`button`,className:`miniButton`,onClick:()=>Mn(Le.filename,W),disabled:!W,children:`下載 TXT`})]})]}),(0,k.jsx)(`p`,{className:`fieldNote`,children:Le.note}),(0,k.jsx)(`textarea`,{className:`outputEditor`,value:W,readOnly:!0,spellCheck:!1,placeholder:x.startsWith(`raw`)?`尚未呼叫，或該次呼叫失敗。`:`尚未產出。`})]})]}),(0,k.jsxs)(`article`,{className:`stepCard`,children:[(0,k.jsxs)(`div`,{className:`stepHeading`,children:[(0,k.jsx)(`span`,{className:`stepNumber`,children:`04`}),(0,k.jsxs)(`div`,{className:`stepHeadingText`,children:[(0,k.jsx)(`p`,{className:`eyebrow`,children:`PIPELINE`}),(0,k.jsx)(`h2`,{children:`管線的每一站`}),(0,k.jsx)(`p`,{className:`fieldNote`,children:`每一站點開就看得到餵進去什麼、吐出什麼，以及程式從中採用了哪些、丟掉哪些。 system prompt 由程式定義並隨版本一起送審，不在頁面上編輯。`})]})]}),(0,k.jsx)(`div`,{className:`stepBody`,children:(0,k.jsx)(Ee,{stations:Ie})})]}),(0,k.jsx)(pe,{}),(0,k.jsxs)(`section`,{className:`safetyNote`,children:[(0,k.jsx)(`span`,{className:`safetyIcon`,children:`i`}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`strong`,{children:`上線前的必要提醒`}),(0,k.jsxs)(`p`,{children:[`衛教模組 `,m,`、自我照護模組 `,C,`、指引門檻表 `,_,`（`,v,`）均尚未經醫療團隊核准。病人版的「您的檢驗數值」一段由模型撰寫，數值已由程式逐一比對來源， 但文字未經逐句核准。正式提供病人前，仍應由醫療團隊核准固定內容、prompt 與模型版本，並建立人工抽查與版本紀錄。`]})]})]}),(0,k.jsxs)(`footer`,{className:`buildStamp`,children:[(0,k.jsx)(`span`,{children:`糖尿病衛教報告產生器`}),(0,k.jsx)(`span`,{children:`資料僅在本頁處理；按下產出時才送往 Gemini API。`}),(0,k.jsx)(`span`,{children:`build ${i}`})]})]})}export{Fn as default};