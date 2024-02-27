const burger = document.querySelector("#i-menu");
const menu = document.querySelector("#inf-menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("disp");
});
