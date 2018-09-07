import  {module} from 'angular';

export interface IApiEndpointConfig {
  baseUrl: string;
}

export interface IApiEndpointProvider {
  configure(baseUrl: string): void;
}

class ApiEndPointProvider implements ng.IServiceProvider, IApiEndpointProvider {
  config: IApiEndpointConfig;

  configure(baseUrl: string) {
    this.config = {
      baseUrl: baseUrl
    };
  }

  $get(): IApiEndpointConfig {
    return this.config;
  }
}

export let appBlocksProvider = module('app.blocks').provider('app.blocks.ApiEndpoint', ApiEndPointProvider);