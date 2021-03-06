---
date: '2019-07-18'
title: "[프로그래머스] 스킬체크 Level 2 - 도전 1"
description: 
tags: ['알고리즘', '코딩 테스트']
---

### 문제 1: 짝 제거
주어진 문자열에서 짝(연속으로 반복된 두 문자)이 더 이상 없을 때까지 계속 제거해나갔을 때, 남는 문자가 없으면 1을, 있으면 0을 반환하기
 - ex. "baabaa" 
    - "baabaa" > "bbaa" > "aa" > "" (짝 제거)
    - 결과: 1

#### 내가 푼 방법
시간복잡도 O(n^2), 공간복잡도 O(n)
1. 문자열이 빈 문자열일 때까지 반복하여 문자열에서 연속된 짝을 찾고 제거 (루프)
2. 문자열의 각 문자를 확인하여 연속된 짝이 있는지 체크 (루프)
3. 짝의 존재 여부에 따라, 짝을 제거하거나 실패로 결과값 반환 
    - 연속된 짝이 있을 경우, 짝을 제거한 새 문자열로 업데이트하고 다시 1번 루프로 돌아가 짝 찾기와 제거 반복
    - 짝이 없을 경우, 결국 결과값이 빈 문자열이 아닐 것이기 때문에 일찍감치 실패값 0을 리턴
3. 문자열이 빈 문자열이 되면 (1번 루프에서 벗어남) 성공값 1을 리턴

결국 짝을 하나씩만 찾아 제거해나가기 때문에 O(n)이 걸리는데 (1번 루프), 짝을 찾는데 문자열 내에서 일일이 한 문자씩 체크해야 되기 때문에 그 속에서 또 O(n), 그리고 짝을 제거하는 erase 메소드도 O(n)이 걸리기 때문에 n * (n + n)으로 계산하여 결국, O(n^2)의 시간복잡도가 걸린다.

#### 내가 작성한 코드
```cpp
// 짝 제거 함수 코드 짜기
int solution(string s) {
    // 문자열이 존재하는 동안 짝 찾기 & 제거: O(n)
    while (s != "") {
        // 반복되는 짝이 있는지 없는지 확인: O(n)
        int repeat_index = -1;
        for (int i = 0, n = s.length() - 1; i < n; i++) {
            if (s[i] == s[i + 1]) {
                repeat_index = i;
                break;
            }
        }
        // 짝이 문자열이 존재하지 않는다면, 짝 제거 실패 
        if (repeat_index == -1) {
            return 0;
        }
        // 짝 존재하면, 제거하여 문자열 업데이트: O(n)
        else {
            s = s.erase(repeat_index, 2);
        }
    }
    // 짝 제거로 문자열을 모두 제거 성공
    return 1;
}
```

#### 모범 답안과 비교
시간복잡도 O(n), 공간복잡도 O(n)
- __스택__ 을 활용하여 문자열 내에서 반복된 짝을 찾고 짝이 없는 문자를 저장해나감
- 문자열 내의 모든 문자를 차례대로 스택에 push & pop 하여 짝 제거하기
    - 스택의 top 값이 문자값과 같지 않다면 push하고, 
    - 같다면 pop함으로써 짝이 없는 문자들만 스택에 남게끔 한다
- 마지막에 스택이 비었으면 짝 제거 성공으로 1을 반환하고, 비지 않았으면 짝 제거가 실패했으므로 0을 반환
```cpp
    int solution(string s) {
        // 스택을 사용하여 문자열 내에서 반복된 짝 찾기
        stack<char> stack_;
        for (char c : s) {
            // 스택에 문자 push
            if (stack_.empty() || stack_.top() != c) {
                stack_.push(c);
            }
            // 스택에 문자 pop 
            else {
                stack_.pop();
            }
        }
        // 스택이 비었으면, 짝 제거 성공
        if (stack_.empty()) return 1;
        // 비지 않았으면, 짝 제거 실패
        return 0;
    }
```

