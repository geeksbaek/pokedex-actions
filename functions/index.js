// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
"use strict";

var pokedex = [
  {
    name: "이상해씨",
    number: 1,
    poketype: "씨앗포켓몬",
    description:
      "양지에서 낮잠 자는 모습을 볼 수 있다. 태양의 빛을 많이 받으면 등의 씨앗이 크게 자란다.",
    types: ["풀", "독"],
    atk: 118,
    def: 118,
    hp: 90
  },
  {
    name: "이상해풀",
    number: 2,
    poketype: "씨앗포켓몬",
    description:
      "꽃봉오리를 지탱하기 위해 하반신이 강해진다. 양지에서 가만히 있는 시간이 길어지면 드디어 커다란 꽃이 필 때다.",
    types: ["풀", "독"],
    atk: 151,
    def: 151,
    hp: 120
  },
  {
    name: "이상해꽃",
    number: 3,
    poketype: "씨앗포켓몬",
    description:
      "충분한 영양분과 태양의 빛이 꽃의 색을 선명하게 만든다고 한다. 꽃의 향기는 사람의 마음을 치유한다.",
    types: ["풀", "독"],
    atk: 198,
    def: 198,
    hp: 160
  },
  {
    name: "파이리",
    number: 4,
    poketype: "도롱뇽포켓몬",
    description:
      "꼬리의 불꽃은 기분을 표현한다. 즐거울 때는 흔들흔들 불꽃이 흔들리고 화가 났을 때는 활활 맹렬히 불타오른다.",
    types: ["불꽃"],
    atk: 116,
    def: 96,
    hp: 78
  },
  {
    name: "리자드",
    number: 5,
    poketype: "화염포켓몬",
    description:
      "날카로운 발톱으로 봐주지 않고 때려눕힌다. 강한 적을 만나면 기분이 고양되며 꼬리의 불꽃이 푸르스름하게 불타오른다.",
    types: ["불꽃"],
    atk: 158,
    def: 129,
    hp: 116
  },
  {
    name: "리자몽",
    number: 6,
    poketype: "화염포켓몬",
    description:
      "강한 상대를 찾아 하늘을 날아다닌다. 무엇이든 다 녹여버리는 고열의 불꽃을 자신보다 약한 자에게 들이대지 않는다.",
    types: ["불꽃", "비행"],
    atk: 223,
    def: 176,
    hp: 156
  },
  {
    name: "꼬부기",
    number: 7,
    poketype: "꼬마거북포켓몬",
    description:
      "등껍질의 역할은 몸을 지키는 것뿐만이 아니다. 둥그런 모양과 표면의 홈이 물의 저항을 줄여서 빠르게 헤엄칠 수 있다.",
    types: ["물"],
    atk: 94,
    def: 122,
    hp: 88
  },
  {
    name: "어니부기",
    number: 8,
    poketype: "거북포켓몬",
    description:
      "푹신한 털로 덮인 큰 꼬리는 오래 살수록 깊은 색으로 변한다. 등껍질의 상처는 강자임을 증명한다.",
    types: ["물"],
    atk: 126,
    def: 155,
    hp: 118
  },
  {
    name: "거북왕",
    number: 9,
    poketype: "껍질포켓몬",
    description:
      "등껍질의 분사구로 하는 조준은 정확하다. 물 탄환으로 50m 떨어진 빈 캔을 명중시킬 수 있다.",
    types: ["물"],
    atk: 171,
    def: 210,
    hp: 158
  },
  {
    name: "캐터피",
    number: 10,
    poketype: "애벌레포켓몬",
    description:
      "몸보다 커다란 잎사귀를 순식간에 먹어치울 정도의 식욕을 지녔다. 더듬이로 강렬한 냄새를 피운다.",
    types: ["벌레"],
    atk: 55,
    def: 62,
    hp: 90
  },
  {
    name: "단데기",
    number: 11,
    poketype: "번데기포켓몬",
    description:
      "몸의 껍질은 철판처럼 단단하다. 움직임이 적은 것은 껍질 안에서 부드러운 몸이 진화 준비를 하고 있어서다.",
    types: ["벌레"],
    atk: 45,
    def: 94,
    hp: 100
  },
  {
    name: "버터플",
    number: 12,
    poketype: "나비포켓몬",
    description:
      "맛있는 꽃의 꿀을 찾는 능력이 뛰어나서 사는 곳에서 10km 떨어진 장소에 핀 꽃에서 꿀을 모아 옮긴다.",
    types: ["벌레", "비행"],
    atk: 167,
    def: 151,
    hp: 120
  },
  {
    name: "뿔충이",
    number: 13,
    poketype: "송충이포켓몬",
    description:
      "굉장히 예민한 후각을 지니고 있다. 좋아하는 잎사귀인지 싫어하는 잎사귀인지 크고 빨간 코로 냄새 맡아 구별한다.",
    types: ["벌레", "독"],
    atk: 63,
    def: 55,
    hp: 80
  },
  {
    name: "딱충이",
    number: 14,
    poketype: "번데기포켓몬",
    description:
      "거의 움직이지 않고 나무에 매달려 있지만 내부는 진화 준비로 굉장히 바쁜 상태다. 그 증거로 몸이 뜨거워져 있다.",
    types: ["벌레", "독"],
    atk: 46,
    def: 86,
    hp: 90
  },
  {
    name: "독침붕",
    number: 15,
    poketype: "독벌포켓몬",
    description:
      "영역에 대한 집착이 매우 강해서 독침붕이 사는 곳에는 가까이 가지 않는 것이 신상에 좋다. 화나면 집단으로 습격해 온다.",
    types: ["벌레", "독"],
    atk: 169,
    def: 150,
    hp: 130
  },
  {
    name: "구구",
    number: 16,
    poketype: "아기새포켓몬",
    description:
      "방향 감각이 매우 뛰어나서 아무리 멀리 떨어진 곳에서도 헤매지 않고 자신의 둥지까지 찾아 돌아올 수 있다.",
    types: ["노말", "비행"],
    atk: 85,
    def: 76,
    hp: 80
  },
  {
    name: "피죤",
    number: 17,
    poketype: "새포켓몬",
    description:
      "넓은 영역을 날며 순찰한다. 영역을 침범하는 상대는 용서하지 않는다. 날카로운 발톱으로 철저히 혼내준다.",
    types: ["노말", "비행"],
    atk: 117,
    def: 108,
    hp: 126
  },
  {
    name: "피죤투",
    number: 18,
    poketype: "새포켓몬",
    description:
      "아름답게 윤이 나는 깃털을 가진 포켓몬이다. 머리 깃털의 아름다움에 마음을 빼앗겨 피죤투를 기르는 트레이너도 많다.",
    types: ["노말", "비행"],
    atk: 166,
    def: 157,
    hp: 166
  },
  {
    name: "꼬렛",
    number: 19,
    poketype: "쥐포켓몬",
    description:
      "경계심이 매우 강해서 자고 있을 때도 귀를 움직여 주변의 소리를 듣고 있다. 어디에든 자리를 잡고 둥지를 만든다.",
    types: ["노말"],
    atk: 103,
    def: 70,
    hp: 60
  },
  {
    name: "꼬렛",
    number: 19,
    poketype: "쥐포켓몬",
    description:
      "경계심이 매우 강해서 자고 있을 때도 귀를 움직여 주변의 소리를 듣고 있다. 어디에든 자리를 잡고 둥지를 만든다.",
    types: ["악", "노말"],
    atk: 103,
    def: 70,
    hp: 60
  },
  {
    name: "레트라",
    number: 20,
    poketype: "쥐포켓몬",
    description:
      "튼튼한 이빨은 계속 자라기 때문에 바위나 큰 나무를 갉아서 갈아낸다. 집의 벽을 갉아 놓기도 한다.",
    types: ["악", "노말"],
    atk: 135,
    def: 159,
    hp: 150
  },
  {
    name: "레트라",
    number: 20,
    poketype: "쥐포켓몬",
    description:
      "튼튼한 이빨은 계속 자라기 때문에 바위나 큰 나무를 갉아서 갈아낸다. 집의 벽을 갉아 놓기도 한다.",
    types: ["노말"],
    atk: 161,
    def: 144,
    hp: 110
  },
  {
    name: "깨비참",
    number: 21,
    poketype: "아기새포켓몬",
    description:
      "큰 울음소리는 1km 밖까지 도달한다. 여기저기에서 높은 울음소리가 들릴 때는 동료에게 위험을 알리고 있는 신호다.",
    types: ["노말", "비행"],
    atk: 112,
    def: 61,
    hp: 80
  },
  {
    name: "깨비드릴조",
    number: 22,
    poketype: "부리포켓몬",
    description:
      "긴 목과 부리는 땅이나 물 안에 있는 먹이를 잡기 편리하다. 가늘고 긴 부리로 능숙히 집는다.",
    types: ["노말", "비행"],
    atk: 182,
    def: 135,
    hp: 130
  },
  {
    name: "아보",
    number: 23,
    poketype: "뱀포켓몬",
    description:
      "빙빙 몸을 말고 쉬고 있는 것은 어떤 방향에서 적이 습격해 와도 빠르게 머리를 틀어 위협할 수 있기 때문이다.",
    types: ["독"],
    atk: 110,
    def: 102,
    hp: 70
  },
  {
    name: "아보크",
    number: 24,
    poketype: "코브라포켓몬",
    description:
      "조이는 힘이 매우 강력하다. 드럼통도 납작하게 짜부라트린다. 휘감기면 도망가는 것이 불가능하다.",
    types: ["독"],
    atk: 167,
    def: 158,
    hp: 120
  },
  {
    name: "피카츄",
    number: 25,
    poketype: "쥐포켓몬",
    description:
      "처음 보는 것에게는 전격을 맞춘다. 새까맣게 탄 나무열매가 떨어져 있다는 것은 전격의 세기를 조절하지 못했다는 증거다.",
    types: ["전기"],
    atk: 112,
    def: 101,
    hp: 70
  },
  {
    name: "라이츄",
    number: 26,
    poketype: "쥐포켓몬",
    description:
      "전기 주머니에 전기가 넘칠 정도로 차면 꼬리를 땅에 닿게 하여 방전한다. 사는 곳 근처의 땅에는 탄 흔적이 있다.",
    types: ["전기", "에스퍼"],
    atk: 201,
    def: 172,
    hp: 120
  },
  {
    name: "라이츄",
    number: 26,
    poketype: "쥐포켓몬",
    description:
      "전기 주머니에 전기가 넘칠 정도로 차면 꼬리를 땅에 닿게 하여 방전한다. 사는 곳 근처의 땅에는 탄 흔적이 있다.",
    types: ["전기"],
    atk: 193,
    def: 165,
    hp: 120
  },
  {
    name: "모래두지",
    number: 27,
    poketype: "쥐포켓몬",
    description:
      "몸이 수분을 효율적으로 흡수하기 때문에 건조한 모래땅에서도 문제없다. 몸을 둥글게 만들어 적의 공격을 막는다.",
    types: ["땅"],
    atk: 126,
    def: 145,
    hp: 100
  },
  {
    name: "모래두지",
    number: 27,
    poketype: "쥐포켓몬",
    description:
      "몸이 수분을 효율적으로 흡수하기 때문에 건조한 모래땅에서도 문제없다. 몸을 둥글게 만들어 적의 공격을 막는다.",
    types: ["얼음", "강철"],
    atk: 125,
    def: 154,
    hp: 100
  },
  {
    name: "고지",
    number: 28,
    poketype: "쥐포켓몬",
    description:
      "몸의 가시는 피부가 딱딱해진 것이다. 1년에 1회 오래된 가시가 빠지고 새로운 가시가 밑에서 돋아난다.",
    types: ["얼음", "강철"],
    atk: 177,
    def: 221,
    hp: 150
  },
  {
    name: "고지",
    number: 28,
    poketype: "쥐포켓몬",
    description:
      "몸의 가시는 피부가 딱딱해진 것이다. 1년에 1회 오래된 가시가 빠지고 새로운 가시가 밑에서 돋아난다.",
    types: ["땅"],
    atk: 182,
    def: 202,
    hp: 150
  },
  {
    name: "니드런♀",
    number: 29,
    poketype: "독침포켓몬",
    description:
      "작은 몸을 지키기 위해 강력한 독침이 발달한 것이라 여겨진다. 화가 나면 뿔 끝에서 맹독을 뿜는다.",
    types: ["독"],
    atk: 86,
    def: 94,
    hp: 110
  },
  {
    name: "니드리나",
    number: 30,
    poketype: "독침포켓몬",
    description:
      "동료나 가족과 함께일 때는 서로 상처 입히지 않도록 가시를 세우지 않는다. 동료와 떨어지면 불안해하는 것 같다.",
    types: ["독"],
    atk: 117,
    def: 126,
    hp: 140
  },
  {
    name: "니드퀸",
    number: 31,
    poketype: "드릴포켓몬",
    description:
      "단단한 비늘로 뒤덮인 몸을 부딪쳐서 상대를 튕겨내는 공격이 특기다. 자식을 지킬 때 가장 강하다.",
    types: ["독", "땅"],
    atk: 180,
    def: 174,
    hp: 180
  },
  {
    name: "니드런♂",
    number: 32,
    poketype: "독침포켓몬",
    description:
      "귀를 움직이는 근육이 발달되어 있어서 어떤 방향으로든 자유로이 귀를 움직일 수 있다. 희미한 소리도 빠트리지 않고 듣는 포켓몬이다.",
    types: ["독"],
    atk: 105,
    def: 76,
    hp: 92
  },
  {
    name: "니드리노",
    number: 33,
    poketype: "독침포켓몬",
    description:
      "다이아몬드보다 단단한 뿔을 지녔다. 적의 기척을 느끼면 등에 달린 가시를 일제히 세우고 전력을 다해 맞선다.",
    types: ["독"],
    atk: 137,
    def: 112,
    hp: 122
  },
  {
    name: "니드킹",
    number: 34,
    poketype: "독침포켓몬",
    description:
      "두꺼운 꼬리는 한 번 휘두르면 튼튼한 철탑도 꺾어 버리는 엄청난 파괴력을 지녔다. 한 번 날뛰기 시작하면 손쓸 수 없다.",
    types: ["독", "땅"],
    atk: 204,
    def: 157,
    hp: 162
  },
  {
    name: "삐삐",
    number: 35,
    poketype: "요정포켓몬",
    description:
      "보름달 밤에는 기운차게 논다. 동틀 녘에 지친 삐삐들은 조용한 산속에서 동료와 바짝 붙어 잠잔다.",
    types: ["페어리"],
    atk: 107,
    def: 116,
    hp: 140
  },
  {
    name: "픽시",
    number: 36,
    poketype: "요정포켓몬",
    description:
      "날개를 사용하여 날아가듯 뛰어간다. 물 위를 걷는 것도 할 수 있다. 조용한 달밤에 호수를 걷는다.",
    types: ["페어리"],
    atk: 178,
    def: 171,
    hp: 190
  },
  {
    name: "식스테일",
    number: 37,
    poketype: "여우포켓몬",
    description:
      "태어났을 때는 하얀 꼬리가 한 개다. 애정을 많이 받으면 꼬리가 6개로 나뉘며 멋지게 말린다.",
    types: ["얼음"],
    atk: 96,
    def: 122,
    hp: 76
  },
  {
    name: "식스테일",
    number: 37,
    poketype: "여우포켓몬",
    description:
      "태어났을 때는 하얀 꼬리가 한 개다. 애정을 많이 받으면 꼬리가 6개로 나뉘며 멋지게 말린다.",
    types: ["불꽃"],
    atk: 96,
    def: 122,
    hp: 76
  },
  {
    name: "나인테일",
    number: 38,
    poketype: "여우포켓몬",
    description:
      "새빨간 눈은 괴상한 빛을 발산하여 상대의 마음을 자유로이 조종한다. 1000년을 산다고 전해진다.",
    types: ["얼음", "페어리"],
    atk: 170,
    def: 207,
    hp: 146
  },
  {
    name: "나인테일",
    number: 38,
    poketype: "여우포켓몬",
    description:
      "새빨간 눈은 괴상한 빛을 발산하여 상대의 마음을 자유로이 조종한다. 1000년을 산다고 전해진다.",
    types: ["불꽃"],
    atk: 169,
    def: 204,
    hp: 146
  },
  {
    name: "푸린",
    number: 39,
    poketype: "풍선포켓몬",
    description:
      "목소리의 파장을 자유로이 바꿀 수 있는 성대가 있어서 상대가 가장 졸리게 되는 파장으로 노래를 부를 수 있다.",
    types: ["노말", "페어리"],
    atk: 80,
    def: 44,
    hp: 230
  },
  {
    name: "푸크린",
    number: 40,
    poketype: "풍선포켓몬",
    description:
      "크고 동그란 눈동자 표면에는 항상 얇은 눈물 막이 쳐져 있다. 먼지가 들어가도 바로 씻겨 나간다.",
    types: ["노말", "페어리"],
    atk: 156,
    def: 93,
    hp: 280
  },
  {
    name: "주뱃",
    number: 41,
    poketype: "박쥐포켓몬",
    description:
      "낮에 어두운 곳에서 가만히 있는 것은 긴 시간 동안 햇빛을 받으면 전신에 가벼운 화상을 입기 때문이다.",
    types: ["독", "비행"],
    atk: 83,
    def: 76,
    hp: 80
  },
  {
    name: "골뱃",
    number: 42,
    poketype: "박쥐포켓몬",
    description:
      "생물의 혈액을 매우 좋아한다. 특히 한밤중에 활동하는 경우가 많으며 생피를 찾아 밤하늘을 날아다닌다.",
    types: ["독", "비행"],
    atk: 161,
    def: 153,
    hp: 150
  },
  {
    name: "뚜벅쵸",
    number: 43,
    poketype: "잡초포켓몬",
    description:
      "낮에 땅속에 몸을 묻고 땅의 영양을 전신으로 빨아올린다. 비옥한 땅일수록 잎사귀에 윤이 난다고 한다.",
    types: ["풀", "독"],
    atk: 131,
    def: 116,
    hp: 90
  },
  {
    name: "냄새꼬",
    number: 44,
    poketype: "잡초포켓몬",
    description:
      "위험을 느끼면 암술에서 내는 구린 냄새가 더 강해지지만 마음이 평안할 때는 구린 냄새를 내지 않는다.",
    types: ["풀", "독"],
    atk: 153,
    def: 139,
    hp: 120
  },
  {
    name: "라플레시아",
    number: 45,
    poketype: "꽃포켓몬",
    description:
      "독 꽃가루는 심한 알레르기를 일으킨다. 정글에서 아름다운 꽃을 발견해도 섣불리 다가가지 않는 것이 좋다.",
    types: ["풀", "독"],
    atk: 202,
    def: 170,
    hp: 150
  },
  {
    name: "파라스",
    number: 46,
    poketype: "버섯포켓몬",
    description:
      "파라스로부터 양분을 빨아들여 자란 버섯은 동충하초라고 불리고 있다. 장수의 약이 되는 귀중한 버섯이다.",
    types: ["벌레", "풀"],
    atk: 121,
    def: 99,
    hp: 70
  },
  {
    name: "파라섹트",
    number: 47,
    poketype: "버섯포켓몬",
    description:
      "파라섹트는 집단으로 큰 나무의 밑동에 붙어 영양을 빨아들인다. 말라버리면 일제히 다른 나무로 이동한다.",
    types: ["벌레", "풀"],
    atk: 165,
    def: 146,
    hp: 120
  },
  {
    name: "콘팡",
    number: 48,
    poketype: "곤충포켓몬",
    description:
      "몸을 지키기 위해 가늘고 딱딱한 털이 전신을 둘러싸게 됐다고 전해진다. 작은 먹잇감도 놓치지 않는 눈을 가졌다.",
    types: ["벌레", "독"],
    atk: 100,
    def: 102,
    hp: 120
  },
  {
    name: "도나리",
    number: 49,
    poketype: "독나방포켓몬",
    description:
      "야행성으로 밤에 활동을 시작한다. 가로등 빛에 이끌려 모여든 작은 벌레를 즐겨 먹는다.",
    types: ["벌레", "독"],
    atk: 179,
    def: 150,
    hp: 140
  },
  {
    name: "디그다",
    number: 50,
    poketype: "두더지포켓몬",
    description:
      "농가 대부분이 디그다를 기르고 있다. 디그다가 구멍을 판 땅은 적당히 일궈져 있어 맛있는 채소가 재배되기 때문이다.",
    types: ["땅"],
    atk: 109,
    def: 88,
    hp: 20
  },
  {
    name: "디그다",
    number: 50,
    poketype: "두더지포켓몬",
    description:
      "농가 대부분이 디그다를 기르고 있다. 디그다가 구멍을 판 땅은 적당히 일궈져 있어 맛있는 채소가 재배되기 때문이다.",
    types: ["땅", "강철"],
    atk: 109,
    def: 89,
    hp: 20
  },
  {
    name: "닥트리오",
    number: 51,
    poketype: "두더지포켓몬",
    description:
      "본래 하나의 몸에서 세쌍둥이가 된 것이라 모두 생각하는 것이 같다. 힘을 모아 끝없이 파나간다.",
    types: ["땅"],
    atk: 167,
    def: 147,
    hp: 70
  },
  {
    name: "닥트리오",
    number: 51,
    poketype: "두더지포켓몬",
    description:
      "본래 하나의 몸에서 세쌍둥이가 된 것이라 모두 생각하는 것이 같다. 힘을 모아 끝없이 파나간다.",
    types: ["땅", "강철"],
    atk: 201,
    def: 148,
    hp: 70
  },
  {
    name: "나옹",
    number: 52,
    poketype: "요괴고양이포켓몬",
    description:
      "날카로운 발톱을 집어넣고 살금살금 발소리를 내지 않고 걸을 수 있다. 반짝반짝 빛나는 동전을 왠지 모르지만 매우 좋아한다.",
    types: ["악"],
    atk: 99,
    def: 81,
    hp: 80
  },
  {
    name: "나옹",
    number: 52,
    poketype: "요괴고양이포켓몬",
    description:
      "날카로운 발톱을 집어넣고 살금살금 발소리를 내지 않고 걸을 수 있다. 반짝반짝 빛나는 동전을 왠지 모르지만 매우 좋아한다.",
    types: ["노말"],
    atk: 92,
    def: 81,
    hp: 80
  },
  {
    name: "페르시온",
    number: 53,
    poketype: "샴고양이포켓몬",
    description:
      "튼튼한 6가닥의 수염은 공기의 움직임으로 주변의 상태를 파악하는 역할을 한다. 수염을 잡히면 얌전해진다.",
    types: ["노말"],
    atk: 150,
    def: 139,
    hp: 130
  },
  {
    name: "페르시온",
    number: 53,
    poketype: "샴고양이포켓몬",
    description:
      "튼튼한 6가닥의 수염은 공기의 움직임으로 주변의 상태를 파악하는 역할을 한다. 수염을 잡히면 얌전해진다.",
    types: ["악"],
    atk: 158,
    def: 139,
    hp: 130
  },
  {
    name: "고라파덕",
    number: 54,
    poketype: "오리포켓몬",
    description:
      "이상한 힘을 발휘하는 고라파덕에게서 잠들어 있을 때만 발산되는 뇌파가 관측되어 학회에서 화제가 되었다.",
    types: ["물"],
    atk: 122,
    def: 96,
    hp: 100
  },
  {
    name: "골덕",
    number: 55,
    poketype: "오리포켓몬",
    description:
      "손발의 물갈퀴와 유선형의 몸이 수중에서 무서울 만큼 빠른 스피드를 낸다. 금메달리스트보다 단연 빠르다.",
    types: ["물"],
    atk: 191,
    def: 163,
    hp: 160
  },
  {
    name: "망키",
    number: 56,
    poketype: "돈숭이포켓몬",
    description:
      "몸이 떨리며 콧김이 거칠어지면 화를 낼 조짐이지만 순식간에 격렬하게 화를 내기 때문에 도망갈 틈이 없다.",
    types: ["격투"],
    atk: 148,
    def: 87,
    hp: 80
  },
  {
    name: "성원숭",
    number: 57,
    poketype: "돈숭이포켓몬",
    description:
      "격렬하게 화를 내면 혈액순환이 좋아져 근육의 힘을 강하게 만든다. 단 머리 회전은 느려진다.",
    types: ["격투"],
    atk: 207,
    def: 144,
    hp: 130
  },
  {
    name: "가디",
    number: 58,
    poketype: "강아지포켓몬",
    description:
      "후각이 뛰어나서 한 번 맡은 냄새는 무슨 일이 있어도 절대 잊지 않는다. 상대의 기분을 냄새로 감지한다.",
    types: ["불꽃"],
    atk: 136,
    def: 96,
    hp: 110
  },
  {
    name: "윈디",
    number: 59,
    poketype: "전설포켓몬",
    description:
      "10000km 거리를 하루 만에 달려간다고 전해지는 매우 빠른 포켓몬이다. 체내에서 불타오르는 불꽃이 파워가 된다.",
    types: ["불꽃"],
    atk: 227,
    def: 166,
    hp: 180
  },
  {
    name: "발챙이",
    number: 60,
    poketype: "올챙이포켓몬",
    description:
      "소용돌이 모양인 내장이 비칠 정도로 얇은 피부이지만 날카로운 이빨을 튕겨내는 탄력을 지니고 있다.",
    types: ["물"],
    atk: 101,
    def: 82,
    hp: 80
  },
  {
    name: "슈륙챙이",
    number: 61,
    poketype: "올챙이포켓몬",
    description:
      "항상 몸의 표면이 액체로 미끈미끈하게 젖어 있어서 적에게 붙잡혀도 미끄덩 빠져나와 도망갈 수 있다.",
    types: ["물"],
    atk: 130,
    def: 130,
    hp: 130
  },
  {
    name: "강챙이",
    number: 62,
    poketype: "올챙이포켓몬",
    description:
      "강인하게 발달한 근육은 아무리 운동해도 지치는 일이 없다. 태평양도 가볍게 횡단할 수 있을 정도다.",
    types: ["물", "격투"],
    atk: 182,
    def: 187,
    hp: 180
  },
  {
    name: "캐이시",
    number: 63,
    poketype: "초능력포켓몬",
    description:
      "하루에 18시간 잠들어 있는 포켓몬이다. 잠든 상태에서도 적의 기척을 감지하면 순간이동하여 도망갈 수 있다.",
    types: ["에스퍼"],
    atk: 195,
    def: 103,
    hp: 50
  },
  {
    name: "윤겔라",
    number: 64,
    poketype: "초능력포켓몬",
    description:
      "두통을 유발하는 특수한 알파파를 발산하기 때문에 강한 정신력의 소유자가 아니면 윤겔라의 트레이너가 될 수 없다.",
    types: ["에스퍼"],
    atk: 232,
    def: 138,
    hp: 80
  },
  {
    name: "후딘",
    number: 65,
    poketype: "초능력포켓몬",
    description:
      "뇌가 점점 커져서 목으로는 지탱할 수 없을 만큼 머리가 무거워졌다. 초능력으로 머리를 지탱하고 있다.",
    types: ["에스퍼"],
    atk: 271,
    def: 194,
    hp: 110
  },
  {
    name: "알통몬",
    number: 66,
    poketype: "괴력포켓몬",
    description:
      "아무리 운동을 해도 아프지 않은 특별한 근육을 가진 포켓몬이다. 어른 100명을 내던지는 파워다.",
    types: ["격투"],
    atk: 137,
    def: 88,
    hp: 140
  },
  {
    name: "근육몬",
    number: 67,
    poketype: "괴력포켓몬",
    description:
      "잘 단련된 근육은 강철처럼 단단하다. 씨름 선수의 몸을 손가락 1개로 쉽게 들어 올릴 수 있는 괴력의 포켓몬이다.",
    types: ["격투"],
    atk: 177,
    def: 130,
    hp: 160
  },
  {
    name: "괴력몬",
    number: 68,
    poketype: "괴력포켓몬",
    description:
      "무엇이든 내던질 수 있는 파워를 지녔으나 세밀한 작업을 하면 팔이 얽히고 만다. 생각하기보다 몸이 먼저 움직인다.",
    types: ["격투"],
    atk: 234,
    def: 162,
    hp: 180
  },
  {
    name: "모다피",
    number: 69,
    poketype: "꽃포켓몬",
    description:
      "가늘고 유연한 몸은 아무리 강한 공격이라도 휘어져 피할 수 있다. 입에서 철도 녹일 수 있는 액체가 나온다.",
    types: ["풀", "독"],
    atk: 139,
    def: 64,
    hp: 100
  },
  {
    name: "우츠동",
    number: 70,
    poketype: "파리잡이포켓몬",
    description:
      "밤이 되면 엉덩이의 갈고리를 나뭇가지에 걸고 매달려서 잠든다. 잠버릇이 나쁘면 아침에 떨어져 있다.",
    types: ["풀", "독"],
    atk: 172,
    def: 95,
    hp: 130
  },
  {
    name: "우츠보트",
    number: 71,
    poketype: "파리잡이포켓몬",
    description:
      "머리에 달린 긴 덩굴을 작은 생물처럼 움직여서 먹이를 유인한다. 가까이 왔을 때 덥석 한 번에 삼킨다.",
    types: ["풀", "독"],
    atk: 207,
    def: 138,
    hp: 160
  },
  {
    name: "왕눈해",
    number: 72,
    poketype: "해파리포켓몬",
    description:
      "몸 대부분이 물로 되어 있어 바다에서 나오면 바싹 말라버린다. 말라버렸을 때는 바다로 돌려보내 주자.",
    types: ["물", "독"],
    atk: 97,
    def: 182,
    hp: 80
  },
  {
    name: "독파리",
    number: 73,
    poketype: "해파리포켓몬",
    description:
      "머리의 붉은 구슬이 반짝일 때 격렬한 초음파가 주변에 발사된다. 그때 바다가 격렬히 파도친다고 한다.",
    types: ["물", "독"],
    atk: 166,
    def: 237,
    hp: 160
  },
  {
    name: "꼬마돌",
    number: 74,
    poketype: "암석포켓몬",
    description:
      "오래 산 꼬마돌일수록 몸의 모난 부분이 깎여 둥그렇게 되지만 마음은 언제까지나 울퉁불퉁 뾰족하고 거칠다.",
    types: ["바위", "땅"],
    atk: 132,
    def: 163,
    hp: 80
  },
  {
    name: "꼬마돌",
    number: 74,
    poketype: "암석포켓몬",
    description:
      "오래 산 꼬마돌일수록 몸의 모난 부분이 깎여 둥그렇게 되지만 마음은 언제까지나 울퉁불퉁 뾰족하고 거칠다.",
    types: ["바위", "전기"],
    atk: 132,
    def: 163,
    hp: 80
  },
  {
    name: "데구리",
    number: 75,
    poketype: "암석포켓몬",
    description:
      "바위를 먹고 성장하는 포켓몬이다. 이끼가 낀 바위를 좋아하는 것 같다. 하루에 1톤의 바위를 먹어버린다.",
    types: ["바위", "땅"],
    atk: 164,
    def: 196,
    hp: 110
  },
  {
    name: "데구리",
    number: 75,
    poketype: "암석포켓몬",
    description:
      "바위를 먹고 성장하는 포켓몬이다. 이끼가 낀 바위를 좋아하는 것 같다. 하루에 1톤의 바위를 먹어버린다.",
    types: ["바위", "전기"],
    atk: 164,
    def: 196,
    hp: 110
  },
  {
    name: "딱구리",
    number: 76,
    poketype: "메가톤포켓몬",
    description:
      "큰 지진이 일어나면 산에 사는 딱구리 여러 마리가 산기슭까지 데굴데굴 굴러 내려오는 일이 있다.",
    types: ["바위", "전기"],
    atk: 211,
    def: 229,
    hp: 160
  },
  {
    name: "딱구리",
    number: 76,
    poketype: "메가톤포켓몬",
    description:
      "큰 지진이 일어나면 산에 사는 딱구리 여러 마리가 산기슭까지 데굴데굴 굴러 내려오는 일이 있다.",
    types: ["바위", "땅"],
    atk: 211,
    def: 229,
    hp: 160
  },
  {
    name: "포니타",
    number: 77,
    poketype: "불의말포켓몬",
    description:
      "막 태어나서는 겨우 설 수 있는 정도지만 넘어지면서 부모의 뒤를 쫓아다니는 동안 하반신이 튼튼하게 자라난다.",
    types: ["불꽃"],
    atk: 170,
    def: 132,
    hp: 100
  },
  {
    name: "날쌩마",
    number: 78,
    poketype: "불의말포켓몬",
    description:
      "평상시는 느긋하게 들판을 뛰어다니지만 한 번 마음먹으면 갈기의 불꽃을 불태우며 시속 240km로 달린다.",
    types: ["불꽃"],
    atk: 207,
    def: 167,
    hp: 130
  },
  {
    name: "야돈",
    number: 79,
    poketype: "얼간이포켓몬",
    description:
      "꼬리를 강에 넣고 먹이를 낚지만 이윽고 무엇을 하고 있었는지 잊고 강변에 엎드려 누운 채로 하루를 보낸다.",
    types: ["물", "에스퍼"],
    atk: 109,
    def: 109,
    hp: 180
  },
  {
    name: "야도란",
    number: 80,
    poketype: "기생포켓몬",
    description:
      "셀러가 물고 있어서 꼬리로 먹이를 낚을 수 없게 된 야도란은 마지못해 물속을 헤엄쳐 먹이를 잡고 있다.",
    types: ["물", "에스퍼"],
    atk: 177,
    def: 194,
    hp: 190
  },
  {
    name: "코일",
    number: 81,
    poketype: "자석포켓몬",
    description:
      "전선에 들러붙어 전기를 먹고 있다. 정전되면 누전차단기를 살펴보자. 코일이 빽빽이 들러붙어 있을지도 모른다.",
    types: ["전기", "강철"],
    atk: 165,
    def: 128,
    hp: 50
  },
  {
    name: "레어코일",
    number: 82,
    poketype: "자석포켓몬",
    description:
      "강한 자력으로 기계를 망가트리기 때문에 큰 마을에서는 사이렌을 울려 레어코일의 대량 발생을 알린다.",
    types: ["전기", "강철"],
    atk: 223,
    def: 182,
    hp: 100
  },
  {
    name: "파오리",
    number: 83,
    poketype: "천둥오리포켓몬",
    description:
      "가지고 있는 식물의 줄기에도 좋은 것과 그렇지 않은 것이 있는 듯하여 파오리들이 줄기를 둘러싸고 싸우는 일도 있다.",
    types: ["노말", "비행"],
    atk: 124,
    def: 118,
    hp: 104
  },
  {
    name: "두두",
    number: 84,
    poketype: "쌍둥이새포켓몬",
    description:
      "2개의 머리가 동시에 잠드는 일은 없다. 자고 있을 때 적에게 습격당하지 않도록 교대로 망을 보고 있기 때문이다.",
    types: ["노말", "비행"],
    atk: 158,
    def: 88,
    hp: 70
  },
  {
    name: "두트리오",
    number: 85,
    poketype: "세쌍둥이새포켓몬",
    description:
      "3개의 머리가 서로 다른 방향을 향하고 있을 때는 경계 중인 증거다. 섣불리 가까이 가면 부리에 쪼인다.",
    types: ["노말", "비행"],
    atk: 218,
    def: 145,
    hp: 120
  },
  {
    name: "쥬쥬",
    number: 86,
    poketype: "강치포켓몬",
    description:
      "얼음으로 뒤덮인 바다에서 먹이를 잡는다. 숨을 쉴 때는 머리의 돌출된 부분으로 얼음을 깨고 바다 밖으로 얼굴을 내민다.",
    types: ["물"],
    atk: 85,
    def: 128,
    hp: 130
  },
  {
    name: "쥬레곤",
    number: 87,
    poketype: "강치포켓몬",
    description:
      "차가운 얼음 위에서 자는 것을 매우 좋아한다. 옛날에 빙산에서 자는 모습을 본 뱃사람이 인어로 착각했다.",
    types: ["물", "얼음"],
    atk: 139,
    def: 184,
    hp: 180
  },
  {
    name: "질퍽이",
    number: 88,
    poketype: "진흙포켓몬",
    description:
      "흐물흐물 물렁물렁한 몸은 아무리 좁은 틈이라도 파고들어 갈 수 있다. 하수관에 들어가 지저분한 물을 마신다.",
    types: ["독"],
    atk: 135,
    def: 90,
    hp: 160
  },
  {
    name: "질퍽이",
    number: 88,
    poketype: "진흙포켓몬",
    description:
      "흐물흐물 물렁물렁한 몸은 아무리 좁은 틈이라도 파고들어 갈 수 있다. 하수관에 들어가 지저분한 물을 마신다.",
    types: ["독", "악"],
    atk: 135,
    def: 90,
    hp: 160
  },
  {
    name: "질뻐기",
    number: 89,
    poketype: "진흙포켓몬",
    description:
      "몸에서 배어 나오는 체액은 코를 찌를 정도로 강렬한 냄새를 뿜는다. 한 방울로 수영장의 물이 탁해지고 냄새가 난다.",
    types: ["독"],
    atk: 190,
    def: 184,
    hp: 210
  },
  {
    name: "질뻐기",
    number: 89,
    poketype: "진흙포켓몬",
    description:
      "몸에서 배어 나오는 체액은 코를 찌를 정도로 강렬한 냄새를 뿜는다. 한 방울로 수영장의 물이 탁해지고 냄새가 난다.",
    types: ["독", "악"],
    atk: 190,
    def: 184,
    hp: 210
  },
  {
    name: "셀러",
    number: 90,
    poketype: "두조개포켓몬",
    description:
      "밤이 되면 큰 혀로 해저의 모래에 구멍을 뚫고 그 안에서 잔다. 혀를 내민 채로 껍질을 닫고 잠든다.",
    types: ["물"],
    atk: 116,
    def: 168,
    hp: 60
  },
  {
    name: "파르셀",
    number: 91,
    poketype: "두조개포켓몬",
    description:
      "들이마신 바닷물을 뒤쪽으로 기운차게 뿜어내서 바닷속을 헤엄친다. 같은 방법으로 가시도 발사한다.",
    types: ["물", "얼음"],
    atk: 186,
    def: 323,
    hp: 100
  },
  {
    name: "고오스",
    number: 92,
    poketype: "가스포켓몬",
    description:
      "강풍을 맞으면 가스로 된 몸은 금세 날려져서 작아진다. 바람을 피해 고오스가 처마 밑에 모인다.",
    types: ["고스트", "독"],
    atk: 186,
    def: 70,
    hp: 60
  },
  {
    name: "고우스트",
    number: 93,
    poketype: "가스포켓몬",
    description:
      "어둠 속에서 나타나는 고우스트가 손짓으로 불러도 절대 가까이 가면 안 된다. 날름 핥아져 생명을 빨린다.",
    types: ["고스트", "독"],
    atk: 223,
    def: 112,
    hp: 90
  },
  {
    name: "팬텀",
    number: 94,
    poketype: "그림자포켓몬",
    description:
      "한밤중 가로등 빛에 생겨난 그림자가 자신을 앞질러 가는 것은 팬텀이 그림자인 척하며 뛰어가기 때문이다.",
    types: ["고스트", "독"],
    atk: 261,
    def: 156,
    hp: 120
  },
  {
    name: "롱스톤",
    number: 95,
    poketype: "돌뱀포켓몬",
    description:
      "뇌에 자석이 있어서 땅속을 파고 나가도 방향을 틀리지 않는다. 나이를 먹을수록 몸이 둥그스름해진다.",
    types: ["바위", "땅"],
    atk: 85,
    def: 288,
    hp: 70
  },
  {
    name: "슬리프",
    number: 96,
    poketype: "최면포켓몬",
    description:
      "잠들었을 때 너의 코가 근질근질하다면 슬리프가 머리맡에 서서 콧구멍을 통해 꿈을 먹으려고 하는 신호다.",
    types: ["에스퍼"],
    atk: 89,
    def: 158,
    hp: 120
  },
  {
    name: "슬리퍼",
    number: 97,
    poketype: "최면포켓몬",
    description:
      "손에 쥐고 있는 추의 움직임과 반짝임이 상대를 깊은 최면 상태에 빠트린다. 먹이를 찾으며 추를 손질하고 있다.",
    types: ["에스퍼"],
    atk: 144,
    def: 215,
    hp: 170
  },
  {
    name: "크랩",
    number: 98,
    poketype: "게포켓몬",
    description:
      "모래 해변에 구멍을 뚫고 거기서 살고 있다. 먹이가 적은 모래 해변에서는 자리 확보를 위해 다투는 크랩들을 볼 수 있다.",
    types: ["물"],
    atk: 181,
    def: 156,
    hp: 60
  },
  {
    name: "킹크랩",
    number: 99,
    poketype: "집게포켓몬",
    description:
      "킹크랩은 거대한 집게를 휘둘러 동료 간에 신호를 보내지만 집게가 무거워서 곧 지쳐버린다.",
    types: ["물"],
    atk: 240,
    def: 214,
    hp: 110
  },
  {
    name: "찌리리공",
    number: 100,
    poketype: "볼포켓몬",
    description:
      "몬스터볼을 만드는 회사에서 처음 발견됐다는 점과 생김새가 비슷한 점의 관련성은 아직도 수수께끼다.",
    types: ["전기"],
    atk: 109,
    def: 114,
    hp: 80
  },
  {
    name: "붐볼",
    number: 101,
    poketype: "볼포켓몬",
    description:
      "공기 중의 전기 에너지를 먹는다. 번개가 치는 날에는 전기를 너무 먹은 붐볼이 이곳저곳에서 대폭발한다.",
    types: ["전기"],
    atk: 173,
    def: 179,
    hp: 120
  },
  {
    name: "아라리",
    number: 102,
    poketype: "알포켓몬",
    description:
      "동료애가 강한 여섯 알은 서로 끌어당기며 빙글빙글 회전하고 있다. 껍질의 금이 늘어나면 진화가 가까워진 것.",
    types: ["풀", "에스퍼"],
    atk: 107,
    def: 140,
    hp: 120
  },
  {
    name: "나시",
    number: 103,
    poketype: "야자열매포켓몬",
    description:
      "남쪽 나라 태생인 나시의 머리는 강한 햇빛을 잔뜩 받고 점점 자라 땅에 떨어지면 아라리가 된다고 한다.",
    types: ["풀", "드래곤"],
    atk: 230,
    def: 158,
    hp: 190
  },
  {
    name: "나시",
    number: 103,
    poketype: "야자열매포켓몬",
    description:
      "남쪽 나라 태생인 나시의 머리는 강한 햇빛을 잔뜩 받고 점점 자라 땅에 떨어지면 아라리가 된다고 한다.",
    types: ["풀", "에스퍼"],
    atk: 233,
    def: 158,
    hp: 190
  },
  {
    name: "탕구리",
    number: 104,
    poketype: "고독포켓몬",
    description:
      "두 번 다시 만나지 못하는 어미의 모습을 보름달에서 발견하고 울음소리를 낸다. 뒤집어쓰고 있는 뼈의 얼룩은 눈물 자국이다.",
    types: ["땅"],
    atk: 90,
    def: 165,
    hp: 100
  },
  {
    name: "텅구리",
    number: 105,
    poketype: "뼈다귀포켓몬",
    description:
      "어미를 만날 수 없는 슬픔을 극복한 탕구리가 늠름하게 진화한 모습이다. 단련된 마음은 간단히 꺾이지 않는다.",
    types: ["불꽃", "고스트"],
    atk: 144,
    def: 200,
    hp: 120
  },
  {
    name: "텅구리",
    number: 105,
    poketype: "뼈다귀포켓몬",
    description:
      "어미를 만날 수 없는 슬픔을 극복한 탕구리가 늠름하게 진화한 모습이다. 단련된 마음은 간단히 꺾이지 않는다.",
    types: ["땅"],
    atk: 144,
    def: 200,
    hp: 120
  },
  {
    name: "시라소몬",
    number: 106,
    poketype: "킥포켓몬",
    description:
      "자유롭게 신축되는 다리로 강렬한 킥을 날려 상대를 발로 차 쓰러트린다. 싸운 뒤에 지친 다리를 주물러 풀어준다.",
    types: ["격투"],
    atk: 224,
    def: 211,
    hp: 100
  },
  {
    name: "홍수몬",
    number: 107,
    poketype: "펀치포켓몬",
    description:
      "세계 챔피언을 목표했던 복서의 혼이 깃들었다고 하는 홍수몬은 불굴의 정신으로 절대 지쳐 쓰러지지 않는다.",
    types: ["격투"],
    atk: 193,
    def: 212,
    hp: 100
  },
  {
    name: "내루미",
    number: 108,
    poketype: "핥기포켓몬",
    description:
      "처음 본 것은 반드시 핥아본다. 혀의 감촉과 맛으로 기억해두는 것이다. 하지만 시큼한 것을 핥는 것은 조금 꺼린다.",
    types: ["노말"],
    atk: 108,
    def: 137,
    hp: 180
  },
  {
    name: "또가스",
    number: 109,
    poketype: "독가스포켓몬",
    description:
      "자극받으면 가스의 독소가 강해져 몸의 이곳저곳에서 강하게 내뿜는다. 동그랗게 부풀어 오른 후 대폭발한다.",
    types: ["독"],
    atk: 119,
    def: 164,
    hp: 80
  },
  {
    name: "또도가스",
    number: 110,
    poketype: "독가스포켓몬",
    description:
      "부패한 음식물 쓰레기에서 나온 가스를 매우 좋아한다. 청소하지 않는 집에서 눌러살며 가족이 모두 잠든 한밤중에 쓰레기통을 뒤진다.",
    types: ["독"],
    atk: 174,
    def: 221,
    hp: 130
  },
  {
    name: "뿔카노",
    number: 111,
    poketype: "뿔포켓몬",
    description:
      "오로지 곧장 돌진하여 부순다. 강철 덩어리에 부딪혀도 멀쩡하지만 하루가 지나면 아픔을 조금 느낀다.",
    types: ["땅", "바위"],
    atk: 140,
    def: 157,
    hp: 160
  },
  {
    name: "코뿌리",
    number: 112,
    poketype: "드릴포켓몬",
    description:
      "뿔은 다이아몬드 원석을 부수고 꼬리의 일격은 빌딩을 쓰러트린다. 단단한 피부는 대포에도 상처 입지 않는다.",
    types: ["땅", "바위"],
    atk: 222,
    def: 206,
    hp: 210
  },
  {
    name: "럭키",
    number: 113,
    poketype: "알포켓몬",
    description:
      "영양 만점인 알을 매일 낳는다. 식욕을 잃은 사람도 한 번에 먹어치울 정도로 맛있는 알이다.",
    types: ["노말"],
    atk: 60,
    def: 176,
    hp: 500
  },
  {
    name: "덩쿠리",
    number: 114,
    poketype: "넝쿨포켓몬",
    description:
      "적에게 붙잡히면 덩굴이 뚝 하고 끊긴다. 전혀 아프지 않기 때문에 그 틈에 도망간다. 다음 날에는 새로운 덩굴이 자란다.",
    types: ["풀"],
    atk: 183,
    def: 205,
    hp: 130
  },
  {
    name: "캥카",
    number: 115,
    poketype: "가족포켓몬",
    description:
      "캥카의 새끼가 혼자서 놀고 있어도 절대로 잡으려 하면 안 된다. 가까이 있는 부모가 격렬히 화낸다.",
    types: ["노말"],
    atk: 181,
    def: 165,
    hp: 210
  },
  {
    name: "쏘드라",
    number: 116,
    poketype: "드래곤포켓몬",
    description:
      "작은 벌레나 바위의 이끼를 먹는다. 해류가 빨라지면 꼬리로 바위나 산호를 휘감아 떠내려가지 않게 한다.",
    types: ["물"],
    atk: 129,
    def: 125,
    hp: 60
  },
  {
    name: "시드라",
    number: 117,
    poketype: "드래곤포켓몬",
    description:
      "산호 가지 사이로 들어가 잠잔다. 시드라가 있는 줄 모르고 산호를 잡으려다 독가시에 찔리곤 한다.",
    types: ["물"],
    atk: 187,
    def: 182,
    hp: 110
  },
  {
    name: "콘치",
    number: 118,
    poketype: "금붕어포켓몬",
    description:
      "물속에서 우아하게 나부끼는 지느러미가 매우 아름다운 포켓몬이지만 방심하고 있으면 강렬한 뿔의 일격을 당한다.",
    types: ["물"],
    atk: 123,
    def: 115,
    hp: 90
  },
  {
    name: "왕콘치",
    number: 119,
    poketype: "금붕어포켓몬",
    description:
      "가을이 되면 암컷에게 프러포즈하기 위해 강바닥에서 춤추는 수컷을 볼 수 있다. 몸의 색이 가장 아름다운 계절이다.",
    types: ["물"],
    atk: 175,
    def: 154,
    hp: 160
  },
  {
    name: "별가사리",
    number: 120,
    poketype: "별포켓몬",
    description:
      "여름이 끝날 무렵 밤에 모래 해변에 가면 핵이라고 불리는 기관을 붉게 빛내는 별가사리가 별처럼 보인다.",
    types: ["물"],
    atk: 137,
    def: 112,
    hp: 60
  },
  {
    name: "아쿠스타",
    number: 121,
    poketype: "수수께끼포켓몬",
    description:
      "몸의 중심에 있는 핵이라 불리는 부분이 일곱 빛깔로 빛나기에 바다의 보석이라는 별명이 붙었다.",
    types: ["물", "에스퍼"],
    atk: 210,
    def: 184,
    hp: 120
  },
  {
    name: "마임맨",
    number: 122,
    poketype: "배리어포켓몬",
    description:
      "몸짓으로 눈에 보이지 않는 것이 그곳에 있다고 믿게 만드는 팬터마임의 달인이다. 있다고 믿게 만든 것은 정말로 나타난다.",
    types: ["에스퍼", "페어리"],
    atk: 192,
    def: 233,
    hp: 80
  },
  {
    name: "스라크",
    number: 123,
    poketype: "버마재비포켓몬",
    description:
      "눈에 보이지 않는 빠른 스피드가 양팔에 달린 낫의 날카로움을 한층 높여준다. 한 번 휘두르면 큰 나무도 두 동강 난다.",
    types: ["벌레", "비행"],
    atk: 218,
    def: 170,
    hp: 140
  },
  {
    name: "루주라",
    number: 124,
    poketype: "인간형태포켓몬",
    description:
      "춤추는 듯한 자세로 리드미컬하게 걷는다. 그 움직임은 보고 있는 사람마저 얼떨결에 허리를 흔들 정도로 경쾌하다.",
    types: ["얼음", "에스퍼"],
    atk: 223,
    def: 182,
    hp: 130
  },
  {
    name: "에레브",
    number: 125,
    poketype: "전기포켓몬",
    description:
      "폭풍이 오면 나무 위처럼 벼락이 떨어질 만한 높은 장소로 앞다투어 올라간다. 피뢰침 대용으로 삼는 마을도 있다.",
    types: ["전기"],
    atk: 198,
    def: 173,
    hp: 130
  },
  {
    name: "마그마",
    number: 126,
    poketype: "불뿜기포켓몬",
    description:
      "싸우게 되면 몸에서 작열하는 불꽃을 뿜어내 상대를 위협한다. 그 열풍으로 주변의 초목도 불태운다.",
    types: ["불꽃"],
    atk: 206,
    def: 169,
    hp: 130
  },
  {
    name: "쁘사이저",
    number: 127,
    poketype: "뿔집게포켓몬",
    description:
      "자신의 몸무게 두 배나 되는 상대를 뿔로 집어 가볍게 들어 올리는 괴력을 지녔다. 추운 곳에서는 몸의 움직임이 둔해진다.",
    types: ["벌레"],
    atk: 238,
    def: 197,
    hp: 130
  },
  {
    name: "켄타로스",
    number: 128,
    poketype: "성난소포켓몬",
    description:
      "항상 날뛰지 않으면 성에 차지 않는다. 싸울 상대가 없을 때는 큰 나무를 들이받아 쓰러트리고 맘을 가라앉힌다.",
    types: ["노말"],
    atk: 198,
    def: 197,
    hp: 150
  },
  {
    name: "잉어킹",
    number: 129,
    poketype: "물고기포켓몬",
    description:
      "튀어 오르기만 하는 한심한 포켓몬이다. 왜 튀어 오르는지 조사한 연구자가 있을 정도로 무조건 튀고 튀고 튀어 오르기만 한다.",
    types: ["물"],
    atk: 29,
    def: 102,
    hp: 40
  },
  {
    name: "갸라도스",
    number: 130,
    poketype: "흉악포켓몬",
    description:
      "잉어킹에서 갸라도스로 진화할 때 뇌세포의 구조가 재구성되기 때문에 성격이 난폭해진다고 전해진다.",
    types: ["물", "비행"],
    atk: 237,
    def: 197,
    hp: 190
  },
  {
    name: "라프라스",
    number: 131,
    poketype: "탈것포켓몬",
    description:
      "사람이 멸종의 위기로 몰아갔다. 석양이 내리면 수가 줄어든 동료를 찾아 슬픈 목소리로 노래한다고 한다.",
    types: ["물", "얼음"],
    atk: 165,
    def: 180,
    hp: 260
  },
  {
    name: "메타몽",
    number: 132,
    poketype: "변신포켓몬",
    description:
      "몸의 세포를 재구성하여 변신한다. 전에 봤던 것을 기억해내면서 바뀌면 조금 다른 형태가 되어버린다.",
    types: ["노말"],
    atk: 91,
    def: 91,
    hp: 96
  },
  {
    name: "이브이",
    number: 133,
    poketype: "진화포켓몬",
    description:
      "사는 환경에 따라 돌연변이하는 불안정한 유전자를 지닌 포켓몬이다. 돌의 방사선이 진화를 일으킨다.",
    types: ["노말"],
    atk: 104,
    def: 121,
    hp: 110
  },
  {
    name: "샤미드",
    number: 134,
    poketype: "거품뿜기포켓몬",
    description:
      "돌연변이로 인해 물속에서 생활할 수 있도록 지느러미와 아가미가 생겨났다. 물을 자유로이 조종하는 힘을 지녔다.",
    types: ["물"],
    atk: 205,
    def: 177,
    hp: 260
  },
  {
    name: "쥬피썬더",
    number: 135,
    poketype: "번개포켓몬",
    description:
      "세포에서 나오는 약한 전기를 털의 정전기로 증폭시켜 번개를 떨어트린다. 곤두세운 털은 전기를 띤 바늘이다.",
    types: ["전기"],
    atk: 232,
    def: 201,
    hp: 130
  },
  {
    name: "부스터",
    number: 136,
    poketype: "불꽃포켓몬",
    description:
      "푹신한 털은 높이 오른 체온을 공기 중으로 발산하여 낮추는 기능을 지녔다. 체온은 최고 900도까지 올라간다.",
    types: ["불꽃"],
    atk: 246,
    def: 204,
    hp: 130
  },
  {
    name: "폴리곤",
    number: 137,
    poketype: "가상포켓몬",
    description:
      "전신을 프로그램 데이터로 되돌려 전자 공간에 들어갈 수 있다. 복사 방지가 되어 있어 복사할 수 없다.",
    types: ["노말"],
    atk: 153,
    def: 139,
    hp: 130
  },
  {
    name: "암나이트",
    number: 138,
    poketype: "소용돌이포켓몬",
    description:
      "오랜 옛날에 멸종됐지만 인간의 손으로 화석에서 부활시킨 포켓몬 중 하나다. 적에게 습격당하면 단단한 껍질 속에 숨는다.",
    types: ["바위", "물"],
    atk: 155,
    def: 174,
    hp: 70
  },
  {
    name: "암스타",
    number: 139,
    poketype: "소용돌이포켓몬",
    description:
      "촉수를 이용하여 먹이를 잡는다. 껍질이 너무 커진 탓에 움직임이 둔해져서 멸종했다고 여겨지고 있다.",
    types: ["바위", "물"],
    atk: 207,
    def: 227,
    hp: 140
  },
  {
    name: "투구",
    number: 140,
    poketype: "껍질포켓몬",
    description:
      "화석에서 부활한 포켓몬이지만 드물게 살아 있는 투구를 발견할 수 있다. 그 모습은 3억 년 동안 변치 않았다.",
    types: ["바위", "물"],
    atk: 148,
    def: 162,
    hp: 60
  },
  {
    name: "투구푸스",
    number: 141,
    poketype: "껍질포켓몬",
    description:
      "물속을 헤엄쳐 먹이를 잡았었다. 물에서의 생활을 지나 땅에서 살 수 있도록 아가미나 다리 등이 변화되기 시작했다.",
    types: ["바위", "물"],
    atk: 220,
    def: 203,
    hp: 120
  },
  {
    name: "프테라",
    number: 142,
    poketype: "화석포켓몬",
    description:
      "호박에서 추출한 유전자를 재생하여 부활한 공룡시대의 포켓몬이다. 하늘의 왕이었다고 상상된다.",
    types: ["바위", "비행"],
    atk: 221,
    def: 164,
    hp: 160
  },
  {
    name: "잠만보",
    number: 143,
    poketype: "졸음포켓몬",
    description:
      "먹고 자는 것을 반복하다 하루가 끝난다. 큰 배 위를 놀이터로 삼은 아이들이 있을 정도로 얌전한 포켓몬이다.",
    types: ["노말"],
    atk: 190,
    def: 190,
    hp: 320
  },
  {
    name: "프리져",
    number: 144,
    poketype: "냉동포켓몬",
    description:
      "얼음을 조종하는 전설의 새포켓몬이다. 날갯짓하면 공기가 차갑게 식기 때문에 프리져가 날면 눈이 온다고 전해진다.",
    types: ["얼음", "비행"],
    atk: 192,
    def: 249,
    hp: 180
  },
  {
    name: "썬더",
    number: 145,
    poketype: "전기포켓몬",
    description:
      "전기를 조종하는 전설의 새포켓몬이다. 평상시는 번개 구름 속에서 지낸다. 번개를 맞으면 힘이 솟아난다.",
    types: ["전기", "비행"],
    atk: 253,
    def: 188,
    hp: 180
  },
  {
    name: "파이어",
    number: 146,
    poketype: "화염포켓몬",
    description:
      "불꽃을 조종하는 전설의 새포켓몬이다. 몸이 상처 입으면 분화구의 마그마에 들어가 전신을 불태워 상처를 치료한다고 한다.",
    types: ["불꽃", "비행"],
    atk: 251,
    def: 184,
    hp: 180
  },
  {
    name: "미뇽",
    number: 147,
    poketype: "드래곤포켓몬",
    description:
      "미뇽이 탈피를 반복하는 것은 몸속에서 생명 에너지가 점점 부풀어 올라 억제할 수 없게 되기 때문이다.",
    types: ["드래곤"],
    atk: 119,
    def: 94,
    hp: 82
  },
  {
    name: "신뇽",
    number: 148,
    poketype: "드래곤포켓몬",
    description:
      "큰 에너지를 몸에 모으고 있다. 목과 꼬리의 수정에서 에너지를 발산하여 주변 날씨를 바꾼다고 한다.",
    types: ["드래곤"],
    atk: 163,
    def: 138,
    hp: 122
  },
  {
    name: "망나뇽",
    number: 149,
    poketype: "드래곤포켓몬",
    description:
      "16시간 만에 지구를 한 바퀴 돌 수 있다. 폭풍으로 난파 직전인 배를 발견하면 육지까지 유도하는 상냥한 포켓몬이다.",
    types: ["드래곤", "비행"],
    atk: 263,
    def: 201,
    hp: 182
  },
  {
    name: "뮤츠",
    number: 150,
    poketype: "유전포켓몬",
    description:
      "유전자조작을 통해 만들어진 포켓몬이다. 인간은 과학의 힘으로 몸은 만들었지만 상냥한 마음을 만들 수는 없었다.",
    types: ["에스퍼"],
    atk: 300,
    def: 182,
    hp: 193
  },
  {
    name: "뮤",
    number: 151,
    poketype: "신종포켓몬",
    description:
      "모든 포켓몬의 유전자를 가졌다고 한다. 자유자재로 모습을 숨길 수 있어서 사람에게 가까이 다가가도 절대 들키지 않는다.",
    types: ["에스퍼"],
    atk: 210,
    def: 210,
    hp: 200
  },
  {
    name: "치코리타",
    number: 152,
    poketype: "잎사귀포켓몬",
    description:
      "잎사귀를 휘둘러 상대를 위협하지만 잎사귀에서 달콤한 향기가 풍겨 나와 서로 온화한 분위기가 된다.",
    types: ["풀"],
    atk: 92,
    def: 122,
    hp: 90
  },
  {
    name: "베이리프",
    number: 153,
    poketype: "잎사귀포켓몬",
    description:
      "목 주변의 둥그렇게 말린 잎사귀 안에는 작은 새싹 한 개가 나 있다. 그 향기는 사람을 기운 나게 한다.",
    types: ["풀"],
    atk: 122,
    def: 155,
    hp: 120
  },
  {
    name: "메가니움",
    number: 154,
    poketype: "허브포켓몬",
    description:
      "꽃의 향기는 기분을 평안하게 만든다. 싸울 때는 향기를 발산하여 상대의 전의를 떨어뜨린다.",
    types: ["풀"],
    atk: 168,
    def: 202,
    hp: 160
  },
  {
    name: "브케인",
    number: 155,
    poketype: "불쥐포켓몬",
    description:
      "등에서 불꽃을 내뿜어 몸을 지킨다. 화났을 때의 불꽃은 기운차지만 지쳤을 때는 불완전연소한다.",
    types: ["불꽃"],
    atk: 116,
    def: 96,
    hp: 78
  },
  {
    name: "마그케인",
    number: 156,
    poketype: "화산포켓몬",
    description:
      "불꽃의 기세와 열풍으로 위협한다. 재빠른 몸동작으로 상대의 공격을 피하면서 동시에 불꽃으로 태운다.",
    types: ["불꽃"],
    atk: 158,
    def: 129,
    hp: 116
  },
  {
    name: "블레이범",
    number: 157,
    poketype: "화산포켓몬",
    description:
      "작열하는 불꽃으로 주변에 아지랑이를 만들어내서 모습을 숨길 수 있다. 불타오르며 폭발하는 바람은 모든 것을 태운다.",
    types: ["불꽃"],
    atk: 223,
    def: 176,
    hp: 156
  },
  {
    name: "리아코",
    number: 158,
    poketype: "큰턱포켓몬",
    description:
      "몸은 작지만 턱의 힘은 강하다. 리아코 나름은 살포시 물려고 하지만 큰 상처를 입힐 정도의 힘이 있다.",
    types: ["물"],
    atk: 117,
    def: 116,
    hp: 100
  },
  {
    name: "엘리게이",
    number: 159,
    poketype: "큰턱포켓몬",
    description:
      "한 번 물고 늘어지면 절대로 놓지 않는다. 이빨 끝이 낚싯바늘처럼 휘어져 있어서 한 번 들어가면 빠지지 않는다.",
    types: ["물"],
    atk: 150,
    def: 151,
    hp: 130
  },
  {
    name: "장크로다일",
    number: 160,
    poketype: "큰턱포켓몬",
    description:
      "큰 입을 열고 상대를 위협한다. 강인한 뒷다리로 땅을 차고 굉장한 스피드로 돌진해온다.",
    types: ["물"],
    atk: 205,
    def: 197,
    hp: 170
  },
  {
    name: "꼬리선",
    number: 161,
    poketype: "망보기포켓몬",
    description:
      "잠잘 때는 교대로 망을 본다. 위험을 탐지하면 동료를 깨운다. 무리에서 떨어지면 무서워서 자지 못한다.",
    types: ["노말"],
    atk: 79,
    def: 77,
    hp: 70
  },
  {
    name: "다꼬리",
    number: 162,
    poketype: "긴몸통포켓몬",
    description:
      "적에게 습격당해도 좁은 틈으로 쑥 들어가서 도망갈 수 있다. 팔다리는 짧지만 매우 날쌔다.",
    types: ["노말"],
    atk: 148,
    def: 130,
    hp: 170
  },
  {
    name: "부우부",
    number: 163,
    poketype: "부엉이포켓몬",
    description:
      "몸 안에 지구의 자전을 감지해내는 기관을 지니고 있어서 매일 같은 시간이 되면 울음소리를 낸다.",
    types: ["노말", "비행"],
    atk: 67,
    def: 101,
    hp: 120
  },
  {
    name: "야부엉",
    number: 164,
    poketype: "부엉이포켓몬",
    description:
      "약간의 빛만으로도 볼 수 있는 우수한 눈과 날갯소리를 내지 않는 부드러운 깃털 덕분에 어둠 속에서 먹이를 절대 놓치지 않는다.",
    types: ["노말", "비행"],
    atk: 145,
    def: 179,
    hp: 200
  },
  {
    name: "레디바",
    number: 165,
    poketype: "별다섯포켓몬",
    description:
      "몸통과 다리의 연결 부위에서 나는 액체의 냄새로 동료와 커뮤니케이션을 취하고 있다. 냄새의 차이로 기분을 전한다고 한다.",
    types: ["벌레", "비행"],
    atk: 72,
    def: 142,
    hp: 80
  },
  {
    name: "레디안",
    number: 166,
    poketype: "별다섯포켓몬",
    description:
      "별이 많이 보이는 공기가 깨끗한 장소에는 레디안이 많이 산다고 한다. 별빛을 에너지로 삼기 때문이다.",
    types: ["벌레", "비행"],
    atk: 107,
    def: 209,
    hp: 110
  },
  {
    name: "페이검",
    number: 167,
    poketype: "실뿜기포켓몬",
    description:
      "실로 만든 함정은 제2의 신경이다. 실에 전해지는 약간의 진동만으로 먹이의 종류를 알 수 있다고 전해진다.",
    types: ["벌레", "독"],
    atk: 105,
    def: 73,
    hp: 80
  },
  {
    name: "아리아도스",
    number: 168,
    poketype: "롱다리포켓몬",
    description:
      "발끝에는 작은 갈고리발톱이 있어서 천장이나 수직인 벽도 걸을 수 있다. 가늘고 튼튼한 실로 적을 조른다.",
    types: ["벌레", "독"],
    atk: 161,
    def: 128,
    hp: 140
  },
  {
    name: "크로뱃",
    number: 169,
    poketype: "박쥐포켓몬",
    description:
      "팔이나 다리 어느 한쪽만으로 날갯짓할 때는 긴 거리를 날고 있다는 증거다. 지치면 날갯짓하는 날개를 바꾼다.",
    types: ["독", "비행"],
    atk: 194,
    def: 178,
    hp: 170
  },
  {
    name: "초라기",
    number: 170,
    poketype: "아귀포켓몬",
    description:
      "2개의 촉수로 플러스와 마이너스 전기를 흘려 먹이를 기절시킨다. 전기의 빛은 동료와의 신호다.",
    types: ["물", "전기"],
    atk: 106,
    def: 106,
    hp: 150
  },
  {
    name: "랜턴",
    number: 171,
    poketype: "라이트포켓몬",
    description:
      "심해의 별이라 불리는 포켓몬이다. 촉수 안의 박테리아와 체액을 화학 반응시켜서 빛을 만든다.",
    types: ["물", "전기"],
    atk: 146,
    def: 146,
    hp: 250
  },
  {
    name: "피츄",
    number: 172,
    poketype: "아기쥐포켓몬",
    description:
      "번개 구름이 있을 때나 공기가 건조한 날은 전기가 쉽게 모인다. 타다닥 정전기 소리가 난다.",
    types: ["전기"],
    atk: 77,
    def: 63,
    hp: 40
  },
  {
    name: "삐",
    number: 173,
    poketype: "별포켓몬",
    description:
      "별똥별이 많은 밤에는 둥글게 모여 춤추는 삐의 모습을 볼 수 있다. 일출 때까지 춤추며 밤이슬로 목을 축인다.",
    types: ["페어리"],
    atk: 75,
    def: 91,
    hp: 100
  },
  {
    name: "푸푸린",
    number: 174,
    poketype: "풍선포켓몬",
    description:
      "성대가 아직 충분히 발달하지 않아 계속 노래 부르면 목이 아프다. 깨끗한 시냇물로 양치질한다.",
    types: ["노말", "페어리"],
    atk: 69,
    def: 34,
    hp: 180
  },
  {
    name: "토게피",
    number: 175,
    poketype: "바늘알포켓몬",
    description:
      "사람이나 포켓몬이 발산하는 상냥함이나 즐거운 마음을 에너지로 삼는다. 껍질 안에 모은 행복을 나눈다.",
    types: ["페어리"],
    atk: 67,
    def: 116,
    hp: 70
  },
  {
    name: "토게틱",
    number: 176,
    poketype: "행복포켓몬",
    description:
      "행운을 가져다주는 포켓몬이라고 전해진다. 순수한 마음을 지닌 자를 발견하면 모습을 드러내고 행복을 나누어준다.",
    types: ["페어리", "비행"],
    atk: 139,
    def: 191,
    hp: 110
  },
  {
    name: "네이티",
    number: 177,
    poketype: "아기새포켓몬",
    description:
      "날개가 아직 자라지 않아 날 수 없다. 눈을 마주치면 가만히 쳐다보지만 상대가 조금이라도 움직이면 뛰어올라 도망간다.",
    types: ["에스퍼", "비행"],
    atk: 134,
    def: 89,
    hp: 80
  },
  {
    name: "네이티오",
    number: 178,
    poketype: "정령포켓몬",
    description:
      "온종일 네이티오가 꼼짝하지 않는 것은 미래예지로 알게 된 무서운 사건에 겁을 먹고 있기 때문이라고 믿어지고 있다.",
    types: ["에스퍼", "비행"],
    atk: 192,
    def: 146,
    hp: 130
  },
  {
    name: "메리프",
    number: 179,
    poketype: "솜털포켓몬",
    description:
      "털의 마찰로 정전기가 모인다. 전력이 많이 모일수록 꼬리 끝에 붙은 전구가 밝게 빛난다.",
    types: ["전기"],
    atk: 114,
    def: 82,
    hp: 110
  },
  {
    name: "보송송",
    number: 180,
    poketype: "솜털포켓몬",
    description:
      "털의 성질이 변화하기 때문에 적은 양으로도 많은 전기를 만들어낸다. 전기를 차단하는 반질반질한 피부를 가졌다.",
    types: ["전기"],
    atk: 145,
    def: 112,
    hp: 140
  },
  {
    name: "전룡",
    number: 181,
    poketype: "라이트포켓몬",
    description:
      "전룡의 빛은 우주에서도 보인다. 옛날 사람은 전룡의 빛을 써서 멀리 있는 동료와 신호를 주고받았다.",
    types: ["전기"],
    atk: 211,
    def: 172,
    hp: 180
  },
  {
    name: "아르코",
    number: 182,
    poketype: "꽃포켓몬",
    description:
      "태양의 빛을 잔뜩 받으면 몸의 잎사귀가 빙글빙글 돌기 시작한다. 아르코의 춤은 남쪽 나라의 명물이다.",
    types: ["풀"],
    atk: 169,
    def: 189,
    hp: 150
  },
  {
    name: "마릴",
    number: 183,
    poketype: "물쥐포켓몬",
    description:
      "기름이 가득한 꼬리는 튜브 대용이다. 수면에 꼬리만 떠 있을 때는 잠수하여 물풀을 먹고 있다는 표시다.",
    types: ["물", "페어리"],
    atk: 37,
    def: 93,
    hp: 140
  },
  {
    name: "마릴리",
    number: 184,
    poketype: "물토끼포켓몬",
    description:
      "긴 귀는 마릴리의 중요한 센서다. 귀를 기울이면 물살이 격한 강에서도 그곳에 있는 먹이의 종류를 안다.",
    types: ["물", "페어리"],
    atk: 112,
    def: 152,
    hp: 200
  },
  {
    name: "꼬지모",
    number: 185,
    poketype: "흉내포켓몬",
    description:
      "적에게 습격당하지 않으려 나무인 척한다. 양손이 일 년 내내 초록빛이라 겨울에는 가짜임이 바로 들통 난다.",
    types: ["바위"],
    atk: 167,
    def: 198,
    hp: 140
  },
  {
    name: "왕구리",
    number: 186,
    poketype: "개구리포켓몬",
    description:
      "머리의 말린 머리칼은 왕의 징표이다. 길고 아름답게 말린 왕구리일수록 동료에게 존경받는다고 전해진다.",
    types: ["물"],
    atk: 174,
    def: 192,
    hp: 180
  },
  {
    name: "통통코",
    number: 187,
    poketype: "솜풀포켓몬",
    description:
      "바람을 타고 둥둥 떠다니는 포켓몬이다. 강풍의 기척을 느끼면 동료끼리 잎사귀를 휘감아 날아가지 않도록 준비한다.",
    types: ["풀", "비행"],
    atk: 67,
    def: 101,
    hp: 70
  },
  {
    name: "두코",
    number: 188,
    poketype: "솜풀포켓몬",
    description:
      "기온이 18도를 넘으면 꽃이 핀다. 온도에 따라 꽃이 피는 모습이 바뀌어서 온도계 대신 쓰기도 한다.",
    types: ["풀", "비행"],
    atk: 91,
    def: 127,
    hp: 110
  },
  {
    name: "솜솜코",
    number: 189,
    poketype: "솜풀포켓몬",
    description:
      "따뜻한 남풍을 타고 바다를 건너 외국까지 날아가는 포켓몬이다. 차가운 공기에 닿으면 땅에 내려온다.",
    types: ["풀", "비행"],
    atk: 118,
    def: 197,
    hp: 150
  },
  {
    name: "에이팜",
    number: 190,
    poketype: "긴꼬리포켓몬",
    description:
      "능숙하게 움직이는 꼬리 끝을 손바닥 대신 사용하다 보니 반대로 양손이 둔해져 버린 포켓몬이다.",
    types: ["노말"],
    atk: 136,
    def: 112,
    hp: 110
  },
  {
    name: "해너츠",
    number: 191,
    poketype: "씨앗포켓몬",
    description:
      "몸에 모은 영양을 진화할 때까지 간직하기 위해 거의 움직이려 하지 않는다. 아무것도 먹지 않고 아침 이슬만 마시고 있다.",
    types: ["풀"],
    atk: 55,
    def: 55,
    hp: 60
  },
  {
    name: "해루미",
    number: 192,
    poketype: "태양포켓몬",
    description:
      "태양 에너지에서 영양을 만들어낸다. 기온이 높은 낮에는 활발하게 움직이고 태양이 지면 뚝 하니 움직이지 않게 된다.",
    types: ["풀"],
    atk: 185,
    def: 148,
    hp: 150
  },
  {
    name: "왕자리",
    number: 193,
    poketype: "얇은날개포켓몬",
    description:
      "눈알을 움직이지 않고 360도를 볼 수 있다. 급브레이크나 방향 전환이 특기다. 노린 먹이를 빠르게 몰아넣는다.",
    types: ["벌레", "비행"],
    atk: 154,
    def: 94,
    hp: 130
  },
  {
    name: "우파",
    number: 194,
    poketype: "수어포켓몬",
    description:
      "평상시엔 물속에서 지내지만 먹이를 찾거나 할 때는 가끔 지상에 나온다. 땅에서는 독 점액으로 몸을 둘러싼다.",
    types: ["물", "땅"],
    atk: 75,
    def: 75,
    hp: 110
  },
  {
    name: "누오",
    number: 195,
    poketype: "수어포켓몬",
    description:
      "물속에서 입을 열고 우연히 먹이가 뛰어들기를 그저 기다리고 있다. 움직이지 않기에 별로 배가 안 고프다.",
    types: ["물", "땅"],
    atk: 152,
    def: 152,
    hp: 190
  },
  {
    name: "에브이",
    number: 196,
    poketype: "태양포켓몬",
    description:
      "인정한 트레이너에게는 극히 충실하다. 트레이너를 위험에서 지키기 위해 예지능력이 발달했다고 전해진다.",
    types: ["에스퍼"],
    atk: 261,
    def: 194,
    hp: 130
  },
  {
    name: "블래키",
    number: 197,
    poketype: "달빛포켓몬",
    description:
      "달의 파동을 받아 진화한 포켓몬이다. 어둠 속에 가만히 숨어 상대를 살핀다. 습격할 때 몸의 둥근 무늬가 빛난다.",
    types: ["악"],
    atk: 126,
    def: 250,
    hp: 190
  },
  {
    name: "니로우",
    number: 198,
    poketype: "어둠포켓몬",
    description:
      "불행을 가져온다고 하여 두려움의 대상이었다. 반짝반짝 빛나는 것에 흥미를 보이며 여성의 반지를 가져가려 한다.",
    types: ["악", "비행"],
    atk: 175,
    def: 87,
    hp: 120
  },
  {
    name: "야도킹",
    number: 199,
    poketype: "임금포켓몬",
    description:
      "세계의 불가사의를 밝혀내기 위해 매일 연구하고 있지만 머리에 있는 셀러가 벗겨지면 전부 잊어버리는 것 같다.",
    types: ["물", "에스퍼"],
    atk: 177,
    def: 194,
    hp: 190
  },
  {
    name: "무우마",
    number: 200,
    poketype: "야명포켓몬",
    description:
      "흐느껴 우는 듯한 울음소리로 겁을 준다. 상대의 두려워하는 마음을 빨간 구슬로 흡수하여 영양분으로 삼는 것 같다.",
    types: ["고스트"],
    atk: 167,
    def: 167,
    hp: 120
  },
  {
    name: "안농",
    number: 201,
    poketype: "심볼포켓몬",
    description:
      "고대 문자를 닮은 모습의 포켓몬이다. 먼저 생겨난 것은 문자인가 안농인가. 연구 중이지만 아직도 수수께끼다.",
    types: ["에스퍼"],
    atk: 136,
    def: 91,
    hp: 96
  },
  {
    name: "마자용",
    number: 202,
    poketype: "참기포켓몬",
    description:
      "두 마리 이상 모이면 참기 겨루기를 시작하는데 배고픔도 참아버리기 때문에 마자용 트레이너는 주의가 필요하다.",
    types: ["에스퍼"],
    atk: 60,
    def: 106,
    hp: 380
  },
  {
    name: "키링키",
    number: 203,
    poketype: "긴목포켓몬",
    description:
      "꼬리의 머리에도 작은 뇌가 있다. 냄새나 소리에 반응하여 공격하기 때문에 뒤에서 접근하면 느닷없이 물린다.",
    types: ["노말", "에스퍼"],
    atk: 182,
    def: 133,
    hp: 140
  },
  {
    name: "피콘",
    number: 204,
    poketype: "도롱이벌레포켓몬",
    description:
      "나뭇가지에 매달려 먹이를 기다린다. 나무가 흔들려 식사를 방해받으면 땅으로 떨어진 후 느닷없이 폭발한다.",
    types: ["벌레"],
    atk: 108,
    def: 146,
    hp: 100
  },
  {
    name: "쏘콘",
    number: 205,
    poketype: "도롱이벌레포켓몬",
    description:
      "강철 껍질 안에 본체가 있다. 먹이를 잡을 때 껍질이 열리지만 너무 빨라서 안이 보이진 않는다.",
    types: ["벌레", "강철"],
    atk: 161,
    def: 242,
    hp: 150
  },
  {
    name: "노고치",
    number: 206,
    poketype: "땅뱀포켓몬",
    description:
      "드릴 꼬리를 사용해서 뒤쪽을 향해 땅을 파고 들어가 복잡한 형태의 둥지를 땅속 깊이 만드는 포켓몬이다.",
    types: ["노말"],
    atk: 131,
    def: 131,
    hp: 200
  },
  {
    name: "글라이거",
    number: 207,
    poketype: "날전갈포켓몬",
    description:
      "소리 내지 않고 미끄러지듯 활공한다. 양손의 커다란 손톱과 발의 발톱으로 먹이의 얼굴에 달라붙어 독침을 찌른다.",
    types: ["땅", "비행"],
    atk: 143,
    def: 204,
    hp: 130
  },
  {
    name: "강철톤",
    number: 208,
    poketype: "철뱀포켓몬",
    description:
      "롱스톤보다 깊은 땅속에 살고 있다. 지구의 중심을 향해 파고들어 가서 깊이가 1km에 달하기도 한다.",
    types: ["강철", "땅"],
    atk: 148,
    def: 333,
    hp: 150
  },
  {
    name: "블루",
    number: 209,
    poketype: "",
    description:
      "이빨을 드러내고 무서운 얼굴을 하면 작은 포켓몬은 겁을 먹고 도망친다. 남겨진 블루는 조금 외로워 보인다.",
    types: ["페어리"],
    atk: 137,
    def: 89,
    hp: 120
  },
  {
    name: "그랑블루",
    number: 210,
    poketype: "",
    description:
      "아래턱이 매우 발달한 포켓몬이다. 이빨이 무거워서 목을 기울이고 있다. 놀라게 하지 않으면 무턱대고 물지 않는다.",
    types: ["페어리"],
    atk: 212,
    def: 137,
    hp: 180
  },
  {
    name: "침바루",
    number: 211,
    poketype: "",
    description:
      "들이마신 물의 힘을 이용하여 전신의 독침을 일제히 쏘아댄다. 헤엄치는 것이 조금 서툰 포켓몬이다.",
    types: ["물", "독"],
    atk: 184,
    def: 148,
    hp: 130
  },
  {
    name: "핫삼",
    number: 212,
    poketype: "",
    description:
      "강철의 강도를 지닌 몸은 어지간한 공격으로는 꿈쩍도 하지 않는다. 날갯짓으로 체온을 조절한다.",
    types: ["벌레", "강철"],
    atk: 236,
    def: 191,
    hp: 140
  },
  {
    name: "단단지",
    number: 213,
    poketype: "",
    description:
      "바위 밑에서 껍질 안에 비축해둔 나무열매를 먹으면서 몸을 숨기고 있다. 나무열매는 체액과 섞여 주스가 된다.",
    types: ["벌레", "바위"],
    atk: 17,
    def: 396,
    hp: 40
  },
  {
    name: "헤라크로스",
    number: 214,
    poketype: "",
    description:
      "똑바로 적에게 돌격하여 강인한 뿔로 들어 올려 내던진다. 큰 나무도 뿌리째 뽑아 쓰러트릴 만한 파워다.",
    types: ["벌레", "격투"],
    atk: 234,
    def: 189,
    hp: 160
  },
  {
    name: "포푸니",
    number: 215,
    poketype: "",
    description:
      "손발의 갈고리 손발톱을 꽂아 나무를 오른다. 부모가 없는 틈을 노려 나무 위에 있는 둥지에서 알을 훔쳐 먹는다.",
    types: ["악", "얼음"],
    atk: 189,
    def: 157,
    hp: 110
  },
  {
    name: "깜지곰",
    number: 216,
    poketype: "",
    description:
      "꿀이 밴 손바닥을 핥고 있다. 깜지곰의 꿀은 과일과 독침붕이 모은 꽃가루가 혼합되어 만들어진다.",
    types: ["노말"],
    atk: 142,
    def: 93,
    hp: 120
  },
  {
    name: "링곰",
    number: 217,
    poketype: "",
    description:
      "숲 속에는 링곰이 먹이를 수집하는 큰 나무나 시냇가가 여기저기에 있다고 한다. 매일 먹이를 모으며 숲을 걷는다.",
    types: ["노말"],
    atk: 236,
    def: 144,
    hp: 180
  },
  {
    name: "마그마그",
    number: 218,
    poketype: "",
    description:
      "몸 안에는 작열하는 용암이 소용돌이치지만 식으면 굳어지고 부서져서 몸이 작아진다.",
    types: ["불꽃"],
    atk: 118,
    def: 71,
    hp: 80
  },
  {
    name: "마그카르고",
    number: 219,
    poketype: "",
    description:
      "껍질은 피부가 식어 굳어진 것이다. 만지기만 해도 산산이 부서져 버린다. 마그마에 들어가면 원래 크기로 돌아온다.",
    types: ["불꽃", "바위"],
    atk: 139,
    def: 209,
    hp: 100
  },
  {
    name: "꾸꾸리",
    number: 220,
    poketype: "",
    description:
      "땅에 코를 비비며 먹이를 찾는다. 마른 풀 밑에 난 버섯을 좋아한다. 가끔 온천을 파내기도 한다.",
    types: ["얼음", "땅"],
    atk: 90,
    def: 74,
    hp: 100
  },
  {
    name: "메꾸리",
    number: 221,
    poketype: "",
    description:
      "얼어붙는 추위에도 버틸 수 있도록 두껍고 긴 털가죽에 덮여 있다. 얼음에 묻힌 먹이를 이빨로 파낸다.",
    types: ["얼음", "땅"],
    atk: 181,
    def: 147,
    hp: 200
  },
  {
    name: "코산호",
    number: 222,
    poketype: "",
    description:
      "산호 가지는 태양의 빛을 받으면 일곱 빛깔로 반짝반짝 빛이 나 정말 아름답다. 부러져도 하룻밤이면 원래대로 자라난다.",
    types: ["물", "바위"],
    atk: 118,
    def: 156,
    hp: 110
  },
  {
    name: "총어",
    number: 223,
    poketype: "",
    description:
      "복근을 이용하여 마신 물을 힘차게 뿜어내서 하늘을 나는 먹이를 잡는다. 진화가 가까워지면 강을 따라 내려간다.",
    types: ["물"],
    atk: 127,
    def: 69,
    hp: 70
  },
  {
    name: "대포무노",
    number: 224,
    poketype: "",
    description:
      "흡반이 달린 팔로 상대를 휘감는다. 움직이지 못하게 되면 쓰러트린다. 버거울 때는 먹물을 뿜고 도망간다.",
    types: ["물"],
    atk: 197,
    def: 141,
    hp: 150
  },
  {
    name: "딜리버드",
    number: 225,
    poketype: "",
    description:
      "꼬리로 먹이를 둘러싸서 나르는 포켓몬이다. 딜리버드가 나눠준 먹이 덕분에 에베레스트 산을 등정한 모험가가 있었다.",
    types: ["얼음", "비행"],
    atk: 128,
    def: 90,
    hp: 90
  },
  {
    name: "만타인",
    number: 226,
    poketype: "",
    description:
      "맑은 날에는 바다 위를 우아하게 뛰어오르는 만타인 무리를 볼 수 있다. 총어가 들러붙어 있어도 신경 쓰지 않는다.",
    types: ["물", "비행"],
    atk: 148,
    def: 260,
    hp: 130
  },
  {
    name: "무장조",
    number: 227,
    poketype: "",
    description:
      "전신이 단단한 갑옷으로 둘러싸여 있다. 시속 300km의 스피드로 하늘을 날아 칼날 같은 날카로운 날개로 베어낸다.",
    types: ["강철", "비행"],
    atk: 148,
    def: 260,
    hp: 130
  },
  {
    name: "델빌",
    number: 228,
    poketype: "",
    description:
      "여러 가지 울음소리를 사용하여 동료와 연락을 주고받아 먹이를 몰아간다. 팀워크는 포켓몬 중 제일이다.",
    types: ["악", "불꽃"],
    atk: 152,
    def: 93,
    hp: 90
  },
  {
    name: "헬가",
    number: 229,
    poketype: "",
    description:
      "머리의 뿔이 크게 뒤로 꺾여 있는 헬가가 그룹의 리더 격인 존재다. 동료 간에 경쟁하여 리더가 결정된다.",
    types: ["악", "불꽃"],
    atk: 224,
    def: 159,
    hp: 150
  },
  {
    name: "킹드라",
    number: 230,
    poketype: "",
    description:
      "생물이 살지 않는 심해에 서식한다. 킹드라의 하품이 해류의 소용돌이를 일으킨다고 오랫동안 믿어져 왔다.",
    types: ["물", "드래곤"],
    atk: 194,
    def: 194,
    hp: 150
  },
  {
    name: "코코리",
    number: 231,
    poketype: "",
    description:
      "강 근처에 수직으로 구멍을 파고 산다. 사는 곳 가까이에 코의 표시를 남겨 자신의 장소라고 동료에게 알리고 있다.",
    types: ["땅"],
    atk: 107,
    def: 107,
    hp: 180
  },
  {
    name: "코리갑",
    number: 232,
    poketype: "",
    description:
      "몸을 둥글게 말아 고속 회전하며 상대에게 돌진하는 공격이 특기다. 구르기 시작하면 어지간해서는 멈출 수 없다.",
    types: ["땅"],
    atk: 214,
    def: 214,
    hp: 180
  },
  {
    name: "폴리곤2",
    number: 233,
    poketype: "",
    description:
      "인간이 과학의 힘으로 만들어냈다. 인공 지능을 지니고 있어서 새로운 동작이나 감정을 혼자서 익혀간다.",
    types: ["노말"],
    atk: 198,
    def: 183,
    hp: 170
  },
  {
    name: "노라키",
    number: 234,
    poketype: "",
    description:
      "멋지게 생긴 뿔은 미술품으로 비싸게 팔리기 때문에 멸종 직전까지 남획됐었던 포켓몬이다.",
    types: ["노말"],
    atk: 192,
    def: 132,
    hp: 146
  },
  {
    name: "루브도",
    number: 235,
    poketype: "",
    description:
      "꼬리 끝에서 배어 나오는 체액으로 영역 주변에 자신의 마크를 그린다. 5000종의 마크가 발견됐다.",
    types: ["노말"],
    atk: 40,
    def: 88,
    hp: 110
  },
  {
    name: "배루키",
    number: 236,
    poketype: "",
    description:
      "매일 트레이닝하지 않으면 스트레스가 쌓이기 때문에 트레이너는 키울 때 스케줄 관리에 여러모로 고민해야 한다.",
    types: ["격투"],
    atk: 64,
    def: 64,
    hp: 70
  },
  {
    name: "카포에라",
    number: 237,
    poketype: "",
    description:
      "고속 회전하며 날리는 킥은 공격과 방어를 겸비한 훌륭한 기술이다. 걷는 것보다 회전하는 편이 빠르다.",
    types: ["격투"],
    atk: 173,
    def: 214,
    hp: 100
  },
  {
    name: "뽀뽀라",
    number: 238,
    poketype: "",
    description:
      "기운차게 돌아다니지만 자주 넘어진다. 벌떡 일어나서는 호수의 수면에 얼굴을 비추고 더러워지지 않았는지 살핀다.",
    types: ["얼음", "에스퍼"],
    atk: 153,
    def: 116,
    hp: 90
  },
  {
    name: "에레키드",
    number: 239,
    poketype: "",
    description:
      "금속을 만져서 몸에 모은 전기가 방전돼버리면 양손을 빙글빙글 돌려서 다시 전기를 모은다.",
    types: ["전기"],
    atk: 135,
    def: 110,
    hp: 90
  },
  {
    name: "마그비",
    number: 240,
    poketype: "",
    description:
      "노란색 불꽃이 입에서 뿜어져 나오는 것은 건강하다는 증거이지만 지쳐 있을 때는 검은 연기가 섞이게 된다.",
    types: ["불꽃"],
    atk: 151,
    def: 108,
    hp: 90
  },
  {
    name: "밀탱크",
    number: 241,
    poketype: "",
    description:
      "매일 20리터의 우유가 나온다. 달콤한 우유는 어른도 아이도 매우 좋아한다. 싫어하는 사람은 요구르트로 만들어 먹는다.",
    types: ["노말"],
    atk: 157,
    def: 211,
    hp: 190
  },
  {
    name: "해피너스",
    number: 242,
    poketype: "",
    description:
      "푹신푹신한 털로 슬퍼하는 마음을 감지하면 아무리 멀어도 바로 달려가서 미소 짓게 되는 행복의알을 나눠준다.",
    types: ["노말"],
    atk: 129,
    def: 229,
    hp: 510
  },
  {
    name: "라이코",
    number: 243,
    poketype: "",
    description:
      "번개의 스피드가 깃들어 있는 포켓몬이다. 그 울음소리는 번개가 내리쳤을 때처럼 공기를 떨리게 하며 대지를 흔든다.",
    types: ["전기"],
    atk: 241,
    def: 210,
    hp: 180
  },
  {
    name: "앤테이",
    number: 244,
    poketype: "",
    description:
      "마그마의 정열이 깃들어 있는 포켓몬이다. 화산 분화 속에서 태어났다고 여겨지며 모든 것을 태워버리는 불꽃을 뿜어 올린다.",
    types: ["불꽃"],
    atk: 235,
    def: 176,
    hp: 230
  },
  {
    name: "스이쿤",
    number: 245,
    poketype: "",
    description:
      "솟아나는 물의 부드러움이 깃들어 있는 포켓몬이다. 흐르는 듯한 몸놀림으로 대지를 달려 탁해진 물을 맑게 하는 힘을 지녔다.",
    types: ["물"],
    atk: 180,
    def: 235,
    hp: 200
  },
  {
    name: "애버라스",
    number: 246,
    poketype: "",
    description:
      "땅속 깊은 곳에서 태어나는 애버라스는 흙을 먹어치우고 지상에 나오지 않으면 부모의 얼굴을 볼 수가 없다.",
    types: ["바위", "땅"],
    atk: 115,
    def: 93,
    hp: 100
  },
  {
    name: "데기라스",
    number: 247,
    poketype: "",
    description:
      "체내에서 만들어낸 가스를 압축하여 기운차게 분사해서 날아간다. 강철에 부딪혀도 멀쩡한 몸이다.",
    types: ["바위", "땅"],
    atk: 155,
    def: 133,
    hp: 140
  },
  {
    name: "마기라스",
    number: 248,
    poketype: "",
    description:
      "자신의 거처를 만들기 위해 산 하나를 부숴버릴 정도로 강한 파워를 지녔다. 싸울 상대를 찾아 산을 떠돈다.",
    types: ["바위", "악"],
    atk: 251,
    def: 212,
    hp: 200
  },
  {
    name: "루기아",
    number: 249,
    poketype: "",
    description:
      "가벼운 날갯짓만으로도 민가를 날려버릴 만한 파괴력을 지니고 있어서 해저에서 사람들 몰래 살게 됐다.",
    types: ["에스퍼", "비행"],
    atk: 193,
    def: 323,
    hp: 212
  },
  {
    name: "칠색조",
    number: 250,
    poketype: "",
    description:
      "빛이 닿는 각도에 따라 일곱 빛깔로 반짝이는 깃털은 행복을 가져다준다고 한다. 무지개 끝에 산다고 전해진다.",
    types: ["불꽃", "비행"],
    atk: 239,
    def: 274,
    hp: 193
  },
  {
    name: "세레비",
    number: 251,
    poketype: "",
    description:
      "시간을 넘어 미래에서 찾아온 포켓몬이다. 세레비가 모습을 나타내는 한 밝은 미래가 기다린다고 여겨지고 있다.",
    types: ["에스퍼", "풀"],
    atk: 210,
    def: 210,
    hp: 200
  },
  {
    name: "나무지기",
    number: 252,
    poketype: "",
    description:
      "다리 뒤의 작은 가시를 박아 수직인 벽을 올라갈 수 있다. 굵은 꼬리로 힘껏 쳐서 공격한다.",
    types: ["풀"],
    atk: 124,
    def: 104,
    hp: 80
  },
  {
    name: "나무돌이",
    number: 253,
    poketype: "",
    description:
      "몸에서 난 잎사귀는 숲 속에서 적으로부터 몸을 숨길 때 편리하다. 밀림에 사는 나무 타기의 명수다.",
    types: ["풀"],
    atk: 172,
    def: 130,
    hp: 100
  },
  {
    name: "나무킹",
    number: 254,
    poketype: "",
    description:
      "몸에 난 잎사귀는 예리한 칼과 같다. 빠른 몸놀림으로 나뭇가지를 뛰어다니며 적의 머리 위나 배후에서 덮친다.",
    types: ["풀"],
    atk: 223,
    def: 180,
    hp: 140
  },
  {
    name: "아차모",
    number: 255,
    poketype: "",
    description:
      "트레이너에게 바짝 붙어 아장아장 걷는다. 입에서 날리는 불꽃은 섭씨 1000도다. 상대를 새까맣게 태우는 작열하는 불덩이다.",
    types: ["불꽃"],
    atk: 130,
    def: 92,
    hp: 90
  },
  {
    name: "영치코",
    number: 256,
    poketype: "",
    description:
      "산과 들을 뛰어다니며 하반신을 단련한다. 스피드와 파워를 겸비한 다리는 1초에 10번 킥을 날린다.",
    types: ["불꽃", "격투"],
    atk: 163,
    def: 115,
    hp: 120
  },
  {
    name: "번치코",
    number: 257,
    poketype: "",
    description:
      "싸우게 되면 손목에서 작열하는 불꽃을 뿜어 올려 용감히 덤벼든다. 상대가 버거울수록 강렬히 불타오른다.",
    types: ["불꽃", "격투"],
    atk: 240,
    def: 141,
    hp: 160
  },
  {
    name: "물짱이",
    number: 258,
    poketype: "",
    description:
      "머리의 지느러미는 매우 민감한 레이더다. 물이나 공기의 움직임을 통해 눈을 쓰지 않고 주변의 상황을 알아낼 수 있다.",
    types: ["물"],
    atk: 126,
    def: 93,
    hp: 100
  },
  {
    name: "늪짱이",
    number: 259,
    poketype: "",
    description:
      "지상에서도 생활할 수 있도록 몸의 표면을 얇은 점막이 둘러싸고 있다. 썰물이 된 해안에서 흙놀이를 한다.",
    types: ["물", "땅"],
    atk: 156,
    def: 133,
    hp: 140
  },
  {
    name: "대짱이",
    number: 260,
    poketype: "",
    description:
      "무게 1톤 이상인 바위 덩어리를 가볍게 잡아당기는 파워를 지닌 포켓몬이다. 탁해진 물속도 들여다볼 수 있는 시력을 지녔다.",
    types: ["물", "땅"],
    atk: 208,
    def: 175,
    hp: 200
  },
  {
    name: "포챠나",
    number: 261,
    poketype: "",
    description:
      "움직이는 것을 발견하면 바로 문다. 먹이가 기진맥진해질 때까지 쫓아다니지만 반격당하면 뒷걸음치기도 한다.",
    types: ["악"],
    atk: 96,
    def: 63,
    hp: 70
  },
  {
    name: "그라에나",
    number: 262,
    poketype: "",
    description:
      "사납게 으르렁거리는 소리를 내며 자세를 낮추고 있는 것은 공격의 전조이다. 날카롭고 뾰족한 이빨로 덥석 문다.",
    types: ["악"],
    atk: 171,
    def: 137,
    hp: 140
  },
  {
    name: "지그제구리",
    number: 263,
    poketype: "",
    description:
      "항상 이쪽저쪽 지그재그로 걷는 것은 호기심이 매우 강해서 눈에 비친 여러 가지 것들에 흥미를 느끼기 때문이다.",
    types: ["노말"],
    atk: 58,
    def: 80,
    hp: 76
  },
  {
    name: "직구리",
    number: 264,
    poketype: "",
    description:
      "똑바로 힘껏 달리며 장애물이 있을 때는 직각으로 꺾어서 피한다. 완만하게 굽은 길은 달리는 데 매우 서툴다.",
    types: ["노말"],
    atk: 142,
    def: 128,
    hp: 156
  },
  {
    name: "개무소",
    number: 265,
    poketype: "",
    description:
      "엉덩이의 가시로 나무의 껍질을 벗기고 배어 나온 수액을 식량으로 삼는다. 흡반이 달린 다리는 유리에서도 미끄러지지 않는다.",
    types: ["벌레"],
    atk: 75,
    def: 61,
    hp: 90
  },
  {
    name: "실쿤",
    number: 266,
    poketype: "",
    description:
      "떨어지지 않도록 실을 가지에 휘감아서 몸을 지탱하며 진화를 기다리고 있다. 작은 구멍을 통해 밖의 상황을 살핀다.",
    types: ["벌레"],
    atk: 60,
    def: 91,
    hp: 100
  },
  {
    name: "뷰티플라이",
    number: 267,
    poketype: "",
    description:
      "달콤한 꽃가루를 매우 좋아하는 포켓몬이다. 꽃이 핀 화분을 창가에 두면 꽃가루를 모으려고 반드시 날아온다.",
    types: ["벌레", "비행"],
    atk: 189,
    def: 98,
    hp: 120
  },
  {
    name: "카스쿤",
    number: 268,
    poketype: "",
    description:
      "카스쿤의 몸은 입에서 나온 가는 실이 몸을 둘러싸 딱딱해진 것이다. 고치 안에서 진화의 준비를 하고 있다.",
    types: ["벌레"],
    atk: 60,
    def: 91,
    hp: 100
  },
  {
    name: "독케일",
    number: 269,
    poketype: "",
    description:
      "불빛에 이끌리는 습성을 지녔다. 거리의 불빛에 유인된 독케일 무리가 가로수의 잎을 어지르며 먹어버린다.",
    types: ["벌레", "독"],
    atk: 98,
    def: 172,
    hp: 120
  },
  {
    name: "연꽃몬",
    number: 270,
    poketype: "",
    description:
      "연못이나 호수의 수면에 떠서 산다. 잎사귀가 마르면 약해지지만 깨끗한 물을 찾아 가끔 육지로 이동한다.",
    types: ["물", "풀"],
    atk: 71,
    def: 86,
    hp: 80
  },
  {
    name: "로토스",
    number: 271,
    poketype: "",
    description:
      "해 질 무렵이 되면 활동하는 야행성이다. 낚시꾼을 발견하면 물속에서 줄을 당겨 방해하고선 기뻐한다.",
    types: ["물", "풀"],
    atk: 112,
    def: 128,
    hp: 120
  },
  {
    name: "로파파",
    number: 272,
    poketype: "",
    description:
      "경쾌한 음악을 들으면 춤춘다. 하이킹하는 아이들의 합창에 이끌려 모습을 나타낸다고 전해진다.",
    types: ["물", "풀"],
    atk: 173,
    def: 191,
    hp: 160
  },
  {
    name: "도토링",
    number: 273,
    poketype: "",
    description:
      "머리의 정수리를 나뭇가지에 붙이고 매달려 수분을 빨아들이고 있다. 물을 마실수록 몸이 반들반들 빛난다.",
    types: ["풀"],
    atk: 71,
    def: 86,
    hp: 80
  },
  {
    name: "잎새코",
    number: 274,
    poketype: "",
    description:
      "울창하게 우거진 숲에 사는 포켓몬이다. 가끔 숲을 나와 사람들을 놀라게 한다. 긴 코가 잡히는 걸 매우 싫어한다.",
    types: ["풀", "악"],
    atk: 134,
    def: 78,
    hp: 140
  },
  {
    name: "다탱구",
    number: 275,
    poketype: "",
    description:
      "수령 1000년을 넘은 큰 나무 꼭대기에 산다고 전해지는 불가사의한 포켓몬이다. 잎사귀 부채로 강풍을 일으킨다.",
    types: ["풀", "악"],
    atk: 200,
    def: 121,
    hp: 180
  },
  {
    name: "테일로",
    number: 276,
    poketype: "",
    description:
      "아무리 강한 상대라도 용감히 맞선다. 져도 주저앉지 않는 근성의 소유자다. 배가 고프면 큰 소리로 운다.",
    types: ["노말", "비행"],
    atk: 106,
    def: 61,
    hp: 80
  },
  {
    name: "스왈로",
    number: 277,
    poketype: "",
    description:
      "높은 상공을 원을 그리듯 날아다니다 먹이를 발견하면 급강하한다. 발톱으로 단단히 잡고 놓치지 않는다.",
    types: ["노말", "비행"],
    atk: 185,
    def: 130,
    hp: 120
  },
  {
    name: "갈모매",
    number: 278,
    poketype: "",
    description:
      "먹이나 소중한 것을 부리에 끼우고 여러 장소에 숨기는 습성을 지녔다. 바람을 타고 미끄러지듯 하늘을 난다.",
    types: ["물", "비행"],
    atk: 106,
    def: 61,
    hp: 80
  },
  {
    name: "패리퍼",
    number: 279,
    poketype: "",
    description:
      "작은 포켓몬이나 알을 부리에 넣고 나르는 하늘의 운반자다. 바닷가의 험한 절벽에 둥지를 만든다.",
    types: ["물", "비행"],
    atk: 175,
    def: 189,
    hp: 120
  },
  {
    name: "랄토스",
    number: 280,
    poketype: "",
    description:
      "머리의 뿔로 사람의 기분을 감지한다. 사람 앞에는 좀처럼 모습을 나타내지 않지만 긍정적인 기분을 캐치하면 다가온다.",
    types: ["에스퍼", "페어리"],
    atk: 79,
    def: 63,
    hp: 56
  },
  {
    name: "킬리아",
    number: 281,
    poketype: "",
    description:
      "트레이너의 긍정적인 감정에 닿은 킬리아는 아름답게 성장한다고 한다. 발달한 뇌로 사이코 파워를 다룬다.",
    types: ["에스퍼", "페어리"],
    atk: 117,
    def: 100,
    hp: 76
  },
  {
    name: "가디안",
    number: 282,
    poketype: "",
    description:
      "미래를 예지하는 능력으로 트레이너의 위험을 감지했을 때 최대 파워의 사이코 에너지를 사용한다고 전해진다.",
    types: ["에스퍼", "페어리"],
    atk: 237,
    def: 220,
    hp: 136
  },
  {
    name: "비구술",
    number: 283,
    poketype: "",
    description:
      "발끝에서 기름이 배어 나와 물 위를 미끄러지듯 걸을 수 있다. 연못이나 호수의 미생물을 먹고 있다.",
    types: ["벌레", "물"],
    atk: 93,
    def: 97,
    hp: 80
  },
  {
    name: "비나방",
    number: 284,
    poketype: "",
    description:
      "더듬이의 눈알 무늬로 적을 위협한다. 4개의 날개를 사용하여 헬리콥터처럼 공중에서 전후좌우로 자유롭게 나아간다.",
    types: ["벌레", "비행"],
    atk: 192,
    def: 161,
    hp: 140
  },
  {
    name: "버섯꼬",
    number: 285,
    poketype: "",
    description:
      "깊은 숲의 축축한 땅에 서식한다. 낙엽 밑에서 꼼짝하지 않고 있을 때가 많다. 낙엽이 쌓여 만들어진 부엽토를 먹는다.",
    types: ["풀"],
    atk: 74,
    def: 110,
    hp: 120
  },
  {
    name: "버섯모",
    number: 286,
    poketype: "",
    description:
      "경쾌한 풋워크로 적에게 다가가 늘었다 줄었다 하는 팔로 펀치를 날린다. 복서가 무색할 만할 테크닉의 소유자다.",
    types: ["풀", "격투"],
    atk: 241,
    def: 153,
    hp: 120
  },
  {
    name: "게을로",
    number: 287,
    poketype: "",
    description:
      "하루에 20시간 이상 엎드려 누워 있다. 거의 몸을 움직이지 않아서 잎사귀를 3장 먹으면 하루 식사가 끝난다.",
    types: ["노말"],
    atk: 104,
    def: 104,
    hp: 120
  },
  {
    name: "발바로",
    number: 288,
    poketype: "",
    description:
      "항상 날뛰고 싶어서 근질근질해 한다. 1분도 앉아 있지를 못한다. 움직이지 않으면 스트레스가 쌓인다.",
    types: ["노말"],
    atk: 159,
    def: 159,
    hp: 160
  },
  {
    name: "게을킹",
    number: 289,
    poketype: "",
    description:
      "온종일 엎드려 누워 지내는 포켓몬이다. 손이 닿는 장소에 난 풀을 먹으며 풀이 없어지면 마지못해 장소를 옮긴다.",
    types: ["노말"],
    atk: 290,
    def: 183,
    hp: 273
  },
  {
    name: "토중몬",
    number: 290,
    poketype: "",
    description:
      "몇 년을 캄캄한 땅속에서 산다. 나무의 뿌리에서 영양을 흡수하며 가만히 움직이지 않고 진화의 때를 기다리고 있다.",
    types: ["벌레", "땅"],
    atk: 80,
    def: 153,
    hp: 62
  },
  {
    name: "아이스크",
    number: 291,
    poketype: "",
    description:
      "고속으로 움직여서 모습이 보이지 않는다. 울음소리만 들려서 오랫동안 투명한 포켓몬이라고 여겨져 왔다.",
    types: ["벌레", "비행"],
    atk: 196,
    def: 114,
    hp: 122
  },
  {
    name: "껍질몬",
    number: 292,
    poketype: "",
    description:
      "단단한 몸은 꿈쩍도 하지 않는다. 등을 통해 몸의 구멍을 들여다보면 혼이 빨려 들어간다고 믿어지고 있다.",
    types: ["벌레", "고스트"],
    atk: 153,
    def: 80,
    hp: 2
  },
  {
    name: "소곤룡",
    number: 293,
    poketype: "",
    description:
      "평소에는 주의를 기울여야 들릴 만큼 작은 목소리지만 위험을 감지하면 두통을 일으킬 만큼 큰 소리로 울어댄다.",
    types: ["노말"],
    atk: 92,
    def: 42,
    hp: 128
  },
  {
    name: "노공룡",
    number: 294,
    poketype: "",
    description:
      "나무로 만든 집을 산산조각 내 날려버릴 만큼 큰 소리를 내어 상대를 혼내준다. 둥근 귀가 스피커 역할을 한다.",
    types: ["노말"],
    atk: 134,
    def: 81,
    hp: 168
  },
  {
    name: "폭음룡",
    number: 295,
    poketype: "",
    description:
      "큰 소리의 진동으로 지진을 일으킨다. 몸에 난 구멍으로 공기를 세차게 빨아들이기 시작하면 큰 소리를 낼 조짐이다.",
    types: ["노말"],
    atk: 179,
    def: 142,
    hp: 208
  },
  {
    name: "마크탕",
    number: 296,
    poketype: "",
    description:
      "몇 번을 쓰러져도 포기하지 않고 일어선다. 일어설 때마다 진화를 위한 에너지가 몸 안에 점점 비축되어간다.",
    types: ["격투"],
    atk: 99,
    def: 54,
    hp: 144
  },
  {
    name: "하리뭉",
    number: 297,
    poketype: "",
    description:
      "다양한 장소에서 손바닥 치기 연습에 힘쓴다. 강렬한 손바닥 치기 공격을 맞으면 전봇대도 한 방에 두 동강 난다.",
    types: ["격투"],
    atk: 209,
    def: 114,
    hp: 288
  },
  {
    name: "루리리",
    number: 298,
    poketype: "",
    description:
      "올가미를 쓰듯 꼬리를 휘휘 돌려 던질 때의 힘으로 날아간다. 최고 10m를 날아간 기록이 있다.",
    types: ["노말", "페어리"],
    atk: 36,
    def: 71,
    hp: 100
  },
  {
    name: "코코파스",
    number: 299,
    poketype: "",
    description:
      "자석으로 된 코는 항상 북쪽을 향하고 있다. 코코파스끼리는 자석의 반발력 때문에 가까이에서 얼굴을 마주 볼 수가 없다.",
    types: ["바위"],
    atk: 82,
    def: 236,
    hp: 60
  },
  {
    name: "에나비",
    number: 300,
    poketype: "",
    description:
      "움직이는 것을 발견하면 푹 빠져서 뒤쫓아 가는 습성을 지닌 포켓몬이다. 자기 꼬리를 쫓다 현기증을 일으킨다.",
    types: ["노말"],
    atk: 84,
    def: 84,
    hp: 100
  },
  {
    name: "델케티",
    number: 301,
    poketype: "",
    description:
      "자기 방식대로 자유로운 삶을 즐긴다. 마음 내키는 대로 먹이를 먹고 잠을 자기 때문에 하루의 리듬이 제각각이다.",
    types: ["노말"],
    atk: 132,
    def: 132,
    hp: 140
  },
  {
    name: "깜까미",
    number: 302,
    poketype: "",
    description:
      "동굴 깊은 곳에서 은밀히 생활한다. 어둠 속에서 눈동자가 수상하게 빛날 때 사람의 영혼을 빼앗는다며 두려움의 대상이 되고 있다.",
    types: ["악", "고스트"],
    atk: 141,
    def: 141,
    hp: 100
  },
  {
    name: "입치트",
    number: 303,
    poketype: "",
    description:
      "강철 뿔이 변형된 큰 턱이다. 얌전해 보이는 얼굴에 방심하고 있으면 갑자기 뒤돌아서 덥석 문다.",
    types: ["강철", "페어리"],
    atk: 155,
    def: 155,
    hp: 100
  },
  {
    name: "가보리",
    number: 304,
    poketype: "",
    description:
      "강철 몸을 만들기 위해 철광석을 산에서 채광해 먹지만 가끔 다리나 레일을 먹어버리는 말썽꾸러기다.",
    types: ["강철", "바위"],
    atk: 121,
    def: 168,
    hp: 100
  },
  {
    name: "갱도라",
    number: 305,
    poketype: "",
    description:
      "영양 만점인 샘물을 배 속 가득 마셔서 강철 몸을 단련시킨다. 맛있는 샘물 가까이에 거처를 만든다.",
    types: ["강철", "바위"],
    atk: 158,
    def: 240,
    hp: 120
  },
  {
    name: "보스로라",
    number: 306,
    poketype: "",
    description:
      "산 하나를 자신의 영역으로 만들고 침범한 상대는 봐주지 않고 때려눕힌다. 항상 산속을 돌아보고 있다.",
    types: ["강철", "바위"],
    atk: 198,
    def: 314,
    hp: 140
  },
  {
    name: "요가랑",
    number: 307,
    poketype: "",
    description:
      "산속에서 요가 수행을 한다. 명상을 하고 있어도 집중력이 떨어지기 때문에 수행이 끝나지 않는다.",
    types: ["격투", "에스퍼"],
    atk: 78,
    def: 107,
    hp: 60
  },
  {
    name: "요가램",
    number: 308,
    poketype: "",
    description:
      "명상을 하면 몸의 에너지가 높아지고 여섯 번째 감각이 예리해진다고 한다. 산야와 일체화되어 기척을 지운다.",
    types: ["격투", "에스퍼"],
    atk: 121,
    def: 152,
    hp: 120
  },
  {
    name: "썬더라이",
    number: 309,
    poketype: "",
    description:
      "긴 털에 전기를 모으고 있다. 전류로 다리 근육을 자극하여 폭발적인 순발력을 낸다.",
    types: ["전기"],
    atk: 123,
    def: 78,
    hp: 80
  },
  {
    name: "썬더볼트",
    number: 310,
    poketype: "",
    description:
      "갈기를 통해 항상 방전 중이기 때문에 불꽃이 튀어 산불이 일어나기도 한다. 싸우게 되면 번개 구름을 만들어낸다.",
    types: ["전기"],
    atk: 215,
    def: 127,
    hp: 140
  },
  {
    name: "플러시",
    number: 311,
    poketype: "",
    description:
      "항상 동료를 응원하고 있는 포켓몬이다. 동료가 힘을 내면 몸을 합선시켜 타다닥 불꽃 소리를 내며 기뻐한다.",
    types: ["전기"],
    atk: 167,
    def: 147,
    hp: 120
  },
  {
    name: "마이농",
    number: 312,
    poketype: "",
    description:
      "자신보다 동료를 응원하는 것이 중요하다. 몸에서 나오는 전기를 합선시켜 화려한 불꽃을 내며 응원한다.",
    types: ["전기"],
    atk: 147,
    def: 167,
    hp: 120
  },
  {
    name: "볼비트",
    number: 313,
    poketype: "",
    description:
      "날이 저물면 꼬리에서 빛을 내어 밝기나 점멸로 동료와 대화한다. 네오비트의 달콤한 향기에 유인된다.",
    types: ["벌레"],
    atk: 143,
    def: 171,
    hp: 130
  },
  {
    name: "네오비트",
    number: 314,
    poketype: "",
    description:
      "달콤한 향기로 볼비트를 유인한다. 많이 모인 볼비트를 유도하여 밤하늘에 기하학적인 도형을 그린다.",
    types: ["벌레"],
    atk: 143,
    def: 171,
    hp: 130
  },
  {
    name: "로젤리아",
    number: 315,
    poketype: "",
    description:
      "양손의 꽃을 노리는 상대에게는 날카로운 가시를 날려 공격한다. 꽃의 향기는 기분을 누그러트린다.",
    types: ["풀", "독"],
    atk: 186,
    def: 148,
    hp: 100
  },
  {
    name: "꼴깍몬",
    number: 316,
    poketype: "",
    description:
      "몸 대부분이 위로 되어 있어 자신과 크기가 같은 것도 삼킨다. 특수한 위액으로 무엇이든 소화한다.",
    types: ["독"],
    atk: 80,
    def: 99,
    hp: 140
  },
  {
    name: "꿀꺽몬",
    number: 317,
    poketype: "",
    description:
      "먹이를 발견하면 모공에서 맹독의 체액을 뿜어내어 끼얹는다. 약해지면 커다란 입으로 한입에 먹는다.",
    types: ["독"],
    atk: 140,
    def: 159,
    hp: 200
  },
  {
    name: "샤프니아",
    number: 318,
    poketype: "",
    description:
      "발달한 턱과 날카롭고 뾰족한 이빨은 배 밑바닥을 물어뜯을 정도의 파괴력을 지녔다. 샤프니아에게 습격당해 가라앉은 배가 많다.",
    types: ["물", "악"],
    atk: 171,
    def: 39,
    hp: 90
  },
  {
    name: "샤크니아",
    number: 319,
    poketype: "",
    description:
      "바다의 건달이라 불리는 두려움의 대상이다. 부러져도 바로 다시 나는 이빨이 있어서 한 마리가 대형 유조선을 엉망으로 만든다.",
    types: ["물", "악"],
    atk: 243,
    def: 83,
    hp: 140
  },
  {
    name: "고래왕자",
    number: 320,
    poketype: "",
    description:
      "눈 위에 있는 콧구멍을 통해 몸에 모아둔 바닷물을 뿜어내서 사람을 놀라게 하는 것을 좋아하는 포켓몬이다.",
    types: ["물"],
    atk: 136,
    def: 68,
    hp: 260
  },
  {
    name: "고래왕",
    number: 321,
    poketype: "",
    description:
      "발견된 것 중 가장 큰 포켓몬이다. 크고 넓은 바다를 느긋이 헤엄치며 큰 입으로 한 번에 대량의 먹이를 먹는다.",
    types: ["물"],
    atk: 175,
    def: 87,
    hp: 340
  },
  {
    name: "둔타",
    number: 322,
    poketype: "",
    description:
      "맞아도 알아채지 못할 정도로 둔하지만 배고픔은 단 1초도 참지 못한다. 몸 안에는 마그마가 끓어오르고 있다.",
    types: ["불꽃", "땅"],
    atk: 119,
    def: 82,
    hp: 120
  },
  {
    name: "폭타",
    number: 323,
    poketype: "",
    description:
      "몸 안에 화산을 지닌 포켓몬이다. 몸에 모은 섭씨 1만 도의 마그마를 가끔 등의 혹에서 뿜어 올리고 있다.",
    types: ["불꽃", "땅"],
    atk: 194,
    def: 139,
    hp: 140
  },
  {
    name: "코터스",
    number: 324,
    poketype: "",
    description:
      "산을 파서 석탄을 발견하면 부지런히 등껍질의 빈 곳에 넣고 태우는 포켓몬이다. 습격당하면 검은 연기를 내고 도망간다.",
    types: ["불꽃"],
    atk: 151,
    def: 234,
    hp: 140
  },
  {
    name: "피그점프",
    number: 325,
    poketype: "",
    description:
      "꼬리로 뿅뿅 뛰어오르는 포켓몬이다. 뛰어오르는 진동으로 심장을 움직이기 때문에 뛰어오르는 것을 멈출 수 없다.",
    types: ["에스퍼"],
    atk: 125,
    def: 145,
    hp: 120
  },
  {
    name: "피그킹",
    number: 326,
    poketype: "",
    description:
      "사이코 파워의 파동을 흑진주로 강화해 자유자재로 상대를 조종하는 포켓몬이다. 힘을 사용할 때 콧김이 거칠어진다.",
    types: ["에스퍼"],
    atk: 171,
    def: 211,
    hp: 160
  },
  {
    name: "얼루기",
    number: 327,
    poketype: "",
    description:
      "세상에 있는 모든 얼루기는 얼룩무늬의 위치가 다르다고 전해진다. 불안한 걸음걸이가 춤추는 것처럼 보인다.",
    types: ["노말"],
    atk: 116,
    def: 116,
    hp: 120
  },
  {
    name: "톱치",
    number: 328,
    poketype: "",
    description:
      "원뿔형의 보금자리 밑에서 가만히 먹이가 빠지기를 계속 기다리고 있다. 큰 턱의 위력은 바위도 부술 정도다.",
    types: ["땅"],
    atk: 162,
    def: 78,
    hp: 90
  },
  {
    name: "비브라바",
    number: 329,
    poketype: "",
    description:
      "두 장의 날개를 세차게 진동시켜서 초음파를 내 먹이를 기절시킨다. 인간도 두통이 일어날 정도의 위력이다.",
    types: ["땅", "드래곤"],
    atk: 134,
    def: 99,
    hp: 100
  },
  {
    name: "플라이곤",
    number: 330,
    poketype: "",
    description:
      "사막의 정령이라 불리는 포켓몬이다. 날갯짓이 모래를 흩날리기 때문에 언제나 모래바람 속에서 날고 있다.",
    types: ["땅", "드래곤"],
    atk: 205,
    def: 168,
    hp: 160
  },
  {
    name: "선인왕",
    number: 331,
    poketype: "",
    description:
      "사막같이 건조한 지역에 서식한다. 강한 꽃의 향기로 먹이를 유인하고 몸에 난 날카로운 가시를 날려 잡는다.",
    types: ["풀"],
    atk: 156,
    def: 74,
    hp: 100
  },
  {
    name: "밤선인",
    number: 332,
    poketype: "",
    description:
      "사막의 햇빛에 수분을 빼앗기지 않도록 낮에는 가만히 계속하여 서 있다. 기온이 떨어지는 밤에 활동을 시작한다.",
    types: ["풀", "악"],
    atk: 221,
    def: 115,
    hp: 140
  },
  {
    name: "파비코",
    number: 333,
    poketype: "",
    description:
      "뭉게구름처럼 푹신한 날개를 지녔다. 사람을 무서워하지 않고 솜 모자처럼 머리에 살포시 앉는 포켓몬이다.",
    types: ["노말", "비행"],
    atk: 76,
    def: 139,
    hp: 90
  },
  {
    name: "파비코리",
    number: 334,
    poketype: "",
    description:
      "뭉게구름에 뒤섞여 넓은 하늘을 떠돈다. 맑은 목소리로 멜로디를 지저귀면 그 소리를 들은 자들은 꿈꾸는 듯한 기분이 된다.",
    types: ["드래곤", "비행"],
    atk: 141,
    def: 208,
    hp: 150
  },
  {
    name: "쟝고",
    number: 335,
    poketype: "",
    description:
      "숙적 세비퍼와 대결했던 기억이 전신의 세포에 새겨져 있다. 민첩한 몸동작으로 공격을 피한다.",
    types: ["노말"],
    atk: 222,
    def: 124,
    hp: 146
  },
  {
    name: "세비퍼",
    number: 336,
    poketype: "",
    description:
      "조상 대대로 쟝고와 싸워왔다. 몸의 상처는 격렬한 싸움의 증거다. 날카롭고 예리한 꼬리로 공격한다.",
    types: ["독"],
    atk: 196,
    def: 118,
    hp: 146
  },
  {
    name: "루나톤",
    number: 337,
    poketype: "",
    description:
      "운석이 떨어진 장소에서 발견되어 우주에서 온 포켓몬이라는 설도 있지만 아직 증명되지 않았다.",
    types: ["바위", "에스퍼"],
    atk: 178,
    def: 163,
    hp: 180
  },
  {
    name: "솔록",
    number: 338,
    poketype: "",
    description:
      "우주에서 떨어졌다고 전해지는 새로운 종이다. 공중에 떠서 소리 없이 이동한다. 싸울 때는 강한 빛을 발산한다.",
    types: ["바위", "에스퍼"],
    atk: 178,
    def: 163,
    hp: 180
  },
  {
    name: "미꾸리",
    number: 339,
    poketype: "",
    description:
      "민감한 수염은 우수한 레이더다. 진흙 속에서 2개의 수염만을 내놓고 먹이가 가까이 오는 것을 기다리고 있다.",
    types: ["물", "땅"],
    atk: 93,
    def: 83,
    hp: 100
  },
  {
    name: "메깅",
    number: 340,
    poketype: "",
    description:
      "영역에 대한 집착이 매우 강한 포켓몬이다. 큰 늪 전부를 영역으로 삼는다. 적이 다가오면 날뛰어 지진을 일으킨다.",
    types: ["물", "땅"],
    atk: 151,
    def: 142,
    hp: 220
  },
  {
    name: "가재군",
    number: 341,
    poketype: "",
    description:
      "원래는 외국에 살던 포켓몬을 애완용으로 데려왔던 것이 야생화됐다. 생명력이 강해서 점점 늘어났다.",
    types: ["물"],
    atk: 141,
    def: 113,
    hp: 86
  },
  {
    name: "가재장군",
    number: 342,
    poketype: "",
    description:
      "천성이 거칠어서 바로 싸움을 건다. 가재장군이 사는 연못에는 다른 생물이 살 수 없어 쓸쓸한 장소가 돼버린다.",
    types: ["물", "악"],
    atk: 224,
    def: 156,
    hp: 126
  },
  {
    name: "오뚝군",
    number: 343,
    poketype: "",
    description:
      "외다리로 회전하며 이동한다. 오뚝군과 인간이 함께 사는 고대 벽화가 유적에서 발견됐다.",
    types: ["땅", "에스퍼"],
    atk: 77,
    def: 131,
    hp: 80
  },
  {
    name: "점토도리",
    number: 344,
    poketype: "",
    description:
      "괴이한 광선을 쬔 고대인의 진흙인형에 생명이 깃들었다고 전해진다. 공중에 떠서 이동하고 있다.",
    types: ["땅", "에스퍼"],
    atk: 140,
    def: 236,
    hp: 120
  },
  {
    name: "릴링",
    number: 345,
    poketype: "",
    description:
      "약 1억 년 전에 멸종한 포켓몬이다. 해저의 바위에 붙어서 꽃잎 같은 촉수로 가까이 온 먹이를 잡는다.",
    types: ["바위", "풀"],
    atk: 105,
    def: 154,
    hp: 132
  },
  {
    name: "릴리요",
    number: 346,
    poketype: "",
    description:
      "바다 밑에서 먹이를 찾아 돌아다닌다. 나뭇가지 같은 목을 자유롭게 늘여서 8개의 촉수로 먹이를 잡는다.",
    types: ["바위", "풀"],
    atk: 152,
    def: 198,
    hp: 172
  },
  {
    name: "아노딥스",
    number: 347,
    poketype: "",
    description:
      "태고의 화석에서 되살아난 포켓몬이다. 따뜻한 바다에 서식하며 발달한 2개의 발톱으로 먹이를 꽉 잡는다.",
    types: ["바위", "벌레"],
    atk: 176,
    def: 100,
    hp: 90
  },
  {
    name: "아말도",
    number: 348,
    poketype: "",
    description:
      "등껍질은 어떠한 공격이라도 튕겨낸다. 늘었다 줄었다 하는 거대한 2개의 발톱은 철판을 찔러 뚫을 정도의 위력을 지녔다.",
    types: ["바위", "벌레"],
    atk: 222,
    def: 183,
    hp: 150
  },
  {
    name: "빈티나",
    number: 349,
    poketype: "",
    description:
      "태어날 때부터 지느러미가 너덜너덜 보기 흉해서 아무도 상대해주지 않는 포켓몬이다. 바다와 강 양쪽 모두에서 생활할 수 있다.",
    types: ["물"],
    atk: 29,
    def: 102,
    hp: 40
  },
  {
    name: "밀로틱",
    number: 350,
    poketype: "",
    description:
      "가장 아름다운 포켓몬이라고 불리고 있다. 분노나 증오의 마음을 치유하여 분쟁을 진정시키는 힘을 지니고 있다.",
    types: ["물"],
    atk: 192,
    def: 242,
    hp: 190
  },
  {
    name: "캐스퐁",
    number: 351,
    poketype: "",
    description:
      "날씨에 따라 모습이 바뀌는 포켓몬이다. 작은 몸을 지키기 위해 대자연의 거대한 힘을 사용할 수 있게 됐다.",
    types: ["노말"],
    atk: 139,
    def: 139,
    hp: 140
  },
  {
    name: "켈리몬",
    number: 352,
    poketype: "",
    description:
      "몸의 색을 자유로이 바꿔서 주변의 경치에 녹아들 수 있다. 배의 삐쭉삐쭉한 무늬만은 바꿀 수 없다.",
    types: ["노말"],
    atk: 161,
    def: 212,
    hp: 120
  },
  {
    name: "어둠대신",
    number: 353,
    poketype: "",
    description:
      "질투와 원한의 감정에 이끌린다. 누군가를 원망하는 마음이 강해지면 어둠대신이 처마 밑에 죽 줄을 선다.",
    types: ["고스트"],
    atk: 138,
    def: 66,
    hp: 88
  },
  {
    name: "다크펫",
    number: 354,
    poketype: "",
    description:
      "자신의 몸을 바늘로 상처 낼 때 강한 저주 에너지가 발생한다. 원래는 버려진 불쌍한 인형이다.",
    types: ["고스트"],
    atk: 218,
    def: 127,
    hp: 128
  },
  {
    name: "해골몽",
    number: 355,
    poketype: "",
    description:
      "아무리 두꺼운 벽이라도 통과한다. 한 번 노려지면 아침 해가 뜰 때까지 계속 쫓겨 다니게 된다.",
    types: ["고스트"],
    atk: 70,
    def: 162,
    hp: 40
  },
  {
    name: "미라몽",
    number: 356,
    poketype: "",
    description:
      "몸 안에는 텅 비어서 아무것도 없다. 블랙홀처럼 무엇이든 빨아들이며 빨려 들어가면 되돌아 올 수 없다고 전해진다.",
    types: ["고스트"],
    atk: 124,
    def: 234,
    hp: 80
  },
  {
    name: "트로피우스",
    number: 357,
    poketype: "",
    description:
      "목에 난 송이는 달콤해서 아이들에게 인기가 많다. 과일을 매우 좋아하여 계속 먹다 보니 목에 과일이 열리게 됐다고 한다.",
    types: ["풀", "비행"],
    atk: 136,
    def: 165,
    hp: 198
  },
  {
    name: "치렁",
    number: 358,
    poketype: "",
    description:
      "목소리를 몸의 빈 곳에 메아리치게 한다. 화가 났을 때의 울음소리는 적을 날려버릴 위력을 지닌 초음파가 된다.",
    types: ["에스퍼"],
    atk: 175,
    def: 174,
    hp: 150
  },
  {
    name: "앱솔",
    number: 359,
    poketype: "",
    description:
      "앱솔이 사람들 앞에 나타나면 반드시 지진이나 해일 등의 재해가 일어나서 재난포켓몬이라는 별명으로 불렸다.",
    types: ["악"],
    atk: 246,
    def: 120,
    hp: 130
  },
  {
    name: "마자",
    number: 360,
    poketype: "",
    description:
      "언제나 싱글벙글 미소 짓는 마자. 화났을 때는 꼬리에 주목하자. 땅을 탁탁 치고 있다.",
    types: ["에스퍼"],
    atk: 41,
    def: 86,
    hp: 190
  },
  {
    name: "눈꼬마",
    number: 361,
    poketype: "",
    description:
      "눈이 많은 땅에서 사는 포켓몬이다. 봄이나 여름처럼 눈이 내리지 않는 계절에는 석회암 동굴 깊은 곳에서 조용히 산다.",
    types: ["얼음"],
    atk: 95,
    def: 95,
    hp: 100
  },
  {
    name: "얼음귀신",
    number: 362,
    poketype: "",
    description:
      "바위로 된 몸을 얼음 갑옷으로 단단히 했다. 공기 중의 수분을 얼려서 자유로운 형태로 바꾸는 능력을 지닌 포켓몬이다.",
    types: ["얼음"],
    atk: 162,
    def: 162,
    hp: 160
  },
  {
    name: "대굴레오",
    number: 363,
    poketype: "",
    description:
      "걷는 것보다 구르는 편이 단연 빠르다. 식사 시간에는 모두가 일제히 손뼉을 치며 기뻐하기 때문에 꽤 시끄럽다.",
    types: ["얼음", "물"],
    atk: 95,
    def: 90,
    hp: 140
  },
  {
    name: "씨레오",
    number: 364,
    poketype: "",
    description:
      "처음 본 것은 반드시 코로 빙글빙글 돌려보는 습성을 지녔다. 대굴레오를 돌리며 놀기도 한다.",
    types: ["얼음", "물"],
    atk: 137,
    def: 132,
    hp: 180
  },
  {
    name: "씨카이저",
    number: 365,
    poketype: "",
    description:
      "발달한 2개의 이빨은 10톤이나 되는 빙산을 일격에 분쇄한다. 지방이 두꺼워서 영하의 기온에서도 끄떡없다.",
    types: ["얼음", "물"],
    atk: 182,
    def: 176,
    hp: 220
  },
  {
    name: "진주몽",
    number: 366,
    poketype: "",
    description:
      "튼튼한 껍데기는 몸을 지키는 것뿐 아니라 먹이를 집어서 잡을 수도 있다. 성장한 진주몽의 조개껍데기는 상처투성이다.",
    types: ["물"],
    atk: 133,
    def: 149,
    hp: 70
  },
  {
    name: "헌테일",
    number: 367,
    poketype: "",
    description:
      "매우 깊은 바다 밑에 살고 있어서 오랫동안 사람에게 발견되지 않았다. 어두운 심해에서도 잘 볼 수 있는 눈을 지녔다.",
    types: ["물"],
    atk: 197,
    def: 194,
    hp: 110
  },
  {
    name: "분홍장이",
    number: 368,
    poketype: "",
    description:
      "남쪽 심해에 서식하는 포켓몬이다. 심해의 수압에 단련된 몸은 어지간한 공격에는 상처조차 입지 않는다.",
    types: ["물"],
    atk: 211,
    def: 194,
    hp: 110
  },
  {
    name: "시라칸",
    number: 369,
    poketype: "",
    description:
      "1억 년이란 긴 세월 동안 전혀 모습이 바뀌지 않고 심해에서 살고 있던 포켓몬이다. 이빨이 없는 입으로 미생물만을 먹는다.",
    types: ["물", "바위"],
    atk: 162,
    def: 234,
    hp: 200
  },
  {
    name: "사랑동이",
    number: 370,
    poketype: "",
    description:
      "열대의 얕은 바다에서 살고 있다. 커플을 발견하면 뒤에 붙어서 헤엄치기 때문에 이런 이름이 붙었다.",
    types: ["물"],
    atk: 81,
    def: 134,
    hp: 86
  },
  {
    name: "아공이",
    number: 371,
    poketype: "",
    description:
      "넓은 하늘을 나는 것을 꿈꾸며 연거푸 낭떠러지에서 뛰어내리다 보니 머리가 단련되어 강철처럼 단단해졌다.",
    types: ["드래곤"],
    atk: 134,
    def: 107,
    hp: 90
  },
  {
    name: "쉘곤",
    number: 372,
    poketype: "",
    description:
      "단단한 껍질 내부는 세포가 변화되어 새로운 몸을 만드는 중이다. 껍질이 매우 무거워서 움직임이 둔하다.",
    types: ["드래곤"],
    atk: 172,
    def: 179,
    hp: 130
  },
  {
    name: "보만다",
    number: 373,
    poketype: "",
    description:
      "날개가 갖고 싶다는 굳건한 바람이 계속된 결과 몸의 세포가 돌연변이를 일으켜서 멋진 날개가 돋아났다고 한다.",
    types: ["드래곤", "비행"],
    atk: 277,
    def: 168,
    hp: 190
  },
  {
    name: "메탕",
    number: 374,
    poketype: "",
    description:
      "몸 안에는 혈액 대신에 강력한 자력이 돌고 있다. 자력의 파동으로 동료와 대화한다.",
    types: ["강철", "에스퍼"],
    atk: 96,
    def: 141,
    hp: 80
  },
  {
    name: "메탕구",
    number: 375,
    poketype: "",
    description:
      "두 마리의 메탕이 합체한 모습이다. 두 개의 뇌를 자력 신경이 묶고 있어서 강한 사이코 에너지를 만들어 낸다.",
    types: ["강철", "에스퍼"],
    atk: 138,
    def: 185,
    hp: 120
  },
  {
    name: "메타그로스",
    number: 376,
    poketype: "",
    description:
      "네 개의 뇌는 슈퍼컴퓨터보다 빨리 어려운 계산 문제를 푼다. 네 개의 다리를 접고 공중에 떠오른다.",
    types: ["강철", "에스퍼"],
    atk: 257,
    def: 247,
    hp: 160
  },
  {
    name: "레지락",
    number: 377,
    poketype: "",
    description:
      "오래전 사람에게 봉인된 포켓몬이다. 싸움으로 몸이 부서지면 스스로 새로운 바위를 찾아서 고친다고 한다.",
    types: ["바위"],
    atk: 179,
    def: 356,
    hp: 160
  },
  {
    name: "레지아이스",
    number: 378,
    poketype: "",
    description:
      "빙하시대에 만들어진 얼음으로 된 몸은 불꽃으로도 녹일 수가 없다. 영하 200도의 냉기를 다룬다.",
    types: ["얼음"],
    atk: 179,
    def: 356,
    hp: 160
  },
  {
    name: "레지스틸",
    number: 379,
    poketype: "",
    description:
      "어떤 금속보다도 단단한 몸을 지녔다. 몸 안은 비어 있는 듯하며 먹는 것도 알려지지 않은 포켓몬이다.",
    types: ["강철"],
    atk: 143,
    def: 285,
    hp: 160
  },
  {
    name: "라티아스",
    number: 380,
    poketype: "",
    description:
      "인간의 마음을 민감히 감지해낸다. 적의를 느끼면 전신의 깃털을 곤두세우고 격렬한 울음소리로 위협한다.",
    types: ["드래곤", "에스퍼"],
    atk: 228,
    def: 268,
    hp: 160
  },
  {
    name: "라티오스",
    number: 381,
    poketype: "",
    description:
      "본 것이나 생각한 이미지를 상대에게 영상으로 보여주는 능력을 지녔다. 인간의 말을 이해할 수 있다.",
    types: ["드래곤", "에스퍼"],
    atk: 268,
    def: 228,
    hp: 160
  },
  {
    name: "가이오가",
    number: 382,
    poketype: "",
    description:
      "자연의 힘에 의해 원시회귀하여 원래의 모습을 되찾는다. 그 힘은 폭풍을 불러들이며 바다를 확장한다.",
    types: ["물"],
    atk: 270,
    def: 251,
    hp: 182
  },
  {
    name: "그란돈",
    number: 383,
    poketype: "",
    description:
      "대지의 화신이라 전해지는 포켓몬. 자연의 힘을 갈구하여 가이오가와 사투를 반복한다는 전설이 있다.",
    types: ["땅"],
    atk: 270,
    def: 251,
    hp: 182
  },
  {
    name: "레쿠쟈",
    number: 384,
    poketype: "",
    description:
      "몇억 년 동안 계속 살고 있다고 한다. 그란돈과 가이오가의 사투를 진정시켰다는 전설이 남아 있다.",
    types: ["드래곤", "비행"],
    atk: 284,
    def: 170,
    hp: 191
  },
  {
    name: "지라치",
    number: 385,
    poketype: "",
    description:
      "깨어났을 때 머리에 있는 종이에 적힌 소원을 이루어준다는 전설을 가졌다. 위험을 느끼면 잠든 채로 싸운다.",
    types: ["강철", "에스퍼"],
    atk: 210,
    def: 210,
    hp: 200
  },
  {
    name: "테오키스",
    number: 386,
    poketype: "",
    description:
      "레이저를 쬔 우주 바이러스의 DNA가 돌연변이를 일으켜 태어난 포켓몬이다. 가슴의 수정체가 뇌인 것 같다.",
    types: ["에스퍼"],
    atk: 1,
    def: 1,
    hp: 1
  }
];

