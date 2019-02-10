#!/usr/bin/env node
import { EventEmitter } from 'events';
import 'reflect-metadata';
import 'source-map-support/register';
import { fFactory, gFactory } from './decorators';

export default class TestClass extends EventEmitter {
    @fFactory() @gFactory() method() {
    console.log('method runs', this); // eslint-disable-line
  }
}
