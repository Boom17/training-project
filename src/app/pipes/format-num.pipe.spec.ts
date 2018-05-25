import { FormatNumPipe } from './format-num.pipe';

fdescribe('FormatNumPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatNumPipe();
    expect(pipe).toBeTruthy();
  });

  it('return #00001 if input is 1', () => {
    // arrange
    const input = 1;
    const expected = '#00002';
 
    // action
    const pipe = new FormatNumPipe();
    const result = pipe.transform(input);
 
    // assert
    expect(result).toBe(expected);
  });
 
});
