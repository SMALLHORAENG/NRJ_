const header = document.getElementById('header');
const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const u_name = document.querySelector('input[type=text]');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 6  ;
const select = [];
let qIdx = -1;

const goTo = (dest) => {
  let elem;
  let elemTop; 
  if (dest === 'artist') {
    elem = document.getElementById('intro-box');
  } else {
    elem = document.getElementById('share-box');
  }
  elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
  if (pcMQL.matches) {
    elemTop -= 150;
  } else if (tabletMQL.matches) {
    elemTop -= 115;
  } else {
    elemTop -= 60;
  }
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elemTop
  });
}
const goArtist = () => goTo('artist');
const goShare = () => goTo('share');

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}

const calcScore = () => {
  let point = 0;
  for (let i = 0; i < 5; i++) {
    point += qnaList[i].a[select[i]].score;
  }
  return point;
}

const sortResult = (point) => {
  let num = 0;
  let x = [
  '1. 내 환경 속에서 할 수 있는 전도의 일을 구역장님과 의논해보기',
  '2. 환경정리계획을 중장기적으로 세워보기',

  '1. 전도심방 받기',
  '2. 혼자있지말고 우리사람들과 나눔하고 함께있기',
  '3. 전도인식개선',

  '1. 1인1도구 개발 피드백받기',

  '1. 도구사용경험치를 많이 쌓기',
  '2. 컨셉이 맞지 않을 수 있으므로', 
  '3. 내 컨셉에 맞게 재설정하는 피드백 받기"',

  '1. 멘트점검받기'];

  // desc.innerHTML = infoList[grade].desc;
  // const desc = document.querySelector('.res');

  if (point > 100 && point <= 159) {
    num = 0;
    document.querySelector('.ch-text').innerText = x[0];
    document.querySelector('.ch-text2').innerText = x[1];
    
  } else if (point > 200 && point <= 259) {
    num = 1;
    document.querySelector('.ch-text').innerText = x[2];
    document.querySelector('.ch-text2').innerText = x[3];
    document.querySelector('.ch-text3').innerText = x[4];
  } else if (point > 30 && point <= 39) {
    num = 2;
    document.querySelector('.ch-text').innerText = x[5];
  } else if (point > 40 && point <= 49) {
    num = 3;
    document.querySelector('.ch-text').innerText = x[6];
    document.querySelector('.ch-text2').innerText = x[7];
    document.querySelector('.ch-text3').innerText = x[8];
  } else if (point > 50 && point <= 80) {
    num = 4;
    document.querySelector('.ch-text').innerText = x[9];
  } else {
    num = 5;
  }
  return num;
}

// const choose = (qnaList) => {
//   let point = 0;
  let str = ['1. 어차피 안될거란 생각',
      '2. 내가 안해도 누가 하겠지란 생각',
      '3. 내가하면 안될 것 같아 생각',
      '4. 혼자라는 생각에 지침',
      '5. 소속감이 크지않아 거점가기 힘듦',
      '6. 예전처럼 할 자신이 없음',
      '7. 잎사귀 구할 생각에 막막함',
      '8. 방법을 알려주면 어떻게는 해보겠지만 모름']

      for (let num = 0; num < str.length; num++) {
        if (qnaList[2].a[num].score <= 1) {
          const choElement = document.querySelector('.cho'); // 클래스명 ".cho"를 가진 요소 선택
          if (choElement) {
            choElement.textContent = str[num]; // 텍스트 내용 변경
          }
        }
      }

//   if (qnaList[2].a[num].score <= 1) {
//     cholement.textContent = str[num];
//     num++;
//   }
//   else if (qnaList[2].a[num].score <= 2) {
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   else if (qnaList[2].a[num].score <= 3) {
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   else if (qnaList[2].a[num].score <= 4) {
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   else if (qnaList[2].a[num].score <= 5) {
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   else if (qnaList[2].a[num].score <= 6) {
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   else if (qnaList[2].a[num].score <= 7) {
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   else if (qnaList[2].a[num].score <= 8) {
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   else{
//     document.querySelector(".cho").innerText = str[i]
//     num++;
//   }
//   return point;
// }

const goResult = () => {
  if (pcMQL.matches) {
    console.log('PC');
    wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    console.log('tablet');
    wrap.style.marginTop = '115px';

    console.log(select);
  }

  const result = document.getElementById('result');
  const point = calcScore();
  const grade = sortResult(point);
  const pTitle = document.querySelector('.p');
  const res_point = document.querySelector('.point');
  const pin = document.querySelector('.pin');
  const img_url = 'img/image-' + grade + '.PNG';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const animal = document.querySelector('.result');
  const desc = document.querySelector('.res');

  pTitle.innerHTML = u_name.value + ' 님이 갖고있던 생각 ';
  pin.style.marginLeft = infoList[grade].mLeft;
  res_img.src = img_url;
  res_img.alt = infoList[grade].name;
  res_img.title = infoList[grade].name;
  res_img_div.appendChild(res_img);
  animal.innerHTML = infoList[grade].name;
  desc.innerHTML = infoList[grade].desc;
  

  setTimeout(() => {
    header.style.display = 'block';
    footer.style.display = 'block';
    result.style.display = 'block';
    header.style.animation =
      'fade-in 0.3s forwards';
    footer.style.animation =
      'fade-in 0.3s forwards';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    const calc = document.getElementById('calc');
    calc.style.display = 'block';
    calc.style.animation =
      'going-up 0.5s forwards, ' +
      'fade-in 0.5s forwards';
  }, 700);
  setTimeout(() => {
    calc.style.animation = '';
    calc.style.animation =
      'going-left 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      calc.style.display = 'block';
      goResult();
    }, 400);
  }, 9000);
}

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;
  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');
      goNext();
    }, 800);
  });

  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}


const goNext = () => {
  if (qIdx++ === qnaList.length - 1) {
    end();
    return;
  }

  const status = document.querySelector('.status');
  const qNum = qnaList[qIdx];
  const q = document.querySelector('.q');

  status.style.width = (100/ENDPOINT * (qIdx + 1)) + '%';
  q.innerHTML = qNum.q;
  qna.style.animation =
    'fade-in 0.3s ease-in-out 0.4s forwards, ' +
    'going-down 0.3s ease-in-out 0.4s forwards';

  setTimeout(() => {
    const endIdx = qNum.a.length - 1;
    for (let i in qNum.a) {
      addAnswer(qNum.a[i].answer, i);
    }
    qna.style.opacity = 1;
  }, 700);
}

const begin = () => {
  const welcome = document.getElementById('welcome');
  header.style.animation =
    'going-up 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  footer.style.animation =
    'going-down 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  setTimeout(() => welcome.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards', 500);
  setTimeout(() => {
    header.style.display = 'none';
    footer.style.display = 'none';
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      console.log('tablet');
      wrap.style.marginTop = '30px';
    }
    goNext();
  }, 1000);
}

const load = () => {
  const msg = document.querySelector('.check-name');
  const start_btn = document.querySelector('.start');

  u_name.addEventListener('blur', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
    } catch (err) {
      msg.innerHTML = err;
    }
  });

  start_btn.addEventListener('click', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
      start_btn.disabled = true;
      begin();
    } catch (err) {
      msg.innerHTML = err;
    }
  });

}


window.onload = load();