
    
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
 
  var allocateid = localStorage.getItem('allocateid');

var assess1 = document.createElement('div');
assess1.id="assess1";
assess1.innerHTML = "Assessment";

detail1.appendChild(reflection1);
detail1.appendChild(overall);

	
   $( "#assess1").click(function() {
	
      if (GLOXX.includes("2 3 4 5") || GLOXX == null){
         assess1.innerHTML='Student selected more than 3 LOs';
         assess1.style.backgroundColor = "red";
      
         if (confirm('Student chose more than 3 LOs, continue assessing?')) {
               $('#assess1').css('background-color', 'red');
               var currentId = localStorage.getItem('currentId');
               goNav('my_assessments','allocationId='+currentId);
      }}; 
var currentId = localStorage.getItem('currentId');
goNav('my_assessments','allocationId='+currentId);
    assess.innerHTML = "Close";
	
if ($('#detail1').length === 0) {
document.body.appendChild(detail1);

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

   setTimeout(function(){ 
   $('#frmUpdate2').remove();
   }, 1000);
    
};
  
  $('#lnkReturn').click(function() {

location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID=0&AllocationID="+allocateid;

});