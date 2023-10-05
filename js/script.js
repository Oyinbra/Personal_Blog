// FILTER JS
$(document).ready(function () {
  $('.filter-item').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.post-box').show('1000')
    }
    else {
      $('.post-box').not('.' + value).hide('1000')
      $('.post-box').filter('.' + value).show('1000')
    }
  });
  // ADD ACTIVE TO BUTTONS
  $('.filter-item').click(function () {
    $(this).addClass('active-filter').siblings().removeClass('active-filter');
  })
})

// HEADER BACKGROUND CHANGE ON SCROLL
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
})

// COPY TO CLIPBOARD
function copyToClipboard() {
  const codeBlock = document.querySelector(".code-container code");
  const textArea = document.createElement("textarea");
  textArea.value = codeBlock.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Code copied to clipboard!");
}
