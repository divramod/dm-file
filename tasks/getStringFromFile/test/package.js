// package metadata file for Meteor.js
var packageName = 'divramod:angular-formly';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '10.0.0';
var summary = 'formly';
var gitLink = 'https://github.com/divramod/angular-formly';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.1.0.3'); // Meteor versions

    api.use('angular:angular@1.4.4', where); // Dependencies
    api.use('divramod:api-check@10.0.0', where); // Dependencies

    api.addFiles('dist/formly.min.js', where); // Files in use
});

