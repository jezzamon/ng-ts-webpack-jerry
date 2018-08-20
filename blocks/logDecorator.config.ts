import { module } from 'angular';

export let appBlocks = module('app.blocks')
  .config(config);

  config.$inject = ['$provide'];

  function config($provide: ng.auto.IProvideService):void {
    $provide.decorator('$log', extendLog);
  }

  extendLog.$inject = ['$delegate'];
  function extendLog($delegate: any):any {
    var debugFunction = $delegate.debug;
    $delegate.debug = (...args: any[]): void => {
    var now = (new Date()).toLocaleTimeString();
    args[0] = `${now} -  ${args[0]}`;

    };
  }
