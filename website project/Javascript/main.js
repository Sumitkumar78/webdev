
 var btn = document.getElementById("go-button");
 function buttonClicked(){
     console.log("Button clicked");
     btn.removeEventListener("click",buttonClicked);
 }
 btn.addEventListener("click",buttonClicked);