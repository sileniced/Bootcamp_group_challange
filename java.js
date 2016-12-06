




var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
        
    });
    
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
