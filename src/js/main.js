const modal = document.querySelector(".modal");
const btn = document.querySelector(".openPopupButton");
const span = document.querySelector(".close");
const popupText = document.querySelector(".popupText");
const resetButton = document.querySelector(".resetButton");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  var numberofClicks=localStorage.getItem("numberOfClicks");
  if(numberofClicks == null)
  {
    localStorage.setItem("numberOfClicks", 1);
  }
  else
  {
    numberofClicks++;
  }
  localStorage.setItem("numberOfClicks", numberofClicks);
  popupText.innerHTML="You have clicked <b>"+localStorage.getItem("numberOfClicks")+" times</b> to related button.";
  if(numberofClicks < 5)
  {
    resetButton.style.display="none";
  }
  else
  {
    resetButton.style.display="block";
  }
}

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