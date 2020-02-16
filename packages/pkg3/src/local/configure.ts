import feathers, { Application } from '@feathersjs/feathers';

import { configure as configureServices } from './services';

export let app: Application<any>;

export const configure = () => {
  console.log('Setting up FeathersJS');
  app = feathers();
  console.log('Setting up FeathersJS done', app);

  configureServices(app);
};
