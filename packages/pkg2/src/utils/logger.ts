import debug from 'debug';

export const getLogger: (name: string) => Function = (name: string) => {
  return debug(name);
};
