'use strict'


//Form
const $form = document.forms['registration'];
const $firstName = document.querySelector('#first-name');
const $lastName = document.querySelector('#last-name');
const $email = document.querySelector('#email');
const $message = document.querySelector('#message');
const $send = document.querySelector('#send');
const error = document.querySelector('#fdbck');

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
$send.addEventListener('click', function() {
    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
	let email = $email.value.trim();
	let message = $message.value.trim();
	let issueCount = 0;

	let issues = 'Please ensure all boxes are filled out correctly:\n';
	let valid = true;

	if (firstName === '') {
		issues += 'Your first name is required\n';
		valid = false;
		issueCount++;
		$firstName.classList.add('invalid');
	} else {
		if ($firstName.classList.contains('invalid'))
			$firstName.classList.remove('invalid');
    }
    
    if (lastName === '') {
		issues += 'Your last name is required\n';
		valid = false;
		issueCount++;
		$lastName.classList.add('invalid');
	} else {
		if ($lastName.classList.contains('invalid'))
			$lastName.classList.remove('invalid');
	}


	if (email === '') {
		issues += 'Email field is empty\n';
		valid = false;
		issueCount++;
		$email.classList.add('invalid');
	} else {
		if (!emailRegex.test(email)) {
			issues += 'Email is invalid\n';
			valid = false;
			issueCount++;
			$email.classList.add('invalid');
		} else {
			if ($email.classList.contains('invalid'))
				$email.classList.remove('invalid');
		}
	}

	if (message === '') {
		issues += 'A message is required\n';
		valid = false;
		issueCount++;
		$message.classList.add('invalid');
	} else {
		if ($message.classList.contains('invalid'))
			$message.classList.remove('invalid');
    }
	
	
	if (!valid && issueCount > 3) {
		error.classList.remove('hidden');
		error.innerText = 'Please fill out all the fields.'
	} else if (!valid && issueCount <= 3) {
		error.classList.remove('hidden');
		error.innerText = issues;
	} else {
        $firstName.value = '';
        $lastName.value = '';
		$email.value = '';
		$message.value = '';
		error.classList.add('hidden');
	}
});

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