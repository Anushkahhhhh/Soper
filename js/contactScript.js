document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'am' }, 'google_translate_element');
}
