const modal = document.querySelector(".modal");
const btn = document.querySelector(".btnOpenPopup");
const span = document.querySelector(".close");
const popupText = document.querySelector("#popupText");
const resetButton = document.querySelector(".btnReset");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  var numberOfClicks=localStorage.getItem("numberOfClicks");
  //set number of clicks
  numberOfClicks == null ? numberOfClicks=1 : numberOfClicks++;
  localStorage.setItem("numberOfClicks", numberOfClicks);
  //display number of clicks
  popupText.innerHTML="You have clicked <b>"+localStorage.getItem("numberOfClicks")+" times</b> to related button.";
  //display or hide reset button
  numberOfClicks < 5?resetButton.style.display="none":resetButton.style.display="block"; 
}

// When the user clicks on the reset button set number of clicks to 0
resetButton.onclick = function() {
    localStorage.setItem("numberOfClicks", 0);
    popupText.innerHTML="You have clicked <b>"+localStorage.getItem("numberOfClicks")+" times</b> to related button.";
    resetButton.style.display="none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}