var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
        
    });

function nextSlide () {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if (nextSlide.length == 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(1000).removeClass('active-slide');
    nextSlide.fadeIn(1000).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
}

function prevSlide () {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if (prevSlide.length == 0) {
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
    }


    currentSlide.fadeOut(1000).removeClass('active-slide');
    prevSlide.fadeIn(1000).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
}
    
var userHasInteracted = false;
    
    $('.arrow-next').click(function (e) {
    e.preventDefault();
    userHasInteracted = true;
    nextSlide();
});
    
    $('.arrow-prev').click(function (e) {
    e.preventDefault();
    userHasInteracted = true;
    prevSlide();
});
    
function autoAdvance () {

    // Stop the loop if the user has interacted
    if (userHasInteracted) return ;

    // Jump to the next slide
    nextSlide();

    // Run me again in X seconds
    setTimeout(autoAdvance, 6000);
}

// Advance the slide in X seconds
setTimeout(autoAdvance, 6000);

    
//Jumbotron
    $(".fade").addClass("load");
    
    setTimeout(function() {
        $(".fade2").delay(1000).addClass("load");
    }, 1500);
    
    setTimeout(function() {
        $(".fade3").delay(1200).addClass("load");
    }, 3000);
    
    setTimeout(function() {
        $(".btn-fade").delay(1400).addClass("load");  
    }, 4000); 
    
    setTimeout(function() {
        $(".btn-fade2").delay(1500).addClass("load");  
    }, 4000);
    
    };

$(document).ready(main);




