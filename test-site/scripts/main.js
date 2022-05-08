let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/英短2.jpg') {
		myImage.setAttribute('src', 'images/英短.jpg');
	} else {
		myImage.setAttribute('src', 'images/英短2.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('请输入你的名字。');
	if (!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = '你好， ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = '你好， ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}