var searchTerm = "cookie";

function displayImage() {
  var img = document.createElement("img");

  img.src = "https://drive.google.com/uc?export=view&id=1Vs1n7syPldk3sPsIH58LSk5Duci9E4yV";
  img.style.position = "fixed";
  img.style.width = "150px";

  let ramdomCorner = Math.floor(Math.random()*4)

  switch (ramdomCorner) {
    case 0:
      img.style.top = "0px";
      img.style.right = "0px"; 
      break;
    case 1:
      img.style.bottom = "0px";
      img.style.right = "0px";
    case 2:
      img.style.top = "0px";
      img.style.left = "0px";
      img.style.transform = "scaleX(-1)";
    break;
    default:
      img.style.bottom = "0px";
      img.style.left = "0px";
      img.style.transform = "scaleX(-1)";
    break;
  }

  document.body.appendChild(img);
  setTimeout(function() {
    img.remove();
  }, 6500);
}

if (document.body.innerText.includes(searchTerm)) {
  console.log(searchTerm + " found!")
  displayImage();
}
else {
  console.log(searchTerm + " not found!")
}
