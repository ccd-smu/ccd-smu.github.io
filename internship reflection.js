var what = $('#tblQuestion1253').text().split(' ').length;
var sowhat = $('#tblQuestion1254').text().split(' ').length;
var nowwhat = $('#tblQuestion1255').text().split(' ').length;

var studentname = $('li.userForm-summary-student').text().replace(/CANDIDATE/g, '');    
var placementname = $('li.userForm-summary-placement').text().replace(/PLACEMENT/g, '');

var appraisal = localStorage.getItem('appraisal', appraisal);
var appraisal1 = localStorage.getItem('appraisal1', appraisal1);
var appraisal2 = localStorage.getItem('appraisal2', appraisal2);
var appraisal3 = localStorage.getItem('appraisal3', appraisal3);
var appraisal4 = localStorage.getItem('appraisal4', appraisal4);
var appraisal5 = localStorage.getItem('appraisal5', appraisal5);  

var assessed = localStorage.getItem('assessed', assessed);

var textwhat = $('#tblQuestion1253').text();
var textsowhat = $('#tblQuestion1254').text();
var textnowwhat = $('#tblQuestion1255').text();


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
  
  
  
if($("#gqrt1624").closest("td").next('td').find('i').attr('title') == "Checked"){
var GLO2 = "2 ";
} else { var GLO2 = ""};

if($("#gqrt1626").closest("td").next('td').find('i').attr('title') == "Checked" || 
$("#gqrt1627").closest("td").next('td').find('i').attr('title') == "Checked") {
var GLO3 = "3 ";
} else { var GLO3 = ""};

if($("#gqrt1629").closest("td").next('td').find('i').attr('title') == "Checked" || 
$("#gqrt1630").closest("td").next('td').find('i').attr('title') == "Checked") {
var GLO4 = "4 ";
} else { var GLO4 = ""};


if($("#gqrt1632").closest("td").next('td').find('i').attr('title') == "Checked" || 
$("#gqrt1633").closest("td").next('td').find('i').attr('title') == "Checked" || 
$("#gqrt1634").closest("td").next('td').find('i').attr('title') == "Checked") {
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
    var allocationID = localStorage.getItem('allocationID');

var assess1 = document.createElement('div');
assess1.id="assess1";
assess1.innerHTML = "Assessment";

detail1.appendChild(reflection1);
detail1.appendChild(overall);
detail1.appendChild(recommend);

$(document).on('click', '#assess', function() {

assess.innerHTML = "Close";

if ($('#detail1').length === 0) {
document.body.appendChild(detail1);
detail1.appendChild(assess1);
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
recommend.appendChild(copy1);
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

 setTimeout(function(){ 
 $('#frmUpdate2').remove();
 }, 1000);
  
};

$('#lnkReturn').click(function() {

location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID=0&AllocationID="+allocationID;

});