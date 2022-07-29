import { CustomPipe } from './custom.pipes';

describe('CustomPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipe();
    expect(pipe).toBeTruthy();
  });
});