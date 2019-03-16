import { fork } from 'child_process';
import { start, stop } from '../dist/src/app';

jest.mock('child_process', () => {
  return {
    fork: jest.fn(),
  };
});

afterEach(() => {
  // @ts-ignore
  fork.mockReset();
});

test('start should create a child process', () => {
  start();
  expect(fork).toHaveBeenCalledTimes(1);
});

test('start should be called once', () => {
  const killSpy = jest.fn();
  // @ts-ignore
  fork.mockImplementation(() => {
    return { kill: killSpy };
  });
  start();
  stop();
  expect(killSpy).toHaveBeenCalledTimes(1);
});
