$( document ).ready(function() {
setTimeout(function(){
	$('.ckNotApplicable')[1].checked = true;
	$('.ckNotApplicable')[2].checked = true;
	$('.ckNotApplicable')[3].checked = true;
	$('.txtScore:first option[value=Exposure]').attr('selected','selected');

 }, 2000);
 
 
var newdiv = document.createElement('div');
newdiv.id="blabal";
newdiv.style.background = "red";
newdiv.style.padding="13px 0";
newdiv.style.width="200px";
newdiv.style.height="auto";
newdiv.style.position="absolute";
newdiv.style.top="230px";
newdiv.style.left="50px";
newdiv.style.zIndex = "9999";
newdiv.style.color = "#fff";
newdiv.style.textAlign = "center";
newdiv.style.cursor = "pointer";
newdiv.innerHTML = "Back to placements";
document.body.appendChild(newdiv);

$("#blabal").click(function(){
location.href = 'https://shib.chalkandwire.com/ep2_smu/FieldPlacementList.aspx?cus=465';
});
   });


