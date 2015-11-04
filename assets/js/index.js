// Shorthand for $( document ).ready()
$(function() {
    console.log("indexjs: Running Flowtype on body");
    /*    $('body').flowtype({
           minimum   : 500,
           maximum   : 1200,
           minFont   : 12,
           maxFont   : 20,
           fontRatio : 40 //the higher the ratio, the more compact is the font
        });*/

    //Swipebox
    //http://brutaldesign.github.io/swipebox/
    if (document.querySelector(".swipebox")) {
        console.log("indexjs: Running swipebox");
        $('.swipebox').swipebox();
    }

/*    if (document.querySelector(".nav-collapse")) {
        console.log("indexjs: Running responsiveNav");
        var nav = responsiveNav(".nav-collapse", { // Selector
            animate: true, // Boolean: Use CSS3 transitions, true or false
            transition: 284, // Integer: Speed of the transition, in milliseconds
            label: "Menu", // String: Label for the navigation toggle
            insert: "before", // String: Insert the toggle before or after the navigation
            customToggle: "", // Selector: Specify the ID of a custom toggle
            closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
            openPos: "relative", // String: Position of the opened nav, relative or static
            navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
            navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
            jsClass: "js", // String: 'JS enabled' class which is added to  element
            init: function() {}, // Function: Init callback
            open: function() {}, // Function: Open callback
            close: function() {} // Function: Close callback
        });
    }*/




});



/* =============================================
 *
 *   FIXED RESPONSIVE NAV
 *
 *   (c) 2014 @adtileHQ
 *   http://www.adtile.me
 *   http://twitter.com/adtilehq
 *
 *   Free to use under the MIT License.
 *
 * ============================================= */

(function () {

  "use strict";

  // Feature test to rule out some older browsers
  if ("querySelector" in document && "addEventListener" in window) {

    // forEach method, that passes back the stuff we need
    var forEach = function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };

    // Attach FastClick to remove the 300ms tap delay
    FastClick.attach(document.body);

    // Init smooth scrolling
    //smoothScroll.init();
    
    var navigation;
     if (document.querySelector(".nav-collapse")) {
         console.log("indexjs: Running responsiveNav")
         // Init Responsive Nav
         navigation = responsiveNav(".nav-collapse", {
         // Close the navigation when it's tapped
         closeOnNavClick: true
         });
   

   
    // Create a Mask
    var mask = document.createElement("div");
    mask.className = "mask";

    // Append the mask inside <body>
    document.body.appendChild(mask);

    // Disable mask transitions on Android to boost performance
    if (navigator.userAgent.match(/Android/i) !== null) {
      document.documentElement.className += " android";
    }

    // Find navigation links and save a reference to them
    var nav = document.querySelector(".nav-collapse ul"),
      links = nav.querySelectorAll("a");

    // "content" will store all the location cordinates
   // var content;

    // Set up an array of locations which we store in "content"
    var setupLocations = function () {
      content = [];
      forEach(links, function (i, el) {
        var href = links[i].getAttribute("href").replace("#", "");
        content.push(document.getElementById(href).offsetTop + 200);
      });
    };

    // call locations set up once
  //  setupLocations();

    // Re-calculate locations on window resize and orientation change
    window.addEventListener("resize", function () {
    //  setupLocations();
    }, false);

    // Highlight active link on the navigation
    var selectActiveMenuItem = function (i) {
      forEach(links, function (i, el) {
        links[i].parentNode.className = links[i].parentNode.className.replace(/[\s]{0,}active/, "");
      });
      links[i].parentNode.className += links[i].parentNode.className ? " active" : "active";
    };


    // Highlight active link when scrolling
    var wasNavigationTapped = false;
    window.addEventListener("scroll", function () {

      // Determine viewport and body size
      var top = window.pageYOffset,
        body = document.body,
        html = document.documentElement,
        viewport = window.innerHeight,
        bodyheight = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );

      // For each content link, when it's in viewport, highlight it
      if (!wasNavigationTapped) {
        forEach(content, function (i, loc) {
          if ((loc > top && (loc < top + 300 || (top + viewport) >= bodyheight))) {
            selectActiveMenuItem(i);
          }
        });
      }
    }, false);

    // Close navigation when tapping the mask under it
    mask.addEventListener("click", function (e) {
      e.preventDefault();
      navigation.close();
    }, false);

    // Clear wasNavigationTapped check after scrolling
    var clearTapCheck = function () {
      setTimeout(function () {
        wasNavigationTapped = false;
      }, 500);
    };

      } 

    //END OF IF RESPONSIVE NAV

      /*

    // Select the right navigation item when tapping the logo
    document.querySelector(".logo").addEventListener("click", function (e) {
      e.preventDefault();
      wasNavigationTapped = true;

      // Select first navigation item
      selectActiveMenuItem(0);

      // Close navigation
      navigation.close();

      // Remove hash from the URL if pushState is supported
      if (history.pushState) {
        history.pushState("", document.title, window.location.pathname);
      }

      // Clear wasNavigationTapped check
      clearTapCheck();
    }, false);

    // When a navigation item is tapped, select it and begin scrolling
    forEach(links, function (i, el) {
      links[i].addEventListener("click", function (e) {
        e.preventDefault();
        wasNavigationTapped = true;

        // Select right navigation item (we are passing which one to select "i")
        selectActiveMenuItem(i);

        // Show the URL of the section on the address bar
        var thisID = this.getAttribute("href").replace("#", ""),
          pane = document.getElementById(thisID);

        // If the URL isn't "#home", change it
        if (thisID !== "home") {
          pane.removeAttribute("id");
          location.hash = "#" + thisID;
          pane.setAttribute("id", thisID);

        // If the URL is "#home", remove hash from the URL
        } else {
          if (history.pushState) {
            history.pushState("", document.title, window.location.pathname);
          }
        }

        // Clear wasNavigationTapped check
        clearTapCheck();
      }, false);
    });
    */

  }

})();

/*
http://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
*/
$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});