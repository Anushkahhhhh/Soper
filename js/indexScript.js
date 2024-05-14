const images = [
     "url(Images/Ճշմարտություն.jpg)",
    "url(Images/Լռակյացհիվանդը.jpg)",
    "url(Images/Իմհանճարեղընկերուհին.jpg)",
    "url(Images/Տատիկսբարևումէ.jpg)",
    "url(Images/Ցասում.jpg)",
    "url(Images/գիրք2.jpg)",
  ];
  const backImageElement = document.querySelector('.backimage');
  const libraryElements = document.querySelectorAll('.library img');
  
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
  
    if (currentImageIndex == images.length){
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    backImageElement.style.backgroundImage = images[currentImageIndex];
}

  console.log(libraryElements[1].getAttribute('src'))
  
  setInterval(changeBackgroundImage, 3000);
  
//   libraryElements.forEach((img, index) => {
//     img.addEventListener('click', () => {
//       backImageElement.style.backgroundImage = images[index];
//     });
//   });