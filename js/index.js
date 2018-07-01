window.onload = function () {
    try {
        TagCanvas.textColour = '#ffffff';
        TagCanvas.outlineMethod = 'none';
        TagCanvas.textFont = 'Roboto, sans-serif';
        TagCanvas.Start('skillCanvas');
    } catch (e) {
        document.getElementById('skillContainer').style.display = 'none';
    }
};

window.AOS.init();

document.getElementById("sendEmail").addEventListener("click", function(e) {
    e.target.style.display = "none";
    document.getElementById("confirmEmail").style.display = "block";
    setTimeout(function(){ 
        e.target.style.display = "block";
        document.getElementById("confirmEmail").style.display = "none";
    }, 5000);
});