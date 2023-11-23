const submitButton = document.getElementsByClassName('primary-button')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const nameOutput = document.getElementById('username')
const imageSlider = document.getElementById('slider')


submitButton[0].addEventListener("click", function(event){
    if(nameInput.value.length === 0 || emailInput.value.length === 0){
        alert("Nama atau email tidak boleh kosong")
    } else
        alert("Submit berhasil")
})

var i = 0
const images = [
    "assets/ind.jpg",
    "assets/ind1.jpg",
    "assets/ind2.jpg",
    "assets/ind3.jpg"
]

function bannerSlide() {
    i += 1
    if (i == images.length){
        i = 0
    }
    imageSlider.src = images[i]
}

setInterval(bannerSlide, 1000)

console.log("")