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
	

	$("#assessment_details").on('focus', function () {

var GLOnum2 = localStorage.getItem('GLOnum');
var GLOnum = localStorage.getItem('GLOnum');
console.log(GLOnum);

var allocationID =  window.localStorage.getItem('currentId');

if(GLOnum2 = null){  }
else {
   

var idid = localStorage.getItem('idid');

var placementname = localStorage.getItem('placementname');

var deptGLO2 = window.localStorage.getItem('deptGLO2');
var deptGLO3 = window.localStorage.getItem('deptGLO3');
var deptGLO4 = window.localStorage.getItem('deptGLO4');
var deptGLO5 = window.localStorage.getItem('deptGLO5');

var deptGLOs = deptGLO2+deptGLO3+deptGLO4+deptGLO5;
console.log(deptGLOs);

if ($('#lblOwner:contains("' + idid + '")'))
{
} else {alert("Student mismatch")};


if (GLOnum.includes("5"))
{
	$('.txtScore:eq(3) option[value=Exposure]').attr('selected','selected');
};

if (GLOnum.includes("4"))
{
   $('.txtScore:eq(2) option[value=Exposure]').attr('selected','selected');
};
   
if (GLOnum.includes("3"))
{
   $('.txtScore:eq(1) option[value=Exposure]').attr('selected','selected');
};
   
if (GLOnum.includes("2"))
{
   $('.txtScore:eq(0) option[value=Exposure]').attr('selected','selected');
};


if (!GLOnum.includes("5"))
{
   $('.ckNotApplicable:eq(3)').attr('checked', true);
};

if (!GLOnum.includes("4"))
{
   $('.ckNotApplicable:eq(2)').attr('checked', true);
};
   
if (!GLOnum.includes("3"))
{
   $('.ckNotApplicable:eq(1)').attr('checked', true);
};
   
if (!GLOnum.includes("2"))
{
   $('.ckNotApplicable:eq(0)').attr('checked', true);
};

if (deptGLO2 && GLOnum.includes("2")){

$('tr.criterion[data-criterion-id=crit'+allocationID+'_1465]').addClass('dept2');
    $('.dept2').attr('dept2','Department recommendation: '+deptGLO2);

   $('.txtScore:eq(0) option[value='+deptGLO2+']').attr('selected','selected');
};

if (deptGLO3 && GLOnum.includes("3")){
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1466]').addClass('dept3');
    $('.dept3').attr('dept3', 'Department recommendation: '+deptGLO3);
    
   $('.txtScore:eq(1) option[value='+deptGLO3+']').attr('selected','selected');
};

if (deptGLO4 && GLOnum.includes("4")){
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1467]').addClass('dept4');
    $('.dept4').attr('dept4','Department recommendation: '+deptGLO4);
    
   $('.txtScore:eq(2) option[value='+deptGLO4+']').attr('selected','selected');
};

if (deptGLO5 && GLOnum.includes("5")){
$('tr.criterion[data-criterion-id=crit'+allocationID+'_1468]').addClass('dept5');
    $('.dept5').attr('dept5','Department recommendation: '+deptGLO5);
    
   $('.txtScore:eq(3) option[value='+deptGLO5+']').attr('selected','selected');
};

var valuetype = localStorage.getItem('valuetype');


//allow staff input and assessment here
//if OSL, and has other GLO including either 2 or 3, do not auto save
//if SOCIs have assessment, do not auto save
 if (valuetype.includes("OSL") && GLOnum.includes("3")){
 
  var GLOnum = "";	
 	
 } else if (valuetype.includes("OSL") && GLOnum.includes("2")){
 	
 var GLOnum = "";
 	
 } else if (valuetype.includes("SOCI") && (deptGLOs)){
 	
var deptGLO2 = "";
var deptGLO3 = "";
var deptGLO4 = "";
var deptGLO5 = "";
var deptGLOs = "";
 
 
 }else{
SaveStudentAssessment();}


};});
	

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

            }
	
}, 800); 