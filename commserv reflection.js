

  var what = $('#tblQuestion610').text().split(' ').length;
  
  var sowhat = $('#tblQuestion611').text().split(' ').length;

  var nowwhat = $('#tblQuestion612').text().split(' ').length;
  
  var studentname = $('li.userForm-summary-student').text().replace(/CANDIDATE/g, '');    
  var placementname = $('li.userForm-summary-placement').text().replace(/PLACEMENT/g, '');
  
  var appraisal = localStorage.getItem('appraisal', appraisal);
  var appraisal1 = localStorage.getItem('appraisal1', appraisal1);
  var appraisal2 = localStorage.getItem('appraisal2', appraisal2);
  var appraisal3 = localStorage.getItem('appraisal3', appraisal3);
  var appraisal4 = localStorage.getItem('appraisal4', appraisal4);
  var appraisal5 = localStorage.getItem('appraisal5', appraisal5);  
  
  var assessed = localStorage.getItem('assessed', assessed);

  var textwhat = $('#tblQuestion610').text();
  var textsowhat = $('#tblQuestion611').text();
  var textnowwhat = $('#tblQuestion612').text();

  
window.onload = function() {
    var status = document.createElement('div');
    status.id="status";
    document.body.appendChild(status);
    
    var wordcount = document.createElement('div');
    wordcount.id="wordcount";
    wordcount.innerHTML = what+sowhat+nowwhat + " words";

    var wordnum = what+sowhat+nowwhat;
    
    var name1 = document.createElement('div');
    name1.id="name1";

    name1.innerHTML = studentname;

    var name2 = document.createElement('div');
    name2.id="name2";
    name2.innerHTML = placementname;
    
    
    
	if($("td:contains('Analyse the root causes of social issues faced by the community')").closest("td").next('td').find('i').attr('title') == "Checked" || $("td:contains('Demonstrate the ability to solve problems of varying levels of complexity')").closest("td").next('td').find('i').attr('title') == "Checked"){
var GLO2 = "2 ";
} else { var GLO2 = ""};

	if($("td:contains('Demonstrate the ability to recognise and leverage on strengths of others to achieve shared goals')").closest("td").next('td').find('i').attr('title') == "Checked" || 
	$("td:contains('Demonstate the ability to communicate effectively with different stakeholders to address a problem/issue')").closest("td").next('td').find('i').attr('title') == "Checked") {
var GLO3 = "3 ";
} else { var GLO3 = ""};

	if($("td:contains('Display sensitivity towards individual and cultural differences and respect diverse perspectives of others')").closest("td").next('td').find('i').attr('title') == "Checked" || 
	$("td:contains('Assess potential ethical conflicts in personal, professional and societal settings')").closest("td").next('td').find('i').attr('title') == "Checked"|| $("td:contains('Demonstrate commitment to act responsibility to address social concerns')").closest("td").next('td').find('i').attr('title') == "Checked") {
var GLO4 = "4 ";
} else { var GLO4 = ""};


	if($("td:contains('Demonstrate initiative to advance one's skills and knowledge to explore and expand one's own learning')").closest("td").next('td').find('i').attr('title') == "Checked" || 
	$("td:contains('Apply self-appraisal and reflective thinking in the learning process')").closest("td").next('td').find('i').attr('title') == "Checked" || 
	$("td:contains('Demonstrate ability to persevere through challenging circumstances')").closest("td").next('td').find('i').attr('title') == "Checked") {
var GLO5 = "5";
} else { var GLO5 = ""};

var GLOS = document.createElement('div');
GLOS.id="GLOS";
GLOS.innerHTML = "GLO "+ GLO2 + GLO3 + GLO4 + GLO5;
var GLOXX = GLO2 + GLO3 + GLO4 + GLO5;
localStorage.setItem('GLOXX', GLOXX);

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
  reflection1.innerHTML = "<b>Student:</b> " + studentname + "<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>Placement:</b>"  + placementname + "<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>GLOs chosen:</b> " + GLO2 + GLO3 + GLO4 + GLO5 + "<span style='color: #EAEAEA'>‰‰‰</span><br><br>"+ textwhat + "<span style='color: #EAEAEA'>‰‰‰</span><br><br>"+ textsowhat + "<span style='color: #EAEAEA'>‰‰‰</span><br><br>"+ textnowwhat + "<span style='color: #EAEAEA'>‰‰‰</span><br><br><b>Word count:</b> " + wordnum + "<span style='color: #EAEAEA'>‰‰‰</span>";
  
  var overall = document.createElement('div');
  overall.id="overall";
  overall.innerHTML = "<b><u>Appraisal (from organization/employer)</u></b><span style='color: #EAEAEA'>‰‰‰</span><br>"+ "Overall grade: " + appraisal + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO1: "+ appraisal1 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO2: "+ appraisal2 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO3: "+ appraisal3 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO4: "+ appraisal4 + "<span style='color: #EAEAEA'>‰‰‰</span><br>GLO5: "+ appraisal5 + "<span style='color: #EAEAEA'>‰‰‰</span>";
 

    //recommend//
    var recommend = document.createElement('div');
    recommend.id="recommend";
    recommend.style.backgroundColor = "rgb(21,28,85)";
    recommend.style.color = "rgb(255,255,255)";
    recommend.innerHTML = "<b><u>C4SR grading (please indicate)</u></b><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO2: <select name=recommendGLO2 id=recommendGLO2><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO3: <select name=recommendGLO3 id=recommendGLO3><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO4: <select name=recommendGLO4 id=recommendGLO4><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span><br>GLO5: <select name=recommendGLO5 id=recommendGLO5><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><span style='color: rgb(21,28,85)'>‰‰‰</span>";
 
   


     
var copy1 = document.createElement('div');
copy1.id="copy1";
copy1.innerHTML = "Copy";


var send1 = document.createElement('div');
send1.id="send1";
send1.innerHTML = "Send";

var assess1 = document.createElement('div');
assess1.id="assess1";
assess1.innerHTML = "Assessment confirmation";

detail1.appendChild(reflection1);
detail1.appendChild(overall);
detail1.appendChild(recommend);


$( "#assess").click(function() {
	
	setTimeout(function(){
 
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
    assess.innerHTML = "Close";
	
if ($('#detail1').length === 0) {
document.body.appendChild(detail1);
recommend.appendChild(assess1);

} else {
	
if ($('#detail1').is(':visible')){    
      $("#detail1").hide();
  $("#assess1").hide();
  assess.innerHTML = "Assess";  }
else{
     $("#detail1").show();
  $("#assess1").show();
  assess.innerHTML = "Close";	
	
}
};
  });

    
$(document).on('click', '#assess1', function() {
	

var GLO2score = $('#recommendGLO2').val();
var GLO3score = $('#recommendGLO3').val();
var GLO4score = $('#recommendGLO4').val();
var GLO5score = $('#recommendGLO5').val();	
	
if (GLO2score == "NA" &
GLO3score == "NA" &
GLO4score == "NA" &
GLO5score == "NA") {
	alert("At least 1 GLO required")
	$('#assess1').css('background-color', 'red');

} else if (GLO2score != "NA" & GLO3score != "NA" & GLO4score != "NA" & GLO5score != "NA"){

if (confirm('Student chose more than 3 LOs, continue assessing?')) {
	$('#assess1').css('background-color', '8a704c');
window.localStorage.setItem('GLO2score',GLO2score);
window.localStorage.setItem('GLO3score',GLO3score);
window.localStorage.setItem('GLO4score',GLO4score);
window.localStorage.setItem('GLO5score',GLO5score);

var currentId = localStorage.getItem('currentId');
goNav('my_assessments','allocationId='+currentId);
} else {
return false
}
	
}else{


window.localStorage.setItem('GLO2score',GLO2score);
window.localStorage.setItem('GLO3score',GLO3score);
window.localStorage.setItem('GLO4score',GLO4score);
window.localStorage.setItem('GLO5score',GLO5score);

var currentId = localStorage.getItem('currentId');
goNav('my_assessments','allocationId='+currentId);
  
};                   

	
});
       
   setTimeout(function(){ 
   $('#frmUpdate2').remove();
   }, 1000);

  
  };
    

  
  $('#lnkReturn').click(function() {

location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID=0&AllocationID="+allocateid;

});
