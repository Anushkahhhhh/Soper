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