const functions = require("firebase-functions");
const Josa = require("josa-js");
const fs = require("fs");
const stringSimilarity = require("string-similarity");
const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");

process.env.DEBUG = "dialogflow:*"; // enables lib debugging statements
var pokedex = JSON.parse(fs.readFileSync("data.json", "utf8"));
const pokemonNameArray = pokedex.map(v => v.name);

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log(
      "Dialogflow Request headers: " + JSON.stringify(request.headers)
    );
    console.log("Dialogflow Request body: " + JSON.stringify(request.body));

    function tellBasicInfoHandler(agent) {
      const find = pokedex.find(v => v.name == agent.parameters.Pokemon);

      agent.add(`${find.name}. ${find.info}`);
    }

    function tellCounterHandler(agent) {
      const find = pokedex.find(v => v.name == agent.parameters.Pokemon);
      const entry = agent.parameters.Counter;
      const stronger = getStrongest(find.counters);

      agent.add(
        `${find.name}. ${find.types.join(", ")} 타입을 가지는 포켓몬. ${
          find.name
        }의 ${Josa.r(entry, "은/는")} ${stronger.quick_skill}, ${Josa.r(stronger.charge_skill, "을/를")} 사용하는 ${
          stronger.name
        }이다.`
      );
    }

    function tellNestHandler(agent) {
      const find = pokedex.find(v => v.name == agent.parameters.Pokemon);
    }

    function tellTypeHandler(agent) {
      const pokemon = agent.parameters.Pokemon;
      const entry = agent.parameters.Type;
      const find = pokedex.find(v => v.name == agent.parameters.Pokemon);

      if (pokemonNameArray.includes(pokemon)) {
        agent.add(`${pokemon}의 ${entry}은 ${find.types.join(", ")}입니다.`);
      } else {
        agent.add(
          `${Josa.r(
            pokemon,
            "은/는"
          )} 포켓몬 도감에 존재하지 않는 포켓몬 입니다.`
        );
      }
    }

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set("tell_basic_info", tellBasicInfoHandler);
    intentMap.set("tell_counter", tellCounterHandler);
    intentMap.set("tell_nest", tellNestHandler);
    intentMap.set("tell_type", tellTypeHandler);
    agent.handleRequest(intentMap);
  }
);

function getStrongest(pokemons) {
  let sorted = pokemons.sort((a, b) => {
    let pokemonA = pokedex.find(v => v.name == a.name);
    let pokemonB = pokedex.find(v => v.name == b.name);
    return b.percentage * pokemonB.max_cp - a.percentage * pokemonA.max_cp;
  });
  return sorted[0];
}

function getNest(pokemon) {
  if (pokemon) {
    // 특정 포켓몬의 둥지 조회
  } else {
    // 현재 위치에서 가장 가까운 둥지 조회
  }
}
