// ==========================================
// 🎂 BIRTHDAY WEBSITE - JAVASCRIPT
// From Big Brother ❤️
// ==========================================


// ------------------------------------------
// 1. SURPRISE BUTTON
// ------------------------------------------

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function () {

    surpriseMessage.classList.remove("hidden");

    surpriseBtn.innerHTML = "❤️ Surprise Opened ❤️";

    createHeartExplosion();
    createConfetti();

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});


// ------------------------------------------
// 2. FLOATING HEARTS
// ------------------------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💖", "💗", "💓"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}
  


// Create hearts automatically

setInterval(createHeart, 900);

/* =================================
   3 RECTANGULAR MEMORY BOXES
   ================================= */


// ------------------------------------------
// 3. HEART EXPLOSION
// ------------------------------------------

function createHeartExplosion() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 300;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px),
                        calc(-50% + ${y}px)) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200 + Math.random() * 800,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 2200);
    }
}


// ------------------------------------------
// 4. CONFETTI 🎉
// ------------------------------------------

function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "❤️",
        "🌸",
        "⭐"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(Math.random() * symbols.length)
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-40px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh)
                        rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    2500 + Math.random() * 3000,

                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}


// ------------------------------------------
// 5. CLICK ANYWHERE = HEART 💕
// ------------------------------------------

document.addEventListener("click", function (event) {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.fontSize = "22px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(0.5)",
                opacity: 1
            },
            {
                transform:
                    "translate(-50%, -150px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 1000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 1000);

});


// ------------------------------------------
// 6. TYPING EFFECT ✨
// ------------------------------------------

const typingText =
    "You are not just my sister... You are one of the most precious people in my life. ❤️";

let typingIndex = 0;


// Create typing box automatically

const typingBox =
    document.createElement("p");

typingBox.id = "typingMessage";

typingBox.style.textAlign = "center";
typingBox.style.fontSize = "20px";
typingBox.style.fontWeight = "bold";
typingBox.style.color = "#e91e63";
typingBox.style.maxWidth = "650px";
typingBox.style.margin = "25px auto";
typingBox.style.lineHeight = "1.7";


// Add it near the end of the page

const footer =
    document.querySelector("footer");

if (footer) {
    footer.before(typingBox);
}


function typeMessage() {

    if (typingIndex < typingText.length) {

        typingBox.innerHTML +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeMessage, 50);
    }
}


// Start typing after 2 seconds

setTimeout(typeMessage, 2000);


// ------------------------------------------
// 7. BIRTHDAY COUNTDOWN MESSAGE
// ------------------------------------------

const birthdayTitle =
    document.querySelector(".hero h1");

if (birthdayTitle) {

    birthdayTitle.addEventListener(
        "click",
        function () {

            createConfetti();

            birthdayTitle.innerHTML =
                "🎂 HAPPY BIRTHDAY! 🎂";

            setTimeout(() => {

                birthdayTitle.innerHTML =
                    "Happy Birthday";

            }, 3000);

        }
    );
}


// ------------------------------------------
// 8. LOVE MESSAGE POPUP 💌
// ------------------------------------------

function showLoveMessage() {

    const popup =
        document.createElement("div");

    popup.style.position = "fixed";

    popup.style.left = "50%";
    popup.style.top = "50%";

    popup.style.transform =
        "translate(-50%, -50%)";

    popup.style.width = "90%";
    popup.style.maxWidth = "450px";

    popup.style.padding = "30px";

    popup.style.background = "white";

    popup.style.borderRadius = "25px";

    popup.style.textAlign = "center";

    popup.style.boxShadow =
        "0 20px 60px rgba(0,0,0,0.3)";

    popup.style.zIndex = "10000";

    popup.innerHTML = `

        <div style="font-size:55px;">💖</div>

        <h2 style="color:#e91e63;">
            A Little Secret ❤️
        </h2>

        <p style="
            line-height:1.8;
            font-size:17px;
        ">
            No matter where life takes us,
            remember that your big brother
            will always wish the best for you.
            <br><br>
            Keep smiling and keep shining. ✨
        </p>

        <button id="closePopup"
        style="
            margin-top:15px;
            padding:12px 25px;
            border:none;
            border-radius:25px;
            background:#e91e63;
            color:white;
            font-size:16px;
        ">
            Close ❤️
        </button>
    `;

    document.body.appendChild(popup);

    document
        .getElementById("closePopup")
        .addEventListener("click", function () {

            popup.remove();

        });

}


// ------------------------------------------
// 9. SHOW SECRET MESSAGE AFTER 10 SECONDS
// ------------------------------------------

setTimeout(function () {

    showLoveMessage();

}, 10000);


// ------------------------------------------
// 10. PAGE LOAD CELEBRATION 🎉
// ------------------------------------------

window.addEventListener("load", function () {

    setTimeout(function () {

        createConfetti();

    }, 800);

}); 


