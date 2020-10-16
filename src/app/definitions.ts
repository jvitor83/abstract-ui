

export const prefix = 'abs';

// union type equivalent
export const Suite = {
  html: 'html',
  ionic: 'ionic',
  bootstrap: 'bootstrap',
  primeng: 'primeng',
  material: 'material',
  kendoui: 'kendoui',
} as const;
export type Suite = typeof Suite[keyof typeof Suite]; // 'r' | 'w' | 'x'


// export enum Suite {
//   html = 'html',
//   ionic = 'ionic',
//   bootstrap = 'bootstrap',
//   primeng = 'primeng',
//   material = 'material',
//   kendoui = 'kendoui',
// }

export function getDefaultSuite(): Suite {
  return Suite.html;
}
