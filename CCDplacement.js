//testing 15th nov 2022


   var help1 = document.createElement('div');
   help1.id="help1";
   help1.innerHTML = "CSP";
   document.body.appendChild(help1);
   
   var help2 = document.createElement('div');
   help2.id="help2";
   help2.innerHTML = "Internship";
   document.body.appendChild(help2);

$( "#help1" ).click(function() {
	$("#help1").remove();
	 
	 if($(".control-box").is(".open"))
	 {} else {
	 	
	$("#placements-search a:contains('SEARCH PLACEMENTS')").trigger('click');
	};
	
	  $("#cfToggle a:contains('Toggle Open/Closed'),.toggle-panel-heading a:contains('Toggle Open/Closed')").trigger('click');
	
	$('#statusList,.form-field.full.line').addClass('highlighthelp');
	
	$('#customfields\\.scf_761').parent().addClass('highlighthelp').append('<i>"Leader" is selected</i>');


	
	
	$('#statusList').append('<i>"In Progress" is selected</i>');
 $('.form-field.full.line').append('<i>type "Community Service" and press enter</i>');


$("h2:contains('Include These Columns in Report')").closest(".form-field.long.line").append('<i>Default options for grading selected</i>');


 $('#ck_PlacementStatuses_0,#ck_PlacementStatuses_1,#ck_PlacementStatuses_3,#ck_PlacementStatuses_3,#ck_PlacementStatuses_4,#ck_PlacementStatuses_5').prop('checked', true);
 
	 $('#ck_PlacementStatuses_2').prop('checked', false);

	 $('#rbl_PlacementCandidateStatusesfilled').trigger('click');
	
	
	
	$('#reportfields\\.id').prop('checked', false);
	$('#reportfields\\.name').prop('checked', true);
	$('#reportfields\\.candidate').prop('checked', true);
	$('#reportfields\\.location').prop('checked', false);
	$('#reportfields\\.start_date').prop('checked', true);
	$('#reportfields\\.length').prop('checked', false);
	$('#reportfields\\.advisor').prop('checked', false);
	$('#reportfields\\.stakeholders').prop('checked', false);
	$('#reportfields\\.status').prop('checked', false);
	$('#reportfields\\.end_date').prop('checked', true);
	$('#reportfields\\.address').prop('checked', false);
	$('#reportfields\\.district_name').prop('checked', false);
	$('#reportfields\\.group').prop('checked', false);
	$('#reportfields\\.grade_level').prop('checked', false);
	$('#reportfields\\.application_form').prop('checked', false);
	$('#reportfields\\.notes').prop('checked', false);
	$('#reportfields\\.subject').prop('checked', true);
	
	$('#reportfields\\.completed_hours').prop('checked', false);
	$('#reportfields\\.survey_statuses').prop('checked', true);
	$('#reportfields\\.assessment_statuses').prop('checked', true);
	
	
	$('#reportfields\\.rcf_614').prop('checked', false);
	$('#reportfields\\.rcf_615').prop('checked', false);
	$('#reportfields\\.rcf_616').prop('checked', false);
	$('#reportfields\\.rcf_617').prop('checked', false);
	$('#reportfields\\.rcf_625').prop('checked', false);
	$('#reportfields\\.rcf_626').prop('checked', false);
	$('#reportfields\\.rcf_630').prop('checked', false);
	$('#reportfields\\.rcf_661').prop('checked', false);
	$('#reportfields\\.rcf_662').prop('checked', false);
	$('#reportfields\\.rcf_663').prop('checked', false);
	$('#reportfields\\.rcf_664').prop('checked', false);
	$('#reportfields\\.rcf_665').prop('checked', false);
	$('#reportfields\\.rcf_666').prop('checked', false);
	$('#reportfields\\.rcf_756').prop('checked', false);
	$('#reportfields\\.rcf_757').prop('checked', false);
	$('#reportfields\\.rcf_758').prop('checked', false);

   $('#reportfields\\.rcf_760').prop('checked', false);
   $('#reportfields\\.rcf_761').prop('checked', true);
   $('#reportfields\\.rcf_762').prop('checked', false);
   $('#reportfields\\.rcf_814').prop('checked', false);
   $('#reportfields\\.rcf_815').prop('checked', false);
   $('#reportfields\\.rcf_833').prop('checked', false);
   $('#reportfields\\.rcf_834').prop('checked', false);
   $('#reportfields\\.rcf_835').prop('checked', false);
   $('#reportfields\\.rcf_837').prop('checked', false);
   $('#reportfields\\.rcf_863').prop('checked', false);
   $('#reportfields\\.rcf_864').prop('checked', false);
   $('#reportfields\\.rcf_865').prop('checked', false);
   
   $('#reportfields\\.rcf_1073').prop('checked', false);
   $('#reportfields\\.rcf_1074').prop('checked', false);
   $('#reportfields\\.rcf_1389').prop('checked', false);
   $('#reportfields\\.rcf_1390').prop('checked', false);
   $('#reportfields\\.rcf_1391').prop('checked', false);
   $('#reportfields\\.rcf_1444').prop('checked', false);
   $('#reportfields\\.rcf_1460').prop('checked', false);
   $('#reportfields\\.rcf_1585').prop('checked', true);
   $('#reportfields\\.rcf_1586').prop('checked', true);
   $('#reportfields\\.rcf_1587').prop('checked', true);
   $('#reportfields\\.rcf_1588').prop('checked', true);
   $('#reportfields\\.rcf_1589').prop('checked', true);
   $('#reportfields\\.rcf_1590').prop('checked', true);
   $('#reportfields\\.rcf_1591').prop('checked', false);
   $('#reportfields\\.rcf_1909').prop('checked', false);
   
   $('#customfields\\.scf_761').val("Leader");
   
   $('#saveAsDefault').prop('checked', true);	 
   
   $('#placements-search').append('<span style="background: red; color: #fff; padding: 5px"><i>click "Search"</i></span>');

setTimeout(function() {
 $('#ck_PlacementStatuses_0,#ck_PlacementStatuses_1,#ck_PlacementStatuses_2,#ck_PlacementStatuses_3,#ck_PlacementStatuses_4,#ck_PlacementStatuses_5').trigger('click');
 
}, 800);

});
$( "#help2" ).click(function() {
   	$("#help2").remove();
   	 
   	 if($(".control-box").is(".open"))
   	 {} else {
   	$("#placements-search a:contains('SEARCH PLACEMENTS')").trigger('click');
   	};
   	
   	  $("#cfToggle a:contains('Toggle Open/Closed'),.toggle-panel-heading a:contains('Toggle Open/Closed')").trigger('click');
   	
   	$('#statusList,#stakeholder-filter,.form-field.full.line').addClass('highlighthelp');
   	$("label:contains('Job code')").closest(".form-field.inline").addClass('highlighthelp');
   	$("label:contains('Job code')").closest(".form-field.long.line").addClass('highlighthelp');
   	
   	
   	$('#statusList').append('<i>"In Progress" is selected</i>');
   	$('#stakeholder-filter').append('<i>Type and search for your name</i>');
	$('.form-field.full.line').append('<i>type "Internship" and press enter</i>');
 $("label:contains('Job code')").closest(".form-field.inline").append('<i>filter by Job code if applicable</i>');
  $("h2:contains('Include These Columns in Report')").closest(".form-field.long.line").append('<i>Default options for grading selected</i>');
   $('#ck_PlacementStatuses_0,#ck_PlacementStatuses_1,#ck_PlacementStatuses_3,#ck_PlacementStatuses_3,#ck_PlacementStatuses_4,#ck_PlacementStatuses_5').prop('checked', true);
 
	 $('#ck_PlacementStatuses_2').prop('checked', false);

	 $('#rbl_PlacementCandidateStatusesfilled').trigger('click');
	   	
   	$('#reportfields\\.id').prop('checked', false);
   	$('#reportfields\\.name').prop('checked', true);
   	$('#reportfields\\.candidate').prop('checked', true);
   	$('#reportfields\\.location').prop('checked', false);
   	$('#reportfields\\.start_date').prop('checked', true);
   	$('#reportfields\\.length').prop('checked', false);
   	$('#reportfields\\.advisor').prop('checked', false);
   	$('#reportfields\\.stakeholders').prop('checked', false);
   	$('#reportfields\\.status').prop('checked', false);
   	$('#reportfields\\.end_date').prop('checked', true);
   	$('#reportfields\\.address').prop('checked', false);
   	$('#reportfields\\.district_name').prop('checked', false);
   	$('#reportfields\\.group').prop('checked', false);
   	$('#reportfields\\.grade_level').prop('checked', false);
   	$('#reportfields\\.application_form').prop('checked', false);
   	$('#reportfields\\.notes').prop('checked', false);
   	$('#reportfields\\.subject').prop('checked', true);
   	
   	$('#reportfields\\.completed_hours').prop('checked', false);
   	$('#reportfields\\.survey_statuses').prop('checked', true);
   	$('#reportfields\\.assessment_statuses').prop('checked', true);
   	
   	
   	$('#reportfields\\.rcf_614').prop('checked', false);
   	$('#reportfields\\.rcf_615').prop('checked', false);
   	$('#reportfields\\.rcf_616').prop('checked', false);
   	$('#reportfields\\.rcf_617').prop('checked', false);
   	$('#reportfields\\.rcf_625').prop('checked', false);
   	$('#reportfields\\.rcf_626').prop('checked', false);
   	$('#reportfields\\.rcf_630').prop('checked', false);
   	$('#reportfields\\.rcf_661').prop('checked', false);
   	$('#reportfields\\.rcf_662').prop('checked', false);
   	$('#reportfields\\.rcf_663').prop('checked', false);
   	$('#reportfields\\.rcf_664').prop('checked', false);
   	$('#reportfields\\.rcf_665').prop('checked', false);
   	$('#reportfields\\.rcf_666').prop('checked', false);
   	$('#reportfields\\.rcf_756').prop('checked', false);
   	$('#reportfields\\.rcf_757').prop('checked', false);
   	$('#reportfields\\.rcf_758').prop('checked', false);


  	$('#reportfields\\.rcf_760').prop('checked', false);
  	$('#reportfields\\.rcf_761').prop('checked', false);
  	$('#reportfields\\.rcf_762').prop('checked', false);
  	$('#reportfields\\.rcf_814').prop('checked', false);
  	$('#reportfields\\.rcf_815').prop('checked', false);
  	$('#reportfields\\.rcf_833').prop('checked', false);
  	$('#reportfields\\.rcf_834').prop('checked', false);
  	$('#reportfields\\.rcf_835').prop('checked', false);
  	$('#reportfields\\.rcf_837').prop('checked', false);
  	$('#reportfields\\.rcf_863').prop('checked', false);
  	$('#reportfields\\.rcf_864').prop('checked', false);
  	$('#reportfields\\.rcf_865').prop('checked', false);
  	
  	$('#reportfields\\.rcf_1073').prop('checked', false);
  	$('#reportfields\\.rcf_1074').prop('checked', false);
  	$('#reportfields\\.rcf_1389').prop('checked', false);
  	$('#reportfields\\.rcf_1390').prop('checked', false);
  	$('#reportfields\\.rcf_1391').prop('checked', false);
  	$('#reportfields\\.rcf_1444').prop('checked', false);
  	$('#reportfields\\.rcf_1460').prop('checked', false);
  	$('#reportfields\\.rcf_1585').prop('checked', true);
  	$('#reportfields\\.rcf_1586').prop('checked', true);
  	$('#reportfields\\.rcf_1587').prop('checked', true);
  	$('#reportfields\\.rcf_1588').prop('checked', true);
  	$('#reportfields\\.rcf_1589').prop('checked', true);
  	$('#reportfields\\.rcf_1590').prop('checked', true);
  	$('#reportfields\\.rcf_1591').prop('checked', false);
  	$('#reportfields\\.rcf_1909').prop('checked', false);	  	  	
  	
  	$('#saveAsDefault').prop('checked', true);	 
  	
  	$('#placements-search').append('<span style="background: red; color: #fff; padding: 5px"><i>click "Search"</i></span>');
	  setTimeout(function() {
		$('#ck_PlacementStatuses_0,#ck_PlacementStatuses_1,#ck_PlacementStatuses_2,#ck_PlacementStatuses_3,#ck_PlacementStatuses_4,#ck_PlacementStatuses_5').trigger('click');
		
	   }, 800);
   });

