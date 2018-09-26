# pokedex

포켓몬 도감(pokedex)은 모바일 게임 [Pokémon GO](https://www.pokemongo.com/) 플레이를
보조하는 구글 어시스턴트 챗봇입니다.

현재 포켓몬 도감에는 Pokémon GO 에서 만날 수 있는 1 세대 ~ 3 세대 포켓몬과
알로라 폼 타입 포켓몬의 데이터가 들어 있습니다.

## Features

### 포켓몬 정보 조회

특정 포켓몬의 정보를 물어볼 수 있습니다.

- `리자몽 정보`
- `이상해꽃 물어봐줘`
- `알로라 라이츄 정보 알려줘`

### 타입 조회

특정 포켓몬의 타입을 물어볼 수 있습니다.

- `피카츄의 속성 물어봐`
- `이상해씨의 타입 물어봐`
- `비행 타입과 전기 타입을 가지는 포켓몬은?`

### 카운터 포켓몬 조회

특정 포켓몬에게 가장 큰 데미지를 줄 수 있는 포켓몬을 물어볼 수 있습니다.
카운터 포켓몬은 포켓몬 간의 상성 및 자속 보정, 개체값 등을 고려하여 계산됩니다.

- `뮤츠의 상성 물어봐`
- `파이어의 카운터 물어봐`
- `레지아이스한테 강한 포켓몬 물어봐`

### 포켓몬 둥지 조회 (개발 중)

특정 포켓몬의 둥지, 또는 내 위치에서 가장 가까운 곳의 포켓몬 둥지를 물어볼 수 있습니다.
포켓몬 둥지 조회는 권한 요청을 거쳐 사용자의 위치 정보 사용 동의를 받은 뒤에 이용할 수 있습니다.

- `파이리 둥지 물어봐`
- `이 근처에 둥지 있는지 물어봐`
- `화랑공원이 무슨 포켓몬 둥지인지 물어봐`

## Data Source

pokedex-actions 는 아래 웹사이트의 데이터를 사용합니다.

- https://pokemon.gameinfo.io
