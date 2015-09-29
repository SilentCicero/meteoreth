#!/usr/bin/env node

// require libs
var fs = require('fs');
var program = require('commander');
var path = require('path');
var _ = require('underscore');
var readJSON = require('read-json');
var shell = require('./shellHelper');
var spinner = require('simple-spinner');

// build paths
var argPath = process.argv[2],
    basePath = './',
    buildPath = basePath + argPath,
    bundleName = path.basename(path.resolve(basePath));

// set version
program.version('0.0.1');

// default geth settings
var defaultGeth = {
};

// The geth command string
var gethString = 'geth ';

// if no params defined
if(process.argv.length == 2) {
    readJSON('./settings.json', function(err, settings){    
        if(err)
            settings = {};
        
        // settings
        defaultGeth = _.extend(defaultGeth, settings.development.geth);
        
        // move through object keys
        _.each(_.keys(defaultGeth), function(item, itemIndex){
            if(defaultGeth[item] !== '' 
               || item == 'shh' 
               || item == 'rpc' 
               || item == 'mine')
                gethString += '--' + String(item) 
                    + ' ' + defaultGeth[item] + ' ';
        });    
        
        console.log(gethString);

        // execute a single shell command
        shell.exec(gethString);
        shell.exec('meteor --settings settings.json');
    });
}

// parse CMD line params
program.parse(process.argv);
