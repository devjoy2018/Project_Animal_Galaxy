////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".popupButton").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("popupContainer").style.display = "block";
  });
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "none";
});
