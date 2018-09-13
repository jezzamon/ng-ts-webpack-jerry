import {IApiEndpointConfig} from '../blocks/apiendpoint.provider';
import {module} from 'angular';

export interface IBlogPostService {
  checkSlugInUse(slug: any): ng.IPromise<boolean>;
}

class BlogPostService implements IBlogPostService {
  constructor(private $http: ng.IHttpService, 
              private apiEndPoint: IApiEndpointConfig) { }
  
  checkSlugInUse(slug: any): ng.IPromise<boolean> {
    return this.$http
      .get(this.apiEndPoint.baseUrl + '/blogposts/slugisinuse/' + slug)
      .then((response: ng.IHttpPromiseCallbackArg<boolean>): boolean => {
        return <boolean>response.data;
      });
  }
}

factory.$inject = [
  '$http',
  'app.blocks.ApiEndpoint'
];
function factory($http: ng.IHttpService, apiEndpoint: IApiEndpointConfig): IBlogPostService {
  return new BlogPostService($http, apiEndpoint);
}

export let blogPostService = module('app.services')
  .factory('app.services.BlogPostService', factory);

