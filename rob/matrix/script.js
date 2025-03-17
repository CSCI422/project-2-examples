const experienceButton = document.getElementById("experience-link");

experienceButton.addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("experience").style.display = "block";
  document.getElementById("page-header").innerHTML = "[cv]";
});

const homeButton = document.getElementById("home-link");

homeButton.addEventListener("click", () => {
  document.getElementById("experience").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("page-header").innerHTML = "[home]";
});
