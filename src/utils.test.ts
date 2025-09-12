import double from './utils'

describe('Numbers utils', () => {
  it('should double the number', () => {
    expect(double(1)).toBe(2)
    expect(double(2)).toBe(4)
    expect(double(3)).toBe(6)
  })
})
