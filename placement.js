ViewPlacement = (function() {
    var cached_function = ViewPlacement;

    return function() {
        // your code

        var result = cached_function.apply(this, arguments); // use .apply() to call it

        
        
setTimeout(function(){ 
if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|Windows Phone/i)) {  

            function customScrollTo(to, duration) {
                var start = 0,
                    change = to - start,
                    currentTime = 0,
                    increment = 20;

                var animateScroll = function(){        
                    currentTime += increment;
                    var val = Math.easeInOutQuad(currentTime, start, change, duration);                        
                    window.scrollTo(0,val);

                    if(currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }
                };
                animateScroll();
            }

            Math.easeInOutQuad = function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            };

            customScrollTo(($('#DataTables_Table_0').first().offset().top), 250);
}else{
            $('html, body').animate({
                scrollTop: ($('#DataTables_Table_0').first().offset().top)
            }, 250, function(){
                $('#DataTables_Table_0').clearQueue();
            });
}   }, 3000);


   setTimeout(function(){ 
   	
   	$('#DataTables_Table_0 tr').trigger('click');
  
        
}, 4500);

   setTimeout(function(){ 
   	
   	$('li a :contains('Assess')').trigger('click');
  
        
}, 5000);
        

return result;
    };
})();