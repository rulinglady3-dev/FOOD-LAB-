// =========================
// ELEMENTLER
// =========================

const intro = document.getElementById("intro");
const labScene = document.getElementById("labScene");

const startBtn = document.getElementById("startBtn");

const lines = document.querySelectorAll(".line");

const dishPhoto = document.getElementById("dishPhoto");

const analysis = document.getElementById("analysis");

const analysisText = document.getElementById("analysisText");

// =========================
// BAŞLANGIÇ
// =========================

startBtn.style.opacity = "0";
startBtn.style.pointerEvents = "none";

lines.forEach(line => {

    line.style.opacity = "0";

});

// =========================
// TERMINAL ANİMASYONU
// =========================

let delay = 0;

lines.forEach(line => {

    gsap.to(line,{

        opacity:1,

        duration:0.4,

        delay:delay

    });

    delay += 0.9;

});

// =========================
// BUTON
// =========================

gsap.to(startBtn,{

    opacity:1,

    duration:0.8,

    delay:delay + 0.4,

    onComplete(){

        startBtn.style.pointerEvents="auto";

    }

}); 
// =========================
// START EXPERIMENT
// =========================

startBtn.addEventListener("click", () => {

    // Buton tekrar basılmasın
    startBtn.disabled = true;

    // Açılış ekranını yavaşça gizle
    gsap.to("#intro", {

        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",

        onComplete: () => {

            intro.style.display = "none";

            // Laboratuvarı göster
            labScene.classList.remove("hidden");

            // İlk animasyon
            startLab();

        }

    });

});


// =========================
// LABORATUVARI BAŞLAT
// =========================

function startLab(){

    gsap.from("#labScene",{

        opacity:0,

        duration:1

    });

    gsap.from("#scanner",{

        scale:0,

        rotation:180,

        duration:1.8,

        ease:"back.out(1.6)"

    });

    gsap.from("#plate",{

        scale:0,

        duration:1,

        delay:.5

    });

    gsap.from(".ring",{

        scale:0,

        opacity:0,

        duration:1.5,

        stagger:.2

    });

    gsap.from("#portal",{

        scale:0,

        opacity:0,

        duration:2

    });

    // 2 saniye sonra analiz başlasın
    setTimeout(startAnalysis,2000);

} 
// =========================
// AI ANALYSIS
// =========================

function startAnalysis(){

    gsap.to("#analysis",{

        opacity:1,
        duration:0.8

    });

    const messages=[

        "Connecting AI Core...",
        "Scanning Ingredients...",
        "Checking Temperature...",
        "Analyzing Flavor...",
        "Analyzing Texture...",
        "Creating Molecular Structure...",
        "Experiment Successful ✔"

    ];

    let i=0;

    analysisText.innerHTML="";

    const interval=setInterval(()=>{

        analysisText.innerHTML += messages[i] + "<br>";

        i++;

        if(i>=messages.length){

            clearInterval(interval);

            setTimeout(showDish,1200);

        }

    },900);

}


// =========================
// FOTOĞRAFI GÖSTER
// =========================

let currentDish=0;

const dishes=[

    "images/food1.jpg",
    "images/food2.jpg",
    "images/food3.jpg",
    "images/food4.jpg"

];

function showDish(){

    dishPhoto.src=dishes[currentDish];

    gsap.fromTo("#dishPhoto",

        {

            opacity:0,
            scale:.4,
            rotation:-20

        },

        {

            opacity:1,
            scale:1,
            rotation:0,
            duration:1.5,
            ease:"power3.out"

        }

    );

}
