let profile = document.getElementById("profile");
let dropdown = document.getElementById("drop");

profile.addEventListener("click", () => {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else dropdown.style.display = "none";
});
