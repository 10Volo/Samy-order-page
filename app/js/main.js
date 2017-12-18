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
            console.log('adding listener', index);
            return function(){
                rating = idx + 1;
                console.log('Rating is now', rating)
                setRating();
            }
        })(index));
    });

}

function setRating(){
    [].forEach.call(stars, function(star, index){
        if(rating > index){
            star.classList.add('rated');
            console.log('added rated on', index );
        }else{
            star.classList.remove('rated');
            console.log('removed rated on', index );
        }
    });
}