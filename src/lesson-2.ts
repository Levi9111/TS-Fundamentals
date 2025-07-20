// 📚 Lesson 2: Mastering Hash Maps & Sets in TypeScript

const freqMap = new Map<string, number>();

// 1. Word frequency counter

const wordFrequency = (sentence: string): Map<string, number> => {
  const freq = new Map<string, number>();

  const words = sentence.toLowerCase().split(/\s+/);

  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  return freq;
};

console.log(
  wordFrequency(
    'Learning TypeScript improves coding skills and helps manage complex projects efficiently'
  )
);

// 🔥 Challenge 1: Find Non-Repeating Characters
const word = 'aabbcccdedefghhh';

const firstUniqueChar = (str: string): string[] => {
  const map = new Map<string, number>();
  const uniqueArr = [];

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (map.get(char) === 1) uniqueArr.push(char);
  }

  return uniqueArr;
};

console.log(firstUniqueChar(word));

// 🧩 2. Hash Set (Set)

const visited = new Set<number>();

// 📦 Practice Code: Remove Duplicates from Array

const removeDuplicate = (arr: number[]): number[] => {
  const set = new Set(arr);

  return [...set];
};

console.log(removeDuplicate([32, 1, 2, 2, 3, 4, 4, 5]));

// 🔥 Challenge 2: Check for Duplicates in Array

const hasDuplicates = (arr: number[]): boolean => {
  const seen = new Set<number>();

  for (const num of arr) {
    if (seen.has(num)) return true;

    seen.add(num);
  }

  return false;
};

console.log(hasDuplicates([1, 2, 3, 4]));
console.log(hasDuplicates([1, 2, 3, 2]));

// 💡 Map vs Object in TypeScript
const map = new Map<string, number>();
const obj: Record<string, number> = {};

map.set('foo', 1);
obj['foo'] = 1;
