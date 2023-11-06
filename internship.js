var help = document.createElement('div');
  help.id="help";
  help.innerHTML = "?";
  document.body.appendChild(help);

  
  $( "#help" ).click(function() {
	  $("#help").remove();
	   
	   if($(".control-box").is(".open"))
	   {} else {
	  $("#placements-search a:contains('SEARCH PLACEMENTS')").trigger('click');
	  };
	  
		$("#cfToggle a:contains('Toggle Open/Closed'),.toggle-panel-heading a:contains('Toggle Open/Closed')").trigger('click');
	  
	  $('#statusList').addClass('highlighthelp');
	  $("label:contains('Job code')").closest(".form-field.inline").addClass('highlighthelp');
	  $("label:contains('Job code')").closest(".form-field.long.line").addClass('highlighthelp');
	  
	  
	  $('#statusList').append('<i>"In Progress" is selected</i>');
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
	 $('#reportfields\\.rcf_1909').prop('checked', true);
	 
	 //$('#lblStakeHolder').attr('value','_, Tan Poon Kian');
	 
	 
	 $('#txtStakeHolder').attr('value',$('.name').text());
	 $('#txtStakeHolder').keydown();

	 
	 
	 $('#saveAsDefault').prop('checked', true);	 
	 
	 $('#placements-search').append('<span style="background: red; color: #fff; padding: 5px"><i>click "Search"</i></span>');
	 setTimeout(function() {
	   $('#ck_PlacementStatuses_0,#ck_PlacementStatuses_1,#ck_PlacementStatuses_2,#ck_PlacementStatuses_3,#ck_PlacementStatuses_4,#ck_PlacementStatuses_5').trigger('click');
	   
	  }, 800);
	  setTimeout(function() {
	  $('.ui-corner-all').trigger('click');}, 1000);
	  
	  
  });
  
GetFieldplacementActions = (function() {
	var cached_function = GetFieldplacementActions;
	return function() {
		// your code
		var result = cached_function.apply(this, arguments); // use .apply() to call it

setTimeout(function(){ 

 var href = $('.clicktable-menu').attr('id').replace(/[^0-9\\.]+/g, '');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ccd-smu.github.io/assesslinkint.csv', true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const lines = xhr.responseText.split('\n');
        const headers = lines[0].split(',');
        const data = {};

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            if (values.length === headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = values[j];
                }
                data[obj['id']] = obj['assesslink\r'];
            }
        }

        const inputField = href.split('.')[0];
        const outputField = data[inputField].replace(".0\r", "");;
        window.localStorage.setItem('assesslink', outputField);

		console.log(inputField);
		console.log(outputField);
 
    }
};
xhr.send();

//reflection link

xhr.open('GET', 'https://ccd-smu.github.io/reflinkint.csv', true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const lines = xhr.responseText.split('\n');
        const headers = lines[0].split(',');
        const data = {};

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            if (values.length === headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = values[j];
                }
                data[obj['id']] = obj['reflink\r'];
            }
        }

        const inputField = href.split('.')[0];
        const outputField = data[inputField].replace(".0\r", "");;
        window.localStorage.setItem('reflink', outputField);

		console.log(inputField);
		console.log(outputField);
 
    }
};
xhr.send();

const li = $('li');
	   
for (let i = 0; i < li.length; i++) {
  if(li[i].innerText === 'View')
  {
	$("ul.popover-menu", $popover).prepend("<li role='none'><a role='menuitem' tabindex='-1' style='position:relative;z-index:2004; background: #151c55' href=\"javascript:ViewPlacement('" + href +"')"+ ';AssessCU()">' + "Assess" + "<\/a><\/li>");
};};
 
 
 
 
}, 1000);



return result;
	};
})();
// 


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

$('tr>*:nth-child('+ surveyval +'):contains("3")').parent().addClass('assessable1');
$('tr>*:nth-child('+ assessmentspending +'):contains("2")').parent().addClass('assessable2');

$('tr>*:nth-child('+ overallappraisalgrade +'):not(:empty):not(:contains("-")),tr>*:nth-child('+ tableappraisalGLO1 +'):not(:empty):not(:contains("-")),tr>*:nth-child('+ tableappraisalGLO2 +'):not(:empty):not(:contains("-")),tr>*:nth-child('+ tableappraisalGLO3 +'):not(:empty):not(:contains("-")),tr>*:nth-child('+ tableappraisalGLO4 +'):not(:empty):not(:contains("-")),tr>*:nth-child('+ tableappraisalGLO5 +'):not(:empty):not(:contains("-"))').parent().addClass('assessable3');



$('.assessable1.assessable2.assessable3').addClass('assessable');



}, 1500);
var idid = window.localStorage.getItem('idid');
var placementname = window.localStorage.getItem('placementname');
if (idid !== null){
  var last = document.createElement('div');
  last.id="last";
  last.innerHTML = "Find next entry";
  document.body.appendChild(last);  
//show last assessed   
setInterval(function(){
$("tr:has(td:contains('"+ placementname +"'))").filter(":has(th:contains('"+ idid +"'))").eq(0).addClass("lastone");
}, 500);
 
}

