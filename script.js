let isText = false;

function displayText() {
  var text = document.getElementById("textField");
  if(isText == false){
    text.style.display = "block";
    isText = true;
  } else {
    text.style.display = "none";
    isText = false;
  }
  
}
