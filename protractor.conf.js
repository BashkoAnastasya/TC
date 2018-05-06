// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['spec//*.spec.js'],

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};
