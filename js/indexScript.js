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
