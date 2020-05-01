import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';

// https://stenciljs.com/docs/config

export const config: Config = {
  buildDist: true,
  namespace: 'stencil-lerna',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  plugins: [builtins()],
  nodeResolve: {
    browser: true,
    preferBuiltins: true, // Workaround for https://github.com/ionic-team/stencil/issues/1326
  },
};
