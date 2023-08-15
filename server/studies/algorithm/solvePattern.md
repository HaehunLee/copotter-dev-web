---
title: '문제 해결 패턴'
date: 2022-03-05 13:34
category: 'algorithm'
draft: false
---

## 문제 해결 패턴

- 일반적으로 자주 사용되는 알고리즘 문제 해결 패턴

---

### 1. 빈도수 세기 패턴

```js
// O(N^2) => 순진한 접근법
function same(arr1, arr2) {
  if (arr1.length !== arr.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    console.log(arr2)
    arr2.splice(coorectIndex, 1)
  }
  return true
}

// Refactored
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // 중첩 루프보다 2개의 별개 루프가 더 효율적이다.
  // 객체 접근의 방식으로 하는 것이 훨씬 성능적으로 좋음.
  // O(N^2) => O(3N) = O(N)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}
```

- Frequency Counter Practice - validANAGRAM

```js
// Examples
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpahnama', 'acanalmanplanpamana') // false

// my solution
function validAnagram(word1, word2) {
  // add whatever parameters you deem necessary - good luck!
  if (word1.length !== word2.length) {
    return false
  }
  let wordCounter1 = {}
  let wordCounter2 = {}
  for (let val of word1) {
    wordCounter1[val] = (wordCounter1[val] || 0) + 1
  }
  for (let val of word2) {
    wordCounter2[val] = (wordCounter2[val] || 0) + 1
  }
  for (let val of word1) {
    if (!wordCounter1[val] || !wordCounter2[val]) {
      return false
    }
    wordCounter2[val] -= 1
  }
  return true
}

// refactored
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

// 두 데이터를 비교하는 경우, 객체화를 통해 루프를 줄여나갈 수 있다.
```

---

### 2. 다중 포인터 패턴

- 중간 지점에서 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것

```js
// example. 정렬된 배열을 취하여 합이 0인 쌍을 반환하는 sumZero 함수 작성
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// 단순한 해결책
// 시간 복잡도 : O(N^2)
// 공간 복잡도 : O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// refactored
// 시간 복잡도 : O(N)
// 공간 복잡도 : O(1)
function sumZero(arr) {
  // 시작과 끝 지점 포인터 변수 저장
  let left = 0
  let right = arr.length - 1
  // 같은 수를 하게될 때를 방지 ex) 0 - 0 = 0
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
```

```js
// example. 정렬된 배열을 취하여 고유한 값의 개수를 반환하는 함수
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// my code
function countUniqueValues(arr) {
  let count = 0
  let object = {}
  for (let value of arr) {
    if (!object[value]) {
      object[value] = true
      count++
    }
  }
  return count
}

// solution
// 두 가지 포인터 사용
// 정렬된 배열일 때
function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  var i = 0
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
```
