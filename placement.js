ViewPlacement = (function() {
    var cached_function = ViewPlacement;
    return function() {
        // your code

        var result = cached_function.apply(this, arguments); // use .apply() to call it


   setTimeout(function(){ 
var currentId =$('#DataTables_Table_0 tbody tr').attr('id'); 
 currentId = currentId.slice(-4)
 
   setTimeout(function(){ 

goNav('my_assessments','allocationId='+currentId)

        
}, 100);
        
}, 1000);
        

        

return result;
    };
})();
