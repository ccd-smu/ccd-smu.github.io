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


var allocationID =  window.localStorage.getItem('currentId');

setInterval(function() {


$('tr.criterion[data-criterion-id=crit'+allocationID+'_2024]').addClass('border1');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2025]').addClass('border2');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2026]').addClass('border3');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2027]').addClass('border4');


if (!GLOXX.includes("2")){


$('.ckNotApplicable').eq(0).attr('checked', true);

$('tr.criterion[data-criterion-id=crit'+allocationID+'_2024]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2024]').closest('tr').next('tr').css('display','none');

}
if (!GLOXX.includes("3")){
$('.ckNotApplicable').eq(1).attr('checked', true);
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2025]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2025]').closest('tr').next('tr').css('display','none');
}
if (!GLOXX.includes("4")){


$('.ckNotApplicable').eq(2).attr('checked', true);	
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2026]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2026]').closest('tr').next('tr').css('display','none');
}
if (!GLOXX.includes("5")){


$('.ckNotApplicable').eq(3).attr('checked', true);

$('tr.criterion[data-criterion-id=crit'+allocationID+'_2027]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2027]').closest('tr').next('tr').css('display','none');
}
$('.txtScore option[value=Exposure]').attr('selected','selected');
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