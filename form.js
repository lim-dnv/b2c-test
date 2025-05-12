function disableCreateBtn() {
	let buttonSend = document.getElementById('continue');
	buttonSend.disabled = true;

	let inputs = document.querySelectorAll('input');
	let inputValidator = {
		'email': false,
		'newPassword': false,
		'reenterPassword': false,
		'givenName': false,
		'surname': false,
		'extension_UserConsent_true': false,
	};

	inputs.forEach((input) => {
		input.addEventListener('input', () => {
			let name = event.target.getAttribute('id');
			if (input.type === 'text' || input.type === 'password' || input.type === 'email') {
				if (event.target.value.length > 0) {
					inputValidator[name] = true;
				} else {
					inputValidator[name] = false;
				}
			} else if (input.type === 'checkbox') {
				if (event.target.checked) {
					inputValidator[name] = true;
				} else {
					inputValidator[name] = false;
				}
			}

			let allTrue = Object.keys(inputValidator).every((item) => {
				return inputValidator[item] === true;
			});

			if (allTrue) {
				buttonSend.disabled = false;
			} else {
				buttonSend.disabled = true;
			}
		});
	});
}

function addSpanAfterTextBox() {
	let divs = document.getElementsByClassName('attrEntry');
	[...divs].forEach((div) => {
		const tbox = div.querySelectorAll('input')[0];
		if (tbox.type === 'text' || tbox.type === 'password' || tbox.type === 'email') {
			var spanLeft = document.createElement('span');
			spanLeft.innerHTML = '*';
			spanLeft.className = 'asterisk';
			div.after(spanLeft);
		}
	});
}

addSpanAfterTextBox();
disableCreateBtn();
alert('test!');
