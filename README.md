# 🥄 HanSpoon

## 🪄 개요
리액트를 이용한 [spoonacular](https://spoonacular.com/) 클론 프로젝트입니다.<br>
기존 사이트 문제점을 분석하고 개선을 목표로 하는 프로젝트입니다.

<br>

## 📆 기간
2021.01.06 ~ 2022.01.28

<br>

## ⬅️ before
1. 고전적인 UI/UX
2. 반응형시 깨지는 레이아웃
3. 작동하지 않는 기능
4. 모달에서 키보드 트랩이 되지 않음
5. 시멘틱하지 않은 HTML 태그 사용

| 고전적 UI/UX | 키보드 접근 불가 |
|:---:|:---:|
| ![spoonacular 메인페이지](https://user-images.githubusercontent.com/76270892/152292706-b9376cd2-f5be-4f6d-afbe-4fff8562af1b.png) | ![키보드 트랩 안됨](https://user-images.githubusercontent.com/76270892/152292509-84e63307-1f97-44d0-a340-0f1602cdb17e.gif) |

<br>

## ➡️ After
1. 모던한 UI/UX 및 사용자의 니즈를 파악한 설계
2. 모바일부터 태블릿, 데스크탑까지 호환되는 반응형
3. 모든 기능이 작동할 뿐 아니라 사용자에게 흥미를 유발할 기능을 추가
4. 모달에서도 키보드 트랩이 가능하도록 구현
5. 시멘틱한 태그를 사용하여 SEO 점수 향상 및 유지보수시 이해하기 쉬운 설계


| 개선된 UI | Dialog 키보드 트랩 |
|:---:|:---:|
| ![한스푼 메인페이지](https://user-images.githubusercontent.com/76270892/152292806-f2f68695-2697-4f64-8d1f-fd1b709cc6b7.png) | ![키보드 트랩 처리](https://user-images.githubusercontent.com/76270892/152292609-145ae5a3-72d8-4754-9792-b2ff23e09124.gif) |


## 이외에도 노력한 점
- 이미지 최적화(사이즈 변경, img -> background, preload)
- api요청 최소화
- 폰트 최적화
<br>

## 📚 사용한 메인 기술 및 라이브러리
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react(cra)-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=black"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"> <img src="https://img.shields.io/badge/firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"> <img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black">

<br>

## 📝 프로젝트 Wiki
https://github.com/TeamCooks/hanspoon/wiki

<br>

## 🎓 팀 구성

|   [박태준](https://github.com/joker77z) | [서혜연](https://github.com/skojphy) | [이한결](https://github.com/hanana1253) | [이효원](https://github.com/hhhyyo) |
|:---:|:---:|:---:|:---:|
| <img src="https://avatars.githubusercontent.com/joker77z" width="100"> | <img src="https://avatars.githubusercontent.com/skojphy" width="100"> | <img src="https://avatars.githubusercontent.com/hanana1253" width="100"> | <img src="https://avatars.githubusercontent.com/hhhyyo" width="100"> |

<br>

## 🛠 설치 방법
### 요구사항
- Node.js가 설치되어 있어야 합니다.

### 설치
```
$ git clone https://github.com/TeamCooks/hanspoon.git
$ cd PROJECT
$ npm install
```

### 시작
```
$ npm start
```

### 빌드
```
$ npm build
```

### 업데이트
일부 변경사항이 있을 수 있습니다. npm pull과 npm install를 종종해서 업데이트를 받을 수 있습니다.
```
npm pull
npm install
```

## 🌟 데모 사이트
https://hanspoon-31cd9.web.app/
