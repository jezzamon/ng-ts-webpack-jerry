interface ISiteSettingsScope {
  title: string;
  description: string;
  themeNames: string[];
  themeName: string;
  save(): void;
}

import {module} from 'angular';
class SiteSettingsController implements ISiteSettingsScope {
  title: string;
  description: string;
  themeNames: string[];
  themeName: string;

  constructor() {}
  
  save(): void {}
}

export let SiteSettingsCtrl = module('app.sitesettings')
  .controller('app.sitesettings.SiteSettingsController', SiteSettingsController);
