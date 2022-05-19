/*"use strict"

const $form = document.getElementById('form')
const $firstName = document.getElementById('first-name')
const $lastName = document.getElementById('last-name')
const $age = document.getElementById('age')
const $email = document.getElementById('email')
const $submit = document.getElementById('submit')

const emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/

$submit.addEventListener('click', () => {
    let firstName = $firstName.value.trim(); 
    let age = $age.value.trim();
    let lastName = $lastName.value.trim();
    let email = $email.value.trim();

    let message = '';
    let valid = true;
    let count = 0;

    if (firstName === '') {
        message += "first name is required\n"
        valid = false;
        count++;
    }

    if (firstName === '') {
        message += "last name is required\n"
        valid = false;
        count++;
    }

    if (firstName === '') {
        message += "age is required\n"
        count++;
    } else {
        let ageInt = parseInt(age);

        if (isNaN(age) || (ageInt < 16 || ageInt > 120)) {
            message += "age is not valid\n"
            valid = false;
        }
    }

    if (email === '') {
        message += "last name is required\n"
        count++;
    } else {
        if(!emailPattern.test(email)) {
            valid = false;
        }
    }

    if (count === 4) {
        alert('all fields are required')
    } else if (!valid) {
        alert(message);
    } else {
        $form.submit()
        console.log('form submitted')
    }

    alert(message);
    alert(count);
});
*/
//new 
//new
//new

const $form = document.forms['registration'];
const $firstName = document.querySelector('#first-name');
const $lastName = document.querySelector('#last-name');
const $email = document.querySelector('#email');
const $send = document.querySelector('#send');
const error = document.querySelector('#error');

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
$send.addEventListener('click', function() {
    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
	let email = $email.value.trim();
	let issueCount = 0;

	let issues = 'Please ensure all boxes are filled out corretly:\n';
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
	
	
	if (!valid && issueCount > 3) {
		error.innerText = 'Please fill out all the fields.'
	} else if (!valid && issueCount <= 4) {
		error.innerText = issues;
	} else {
        firstName = '';
        lastName = '';
		email = '';
		error.innerText = 'Success!';
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