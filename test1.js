const assert = require('assert');
Object.freeze(assert);
const solveEquation = require('./src/index');

describe('Solve quadratic equation', () => {
  it('1', () => {
    const solutions = solveEquation('-20 * x^2 - 108797540 * x - 130011773690520');
    assert.deepEqual(solutions, [-3667291, -1772586]);
  });
  
  it('2', () => {
    const solutions = solveEquation('1 * x^2 - 8 * x + 12');
    assert.deepEqual(solutions, [3, -1]);
  });
  
 
});
