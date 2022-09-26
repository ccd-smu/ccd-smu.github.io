	var assessfunction2 =  localStorage.getItem('assessfunction');
	if (assessfunction2 == 1){

var button = document.createElement('div');
   button.id="button";
   button.style.background = "blue";
   button.style.height="auto";
   button.style.width="200px";
   button.style.position="fixed";
   button.style.bottom="0";
   button.style.right="0";
   button.style.zIndex = "9999";
   button.style.color = "#fff";
   button.style.textAlign = "center";
   button.style.padding = "13px 0";
   button.style.cursor = "pointer";
   button.innerHTML = "back to placements";
   document.body.appendChild(button);
	  $(document).on('click', '#button', function() {  
	  		  location.href = 'https://shib.chalkandwire.com/ep2_smu/FieldPlacementList.aspx?cus=465';
	  	
	  	});
	  	
	  	
	  	
	SaveStudentAssessment = (function() {
   var cached_function = SaveStudentAssessment;
   return function() {
	   // your code
	   var result = cached_function.apply(this, arguments); // use .apply() to call it
	  //localStorage.setItem('GLOnum', null);

return result;
   };
})();


//
	$("#assessment_details").on('focus', function () {


var GLOXX = localStorage.getItem('GLOXX');

$('.assessForm tbody tr>*:nth-last-child(2)').trigger('click');
var allocationID =  window.localStorage.getItem('currentId');

setInterval(function() {


$('tr.criterion[data-criterion-id=crit'+allocationID+'_1760]').addClass('border1');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1761]').addClass('border2');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1762]').addClass('border2');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1763]').addClass('border3');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1764]').addClass('border3');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1765]').addClass('border4');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1782]').addClass('border4');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1767]').addClass('border4');	

$('.toggle-panel-content').css('display','block');
$('.instrument-select-all-row').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1759]').css('display','none')
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1759]').closest('tr').next('tr').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1769]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1769]').closest('tr').next('tr').css('display','none');

if (!GLOXX.includes("2")){
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1760]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1760]').closest('tr').next('tr').css('display','none');

}
if (!GLOXX.includes("3")){
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1761]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1762]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1761]').closest('tr').next('tr').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1762]').closest('tr').next('tr').css('display','none');
}
if (!GLOXX.includes("4")){
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1763]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1764]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1763]').closest('tr').next('tr').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1764]').closest('tr').next('tr').css('display','none');
}
if (!GLOXX.includes("5")){
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1765]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1782]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1767]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1765]').closest('tr').next('tr').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1782]').closest('tr').next('tr').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1767]').closest('tr').next('tr').css('display','none');
}

}, 500);



var type = localStorage.getItem('type');


});

 
var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 10){
        clearInterval(interval);
    }
	if($("#jGrowl").is(":visible")){

var type = "";
localStorage.setItem('type',type);
var assessfunction = 0;
localStorage.setItem('assessfunction',assessfunction);
	
            }
	
}, 500); };