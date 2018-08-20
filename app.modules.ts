console.log('hello')
import {module} from 'angular';
import {appCore} from './app.core.module';
import {appBlogposts} from './blogposts/blogposts.routes'

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
    
})
