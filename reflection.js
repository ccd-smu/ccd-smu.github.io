  var what = $('#tblQuestion610').text().split(' ').length;
  
  var sowhat = $('#tblQuestion611').text().split(' ').length;

  var nowwhat = $('#tblQuestion612').text().split(' ').length;
  
  var studentname = $('li.userForm-summary-student').text().replace(/CANDIDATE/g, '');    
  var placementname = $('li.userForm-summary-placement').text().replace(/PLACEMENT/g, '');
  
  var appraisal = localStorage.getItem('appraisal', appraisal);
  var appraisal1 = localStorage.getItem('appraisal', appraisal1);
  var appraisal2 = localStorage.getItem('appraisal', appraisal2);
  var appraisal3 = localStorage.getItem('appraisal', appraisal3);
  var appraisal4 = localStorage.getItem('appraisal', appraisal4);
  var appraisal5 = localStorage.getItem('appraisal', appraisal5);  
  
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

var approval = document.createElement('div');
approval.id="approval";
approval.innerHTML = "Approval";

   status.appendChild(wordcount); 
   status.appendChild(approval);
  
var detail1 = document.createElement('div');
detail1.id="detail1";
detail1.innerHTML = "";

  
  var reflection1 = document.createElement('div');
  reflection1.id="reflection1";
  reflection1.innerHTML = "<b>Student:</b> " + studentname + "<br><br><b>Placement:</b>"  + placementname + "<br><br><b>GLOs chosen:</b> " + GLO2 + GLO3 + GLO4 + GLO5 + "<br><br>"+ textwhat + "<br><br>"+ textsowhat + "<br><br>"+ textnowwhat + "<br><br><b>Word count:</b> " + wordnum;
  
  var overall = document.createElement('div');
  overall.id="overall";
  overall.innerHTML = "<br><br>"+ "<b><u>Appraisal (from organization/employer)</u></b><br>"+ "Overall grade: " + appraisal + "<br>GLO1: "+ appraisal1 + "<br>GLO2: "+ appraisal2 + "<br>GLO3: "+ appraisal3 + "<br>GLO4: "+ appraisal4 + "<br>GLO5: "+ appraisal5;
   
  
  //assessed//
  var deptassess = document.createElement('div');
  deptassess.id="deptassess";
  if(assessed  === '')
  {deptassess.innerHTML =  "<br></br>" +"<b><u>Department DID NOT assess</u></b>";  
  } else 
  { deptassess.innerHTML = "<br></br>" + "<b><u>Department Assesssed (please indicate)</u></b><br>GLO2: <select name=selectGLO2 id=selectGLO2><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><br>GLO3: <select name=selectGLO3 id=selectGLO3><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><br>GLO4: <select name=selectGLO4 id=selectGLO4><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><br>GLO5: <select name=selectGLO5 id=selectGLO5><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select>";
  deptassess.style.backgroundColor = "rgb(244,113,33)";
  }; 
 

    //recommend//
    var recommend = document.createElement('div');
    recommend.id="recommend";
    recommend.style.backgroundColor = "rgb(244,113,33)";
    recommend.innerHTML = "<br></br>" + "<b><u>CCD recommendation (please indicate)</u></b><br>GLO2: <select name=recommendGLO2 id=recommendGLO2><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><br>GLO3: <select name=recommendGLO3 id=recommendGLO3><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><br>GLO4: <select name=recommendGLO4 id=recommendGLO4><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select><br>GLO5: <select name=recommendGLO5 id=recommendGLO5><option value=NA>NA</option><option value=Transformation>Transformation</option><option value=Integration>Integration</option><option value=Exposure>Exposure</option></select>";
 
   
  

     
var copy1 = document.createElement('div');
copy1.id="copy1";
copy1.innerHTML = "Copy";


var send1 = document.createElement('div');
send1.id="send1";
send1.innerHTML = "Send";



detail1.appendChild(reflection1);
detail1.appendChild(overall); 
detail1.appendChild(deptassess);
detail1.appendChild(recommend);


$( "#approval" ).click(function() {
if ($('#detail1').length === 0) {
document.body.appendChild(detail1);
status.appendChild(copy1); 
status.appendChild(send1); 
} else {
  $("#detail1").toggle();
  $("#copy1").toggle();
  $("#send1").toggle();
};
  });

  $(document).on('click', '#copy1', function() {   
      
    console.log(studentname,'\n\b',placementname);

    window.getSelection().selectAllChildren(
        document.getElementById("detail1")
    );
    
      document.execCommand("copy");
      alert('Copied data. Click on "Send" button and paste the data for submission.');
      });



      $(document).on('click', '#send1', function() {   
      
window.open(
  'https://support.wwf.org.uk/earth_hour/index.php?type=individual',
  '_blank' 
);
        
          });
    
    
    
       
   setTimeout(function(){ 
   $('#frmUpdate2').remove();
   }, 1000);

  
  };
    

  
  $('#lnkReturn').click(function() {

location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID=0&AllocationID="+allocateid;

});