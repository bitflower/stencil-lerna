// import { Constants } from '@case-os/commons';
import { Application } from '@feathersjs/feathers';
// import feathersSocketIOClient from '@feathersjs/socketio-client';
import { connect } from 'socket.io-client';

import { CoConnectServerOptions } from './feathers';
import { getLogger } from './utils/logger';

const d = getLogger('socket-io.ts');

const buildUrl: Function = (options?: CoConnectServerOptions): string => {
  // Option 1: Use the app url of myself (e.g. when hosted on a cloud platform)
  let url: string = `${window.location.protocol}//${window.location.hostname}`;

  // Option 2: The server url was set from outside
  if (options && options.url) {
    url = options.url;
  } else {
    url = 'http://localhost:3030';
    d('case-os/feathers/socket-io.ts::Using server URL', url);
  }

  return url;
};

// Set up Feathers client with the socket
export default function setupSocket(
  feathersClient: Application,
  options?: CoConnectServerOptions
): void {
  d('Connecting to socket');

  const socket: any = connect(
    buildUrl(options),
    {
      transports: ['websocket'],
      forceNew: true
    }
  );

  // feathersClient.configure(feathersSocketIOClient(socket));
}
