(function () {

var newsletterUser = document.getElementById('newsletterUser').innerHTML;

var newsletterDisplayedKey = "newsletterDisplayed" + newsletterUser;

var newsletterDisplayedDelay = 28;

//Element References

function CreateCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate()+days);
  var expires = "; expires=" + date + "; path=/";
}

function ReadCookie(name) {
  var nameEquals = name + "=";
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
  newsletter.style.display = 'none';
}

function newsletterDisplayedCheck(options) {
  newsletter.style.display = isNewsLetterDisplayed() ? "none" : "block";
}

newsletterDisplayedCheck();

})();
