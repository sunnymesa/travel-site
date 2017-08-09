import $ from "jquery";

import MobileMenu from "./modules/MobileMenu.js";
import RevealOnScroll from "./modules/RevealOnScoll.js";

var mobileMenu = new MobileMenu();

// feature item
new RevealOnScroll($(".feature-item"), "85%");
// testimonial
new RevealOnScroll($(".testimonials"), "60%");
