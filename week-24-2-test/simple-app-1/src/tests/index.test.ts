import {describe, expect, test,it} from '@jest/globals';
import {sum,mutliply} from '../index';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    const finalSum = sum(1, 2);
    expect(finalSum).toBe(3);
  });
  it('adds 4 + 5 to equal 3', () => {
    expect(sum(4, 5)).toBe(9);
  });
});

describe('mutliply module', () => {
  it('multiply 1 and 2 to equal 2', () => {
    const multiply = mutliply(1, 2);
    expect(multiply).toBe(2);
  });
  
});

