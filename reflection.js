

  var what = $('#tblQuestion610').text().split(' ').length;
  
  var sowhat = $('#tblQuestion611').text().split(' ').length;

  var nowwhat = $('#tblQuestion612').text().split(' ').length;
  
  console.log(what+sowhat+nowwhat);
  
    var studentname = $('li.userForm-summary-student').text().replace(/CANDIDATE/g, '');    
    var placementname = $('li.userForm-summary-placement').text().replace(/PLACEMENT/g, '');
    
  console.log(studentname);
  console.log(placementname);
  
  localStorage.setItem('studentname', studentname);
  localStorage.setItem('placementname', placementname);

  var studentname = localStorage.getItem('studentname');
  var placementname = localStorage.getItem('placementname');


window.onload = function() {
    var status = document.createElement('div');
    status.id="status";
    status.style.background = "black";
    status.style.opacity = 0.7;
    status.style.height="auto";
    status.style.position="fixed";
    status.style.bottom="0";
    status.style.left="0";
    status.style.zIndex = "9999";
    status.style.color = "#fff";
    status.style.textAlign = "center";
    document.body.appendChild(status);
    
    var wordcount = document.createElement('div');
    wordcount.style.padding="13px 0";
    wordcount.style.width="200px";
    wordcount.innerHTML = what+sowhat+nowwhat + " words";
    
    
    var name1 = document.createElement('div');
    name1.style.padding="13px 0";
    name1.style.width="200px";
    name1.innerHTML = studentname;
    
    
    var name2 = document.createElement('div');
    name2.style.padding="13px 0";
    name2.style.width="200px";
    name2.innerHTML = placementname;
    
    
	var GLOS = document.createElement('div');
    GLOS.style.padding="13px 0";
    GLOS.style.width="200px";
    
	if($("input:checkbox:eq(0)").prop('checked') == true || $("input:checkbox:eq(1)").prop('checked') == true){
console.log("GLO2");
var GLO2 = "2 ";
}



	if($("input:checkbox:eq(2)").prop('checked') == true || $("input:checkbox:eq(3)").prop('checked') == true){
console.log("GLO3");
var GLO3 = "3 ";
}



	if($("input:checkbox:eq(4)").prop('checked') == true || $("input:checkbox:eq(5)").prop('checked') == true || $("input:checkbox:eq(6)").prop('checked') == true){
console.log("GLO4");
var GLO4 = "4 ";
}

	if($("input:checkbox:eq(7)").prop('checked') == true || $("input:checkbox:eq(8)").prop('checked') == true || $("input:checkbox:eq(9)").prop('checked') == true){
console.log("GLO5");
var GLO5 = "5";
}


    GLOS.innerHTML = "GLO "+ GLO2 + GLO3 + GLO4 + GLO5;
   status.appendChild(wordcount); 
   status.appendChild(GLOS);
   status.appendChild(name1);
   status.appendChild(name2);
   
   
   setTimeout(function(){ 
   $('#frmUpdate2').remove();
   }, 1000);

  
};
    

  
  $('#lnkReturn').click(function() {

location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID=0&AllocationID="+allocateid;

});
