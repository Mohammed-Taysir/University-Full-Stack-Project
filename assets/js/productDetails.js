
const imageView = document.querySelector(".product-details .image-part .image img");


const imagesSlides = document.querySelectorAll(".product-details .image-part .imag-slider img");
console.log(imagesSlides);

imagesSlides.forEach(img => {
  img.addEventListener("click", (e) => {
    
    imagesSlides.forEach(image => {
      if(image.classList.contains('active'))
        image.classList.remove("active");
    })

    img.classList.add("active")
    imageView.src = img.getAttribute("src")
  });
});

const minusButton = document.querySelector(".minus");
const addittionButton = document.querySelector(".addition");
const quantityInput = document.querySelector(".quantity-input");

minusButton.onclick = () => {
  if(quantityInput.value > 0)
    quantityInput.value -= 1;
}

addittionButton.onclick = () => {
  quantityInput.value = +quantityInput.value + 1;
}