import { isDoubleOut, isMasterOut, isSingleOut } from './OutOption';

test('isDoubleOut, ignore separate setting', () => {
  expect(isDoubleOut(40, 'D20', true)).toBe(true);
  expect(isDoubleOut(39, 'D20', true)).toBe(false);
  expect(isDoubleOut(32, 'D16', true)).toBe(true);
  expect(isDoubleOut(16, '16', true)).toBe(false);
  expect(isDoubleOut(50, 'D-BULL', true)).toBe(true);
  expect(isDoubleOut(40, 'D20', false)).toBe(true);
  expect(isDoubleOut(39, 'D20', false)).toBe(false);
  expect(isDoubleOut(32, 'D16', false)).toBe(true);
  expect(isDoubleOut(16, '16', false)).toBe(false);
  expect(isDoubleOut(50, 'D-BULL', false)).toBe(true);
});

test('isSingleOut', () => {
  expect(isSingleOut(20, '20', false)).toBe(true);
  expect(isSingleOut(19, '20', false)).toBe(false);
  expect(isSingleOut(32, 'D16', false)).toBe(true);
  expect(isSingleOut(48, 'T16', false)).toBe(true);
  expect(isSingleOut(50, 'S-BULL', false)).toBe(true);
  expect(isSingleOut(50, 'S-BULL', true)).toBe(false);
  expect(isSingleOut(25, 'S-BULL', true)).toBe(true);
  expect(isSingleOut(50, 'D-BULL', false)).toBe(true);
});

test('isMasterOut', () => {
  expect(isMasterOut(20, '20', false)).toBe(false);
  expect(isMasterOut(19, '20', false)).toBe(false);
  expect(isMasterOut(40, 'D20', false)).toBe(true);
  expect(isMasterOut(32, 'D16', false)).toBe(true);
  expect(isMasterOut(48, 'T16', false)).toBe(true);
  expect(isMasterOut(50, 'S-BULL', false)).toBe(true);
  expect(isMasterOut(50, 'S-BULL', true)).toBe(false);
  expect(isMasterOut(25, 'S-BULL', true)).toBe(false);
  expect(isMasterOut(50, 'D-BULL', false)).toBe(true);
});
