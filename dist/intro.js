(() => {


 let step=0;
 const slides=[
  {heading:'정체를 숨기고 펼치는<br>서부의 총싸움',art:img('sceriffo')+img('bang')+img('fuorilegge'),text:'뱅!은 <strong>역할마다 이기는 목표가 다른 카드 게임</strong>이에요. 누가 내 편인지 추리하며, 카드로 공격하고 내 생명을 지켜요.'},
  {heading:'내 역할의 목표를 이루세요',art:'',text:`<ul class="intro-roles"><li><strong>보안관</strong><span>무법자와 배신자를 모두 탈락시키세요.</span></li><li><strong>부관</strong><span>보안관을 도와 함께 승리하세요.</span></li><li><strong>무법자</strong><span>보안관을 탈락시키세요.</span></li><li><strong>배신자</strong><span>다른 사람을 먼저 탈락시키고, 마지막에 보안관을 이기세요.</span></li></ul>`},
  {heading:'보안관만 정체를 공개해요',art:img('sceriffo')+'<span class="intro-secret" aria-label="비밀 역할">?</span>',text:'나머지 사람은 <strong>자기 역할을 혼자 확인하고 숨겨요.</strong><br>누가 나를 돕고, 누가 공격하는지 보면서 내 편을 찾아보세요.'},
  {heading:'내 차례에는 세 가지만',art:'',text:'<ol class="intro-turn"><li><b>1</b><span>카드 <strong>2장 뽑기</strong></span></li><li class="intro-play-step"><div><b>2</b><span>공격·회복·장비 카드를<br><strong>원하는 만큼 쓰기</strong></span></div><div class="intro-bang-limit">'+img('bang')+'<span>단, <strong>뱅! 카드는 기본적으로<br>내 차례에 1장만</strong> 쓸 수 있어요.</span></div></li><li><b>3</b><span>현재 생명보다 많은 손의 카드 <strong>버리기</strong><small class="intro-hand-example">예: 생명이 3이면 손에 최대 3장</small></span></li></ol><p>생명을 모두 잃고 회복하지 못하면 탈락해요. 자세한 방법은 게임을 준비하면서 하나씩 알려드릴게요.</p>'}
 ];
 const dialog=document.createElement('dialog');dialog.id='first-intro';dialog.setAttribute('aria-labelledby','first-intro-title');document.body.append(dialog);
 function finish(prepare=false){dialog.close();dialog.remove();if(prepare)location.hash='setup'}
 function render(){const s=slides[step];dialog.innerHTML=`<div class="intro-toolbar"><span>처음 만나는 뱅! · ${step+1} / ${slides.length}</span><button class="intro-close" type="button" aria-label="처음 안내 닫기">×</button></div><div class="intro-body"><p class="intro-read"><strong>해당 설명을 소리내서 읽으면서 모두에게 알려주세요.</strong></p><h2 id="first-intro-title" tabindex="-1">${s.heading}</h2>${s.art?`<div class="intro-art">${s.art}</div>`:''}<div class="intro-copy">${s.text}</div></div><div class="intro-controls"><button class="btn secondary" data-intro-prev ${step===0?'disabled':''}>← 이전</button><div class="intro-dots" aria-hidden="true">${slides.map((_,i)=>`<i class="${i===step?'on':''}"></i>`).join('')}</div><button class="btn" data-intro-next>${step===slides.length-1?'게임 준비하기 →':'다음 →'}</button></div>`;dialog.querySelector('.intro-close').onclick=()=>finish();dialog.querySelector('[data-intro-prev]').onclick=()=>{if(step>0){step--;render()}};dialog.querySelector('[data-intro-next]').onclick=()=>{if(step===slides.length-1)finish(true);else{step++;render()}};dialog.querySelector('.intro-body').scrollTop=0;if(dialog.open)dialog.querySelector('h2').focus({preventScroll:true})}
 dialog.addEventListener('cancel',e=>{e.preventDefault();finish()});render();dialog.showModal();
})();
