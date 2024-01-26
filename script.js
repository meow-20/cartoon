function getDate(){
    var now = new Date();
var today = now.getDate();
var month = now.getMonth() + 1; //January is 0
var year = now.getFullYear();

document.querySelector("#date").innerHTML = `${today}/${month}/${year}`
}
getDate();

function trailerPopup(){
    
var trailer = document.querySelector(".right-corner");
var popup = document.querySelector("#center-hidden");
var close = document.querySelector("#close");
trailer.addEventListener("click", function(){
    popup.style.display = "inline"
})
close.addEventListener("click",function (){
    popup.style.display="none";
})
}
trailerPopup();