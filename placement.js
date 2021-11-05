
ViewPlacement = (function() {
    var cached_function = ViewPlacement;

    return function() {
        // your code

        var result = cached_function.apply(this, arguments); // use .apply() to call it

setTimeout(function(){ 
$('html, body').animate({
    scrollTop: ($('#DataTables_Table_0').first().offset().top)
},500);}, 1000);
        return result;
    };
})();