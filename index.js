'use strict';

exports.decode = decode;
exports.encode = encode;

function decode(key, cipher) { // Primary decode operation
  var arrKey = key.split('');
  var arrCipher = cipher.split('');
  var arrKeyNum = uniEncode(arrKey);
  var arrCipherNum = uniEncode(arrCipher);
  var arrKeystream = [];
  for (var i = 0; i < arrCipherNum.length; i++) {
    var mult = returnInt(i / arrKeyNum.length);
    var pos = i % arrKeyNum.length;
    arrKeystream.push(arrKeyNum[pos] + mult);
  }
  var arrTextNum = [];
  for (var j = 0; j < arrCipherNum.length; j++) {
    arrTextNum.push((arrCipherNum[j] + 65536 - arrKeystream[j]) % 65536);
  }
  var arrText = uniDecode(arrTextNum);
  var text = arrText.join('');
  return text;
}

function encode(key, text) { // Primary encode operation
  var arrKey = key.split('');
  var arrText = text.split('');
  var arrKeyNum = uniEncode(arrKey);
  var arrTextNum = uniEncode(arrText);
  var arrKeystream = [];
  for (var i = 0; i < arrTextNum.length; i++) {
    var mult = returnInt(i / arrKeyNum.length);
    var pos = i % arrKeyNum.length;
    arrKeystream.push(arrKeyNum[pos] + mult);
  }
  var arrCipherNum = [];
  for (var j = 0; j < arrTextNum.length; j++) {
    arrCipherNum.push((arrTextNum[j] + arrKeystream[j]) % 65536);
  }
  var arrCipher = uniDecode(arrCipherNum);
  var cipher = arrCipher.join('');
  return cipher;
}

function returnInt(n) { // Staple function
  return parseInt(n, 10);
}

function uniDecode(arr) { // Maps an array of Unicode values to their UTF-8 characters
  return arr.map(function (x) {
    return String.fromCharCode(x);
  });
}

function uniEncode(arr) { // Maps an array of UTF-8 characters to their Unicode values
  return arr.map(function (x) {
    return x.charCodeAt(0);
  });
}
