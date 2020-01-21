import * as p1 from "@ryancavanaugh/pkg1";

export function fn(): string {
  return `I'm PKG2 and I've consumed PKG1's fn(): ${p1.fn()}`;
}

// export * from './feathers';
export * from "./utils";
