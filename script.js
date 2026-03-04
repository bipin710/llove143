// ================= QUESTIONS =================
const questions = [
  "Do you love me Neeru ?",
  "Last chance 😭",
  "के तिमी मेरो जीवनको सधैंको साथी बन्नेछौ? 💖",
  "तिम्रो आँखाको आकाशमा म सधैं रहन पाउँछु? 🌌",
  "मेरो मुटुको धड्कन तिम्रो नाम बोल्दा, के तिमी सुन्नेछौ? ❤️",
  "के हाम्रो माया समयभन्दा बलियो बन्न सक्छ?",
  "तिमी बिना अधुरो यो जीवन, के पूर्ण बनाइदिन सक्छौ?",
  "तिम्रो हाँसो मेरो संसार हो, के त्यो संसारमा म रहन पाउँछु? 😊",
  "के तिमी मेरो बिहानको घाम र साँझको जून बन्नेछौ? 🌅🌙",
  "हाम्रो कथालाई अमर बनाउन तयार छौ? 📖",
  "के तिमी मेरो सपना मात्र होइन, यथार्थ बन्नेछौ?",
  "मेरो माया स्विकारेर सधैं साथ दिन्छौ?",
  "तिम्रो हात समातेर जीवन पार गर्न सक्छु? 🤝",
  "के तिमी मेरो भविष्यको हर पाना लेख्नेछौ?",
  "मेरो हृदयको घरमा सधैं बस्नेछौ? 🏠",
  "के हाम्रो माया कहिल्यै नटुट्ने बाचा बन्न सक्छ?",
  "तिम्रो छायाँ भएर सधैं साथ दिन पाउँछु?",
  "के तिमी मेरो भाग्यमा लेखिएको नाम हौ?",
  "हाम्रो सम्बन्धलाई सधैंको लागि पक्का गरौं? 💍",
  "के तिमी मेरो जीवनको संगीत बन्नेछौ? 🎶",
  "तिम्रो मुस्कानको कारण सधैं म बन्न पाउँछु?",
  "के तिमी मेरो साससँग मिसिन तयार छौ?",
  "तिमीलाई माया गर्नु मेरो नियति हो भने, के स्वीकार्छौ?",
  "के हाम्रो आत्मा एउटै बाटोमा हिँड्न सक्छ?",
  "मेरो संसार तिमी नै हौ, के सधैं साथ दिन्छौ?",
  "तिम्रो मुटुमा मेरो नाम सधैं लेखिन्छ?",
  "के तिमी मेरो जीवनको सबैभन्दा सुन्दर निर्णय बन्नेछौ?",
  "तिम्रो साथले मेरो भविष्य उज्यालो बनाउन सक्छौ?",
  "के तिमी मेरो सधैंको खुशी बन्नेछौ?",
  "हाम्रो माया समयसँगै अझ गहिरो बनाउनेछौ?",
  "के तिमी मेरो हरेक सपना पूरा गर्ने प्रेरणा बन्नेछौ?",
  "सधैंका लागि मेरो बन्नेछौ? 💕"
];

let questionIndex = 0;

// ================= DOM ELEMENTS =================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionText = document.getElementById("question");

const giftBoxClosed = document.getElementById("giftBoxClosed");
const giftBoxOpen = document.getElementById("giftBoxOpen");

const giftSection = document.getElementById("giftSection");
const messageSection = document.getElementById("messageSection");
const gallerySection = document.getElementById("gallerySection");
const typedText = document.getElementById("typedText");
const emojiContainer = document.getElementById("emojiContainer");

const music = document.getElementById("bgMusic");
const galleryMusic = document.getElementById("galleryMusic");
const toggleMusicBtn = document.getElementById("toggleMusic");
const toFullscreenBtn = document.getElementById("toFullscreenBtn");

const fullscreen = document.getElementById("fullscreen");
const closeFs = document.getElementById("closeFs");
const fsGrid = document.getElementById("fsGrid");

