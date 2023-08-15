---
title: '문제 해결 접근법'
date: 2022-03-01 17:48
category: 'algorithm'
draft: false
---

## 문제 해결 접근법

---
### Intro
- 문제를 풀기 위한 기본 접근 방식, 작업을 쉽게 수행할 수 있게 해주는 단계.

- #### 알고리즘이란?
    - 특정 작업을 달성하기 위한 과정이나 일련의 단계를 의미.

---

### 1단계 - 문제 이해
1. 문제를 나만의 방식대로 바꿔서 다시 생각할 수 있는가?
2. 문제에 해당하는 입력값이 무엇인가?
3. 어떤 출력값이 어떤 형태로 나와야 하는가?
4. 입력값이 출력값을 결정할 수 있는지, 문제를 해결하기에 충분한 정보를 가지고 있는지.
5. 문제의 일부인 데이터의 중요한 부분에 어떻게 라벨을 지정할 수 있는가?


```js
/*
 * 두 숫자를 더하여 합계를 반환하는 함수
 */

// 1. 문제를 나만의 방식대로 바꿔서 다시 생각할 수 있는가?
    "implement addition"
// 2. 문제에 해당하는 입력값이 무엇인가?
    - ints?
    - floats?
    - what about string for large numbers?
// 3. 어떤 입력값이 어떤 형태로 나와야 하는가?
    - int? float? string?
// 4. 어떤 출력값이 어떤 형태로 나와야 하는가?
    - 상황에 따라 다름.
// 5. 문제의 일부인 데이터의 중요한 부분에 어떻게 라벨을 지정할 수 있는가?
    - 단계별로 구체적인 예시를 들어본다.
```

---

### 2단계 - 구체적 예시
- 문제 이해에 큰 도움이 된다.
- 예시를 통해 온전성 검사를 하여 정상 동작하는지 알 수 있다.
    => 유저 스토리, 유닛 테스트

    1. 간단한 예시로 시작한다.
    2. 복잡한 예시로 진척을 더한다.
    3. 빈 입력값의 예시
    4. 유효하지 않은 입력값의 예시

ex1) 문자열을 취하고 각 문자의 수를 반환하는 함수를 작성하라.
```js
// 1. 간단한 예시
charCount("aaaa");  // {a:4}    // {b:0,c:0} 도 포함해야하지는 않는지 체크
charCOunt("hello"); // {h:1, e:1,l:2,,o:1}

// 2. 복잡한 예시
"my phone number is 182763"
// 공백은 포함해야하지 않는지
// 특수 기호, 숫자 들은 어떡할지

"Hello hi"
// 대소문자는 구분해야 하는지

// 3. 빈 입력값의 예시
charCount("")   // null / false / undefined ...

// 4. 유효하지 않은 입력값의 예시
charCount(4), charCount(null), charCount({a:1}) 
```

### 3단계 - 세부 분석

Q. charCount("Your PIN number is 1234!")
A.
{
    1:1,
    2:1,
    3:1,
    4:1,
    b:1,
    e:1,
    i:2,
    m:1,
    n:2,
    o:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1,
}

```js
function charCount(str) {
    // do something ( 세부 분석 )
    // 소문자, 영숫자 문자인 키를 지닌 객체를 반환
}

// 의사코드 작성
function charCount(str) {
    // 반환할 객체를 만들고,
    // 각 문자열에 루프를 적용하고,
        // 문자가 (숫자/문자 이며), 객체에 있다면, 즉, 키로써 객체에 있다면 1을 더하고,
        // 문자가 (숫자/문자 이며) 객체에 없다면, 추가하고 값을 1로 설정.
        // 문자가 공백 마침표 등과 같은 다른 것이라면 아무 것도 하지 않는다.
    // 객체 반환
}
```

---

### 4. 해결 또는 단순화

- 문제를 파악하여 해결되었다면 해결을,
- 해결되지 못했다면 단계를 쪼개어 해결된 부분부터 풀어나간다. ( 내부의 해결되지 못한 문제를 단순화 )

```js
function charCount(str){
    // 반환할 객체를 만들고,
    var result = {};
    // 각 문자열에 루프를 적용하고,
    for (var i =0; i <str.length; i++){
        var char = str[i].toLowerCase() // 소문자로 통일
        // 문자가 (숫자/문자 이며), 객체에 있다면, 즉, 키로써 객체에 있다면 1을 더하고,
        if(result[char] >0){
            result[char]++;
        } 
        // 문자가 (숫자/문자 이며) 객체에 없다면, 추가하고 값을 1로 설정.
        else {
            result[char] = 1;
        };
    }
        // 문자가 공백 마침표 등과 같은 다른 것이라면 아무 것도 하지 않는다.
        // ( 해결이 힘들 것 같은 문제를 제외하고, 해결을 해둔다. => 단순화 )
    // 객체 반환
    return result
}
```

---

### 5. 되돌아 보기와 리팩터
=> 효율성과 가독성을 되새기며, 한줄 한줄 코드를 되돌아 본다.
    - 결과를 확인할 수 있는가?
    - 결과를 다른 방식으로 도출할 수 있는가?
    - 해결한 방법 외에 생각나는 다른 접근 방식이 있는가?
    - 한눈에 보고 이해할 수 있는가?
    - 결과나 방법을 다른 문제에도 적용할 수 있는가?
    - 해결책의 성능을 향상시킬 수 있는가? => 시간 복잡도와 공간 복잡도를 통해서...
    - 다른 사람들은 이 문제를 어떻게 해결하는가?

```js
function charCount(str) {
    var obj ={}
    for (var i =0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) { // 소문자, 숫자인지 체크.
            if (obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

// refactoring
function charCount(str) {
    var obj ={}
    // for of 문을 이용하여 불필요한 i를 지움.
    // for (var i =0; i < str.length; i++) {
    for (var char of str) {
        char = char.toLowerCase();
        // 소문자, 숫자인지 체크.
        if (isAlphaNumeric(char)) {
        // if(/[a-z0-9]/.test(char)) { 
            obj[char] = ++obj[char] || 1;
            // if (obj[char] > 0){
            //     obj[char]++;
            // } else {
            //     obj[char] = 1;
            // };
        }
    }
    return obj;
}

// 성능이나 브라우저 이슈가 있는 정규표현식보다, charCodeAt()등의 다른 방법을 채택해본다.
// 분리된 함수를 사용하여 가독성을 높인다.
function isAlphaNumeric(char) {
    var code = char.charCodeAt();
    if (!(code > 47 && code < 58) &&    // numeric
        !(code > 64 && code < 91) &&    // upper alpah
        !(code > 96 && code < 123)) {   // lower alpha
            return false
        }
        return true
    )
}
```

---

- Summary
```
1. 문제를 이해한다.
2. 구체적인 예시를 살펴본다. => 입,출력값, 형태, 벨리데이션 체크 등등
3. 세분화한다. => 의사코드 작성 등
4. 해결 단계 => 해결할 수 있는 문제부터 해결하면서 소거해간다.
5. 되돌아보기 및 리팩토링
```