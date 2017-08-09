import $ from "jquery";

import MobileMenu from "./modules/MobileMenu.js";
import RevealOnScroll from "./modules/RevealOnScoll.js";
import StickyHeader from "./modules/StickyHeader.js";
import Modal from "./modules/Modal.js";


var mobileMenu = new MobileMenu();

// feature item
new RevealOnScroll($(".feature-item"), "85%");
// testimonial
new RevealOnScroll($(".testimonials"), "60%");


var stickyHeader = new StickyHeader();

var modal = new Modal();
