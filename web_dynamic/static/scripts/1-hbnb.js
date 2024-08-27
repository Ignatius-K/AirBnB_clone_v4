/*
 * 1-hbnb.js
 * Written by Ignatius K <ignatiuskisekka@gmail.com>
 *
 * Script that manages the users' interaction
 */

/* eslint-disable no-undef */
$(document).ready(() => {

	let selectedAmenities = [];
	const selectedAmenitiesH4 = $('.amenities h4')
	$('.amenities input[type="checkbox"]').on('change', function() {
		const amenityId = $(this).attr('data-id').slice(1)
		const amenityName = $(this).attr('data-name').slice(1)
		
		const selectedAmenityExists = selectedAmenities.find(({ amenityId: _amenityId }) => _amenityId === amenityId)
		if (selectedAmenityExists) {
			selectedAmenities = selectedAmenities.filter(({ amenityId: _amenityId }) => _amenityId !== amenityId)
		} else {
			selectedAmenities.push({ amenityId, amenityName })
		}

		// display filtered amenities
		let amenitiesToDisplay = ""
		selectedAmenities.reverse().forEach(({ amenityName }) => {
			amenitiesToDisplay += `${amenityName}, `
		})
		selectedAmenitiesH4.html(amenitiesToDisplay)
	})



});
/* eslint-enable no-undef */
