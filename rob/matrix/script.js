const experienceButton = document.getElementById("experience-link");

experienceButton.addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("experience").style.display = "block";
});

const homeButton = document.getElementById("home-link");

homeButton.addEventListener("click", () => {
  document.getElementById("experience").style.display = "none";
  document.getElementById("home").style.display = "block";
});
