
assert = chai.assert;

describe('Testing function moreDetail() of script.js', function () {
  var more = moreDetail(0);
  it('Test 1: moreDetail() returns something', function () {
    assert.exists(more, 'the return value is not null or undefined');
  });
  it('Test 2: moreDetail() returns true', () => {
    assert.isTrue(more, 'moreDetail() is true');
  })
  it('Test 3: moreDetail() type is boolean', () => {
    assert.isBoolean(more, 'moreDetail() is a boolean');
  })
})

