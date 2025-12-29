
function gefeliciteerd() {
    window.location.href = "tadaa.html";
}

function NaarScreen2() {
    window.location.href = "screen2.html";
}

function goToLoopBegin() {
    window.location.href = "loopbegin.html";
}


function startCelebration() {
    const content = document.getElementById("celebrationContent");
    content.style.display = "block";

    // Play music
    const audio1 = document.getElementById("music1");
    audio1.volume = 0.5;
    audio1.play();

    const audio2 = document.getElementById("music2");
    audio2.volume = 0.3;
    audio2.play();

    // Start looping confetti
    setInterval(() => {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.8 }
        });
    }, 2000);

    document.getElementById("startBtn").style.display = "none";
}