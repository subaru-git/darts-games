import {
  convertCountScoreToNumberOfCount,
  convertNumberOfCountToMarkCount,
  convertScoreToCount,
  convertScoreToNumber,
} from './Converter'

test('convertScoreToNumber', () => {
  expect(convertScoreToNumber('20')).toBe(20)
  expect(convertScoreToNumber('20D')).toBe(40)
  expect(convertScoreToNumber('20T')).toBe(60)
  expect(convertScoreToNumber('2')).toBe(2)
  expect(convertScoreToNumber('2D')).toBe(4)
  expect(convertScoreToNumber('2T')).toBe(6)
  expect(convertScoreToNumber('4')).toBe(4)
  expect(convertScoreToNumber('4D')).toBe(8)
  expect(convertScoreToNumber('4T')).toBe(12)
  expect(convertScoreToNumber('D-BULL')).toBe(50)
  expect(convertScoreToNumber('S-BULL')).toBe(50)
})

test('convertScoreToCount', () => {
  expect(convertScoreToCount('20')).toBe(1)
  expect(convertScoreToCount('20D')).toBe(2)
  expect(convertScoreToCount('20T')).toBe(3)
  expect(convertScoreToCount('D-BULL')).toBe(2)
  expect(convertScoreToCount('S-BULL')).toBe(1)
})

test('convertCountScoreToNumberOfCount', () => {
  expect(convertCountScoreToNumberOfCount([['20-3', '25-2', '15-0']], 15, 20)).toEqual([
    { number: 20, count: 3, total: 1 },
    { number: 19, count: 0, total: 0 },
    { number: 18, count: 0, total: 0 },
    { number: 17, count: 0, total: 0 },
    { number: 16, count: 0, total: 0 },
    { number: 15, count: 0, total: 1 },
    { number: 25, count: 2, total: 1 },
  ])
})

test('convertNumberOfCountToMarkCount', () => {
  expect(convertNumberOfCountToMarkCount(10)).toEqual([3, 3, 3, 1])
  expect(convertNumberOfCountToMarkCount(5)).toEqual([3, 2])
})
