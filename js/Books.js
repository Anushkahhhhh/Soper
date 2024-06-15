// $('select').each(function() {

//     var $this = $(this),
//         numberOfOptions = $(this).children('option').length;

//     $this.addClass('s-hidden');

//     $this.wrap('<div class="select"></div>');

//     $this.after('<div class="styledSelect"></div>');

//     var $styledSelect = $this.next('div.styledSelect');

//     $styledSelect.text($this.children('option').eq(0).text());

//     var $list = $('<ul />', {
//         'class': 'options'
//     }).insertAfter($styledSelect);

//     for (var i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//     }

//     var $listItems = $list.children('li');

//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.styledSelect.active').each(function() {
//             $(this).removeClass('active').next('ul.options').hide();
//         });
//         $(this).toggleClass('active').next('ul.options').toggle();
//     });

//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('active');
//         $this.val($(this).attr('rel'));
//         $list.hide();

//     });

//     $(document).click(function() {
//         $styledSelect.removeClass('active');
//         $list.hide();
//     });



// });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


document.getElementById('selectbox1').addEventListener('change', function() {
    const currentValue = this.value;
    const allbooks = document.querySelectorAll('.allbook');
    
    allbooks.forEach(book => {
        if (currentValue === "" || book.classList.contains(currentValue)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'am' }, 'google_translate_element');
}