function Assess() {
  button.appendChild(CU); 
  button.appendChild(workshop);
  button.appendChild(OSL);
  button.appendChild(SOCI);
  
  // for internal actions to keep assessing
  //var timesRun1 = 0;
var interval1 = setTimeout(function(){
	// timesRun1 += 1;
	//	if(timesRun1 === 5){
    //  clearInterval(interval1);}
    
    
   	if($(".panel-viewer-detail").is(":visible")){
		var tagtext = $('.keep-together h3:contains("Subject/Field")').siblings().html();
				console.log(tagtext); 
				
				
		switch (tagtext) {
			case 'Internship':
			$("#CU").trigger('click');
			window.localStorage.setItem('valuetype', '1CU');
				break;
			case 'Community Service':
			$("#CU").trigger('click');
			window.localStorage.setItem('valuetype', '1CU');
				break;
			case 'CCA':
			var texttext2 = $('span.flag.tag').text();
			if (texttext2 == 'Workshop' || texttext2 == 'WorkshopWorkshop')
				{$("#workshop").trigger('click');
			window.localStorage.setItem('valuetype', 'Workshop');	
				}
				else 
				{$("#SOCI").trigger('click');
				window.localStorage.setItem('valuetype', 'SOCI');}	
				break;
			case 'Activity (OSL)':
			$("#OSL").trigger('click');
			window.localStorage.setItem('valuetype', 'OSL1');
				break;
			case 'Student Organisation (OSL)':
			$("#OSL").trigger('click');
			window.localStorage.setItem('valuetype', 'OSL2');
				break;	
			default: // do nothing;
        		break;
		}; 
	
            }
}, 1500);
  
};


var timesRun2 = 0;
var interval2 = setInterval(function(){
    timesRun2 += 1;
    if(timesRun2 === 5){
        clearInterval(interval2);
    }
var auto2 = window.localStorage.getItem('start');
if(auto2 === 'yes')
{$("#last").trigger('click')} 
  
}, 3000); 

var timer;
var idid = window.localStorage.getItem('idid');
var placementname = window.localStorage.getItem('placementname');

var valuetype = window.localStorage.getItem('valuetype');
if (idid !== null || valuetype !== "1CU2"){
   var last = document.createElement('div');
   last.id="last";
   last.innerHTML = "Last assessed: <br>"+ idid + "<br>" + placementname;
   document.body.appendChild(last);
 
var valuetype = window.localStorage.getItem('valuetype');  
   if (valuetype == "1CU" ){
   $('#last').append("<br>click to force complete");
   valuetype == ""
   }
   var start = document.createElement('div');
   start.id="start";
   start.innerHTML = "start";
   document.body.appendChild(start);
   
   var stop = document.createElement('div');
   stop.id="stop";
   stop.innerHTML = "stop";
   document.body.appendChild(stop);
   
   start.onclick = function(){
   	
  var start = "yes";
window.localStorage.setItem('start', start);
console.log("start");
   	var idid = "";
   	var placementname = "";

   };
   
      stop.onclick = function(){
   	
  var start = "";
window.localStorage.setItem('start', start);
console.log("stop");
   };
   
   setInterval(function(){
   var valuetype = window.localStorage.getItem('valuetype');

var placementname2 = $('#placements-table thead tr th:contains("Placement Name")').index() + 1;
var candidate = $('#placements-table thead tr th:contains("Candidate")').index() + 1;

$('#placements-table tr>*:nth-child('+ placementname2 +'):contains('+ placementname +')').parent().addClass('lastone1');
$('#placements-table tr>*:nth-child('+ candidate +'):contains('+ idid +')').parent().addClass('lastone2');

$('.lastone1.lastone2').addClass('lastone');


}, 500);
  
}

