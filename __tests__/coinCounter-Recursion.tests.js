import coinCounter from "../src/js/coinCounter-Recursion";

describe('coinCounter', () => {

  test('should return if money is NaN', () => {
    let output = coinCounter("string")
    expect(output).toEqual(undefined);
  });

  test('should return if money is less than 0', () => {
    let output = coinCounter(-1)
    expect(output).toEqual(undefined);
  });
  
  test('should return 1 quarter', () => {
    let output = coinCounter(.25)
    expect(output.quarters).toEqual(1);
  });

  test('should return 1 dime', () => {
    let output = coinCounter(.1)
    expect(output.dimes).toEqual(1);
  });

  test('should return 1 nickel', () => {
    let output = coinCounter(.05)
    expect(output.nickels).toEqual(1);
  });

  test('should return 1 penny', () => {
    let output = coinCounter(.01)
    expect(output.pennies).toEqual(1);
  });

  test('should return 1 quarter, 1 dime, 1 nickel, and 1 penny', () => {
    let output = coinCounter(.41)
    expect(output.quarters).toEqual(1);
    expect(output.dimes).toEqual(1);
    expect(output.nickels).toEqual(1);
    expect(output.pennies).toEqual(1);
  });
});