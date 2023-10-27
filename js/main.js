// Import Functions into main.js

import { filterPosts } from './filter.js';
import { handleScroll } from './header.js';
import { highlightCode } from './synthax.js';

// Initialize filter, header, and clipboard functionality as needed
$(document).ready(function () {
  // Call filterPosts() function
  filterPosts();
  // Call the highlightCode function to highlight code
  highlightCode();
});

let header = document.querySelector("header");
window.addEventListener("scroll", handleScroll);
