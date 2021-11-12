$( document ).ready(function() {
	
	 SaveStudentAssessment = (function() {
    var cached_function = SaveStudentAssessment;
    return function() {
        // your code

        var result = cached_function.apply(this, arguments); // use .apply() to call it
   setTimeout(function(){ 
   	location.href = 'https://shib.chalkandwire.com/ep2_smu/FieldPlacementList.aspx?cus=465';
}, 1000);

return result;
    };
})();

var GLOnum2 = localStorage.getItem('GLOnum');

if(GLOnum2 == null){  }
else {
	
var GLOnum = localStorage.getItem('GLOnum');

var idid = localStorage.getItem('idid');

if ($('#lblOwner:contains("' + idid + '")'))
{
setTimeout(function(){
$('.ckNotApplicable').attr('checked', true);
}, 1000);
	
} else {alert("Student mismatch")};


if (GLOnum.includes("5"))
{setTimeout(function(){
	$('.txtScore:eq(3) option[value=Exposure]').attr('selected','selected');
	$('.ckNotApplicable:eq(3)').attr('checked', false);
}, 1500);};

if (GLOnum.includes("4"))
{setTimeout(function(){
	$('.txtScore:eq(2) option[value=Exposure]').attr('selected','selected');
	$('.ckNotApplicable:eq(2)').attr('checked', false);
}, 1500);};
	
if (GLOnum.includes("3"))
{setTimeout(function(){
	$('.txtScore:eq(1) option[value=Exposure]').attr('selected','selected');
	$('.ckNotApplicable:eq(1)').attr('checked', false);
}, 1500);};
	
if (GLOnum.includes("2"))
{setTimeout(function(){
	$('.txtScore:eq(0) option[value=Exposure]').attr('selected','selected');
	$('.ckNotApplicable:eq(0)').attr('checked', false);
}, 1500);};



};

});

