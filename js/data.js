const qnaList = [
  {
    q: '1주일 기준, 거점오는횟수가 얼마나 되나요?    ',
    a: [
      { answer: 'a. 5회이상', score: 0 },
      { answer: 'b. 3-4회', score: 0 },
      { answer: 'c. 1-2회', score: 0 },
      { answer: 'd. 환경이 진짜 안돼서 가고 싶어도 못가고있다', score: 100 },
      { answer: 'e. 환경이 완전 안되진 않지만, 몸과 마음이 무거워서 못나가고있다', score: 200 }
    ]
  },
  {
    q: '2. 거점에서 나는 어떤 모습인가요?     ',
    a: [
      { answer: 'a. NB 말걸기 10회 이상', score: 0 },
      { answer: 'b. NB 말걸기 1-2회 이상', score: 0 },
      { answer: 'c. 잎사귀만 나간다', score: 0 },
      { answer: 'd. 온라인(소모임,알찾) 글만 올린다', score: 0 },
      { answer: 'e. 우리 식구와 대화만 한다', score: 0 }
    ]
  },
  {
    q: '3. 전도하라는 말을 들으면 가장 먼저 드는 생각은?     ',
    a: [
      { answer: '1. 해도 어차피 안될거야..', score: 1 },
      { answer: '2. 내가 안해도 누군가 하겠지?', score: 2 },
      { answer: '3. 내가 나가면 열매 떨어질 것 같아..', score: 3 },
      { answer: '4. 거점에 혼자라는 생각에 지친다', score: 4 },
      { answer: '5. 구역에 소속감 크지 않아서 거점 가는게 쉽지 않다', score: 5 },
      { answer: '6. 예전처럼 할 자신이 없다', score: 6 },
      { answer: '7. 잎사귀 구할 생각에 막막하다', score: 7 },
      { answer: '8. 방법을 알려주면 어떻게든 해보겠는데 방법을 잘 모르겠다', score: 8 }
  ]
  },
  {
    q: '4. 3번의 이유로 인해,    ',
    a: [
      { answer: 'a. 이게 해결만 된다면 전도,, 어떻게든 하고싶다!!', score: 0 },
      { answer: 'b. 전도 시도조차 어렵다 ', score: 9 }
    ]
  },
  {
    q: '5. 나에게 해당되는 것 하나를 선택해주세요    ',
    a: [
      { answer: 'a. 나는 자주쓰거나 컨셉을 잘 입을 수 있는 섭외 도구가 없다 ', score: 30 },
      { answer: 'b. 섭외도구는 있지만 익숙치 않고 버벅댄다 ', score: 40 },
      { answer: 'c. 섭외도구도 있고 익숙한데, 이걸로 열매 정파가 잘 안된다 ', score: 50 }
    ]
  },
  
]

const infoList = [
  {
    from: 0,
    to: 20,
    mLeft: '10%',
    name: '피곤 스파이더맨',
    desc: '밤낮없이 일하는 스파이더맨인 당신은, 평소에 전도할 시간이 없어 애끓는 마음을 가지고 있지요😢 취업난에 치이고 숙제에 치이고 가족의 간섭에 치이고, 이리저리 치이는 당신..외롭더라도 당신은 우리의 이웃입니다 :)'
  },
  {
    from: 21,
    to: 40,
    mLeft: '25%',
    name: '산전수전 다 겪은 블랙위도우',
    desc: '사람들은 당신이 꼼꼼하고 철저하다고 생각합니다. 심지어 종종 신경질적이라고 생각할 때도 있죠. 하지만 노력이 결실을 맺을 때 당신은 칭찬을 기쁘게 받아들입니다. (이것은 자기 자신을 받아들인다는 긍정적인 의미입니다.) 만약 당신이 충동적으로 행동한다면 사람들은 정말 놀랄 겁니다. 신중하게 행동하는 것은 대개 지혜를 드러내게 마련입니다. 당신은 친구들이 당신에게 조언을 구할 만큼 믿음직한 사람입니다.'
  },
  {
    from: 41,
    to: 60,
    mLeft: '50%',
    name: '묠니르 없는 토르',
    desc: '사람들은 당신이 분별 있고 현실적이며 겸손하다고 생각합니다. 당신은 당신에게 향하는 신뢰와 충성에 보답하는 사람으로 정평이 나 있습니다. 당신을 잘 아는 사람이라면 당신이 친구들에게 갖는 믿음을 깨거나 친구 사이를 이간질하기 어렵다는 걸 알 겁니다. 하지만 그 신뢰가 깨진다면, 당신은 꽤 큰 영향을 받습니다.'
  },
  {
    from: 61,
    to: 80,
    mLeft: '75%',
    name: '힘조절 안되는 헐크',
    desc: '사람들은 당신이 생기 넘치고 매력적인 한편 현실적이기도 하다고 생각합니다. 당신이 인기 있는 데다가 침착함과 꾸밈없는 솔직함까지 지녔다고 생각하죠. 또한 당신이 언제나 친구들을 위하는 이해심 많고 사려깊은 사람이라고 생각합니다.'
  },
  {
    from: 81,
    to: 100,
    mLeft: '70%',
    name: '하던대로 하는 캡틴 아메리카',
    desc: '사람들은 당신이 흥분을 잘 하고 다소 충동적이라고 생각합니다. 하지만 당신은 타고난 리더입니다! 의사 결정도 빠르게 내리죠. 사람들은 당신을 대범하고 모험심이 강한 사람으로 생각합니다. 또한 당신의 열정을 인정하고 높이 사기 때문에 당신의 동료, 친구로서 지내기를 좋아합니다.'
  },
]
  