$(function() {
	// for menu toggle
	function menu_toggle(header) {
		header.classList.toggle('show');
	}

	// for accordion
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		}
	}

// date picker
	$( function() {
		$( "#datepicker" ).datepicker({
			showOn: "button",
			buttonImage: "app/img/content/calendar.png",
			buttonImageOnly: true,
			buttonText: "Select date"
		});
	} );
});
// scroll
$(function () { // wait for document ready
	// init controller
	var controller = new ScrollMagic.Controller({container: "#scroll-1"}),
		controller1 = runController(1),
		controller2 = runController(2),
		controller3 = runController(3),
		controller4 = runController(4),
		controller5 = runController(5);

	// var $questions = $(".questions"),
	// 	$windowScroll = $('#scroll-1');

	// SCROLL
	$('.questions .question').each(function () {
		var curr = $(this);

		new ScrollMagic.Scene({triggerElement: '#' + curr.attr('id'), duration: curr.height()})
			.on("enter", function () {
				// trigger animation by changing inline style.
				TweenMax.to('#' + curr.attr('id'), 1, {className:"+=focus"});
			})
			.on("leave", function () {
				// reset style
				TweenMax.to('#' + curr.attr('id'), 1, {className:"-=focus"});
			})
			.addIndicators()
			.addTo(controller)
	});

	// controller.scrollTo(function (newpos) {
	// 	TweenMax.to($windowScroll, 1, {scrollTo: {y: newpos}});
	// });

	// CLICK + SCROLL
	// $questions.on("click", ".question", function(){
	// 	var $this = $(this),
	// 		topY = $this.offset().top;
	//
	// 	controller.scrollTo(topY);
	//
	// 	return false;
	// });

	// build scenes
	var scene1 = new ScrollMagic.Scene({triggerElement: "#step1"})
		.addTo(controller1);
	var scene2 = new ScrollMagic.Scene({triggerElement: "#step2"})
		.addTo(controller2);
	var scene3 = new ScrollMagic.Scene({triggerElement: "#step3"})
		.addTo(controller3);
	var scene4 = new ScrollMagic.Scene({triggerElement: "#step4"})
		.addTo(controller4);
	var scene5 = new ScrollMagic.Scene({triggerElement: "#step5"})
		.addTo(controller5);

	runScene(scene1, $('#step-1'));
	runScene(scene2, $('#step-2'), $('#is-step-2'));
	runScene(scene3, $('#step-3'), $('#is-step-3'));
	runScene(scene4, $('#step-4'), $('#is-step-4'));
	runScene(scene5, $('#step-5'), $('#is-step-5'));

	function runController(num) {
		return new ScrollMagic.Controller({container: "#scroll-1", globalSceneOptions: {duration: $('#step' + num).height()}});
	}

	function runScene(scene, nav, showBlock) {
		scene.on('enter', function(){
			nav.addClass('active');

			if(showBlock) {
				showBlock.addClass('active');
			}
		});

		scene.on('leave', function(){
			nav.removeClass('active');

			if(showBlock) {
				showBlock.removeClass('active');
			}
		});
	}
});

// star rating

var rating = 3;
var stars = null;

//initial setup
document.addEventListener('DOMContentLoaded', function(){
    stars = document.querySelectorAll('.star');
    addListeners();
    setRating(); //based on global rating variable value
});

function addListeners(){
    [].forEach.call(stars, function(star, index){
        star.addEventListener('click', (function(idx){
            // console.log('adding listener', index);
            return function(){
                rating = idx + 1;
                // console.log('Rating is now', rating)
                setRating();
            }
        })(index));
    });

}

function setRating(){
    [].forEach.call(stars, function(star, index){
        if(rating > index){
            star.classList.add('rated');
            // console.log('added rated on', index );
        }else{
            star.classList.remove('rated');
            // console.log('removed rated on', index );
        }
    });
}
// Show/hide prelouder
function showPreLouderImg() {
    var x = document.getElementById("show-louder");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
