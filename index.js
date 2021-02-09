//codefilms content
var CodeFilmsContent = ["Finance", "Economics", "Internet Technologies", "Financial Services", "Money", "Fixes"];

//upon click event display content type
window.onclick = function() {
  var text = "";
  text = CodeFilmsContent.shift();
  if (typeof text !== 'undefined') {
    console.log(text); //debug text;
    document.getElementById("content").innerHTML = text;
  } else {

    //after affect settings
    document.getElementById("content").innerHTML = "";
    document.body.style.backgroundImage = "url('cheers.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";


    //end transition

    setTimeout(function () {
      document.body.style.backgroundImage = "";
      document.getElementById("content").style.fontFamily = "Luckiest Guy, cursive";
      document.getElementById("content").textContent = "Skrrrrrrr!!!!!";
    }, 2000);

  //  document.getElementById("content").style.fontFamily = "Luckiest Guy, cursive";
  //  document.getElementById("content").textContent = "Skrrrrrrr!!!!!";




  }
}

/*document.getElementById("content").onclick = function() {

  var text = "";
  text = CodeFilmsContent.shift();
  if (typeof text !== 'undefined') {
    console.log(text); //debug text;
    document.getElementById("content").innerHTML = text;
  } else {
    return;
  }

}*/
