// Import Functions into main.js

import { filterPosts } from './filter.js';
import { handleScroll } from './header.js';

// Initialize filter, header, and clipboard functionality as needed
$(document).ready(function () {
  filterPosts(); // Call filterPosts() function
});

let header = document.querySelector("header");
window.addEventListener("scroll", handleScroll);
