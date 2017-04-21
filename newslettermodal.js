(function () {

var newsletterUser = document.getElementById('newsletterUser').innerHTML;

var newsletterDisplayedKey = 'newsletterDisplayed' + newsletterUser;

//Element References
var newsletterModal = document.getElementById('newsletterModal');
var submitButton = document.getElementById('ekmresponseSignupButton');
var newsletterClose = document.getElementById('newsletterModalClose');

function CreateCookieFixed(name, value, options) {
  options.delay < 1 ? options.delay = 1 : null;
  var date = new Date();
  date.setDate(date.getDate()+options.delay);
  var expires = '; expires=' + date + '; path=/';

  document.cookie = name + '=' + value + expires;
}

function CreateCookieSession(name, value) {
  document.cookie = name + '=' + value +';';
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

function setNewsletterDisplayed(options) {
  var isDisplayed = true;
  options.session == undefined || false ? CreateCookieSession(newsletterDisplayedKey, isDisplayed) : CreateCookieFixed(newsletterDisplayedKey, isDisplayed, newsletterOptions);
}

function newsletterSetDisplayed() {
  setNewsletterDisplayed(newsletterOptions);
  newsletterNotDisplayed();
}

function newsletterNotDisplayed() {
  newsletterModal.style.display = 'none';
  window.removeEventListener('click', contentClick);
}

function newsletterIsDisplayed() {
  newsletterModal.style.display = 'block';
  window.addEventListener('click', contentClick);
}

function newsletterDisplayedCheck() {
  isNewsLetterDisplayed() ? newsletterNotDisplayed() : newsletterIsDisplayed();
}

function contentClick(e) {
  if (!newsletterModal.contains(e.target)) {
    newsletterSetDisplayed();
  }
}

window.ekmnewsletterSubmit = function (email) {
  if (!(/.+@.+\..+/).test(email)) {
    alert('Please enter a valid email address');
    return false;
  }
   return true;
}

window.ekmnewsletterSuccess = function () {
  setTimeout(newsletterSetDisplayed, 3000);
}

newsletterClose.addEventListener('click', newsletterSetDisplayed);

newsletterDisplayedCheck();

})();
