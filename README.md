<div align="center">
<img src="https://github.com/user-attachments/assets/4a182a58-3e95-4961-9c77-68823a8dd706" alt="CI_wordmark" width="200" height="auto">
  
  # 교보문고

 『AT SOPT 36기 합동세미나 Mobile Web Team 2』
</div>

## 📖 KYOBOBOOK
교보문고의 주요 기능을 모바일 웹 화면에 최적화된 UI/UX로 재구성하여 사용자 경험을 개선합니다.

## 📌 배포 URL

## 🤙 WEB Developer

| <center>한수정</center>| <center>권새봄</center>| <center>문혜성</center>| <center>한승우</center>|
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <center> <img width="150px" src="https://avatars.githubusercontent.com/u/90364839?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/94830364?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/146885448?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/113088025?v=4" /></center> |
| [@hansoojeongsj](https://github.com/hansoojeongsj) | [@kwonsaebom](https://github.com/kwonsaebom) | [@sndks](https://github.com/sndks) | [@seungwoohan12](https://github.com/seungwoohan12) |


## 🤙 역할 분담

### 초기 세팅
- vite + eslint + prettier 세팅 + tanstack-query 설치 **`새봄`**
- theme + globalStyle 기본 스타일 세팅 **`승우`**
- router + 절대 경로 세팅 **`혜성`**
- 리뷰어 어푸 설정 + pr 템플릿 + 이슈 템플릿 등 협업 전반 세팅 **`수정`**

### 공통 컴포넌트
- 메인 헤더 **`수정`**
- 푸터 **`수정`**
- 좌우 스크롤 **`수정`**
- 버튼 **`혜성`**
- 칩 **`혜성`**
- 카드 **`새봄`**
- 구분선 **`새봄`**
- 플로팅 버튼 **`승우`**
- 하단 네비게이션 **`승우`**

### 페이지
- 홈 뷰 **`혜성`**
- 베스트 도서 목록 뷰 **`수정`**
- 도서 상세 뷰 **`새봄`**
- 장바구니 뷰 **`승우`**

### API
- 홈 뷰 - Top5 도서 목록 - GET **`혜성`**
- 베스트 도서 목록 뷰 - 베스트 도서 리스트 - GET **`수정`**
- 도서 상세 뷰 - 도서 상세 - GET **`승우`**
- 도서 상세 뷰  - 리뷰 정보 - GET **`새봄`**
- 도서 상세 뷰 - 리뷰 통계 - GET **`새봄`**


## 🤙 컨벤션 및 브랜치 전략
자세한 컨벤션 및 브랜치 전략(https://bumpy-soy-5c5.notion.site/1ed40dbe228280eeb0bdd3ed6861f2f9?pvs=4)

### 🎯 커밋 컨벤션

| 커밋 유형  | 의미                                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| `chore`    | 환경 세팅, 초기 세팅, 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore                    |
| `feat`     | 새로운 기능 추가                             |
| `fix`      | 버그 수정                   |
| `docs`     | 문서 추가, 수정, 삭제                                                          |
| `style`    | CSS 등 사용자 UI 디자인 변경, 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| `refactor` | 코드 리팩토링       |
| `deploy`   | 배포 관련 |
| `!hotfix`   | 급하게 치명적인 버그를 고쳐야 하는 경우에 대한 커밋 |


### 📁 폴더 구조

```plaintext
|-- 📁 node_modules
|-- 📁 public
    |-- 📁 svg
|-- 📁 src
    |-- 📁 apis
    |-- 📁 asset
        |-- 📁 svgs
        |-- 📁 images
    |-- 📁 components (공통 컴포넌트)
        |-- 📁 Button (예시 컴포넌트)
            |-- Button.tsx
            |-- Button.style.ts
    |-- 📁 pages
        |-- 📁onboarding
            |-- 📁components
            |-- 📁types
            |-- 📁hooks
            |-- Onboarding.tsx
            |-- Onboarding.style.ts
    |-- 📁 hooks (커스텀 훅을 담아두는 폴더)
    |-- 📁 styles ( global.ts, theme.ts )
    |-- 📁 types
    |-- 📁 utils ( 재사용이 높은 함수모음 폴더 )
        |-- 📁 constants
        |-- 📁 mocks
    |-- 📁 routes
        |-- routePath.ts
        |-- Layout.ts
        |-- pageRoutes.ts
|-- App.tsx
|-- main.tsx
|-- .eslintrc.json
|-- .gitignore
|-- .prettierignore
|-- .prettierrc
|-- README.md
|-- package.json
|-- tsconfig.json
|-- vite.config.ts
```

## 🤙 기술 스택
<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/reactquery-ff4154?style=for-the-badge&logo=reactquery&logoColor=white"> 
  <img src="https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=styled-components&logoColor=black" />


  <br>
</div>

