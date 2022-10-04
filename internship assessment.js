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

$('tr.criterion[data-criterion-id=crit'+allocationID+'_2252]').addClass('border1');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2253]').addClass('border2');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2254]').addClass('border3');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2255]').addClass('border4');


if (!GLOXX.includes("2")){


$('.ckNotApplicable').eq(0).attr('checked', true);

$('tr.criterion[data-criterion-id=crit'+allocationID+'_2252]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2252]').closest('tr').next('tr').css('display','none');

}
if (!GLOXX.includes("3")){
$('.ckNotApplicable').eq(1).attr('checked', true);
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2253]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2253]').closest('tr').next('tr').css('display','none');
}
if (!GLOXX.includes("4")){


$('.ckNotApplicable').eq(2).attr('checked', true);	
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2254]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2254]').closest('tr').next('tr').css('display','none');
}
if (!GLOXX.includes("5")){


$('.ckNotApplicable').eq(3).attr('checked', true);

$('tr.criterion[data-criterion-id=crit'+allocationID+'_2255]').css('display','none');
$('tr.criterion[data-criterion-id=crit'+allocationID+'_2255]').closest('tr').next('tr').css('display','none');
}


if (GLOnum.includes("2"))
{
   
   $('tr.criterion[data-criterion-id=crit'+allocationID+'_2252] .txtScore option[value=Exposure]').attr('selected','selected');
};

if (GLOnum.includes("3"))
{
   $('tr.criterion[data-criterion-id=crit'+allocationID+'_2253] .txtScore option[value=Exposure]').attr('selected','selected');
};

if (GLOnum.includes("4"))
{
   $('tr.criterion[data-criterion-id=crit'+allocationID+'_2254] .txtScore option[value=Exposure]').attr('selected','selected');
};

if (GLOnum.includes("5"))
{
	$('tr.criterion[data-criterion-id=crit'+allocationID+'_2255] .txtScore option[value=Exposure]').attr('selected','selected');
};
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
var GLOXX = localStorage.setItem('GLOXX','');
         }

}, 500); };