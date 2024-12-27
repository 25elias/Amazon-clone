let btnSlideLeft = document.getElementById("btn-slider_left");
let btnSlideRight = document.getElementById("btn-slider_right");

let imgItem = document.querySelectorAll(".image-item")

// console.log(imgItem)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100

// console.log(endSlider)

btnSlideLeft.addEventListener("click", ()=> {
    // alert("You just clicked left!")
    if (startSlider < 0) {
        startSlider = startSlider + 100
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`
    })
    console.log(startSlider)
})
btnSlideRight.addEventListener("click", () => {
    // alert("You just clicked right!")
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`
    })
    console.log(startSlider)
})



/*  slide bar show-menu  */

const mobileMenu = document.getElementById("mobile-menu");
const sideBarOpen = document.getElementById("open-toggle");
const sideBarClose = document.getElementById("close-toggle");

// if(sideBarOpen) {
//     sideBarOpen.addEventListener("click", () => {
//         mobileMenu.classList.add("show-menu")
//     });
// }
sideBarOpen.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-menu")
})

// console.log(mobileMenu)

if(sideBarClose) {
    sideBarClose.addEventListener("click", () => {
        mobileMenu.classList.remove("show-menu")
});
}

