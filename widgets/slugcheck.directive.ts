import {IBlogPostService} from '../blogposts/blogpost.service'
import {module} from 'angular';

interface ISlugCheckController { 
  checkSlugInUse(slug: any): ng.IPromise<boolean>
}

class SlugCheckController implements ISlugCheckController {
  static $inect = ['app.services.BlogPostService'];
  constructor(private blogPostService: IBlogPostService) {
  }

  checkSlugInUse(slug: string): ng.IPromise<boolean> {
    return this.blogPostService.checkSlugInUse(slug);
  }
}
interface IAttributes extends ng.IAttributes {
  blSlugCheck: string;
  minLengthToCheck: number;

}
class SlugCheckDirective implements ng.IDirective {
  static instance(): ng.IDirective { 
    return new SlugCheckDirective;
  }
  restrict = 'A';
  controller = SlugCheckController;

  link(scope: ng.IScope, element: ng.IAugmentedJQuery, 
    attributes: ng.IAttributes, controller:ISlugCheckController): void { 

      element.on('blur', (): void => {
        controller.checkSlugInUse(element.val())
        .then((inUse: boolean): void => {
          console.log(inUse);
        })
      })
    }
}
module('app.widgets')
  .directive('blSlugCheck', SlugCheckDirective.instance);

slugCheck.$inject = ['app.services.BlogPostService'];
function slugCheck(blogPostService: IBlogPostService): ng.IDirective {
  var directive = <ng.IDirective> {
    restrict: 'A',
    link: link,
    controller: SlugCheckController
  };

  function link(scope: ng.IScope, element: ng.IAugmentedJQuery):void {
    element.on('blur', ():void => {
      blogPostService.checkSlugInUse(element.val())
        .then((inUse: boolean): void => {
          console.log(inUse);
        }) 
    })
  }
  
  return directive;


}
