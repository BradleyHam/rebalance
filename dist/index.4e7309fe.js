let bookButtons = document.querySelectorAll(".book-button");
let closeButton = document.querySelector(".modal__close");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");
bookButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        e.preventDefault();
        overlay.classList.toggle("active");
        modal.classList.toggle("active");
    });
});
closeButton.addEventListener("click", ()=>{
    overlay.classList.remove("active");
    modal.classList.remove("active");
});

//# sourceMappingURL=index.4e7309fe.js.map
