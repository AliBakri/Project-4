// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uluru = { lat: 51.507351, lng: -0.127758 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}

//sticky menu background
window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		document.querySelector('#main-nav').style.opacity = 0.9;
	} else {
		document.querySelector('#main-nav').style.opacity = 1;
	}
});

// Smooth scrolling
$(document).ready(function () {
	// Add smooth scrolling to all links
	$('#main-nav a').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			const hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - 100,
				},
				800
			);
		} // End if
	});
});
