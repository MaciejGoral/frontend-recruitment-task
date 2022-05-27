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
  addDataToTable();
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

async function getData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  var data = await response.json();
  return data
}

async function addDataToTable()
{
  await getData().then(data => {
    const table = document.querySelector("#table");
    data.forEach(element => {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = element.name;
      cell2.innerHTML = element.email;
      cell3.innerHTML = element.address.city+" "+element.address.street+" "+element.address.suite;
      cell4.innerHTML = element.phone;
      cell5.innerHTML = element.company.name;
    });
  });
}

