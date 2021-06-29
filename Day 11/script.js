//questions:
let question_set=[
    {
        question: "Sin City's cold and empty, no one's around to _____ me.",
        option: ["dump","judge", "love", "hug"],
        answer: 1
    },
    {
        question: "Sin City's cold and empty, no one's around to _____ me.",
        option: ["dump","judge", "love", "hug"],
        answer: 1
    },
    {
        question: "\"Sin City's cold and empty, no one's around to _____ me.\" - The Weeknd, 'Blinding Lights'",
        option: ["dump","judge", "love", "hug"],
        answer: 1
    },
    {
        question: "Sin City's cold and empty, no one's around to _____ me.",
        option: ["dump","judge", "love", "hug"],
        answer: 1
    },
    {
        question: "Sin City's cold and empty, no one's around to _____ me.",
        option: ["dump","judge", "love", "hug"],
        answer: 1
    },
]

// adding elements for container
const set = document.querySelector(".set");
 let n = question_set.length;
 for(let i=0; i<n; i++){
     set.innerHTML+=`<div class='container q${i}'><div class='qno'>${i+1}</div><div class='question'>${question_set[i].question}</div><button class='option'>${question_set[i].option[0]}</button><button class='option'>${question_set[i].option[1]}</button><button class='option'>${question_set[i].option[2]}</button> <button class='option'>${question_set[i].option[3]}</button></div>`;
 }

const container = document.querySelectorAll(".container");

 for(let i=1; i<n; i++){
    container[i].style.zIndex = -i;
    // container[i].classList.add("containerhide");
}

// structure of questions
/*
    <div class="qno">1.</div>
            <div class="question">"If you win, you live, if you lose, you die. If you don't fight, you can't win."</div>
            <button class="option">Naruto</button>
            <button class="option">Tokyo Ghoul</button>
            <button class="option">Attack on Titan</button>
            <button class="option">One piece</button>
*/



// button eventlistener
const btn = document.querySelectorAll("button");

let q_visible = 0;
let score=0;
let sc_ele = document.querySelector(".score");
let hs_ele = document.querySelector(".hs");
if(localStorage.key(0)==="highscore"){
    hs_ele.innerHTML = localStorage.getItem("highscore");
}
function endPage(){
    if(localStorage.key(0)==='highscore'){
        if(score>parseInt(localStorage.getItem("highscore"))){
            set.innerHTML= `<div class='end'>New Highscore! Your Score: ${score}/${n}</div>`;
            localStorage.setItem("highscore", score);
            hs_ele.innerHTML = score;

        }
        else set.innerHTML= `<div class='end'>Your Score: ${score}/${n}</div>`;
    }
    else{
        set.innerHTML= `<div class='end'>New Highscore! Your Score: ${score}/${n}</div>`;
        localStorage.setItem("highscore", score);
        hs_ele.innerHTML = score;
    }
}


function nextQuestion(){
    if(q_visible===n-1){
        endPage();
    }
    container[q_visible].style.zIndex = -n ;
    q_visible++;
}

function answered(selected){
    let temp = (q_visible)*4;
    temp = selected%temp;
    if(q_visible===0) temp = selected;
    if(temp===question_set[q_visible].answer){
        btn[selected].classList.add("correct");
        score++;
        sc_ele.innerHTML= score;
    }
    else{
        btn[selected].classList.add("wrong");
    }
    setTimeout(nextQuestion, 500)
}
for(let i=0; i<4*n; i++){
    btn[i].addEventListener('click', ()=>{
        let temp = (q_visible)*4;
        answered(i);
    });
}
