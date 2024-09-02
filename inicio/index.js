const nav = document.querySelector(".nav"),

searchIcon  = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {

nav.classlist.toggle("openSearch");

nav.classList.remove("openliav"); if (nav.classList.contains("openSearch")) {

return searchIcon.classlist.replace("uil-search", "uil-times");

}

searchIcon.classlist.replace("ull-times", "uil-search"); });

navOpenBtn.addEventListener("click", () => {

nav.classList.add("openNav"); nav.classList.remove("openSearch");

searchIcon.classlist.replace("uil-times", "uil-search"); });

navCloseBtn.addEventListener("click", () => {

nav.classList.remove("openliav");

});