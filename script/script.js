function getRandomColor() {
    // Generate random values for red, green, and blue channels
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Construct a CSS color string using RGB values
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    return color;
}
document.addEventListener("DOMContentLoaded", function() {
    // Select the color-box and change-color-btn elements
    var colorBox = document.getElementById("color-box");
    var changeColorBtn = document.getElementById("change-color-btn");

    // Add event listener to the change-color-btn element
    changeColorBtn.addEventListener("click", function() {
        // Change the background color of color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
