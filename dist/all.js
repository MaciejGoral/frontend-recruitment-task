const modal=document.querySelector(".modal"),btn=document.querySelector(".openPopupButton"),span=document.querySelector(".close"),popupText=document.querySelector(".popupText"),resetButton=document.querySelector(".resetButton");btn.onclick=function(){modal.style.display="block";var e=localStorage.getItem("numberOfClicks");null==e?localStorage.setItem("numberOfClicks",1):e++,localStorage.setItem("numberOfClicks",e),popupText.innerHTML="You have clicked <b>"+localStorage.getItem("numberOfClicks")+" times</b> to related button.",resetButton.style.display=e<5?"none":"block"},resetButton.onclick=function(){localStorage.setItem("numberOfClicks",0),popupText.innerHTML="You have clicked "+localStorage.getItem("numberOfClicks")+" times to related button.",resetButton.style.display="none"},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")};