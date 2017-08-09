import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.js";

class RevealOnScroll {
  constructor (eles /* elements */, offsets) {
    this.itemsToReveal = eles;
    this.offset = offsets;

    this.hideInitiallly();
    this.createWaypoints();

  }

  hideInitiallly () {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      // alert("testing");
      // this,
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offset
      });
    })
  }
}


export default RevealOnScroll;
