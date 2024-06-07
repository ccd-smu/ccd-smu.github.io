//CSP   

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const GLOnum = urlParams.get('GLOnum')
console.log(GLOnum);
const GLO2score = urlParams.get('GLO2score')
console.log(GLO2score);

const GLO3score = urlParams.get('GLO3score')
console.log(GLO3score);

const GLO4score = urlParams.get('GLO4score')
console.log(GLO4score);

const GLO5score = urlParams.get('GLO5score')
console.log(GLO5score);

const allocationId = urlParams.get('allocationId')
console.log(allocationId);
//


if (!GLOnum) { } else {

    window.localStorage.setItem('GLOXX', GLOnum);
    window.localStorage.setItem('deptGLO2', GLO2score);
    window.localStorage.setItem('deptGLO3', GLO3score);
    window.localStorage.setItem('deptGLO4', GLO4score);
    window.localStorage.setItem('deptGLO5', GLO5score);

    window.localStorage.setItem('currentId', allocationId);

    window.localStorage.setItem('assessfunction', 1);
}

//

var assessfunction2 = localStorage.getItem('assessfunction');
if (assessfunction2 == 1){

    var button = document.createElement('div');
    button.id="button";
    button.style.background = "blue";
    button.style.height="auto";
    button.style.width="200px";
    button.style.position="fixed";
    button.style.bottom="0";
    button.style.right="0";
    button.style.zIndex = "9999";
    button.style.color = "#fff";
    button.style.textAlign = "center";
    button.style.padding = "13px 0";
    button.style.cursor = "pointer";
    button.innerHTML = "back to placements";
    document.body.appendChild(button);
    $(document).on('click', '#button', function() {
        location.href = 'https://shib.chalkandwire.com/ep2_smu/FieldPlacementList.aspx?cus=465';

    });

    SaveStudentAssessment = (function() {
        var cached_function = SaveStudentAssessment;
        return function() {
            // your code
            var result = cached_function.apply(this, arguments); // use .apply() to call it
            //localStorage.setItem('GLOXX', null);

            return result;
        };
    })();


    //
    $("#assessment_details").on('focus', function () {


        var GLOXX = localStorage.getItem('GLOXX');
        var allocationID =  window.localStorage.getItem('currentId');
        setTimeout(function() {

            $('tr.criterion[data-criterion-id=crit'+allocationID+'_2024]').addClass('border1');
            $('tr.criterion[data-criterion-id=crit'+allocationID+'_2025]').addClass('border2');
            $('tr.criterion[data-criterion-id=crit'+allocationID+'_2026]').addClass('border3');
            $('tr.criterion[data-criterion-id=crit'+allocationID+'_2027]').addClass('border4');


            if (!GLOXX.includes("2")) {


                $('.ckNotApplicable').eq(0).attr('checked', true);

            }
            if (!GLOXX.includes("3")) {
                $('.ckNotApplicable').eq(1).attr('checked', true);
            }
            if (!GLOXX.includes("4")) {


                $('.ckNotApplicable').eq(2).attr('checked', true);

            }
            if (!GLOXX.includes("5")) {


                $('.ckNotApplicable').eq(3).attr('checked', true);

            }


            if (GLOXX.includes("2")) {
                $('tr.criterion[data-criterion-id=crit' + allocationID + '_2024] .txtScore option[value=Exposure]').attr('selected', 'selected');
            };

            if (GLOXX.includes("3")) {
                $('tr.criterion[data-criterion-id=crit' + allocationID + '_2025] .txtScore option[value=Exposure]').attr('selected', 'selected');
            };

            if (GLOXX.includes("4")) {
                $('tr.criterion[data-criterion-id=crit' + allocationID + '_2026] .txtScore option[value=Exposure]').attr('selected', 'selected');
            };

            if (GLOXX.includes("5")) {
                $('tr.criterion[data-criterion-id=crit' + allocationID + '_2027] .txtScore option[value=Exposure]').attr('selected', 'selected');
            };
        }, 800);



        var type = localStorage.getItem('type');


    });


    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if (timesRun === 10) {
            clearInterval(interval);
        }
        if ($("#jGrowl").is(":visible")) {

            var type = "";
            localStorage.setItem('type',type);
            var assessfunction = 0;
            localStorage.setItem('assessfunction',assessfunction);
            var GLOXX = localStorage.setItem('GLOXX','');
        }

    }, 500); };
