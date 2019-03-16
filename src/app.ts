#!/usr/bin/env node
import { fork, ChildProcess } from 'child_process';

let forked: ChildProcess;

export function start() {
  forked = fork(`${__dirname}/toFork`);
}

export function stop() {
  forked.kill('SIGINT');
}
