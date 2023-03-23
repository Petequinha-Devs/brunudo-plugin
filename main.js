var searchTerm = "cookie";

function displayImage() {
  var img = document.createElement("img");

  img.src = "https://drive.google.com/uc?export=view&id=1Vs1n7syPldk3sPsIH58LSk5Duci9E4yV";
  img.style.position = "fixed";
  img.style.bottom = "0px";
  img.style.right = "0px";
  img.style.width = "150px";

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
