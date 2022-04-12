const assert = require('assert')
const solution = require('../index.js')

describe('Check max possible value by inserting one "5" digit', function() {
  it('should return 5268 when input is equal to 268', function() {
    const A = 268
    assert.equal(solution(A), 5268)
  })

  it('should return 6750 when input is equal to 670', function() {
    const A = 670
    assert.equal(solution(A), 6750)
  })

  it('should return 50 when input is equal to 0', function() {
    const A = 0
    assert.equal(solution(A), 50)
  })

  it('should return -5999 when input is equal to -999', function() {
    const A = -999
    assert.equal(solution(A), -5999)
  })
})