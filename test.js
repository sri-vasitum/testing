import { isValidPhoneNumber ,parsePhoneNumber} from 'libphonenumber-js'
import phoneUtil from 'google-libphonenumber'
const ph = phoneUtil.PhoneNumberUtil.getInstance();
// const ph = require('google-libphonenumber').PhoneNumberUtil.getInstance();
// const { isValidPhoneNumber } = import('libphonenumber-js')

// console.log(isValidPhoneNumber('3345345455','IN'))
let num = '112452 45245' , country = 'IN'
// num = '202-456-1414', country = 'US'
// num = '8 (800) 555-35-35', country = 'RU'
// num = '88005553435', country = 'RU'

const a = parsePhoneNumber(num,country)
console.log(a.isValid(), isValidPhoneNumber(num,country),ph.isValidNumber(ph.parseAndKeepRawInput(num,country)))




// const b = ph.parseAndKeepRawInput(num,country)
// console.log(ph.isValidNumber(b))

// const phoneNumber = parsePhoneNumber(' 8 (800) 555-35-35 ', 'RU')

// if (phoneNumber) {
//   console.log(phoneNumber.country === 'RU')
//   console.log(phoneNumber.number === '+78005553535')
//   console.log(phoneNumber.isValid() === true)
//   // Note: `.getType()` requires `/max` metadata: see below for an explanation.
// //   console.log(phoneNumber.getType() === 'TOLL_FREE')
// }

// import {
//     isPossiblePhoneNumber,
//     isValidPhoneNumber,
//     validatePhoneNumberLength
//   } from 'libphonenumber-js'
  
//   isPossiblePhoneNumber('8 (800) 555-35-35', 'RU')
//   isValidPhoneNumber('8 (800) 555-35-35', 'RU') === true
  
//   validatePhoneNumberLength('8 (800) 555', 'RU') === 'TOO_SHORT'
//   validatePhoneNumberLength('8 (800) 555-35-35', 'RU') === undefined
// import crypto from "crypto"

let newData = {
    email: 'sriram.pant@vasitum.com',
    password:'123456',
    loginProvider: 'VASITUM',
    requestProvider: 'WEB',
  };

newData = {
  email:'kiran.sharma@vasitum.com',
  password:'654321',
  loginProvider:'Vasitum',
  requestProvider:'WEB'
}

newData = {
  email:'kiran.sharma+007@vasitum.com',
  password:'123456',
  loginProvider:'Vasitum',
  requestProvider:'WEB'
}

const decrypted = JSON.stringify(newData)
const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const cc = crypto.createCipher("aes-128-ecb", new Buffer(key));
// const encrypted = Buffer.concat([
//   cc.update(decrypted, "utf8"),
//   cc.final()
// ]).toString("base64");



// import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes.js'
import UTF8 from 'crypto-js/enc-utf8.js'
// let k = new Buffer.from(key) 

// let cipher = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(decrypted))

// let cipher = 
const secret = 'HF2LhHE77OhbDJPmJDYAeKZmc62UzkVm'

const encrypted = AES.encrypt(decrypted,secret).toString();
// const encrypted = AES.encrypt(cipher,k,{ mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.NoPadding}).toString();

console.log("encrypted" ,encrypted)

const bytes  = AES.decrypt(encrypted, secret);
const decryptedData = JSON.parse(bytes.toString(UTF8));
console.log("decrypt",decryptedData);

// const cc1 = crypto.createDecipher('aes-128-ecb', new Buffer(key));
// const decrypted1 = Buffer.concat([
//   cc1.update(encrypted, 'base64'),
//   cc1.final(),
// ]).toString('utf8');
// console.log("decrpted : " ,JSON.parse(decrypted))