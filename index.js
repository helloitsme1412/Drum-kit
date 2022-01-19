var n = document.querySelectorAll(".drum").length;
for(var i = 0; i<n; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

function handleclick()
{
    var letter = this.innerHTML;

    makesound(letter);
    buttonpress(letter);
        
    }
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonpress(event.key);
})
function makesound(key){
    switch(key){
        case "w":
            var tom1 = new Audio(src="sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio(src="sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio(src="sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio(src="sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var crash = new Audio(src="sounds/crash.mp3");
            crash.play();
        break;
        case "k":
            var kick = new Audio(src="sounds/kick-bass.mp3");
            kick.play();
        break;
        case "l":
            var snare = new Audio(src="sounds/snare.mp3");
            snare.play();
        break;

        default: console.log(letter);
}
}

function buttonpress(currentkey){
    var activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
        
    }, 1000);
}
