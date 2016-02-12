# Secrets, a javascript library (and app) for encoding and decoding text

## What is it

Secrets is a js library for sending secret messages using a simplistic stream cipher (like a digital [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine)).

## How to use it

### App

I made an app which is hosted  [here](//jsejcksn.github.io/secrets) where you can just enter a key (password) along with your message to produce the encoded message which you can send to someone. Or if you have received an encoded message from someone, you can enter the key and text they sent you to produce the original secret message.

*Important note: both sender and receiver must be using Unicode character encoding (utf-8 for example) or the message will not be correctly transmitted. I have noticed a problem when sending between iOS and Android devices using Google Hangouts.*

### JS library

By utilizing `secrets.js`, you can use the following methods to produce encrypted text or to decrypt encrypted text:

  - `secrets.encode(key, text)`  
  Where `key` is the key/password you have chosen to use and `text` is the original message you want to encrypt.

  - `secrets.decode(key, cipher)`  
  Where `key` is the key/password you received from the sender and `cipher` is the encrypted message you received from the sender.
