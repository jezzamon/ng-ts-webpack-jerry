import {module} from 'angular';
import {apiEndpointConfig} from '../blocks/apiendpoint.config';
import {IApiEndpointConfig} from '../blocks/apiendpoint.provider';


export interface ISiteSettingsService { }

class SiteSettingsService implements ISiteSettingsService {
  constructor(private $http: ng.IHttpService, private apiEndpoint: IApiEndpointConfig) {}
}

factory.$inject = ['$http', 'app.blocks.ApiEndpoint'];
function factory(
  $http: ng.IHttpService,
  apiEndpoint: IApiEndpointConfig): ISiteSettingsService {
  
  return new SiteSettingsService($http, apiEndpoint);
}


export let siteSettingsService = module('app.services')
  .factory('app.services.SiteSettingsService', factory)
