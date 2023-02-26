$(document).ready(function(){

    if(document.URL.indexOf("https://smu.chalkandwire.com/FieldPlacementList.aspx") >= 0){ 
        $('body').append($('<script src="https://ccd-smu.github.io/CCDplacement.js"></script>'));
        $('head').append('<link rel="stylesheet" type="text/css" href="https://ccd-smu.github.io/CCDplacement.css">');
        }
        if(document.URL.indexOf("https://smu.chalkandwire.com/Assess2.aspx?") >= 0){ 
            $('body').append($('<script src="https://ccd-smu.github.io/CCDassessment.js"></script>'));
            $('head').append('<link rel="stylesheet" type="text/css" href="https://ccd-smu.github.io/CCDassessment.css">');
            }
            if(document.URL.indexOf("https://smu.chalkandwire.com/DemographicsRun.aspx?cus=465&TopicId=92&deptID=0") >= 0){ 
                $('body').append($('<script src="https://ccd-smu.github.io/CSPreflection.js"></script>'));
                $('head').append('<link rel="stylesheet" type="text/css" href="https://ccd-smu.github.io/CSPreflection.css">');
                }
                if(document.URL.indexOf("https://smu.chalkandwire.com/DemographicsRun.aspx?cus=465&TopicId=146&deptID=0") >= 0){ 
                    $('body').append($('<script src="https://ccd-smu.github.io/INTreflection.js"></script>'));
                    $('head').append('<link rel="stylesheet" type="text/css" href="https://ccd-smu.github.io/INTreflection.css">');
                    }
    
    
});