//assessCU
function AssessCU() {
   var assessfunction = 1;
localStorage.setItem('assessfunction',assessfunction);
		  
 setTimeout (function(){         
$('.panelviewerback').addClass( $('.closing').attr('class') );

$( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );

$( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
	  "href" : "javascript:void(0)",
	  "title" : "Go Back"
	});;
	
  $( ".closing" ).click(function() {

$( "#status" ).remove();

$("#status").find('#loading').remove();
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
var my_css_class = { background : 'red', color : '#fff' , zIndex: '9999', cursor: 'pointer', padding: '13px 0', width: '200px'};

}, 1750);

var status = document.createElement('div');
status.id="status";
status.innerHTML = "";

var appraisalwindow = document.createElement('div');
appraisalwindow.id="appraisalwindow";
 var appraisalwindow2 = document.createElement('div');
appraisalwindow2.id="appraisalwindow2";

var datewindow = document.createElement('div');
datewindow.id="datewindow";

var reflectwindow = document.createElement('div');
reflectwindow.id="reflection";

var loading = document.createElement('div');
loading.id="loading";
loading.innerHTML="loading...";

status.appendChild(loading);
status.appendChild(datewindow);
status.appendChild(appraisalwindow);
 status.appendChild(appraisalwindow2);
status.appendChild(reflectwindow);

 document.body.appendChild(status);
 
//data update  
var timesRun2 = 0;
var interval2 = setInterval(function(){
   timesRun2 += 1;
   if(timesRun2 === 5){
	   clearInterval(interval2);
   }

$("#status").find('#loading').remove();
$("#status").css('background-color', 'red');


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
	
   

//enddate//
if(days < 1)
{datewindow.innerHTML = "Not ready to grade ("+days+" days)";
} else {
datewindow.innerHTML = days+" days since end date";
datewindow.style.background = "green";};

 //reflection//
 if(reflection  === 'Complete')
 {reflectwindow.style.background = "darkgreen"; 

$("#reflection").hover(function(){
 $(this).css("background-color", "black");
 }, function(){
 $(this).css("background-color", "darkgreen");
});

 reflectwindow.innerHTML = "Reflection complete (click to view)";
 reflectwindow.style.cursor = "pointer";
 
$('#reflection').click(function(){

	setTimeout(function(){
 $("tr:contains('Post-activity Reflection') td").trigger('click');
	  setTimeout(function(){ 
 var reflectionalert = $('li a:contains("Edit")').attr('href').replace(/[^0-9=]/g, "");	

 reflectionalertarray = reflectionalert.split('=')

 var topicid = reflectionalertarray[1]; 
var departid = reflectionalertarray[2];
 var allocationID = reflectionalertarray[3]; 


 window.localStorage.setItem('allocationID', allocationID);
 // set click callback
$('.popover-inner li a:contains("Edit")').click(function() {
location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID="+departid+"&AllocationID="+allocationID;
});
// trigger click callback
 var currentId2 =$('tr:has(td:contains("DKHMCC Assessor"))').attr('id'); 
 currentId = currentId2.replace(/[^0-9\.]/g, '');
 window.localStorage.setItem('currentId', currentId);
window.open("https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID="+departid+"&AllocationID="+allocationID, "_blank");
	}, 1000);
		
	}, 1000);
	

});
 
 } else {reflectwindow.innerHTML = "Reflection incomplete";} 

 //appraisal//
if((appraisal  === '') && (appraisal1  === '') && (appraisal2  === '') && (appraisal3  === '') && (appraisal4  === '') && (appraisal5  === ''))
 {appraisalwindow.innerHTML = "No appraisal";
 } else 
 {appraisalwindow.innerHTML = "Appraisal done";
 appraisalwindow.style.background = "green";
 appraisalwindow2.innerHTML = "Overall: "+appraisal+"<br>GLO1: "+appraisal1+"<br>GLO2: "+appraisal2+"<br>GLO3: "+appraisal3+"<br>GLO4: "+appraisal4+"<br>GLO5: "+appraisal5;
 appraisalwindow2.style.background = "green";
 
	 
 };

}, 750); 
 
//end data update


$(document).on('click', '#assess1', function() {

var GLO =  window.localStorage.getItem('GLOnum');
goNav('my_assessments','allocationId='+currentId);
 });


		
;
   
};


//click next one that is ready to assess
$( "#last" ).click(function() {
var valuetype = window.localStorage.getItem('valuetype');
console.log(valuetype);
//if lastone exists
if($(".lastone").length > 0) 
{
if ($(".lastone").closest("tr").is(":last-child")) 
   {//go to next page if lastone is last in table
	   $("#placements-table_paginate a:contains('Next →')").trigger('click');
   } else {
   //click next .assessable
	   $("#placements-table tbody tr.assessable").eq(1).trigger('click');
   }

}
else //if lastone doesnt exist
{
   if($(".assessable").length === 0) //if assessable doesnt exist AND lastone doesnt exist, click next page
   {
		   $("#placements-table_paginate a:contains('Next →')").trigger('click');
   }
   
// if last one doesnt exist, but assessable exists, click first assessable

$("#placements-table tbody tr.assessable").eq(0).trigger('click');

};


});