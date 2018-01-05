// hide/show menu
function menu_toggle(header) {
	header.classList.toggle('show');
}
// datepiker
$(function () {
	$("#datepicker").datepicker({
		showOn: "button",
		buttonImage: "app/img/content/arrow-down.png",
		buttonImageOnly: true,
		buttonText: "Select date"
	});
});




	
	
