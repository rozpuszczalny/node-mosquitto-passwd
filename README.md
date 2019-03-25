[![Build Status](https://travis-ci.org/rozpuszczalny/node-mosquitto-passwd.svg?branch=master)](https://travis-ci.org/rozpuszczalny/node-mosquitto-passwd) [![npm version](https://badge.fury.io/js/mosquitto-passwd.svg)](https://badge.fury.io/js/mosquitto-passwd)

# mosquitto-passwd

Create `mosquitto_passwd` entries using only Node.JS.

## Usage

```javascript
const mosquittoPasswd = require('mosquitto-passwd')

// Username, password, salt (optional, by default will generate 12 bytes salt)
mosquittoPasswd('123', '123', Buffer.from('fcQNw5IJfhWEEEM4', 'base64')).then(entry => {
    console.log(entry) // 123:$6$fcQNw5IJfhWEEEM4$0rxaqu90qMJ0FLRlxCWPZiDFfemkc2UOpCHjUEKZ32C6AcKe9x5QKEFPuZwrW9jqoOmdOfP/3FKvbY48AFpSlA==
})

// Or use with await
console.log(await mosquittoPasswd(
    '123', 
    '123', 
    Buffer.from('fcQNw5IJfhWEEEM4', 'base64')
)) // 123:$6$fcQNw5IJfhWEEEM4$0rxaqu90qMJ0FLRlxCWPZiDFfemkc2UOpCHjUEKZ32C6AcKe9x5QKEFPuZwrW9jqoOmdOfP/3FKvbY48AFpSlA==
```