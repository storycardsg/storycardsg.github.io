// font loader
var WebFontConfig = {
  google: {
    families: ['Droid Sans', 'Droid Serif']
  },
  timeout: 2000,
  loading: function() {},
          active: function() { 
            slabTextHeadlines();
          },
          inactive: function() {},
          fontloading: function(familyName, fvd) {},
          fontactive: function(familyName, fvd) {},
          fontinactive: function(familyName, fvd) {}
};

(function(){

  "use strict";

  var wf = document.createElement("script");
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.async = 'true';
  document.head.appendChild(wf);

})();


    // Function to slabtext the H1 headings
    function slabTextHeadlines() {
        if (document.querySelector(".slab")) {
            console.log("webfontjs: Running Slabtext")
        $(".slab").slabText({ 
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":300
        });
        }
    };

    // Function to show typedjs animation
    function typedAnimation() {
        if (document.querySelector("#typed")) {
            console.log("webfontjs: Running Typedjs");
            $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 10,
            loop: true,
            // false = infinite
            loopCount: false
            });
          
        }
    };

 //WebFont Load
    WebFont.load({
        google: {
          families: ['Droid Sans', 'Droid Serif','Merriweather']
        },
          loading: function() {},
          active: function() { 
            console.log("webfontjs: WebFont active")
            slabTextHeadlines(); 
            typedAnimation();
          },
          inactive: function() {},
          fontloading: function(familyName, fvd) {},
          fontactive: function(familyName, fvd) {},
          fontinactive: function(familyName, fvd) {}
    });


