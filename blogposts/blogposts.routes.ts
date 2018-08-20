import {module} from 'angular';

export let appBlogposts = module('app.blogposts')
  .config(config);

  config.$inject = ['routeProvider'];

  function config($routeProvider: any): void {
    $routeProvider
      .when('/admin/blogposts/newpost', {
        template: '<div>NewPost</div>',
        controller: (): void => {},
        controllerAs: 'vm'
      })
  }
  