# pokedex

포켓몬 도감(pokedex)은 모바일 게임 [Pokémon GO](https://www.pokemongo.com/) 플레이를
보조하는 구글 어시스턴트 챗봇입니다.

현재 포켓몬 도감에는 Pokémon GO 에서 만날 수 있는 1세대 ~ 4세대 포켓몬의 데이터가 들어있습니다.

## Features

### 포켓몬 검색

- `리자몽 정보`
- `이상해꽃 물어봐줘`
- `알로라 라이츄 정보 알려줘`

특정 포켓몬을 검색할 수 있습니다.

### 타입의 포켓몬 검색

- `피카츄의 속성 물어봐`
- `이상해씨의 타입 물어봐`
- `비행 타입과 전기 타입을 가지는 포켓몬은?`

특정 타입의 포켓몬들을 검색할 수 있습니다.

### 포켓몬의 약점 검색

- `뮤츠의 상성 물어봐`
- `파이어의 카운터 물어봐`
- `레지아이스한테 강한 포켓몬 물어봐`

특정 포켓몬에게 가장 큰 데미지를 줄 수 있는 포켓몬을 검색할 수 있습니다.
카운터 포켓몬은 기본적으로 pokemon.gameinfo.io 에서 가져온 데이터를 출력하며,
추가로 카운터 포켓몬이 역으로 받는 평균 피해량을 계산하여 보여줍니다.

예를 들어 이상해꽃의 약점을 검색했을 때, 이상해꽃의 카운터 포켓몬들에 대한 평균 피해량은 다음과 같이 계산됩니다.

1. 이상해꽃이 사용할 수 있는 모든 노말/스페셜 어택의 조합을 계산
2. 각각의 조합과 카운터 포켓몬 간의 상성을 계산 (자속 여부도 계산에 포함)
3. 각각의 상성 계산 결과의 평균을 카운터 포켓몬과 함께 `이상해꽃에게 받는 평균 피해 XXX%`로 표기함
4. 모든 어택 조합이 카운터 포켓몬과 무상성인 경우, 평균 피해는 기본값인 `100%`로 표기함

### 포켓몬의 IV 차트 검색

- `멜탄 IV 물어봐`
- `스이쿤 IV 차트`
- `잉어킹 IV`

포켓몬의 IV 차트를 확인할 수 있습니다. IV를 아래 4개 컬럼으로 출력합니다.

20레벨(레이드) / 25레벨(날씨 부스트일 때 레이드) / 30레벨(야생) / 35레벨(날씨 부스트일 때 야생)

### 둥지 검색

- `파이리 둥지 물어봐`
- `이 근처에 무슨 둥지 있는지 물어봐`
- `화랑공원이 무슨 포켓몬 둥지인지 물어봐`

특정 포켓몬의 둥지, 또는 내 위치에서 가장 가까운 곳의 포켓몬 둥지를 물어볼 수 있습니다.
포켓몬 둥지 조회는 권한 요청을 거쳐 사용자의 위치 정보 사용 동의를 받은 뒤에 이용할 수 있습니다.

### BGM 듣기

- `브금 틀어줘`
- `노래 틀어줘`
- `BGM 틀어줘`

포켓몬스터 골드 BGM의 일부를 들을 수 있습니다.

## Data Source

pokedex-actions 는 아래 웹사이트의 데이터를 사용합니다.

- https://pokemon.gameinfo.io
