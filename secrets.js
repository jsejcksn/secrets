// Encodes and Decodes text

// Variables ----------

var cipherData;
var cipherID = document.getElementById('ciphertext');
var keyData;
var keyID = document.getElementById('key');
var textData;
var textID = document.getElementById('plaintext');


// Functions ----------

function decode(key, cipher) { // Primary decode operation
	console.log('-decode event-');
	var text = 'Still being developed.\n\n' + cipher;
	return text;
	}

function encode(key, text) { // Primary encode operation
	console.log('-encode event-');
	var arrText = text.split('');
	var arrTextNum = uniEncode(arrText);
	var arrCipherNum = arrTextNum.map(function(x) {
		return x + 3
		} );
	var arrCipher = uniDecode(arrCipherNum);
	var cipher = arrCipher.join('');
	return cipher;
	}

function headerTransform() { // "Encrypts" header letters and "decrypts" them
	var h1 = document.body.getElementsByTagName('header')[0].getElementsByTagName('div')[0].getElementsByTagName('h1')[0];
	var arrH1Num = [];
	for (var i = 0; i < 7 ; i++) {
		arrH1Num.push(rand(33, 126));
		}
	var arrH1 = uniDecode(arrH1Num);
	console.log(arrH1.join(''));
	// h1.innerHTML = 'Secrets';
	}

function listenDecode() { // Updates ciphertext variable, invokes decoding function, then sets plaintext to the string returned
	cipherData = cipherID.value;
	textID.value = decode(keyData,cipherData);
	}

function listenEncode() { // Updates plaintext variable, invokes encoding function, then sets ciphertext to the string returned
	textData = textID.value;
	cipherID.value = encode(keyData,textData);
	}

function listenKey() { // Updates key variable
	keyData = keyID.value;
	}

function rand(min, max) { // Staple function
	return Math.floor(Math.random() * (max - min)) + min;
	}

function returnInt(n) { // Staple function
	return parseInt(n,10);
	}

function uniDecode(arr) { // Maps an array of Unicode values to their UTF-8 characters
	return arr.map(function(x) {
		return String.fromCharCode(x)
		} );
	}

function uniEncode(arr) { // Maps an array of UTF-8 characters to their Unicode values
	return arr.map(function(x) {
		return x.charCodeAt(0)
		} );
	}

function warnKey() { // Informs user to enter key before other data
	var key = keyID.value;
	if (!key || key == '') { // key does not exist or is empty
		keyID.className = 'warn';
		setTimeout(function() { keyID.removeAttribute('class'); }, 1000);
		keyID.placeholder = 'Set key first';
		keyID.focus();
		}
		else {
			return false;
			}
	}


// EventListeners ----------

keyID.addEventListener('input', listenKey); // Listens for key change
textID.addEventListener('input', listenEncode); // Listens for change in plaintext
textID.addEventListener('focus', warnKey); // Listens for attempted input in plaintext to activate warning if key is not entered first
cipherID.addEventListener('input', listenDecode); // Listens for change in ciphertext
cipherID.addEventListener('focus', warnKey); // Listens for attempted input in ciphertext to activate warning if key is not entered first


// Execute ----------

//
