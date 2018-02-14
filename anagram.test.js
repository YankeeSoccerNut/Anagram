// This is the test file that jest will use to test the isAnagram function

const isAnagram = require('./anagram');


test('Anagram 1', () => {
  expect(isAnagram("go go go", "gggooo")).toBe(true);
});

test('Anagram 2', () => {
  expect(isAnagram('abc', 'cba')).toBe(true);
});

test('Anagram 3', () => {
  expect(isAnagram('hi man', 'hi     man')).toBe(true);
});

test('Anagram 4', () => {
  expect(isAnagram('123', '1 2')).toBe(false);
}); 

test('Anagram 5', () => {
  expect(isAnagram('aabbcc', 'aabbc')).toBe(false);
});