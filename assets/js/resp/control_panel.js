var time_value = new Number();
var window_margin = new Number();
var wndow_height = new Number();
var current_position = new Number();

var url_string = new String();
var url_hash = new String();

time_value = 400;
window_margin = 150;

url_string = window.location.href;
url_hash = window.location.hash;

$(document).ready(
  function () {
    if (url_string.indexOf("rateValue") != -1) {      
      $("#sctn_5-desc-6 > span > span > sup + span").text(url_string.slice((url.indexOf("rateValue") + 10), url_string.length));
    }

    var form_selectors = new String();

    form_selectors = "#form-sctn_6 .form-page_1";

    if (url_hash === "#sctn_6?pos=1" && 
        url_hash.indexOf("copyValues") === -1)  {
      $(form_selectors).css("display", "block");
      $(form_selectors).fadeTo(time_value, 1);
    }
    
    $("#nav-link").on("mouseover", 
      function () {
        navLinkHoverState();
      }
    );

    $("#nav-link").on("mouseout", 
      function () {
        navLinkHoverState(); 
      }
    );
    
    $("#nav-link").on("click", 
      function () {
        navLinkHoverState();
        determineCopyElements();
        animateSideNav();
      }
    );
    
    $("#options > span").on("click",
      function () {
        var section_value = new String();

        var time_value_1 = new Number();
        var time_value_2 = new Number();
        var time_value_3 = new Number();
        
        var options_1_css = new Object();
        var options_2_css = new Object();

        options_1_css = {
          "backgroundColor": "#ccc", 
          "color": "#000"
        };

        options_2_css = {
          "backgroundColor": "#000", 
          "color": "#fff"
        };

        section_value = $(this).attr("id");

        time_value_1 = time_value / 4;
        time_value_2 = time_value / 2;
        time_value_3 = time_value * 1.5;

        $(this).animate(options_1_css, time_value_1, 
          function () {
            $(this).animate(options_2_css, time_value_2, 
              function () {
                animatePageElements();
                
                setTimeout(
                  function () {
                    if (section_value !== "sctn_main") {
                      url_hash = section_value + "?pos=0";  
                    } else  {
                      url_hash = section_value + "?bkgrnd=base";  
                    }
                  }, time_value_3
                );
              }
            );
          }
        );
        
        navLinkHoverState();
        
      }
    );
        
    $("#prev-sctn, #next-sctn").on("click", 
      function () {
        interSectionNav(this);
      }
    );
    

    $(".sctn_nav > div > span").on("mouseover",
			function () {
        var sctn_nav_selector = new String();

        sctn_nav_selector = "#" + $(this).parent().parent().attr("id") + " > div > span";

        if ($(sctn_nav_selector).css("backgroundPosition") !== "0px -105px")  {
          animateSctnNav(sctn_nav_selector);
        }
			}
		);

    $(".sctn_nav > div > span").on("mouseout",
			function () {
        var sctnNavElement = new String();
        var sctnNavLinkElement = new String();

        var sctnNavBaseCSS = new Object();

        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctnNavLinkElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        sctnNavBaseCSS = {
          backgroundPositionY: "0px"
        };

        if ($(sctnNavLinkElement).css("display") === "none" && 
            $(sctnNavElement).css("backgroundPositionY") === "0px") {
          $(sctnNavElement).css(sctnNavBaseCSS);
        } else {
          if ($(sctnNavElement).css("backgroundPositionY") !== "-105px")  {
            animateSctnNav(sctnNavElement);
          }
        }
        
			}
		);

    $(".sctn_nav > div > span").on("click",
			function () {
        var sctnNavVisibleCSS = new Object();
        var sctnNavElement = new String();
        var sctnNavLinkElement = new String();
        
        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctnNavLinkElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        animateSctnNavLinks(sctnNavLinkElement);
        
        animateSctnNav(sctnNavElement);
			}
		);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				var currentSctnNavID = $(this).parent().parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				         
        animateSctnNavLinks(currentSctnNavElement);
        animateSctnNav(currentSctnNavIDString);
      }
		);
    
    $("#sctn_1-prev, #sctn_1-next").click(
      function () {
        animateFormPanes("sctn_1");
      }
    );

    $("input#sctn_1-start").on("click", 
      function () {
        window.location.hash = "#sctn_1?pos=1";

        $("#form-sctn_1 .form-page_1").css("display", "block");
        $("#form-sctn_1 .form-page_1").fadeTo(time_value, 1);
      }
    );

    $("input#sctn_5-start").on("click", 
      function () {
        window.location.hash = "#sctn_5?pos=1";
      }
    );
    
    $("input#sctn_5-cntct").click(
      function () {
        window.location.hash = "#sctn_6?pos=1";
      }
    );

    $("input#sctn_6-start").click(
      function () {
        window.location.hash = "#sctn_6?pos=1";

        $("#form-sctn_6 .form-page_1").css("display", "block");
        $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
      }
    )
    $("input#sctn_6-map").click(
      function () {
        window.location.href = "https://www.bing.com/mapspreview?&cp=30.303075~-97.745526&lvl=19&dir=106.769&pi=1.662&style=x&mo=z.0&osid=a9917ca0-d3c5-4f1d-8d63-06e918dccf3d&v=2&sV=2&form=S00027";
      }
    );
    
    $("#sctn_6-prev, #sctn_6-next").click(
      function () {
        animateFormPanes("sctn_6");
      }
    );

    $(window).on("load", 
      function () {
        setupPage();
        animatePageElements();
      }
    );
    

    $(window).on("scroll", 
      function () {
        setURL();
      }
    );
    
    $(window).on("hashchange",
      function () {
        url_hash = window.location.hash;
        
        if (url_hash.indexOf("copyValues") === -1 && 
            url_hash !== "") {
          animatePageElements();
        }
        
        if (url_hash.indexOf("#sctn_6?pos=1") > -1 && 
            url_hash.indexOf("copyValues") === -1)  {
          $("#form-sctn_6 .form-page_1").css("display", "block");
          $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
        }
      }
    );
    
    $(window).on("resize", 
      function () {
        setupPage();
        animatePageElements();
      }
    );


  }
);