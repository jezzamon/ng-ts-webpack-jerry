import {app}from  './app.modules';

app.config(config);

config.$inject = ['$locationProvider'];
function config($locationProvider: ng.ILocationProvider):void {
  $locationProvider.html5Mode(true);
}