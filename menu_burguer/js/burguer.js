const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".nav-sub");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("change");
  navsub.classList.toggle("nav-change");
  navsub.style.display = "flex";
  
  if (hamburger.classList.contains("change")) {
    navsub.style.display = "flex";
  } else {
    navsub.style.display = "none";
  }
});
