const game = document.querySelector(".game");

for(let i=0; i<12; i++){
    game.innerHTML += "<div class='card'></div>";
}

let arr = [
    'https://i1.sndcdn.com/artworks-000137862127-onf2mn-t500x500.jpg',
    'https://i1.sndcdn.com/artworks-5BM7n5ycdbSpks9d-aAm7VQ-t500x500.jpg', 
    'https://i1.sndcdn.com/artworks-wcoaBr6M7ZeYuQMi-V5CYXw-t500x500.jpg',
    'https://i.pinimg.com/originals/78/f0/ba/78f0bae24686b1ee48c83d466de80a5a.png',
    'https://i1.sndcdn.com/artworks-000059018954-5rr08r-t500x500.jpg',
    'https://i1.sndcdn.com/avatars-dARAyX420aHF5tph-QnLKxg-t500x500.jpg'
];
let content = [...arr,...arr];
let urls= [];
for(let i=0; i<12; i++){
    let rand = Math.floor(Math.random()*(12-i));
    urls.push(`url(${content[rand]})`);
    content.splice(rand, 1);
}

const cards = document.querySelectorAll(".card");
const points = document.querySelector(".points");
let purl='';
let pi1=-1, pi2=-2;
let count =0;
let moves =0;
let no_of_pairs = 6;
let gameEnd = false;
let found =[];

function foundCard(){
    found.push(pi1, pi2);
    cards[pi1].classList.add("cardFound");
    cards[pi2].classList.add("cardFound");
    if(no_of_pairs===0){
        document.querySelector(".end").style.fontSize="60px";
        gameEnd = true;
    }
}

function cardClicked(i){  
    cards[i].style.opacity= "100%";
    cards[i].style.transition = "all 300ms ease-in";
    cards[i].style.backgroundImage = urls[i];
    cards[i].style.backgroundSize = "150px";
    cards[i].style.transform ="rotateY( 180deg )";
}

function cardBreak(){
    cards[pi1].style.background="#D3D0CB";
    cards[pi2].style.background="#D3D0CB";
    cards[pi1].style.transform ="rotateY( 0deg )";
    cards[pi2].style.transform ="rotateY( 0deg )";
    cards[pi1].style.opacity= "50%";
    cards[pi2].style.opacity= "50%";
}

for(let i=0; i<12; i++){
    cards[i].addEventListener('click', ()=>{
        if(!gameEnd && (pi1!==i || pi2!==i) && !(found.includes(i))){
            moves++;
            points.innerHTML = `${moves}`;
            count++;
            if(count===3){
                count=1;
                purl="";
                cardBreak();
            }
            if(count===1){
                pi1=i;
            }
            if(count===2){
                pi2=i;
            }
            if(pi1!==pi2){
                    cardClicked(i);
                    if(purl===urls[i]){
                        no_of_pairs--;
                        setTimeout(foundCard, 400);
                        
                    }
                    // else if(count===2){
                    //     setTimeout(cardBreak, 1000);
                    // }
                    else{
                        purl = urls[i];
                    }  
                }
        }
        
    });
}
