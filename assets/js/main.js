const hero = document.querySelector(".hero");
const parallax_middle = hero.querySelector(".parallax-middle");
const parallax_top = hero.querySelector(".parallax-top");

const middlewindowWidth = window.innerWidth / 15;
const topwindowwidth = window.innerWidth / 5;

console.log(parallax_middle);
console.log(parallax_top);

hero.addEventListener("mousemove", (e) => {
    const middlemouseX = (e.clientX / middlewindowWidth) + 8;
    const topmouseX = (e.clientX / topwindowwidth);

    
    parallax_middle.style.transform = `translateX(${middlemouseX}%)`;
    parallax_top.style.transform = `translateX(-${topmouseX}%)`;
}); 

parallax_middle.sty