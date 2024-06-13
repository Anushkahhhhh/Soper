const images = [
<<<<<<< HEAD
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
=======
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
  
  libraryElements.forEach((img, index) => {
    img.addEventListener('click', () => {
      backImageElement.style.backgroundImage = images[index];
    });
  });


 function checkInput() { 
var query = document.getElementById('search').value; //vercnel search- i bovandakutyuny 
var content = document.getElementById('content'); // vercnel te vortexic petq e gtnven mutqagrvac simvolnery kam barery       
 removeHighlights(content);
 if (query) { 
highlightText(content, query); 
} 
 } 
function highlightText(content, query) { 
  var regex = new RegExp('(' + query + ')', 'gi'); // regex artahaytutyun  search - i mej grvacy gtnelu hamar, 
// kap chuni mecatar te poqratar 
content.innerHTML = content.innerHTML.replace(regex, '<span class="highlight">$1</span>'); // yndgcel hamynknumnery 
} 
  
function removeHighlights(content) { 
content.innerHTML = content.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1'); // jnjel naxkin hamynknumnery 
} 
>>>>>>> 72b65970da0c027b3bc2a8ba569ab70051c40cd2
