const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author: "사무엘존슨"
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다",
        author: "파울로 코엘료"
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author: "찰리 채플린"
    },
    {
        quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author: "엘사 맥스웰"
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author: "L.론허바드"
    },
    {
        quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
        author: "랄프 왈도 에머슨"
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "단테"
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "찰스다윈"
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "제임스 딘"
    },
    {
        quote: "일하는 시간과 노는 시간을 뚜렷이 구분하라. 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라",
        author: "루이사 메이올콧"
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
        author: "괴테"
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다",
        author: "이소룡"
    },
    {
        quote: "사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다",
        author: "맹자"
    },
    {
        quote: "인생에서 원하는 것을 엇기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다",
        author: "벤스타인"
    },
    {
        quote: "문제점을 찾지 말고 해결책을 찾으라",
        author: "헨리포드"
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈"
    },
    {
        quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다",
        author: "베토벤"
    },
    {
        quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
        author: "하버트 개서"
    },
    {
        quote: "삶을 사는 데는 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다",
        author: "알베르트 아인슈타인"
    },
]

const quote = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;