Assess = (function() {
	  setTimeout(function() {
var currentId =$('#DataTables_Table_0 tbody tr').attr('id'); 
 currentId = currentId.slice(-4);
goNav('my_assessments','allocationId='+currentId)

    }, 1000);

    });
    




GetFieldplacementActions = (function() {
    var cached_function = GetFieldplacementActions;
    return function() {
        // your code
        var result = cached_function.apply(this, arguments); // use .apply() to call it


setTimeout(function(){ 
                var href = $('a:contains(Download Roll-up)').attr('href');
                 href = href.slice(-11);
       $("ul.popover-menu", $popover).prepend("<li role='none'><a role='menuitem' tabindex='-1' style='position:relative;z-index:2004; background: #151c55' href=\"javascript:ViewPlacement('" + href + ';Assess()">' + "Assess (Workshop)" + "<\/a><\/li>");
}, 500);


return result;
    };
})();



$("#blabal").click(function(){
location.href = 'https://shib.chalkandwire.com/ep2_smu/FieldPlacementList.aspx?cus=465';
});

