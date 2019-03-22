const assert = require('assert')
const mosquitto_passwd = require('./')

describe('mosquitto_passwd', () => {
    it('should match output of mosquitto_passwd (123:123)', async () => {
        const res = await mosquitto_passwd('123', '123', Buffer.from('fcQNw5IJfhWEEEM4', 'base64'))

        assert.equal(res, '123:$6$fcQNw5IJfhWEEEM4$0rxaqu90qMJ0FLRlxCWPZiDFfemkc2UOpCHjUEKZ32C6AcKe9x5QKEFPuZwrW9jqoOmdOfP/3FKvbY48AFpSlA==')
    })
    it('should match output of mosquitto_passwd (long username and password)', async () => {
        const res = await mosquitto_passwd('AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12', 'AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12', Buffer.from('2/gNQjlq6sx3Q516', 'base64'))

        assert.equal(res, 'AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12AAAbbbbCCCCddd99a12:$6$2/gNQjlq6sx3Q516$E8F2TbpvTPnT2CG74QTL53zx19QbVQzE4gHrB6Bnl3MH1NzOIQRgaqUZFfAIghleSvj2xZbGlJLlZHi2RMWJtw==')
    })
})