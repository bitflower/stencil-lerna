// Feathers client
import auth from '@feathersjs/authentication-client';
import feathers, { Application } from '@feathersjs/feathers';

// import setupSocket from './socket-io';

// Init Feathers client
export let feathersClient: Application;

export interface CoConnectServerOptions {
  url?: string;
}

export const connectServer: Function = (
  options?: CoConnectServerOptions
): void => {
  console.log('Connecting to Feathers server');

  // Create Feathers app
  feathersClient = feathers();

  //   // Setup socket
  //   setupSocket(feathersClient, options);

  // Configure authentication
  feathersClient
    // .configure(feathers.hooks())
    .configure(
      auth({
        storage: window.localStorage, // store the token in localStorage and initially sign in with that
        cookie: 'co-jwt', // the name of the cookie to parse the JWT from when cookies are enabled server side
        storageKey: 'co-jwt' // TODO: put into config file
      })
    );
};

export const saySomething: () => string = () => {
  return 'Hello from PKG2!';
};