setInterval(function(){
	
//checks to see if placement in column has been assessed by external
var surveyval = $('#placements-table thead tr th:contains("Surveys Completed")').index() + 1;
var overallappraisalgrade = $('#placements-table thead tr th:contains("Appraisal Overall Grade")').index() + 1;
var tableappraisalGLO1 = $('#placements-table thead tr th:contains("Appraisal GLO1")').index() + 1;
var tableappraisalGLO2 = $('#placements-table thead tr th:contains("Appraisal GLO2")').index() + 1;
var tableappraisalGLO3 = $('#placements-table thead tr th:contains("Appraisal GLO3")').index() + 1;
var tableappraisalGLO4 = $('#placements-table thead tr th:contains("Appraisal GLO4")').index() + 1;
var tableappraisalGLO5 = $('#placements-table thead tr th:contains("Appraisal GLO5")').index() + 1;

var assessmentspending = $('#placements-table thead tr th:contains("Assessments Pending")').index() + 1;
var leaderornot = $('#placements-table thead tr th:contains("Job Title/ Appointment")').index() + 1;
var leaderornot2 = $('#placements-table thead tr th:contains("Membership Type")').index() + 1;

var subject = $('#placements-table thead tr th:contains("Subject/Field")').index() + 1;	

$('#placements-table tr>*:nth-child('+ surveyval +'):contains("3")').parent().addClass('assessable1');

$('#placements-table tr>*:nth-child('+ assessmentspending +'):contains("2")').parent().addClass('assessable2a');
$('#placements-table tr>*:nth-child('+ assessmentspending +'):contains("1")').parent().addClass('assessable2b');

$('#placements-table tr>*:nth-child('+ overallappraisalgrade +'):not(:empty),tr>*:nth-child('+ tableappraisalGLO1 +'):not(:empty),tr>*:nth-child('+ tableappraisalGLO2 +'):not(:empty),tr>*:nth-child('+ tableappraisalGLO3 +'):not(:empty),tr>*:nth-child('+ tableappraisalGLO4 +'):not(:empty),tr>*:nth-child('+ tableappraisalGLO5 +'):not(:empty)').parent().addClass('assessable3');

$('#placements-table tr>*:nth-child('+ leaderornot +'):contains("Leader")').parent().addClass('assessable4');
$('#placements-table tr>*:nth-child('+ leaderornot +'):not(:contains("Leader"))').parent().addClass('assessable4a');

//$('tr>*:nth-child('+ leaderornot +'):contains("Leader")').parent().addClass('assessable4');

$('tr>*:nth-child('+ leaderornot2 +'):contains("Participant")').parent().addClass('assessable4b');
$('tr>*:nth-child('+ leaderornot2 +'):contains("Member")').parent().addClass('assessable4b');

$('#placements-table tr>*:nth-child('+ subject +'):contains("Community Service")').parent().addClass('assessable5a');
$('#placements-table tr>*:nth-child('+ subject +'):contains("Internship")').parent().addClass('assessable5b');
$('#placements-table tr>*:nth-child('+ subject +'):contains("CCA")').parent().addClass('assessable5c');
$('#placements-table tr>*:nth-child('+ subject +'):contains("OSL")').parent().addClass('assessable5d');

//csp
$('.assessable1.assessable2a.assessable3.assessable4a.assessable5a').addClass('assessable');
//internship
$('.assessable1.assessable2b.assessable3.assessable5b').addClass('assessable');
//SOCI
$('.assessable2a.assessable4b.assessable5c').addClass('assessable');
//OSL
$('.assessable2b.assessable4a.assessable4b.assessable5d').addClass('assessable');

}, 1500);





$( "#last" ).click(function() {
var valuetype = window.localStorage.getItem('valuetype');
if($(".lastone").length > 0) 
{
		
 if ($(".lastone").closest("tr").is(":last-child")) 
{
		
if (valuetype == "1CU"){
$(".lastone").trigger('click');
}	else{
	if ($("#placements-table_paginate a:contains('Next →')").parent().hasClass('disabled')) 
	{	$('#stop').trigger('click');
		alert("ended!");
		
	} else {
	$("#placements-table_paginate a:contains('Next →')").trigger('click');
	};}
	
} else {

if (valuetype == "OSL1" || valuetype == "OSL2"){
$(".lastone").nextAll('.assessable').eq(0).trigger('click');
}

if (valuetype == "Workshop" || valuetype == "SOCI" ){
$(".lastone").nextAll('.assessable').eq(0).trigger('click');
}
	
if (valuetype == "1CU"){
$(".lastone").trigger('click');
}	
	
}

}
else 
{
	
if (valuetype == "OSL1"){	
 $("#placements-table tbody tr>*:contains('Activity (OSL)')").first().trigger('click');
}
 
if (valuetype == "OSL2"){	
 $("#placements-table tbody tr>*:contains('Student Organisation (OSL)')").first().trigger('click');
}
  
if (valuetype == "Workshop" || valuetype == "SOCI" ){
 $("#placements-table tbody tr>*:contains('CCA')").first().trigger('click');
} 

};


//assessment after opening popover menu
if (valuetype == "1CU"){
//set timeout to click on force completion
setTimeout(function(){ 
 
 index = $('.lastone').index() + 2;
 window.localStorage.setItem('index',index)

 var href2 = $('.clicktable-menu').attr('id').replace(/[^0-9\\.]+/g, '');
FieldPlacementTakeAction("force_complete",href2);
window.localStorage.setItem('valuetype', '1CU2');

 setTimeout(function(){ 
 $('#placements-table_filter').trigger('click');
   last.innerHTML = "Last assessed: <br>"+ idid + "<br>" + placementname;
 },1000)

 }, 1500);

} else {

setTimeout(function(){ 
 var href2 = $('.clicktable-menu').attr('id').replace(/[^0-9\\.]+/g, '');
 ViewPlacement(href2);
 Assess();
 timer = setInterval(function(){
	if($(".panel-viewer-detail").is(":visible")){

var tagtext2 = $('.keep-together h3:contains("Subject/Field")').siblings().html();
		switch (tagtext) {
			case 'Internship':
			$("#CU").addClass('nextone');
			window.localStorage.setItem('valuetype', '1CU');
				break;
			case 'Community Service':
			$("#CU").addClass('nextone');
			window.localStorage.setItem('valuetype', '1CU');
				break;
			case 'CCA':
			var texttext = $('span.flag.tag').text();
			if (texttext == 'Workshop' || texttext == 'WorkshopWorkshop')
				{$("#workshop").trigger('click');
			window.localStorage.setItem('valuetype', 'Workshop');	
				}
				else 
				{$("#SOCI").trigger('click');
				window.localStorage.setItem('valuetype', 'SOCI');}	
				break;
			case 'Activity (OSL)':
			$("#OSL").trigger('click');
			window.localStorage.setItem('valuetype', 'OSL1');
				break;
			case 'Student Organisation (OSL)':
			$("#OSL").trigger('click');
			window.localStorage.setItem('valuetype', 'OSL2');
				break;	
			default: // do nothing;
        		break;
		}; 
	
            }
}, 1000); 
 
 }, 1500);	
	
}

});
 

