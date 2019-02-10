/* eslint-disable no-console */

export function fFactory() {
  console.log('fFactory(): evaluated');
  return function f(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f target: ', target);
    console.log('f propertyKey: ', propertyKey);
    console.log('f descriptor: ', descriptor);
  };
}

export function gFactory() {
  console.log('gFactory(): evaluated');
  return function g(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g target: ', target);
    console.log('g propertyKey: ', propertyKey);
    console.log('g descriptor: ', descriptor);
  };
}
