(function () {
  if (typeof Object.assign != 'function') {
    Object.assign = function(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  //Element References
  var newsletterUserEl = document.getElementById('newsletterUser')
  var newsletterModal = document.getElementById('newsletterModal');
  var submitButton = document.getElementById('ekmresponseSignupButton');
  var newsletterClose = document.getElementById('newsletterModalClose');
  
  // 'Constants'
  var newsletterUser = newsletterUserEl.innerHTML;
  var newsletterDisplayedKey = 'newsletterDisplayed' + newsletterUser;
  var defaultOptions = {
    delay: 28,
    session: false
  };
  
  // Private Variables
  var options = Object.assign({}, defaultOptions);

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
    options.session == undefined || false ? CreateCookieSession(newsletterDisplayedKey, isDisplayed) : CreateCookieFixed(newsletterDisplayedKey, isDisplayed, options);
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

  function newsletterDisplayedCheck(opts) {
    options = Object.assign({}, defaultOptions, opts);
    isNewsLetterDisplayed() ? newsletterNotDisplayed() : newsletterIsDisplayed();
  }

  function contentClick(e) {
    if (!newsletterModal.contains(e.target)) {
      newsletterSetDisplayed();
    }
  }

  function ekmnewsletterSubmit(email) {
    if (!(/.+@.+\..+/).test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
     return true;
  }

  function ekmnewsletterSuccess() {
    setTimeout(newsletterSetDisplayed, 3000);
  }

  newsletterClose.addEventListener('click', newsletterSetDisplayed);

  window.ekmNewsletterModal = {
    Submit: ekmnewsletterSubmit,
    Success: ekmnewsletterSuccess,
    Check: newsletterDisplayedCheck
  };

})();
