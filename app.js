function andGo() {
   
    
if (document.querySelector(".onOff").checked) {
    var img = document.getElementById('imageHolder');
    img.src = "shitPilot.gif"
    img.style.display = 'block';
} else {
    var nopeVid = document.getElementById("NopeVidHolder");
    nopeVid.style.display = 'block';
    nopeVid.play();
    var startAgain = document.getElementById("TryAgain");
    
    startAgain.style.display = 'block';

}
    
}