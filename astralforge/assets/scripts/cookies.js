'use strict';

const acceptAll = document.querySelector('#accept-all');
const manage = document.querySelector('#manage');
const initialModal = document.querySelector('#initial-modal');
const options = document.querySelector('#options');
const browser = document.forms['cookie-management']['browser'];
const os = document.forms['cookie-management']['os'];
const width = document.forms['cookie-management']['width'];
const height = document.forms['cookie-management']['height'];
const save = document.forms['cookie-management']['save'];


function getBrowser() {
	return navigator.userAgentData.brands[2].brand;
}

function getOperatingSystem() {
	return navigator.userAgentData.platform;
}

function getCookie(cookieName) {
	let name = cookieName.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	let regex = new RegExp(`(?:^|;)\\s?${name}=(.*?)(?:;|$)`, 'i');
	let value = document.cookie.match(regex);
	return value ? decodeURIComponent(value[1]) : `rejected`;
}

function setCookie(name, value, options = {  }) {
	options = {
		path: '/',
		SameSite: 'Lax',
		...options
	};

	const keys = Object.keys(options);
	const values = Object.values(options);

	if (options?.expires && options?.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

	for (let i = 0; i < keys.length; i++) {
		updatedCookie += `; ${keys[i]}=${values[i]}`;
	}

	document.cookie = updatedCookie;
}

if (navigator.cookieEnabled && !document.cookie) {
	setTimeout(() => {
	initialModal.showModal();
	}, 1000);
} else {
	console.log(`Browser: ${getCookie('Browser')}`);
	console.log(`Operating system: ${getCookie(encodeURIComponent('Operating system'))}`);
	console.log(`Screen width: ${getCookie(encodeURIComponent('Screen width'))}`);
	console.log(`Screen height: ${getCookie(encodeURIComponent('Screen height'))}`);
}

manage.addEventListener('click', function() {
	options.showModal();
	initialModal.close();
});

acceptAll.addEventListener('click', function() {
	setCookie('Browser', getBrowser(), { 'max-age': 15 });
	setCookie('Operating system', getOperatingSystem(), { 'max-age': 15 });
	setCookie('Screen width', screen.width, { 'max-age': 15} );
	setCookie('Screen height', screen.height, { 'max-age': 15} );
	initialModal.close();

	console.log(`Browser: ${getCookie('Browser')}`);
	console.log(`Operating system: ${getCookie(encodeURIComponent('Operating system'))}`);
	console.log(`Screen width: ${getCookie(encodeURIComponent('Screen width'))}`);
	console.log(`Screen height: ${getCookie(encodeURIComponent('Screen height'))}`);
});

save.addEventListener('click', function() {
	let rejectedCookies = 0;
	
	if(browser.checked) {
		setCookie('Browser', getBrowser(), { 'max-age': 15 });
	} else {
		rejectedCookies++;
	}

	if(os.checked) {
		setCookie('Operating system', getOperatingSystem(), { 'max-age': 15 });
	} else {
		rejectedCookies++;
	}

	if(width.checked) {
		setCookie('Screen width', screen.width, { 'max-age': 15} );
	} else {
		rejectedCookies++;
	}

	if(height.checked) {
		setCookie('Screen height', screen.height, { 'max-age': 15} );
	} else {
		rejectedCookies++;
	}

	if(rejectedCookies === 4) {
		setCookie('Rejected', 'true', { 'max-age': 15 });
	}
	
	options.close();

	console.log(`Browser: ${getCookie('Browser')}`);
	console.log(`Operating system: ${getCookie(encodeURIComponent('Operating system'))}`);
	console.log(`Screen width: ${getCookie(encodeURIComponent('Screen width'))}`);
	console.log(`Screen height: ${getCookie(encodeURIComponent('Screen height'))}`);
});

