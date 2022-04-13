import coinCounterClosure from "../src/js/coinCounter-Closure";

describe('coinCounterClosure', () => {

  test('should return if NaN', () => {
    let output = coinCounterClosure()("string")()()();
    expect(output).toEqual(undefined);
  });

  test('should return if value is less than 0', () => {
    let output = coinCounterClosure()(-1)()()();
    expect(output).toEqual(undefined);
  });
  
  test('should return 1 quarter if "quarters" is .25', () => {
    let output = coinCounterClosure()(.25)()()();
    expect(output.quarters).toEqual(1);
  });

  test('should return 1 dime if "dimes" is .1', () => {
    let output = coinCounterClosure()()(.1)()();
    expect(output.dimes).toEqual(1);
  });

  test('should return 1 nickel if "nickels" is .05', () => {
    let output = coinCounterClosure()()()(.05)();
    expect(output.nickels).toEqual(1);
  });

  test('should return 1 penny if "pennies" is .01', () => {
    let output = coinCounterClosure()()()()(.01)
    expect(output.pennies).toEqual(1);
  });

  test('should return 1 quarter, 1 dime, 1 nickel, and 1 penny if "quarters" is .41', () => {
    let output = coinCounterClosure()(.41)()()();
    expect(output.quarters).toEqual(1);
    expect(output.dimes).toEqual(1);
    expect(output.nickels).toEqual(1);
    expect(output.pennies).toEqual(1);
  });
});