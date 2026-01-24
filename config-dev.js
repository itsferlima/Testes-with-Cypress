const { defineConfig } = required('cypress')
const baseConfig = required('./cypress.config')


const e2e = {
    baseUrl: 'https://dev.saucedemo.com',
    env:{
        username: 'DEV_sauce',
        password: 'secrete@'
    }
}

module.exports = defineConfig({
    baseConfig,
    e2e
})