GetFieldplacementActions = (function() {
  var cached_function = GetFieldplacementActions;
  return function() {
	  // your code
	  var result = cached_function.apply(this, arguments); // use .apply() to call it

setTimeout(function(){ 

var href = $('.clicktable-menu').attr('id').replace(/[^0-9\\.]+/g, '');

const li = $('li');
	 
for (let i = 0; i < li.length; i++) {
if(li[i].innerText === 'Force Completion')
{
  $("ul.popover-menu", $popover).prepend("<li role='none'><a role='menuitem' tabindex='-1' style='position:relative;z-index:2004; background: #151c55' href=\"javascript:ViewPlacement('" + href +"')"+ ';Assess()">' + "Assess" + "<\/a><\/li>");
};};




}, 1000);



return result;
  };
})();
// 
 

   var button = document.createElement('div');
   button.id="button";
   button.style.background = "transparent";
   button.style.height="auto";
   button.style.position="fixed";
   button.style.bottom="0";
   button.style.right="0";
   button.style.zIndex = "9999";
   button.style.color = "#fff";
   button.style.textAlign = "center";
   document.body.appendChild(button);
   
   var CU = document.createElement('div');
   CU.id="CU";
   CU.style.padding="13px 0";
   CU.style.width="100px";
   CU.innerHTML = "1CU";
   
   
   var workshop = document.createElement('div');
   workshop.id= "workshop"
   workshop.style.padding="13px 0";
   workshop.style.width="100px";
   workshop.innerHTML = "Workshop";
   
   
   var OSL = document.createElement('div');
   OSL.id= "OSL"
   OSL.style.padding="13px 0";
   OSL.style.width="100px";
   OSL.innerHTML = "OSL";    
    
   var SOCI = document.createElement('div');
   SOCI.id= "SOCI"
   SOCI.style.padding="13px 0";
   SOCI.style.width="100px";
   SOCI.innerHTML = "SOCI";    
   
   var accname = document.createElement('div');
   accname.id= "accname"
   accname.style.padding="13px 0";
   accname.style.width="200px";
   accname.innerHTML = "You are not in the CCD account!";
   


CU.onclick = function(){
    var assessfunction = 1;
localStorage.setItem('assessfunction',assessfunction);
this.style.backgroundColor = "red";
	  clearInterval(timer);
  var text2 = $('span.flag.tag').text();

    if (text2 == 'Internship' || text2 == 'InternshipInternship' || text2 == 'Community Service' || text2 == 'Community ServiceCommunity Service'){
           
 $('.panelviewerback').addClass( $('.closing').attr('class') );
 
 $( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );
 
 $( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
       "href" : "javascript:void(0)",
       "title" : "Go Back"
     });;
     
   $( ".closing" ).click(function() {
     
  document.getElementById("CU").remove();
  document.getElementById("workshop").remove();
  document.getElementById("OSL").remove();
   document.getElementById("SOCI").remove();

 $( "#status" ).remove();
 var appraisal = null;
 var appraisal1 = null;
 var appraisal2 = null;
 var appraisal3 = null;
 var appraisal4 = null;
 var appraisal5 = null;
 
 var assessed = '';
 
 var appointment = null;
 var reflection = null;
 
 var enddate = null;
 var today = null;
 var millisBetween = null; 
 var days = null;
 
 $(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");
 
 
     });
     
 var appraisal = $('.keep-together h3:contains("Appraisal Overall Grade")').siblings().html();
 var appraisal1 = $('.keep-together h3:contains("Appraisal GLO1")').siblings().html();
 var appraisal2 = $('.keep-together h3:contains("Appraisal GLO2")').siblings().html();
 var appraisal3 = $('.keep-together h3:contains("Appraisal GLO3")').siblings().html();
 var appraisal4 = $('.keep-together h3:contains("Appraisal GLO4")').siblings().html();
 var appraisal5 = $('.keep-together h3:contains("Appraisal GLO5")').siblings().html();

 window.localStorage.setItem('appraisal', appraisal);
 window.localStorage.setItem('appraisal1', appraisal1);
 window.localStorage.setItem('appraisal2', appraisal2);
 window.localStorage.setItem('appraisal3', appraisal3);
 window.localStorage.setItem('appraisal4', appraisal4);
 window.localStorage.setItem('appraisal5', appraisal5);

            var idid = $('span.name:eq(1)').text().replace('_', '');
            window.localStorage.setItem('idid', idid);
            var placementname = $(".flag-noticeoversized").parent().text().replace(" Preassigned In Progress", "");
            window.localStorage.setItem('placementname', placementname);
            
            
 var assessed = $("tr:contains('Assessment') td:last-child").html();
 window.localStorage.setItem('assessed', assessed);
 
 var appointment = $('.keep-together h3:contains("Appointment")').siblings().html();
 
 var reflection = $("tr:contains('Post-activity Reflection') td:nth-last-child(2) span").html();
 
 var enddate3 = $('p.picker-selection:contains("Hours")').prev("p").html();
 
 var enddate2 = enddate3.slice(-10);
 var enddate = new Date(enddate2);
 var today = new Date();
 var millisBetween = today.getTime() - enddate.getTime();  
 var days = millisBetween / (1000 * 3600 * 24);  
 var days = Math.round(Math.abs(days));
 
 if (enddate > today) 
 {var days = -days;};
 
 var my_css_class = { background : 'red', color : '#fff' , zIndex: '9999', cursor: 'pointer', padding: '13px 0', width: '200px'};
 
 
 var status = document.createElement('div');
 status.id="status";
 
 
 var appraisalwindow = document.createElement('div');
 appraisalwindow.id="appraisalwindow";
 
 
 var assesswindow = document.createElement('div');
 assesswindow.id="assesswindow";

 var appointwindow = document.createElement('div');
 appointwindow.id="appointwindow";
 
 var datewindow = document.createElement('div');
 datewindow.id="datewindow";

 var reflectwindow = document.createElement('div');
 reflectwindow.id="reflection";
 
 
 //enddate//
 if(days < 30)
  {datewindow.innerHTML = "Not ready to grade ("+days+" days)";
      status.appendChild(datewindow);
  } else 
  {datewindow.innerHTML = "Ready to grade ("+days+" days)";
 datewindow.style.background = "green";
 status.appendChild(datewindow);};
 
 $("#reflection").hover(function(){
  }, function(){
  $(this).css("background-color", "darkgreen");
});
 
  //reflection//
  if(reflection  === 'Complete')
  {reflectwindow.style.background = "green"; 
  reflectwindow.innerHTML = "Reflection complete (click to view)";
  reflectwindow.style.cursor = "pointer";
 status.appendChild(reflectwindow);} else 
 {reflectwindow.innerHTML = "Reflection incomplete";
 status.appendChild(reflectwindow);} 
 
 
  //appraisal//
 if((appraisal  === '') && (appraisal1  === '') && (appraisal2  === '') && (appraisal3  === '') && (appraisal4  === '') && (appraisal5  === ''))
  {appraisalwindow.innerHTML = "No appraisal";
       status.appendChild(appraisalwindow);
  } else 
  {appraisalwindow.innerHTML = "Appraisal done";
  appraisalwindow.style.background = "green"; 
  status.appendChild(appraisalwindow);};
 
  //member or leader//
  if(appointment  === 'Leader')
  {appointwindow.innerHTML = "Leader (check C4SR assessment)"
  appointwindow.style.background = "black";
       status.appendChild(appointwindow);
  } 
  else {appointwindow.innerHTML = "Member";
   appointwindow.style.background = "black";
       status.appendChild(appointwindow);
  };
 
 //assessed//
 if(assessed  === '')
  {assesswindow.innerHTML = "Department Unassessed";  
  assesswindow.style.background = "black";
  status.appendChild(assesswindow);
  } else 
  {assesswindow.innerHTML = "Department Assessed";
  assesswindow.style.background = "green";
  assesswindow.style.cursor = "pointer";
    status.appendChild(assesswindow);
    
 
$(document).on('click', '#assesswindow', function() {

     setTimeout(function(){
         
  $("tr:contains('DKHMCC Reflection Rubric') td").trigger('click');
   
   
       setTimeout(function(){ 
       
  var studentidassessment = $('li a:contains("View Summary")').attr('href').replace(/[^0-9=]/g, "");	
 
ViewAllocationSummary(studentidassessment);
       setTimeout(function(){ 
								var LO2 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(0).text();
								var LO3 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(1).text();
								var LO4 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(2).text();
								var LO5 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(3).text();
  
							console.log(LO2 + LO3 + LO4 + LO5);
							var deptGLO2 = window.localStorage.setItem('deptGLO2',LO2);
							var deptGLO3 = window.localStorage.setItem('deptGLO3',LO3);
							var deptGLO4 = window.localStorage.setItem('deptGLO4',LO4);
							var deptGLO5 = window.localStorage.setItem('deptGLO5',LO5);

assesswindow.innerHTML = "Department Assessment saved!";
  
  $('.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.dialog-default.ui-draggable a:contains("close")').trigger('click');
  
  
     }, 1000);  
  
  
     }, 500);
         
     }, 1000);
     
 
 });   
    
  }; 
  
  document.body.appendChild(status);
 
 $('#reflection').click(function(){

     setTimeout(function(){
         
  $("tr:contains('Post-activity Reflection') td").trigger('click');
   
   
       setTimeout(function(){ 
       
  var reflectionalert = $('li a:contains("Edit")').attr('href').replace(/[^0-9=]/g, "");	
 
  reflectionalertarray = reflectionalert.split('=')
 
  var topicid = reflectionalertarray[1]; 
 var departid = reflectionalertarray[2];
  var allocationid = reflectionalertarray[3]; 
console.log(allocationid);

  // set click callback
 $('.popover-inner li a:contains("Edit")').click(function() {
 location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID="+departid+"&AllocationID="+allocationid;
 });
 // trigger click callback

//testings

var currentId2 =$('.assessments-list tr:contains("Transformative Learning Rubric"):contains("CCD Assessor")').attr('id'); 
  currentId = currentId2.replace(/[^0-9\.]/g, '');
   window.localStorage.setItem('currentId', currentId);
console.log(currentId);
 
 window.open("https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID="+departid+"&AllocationID="+allocationid, "_blank");
  
     }, 1000);
         
     }, 1000);
     
 
 });
         } else {
    alert("Not a CSP or Internship");
         }
 };
 
