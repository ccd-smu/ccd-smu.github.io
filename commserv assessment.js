
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
	  localStorage.setItem('GLOnum', null);

return result;
   };
})();


//
	$("#assessment_details").on('focus', function () {


var GLOXX = localStorage.getItem('GLOXX');
var idid = localStorage.getItem('idid');
var placementname = localStorage.getItem('placementname');

if ($('#lblOwner:contains("' + idid + '")'))
{
$('.ckNotApplicable').attr('checked', true);

} else {alert("Student mismatch")};

var GLO2score = window.localStorage.getItem('GLO2score');
var GLO3score = window.localStorage.getItem('GLO3score');
var GLO4score = window.localStorage.getItem('GLO4score');
var GLO5score = window.localStorage.getItem('GLO5score');
 	
 	if (GLO2score == "NA" )
{
   $('.ckNotApplicable:eq(0)').attr('checked', true);
};
if (GLO3score == "NA" )
{
   $('.ckNotApplicable:eq(1)').attr('checked', true);
};
if (GLO4score == "NA" )
{
   $('.ckNotApplicable:eq(2)').attr('checked', true);
};
if (GLO5score == "NA" )
{
   $('.ckNotApplicable:eq(3)').attr('checked', true);
};
 
 //GLO2
if (GLO2score.includes("Exposure"))
{
$('.txtScore:eq(0) option[value=Exposure]').attr('selected','selected');
};
if (GLO2score.includes("Integration"))
{
$('.txtScore:eq(0) option[value=Integration]').attr('selected','selected');
};
if (GLO2score.includes("Transformation"))
{
$('.txtScore:eq(0) option[value=Transformation]').attr('selected','selected');
};
//GLO3
if (GLO3score.includes("Exposure"))
{
$('.txtScore:eq(1) option[value=Exposure]').attr('selected','selected');
};
if (GLO3score.includes("Integration"))
{
$('.txtScore:eq(1) option[value=Integration]').attr('selected','selected');
};
if (GLO3score.includes("Transformation"))
{
$('.txtScore:eq(1) option[value=Transformation]').attr('selected','selected');
};
//GLO4
if (GLO4score.includes("Exposure"))
{
$('.txtScore:eq(2) option[value=Exposure]').attr('selected','selected');
};
if (GLO4score.includes("Integration"))
{
$('.txtScore:eq(2) option[value=Integration]').attr('selected','selected');
};
if (GLO4score.includes("Transformation"))
{
$('.txtScore:eq(2) option[value=Transformation]').attr('selected','selected');
};

//GLO5
if (GLO5score.includes("Exposure"))
{
$('.txtScore:eq(3) option[value=Exposure]').attr('selected','selected');
};
if (GLO5score.includes("Integration"))
{
$('.txtScore:eq(3) option[value=Integration]').attr('selected','selected');
};
if (GLO5score.includes("Transformation"))
{
$('.txtScore:eq(3) option[value=Transformation]').attr('selected','selected');
};	
 	
 



   
var type = localStorage.getItem('type');


SaveStudentAssessment();



	
});
	

var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 10){
        clearInterval(interval);
    }
	if($("#jGrowl").is(":visible")){

location.href = 'https://shib.chalkandwire.com/ep2_smu/FieldPlacementList.aspx?cus=465';
var type = "";
localStorage.setItem('type',type);
var assessfunction = 0;
localStorage.setItem('assessfunction',assessfunction);
	
            }
	
}, 500); };