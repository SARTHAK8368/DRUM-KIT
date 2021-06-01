// DETECTING BUTTON PRESS
var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(b) {
  b.addEventListener("click", handle_click)
});

function handle_click() {
  // alert("Got clicked");
  //
  // this.style.color="white";
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(event) {
  // alert("key was pressed!");
  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //to add audio
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var sounds = new Audio("sounds/crash.mp3");
      sounds.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
