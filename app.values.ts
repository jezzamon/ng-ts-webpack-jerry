import {app}  from './app.modules';
import {ICurrentUser} from './ICurrentUser';

var currentUser: ICurrentUser = {
  userId: ''
};

app.value('currentUser', currentUser);