// 🧠 Problem 1: Intersection of Two Arrays (Using Sets)
const intersection = (arr1: number[], arr2: number[]): number[] => {
  const set1 = new Set(arr1);

  const result: number[] = [];

  for (const num of arr2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 1, 2]));

// 🧠 Problem 2: Is a String a Permutation of a Palindrome?

const isPalindromePermutation = (s: string): boolean => {
  const map = new Map<string, number>();

  for (const c of s.replace(/\s/g, '').toLowerCase()) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let oddCount = 0;
  for (const count of map.values()) {
    if (count % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
};

console.log(isPalindromePermutation('Tact Coaso'));
