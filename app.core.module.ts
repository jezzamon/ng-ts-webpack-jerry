import {module} from 'angular';

export let appCore = module('app.core', [
  require('angular-route'),
  require('angular-sanitize'),
  require('angular-cookies'),
  require('marked'),
  require('angular-marked'),
  // Angular Modules
  'ngRoute',
  'ngSanitize',
  'ngCookies',
  // 3rd party modules
  'hc.marked'
]);