workshop.onclick = function(){
    var assessfunction = 1;
    localStorage.setItem('assessfunction',assessfunction);
       this.style.backgroundColor = "red";
 $('.panelviewerback').addClass( $('.closing').attr('class') );
 
 $( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );
 
 $( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
       "href" : "javascript:void(0)",
       "title" : "Go Back"
     });;
     
 
     
   $( ".closing" ).click(function() {
  document.getElementById("CU").remove();
  document.getElementById("workshop").remove();
  document.getElementById("OSL").remove();
   document.getElementById("SOCI").remove();
  
 $( "#status" ).remove();
 var appraisal = null;
 var appraisal1 = null;
 var appraisal2 = null;
 var appraisal3 = null;
 var appraisal4 = null;
 var appraisal5 = null;
 
 var assessed = '';
 
 var appointment = null;
 var reflection = null;
 
 var enddate = null;
 var today = null;
 var millisBetween = null; 
 var days = null;
 
 
 $(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");
 
 
     });	  	
           
 var GLO = $('.keep-together h3:contains("GLO")').siblings().html().replace(/[^0-9\.]/g, '');
 window.localStorage.setItem('GLOnum', GLO);
 
            var idid = $('span.name:eq(1)').text().replace('_', '');
            window.localStorage.setItem('idid', idid);
            var placementname = $(".flag-noticeoversized").parent().text().replace(" Preassigned In Progress", "");
            window.localStorage.setItem('placementname', placementname);
 
            var currentId2 =$('.assessments-list tr:contains("Transformative Learning Rubric"):contains("CCD Assessor")').attr('id'); 
  currentId = currentId2.replace(/[^0-9\.]/g, '');
 
 var text = $('span.flag.tag').text();

 if (text == 'Workshop' || text == 'WorkshopWorkshop')
 {
 	
window.localStorage.setItem('currentId',currentId);
 goNav('my_assessments','allocationId='+currentId);
 }
 else 
 {alert("Not Workshop");}



 };

