// About me tabs
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// Mobile Side Menu
const sideMenu = document.getElementById("side-menu");

function closeMenu() {
  sideMenu.style.right = "-180px";
}

function openMenu() {
  sideMenu.style.right = "0";
}

// Contact Form to Google Sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOItMMQxKWggezsBoDugV4J70_OTUXC2i3VhZDmuVLSfZYbY6WB0xQjidZWt08Ti0/exec'
const form = document.forms['submit-to-google-sheet'];
const googleSheet = document.getElementById('google-sheet-btn');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      googleSheet.innerHTML = "Message sent successfully"
      setTimeout(function(){
        googleSheet.innerHTML = ""
      }, 5000)
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})