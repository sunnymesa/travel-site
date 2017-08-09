import $ from 'jquery';

class MobileMenu {
  constructor() {
    // alert ("Testing from mobile menu");

    // $(".site-header__menu-icon").click(function() {
    //   console.log("top right icon was click");
    // });

    this.siteHeader = $("site-header");
    this.menuIcon = $("site-header__menu-icon");
    this.menuContent = $("site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    // console.log("icon was clicked");
    this.menuContent.toggleClass(".site-header__menu-content--is-visible");
    this.siteHeader.toggleClass(".site-header--is-expanded");
    this.menuIcon.toggleClass(".site-header__menu-icon--close-x");

    console.log("hello");
  }
}

export default MobileMenu;
