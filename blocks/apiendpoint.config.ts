import {appBlocksProvider} from './apiendpoint.provider';
import {IApiEndpointProvider} from './apiendpoint.provider';

export let apiEndpointConfig = appBlocksProvider.config(config);

config.$inject = ['app.blocks.ApiEndpoint'];
function config(apiEndpointProvider: IApiEndpointProvider): void {
  apiEndpointProvider.configure('/api');
}
