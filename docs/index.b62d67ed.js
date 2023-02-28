const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
let currentItem = 0;
function showItem(n) {
    items[currentItem].classList.remove("active");
    currentItem = (n + items.length) % items.length;
    items[currentItem].classList.add("active");
}
prevBtn.addEventListener("click", ()=>{
    showItem(currentItem - 1);
});
nextBtn.addEventListener("click", ()=>{
    showItem(currentItem + 1);
});
showItem(0);

//# sourceMappingURL=index.b62d67ed.js.map
