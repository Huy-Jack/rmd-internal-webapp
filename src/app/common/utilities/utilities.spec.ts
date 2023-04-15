import { change, checkPaymentValid, totalPrice } from './utilities';

describe('Test Ultility Functions', () => {
  it('#change should return the right value', () => {
    expect(change(0, 100)).toBe(100);
    expect(change(98, 100)).toBe(2);
  });
  it('#checkPaymentValid should return the right value', () => {
    expect(checkPaymentValid(-1, 100)).toBe('invalid');
    expect(checkPaymentValid(0, 100)).toBe('valid');
    expect(checkPaymentValid(1, 100)).toBe('valid');
    expect(checkPaymentValid(100, -1)).toBe('invalid');
    expect(checkPaymentValid(100, 99)).toBe('invalid');
    expect(checkPaymentValid(100, 100)).toBe('valid');
    expect(checkPaymentValid(100, 101)).toBe('valid');
  });
  it('#totalPrice should return the right value', () => {
    expect(totalPrice([109, 120])).toBe(229);
    expect(totalPrice([58, 100])).toBe(158);
  });
});
