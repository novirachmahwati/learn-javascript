import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Sum', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it('should return 0 if string passed on A parameter', () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it('should return 0 if string passed on B parameter', () => {
    // Arrange
    const operandA = 10;
    const operandB = '8';

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it('should return 0 if A and B parameter < 0', () => {
    // Arrange
    const operandA = -1;
    const operandB = -1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });
});