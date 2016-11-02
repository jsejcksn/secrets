(function() {
  'use strict';

  // Variables ----------

  var cipherData;
  var cipherID = document.getElementById('ciphertext');
  var keyData;
  var keyID = document.getElementById('key');
  var textData;
  var textID = document.getElementById('plaintext');


  // Functions ----------

  function headerTransform() { // "Encrypts" header letters and "decrypts" them
    var h1 = document.body.getElementsByTagName('header')[0].getElementsByTagName('div')[0].getElementsByTagName('h1')[0];
    var arrH1Num = [];
    for (var i = 0; i < 7; i++) {
      arrH1Num.push(rand(33, 126));
    }
    var arrH1 = secrets.uniDecode(arrH1Num);
    h1.innerHTML = arrH1.join('');

    // This **has** to be cleaned up (and randomized)
    var count = 0;

    function pos0() {
      setTimeout(function() {
        for (var i = 0; i < 7; i++) {
          arrH1Num[i] = rand(33, 126);
        }
        arrH1 = secrets.uniDecode(arrH1Num);
        h1.innerHTML = arrH1.join('');
        count++;
        if (count < 13) {
          pos0();
        }
      }, 75);
    }

    function pos1() {
      setTimeout(function() {
        for (var i = 1; i < 7; i++) {
          arrH1Num[i] = rand(33, 126);
        }
        arrH1 = secrets.uniDecode(arrH1Num);
        arrH1[0] = 'S';
        h1.innerHTML = arrH1.join('');
        count++;
        if (count < 16) {
          pos1();
        }
      }, 75);
    }

    function pos2() {
      setTimeout(function() {
        for (var i = 2; i < 7; i++) {
          arrH1Num[i] = rand(33, 126);
        }
        arrH1 = secrets.uniDecode(arrH1Num);
        arrH1[0] = 'S';
        arrH1[1] = 'e';
        h1.innerHTML = arrH1.join('');
        count++;
        if (count < 19) {
          pos2();
        }
      }, 75);
    }

    function pos3() {
      setTimeout(function() {
        for (var i = 3; i < 7; i++) {
          arrH1Num[i] = rand(33, 126);
        }
        arrH1 = secrets.uniDecode(arrH1Num);
        arrH1[0] = 'S';
        arrH1[1] = 'e';
        arrH1[2] = 'c';
        h1.innerHTML = arrH1.join('');
        count++;
        if (count < 22) {
          pos3();
        }
      }, 75);
    }

    function pos4() {
      setTimeout(function() {
        for (var i = 4; i < 7; i++) {
          arrH1Num[i] = rand(33, 126);
        }
        arrH1 = secrets.uniDecode(arrH1Num);
        arrH1[0] = 'S';
        arrH1[1] = 'e';
        arrH1[2] = 'c';
        arrH1[3] = 'r';
        h1.innerHTML = arrH1.join('');
        count++;
        if (count < 25) {
          pos4();
        }
      }, 75);
    }

    function pos5() {
      setTimeout(function() {
        for (var i = 5; i < 7; i++) {
          arrH1Num[i] = rand(33, 126);
        }
        arrH1 = secrets.uniDecode(arrH1Num);
        arrH1[0] = 'S';
        arrH1[1] = 'e';
        arrH1[2] = 'c';
        arrH1[3] = 'r';
        arrH1[4] = 'e';
        h1.innerHTML = arrH1.join('');
        count++;
        if (count < 28) {
          pos5();
        }
      }, 75);
    }

    function pos6() {
      setTimeout(function() {
        for (var i = 6; i < 7; i++) {
          arrH1Num[i] = rand(33, 126);
        }
        arrH1 = secrets.uniDecode(arrH1Num);
        arrH1[0] = 'S';
        arrH1[1] = 'e';
        arrH1[2] = 'c';
        arrH1[3] = 'r';
        arrH1[4] = 'e';
        arrH1[5] = 't';
        h1.innerHTML = arrH1.join('');
        count++;
        if (count < 31) {
          pos6();
        }
      }, 75);
    }

    function pos7() {
      setTimeout(function() {
        h1.innerHTML = 'Secrets';
      }, 75);
    }

    function changeLetters() {
      pos0();
      setTimeout(pos1, 975);
      setTimeout(pos2, 975 + 225);
      setTimeout(pos3, 975 + (225 * 2));
      setTimeout(pos4, 975 + (225 * 3));
      setTimeout(pos5, 975 + (225 * 4));
      setTimeout(pos6, 975 + (225 * 5));
      setTimeout(pos7, 980 + (225 * 6));
    }

    changeLetters();
  }

  function listenDecode() { // Updates ciphertext variable, invokes decoding function, then sets plaintext to the string returned
    cipherData = cipherID.value;
    textID.value = secrets.decode(keyData, cipherData);
  }

  function listenEncode() { // Updates plaintext variable, invokes encoding function, then sets ciphertext to the string returned
    textData = textID.value;
    cipherID.value = secrets.encode(keyData, textData);
  }

  function listenKey() { // Updates key variable
    keyData = keyID.value;
  }

  function rand(min, max) { // Staple function
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function warnKey() { // Informs user to enter key before other data
    var key = keyID.value;
    if (key === '') { // key is empty
      keyID.className = 'animate';
      setTimeout(function() {
        keyID.removeAttribute('class');
      }, 1000);
      keyID.placeholder = 'Set key first';
      keyID.focus();
    } else {
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

  headerTransform();

}());
