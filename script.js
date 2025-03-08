document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const proposalText = document.getElementById("proposalText");
    const proposalImage = document.getElementById("proposalImage");

    // Funny responses with corresponding images
    const funnyResponses = [
        { text: "You sure you don't want me? 😢", image: "img/sad boss baby.png" },  
        { text: "Come on, just think again! 😭", image: "img/angry boss baby.png" },
        { text: "What if I say please? 🥺", image: "img/offering boss baby.png" },
        { text: "I'll buy you food! 🍕", image: "img/dance.png" },
        { text: "I’m the best choice, trust me! 😎", image: "img/im perfect.png" },
        { text: "Alright, last chance! REALLY sure? 🤨", image: "img/lasttime.png" },
        { text: "You're breaking my heart 💔💀", image: "img/breaking.png" },
        { text: "Okay, okay… but what if I dance? 💃😂", image: "img/what if dance.png" },
        { text: "I won't stop until you say yes! 😈", image: "img/wont stop.png" },
        { text: "Fine... but you’ll regret this forever! 😭", image: "img/hourse.png" }
    ];

    const finalImage = "img/laast.png"; // Last image for "No"
    const happyImage = "img/one.png"; // Image when clicking "Yes"

    let noClickCount = 0; // Track how many times "No" is clicked

    // Preload all images to avoid delays
    function preloadImages() {
        funnyResponses.forEach(item => {
            const img = new Image();
            img.src = item.image;
        });

        // Preload final images too
        new Image().src = finalImage;
        new Image().src = happyImage;
    }

    preloadImages(); // Call the function on page load

    // When clicking "No"
    noButton.addEventListener("click", () => {
        if (noClickCount < funnyResponses.length) {
            proposalText.innerHTML = funnyResponses[noClickCount].text;
            proposalImage.src = funnyResponses[noClickCount].image;
            noClickCount++;
        } else {
            proposalText.innerHTML = "You can't escape! Just say YES already! 🤣";
            proposalImage.src = finalImage;
        }

        yesButton.innerText = "Okay, fine... 😅";
        noButton.innerText = "Still NO! 😤";
    });

    // When clicking "Yes"
    yesButton.addEventListener("click", () => {
        proposalText.innerHTML = "I knew you’d say yes… LET’S GOOOO! 🎉💖";
        yesButton.innerText = "YAY! 🥳";
        noButton.style.display = "none"; // Remove "No" button
        proposalImage.src = happyImage;

        // Confetti effect
        startConfetti();
    });

    // Fun confetti effect
    function startConfetti() {
        const confetti = document.createElement("div");
        confetti.innerHTML = "❤️";
        confetti.classList.add("heart");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }

    // Generate floating hearts continuously
    setInterval(startConfetti, 500);
});
