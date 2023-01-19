"use strict"

// about me

const text = document.querySelector(".sec-text");

const textload = () => {
    
    
    setTimeout(() => {
        text.textContent =" Student.";
    }, 0);

    setTimeout(() => {
        text.textContent =" Web Designer.";
    }, 4000);

    setTimeout(() => {
        text.textContent =" Freelancer.";
    }, 8000);


}

textload();

setInterval(textload,12000);


// portfolio Section

  var containerEl = document.querySelector(".portfolio-item");
   
    var mixer = mixitup(containerEl, {
      animation: {
        effects: "fade translateZ(-100px)",
        effectsIn: "fade translateY(-100%)",
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
    });
    // fancybox insilaze & options //
    $("[data-fancybox]").fancybox({
      loop: true,
      hash: true,
      transitionEffect: "slide",
      clickContent: function(current, event) {
        return current.type === "image" ? "next" : false;
      }
    });


    // contact

    $(document).ready(function(){ 
      $('#characterLeft').text('140 characters left');
      $('#message').keydown(function () {
          var max = 140;
          var len = $(this).val().length;
          if (len >= max) {
              $('#characterLeft').text('You have reached the limit');
              $('#characterLeft').addClass('red');
              $('#btnSubmit').addClass('disabled');            
          } 
          else {
              var ch = max - len;
              $('#characterLeft').text(ch + ' characters left');
              $('#btnSubmit').removeClass('disabled');
              $('#characterLeft').removeClass('red');            
          }
      });    
  });
  