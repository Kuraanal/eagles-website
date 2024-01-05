const hero = document.querySelector(".hero");
const parallax_middle = hero.querySelector(".parallax-middle");
const parallax_top = hero.querySelector(".parallax-top");

var moveForce = 10;

document.addEventListener('mousemove', function (e) {
    var docX = window.innerWidth;
    var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
    var moveXMiddle = (e.pageX - docX / 2) / (docX / 2) * - (moveForce + 10);

    parallax_middle.style.transform = `translateX(${moveXMiddle}%)`;
    parallax_top.style.transform = `translateX(-${moveX}%)`;
});