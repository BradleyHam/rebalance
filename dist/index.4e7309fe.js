let bookButtons = document.querySelectorAll(".book-button");
let closeButton = document.querySelector(".modal__close");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");
let serviceButtons = document.getElementsByClassName("services-card__image-container");
let secondaryButtons = document.querySelectorAll(".secondary-button");
let serviceButtonArray = Array.from(serviceButtons);
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
console.log(serviceButtonArray);
serviceButtonArray.forEach((button)=>{
    button.addEventListener("click", ()=>{
        console.log("hi");
        overlay.classList.toggle("active");
        modal.classList.toggle("active");
    });
});
secondaryButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        overlay.classList.toggle("active");
        modal.classList.toggle("active");
    });
});

//# sourceMappingURL=index.4e7309fe.js.map
