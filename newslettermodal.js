(function () {

var newsletterUser = document.getElementById('newsletterUser').innerHTML;

var newsletterDisplayedKey = 'newsletterDisplayed' + newsletterUser;

var newsletterDisplayedDelay = 28;

//Element References
var newsletterModal = document.getElementById('newsletterModal');
var submitButton = document.getElementById('ekmresponseSignupButton');
var newsletterClose = document.getElementById('newsletterModalClose');

function CreateCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate()+days);
  var expires = '; expires=' + date + '; path=/';

  document.cookie = name + '=' + value + expires;
}

function ReadCookie(name) {
  var nameEquals = name + '=';
  var ca = document.cookie.split(';');

  for(var i = 0; i < ca.length; i++ ) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEquals) == 0) return c.substring(nameEquals.length,c.length);
  }
  return null;
}

function isNewsLetterDisplayed() {
  return ReadCookie(newsletterDisplayedKey) != null;
}

function setNewsletterDisplayed(val) {
  var isDisplayed = val == null ? true : val;
  CreateCookie(newsletterDisplayedKey, isDisplayed, newsletterDisplayedDelay);
}

function setDisplayed() {
  setNewsletterDisplayed()
  newsletterModal.style.display = 'none';
}

function newsletterDisplayedCheck(options) {
  newsletterModal.style.display = isNewsLetterDisplayed() ? null : 'block';
}

window.ekmnewsletterSubmit = function (email) {
  if (!(/.+@.+\..+/).test(email)) {
    alert('Please enter a valid email address');
    return false;
  }
   return true;
}

window.ekmnewsletterSuccess = function () {
  setTimeout(setDisplayed, 3000);
}

newsletterClose.addEventListener('click', setDisplayed);

newsletterDisplayedCheck();

})();
