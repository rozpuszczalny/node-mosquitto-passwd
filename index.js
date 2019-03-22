const crypto = require('crypto')

// See mosquitto/src/mosquitto_passwd.c for original implementation
module.exports = (username, password, salt) => {
    return new Promise((res, rej) => {
        if (salt === undefined) {
            salt = crypto.randomBytes(12)
        }
        const hash = crypto.createHash('sha512')

        hash.update(password)
        hash.update(salt)

        res(`${username}:$6$${salt.toString('base64')}$${hash.digest().toString('base64')}`)
    })
}
