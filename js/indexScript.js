const images = [
     "url(Images/Ճշմարտություն.jpg)",
    "url(Images/Լռակյաց հիվանդը.jpg)",
    "url(0_zHJya_cFQMtBXFvn.jpg)",
    "url(13-captivating-facts-about-beinecke-library-1695483441.jpg)"
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
    backImageElement.style.backgroundImage = libraryElements[1].getAttribute(`${images[currentImageIndex]}`);
  }

  console.log(libraryElements[1].getAttribute('src'))
  
  setInterval(changeBackgroundImage, 3000);
  
//   libraryElements.forEach((img, index) => {
//     img.addEventListener('click', () => {
//       backImageElement.style.backgroundImage = images[index];
//     });
//   });