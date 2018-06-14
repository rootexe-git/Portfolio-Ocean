window.onload = function () {
    try {
        TagCanvas.textColour = '#1e88e5';
        TagCanvas.outlineMethod = 'none';
        TagCanvas.textFont = 'Roboto, sans-serif';
        TagCanvas.Start('skillCanvas');
    } catch (e) {
        document.getElementById('skillContainer').style.display = 'none';
    }
};