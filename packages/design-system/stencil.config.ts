import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
// import builtins from 'rollup-plugin-node-builtins'; // TODO: CHECK

export const config: Config = {
  buildDist: true,
  namespace: 'design-system',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [nodePolyfills()],
};
