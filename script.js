let isText = false;
let isImage = false;

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

function displayImage() {
  var text = document.getElementById("imageField");
  if(isImage == false){
    text.style.display = "block";
    isImage = true;
  } else {
    text.style.display = "none";
    isImage = false;
  }
}
