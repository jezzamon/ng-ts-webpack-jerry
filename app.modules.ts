console.log('hello')
import {module} from 'angular';
import {appCore} from './app.core.module';
import {appBlocks} from './blocks/logDecorator.config';
import {appBlogposts} from './blogposts/blogposts.routes';
import {SiteSettingsCtrl} from './sitesettings/sitesettings.controller';
import {UserService} from './service/user.service';
import {siteSettingsService} from './sitesettings/sitesettings.service';


export let app = module('app', [
    'app.core',
    'app.layout',
    'app.services',
    'app.widgets',
    'app.blocks',
    /*
    * Features Areas
    */
    'app.blogposts',
    'app.dashboard',
    'app.sitesettings',
    'app.users',
    'app.usersettings'
    
]).controller('mainCtrl', function() {
    console.log('hello');
})
