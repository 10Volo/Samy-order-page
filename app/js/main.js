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
		controller2, scene2,
		controller3, scene3,
		controller4, scene4,
		controller5, scene5;

	var scene1 = new ScrollMagic.Scene({triggerElement: "#step1"})
		.addTo(controller1);

	checkBlock();
	runScene(1);

	// SCROLL
	function checkBlock() {
		$('.questions .question.is-block').each(function () {
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
				// .addIndicators()
				.addTo(controller)
		});
	}

	$(".on-enter").on( "click", function(event) {
		event.preventDefault();

		var strId = $(event.target).closest('.question').attr('id'),
			lastNum = parseInt(strId.length === 9 ? strId.substr(strId.length - 1) : strId.substr(strId.length - 2)),
			nextNum = parseInt(lastNum) + 1;

		var findElementNext = $('.questions').find('#question' + nextNum);

		if(findElementNext) {
			findElementNext.addClass('is-block');
			new ScrollMagic.Scene({triggerElement: '#' + findElementNext.attr('id'), duration: findElementNext.height()})
				.on("enter", function () {
					// trigger animation by changing inline style.
					TweenMax.to('#' + findElementNext.attr('id'), 1, {className:"+=focus"});
				})
				.on("leave", function () {
					// reset style
					TweenMax.to('#' + findElementNext.attr('id'), 1, {className:"-=focus"});
				})
				// .addIndicators()
				.addTo(controller)
		}

		switch (lastNum) {
			case 1:
			case 2: {
				break;
			}

			case 3:
			case 4:
			case 5: {
				runScene(2);

				break;
			}

			case 6:
			case 7:
			case 8:
			case 9: {
				runScene(3);

				break;
			}

			case 10:
			case 11:
			case 12: {
				runScene(4);

				break;
			}

			case 13: {
				runScene(5);

				break;
			}
		}
	});

	function runController(num) {
		return new ScrollMagic.Controller({container: "#scroll-1", globalSceneOptions: {duration: $('#step' + num).height()}});
	}

	function runScene(step) {
		var nav = $('#step-' + step);
		var showBlock = $('.content-right-wrapper').find('#is-step-' + step);

		$('.content-right-wrapper .step').each(function () {
			var curr = $(this);
			curr.removeClass('active');
		});

		$('ul .link-step').each(function () {
			var curr = $(this),
				attrId = curr.attr('id');
			curr.removeClass('active');

			if(attrId.substr(attrId.length - 1) >= step) {
				curr.removeClass('success');
			}
		});

		if(nav) {
			nav.addClass('active');
			nav.addClass('success');
		}

		if(showBlock) {
			showBlock.addClass('active');
		}
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

// SCROLL ON ENTER
document.getElementById("question1").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }
    e.preventDefault(); // sometimes useful

    // Enter is pressed
    if (e.keyCode == 13) { submitFunction(); }
}, false);