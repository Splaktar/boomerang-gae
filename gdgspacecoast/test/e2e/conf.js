exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['AboutTest.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
}