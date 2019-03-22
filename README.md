# mosquitto-passwd

Create `mosquitto_passwd` entries using only Node.JS.

## Usage

```javascript
const passwd = require('mosquitto-passwd')

// Username, password, salt (optional, by default will generate 12 bytes salt)
passwd('123', '123', Buffer.from('fcQNw5IJfhWEEEM4', 'base64')).then(entry => {
    console.log(entry) // 123:$6$fcQNw5IJfhWEEEM4$0rxaqu90qMJ0FLRlxCWPZiDFfemkc2UOpCHjUEKZ32C6AcKe9x5QKEFPuZwrW9jqoOmdOfP/3FKvbY48AFpSlA==
})

// Or use with await
console.log(await passwd(
    '123', 
    '123', 
    Buffer.from('fcQNw5IJfhWEEEM4', 'base64')
)) // 123:$6$fcQNw5IJfhWEEEM4$0rxaqu90qMJ0FLRlxCWPZiDFfemkc2UOpCHjUEKZ32C6AcKe9x5QKEFPuZwrW9jqoOmdOfP/3FKvbY48AFpSlA==
```