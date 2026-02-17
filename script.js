// ================= QUESTIONS =================
const questions = [
  "Do you love me dikshya ?",
  "Last chance 😭", "के तिमी मेरो जीवनको सधैंको साथी बन्नेछौ? 💖", "तिम्रो आँखाको आकाशमा म सधैं रहन पाउँछु? 🌌",
  "मेरो मुटुको धड्कन तिम्रो नाम बोल्दा, के तिमी सुन्नेछौ? ❤️", "के हाम्रो माया समयभन्दा बलियो बन्न सक्छ?", "तिमी बिना अधुरो यो जीवन, के पूर्ण बनाइदिन सक्छौ?",
  "तिम्रो हाँसो मेरो संसार हो, के त्यो संसारमा म रहन पाउँछु? 😊", "के तिमी मेरो बिहानको घाम र साँझको जून बन्नेछौ? 🌅🌙",
  "हाम्रो कथालाई अमर बनाउन तयार छौ? 📖", "के तिमी मेरो सपना मात्र होइन, यथार्थ बन्नेछौ?", "मेरो माया स्विकारेर सधैं साथ दिन्छौ?",
  "तिम्रो हात समातेर जीवन पार गर्न सक्छु? 🤝", "के तिमी मेरो भविष्यको हर पाना लेख्नेछौ?", "मेरो हृदयको घरमा सधैं बस्नेछौ? 🏠",
  "के हाम्रो माया कहिल्यै नटुट्ने बाचा बन्न सक्छ?", "तिम्रो छायाँ भएर सधैं साथ दिन पाउँछु?", "के तिमी मेरो भाग्यमा लेखिएको नाम हौ?",
  "हाम्रो सम्बन्धलाई सधैंको लागि पक्का गरौं? 💍", "के तिमी मेरो जीवनको संगीत बन्नेछौ? 🎶", "तिम्रो मुस्कानको कारण सधैं म बन्न पाउँछु?",
  "के तिमी मेरो साससँग मिसिन तयार छौ?", "तिमीलाई माया गर्नु मेरो नियति हो भने, के स्वीकार्छौ?", "के हाम्रो आत्मा एउटै बाटोमा हिँड्न सक्छ?",
  "मेरो संसार तिमी नै हौ, के सधैं साथ दिन्छौ?", "तिम्रो मुटुमा मेरो नाम सधैं लेखिन्छ?", "के तिमी मेरो जीवनको सबैभन्दा सुन्दर निर्णय बन्नेछौ?",
  "तिम्रो साथले मेरो भविष्य उज्यालो बनाउन सक्छौ?", "के तिमी मेरो सधैंको खुशी बन्नेछौ?", "हाम्रो माया समयसँगै अझ गहिरो बनाउनेछौ?",
  "के तिमी मेरो हरेक सपना पूरा गर्ने प्रेरणा बन्नेछौ?", "सधैंका लागि मेरो बन्नेछौ? 💕"
];

let questionIndex = 0;

// ================= DOM ELEMENTS =================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionText = document.getElementById("question");

const giftBox = document.getElementById('giftBox');
const giftSection = document.getElementById('giftSection');
const messageSection = document.getElementById('messageSection');
const gallerySection = document.getElementById('gallerySection');
const typedText = document.getElementById('typedText');
const emojiContainer = document.getElementById('emojiContainer');

const music = document.getElementById('bgMusic');
const galleryMusic = document.getElementById('galleryMusic');
const toggleMusicBtn = document.getElementById('toggleMusic');
const toFullscreenBtn = document.getElementById('toFullscreenBtn');

const fullscreen = document.getElementById('fullscreen');
const closeFs = document.getElementById('closeFs');
const fsGrid = document.getElementById('fsGrid');

const letterPopup = document.getElementById('letterPopup');
const passcodeInput = document.getElementById('passcode');
const letterText = document.getElementById('letterText');

let isMuted = false;

// ================= CONFETTI =================
function shootConfetti(times = 40) {
  for (let i=0;i<times;i++){
    const c=document.createElement('div');
    c.className='confetti';
    c.style.left=Math.random()*100+'vw';
    c.style.animationDuration=(3+Math.random()*3)+'s';
    c.style.background=`hsl(${Math.floor(Math.random()*360)},90%,60%)`;
    c.style.transform=`translateY(0) rotate(${Math.random()*360}deg)`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),7000);
  }
}

// ================= AUDIO SAFE PLAY =================
function safePlay(audio){ audio.volume=0.9; audio.muted=isMuted; audio.play().catch(()=>{}); }

// ================= YES BUTTON =================
yesBtn.addEventListener("click", () => {
  shootConfetti(60);
  Swal.fire({ title:"Thanks for click yes 💖", text:"I’m truly overjoyed that you said yes! I feel incredibly lucky and blessed to have you in my life. From the moment I met you, I knew there was something special between us, and now I feel so grateful that we are taking this next step together. You inspire me with your kindness, your smile, and the way you make everything around you better. I can’t wait to create countless beautiful memories with you, support each other through life’s ups and downs, and grow together every single day. Thank you for trusting me, for believing in us, and for making me the happiest person alive. I promise to cherish, respect, and love you with all my heart as we start this amazing journey together.💍", confirmButtonColor:"#ff3385"});
  safePlay(music);
});