const letterPopup = document.getElementById("letterPopup");
const passcodeInput = document.getElementById("passcode");
const letterText = document.getElementById("letterText");

let isMuted = false;

// ================= CONFETTI =================
function shootConfetti(times = 40) {
  for (let i = 0; i < times; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = (3 + Math.random() * 3) + "s";
    c.style.background = `hsl(${Math.floor(Math.random() * 360)},90%,60%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 7000);
  }
}

// ================= SAFE AUDIO =================
function safePlay(audio) {
  audio.volume = 0.9;
  audio.muted = isMuted;
  audio.play().catch(() => {});
}

// ================= YES BUTTON =================
yesBtn.addEventListener("click", () => {
  shootConfetti(60);
  Swal.fire({
    title: "Thanks for clicking YES 💖",
    text: "I promise to cherish and love you forever 💍",
    confirmButtonColor: "#ff3385"
  });
  safePlay(music);
});

// ================= NO BUTTON MOVE =================
function moveNoButton() {
  questionIndex++;
  if (questionIndex >= questions.length) questionIndex = 0;
  questionText.textContent = questions[questionIndex];

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    moveNoButton();
  }
});

// ================= MUTE BUTTON =================
toggleMusicBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  music.muted = isMuted;
  galleryMusic.muted = isMuted;
  toggleMusicBtn.textContent = isMuted ? "🔈 Unmute" : "🔇 Mute";
});

// ================= TYPING EFFECT =================
function startTyping(userName) {
  new Typed("#typedText", {
    strings: [
      `💖 Dear ${userName}...`,
      "From the moment I met you...",
      "💌 I knew you were the one.",
      "Will you be mine forever? 💍"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
}

// ================= EMOJI INTERACTION =================
function enableEmojis(userName) {
  let emojiClicks = 0;
  emojiContainer.querySelectorAll(".emoji").forEach(emoji => {
    emoji.addEventListener("click", () => {
      emojiClicks++;
      emoji.style.opacity = "0.5";
      emoji.style.pointerEvents = "none";

      if (emojiClicks === 4) {
        Swal.fire({
          title: `💫 I love you, ${userName}!`,
          confirmButtonColor: "#ff66b2"
        }).then(() => {
          gallerySection.style.display = "block";
          toFullscreenBtn.classList.remove("hidden");
          shootConfetti(60);
        });
      }
    });
  });
}

// ================= FULLSCREEN =================
function openFullscreenGallery() {
  music.pause();
  safePlay(galleryMusic);
  fullscreen.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeFullscreenGallery() {
  fullscreen.style.display = "none";
  document.body.style.overflow = "";
  galleryMusic.pause();
  safePlay(music);
}

closeFs.addEventListener("click", closeFullscreenGallery);
toFullscreenBtn.addEventListener("click", openFullscreenGallery);

// ================= GIFT CLICK =================
giftBoxClosed.addEventListener("click", () => {
  giftBoxClosed.classList.add("hidden");
  giftBoxOpen.classList.remove("hidden");

  shootConfetti(50);
  safePlay(music);

  const userName = "Neeru Magar";

  setTimeout(() => {
    giftSection.classList.add("hidden");
    messageSection.classList.remove("hidden");
    startTyping(userName);
    enableEmojis(userName);
  }, 800);
});

// ================= SECRET LETTER =================
function unlockLetter() {
  if (passcodeInput.value === "143") {
    letterText.classList.remove("hidden");
    passcodeInput.style.display = "none";
  } else {
    alert("❌ Wrong passcode! Try again.");
  }
}

function closeLetter() {
  letterPopup.style.display = "none";
  passcodeInput.value = "";
  passcodeInput.style.display = "block";
  letterText.classList.add("hidden");
}

document.getElementById("openLetter").addEventListener("click", () => {
  letterPopup.style.display = "block";
});
