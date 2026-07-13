// ===============================
// FOOD LAB
// ===============================

// ELEMENTLER

const intro = document.getElementById("intro");
const lab = document.getElementById("lab");

const terminal = document.querySelector("#terminal p");
const startBtn = document.getElementById("startBtn");

const dish = document.getElementById("dish");

const log = document.getElementById("log");

// Fotoğraflar

const foods = [

    "food1.JPG",
    "food2.JPG",
    "food3.JPG",
    "food4.JPG"

];

let current = 0;

// Başlangıç

startBtn.style.opacity = "0";
startBtn.style.pointerEvents = "none";

// Terminal Yazıları

const terminalLines = [

    "Initializing Food Laboratory...",
    "Loading Artificial Intelligence...",
    "Scanning Environment...",
    "Connecting Energy Core...",
    "System Ready."

];

let line = 0;

function typeTerminal(){

    if(line >= terminalLines.length){

        gsap.to(startBtn,{
            opacity:1,
            duration:.8
        });

        startBtn.style.pointerEvents="auto";

        return;

    }

    terminal.innerHTML += terminalLines[line] + "<br>";

    line++;

    setTimeout(typeTerminal,800);

}

typeTerminal();
// ===============================
// START BUTTON
// ===============================

startBtn.addEventListener("click", () => {

    startBtn.disabled = true;

    gsap.to(intro, {

        opacity: 0,

        duration: 1,

        ease: "power2.inOut",

        onComplete: () => {

            intro.style.display = "none";

            lab.style.display = "flex";

            startExperiment();

        }

    });

});

// ===============================
// EXPERIMENT
// ===============================

function startExperiment(){

    gsap.from("#scanner",{

        scale:0,

        rotation:180,

        duration:1.6,

        ease:"back.out(1.7)"

    });

    gsap.from("#analysis",{

        x:250,

        opacity:0,

        duration:1

    });

    analyzeFood();

} 
// ===============================
// AI ANALYSIS
// ===============================

const analysisLines=[

"Connecting AI...",
"Scanning Dish...",
"Checking Temperature...",
"Analyzing Flavor...",
"Analyzing Texture...",
"Generating Molecular Model...",
"Analysis Complete."

];

function analyzeFood(){

    log.textContent="";

    let i=0;

    const timer=setInterval(()=>{

        log.textContent += analysisLines[i] + "\n";

        i++;

        if(i===analysisLines.length){

            clearInterval(timer);

            setTimeout(showFood,1200);

        }

    },700);

} 
// ===============================
// FOTOĞRAFI GÖSTER
// ===============================

function showFood(){

    dish.src = foods[current];

    gsap.fromTo(

        dish,

        {
            opacity:0,
            scale:0.3,
            rotation:-20
        },

        {
            opacity:1,
            scale:1,
            rotation:0,
            duration:1.5,
            ease:"power3.out",

            onComplete(){

                setTimeout(hideFood,3000);

            }

        }

    );

}

// ===============================
// FOTOĞRAFI GİZLE
// ===============================

function hideFood(){

    gsap.to(dish,{

        opacity:0,

        scale:.8,

        duration:.8,

        onComplete(){

            current++;

            if(current < foods.length){

                analyzeFood();

            }else{

                finishExperiment();

            }

        }

    });

} 
// ===============================
// BİTİŞ
// ===============================

function finishExperiment(){

    gsap.to("#analysis",{

        opacity:0,

        duration:1

    });

    gsap.to("#scanner",{

        scale:.8,

        opacity:.2,

        duration:1

    });

    const finish=document.createElement("div");

    finish.id="finishScreen";

    finish.innerHTML=`

        <h1>EXPERIMENT COMPLETE</h1>

        <p>All dishes have been successfully analyzed.</p>

    `;

    document.body.appendChild(finish);

    gsap.from(finish,{

        opacity:0,

        scale:.5,

        duration:1.5,

        ease:"back.out(1.7)"

    });

}
