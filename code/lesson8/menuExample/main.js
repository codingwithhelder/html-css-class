const burgerMenu = document.querySelector("#burgerMenu");
const closeButton = document.querySelector("#closeButton");

const sideBox = document.querySelector("#sideBox");

function toggleHiddenMenu() {
    sideBox.classList.toggle("hiddenMenu");
}

burgerMenu.addEventListener("click", toggleHiddenMenu);
closeButton.addEventListener("click", toggleHiddenMenu);