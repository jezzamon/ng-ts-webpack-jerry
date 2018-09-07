interface INavigationScope {
  fullName: string;
}

interface ICurrentUser {
  fullName : string;
  userId: string;
}

import {app} from '../app.modules';
import {IUserService} from '../service/user.service'
import {IUser} from '../service/user.service'

export default class NavigationController implements INavigationScope{
  fullName: string;

  static $inject = [
    'currentUser',
    'app.services.UserService'
  ];
  constructor (
    currentUser: ICurrentUser,
    userService: IUserService
  ) {
    var vm = this;
    vm.fullName = currentUser.fullName;
    userService.getById(currentUser.userId)
      .then((user: IUser): void => {
        vm.fullName = user.firstName + ' ' + user.lastName;
    })
  }
}

app.controller('app.layout.NavigationController', NavigationController)