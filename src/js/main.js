// Get the modal
const modal = document.querySelector(".modal");
// Get the button that opens the modal
const btn = document.querySelector(".openPopupButton");
// Get the <span> element that closes the modal
const span = document.querySelector(".close");
// Get the <span> element that closes the modal
const popupText = document.querySelector(".popupText");

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
    localStorage.setItem("numberOfClicks", parseInt(numberofClicks)+1);
  }
  popupText.innerHTML="You have clicked "+localStorage.getItem("numberOfClicks")+" times to related button.";
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