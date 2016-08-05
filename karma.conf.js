// Karma configuration
// Generated on Thu Aug 04 2016 13:27:53 GMT+0300 (GTB Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'public/assets/libs/angular/angular.js',
      'public/assets/libs/angular-material/angular-material.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'public/assets/libs/angular-route/angular-route.js',
      'js/app/**/*.js',
      'js/**/*.html'
    ],

    plugins: [
        'karma-jasmine',
        'karma-spec-reporter',
        'karma-coverage',
        'karma-chrome-launcher',
        'karma-ng-html2js-preprocessor'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/app/**/*.!(spec).js': 'coverage',
      'js/app/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'cache.tpl'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 'spec' reporter includes karma-spec-reporter for better view of test results
    reporters: ['spec', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1
  })
};
