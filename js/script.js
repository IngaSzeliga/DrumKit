window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio#key-${event.keyCode}`);
    const keyEffect= document.querySelector(`.key#key-${event.keyCode}`);
    if(audio){
        audio.currentTime = 0; //we reset the audio to the beginning
        audio.play();
        keyEffect.classList.add("playing");
    };
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", function(event) {
    if(event.propertyName === "transform") {
        this.classList.remove("playing");
    }
}));