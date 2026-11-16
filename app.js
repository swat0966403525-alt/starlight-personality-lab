const tests = [
 {id:"kink",title:"性癖偏好探索",icon:"✧",desc:"探索情境幻想、感官偏好、角色互動與界線溝通。",dims:["情境想像","感官探索","角色扮演","溝通界線"],qs:[
 ["在一段親密關係中，你比較重視哪件事？",["彼此一起構思有趣情境","慢慢探索舒服的感官體驗","嘗試不同角色或故事設定","先談清楚彼此的界線與期待"]],
 ["面對新的約會活動，你通常會？",["喜歡有故事感的安排","注意氣氛、音樂與環境","想加入一點角色或主題元素","先確認雙方都自在且願意"]],
 ["你覺得一段互動最吸引人的部分是？",["想像力與新鮮感","細節與感官氛圍","角色之間的默契","信任、尊重與溝通"]],
 ["若要提出一個新點子，你會？",["先描述想像中的情境","從輕鬆、低壓的體驗開始","提出有趣的角色設定","先詢問對方是否有興趣"]],
 ["你偏好的節奏是？",["有變化、帶點驚喜","慢慢來，留意感受","依照情境切換角色","每一步都確認彼此感受"]],
 ["遇到不熟悉的偏好話題，你會？",["好奇討論可能性","先了解自己的舒適程度","從虛構故事或角色聊起","直接談可接受與不可接受的範圍"]],
 ["你認為理想的親密互動需要？",["創意與共同想像","舒適與細膩感受","角色默契與投入感","清楚同意與信任"]],
 ["如果想調整互動方式，你會？",["一起設計新情境","從小改變開始嘗試","加入主題或角色元素","坦誠溝通並尊重答案"]]},
 {id:"fem",title:"女性化表現與角色探索",icon:"❀",desc:"探索服裝風格、角色想像、自我表達與情境興趣。",dims:["造型美學","角色想像","自我表達","情境好奇"],qs:[
 ["在虛構角色扮演活動中，你最想嘗試？",["設計精緻的服裝造型","演繹一個不同於日常的角色","自在呈現自己喜歡的風格","先旁觀了解活動氣氛"]],
 ["挑選一套舞台服裝時，你會先看？",["剪裁、配色與細節","角色設定是否有趣","穿著是否符合自己的表達","場合是否舒適且合適"]],
 ["對女性化造型的想像，你比較接近？",["欣賞服裝與妝髮美感","喜歡故事中的身份轉換","想探索不同的自我表達","偶爾好奇，但不一定想實踐"]],
 ["如果朋友邀請你參加主題攝影，你會？",["研究造型與搭配","挑選一個有趣角色","選擇最自在的呈現方式","先確認拍攝內容與公開範圍"]],
 ["你對角色轉換故事最感興趣的是？",["外觀造型的變化","角色經歷與心理歷程","探索自我表達的可能性","角色如何設定自主界線"]],
 ["試穿新風格時，你最在意？",["整體視覺效果","是否符合角色氛圍","是否真實表達自己的喜好","是否能自在地說不"]],
 ["你會如何看待自己的這份好奇？",["一種審美興趣","一種想像與故事喜好","自我探索的一部分","目前仍在觀察與理解"]],
 ["若要繼續探索，你希望？",["學習造型與穿搭","閱讀更多角色故事","在安全環境嘗試表達","先整理自己的想法與界線"]]},
 {id:"sm",title:"主導與配合互動傾向",icon:"♜",desc:"探索互動中的主導感、配合度、協商方式與安全感。",dims:["主動主導","配合信任","彈性協作","界線協商"],qs:[
 ["共同規劃活動時，你通常喜歡？",["提出方向並安排流程","讓信任的人帶領","依雙方狀態輪流決定","先確認彼此期待再開始"]],
 ["遇到意見不同時，你會？",["清楚說明自己的主張","願意先聽對方的安排","尋找雙方都喜歡的方式","暫停並重新協商界線"]],
 ["在團隊遊戲裡，你常是？",["制定策略的人","支援隊友的人","依局勢切換角色的人","負責確認規則與公平的人"]],
 ["你認為良好互動的關鍵是？",["有方向與決斷","安心與信任","互相配合與調整","清楚同意及可撤回"]],
 ["當對方提出新玩法，你會？",["評估後決定是否帶頭嘗試","對方值得信任時願意配合","一起修改成雙方都喜歡的版本","先討論規則、停下訊號與限制"]],
 ["你比較喜歡哪種合作方式？",["分工明確，由我統籌","有人帶領，我專注配合","雙方輪流負責","每個階段都共同確認"]],
 ["如果自己感到不舒服，你會？",["直接提出停止或調整","告訴對方自己的感受","一起找替代方案","立即暫停並重新確認同意"]],
 ["你最看重哪種互動品質？",["果斷與掌握方向","被尊重與被信任","平等互惠與彈性","安全、透明與可溝通"]]},
 {id:"personality",title:"親密互動性格測試",icon:"☾",desc:"了解你在親密關係中的表達方式、節奏與情緒需求。",dims:["情感表達","理性溝通","探索新意","穩定陪伴"],qs:[
 ["喜歡的人心情不好時，你會？",["直接表達關心與在乎","先了解事情原委","帶對方做點新鮮的事","安靜陪伴，讓對方安心"]],
 ["你通常如何表達好感？",["主動說出欣賞","透過坦誠對話","安排特別的小驚喜","用持續而穩定的陪伴"]],
 ["發生誤會時，你傾向？",["先說明自己的感受","整理事實後溝通","換個方式讓氣氛緩和","給彼此時間，再好好談"]],
 ["理想的相處節奏是？",["熱烈且直接","有深度的交流","常有新鮮體驗","穩定、自在、不勉強"]],
 ["你最希望對方理解？",["我的情感需要被回應","我重視誠實與清楚","我需要空間探索新事物","我珍惜可靠與安全感"]],
 ["安排紀念日，你會？",["準備有心意的告白","安排深入交流的時光","設計驚喜行程","選擇熟悉舒適的約會"]],
 ["面對關係中的變化，你會？",["坦率分享內心感受","分析變化並討論","把變化看作新的體驗","重視承諾與穩定調整"]],
 ["你覺得親密關係最重要的是？",["情感回應","誠實理解","共同成長與新鮮感","安全感與陪伴"]]},
 {id:"relationship",title:"親密關係需求測試",icon:"♡",desc:"探索你的溝通需求、信任建立、個人空間與關係期待。",dims:["陪伴需求","自主空間","溝通透明","承諾穩定"],qs:[
 ["忙碌的一週結束後，你希望伴侶？",["安排時間好好相處","理解我需要獨處充電","找時間聊聊彼此近況","維持熟悉而穩定的約定"]],
 ["當你需要個人空間時，你希望？",["對方仍適度陪伴","彼此尊重獨立時間","坦白說明原因與安排","確認這不影響彼此承諾"]],
 ["關係中出現疑問時，你會？",["希望盡快獲得回應","先自己整理想法","直接開誠布公討論","用穩定行動逐步建立信任"]],
 ["你最喜歡哪種約會？",["長時間相處與分享","各自做喜歡的事再碰面","一起交流想法與感受","固定而有儀式感的約會"]],
 ["你如何看待關係中的界線？",["親密也要有陪伴感","保留個人生活很重要","界線應該明確說清楚","彼此遵守承諾與約定"]],
 ["當伴侶有不同需求時，你會？",["希望找到更多相處時間","尊重彼此不同的節奏","坐下來討論可行方式","尋找長期穩定的折衷方案"]],
 ["讓你感到安心的行為是？",["主動關心與陪伴","尊重我的自主決定","言行一致且願意溝通","持續可靠、說到做到"]],
 ["你期待關係如何成長？",["透過更多共同時光","保有各自成長空間","持續對話與理解","建立長期共同目標"]]}
];
const viewIds=["homeView","quizView","resultView","historyView","aboutView"];
let activeTest=null, answers=[], questionIndex=0, lastResult=null;
const $=id=>document.getElementById(id);
function showView(id){viewIds.forEach(v=>$(v).classList.toggle("hidden",v!==id));document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===id.replace("View","")));window.scrollTo({top:0,behavior:"smooth"});}
function renderTests(){ $("testGrid").innerHTML=tests.map(t=>`<article class="test-card" data-test="${t.id}"><div class="icon">${t.icon}</div><h3>${t.title}</h3><p>${t.desc}</p><div class="card-foot"><span>8 道情境題 · 約 3 分鐘</span><b>開始測驗 →</b></div></article>`).join("");document.querySelectorAll(".test-card").forEach(c=>c.addEventListener("click",()=>startTest(c.dataset.test)));}
function startTest(id){activeTest=tests.find(t=>t.id===id);answers=Array(activeTest.qs.length).fill(null);questionIndex=0;renderQuestion();showView("quizView");}
function renderQuestion(){const [prompt,opts]=activeTest.qs[questionIndex];$("quizCategory").textContent=activeTest.title;$("progressText").textContent=`${questionIndex+1} / ${activeTest.qs.length}`;$("questionTitle").textContent=prompt;$("progressBar").style.width=`${(questionIndex+1)/activeTest.qs.length*100}%`;$("answerList").innerHTML=opts.map((o,i)=>`<button class="answer ${answers[questionIndex]===i?"selected":""}" data-choice="${i}"><span class="letter">${"ABCD"[i]}</span><span>${o}</span></button>`).join("");document.querySelectorAll(".answer").forEach(b=>b.addEventListener("click",()=>{answers[questionIndex]=Number(b.dataset.choice);renderQuestion();}));$("prevBtn").disabled=questionIndex===0;$("nextBtn").disabled=answers[questionIndex]===null;$("nextBtn").textContent=questionIndex===activeTest.qs.length-1?"查看分析 →":"下一題 →";}
function finishTest(){const scores=activeTest.dims.map((_,d)=>answers.reduce((n,a)=>n+(a===d?1:0),0));const total=answers.length;const percentages=scores.map(s=>Math.round(s/total*100));const max=Math.max(...scores);const top=activeTest.dims.filter((_,i)=>scores[i]===max);const date=new Date().toLocaleString("zh-TW");const desc=makeDescription(activeTest.id,top);lastResult={testId:activeTest.id,title:activeTest.title,top,dimensions:activeTest.dims,percentages,date,desc};$("resultTitle").textContent=top.join(" × ");$("resultSubtitle").textContent=`${activeTest.title}｜你的主要傾向`;$("resultDescription").textContent=desc;$("scoreBars").innerHTML=activeTest.dims.map((d,i)=>`<div class="score-row"><div class="score-label"><span>${d}</span><span>${percentages[i]}%</span></div><div class="bar"><i style="width:${percentages[i]}%"></i></div></div>`).join("");saveHistory(lastResult);showView("resultView");}
function makeDescription(id,top){const copy={
kink:{情境想像:"你容易被共同構思的情境與故事感吸引，想像力是探索偏好的重要入口。",感官探索:"你重視舒適、氛圍與細節，傾向循序漸進地了解自己的感受。",角色扮演:"角色設定與故事投入可能為你帶來樂趣，適合在充分溝通後共同創作。",溝通界線:"你特別重視信任、知情同意與清楚界線，這是建立安心互動的重要基礎。"},
fem:{造型美學:"你對服裝、妝髮與整體視覺呈現較有興趣，造型探索可能是你的主要樂趣。",角色想像:"你容易被角色故事與身份轉換的敘事吸引，想像空間對你很重要。",自我表達:"你重視以自己自在的方式呈現風格；任何標籤都不必由單次測驗決定。",情境好奇:"你對相關主題保持好奇，但也重視自己的步調，不必急著定義或實踐。"},
sm:{主動主導:"你在共同活動中較常提出方向與安排；良好的主導仍需尊重對方選擇。",配合信任:"當信任建立後，你可能樂於配合對方的安排；信任不代表放棄自己的界線。",彈性協作:"你傾向依情境調整角色，重視雙方都能參與與表達。",界線協商:"你重視事前協商、明確界線與隨時撤回同意，這是健康互動的核心。"},
personality:{情感表達:"你傾向直接表達情感，也期待彼此能看見並回應感受。",理性溝通:"你重視清楚、誠實與有條理的交流，溝通能幫助你建立安全感。",探索新意:"你可能喜歡共同嘗試新活動，讓關係保有變化與成長空間。",穩定陪伴:"你重視持續的陪伴與可靠感，日常中的小行動對你很有意義。"},
relationship:{陪伴需求:"共同時光與情感回應可能是你重要的關係需求。",自主空間:"你重視個人生活與自主性，健康關係可以同時容納親密和獨立。",溝通透明:"你希望疑問能被坦誠討論，透明且尊重的溝通有助於建立信任。",承諾穩定:"你重視一致的行動與長期可靠感，承諾需要透過日常實踐來維持。"}
};return top.map(x=>copy[id][x]).join(" "); }
function saveHistory(r){let h=JSON.parse(localStorage.getItem("starLabHistory")||"[]");h.unshift(r);localStorage.setItem("starLabHistory",JSON.stringify(h.slice(0,30)));}
function renderHistory(){const h=JSON.parse(localStorage.getItem("starLabHistory")||"[]");$("historyList").innerHTML=h.length?h.map((r,i)=>`<div class="history-item"><div><b>${r.title}</b><small>${r.date} · ${r.top.join(" × ")}</small></div><button class="secondary" data-record="${i}">查看摘要</button></div>`).join(""):'<div class="empty">目前沒有測驗紀錄。完成任一測驗後，紀錄會顯示在這裡。</div>';document.querySelectorAll("[data-record]").forEach(b=>b.addEventListener("click",()=>{const r=h[Number(b.dataset.record)];lastResult=r;$("resultTitle").textContent=r.top.join(" × ");$("resultSubtitle").textContent=r.title+"｜歷史摘要";$("resultDescription").textContent=r.desc;$("scoreBars").innerHTML=r.dimensions.map((d,i)=>`<div class="score-row"><div class="score-label"><span>${d}</span><span>${r.percentages[i]}%</span></div><div class="bar"><i style="width:${r.percentages[i]}%"></i></div></div>`).join("");showView("resultView");}));}
function downloadResult(){if(!lastResult)return;const c=document.createElement("canvas");c.width=1200;c.height=800;const x=c.getContext("2d");const g=x.createLinearGradient(0,0,1200,800);g.addColorStop(0,"#211936");g.addColorStop(1,"#100d1b");x.fillStyle=g;x.fillRect(0,0,1200,800);x.strokeStyle="#8066a8";x.lineWidth=3;x.strokeRect(35,35,1130,730);x.textAlign="center";x.fillStyle="#ff9fcf";x.font="bold 28px sans-serif";x.fillText("✦ STARLIGHT PERSONALITY LAB ✦",600,105);x.fillStyle="#f5f0ff";x.font="bold 54px sans-serif";x.fillText(lastResult.top.join(" × "),600,220);x.font="28px sans-serif";x.fillStyle="#d8c8f0";x.fillText(lastResult.title,600,275);let y=380;lastResult.dimensions.forEach((d,i)=>{x.textAlign="left";x.fillStyle="#f5f0ff";x.font="24px sans-serif";x.fillText(d,170,y);x.textAlign="right";x.fillStyle="#ff9fcf";x.fillText(lastResult.percentages[i]+"%",1030,y);x.fillStyle="#ffffff22";x.fillRect(170,y+18,860,13);const gg=x.createLinearGradient(170,0,1030,0);gg.addColorStop(0,"#a88aff");gg.addColorStop(1,"#ff9fcf");x.fillStyle=gg;x.fillRect(170,y+18,860*lastResult.percentages[i]/100,13);y+=78;});x.textAlign="center";x.fillStyle="#aaa0bf";x.font="18px sans-serif";x.fillText("僅供自我探索與娛樂參考 · 不構成診斷或固定身份判定",600,720);const a=document.createElement("a");a.download="星夜研究所-測驗結果.png";a.href=c.toDataURL("image/png");a.click();}
$("enterBtn").addEventListener("click",()=>{$("ageGate").classList.add("hidden");sessionStorage.setItem("starLabAdult","yes");});
if(sessionStorage.getItem("starLabAdult")==="yes")$("ageGate").classList.add("hidden");
$("backHome").addEventListener("click",()=>showView("homeView"));$("prevBtn").addEventListener("click",()=>{if(questionIndex>0){questionIndex--;renderQuestion();}});$("nextBtn").addEventListener("click",()=>{if(answers[questionIndex]===null)return;if(questionIndex<activeTest.qs.length-1){questionIndex++;renderQuestion();}else finishTest();});
$("saveImageBtn").addEventListener("click",downloadResult);$("retryBtn").addEventListener("click",()=>startTest(activeTest.id));$("homeFromResult").addEventListener("click",()=>showView("homeView"));$("clearHistory").addEventListener("click",()=>{if(confirm("確定清除本機保存的所有測驗紀錄？")){localStorage.removeItem("starLabHistory");renderHistory();}});
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.view==="history")renderHistory();showView(b.dataset.view+"View");}));$("homeLink").addEventListener("click",e=>{e.preventDefault();showView("homeView");});
renderTests();