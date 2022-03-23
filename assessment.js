$( document ).ready(function() {
	
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
  setTimeout(function(){ 
	  localStorage.setItem('GLOnum', null);
}, 1000);

return result;
   };
})();

var GLOnum2 = localStorage.getItem('GLOnum');

if(GLOnum2 = null){  }
else {
   
var GLOnum = localStorage.getItem('GLOnum');

var idid = localStorage.getItem('idid');

var placementname = localStorage.getItem('placementname');

if ($('#lblOwner:contains("' + idid + '")'))
{
setTimeout(function(){
$('.ckNotApplicable').attr('checked', true);
}, 1500);
   
} else {alert("Student mismatch")};


if (GLOnum.includes("5"))
{setTimeout(function(){
   $('.txtScore:eq(3) option[value=Exposure]').attr('selected','selected');
   $('.ckNotApplicable:eq(3)').attr('checked', false);
}, 2000);};

if (GLOnum.includes("4"))
{setTimeout(function(){
   $('.txtScore:eq(2) option[value=Exposure]').attr('selected','selected');
   $('.ckNotApplicable:eq(2)').attr('checked', false);
}, 2000);};
   
if (GLOnum.includes("3"))
{setTimeout(function(){
   $('.txtScore:eq(1) option[value=Exposure]').attr('selected','selected');
   $('.ckNotApplicable:eq(1)').attr('checked', false);
}, 2000);};
   
if (GLOnum.includes("2"))
{setTimeout(function(){
   $('.txtScore:eq(0) option[value=Exposure]').attr('selected','selected');
   $('.ckNotApplicable:eq(0)').attr('checked', false);
}, 2000);};

};

});

