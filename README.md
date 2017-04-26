Modal to hold the [ekm:newsletter] tags for ekmResponse sign ups.

When inserted into a customers site this will display a modal that holds a signup form for ekm response, the form will only accept an email address, and provides some basic validation for it. There are options to control how often the modal is displayed. These are set under the script tag in the HTML for the desktop and mobile themes

delay: integer value for the number of days a fixed length cookie is stored for, script will always use 1 as a minimum.

session:  true or false, sets whether the cookie is is stored for the session or for a fixed length of time on the browser.

#Installation 
  1. Copy newslettermodal.js into other files on the sites file manager, copy newslettermodal.css into the style sheets folder in the file manager.
  2. copy contents of desktop and mobile .html files into the theme custom layout. comments on the files will tell you where in the theme different sections need to be pasted. 

IMPORTANT many of the themes use styling on #ekmresponsesignupbutton or similar this needs to be removed or commented out or there will be layout/display issues. You also need to remove any standard newsletter tags from the theme due to this, so it either runs this modal or the default one on the theme, not both. 