### 문제 2: 기능 개발
다수의 기능들의 진행현황과 진행속도가 각각 배열로 주어졌을 때, 각 기능들이 배포되는 날짜와 개수 구하기 (기능은 진행이 100인 경우에만 배포가 가능하며, 앞에서부터 순서대로만 배포될 수 있기 때문에 뒤에 기능이 더 빨리 완료된다고 하더라도 앞에 기능이 완료되는 날에 같이 배포된다)
- ex. 진행현황 {93, 30, 55}, 진행속도 {1, 30, 5}
    - 진행되어야 할 양 (100 - 진행현황): {7, 70, 45}
    - 완료될 때까지 걸리는 날짜 (진행할 양 / 진행속도): {7, 3, 9}
    - 배포되는 날짜: 7일 째 - 2개, 9일째 - 1개
    - 결과: {2, 1}

#### 내가 푼 방법
시간복잡도 O(n), 공간복잡도 O(n)
1. 먼저 각 기능이 완료될 때까지 걸리는 날짜를 순서대로 구한다: { (100 - 진행현황) / 진행속도 }을 올림
2. 첫 날짜부터 시작하여, 그보다 더 큰 날짜가 나올 때까지 계속 개수를 카운트하여 출력

#### 내가 작성한 코드
```cpp
// 기능 배포 함수 코드 짜기
vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    // 각 기능마다 며칠 뒤에 배포가 이루어지는지 계산하기
    vector<int> days(progresses.size());
    for (int i = 0, n = days.size(); i < n; i++) {
        int progress_left = (100 - progresses[i]);
        float day_left = (float) progress_left / (float) speeds[i];
        days[i] = (int) ceil(day_left);
    }
    // 배포되는 날짜들과 해당 날짜에 배포될 기능 개수 구하기
    int d_day = days[0];
    int count = 1;
    for (int i = 1, n = days.size(); i <= n; i++) {
        // 정보 입력 그리고 새로운 배포날짜 업데이트
        if (i == n || days[i] > d_day) {
            answer.push_back(count);
            d_day = days[i];
            count = 1;
        }
        // 해당 배포날짜에 기능 개수 카운트 
        else {
            count++;
        }
    }
    return answer;
}
```

#### 모범 답안과 비교
시간복잡도 O(n), 공간복잡도 O(n)
- __큐__ 를 활용하여 더 효율적으로 배포 개수 세기
```cpp
vector<int> solution(vector<int> progresses, vector<int> speeds) {
    // 각 기능마다 배포하는데 걸리는 날짜 구하기
    queue<int> q;
    for (int i = 0, n = progresses.size(); i < n; i++) {
        int progress_left = (100 - progresses[i]);
        float day_left = (float) progress_left / (float) speeds;
        q.push((int) ceil(day_left));
    }
    // 순서대로 배포되는 날짜들과 각 기능 개수 구하기
    vector<int> answer;
    int front_day = q.front();
    int count = 0;
    while (!q.empty()) {
        // 새 날짜로 업데이트
        if (q.front() > front_day) {
            answer.push(count);
            front_day = q.front();
            count = 0;
        }
        count++;
        q.pop();
    }
    answer.push(count);
    return answer;
}
```

### 결과
첫 번째 문제 풀이가 효율성에서 0을 맞아, __불합격__ 했다.

#### 문제 풀이 분석
- __정확성__: 두 문제 모두 정확성은 다 맞았다 (테스트 케이스 모두 통과)
- __효율성__: 첫 번째 문제 __효율성에서 떨어짐__ (그래서 결국 스킬테스트 불합격)

#### 시간 배분
전체적으로 __시간 배분은 적절__ 했던 것 같다
- 첫 번째 문제: 모든 테스트 케이스를 통과하는 코드 30분 안에 작성 (but 코드의 효율성이 떨어져 통과 실패)
- 두 번째 문제: 모든 테스트 케이스를 통과하는 코드 20분 안에 작성
- 나머지 10분 동안 첫 번째 문제 다시 풀려고 노력 (but 다른 솔루션을 생각해내는데 실패)

### What I learned
문제 상황에 따라 __어떤 자료구조가 적합할지__ 에 대한 고려가 부족했다.
- 문자열에서 연속된 문자의 짝을 체크하는 것은 괄호의 짝을 맞추는 것과 같은 모양새를 가지므로, 스택을 사용하는 것이 적절하다.
- __짝 맞추기__(__pair matching__) 가 문제에 있을 경우, 무조건 __스택부터 생각하기!__
- __앞->뒤로 이어지는 순서__ 가 중요하다면, __큐 사용하기!__