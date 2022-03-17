  $(document).ready(function() {
    if (window.location.href.indexOf("https://shib.chalkandwire.com/ep2_smu/FieldPlacementList.aspx?cus=465") > -1) 
    {$('body').append($('<script src="https://xwtoh.github.io/placement.js"></script>'));
    $('head').append('<link rel="stylesheet" type="text/css" href="https://xwtoh.github.io/Placement.css">');}
  	
   else if (window.location.href.indexOf("https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId=92&deptID=0") > -1) 
   {$('body').append($('<script src="https://xwtoh.github.io/reflection.js"></script>'));
    $('head').append('<link rel="stylesheet" type="text/css" href="https://xwtoh.github.io/Reflection.css">');}
  	
  else if (window.location.href.indexOf("https://shib.chalkandwire.com/ep2_smu/Assess2.aspx?") > -1) 
  {$('body').append($('<script src="https://xwtoh.github.io/assessment.js"></script>'));
    $('body').append($('<script src="https://xwtoh.github.io/assessment.js"></script>'));}
    
  else{}


});