// ================= NO BUTTON =================
noBtn.addEventListener("mouseover", () => {
  questionIndex++;
  if(questionIndex>=questions.length) questionIndex=0;
  questionText.textContent = questions[questionIndex];

  const x = Math.random()*(window.innerWidth-100);
  const y = Math.random()*(window.innerHeight-100);
  noBtn.style.position="absolute";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
});

// ================= MUTE / UNMUTE =================
toggleMusicBtn.addEventListener('click', () => {
  isMuted=!isMuted;
  music.muted=isMuted;
  galleryMusic.muted=isMuted;
  toggleMusicBtn.textContent = isMuted?'🔈 Unmute':'🔇 Mute';
});

// ================= TYPING EFFECT =================
function startTyping(userName){
  new Typed('#typedText', {
    strings:[`💖 Dear ${userName}...`,`From the moment I met you...`,`💌 I knew you were the one.`,`Will you be mine forever? 💍`],
    typeSpeed:70, backSpeed:40, backDelay:1500, loop:true
  });
}

// ================= EMOJI INTERACTION =================
function enableEmojis(userName){
  let emojiClicks=0;
  emojiContainer.querySelectorAll('.emoji').forEach(emoji=>{
    emoji.addEventListener('click',()=>{
      if(emoji.style.pointerEvents==='none') return;
      emojiClicks++;
      emoji.style.opacity='0.5';
      emoji.style.pointerEvents='none';
      if(emojiClicks===4){
        setTimeout(()=>{
          Swal.fire({
            title:`💫 I love you, ${userName}!`,
            html:`<p style="font-size:20px;"> कुनै साधारण दिन थियो, जब पहिलो पटक तिमीलाई देखेँ 🌸  
                  मुस्कानमा त्यस्तो जादू थियो, जसले मेरो संसारै बदल्यो...  
                  समय बित्दै गयो, हरेक कुरामा तिमी नै मेरो प्रेरणा बन्यौ 💫  
                  तिम्रो साथमा हरेक क्षण स्वर्ग जस्तै लाग्छ —  
                  अनि मेरो मनले भन्छ — <strong>“म तिमीमा हराएको छु, अब फर्किन चाहन्न।”</strong>
                  </p>`,
            confirmButtonText:'🌟 I Love You',
            confirmButtonColor:'#ff66b2',
            background:'#fff0f6'
          }).then(()=>{
            gallerySection.style.display='block';
            toFullscreenBtn.classList.remove('hidden');
            window.scrollTo({top:gallerySection.offsetTop-20,behavior:'smooth'});
            shootConfetti(60);
          });
        },400);
      }
    },{once:true});
  });
}

// ================= FULLSCREEN GALLERY =================
function openFullscreenGallery(){
  music.pause();
  safePlay(galleryMusic);
  fullscreen.style.display='block';
  document.body.style.overflow='hidden';
  const imgs=fsGrid.querySelectorAll('img');
  imgs.forEach((img,i)=>{setTimeout(()=>img.classList.add('show'),i*120)});
}

function closeFullscreenGallery(){
  fullscreen.style.display='none';
  document.body.style.overflow='';
  galleryMusic.pause();
  safePlay(music);
}

closeFs.addEventListener('click', closeFullscreenGallery);
toFullscreenBtn.addEventListener('click', openFullscreenGallery);

// ================= MAIN FLOW =================
giftBox.addEventListener('click',()=>{
  shootConfetti(50);
  safePlay(music);

  const userName="Dikshya Khadka";

  giftSection.classList.add('hidden');
  messageSection.classList.remove('hidden');

  startTyping(userName);
  enableEmojis(userName);
});

// ================= ACCESSIBILITY =================
giftBox.setAttribute('tabindex','0');
giftBox.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault(); giftBox.click();}});

// ================= PRELOAD IMAGES =================
['image/photo (1).jpg','image/photo (2).JPG','image/photo (3).JPG','image/photo (4).JPG','image/photo (5).JPG','image/photo (6).JPG','image/photo (7).JPG','image/photo (8).JPG'].forEach(src=>{const i=new Image();i.src=src;});

// ================= SECRET LETTER SYSTEM =================
function unlockLetter(){
  if(passcodeInput.value==='143'){
    letterText.classList.remove('hidden');
    passcodeInput.style.display='none';
  }else alert('❌ Wrong passcode! Try again.');
}

function closeLetter(){
  letterPopup.style.display='none';
  passcodeInput.value='';
  passcodeInput.style.display='block';
  letterText.classList.add('hidden');
}

document.getElementById('openLetter').addEventListener('click',()=>{letterPopup.style.display='block';});
