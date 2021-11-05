$( document ).ready(function() {
setTimeout(function(){
	$('.ckNotApplicable')[1].checked = true;
	$('.ckNotApplicable')[2].checked = true;
	$('.ckNotApplicable')[3].checked = true;
	$('.txtScore:first option[value=Exposure]').attr('selected','selected');

 }, 1000);
 

   });
