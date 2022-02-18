var character = document.getElementById("player");
var block = document.getElementById("enemy");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

var collision = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && playerTop > 130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("OVER");
        window.location.reload();
    }
}, 10);