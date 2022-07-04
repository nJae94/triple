## 프로젝트 실행 방법
```
git clone or Zip download

npm / yarn install을 통해 라이브러리 설치

npm / yarn dev를 통해 로컬 실행 확인

npm / yarn test를 통한 테스트 확인

```

## 배포
> https://triple-tau.vercel.app/
* vercel을 통한 배포 
  - Vercel을 통해 프론트를 배포할 경우 main merge시 자동 배포 진행 및 pr 시 preview를 활용할 수 있다는 장점이 있습니다.

## 사용한 기술
* TypeScript
* React
* Vite
  - CRA를 통한 설정을 진행 하였으나 @titicaca/eslint-config-triple 사용 과정 중 오류가 발생하여 새롭게 프로젝트를 셋팅하는 과정에서 기존 webpack 및 babel을 이용하려 했으나 프로젝트 크기에 비해 셋팅과정이 길다고 느껴져 간단하게 설정할 수 있는 Vite를 통해 프로젝트 셋팅을 진행했습니다.
```
  Vite
  Esbuild를 사용하여 webpack과 같은 기존 번들러 보다 10 - 100배 빠른 속도를 보인다고 합니다.
  [vite](https://vitejs-kr.github.io/guide/why.html#the-problems)
```
* emotion
  - JS를 통해 css를 작성할 수 있는 CSS-in-JS 중 하나로 트리플에서 사용하고 있는 Styled-components와 유사하지만 좀 더 익숙한 면이 있어서 선택 했습니다.
* react-router-dom
  - 현재 구조의 경우 페이지가 1개이기 때문에 크게 의미는 없지만 웹 특성상 여러개의 페이지가 있다고 가정하여 셋팅하였습니다.
* IntersectionObserver
  - [트리플](https://triple.guide/intro/)에서 확인 할 수 있는 동작과 유사하게 표현하기 위해 해당 컴포넌트가 스크롤 아래 있을 경우 일정 부분 이상 화면에 진입 후 표현되도록 구현하는데 사용하였습니다.

## 요구사항
- 문구, 이미지 레이아웃 스타일은 트리플 홈페이지와 동일 단, 반응현 고려하지 않으며 최소 화면폭 1200px 고정
> min-width: 1200px;

## 구현 조건 및 해결 방법
> 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션 적용
  keyframes 사용 및 추후 재사용성을 위해 animation-name을 모델링 후 모듈화 원하는 곳에서 showAnimation를 통해 제어가능
> duration 700ms delay 100ms 
  모듈화 된 함수를 통해 duration 및 delay 시간을 매게변수로 받아서 사용
> 숫자가 올라가는 애니메이션
  숫자가 변경되는 동작이 paint가 되기 전에 이뤄져야 된다고 생각해서 useLayoutEffect 사용 및 setInterval을 사용하여 처리 useRef를 활용하여 변경되는 숫자 표시 
> 증가속도가 느려지는 효과 구현
  css animation-timing-function 에서 활용되는 Easing 함수 이용
  [easeOutExpo](https://easings.net/ko#easeOutExpo)

## 폴더 구조
  - components, hooks 등 어느 폴더에서건 글로벌하게 공용으로 쓸 수 있는 부분이 있다면 따로 common으로 분리합니다.
```
└───src
     ├── assets
     │      └─ images : 컴포넌트에서 활용할 image 폴더 
     ├── components : page를 구성하는 컴포넌트 폴더
     │         └─ Statistic : 트리플(https://triple.guide/intro/) 홈페이지에서 볼수 있는 한 섹션과 관련된 폴더입니다.주로 컴포넌트를 구성파는 파일이 100줄 정도 이상이 된다면 style파일을 따로 분리하고 있습니다.
     │
     ├── constants : 주로 고정되어 변경될 가능성이 적은 공용 상수 폴더입니다.
     ├── hooks : Custom Hook 폴더입니다.
     ├── model : interface 정의 폴더입니다.
     ├── pages : 웹 서비스를 구성하는 페이지 폴더입니다.
     ├── styles : 공용으로 사용되는 스타일 속성과 관련된 폴더입니다.
     └── utils : 모듈화되는 기능들의 폴더입니다.
```

## 애매한 점
- Metric 컴포넌트에서 사용되는 MetricData 서버데이터로 인지하고 Mock_data처럼 다뤄야할지 아니면 고정 상수로 생각해야될지 