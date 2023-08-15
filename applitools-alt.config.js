module.exports = {
    testConcurrency: 5,
    apiKey: 'APPLITOOLS_API_KEY',
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 1920, height: 1080, name: 'firefox'},
        {width: 800, height: 600, name: 'safari'},
        {width: 1200, height: 800, name: 'ie11'},
        {width: 800, height: 600, name: 'chrome-one-version-back'},
    ],
    // set batch name to the configuration
    batchName: 'alt batch',
    // set batch id to the configuration
    batchId: 'alt batch id',
    // set parent branch name to the configuration
    parentBranchName: 'alt parent branch',
    // set branch name to the configuration
    branchName: 'alt branch',
    // set baseline branch name to the configuration
    baselineBranchName: 'alt baseline branch',
    showLogs: true
}
