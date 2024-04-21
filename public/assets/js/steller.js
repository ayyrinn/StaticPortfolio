/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

$(document).ready(function() {
    $('.navbar').addClass('transparent');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').removeClass('transparent');
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
            $('.navbar').addClass('transparent');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".slide-right");

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                var paragraph = entry.target.nextElementSibling;
                if (paragraph && paragraph.tagName === "P") {
                    paragraph.classList.add("animated");
                }
            } else {
                entry.target.classList.remove("animated");
                var paragraph = entry.target.nextElementSibling;
                if (paragraph && paragraph.tagName === "P") {
                    paragraph.classList.remove("animated");
                }
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(function(element) {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".slide-up");

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
            } else {
                entry.target.classList.remove("animated");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(function(element) {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var dynamicText = document.getElementById("dynamicText");
    var texts = ["Student", "Content Creator", "Video Editor"];
    var currentIndex = 0;

    function changeText() {
        if (currentIndex > 0) {
            dynamicText.classList.add("slide-up");
        }
        dynamicText.style.opacity = 0;
        dynamicText.style.transform = "translateY(20px)";
        setTimeout(function() {
            dynamicText.textContent = texts[currentIndex];
            dynamicText.style.opacity = 1;
            dynamicText.style.transform = "translateY(0)";
            currentIndex = (currentIndex + 1) % texts.length;
        }, 500);
    }

    changeText();
    setInterval(changeText, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    var video1 = document.getElementById('video1');
    var carousel = document.getElementById('carouselExampleIndicators');
    var carouselInstance = new bootstrap.Carousel(carousel);

    video1.addEventListener('play', function() {
        carouselInstance.pause();
    });

    video1.addEventListener('pause', function() {
        carouselInstance.cycle(); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    (function (document) {
        const markers = [...document.querySelectorAll('mark1')];
        
        const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
            }
        });
        }, {
        threshold: 0.8
        });
        
        markers.forEach(mark1 => {
        observer.observe(mark1);
        });
    })(document);
});
