'use strict';

//Note: This script will be for both the map and the form validation



//Map
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFuc2FndWlsYXI0NDUiLCJhIjoiY2wxd2gxYWV0MTEwNjNkcWY4MmQ4bHRnOSJ9.S4uWOutectkOlHsdeFEGSg';

function showLocation() {
	//Coordinates of SmartPark (where our 'office' would be) according to Google Maps
	const latitude = 49.80187199224604;
	const longitude = -97.14790981169497;
	
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/streets-v11', // style URL
		center: [longitude, latitude], // starting position [lng, lat]
		zoom: 17, // starting zoom
		interactive: false,
		antialias: true
	});
}

window.onload = () => {
	showLocation();
}