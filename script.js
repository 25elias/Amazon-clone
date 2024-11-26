let btnSlideLeft = document.getElementById("btn-slider_left");
let btnSlideRight = document.getElementById("btn-slider_right");

let imgItem = document.querySelectorAll(".image-item")

console.log(imgItem)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100

console.log(endSlider)

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
btnSlideRight.addEventListener("click", ()=> {
    // alert("You just clicked right!")
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`
    })
    console.log(startSlider)
})