import TestClass from '../dist/src/TestClass';

test('should be true', () => {
  const c: TestClass = new TestClass();

  c.method();

  expect(2 + 2).toBe(4);
});
