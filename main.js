var searchTerm1 = "cookie";
var searchTerm2 = "chuva";

function displayImage(imageType) {
  var img = document.createElement("img");
  var cookieImg = "https://drive.google.com/uc?export=view&id=1Vs1n7syPldk3sPsIH58LSk5Duci9E4yV";
  var rainImg = "https://drive.google.com/uc?export=view&id=1j2fmjw04aSd7SY2UZ1d8qaJyVWcHnlpN";
 
  img.src = imageType === "cookie" ? cookieImg : rainImg;
  img.style.position = "fixed";
  img.style.width = "150px";
  img.style.zIndex = "2147483641"; // 2147483640 = max zIndex

  let ramdomCorner = Math.floor(Math.random()*4)

  switch (ramdomCorner) {
    case 0:
      img.style.top = "0px";
      img.style.right = "0px"; 
      break;
    case 1:
      img.style.bottom = "0px";
      img.style.right = "0px";
      break;
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

if (document.body.innerText.includes(searchTerm1)) {
  console.log(searchTerm1 + " found!");
  displayImage("cookie");
} else if (document.body.innerText.includes(searchTerm2)) {
  console.log(searchTerm2 + " found!");
  displayImage("chuva");
} else {
  console.log("Neither " + searchTerm1 + " nor " + searchTerm2 + " found!");
}