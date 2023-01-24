const list = document.querySelectorAll(".list");

function activeLinks() {
  list.forEach((links) => {
    links.classList.remove("active");
  });
  this.classList.add("active");
}

list.forEach((links) => {
  links.addEventListener("click", activeLinks);
});