OSL.onclick = function(){
    var assessfunction = 1;
localStorage.setItem('assessfunction',assessfunction);
         this.style.backgroundColor = "red";
     $('.panelviewerback').addClass( $('.closing').attr('class') );
     
     $( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );
     
     $( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
           "href" : "javascript:void(0)",
           "title" : "Go Back"
         });;
         
     
         
       $( ".closing" ).click(function() {
  document.getElementById("CU").remove();
  document.getElementById("workshop").remove();
  document.getElementById("OSL").remove();
   document.getElementById("SOCI").remove();
  
     $( "#status" ).remove();
     var appraisal = null;
     var appraisal1 = null;
     var appraisal2 = null;
     var appraisal3 = null;
     var appraisal4 = null;
     var appraisal5 = null;
     
     var assessed = '';
     
     var appointment = null;
     var reflection = null;
     
     var enddate = null;
     var today = null;
     var millisBetween = null; 
     var days = null;
     
     
     $(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");
     
     
         });	  	

         var enddate3 = $('p.picker-selection:contains("Hours")').prev("p").html();
 
 
         var enddate2 = enddate3.slice(-10);
         var enddate = new Date(enddate2);
         var today = new Date();
         var millisBetween = today.getTime() - enddate.getTime();  
         var days = millisBetween / (1000 * 3600 * 24);  
         var days = Math.round(Math.abs(days));
         
         if (enddate > today) 
         {var days = -days;
         var text3 = $('span.flag.tag').text();
         };

         //nested if else (not workshop,internship or CSP), then check date
           
         if (text3 == 'Workshop' || text3 == 'WorkshopWorkshop' || text3 == 'Internship' || text3 == 'InternshipInternship' || text3 == 'Community Service' || text3 == 'Community ServiceCommunity Service')
         {alert("Not a CCA");
            } else {
            //enddate//
            if (days < 30)
            {alert("Not ready to grade ("+days+" days)");
            } else 
            {var GLO = $('.keep-together h3:contains("GLO")').siblings().html().replace(/[^0-9\.]/g, '');
            window.localStorage.setItem('GLOnum', GLO);
            
            var idid = $('span.name:eq(1)').text().replace('_', '');
            window.localStorage.setItem('idid', idid);
            var placementname = $(".flag-noticeoversized").parent().text().replace(" Preassigned In Progress", "");
            window.localStorage.setItem('placementname', placementname);
            
            var currentId2 =$('.assessments-list tr:contains("Transformative Learning Rubric"):contains("CCD Assessor")').attr('id'); 
             currentId = currentId2.replace(/[^0-9\.]/g, '');
            var reflectionjournal = $('.journals-list tr td:nth-last-child(2)').text();
        	var member = $('.keep-together h3:contains("Membership Type")').siblings().html();
        

            if(member == "Member" || member == "Participant" || member == "Participants" || !GLO.includes("2") || !GLO.includes("3")|| !GLO.includes("4"))
            {
if(reflectionjournal == 0){
	window.localStorage.setItem('currentId',currentId);
	goNav('my_assessments','allocationId='+currentId);
}else{
	
	$("#stop").trigger('click');
	
    if (confirm("Student submitted a reflection!")){

        $('.journals-list tbody tr td a')[0].click();
        
        setTimeout(function() {
        	
        	
        var journalGLO = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table thead tr th:first-child').text().replace('Intellectual and Creative Skills','2').replace('Interpersonal Skills','3').replace('Global Citizenship','4').replace('Personal Mastery','5').replace(/\D/g,'');
       
        var textwhat = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(2)').text();
        var textsowhat = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(3)').text();
        var textnowwhat = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(4)').text();
        var what = textwhat.split(' ').length;
        var sowhat = textsowhat.split(' ').length;
        var nowwhat = textnowwhat.split(' ').length;
        
        console.log(what + sowhat+ nowwhat);
        
        setTimeout(function() {
        	
            var studentname = $('span.name:eq(1)').text().replace('_', '');
            var placementname = $(".flag-noticeoversized").parent().text().replace(" Preassigned In Progress", "");
  
    var status = document.createElement('div');
    status.id="status2";
    
    var wordcount = document.createElement('div');
    wordcount.id="wordcount";
    wordcount.innerHTML = what+sowhat+nowwhat; + " words";

    var wordnum = what+sowhat+nowwhat;
    
    var name1 = document.createElement('div');
    name1.id="name1";

    name1.innerHTML = studentname;

    var name2 = document.createElement('div');
    name2.id="name2";
    name2.innerHTML = placementname;
    
    

    
	if($("input:checkbox:eq(0)").prop('checked') == true || $("input:checkbox:eq(1)").prop('checked') == true){
var GLO2 = "2 ";
} else { var GLO2 = ""};
	if($("input:checkbox:eq(2)").prop('checked') == true || $("input:checkbox:eq(3)").prop('checked') == true){
var GLO3 = "3 ";
} else { var GLO3 = ""};
	if($("input:checkbox:eq(4)").prop('checked') == true || $("input:checkbox:eq(5)").prop('checked') == true || $("input:checkbox:eq(6)").prop('checked') == true){
var GLO4 = "4 ";
} else { var GLO4 = ""};
	if($("input:checkbox:eq(7)").prop('checked') == true || $("input:checkbox:eq(8)").prop('checked') == true || $("input:checkbox:eq(9)").prop('checked') == true){
var GLO5 = "5";
} else { var GLO5 = ""};

var GLOS = document.createElement('div');
GLOS.id="GLOS";
GLOS.innerHTML = "GLO "+ GLO2 + GLO3 + GLO4 + GLO5;
var GLOXX = GLO2 + GLO3 + GLO4 + GLO5;
localStorage.setItem('GLOnum', GLOXX);

var assess = document.createElement('div');
assess.id="assess";
assess.innerHTML = "Assess";

   status.appendChild(wordcount); 
   status.appendChild(assess);
  
var detail1 = document.createElement('div');
detail1.id="detail1";
detail1.innerHTML = "";

  
  var reflection1 = document.createElement('div');
  reflection1.id="reflection1";
  reflection1.innerHTML = "<b>Student:</b> " + studentname + "<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>Placement:</b>"  + placementname +" [" + valuetype + "]<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>GLOs chosen:</b> " + GLO + "<span style='color: #EAEAEA'>‰‰‰</span><br><br>"+ textwhat + "<span style='color: #EAEAEA'>‰‰‰</span><br><br>"+ textsowhat + "<span style='color: #EAEAEA'>‰‰‰</span><br><br>"+ textnowwhat + "<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>Word count:</b> " + wordnum + "<span style='color: #EAEAEA'>‰‰‰</span>";
  
  //var overall = document.createElement('div');
  //overall.id="overall";
  //overall.innerHTML = "<b><u>Appraisal (from organization/employer)</u></b><span style='color: #EAEAEA'>‰‰‰</span><br>"+ "Overall grade: " + appraisal + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO1: "+ appraisal1 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO2: "+ appraisal2 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO3: "+ appraisal3 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO4: "+ appraisal4 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO5: "+ appraisal5 + "<span style='color: #EAEAEA'>‰‰‰</span>";
   
  
  //assessed//
  //var deptassess = document.createElement('div');
  //deptassess.id="deptassess";
  //if(assessed  === '')
  //{deptassess.innerHTML = "<b><u>Department DID NOT assess</u></b><span style='color: #EAEAEA'>‰‰‰</span>";  
  //} else 
  //{ deptassess.innerHTML = "<b><u>Department Assesssed (please indicate)</u></b><span style='color: rgb(244,113,33)'>‰‰‰%^&</span><br>GLO2: <select name=selectGLO2 id=selectGLO2><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span><br>GLO3: <select name=selectGLO3 id=selectGLO3><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span><br>GLO4: <select name=selectGLO4 id=selectGLO4><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span><br>GLO5: <select name=selectGLO5 id=selectGLO5><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span>";
  //deptassess.style.backgroundColor = "rgb(244,113,33)";
  //}; 
 

    //recommend//
    var recommend = document.createElement('div');
    recommend.id="recommend";
    recommend.style.backgroundColor = "rgb(21,28,85)";
    recommend.style.color = "rgb(255,255,255)";
    recommend.innerHTML = "<b><u>CCD recommendation (please indicate)</u></b><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO2: <select name=recommendGLO2 id=recommendGLO2><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO3: <select name=recommendGLO3 id=recommendGLO3><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO4: <select name=recommendGLO4 id=recommendGLO4><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO5: <select name=recommendGLO5 id=recommendGLO5><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br><b>Comments:</b><br><textarea id='textarea' rows='4' cols='500'></textarea>";
 
   
  

     
var copy1 = document.createElement('div');
copy1.id="copy1";
copy1.innerHTML = "Request approval";


var assess1 = document.createElement('div');
assess1.id="assess1";
assess1.innerHTML = "Assessment confirmation";

var close = document.createElement('div');
close.id="close";
close.innerHTML = "close";


$(document).on('click', '#close', function() {  

$("#detail1").hide();
	
})

detail1.appendChild(reflection1);
//detail1.appendChild(overall); 
//detail1.appendChild(deptassess);
detail1.appendChild(recommend);
detail1.appendChild(close);


    


    document.body.appendChild(detail1);
   $('html, body').animate({scrollTop:(0)}, '2000');
   
   
$(document).on('click', '#copy1', function() {   

    window.getSelection().selectAllChildren(
        document.getElementById("detail1")
    );
    
      document.execCommand("copy");
      alert('Copied data. Paste in form for approval.');
      
      window.open(
  'https://forms.office.com/Pages/ResponsePage.aspx?id=ynmKyZpakUeiQ_Bq_WdGTVo0hFIoWr1FpSE3cEw9VyxUOTBGMTI4N0pGNks2UVQ4TExOOVc2UjBRWi4u',
  '_blank' 
);
      
      });


	setTimeout(function(){
		
		var GLOXX = GLO;
	window.localStorage.setItem('GLOnum', GLO);
if (GLOXX.includes("5"))
{
	$('#recommendGLO5 option[value=Exposure]').attr('selected','selected');
};

if (GLOXX.includes("4"))
{
   $('#recommendGLO4 option[value=Exposure]').attr('selected','selected');
};
   
if (GLOXX.includes("3"))
{
   $('#recommendGLO3 option[value=Exposure]').attr('selected','selected');
};
   
if (GLOXX.includes("2"))
{
   $('#recommendGLO2 option[value=Exposure]').attr('selected','selected');
   
}; 

if (GLOXX.includes("2 3 4 5") || GLOXX == null)
{
   assess1.innerHTML='Student selected more than 3 LOs';
   assess1.style.backgroundColor = "red";
}; 
    	
    },750)


$(document).on('click', '#assess1', function() {   

var GLO2score = $('#recommendGLO2').val();
var GLO3score = $('#recommendGLO3').val();
var GLO4score = $('#recommendGLO4').val();
var GLO5score = $('#recommendGLO5').val();

if (GLO2score == "NA" & GLO3score == "NA" & GLO4score == "NA" & GLO5score == "NA") {
	alert("At least 1 GLO required");
	$('#assess1').css('background-color', 'red');
	
} else if (GLO2score != "NA" & GLO3score != "NA" & GLO4score != "NA" & GLO5score != "NA"){

if (confirm('Student chose more than 3 LOs, continue assessing?')) {
	$('#assess1').css('background-color', '8a704c');
window.localStorage.setItem('GLO2score',GLO2score);
window.localStorage.setItem('GLO3score',GLO3score);
window.localStorage.setItem('GLO4score',GLO4score);
window.localStorage.setItem('GLO5score',GLO5score);
window.localStorage.setItem('currentId',currentId);
goNav('my_assessments','allocationId='+currentId);
} else {
return false
}
	
} else {

	$('#assess1').css('background-color', '8a704c');
window.localStorage.setItem('GLO2score',GLO2score);
window.localStorage.setItem('GLO3score',GLO3score);
window.localStorage.setItem('GLO4score',GLO4score);
window.localStorage.setItem('GLO5score',GLO5score);
window.localStorage.setItem('currentId',currentId);
goNav('my_assessments','allocationId='+currentId);
  
};          
                    
});
       
recommend.appendChild(copy1);
recommend.appendChild(assess1);     
       
   setTimeout(function(){ 
   $('#frmUpdate2').remove();
   }, 1000);

  
  },1000);
        	
        }, 1500);

        
        //<a href="javascript:ViewInlinePortlet('journal_mod','journalId=12575&amp;asEmbed=1','.journals-list','closeSelf')">SMU Freshmen Orientation 2022</a>
        
      };	
};
          }else{
              if (confirm('Checked OSL grading?')) {
              	window.localStorage.setItem('currentId',currentId);
             goNav('my_assessments','allocationId='+currentId);  
      };
            	
            }

         };

       };    

     };


