document.getElementById("start").addEventListener("click", function() {
    document.getElementById("start").style.display = "none";
    document.getElementById("question").style.display = "block";
});

let noButton = document.getElementById("no");
noButton.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

document.getElementById("yes").addEventListener("click", function() {
    alert("Жду тебя! ❤️");
});