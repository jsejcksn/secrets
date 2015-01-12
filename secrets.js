// Encodes and Decodes text

var c;
var k;
var t;

function decode(key, cipher) {
	console.log('-decode event-');
	var cipherInt = parseInt(cipher,10);
	// console.log(cipherInt + ' is typeof ' + typeof cipherInt);
	var text = String.fromCharCode(cipherInt);
	return text;
	}

function encode(key, text) {
	console.log('-encode event-');
	var cipher = text.charCodeAt(0);
	return cipher;
	}

function listenDecode() {
	c = document.getElementById('ciphertext').value;
	document.getElementById('plaintext').value = decode(k,c);
	}

function listenEncode() {
	t = document.getElementById('plaintext').value;
	document.getElementById('ciphertext').value = encode(k,t);
	}

function listenKey() { // Updates key value
	k = document.getElementById('key').value;
	}

function warnKey() { // Informs user to enter key before other data
	var key = document.getElementById('key').value;
	var keyIn = document.getElementById("key");
	if (!key || key == '') { // key does not exist or is empty
		keyIn.className = 'warn';
		setTimeout(function() { keyIn.removeAttribute('class'); }, 500);
		keyIn.placeholder = 'Set key first';
		document.getElementById('key').focus();
		}
		else {
			return false;
			}
	}

document.getElementById('key').addEventListener('input', listenKey); // Listens for key change
document.getElementById('plaintext').addEventListener('input', listenEncode); // Listens for change in plaintext
document.getElementById('plaintext').addEventListener('focus', warnKey); // Listens for attempted input in plaintext to activate warning if key is not entered first
document.getElementById('ciphertext').addEventListener('input', listenDecode); // Listens for change in ciphertext
document.getElementById('ciphertext').addEventListener('focus', warnKey); // Listens for attempted input in ciphertext to activate warning if key is not entered first
