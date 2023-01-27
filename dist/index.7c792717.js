const hamburger = document.getElementById("hamburger");
const navRightSide = document.getElementById("nav-right-side");
hamburger.addEventListener("click", (e)=>{
    e.preventDefault();
    hamburger.classList.toggle("is-active");
    navRightSide.classList.toggle("nav-active");
});

//# sourceMappingURL=index.7c792717.js.map
