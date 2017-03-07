var gulp = require('flarum-gulp');
var fs = require('fs');



gulp({
    files: [

       '/marked/*.js',
    ],
    modules: {
        'lanqb': [
            'src/**/*.js',
            '../lib/**/*.js'
        ]
    },
    outputFile: '/Public/s.min.js'
});
