const images = [
  "Images/Ճշմարտություն.jpg",
  "Images/Լռակյացհիվանդը.jpg",
  "Images/Իմհանճարեղընկերուհին.jpg",
  "Images/Տատիկսբարևումէ.jpg",
  "Images/Ցասում.jpg"
];

const backImageElement = document.querySelector('.backimage');
const libraryElements = document.querySelectorAll('.library img');

let currentImageIndex = 0;

function changeBackgroundImage() {
  if (currentImageIndex === images.length - 1) {
      currentImageIndex = 0;
  } else {
      currentImageIndex++;
  }
  console.log("Setting background image to:", images[currentImageIndex]);
  backImageElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeBackgroundImage, 3000);

libraryElements.forEach((img, index) => {
  img.addEventListener('click', () => {
      console.log("Clicked on image:", images[index]);
      backImageElement.style.backgroundImage = `url(${images[index]})`;
  });
});
