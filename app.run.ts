

import {app} from './app.modules';
import {ICurrentUser} from './ICurrentUser';

app
  .run(run);

  run.$inject = [
    '$rootScope',
    '$cookies',
    'currentUser'];
    function run($rootScope: ng.IRootScopeService, $cookies: ng.cookies.ICookiesService,
      currentUser: ICurrentUser): void {
      
        $rootScope.$on('$routeChangeError', (): void => {

        }

    );

    currentUser.userId = $cookies.userId;
  }