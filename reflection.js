

  $('#frmUpdate2').remove();
  
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
    
    status.appendChild(wordcount);   
    
    var name1 = document.createElement('div');
    name1.style.padding="13px 0";
    name1.style.width="200px";
    name1.innerHTML = studentname;
    
    status.appendChild(name1); 
    
    var name2 = document.createElement('div');
    name2.style.padding="13px 0";
    name2.style.width="200px";
    name2.innerHTML = placementname;
    
    status.appendChild(name2);
};
    
  
  
  $('#lnkReturn').click(function() {

location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID=0&AllocationID="+allocateid;

});
