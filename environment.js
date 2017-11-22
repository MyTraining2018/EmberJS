/*jshint node:true*/
'use strict';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'myapp',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      }
    },
    contentSecurityPolicy: {
      'default-src': "*",
      'script-src': "'self'",
      'font-src': "'self'",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    APP: {}
  };

  if (environment === 'development') {
    ENV.APP.API_NAMESPACE = '';
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy['connect-src'] = "http://localhost:8083";
  }

  if (environment === 'test') {
    // [snipped]
  }

  if (environment === 'production') {
    // [snipped]
  }

  return ENV;
};
