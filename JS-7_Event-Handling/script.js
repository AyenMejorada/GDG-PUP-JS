// the add event listener waits for the user to click, as they click, the function would start to run
document.getElementById("colorButton").addEventListener("click", function () {
  // we multiply by 16777215 since 16777215 is the highest possible value for a 6-digit hex color, one example of hex color is #ffffff
  // "Math.floor" rounds the product into a whole number because "Math.random() makes a random decimal number that is between 0 and 1, it could be 0.5637 and so on"
  // ".toString(16) convert number into hexadecimal"
  // there is "#" because we need that for the hex color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
