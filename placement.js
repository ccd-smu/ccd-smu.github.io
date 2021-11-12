AssessWorkshop = (function() {

	  setTimeout(function() {
var GLO = $('.keep-together h3:contains("GLO")').siblings().html().replace(/[^0-9\.]/g, '');
localStorage.setItem('GLOnum', GLO);

var idid = $('span.name:eq(1)').text().replace('_', '');

localStorage.setItem('idid', idid);

var currentId =$('#DataTables_Table_0 tbody tr').attr('id'); 
 currentId = currentId.replace(/[^0-9\.]/g, '');

var text = $('span.flag.tag').text();
var comparingText = 'Workshop';

if(text == comparingText)
{
goNav('my_assessments','allocationId='+currentId);
}
else 
{alert("Not Workshop");}
}, 1000);

});

Assess1CU = (function() {

setTimeout(function() {
	
	
	
	
var appraisal = $('.keep-together h3:contains("Appraisal Overall Grade")').siblings().html();
var appraisal1 = $('.keep-together h3:contains("Appraisal GLO1")').siblings().html();
var appraisal2 = $('.keep-together h3:contains("Appraisal GLO2")').siblings().html();
var appraisal3 = $('.keep-together h3:contains("Appraisal GLO3")').siblings().html();
var appraisal4 = $('.keep-together h3:contains("Appraisal GLO4")').siblings().html();
var appraisal5 = $('.keep-together h3:contains("Appraisal GLO5")').siblings().html();

var assessed = $("tr:contains('Assessment') td:last-child").html();

var appointment = $('.keep-together h3:contains("Appointment")').siblings().html();

var enddate = $('p.picker-selection:contains("0 Hours")').prev("p").html();
var enddate = enddate.slice(-10);
var enddate = new Date(enddate);
var today = new Date();
var millisBetween = today.getTime() - enddate.getTime();  
var days = millisBetween / (1000 * 3600 * 24);  
var days = Math.round(Math.abs(days));  


	
var status = document.createElement('div');
status.id="status";
status.style.background = "red";
status.style.height="auto";
status.style.position="fixed";
status.style.top="30%";
status.style.right="0px";
status.style.zIndex = "9999";
status.style.color = "#fff";
status.style.textAlign = "center";
status.style.cursor = "pointer";

var appraisalwindow = document.createElement('div');
appraisalwindow.id="appraisal";
appraisalwindow.style.background = "red";
appraisalwindow.style.padding="13px 0";
appraisalwindow.style.width="200px";
appraisalwindow.style.height="auto";
appraisalwindow.style.zIndex = "9999";
appraisalwindow.style.color = "#fff";
appraisalwindow.style.textAlign = "center";
appraisalwindow.style.cursor = "pointer";

var assesswindow = document.createElement('div');
assesswindow.id="assess";
assesswindow.style.background = "red";
assesswindow.style.padding="13px 0";
assesswindow.style.width="200px";
assesswindow.style.height="auto";
assesswindow.style.zIndex = "9999";
assesswindow.style.color = "#fff";
assesswindow.style.textAlign = "center";
assesswindow.style.cursor = "pointer";

var appointwindow = document.createElement('div');
appointwindow.id="appoint";
appointwindow.style.background = "black";
appointwindow.style.padding="13px 0";
appointwindow.style.width="200px";
appointwindow.style.height="auto";
appointwindow.style.zIndex = "9999";
appointwindow.style.color = "#fff";
appointwindow.style.textAlign = "center";
appointwindow.style.cursor = "pointer";

var datewindow = document.createElement('div');
datewindow.id="date";
datewindow.style.background = "red";
datewindow.style.padding="13px 0";
datewindow.style.width="200px";
datewindow.style.height="auto";
datewindow.style.zIndex = "9999";
datewindow.style.color = "#fff";
datewindow.style.textAlign = "center";
datewindow.style.cursor = "pointer";



//appraisal//
if((appraisal  === '') && (appraisal1  === '') && (appraisal2  === '') && (appraisal3  === '') && (appraisal4  === '') && (appraisal5  === ''))
 {
 appraisalwindow.innerHTML = "No appraisal";
 status.appendChild(appraisalwindow);
 } else {
 appraisalwindow.innerHTML = "Appraisal done";
 appraisalwindow.style.background = "green";
 status.appendChild(appraisalwindow);
 };
//assessed//
if(assessed  === '')
 {
 assesswindow.innerHTML = "Department Unassessed";
 status.appendChild(assesswindow);
 } else {
 	assesswindow.innerHTML = "Department Assessed";
 	assesswindow.style.background = "green";
 	status.appendChild(assesswindow);
 };
 //member or leader//
 if(appointment  === 'Leader')
 {
 appointwindow.innerHTML = "Leader (check C4SR assessment)";
 status.appendChild(appointwindow);
 } else {
 	appointwindow.innerHTML = "Member";
 	status.appendChild(appointwindow);
 };
//enddate//
if(days < 30)
 {
 datewindow.innerHTML = "Not ready to grade, "+days+" days left";
 status.appendChild(datewindow);
 } else {
 	datewindow.innerHTML = "Ready to grade, since "+days+" days";
 	status.appendChild(datewindow);
 	datewindow.style.background = "green";
 };

 document.body.appendChild(status);


console.log(appointment);
console.log(enddate);
console.log(days);



}, 1000);

});

PanelViewer.prototype.Close = (function() {
    var cached_function = PanelViewer.prototype.Close;
    return function() {

$( "#status" ).remove();
$( "#appoint" ).remove();
$( "#status" ).remove();
$( "#appraisal" ).remove();
$( "#assess" ).remove();
var appraisal = null;
var appraisal1 = null;
var appraisal2 = null;
var appraisal3 = null;
var appraisal4 = null;
var appraisal5 = null;

var assessed = '';

var appointment = null;

var enddate = null;
var today = null;
var millisBetween = null; 
var days = null;

console.log(appointment);
console.log(enddate);
console.log(days);

$(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");

var result2 = cached_function.apply(this, arguments); // use .apply() to call it
return result2;
    };
})();

GetFieldplacementActions = (function() {
    var cached_function = GetFieldplacementActions;
    return function() {
        // your code
        var result = cached_function.apply(this, arguments); // use .apply() to call it


setTimeout(function(){ 
 var href = $('a:contains(Download Roll-up)').attr('href').replace(/[^0-9\\.]+/g, '');


const li = $('li');
       
for (let i = 0; i < li.length; i++) {
  if(li[i].innerText === 'Force Completion')
  {
      $("ul.popover-menu", $popover).prepend("<li role='none'><a role='menuitem' tabindex='-1' style='position:relative;z-index:2004; background: #151c55' href=\"javascript:ViewPlacement('" + href +"')"+ ';AssessWorkshop()">' + "Assess (Workshop)" + "<\/a><\/li>");
      $("ul.popover-menu", $popover).prepend("<li role='none'><a role='menuitem' tabindex='-1' style='position:relative;z-index:2004; background: #8A704C' href=\"javascript:ViewPlacement('" + href +"')"+ ';Assess1CU()">' + "Assess (1 CU)" + "<\/a><\/li>");
};};
 
}, 500);


return result;
    };
})();






