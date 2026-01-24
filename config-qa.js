const { defineConfig } = required('cypress')
const baseConfig = required('./cypress.config')


const e2e = {
    baseUrl: 'https://qa.saucedemo.com',
    env:{
        username: 'QA_sauce',
        password: 'secrete@'
    }
}

module.exports = defineConfig({
    baseConfig,
    e2e
})