SOCI.onclick = function(){
    var assessfunction = 1;
localStorage.setItem('assessfunction',assessfunction);
      this.style.backgroundColor = "red";   
     $('.panelviewerback').addClass( $('.closing').attr('class') );
     
     $( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );
     
     $( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
           "href" : "javascript:void(0)",
           "title" : "Go Back"
         });;
         
     
         
       $( ".closing" ).click(function() {
  document.getElementById("CU").remove();
  document.getElementById("workshop").remove();
  document.getElementById("OSL").remove();
    document.getElementById("SOCI").remove();

  
     $( "#status" ).remove();
     var appraisal = null;
     var appraisal1 = null;
     var appraisal2 = null;
     var appraisal3 = null;
     var appraisal4 = null;
     var appraisal5 = null;
     
     var assessed = '';
     
     var appointment = null;
     var reflection = null;
     
     var enddate = null;
     var today = null;
     var millisBetween = null; 
     var days = null;
     
     
     $(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");
     
     
         });	  	

         var enddate3 = $('p.picker-selection:contains("Hours")').prev("p").html();
 
 
         var enddate2 = enddate3.slice(-10);
         var enddate = new Date(enddate2);
         var today = new Date();
         var millisBetween = today.getTime() - enddate.getTime();  
         var days = millisBetween / (1000 * 3600 * 24);  
         var days = Math.round(Math.abs(days));
         
         if (enddate > today) 
         {var days = -days;
         var text3 = $('span.flag.tag').text();
         };

         //nested if else (not workshop,internship or CSP), then check date
           
         if (text3 == 'Workshop' || text3 == 'WorkshopWorkshop' || text3 == 'Internship' || text3 == 'InternshipInternship' || text3 == 'Community Service' || text3 == 'Community ServiceCommunity Service')
         {alert("Not a CCA");
            } else {
            //enddate//
            if (days < 30)
            {alert("Not ready to grade ("+days+" days)");
            } else 
            {var GLO = $('.keep-together h3:contains("GLO")').siblings().html().replace(/[^0-9\.]/g, '');
            window.localStorage.setItem('GLOnum', GLO);
            console.log(GLO);
            var idid = $('span.name:eq(1)').text().replace('_', '');
            window.localStorage.setItem('idid', idid);
            var placementname = $(".flag-noticeoversized").parent().text().replace(" Preassigned In Progress", "");
            window.localStorage.setItem('placementname', placementname);
            
            var currentId2 =$('.assessments-list tr:contains("Transformative Learning Rubric"):contains("CCD Assessor")').attr('id'); 

             currentId = currentId2.replace(/[^0-9\.]/g, '');
            var reflectionjournal = $('.journals-list tr td:nth-last-child(2)').text();
        	var member = $('.keep-together h3:contains("Membership Type")').siblings().html();
        
        
         var assessed = $("tr:contains('Staff Assessor') td:last-child").html();

			console.log(assessed);
        if(member == "Member" || member == "Participant" || assessed === '')
            {if(reflectionjournal == 0)
              {
              	window.localStorage.setItem('currentId',currentId);
              	goNav('my_assessments','allocationId='+currentId);
            }else{
    if (confirm("Student submitted a reflection!")){

        $('.journals-list tbody tr td a')[0].click();
        
        setTimeout(function() {
        	
        	
        var journalGLO = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table thead tr:first-child').text().replace('Intellectual and Creative Skills','2').replace('Interpersonal Skills','3').replace('Global Citizenship','4').replace('Personal Mastery','5').replace(/\D/g,'');
       
       console.log(journalGLO);
       //glo2
    	var text1 = "["+$('#inlinePortletjournal_mod').contents().find('#lblEntryList table thead tr th:nth-child(1)').text().replace('Comment','') +"]";
        var textwhat = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(2)').text();
        var textsowhat = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(3)').text();
        var textnowwhat = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(4)').text();
        //glo3
        var text2 = "["+$('#inlinePortletjournal_mod').contents().find('#lblEntryList table thead tr th:nth-child(5)').text().replace('Comment','')+"]";
        var textwhat2 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(6)').text();
        var textsowhat2 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(7)').text();
        var textnowwhat2 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(8)').text();
        //glo4
        var text3 ="["+ $('#inlinePortletjournal_mod').contents().find('#lblEntryList table thead tr th:nth-child(9)').text().replace('Comment','')+"]";
        var textwhat3 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(10)').text();
        var textsowhat3 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(11)').text();
        var textnowwhat3 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(12)').text();
        //glo5
        var text4 = "["+$('#inlinePortletjournal_mod').contents().find('#lblEntryList table thead tr th:nth-child(13)').text().replace('Comment','')+"]";
        var textwhat4 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(14)').text();
        var textsowhat4 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(15)').text();
        var textnowwhat4 = $('#inlinePortletjournal_mod').contents().find('#lblEntryList table tbody tr td:nth-child(16)').text();

        var wordcount2 = (textwhat+textsowhat+textnowwhat+textwhat2+textsowhat2+textnowwhat2+textwhat3+textsowhat3+textnowwhat3+textwhat4+textsowhat4+textnowwhat4).split(' ').length;

        console.log(wordcount2);
        
        setTimeout(function() {
        	
            var studentname = $('span.name:eq(1)').text().replace('_', '');
            var placementname = $(".flag-noticeoversized").parent().text().replace(" Preassigned In Progress", "");
  
    var status = document.createElement('div');
    status.id="status2";
    
    var wordcount = document.createElement('div');
    wordcount.id="wordcount";
    wordcount.innerHTML = wordcount2 + " words";

    var wordnum = wordcount2;
    
    var name1 = document.createElement('div');
    name1.id="name1";

    name1.innerHTML = studentname;

    var name2 = document.createElement('div');
    name2.id="name2";
    name2.innerHTML = placementname;
    
    

  
	if($("input:checkbox:eq(0)").prop('checked') == true || $("input:checkbox:eq(1)").prop('checked') == true){
var GLO2 = "2 ";
} else { var GLO2 = ""};
	if($("input:checkbox:eq(2)").prop('checked') == true || $("input:checkbox:eq(3)").prop('checked') == true){
var GLO3 = "3 ";
} else { var GLO3 = ""};
	if($("input:checkbox:eq(4)").prop('checked') == true || $("input:checkbox:eq(5)").prop('checked') == true || $("input:checkbox:eq(6)").prop('checked') == true){
var GLO4 = "4 ";
} else { var GLO4 = ""};
	if($("input:checkbox:eq(7)").prop('checked') == true || $("input:checkbox:eq(8)").prop('checked') == true || $("input:checkbox:eq(9)").prop('checked') == true){
var GLO5 = "5";
} else { var GLO5 = ""};

var GLOS = document.createElement('div');
GLOS.id="GLOS";
GLOS.innerHTML = "GLO "+ GLO2 + GLO3 + GLO4 + GLO5;
var GLOXX = GLO2 + GLO3 + GLO4 + GLO5;
localStorage.setItem('GLOnum', GLOXX);

var assess = document.createElement('div');
assess.id="assess";
assess.innerHTML = "Assess";

   status.appendChild(wordcount); 
   status.appendChild(assess);
  
var detail1 = document.createElement('div');
detail1.id="detail1";
detail1.innerHTML = "";

  
  var reflection1 = document.createElement('div');
  reflection1.id="reflection1";
  reflection1.innerHTML = "<b>Student:</b> " + studentname + "<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>Placement:</b>"  + placementname +" [" + valuetype + "]<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>GLOs chosen:</b> " + GLO + "<span style='color: #EAEAEA'>‰‰‰</span><br>"+ text1 +textwhat +"<br><br>"+ textsowhat+"<br><br>"+ textnowwhat + "<span style='color: #EAEAEA'>‰‰‰</span><br>"+ text2 + textwhat2+"<br><br>"+ textsowhat2+"<br><br>"+ textnowwhat2 + "<br>"+ text3 + textwhat3+"<br><br>"+ textsowhat3+"<br><br>"+ textnowwhat3+"<br>"+ text4 +textwhat4+"<br><br>"+ textsowhat4+"<br><br>"+ textnowwhat4 + "<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>Word count:</b> " + wordnum + "<span style='color: #EAEAEA'>‰‰‰</span>";
  
  //var overall = document.createElement('div');
  //overall.id="overall";
  //overall.innerHTML = "<b><u>Appraisal (from organization/employer)</u></b><span style='color: #EAEAEA'>‰‰‰</span><br>"+ "Overall grade: " + appraisal + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO1: "+ appraisal1 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO2: "+ appraisal2 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO3: "+ appraisal3 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO4: "+ appraisal4 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO5: "+ appraisal5 + "<span style='color: #EAEAEA'>‰‰‰</span>";
   
  
  //assessed//
  //var deptassess = document.createElement('div');
  //deptassess.id="deptassess";
  //if(assessed  === '')
  //{deptassess.innerHTML = "<b><u>Department DID NOT assess</u></b><span style='color: #EAEAEA'>‰‰‰</span>";  
  //} else 
  //{ deptassess.innerHTML = "<b><u>Department Assesssed (please indicate)</u></b><span style='color: rgb(244,113,33)'>‰‰‰%^&</span><br>GLO2: <select name=selectGLO2 id=selectGLO2><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span><br>GLO3: <select name=selectGLO3 id=selectGLO3><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span><br>GLO4: <select name=selectGLO4 id=selectGLO4><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span><br>GLO5: <select name=selectGLO5 id=selectGLO5><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(244,113,33)'>‰‰‰</span>";
  //deptassess.style.backgroundColor = "rgb(244,113,33)";
  //}; 
 

    //recommend//
    var recommend = document.createElement('div');
    recommend.id="recommend";
    recommend.style.backgroundColor = "rgb(21,28,85)";
    recommend.style.color = "rgb(255,255,255)";
    recommend.innerHTML = "<b><u>CCD recommendation (please indicate)</u></b><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO2: <select name=recommendGLO2 id=recommendGLO2><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO3: <select name=recommendGLO3 id=recommendGLO3><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO4: <select name=recommendGLO4 id=recommendGLO4><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO5: <select name=recommendGLO5 id=recommendGLO5><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br><b>Comments:</b><br><textarea id='textarea' rows='4' cols='500'></textarea>";
 
   
  

     
var copy1 = document.createElement('div');
copy1.id="copy1";
copy1.innerHTML = "Request approval";


var assess1 = document.createElement('div');
assess1.id="assess1";
assess1.innerHTML = "Assessment confirmation";

var close = document.createElement('div');
close.id="close";
close.innerHTML = "close";


$(document).on('click', '#close', function() {  

$("#detail1").hide();
	
})

detail1.appendChild(reflection1);
//detail1.appendChild(overall); 
//detail1.appendChild(deptassess);
detail1.appendChild(recommend);
detail1.appendChild(close);


    


    document.body.appendChild(detail1);
   $('html, body').animate({scrollTop:(0)}, '2000');
   
   
$(document).on('click', '#copy1', function() {   

    window.getSelection().selectAllChildren(
        document.getElementById("detail1")
    );
    
      document.execCommand("copy");
      alert('Copied data. Paste in form for approval.');
      
      window.open(
  'https://forms.office.com/Pages/ResponsePage.aspx?id=ynmKyZpakUeiQ_Bq_WdGTVo0hFIoWr1FpSE3cEw9VyxUOTBGMTI4N0pGNks2UVQ4TExOOVc2UjBRWi4u',
  '_blank' 
);
      
      });


	setTimeout(function(){
		
		var GLOXX = GLO;
	window.localStorage.setItem('GLOnum', GLO);
if (GLOXX.includes("5"))
{
	$('#recommendGLO5 option[value=Exposure]').attr('selected','selected');
};

if (GLOXX.includes("4"))
{
   $('#recommendGLO4 option[value=Exposure]').attr('selected','selected');
};
   
if (GLOXX.includes("3"))
{
   $('#recommendGLO3 option[value=Exposure]').attr('selected','selected');
};
   
if (GLOXX.includes("2"))
{
   $('#recommendGLO2 option[value=Exposure]').attr('selected','selected');
   
}; 

if (GLOXX.includes("2 3 4 5") || GLOXX == null)
{
   assess1.innerHTML='Student selected more than 3 LOs';
   assess1.style.backgroundColor = "red";
}; 
    	
    },1000)


$(document).on('click', '#assess1', function() {   

var GLO2score = $('#recommendGLO2').val();
var GLO3score = $('#recommendGLO3').val();
var GLO4score = $('#recommendGLO4').val();
var GLO5score = $('#recommendGLO5').val();

if (GLO2score == "NA" & GLO3score == "NA" & GLO4score == "NA" & GLO5score == "NA") {
	alert("At least 1 GLO required");
	$('#assess1').css('background-color', 'red');
	
} else if (GLO2score != "NA" & GLO3score != "NA" & GLO4score != "NA" & GLO5score != "NA"){

if (confirm('Student chose more than 3 LOs, continue assessing?')) {
	$('#assess1').css('background-color', '8a704c');
window.localStorage.setItem('GLO2score',GLO2score);
window.localStorage.setItem('GLO3score',GLO3score);
window.localStorage.setItem('GLO4score',GLO4score);
window.localStorage.setItem('GLO5score',GLO5score);

window.localStorage.setItem('currentId',currentId);
goNav('my_assessments','allocationId='+currentId);
} else {
return false
}
	
} else {

	$('#assess1').css('background-color', '8a704c');
window.localStorage.setItem('GLO2score',GLO2score);
window.localStorage.setItem('GLO3score',GLO3score);
window.localStorage.setItem('GLO4score',GLO4score);
window.localStorage.setItem('GLO5score',GLO5score);

window.localStorage.setItem('currentId',currentId);
goNav('my_assessments','allocationId='+currentId);
  
};          
                    
});
       
recommend.appendChild(copy1);
recommend.appendChild(assess1);     
       
   setTimeout(function(){ 
   $('#frmUpdate2').remove();
   }, 1000);

  
  },1500);
        	
        }, 1500);

        
        //<a href="javascript:ViewInlinePortlet('journal_mod','journalId=12575&amp;asEmbed=1','.journals-list','closeSelf')">SMU Freshmen Orientation 2022</a>
        
      };	
};
          }else{
            	alert("Check SOCI grading!");
            	 //soci Assessment parse grades
            	  setTimeout(function(){
					$(".assessments-list tr:contains('Department Rubric') td").trigger('click');
    				setTimeout(function(){ 
       
						var studentidassessment = $('li a:contains("View Summary")').attr('href').replace(/[^0-9=]/g, "");	
 
						ViewAllocationSummary(studentidassessment);
    						
    						setTimeout(function(){ 
       
								var LO2 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(0).text();
								var LO3 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(1).text();
								var LO4 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(2).text();
								var LO5 = $('.outcome-only .tooltip-inner[title*="My Score"]').eq(3).text();
  
							console.log(LO2 + LO3 + LO4 + LO5);
							var deptGLO2 = window.localStorage.setItem('deptGLO2',LO2);
							var deptGLO3 = window.localStorage.setItem('deptGLO3',LO3);
							var deptGLO4 = window.localStorage.setItem('deptGLO4',LO4);
							var deptGLO5 = window.localStorage.setItem('deptGLO5',LO5);

							console.log("Department Assessment saved!");
  
							$('.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.dialog-default.ui-draggable a:contains("close")').trigger('click');
							window.localStorage.setItem('currentId',currentId);
							goNav('my_assessments','allocationId='+currentId);
  
    						}, 1000);  
  
  
    					}, 500);
         
    			}, 1000);
//end parse  	
            }

         };

       };    

     };