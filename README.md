
## Countries of the World
![zoyi](https://user-images.githubusercontent.com/38285577/57092734-04137380-6d47-11e9-93be-349c0bb6b1d1.gif)

## Installation

```
git clone https://github.com/hyerinOh/ZOYI.git

cd ZOYI

npm install

npm run client

```

## Features

- react, webpack을 베이스로 사용하여 개발하였습니다.

- 보일러 플레이트를 사용하지 않았습니다.

- 버튼을 누르면 각 필드별 오름차순, 내림차순 정렬이 됩니다.

- 검색 창이 있어 통합 검색이 됩니다.

  - Case insensitive

  - 부분일치 검색 가능

- 각 나라의 데이터 Row에 삭제 버튼이 있어 누르면 삭제가 됩니다.

- 나라 정보를 입력해서 Row를 추가할 수 있습니다.

- 모든 상태(나라 목록, 정렬 상태, 검색어 등)는 데이터 관리 라이브러리(Redux)에 저장됩니다.

- 5개만 로딩 후 스크롤 아래로 갈 시 5개씩 추가 로딩이 됩니다.

- form 라이브러리(redux-form)를 사용하였습니다.

- 검색 기능

  - 타이핑시 바로 검색이 가능합니다.

  - Rate limiting (debounce, throttle) 적용하였습니다.
