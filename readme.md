# Secrets: A JavaScript library for encoding and decoding text

Secrets is a JavaScript library for creating secret messages using a simplistic stream cipher (like a digital [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine)).

[Check out the demo](https://jsejcksn.github.io/secrets).


## Installation

You can install it via `npm`:

`$ npm install secrets-js --save`

or if you love saving keystrokes (like I do):

`$ npm i secrets-js -S`


## Usage

You can use the following methods to produce encrypted text or to decrypt encrypted text:

  - `secrets.encode(key, text);`  

  Where `key` is the key/password you have chosen to use and `text` is the original message you want to encrypt.

  - `secrets.decode(key, cipher);`  

  Where `key` is the key/password you received from the sender and `cipher` is the encrypted message you received from the sender.

Just make sure you include the library in your project:

> **Server-side in [Node.js](https://nodejs.org/):**  
> After installing, `require` the module like this:
>
> `var secrets = require('secrets-js');`

<!-- This is only here because Markdown is ridiculous and won't allow a break between quotes even with 100 blank newlines -->
> **Client-side in the browser:**  
> Until there's ubiquitous proper support for [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), you should probably be using something like [Browserify](http://browserify.org/), but if that's just not your cup of tea, I've already namespaced everything for you 😘. Just include the [`secrets.js`](secrets.js) file in the `head` of your HTML like this:
>
> `<script async src="path/to/secrets.js"></script>`


## App

I made a [demo app](https://jsejcksn.github.io/secrets) where you can just enter a key (password) along with your secret message to produce the encoded message which you can send to someone. Or if you have received an encoded message from someone, you can enter the key and text you received to produce the original secret message.

> **Important note**: both the sender and receiver must be using Unicode character encoding (utf-8 for example) or the message will not be correctly transmitted. I have noticed a problem when sending between iOS and Android devices using Google Hangouts.*

## FAQ

  1. **What are those semicolons doing in the examples?**  

  That's how you're supposed to terminate every JavaScript statement. Don't let the lazy people fool you into trusting the interpreter to get it right.
