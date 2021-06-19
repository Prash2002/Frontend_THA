
    let b = 0;
    let r = 36;
    const hall = document.querySelector(".hall");
    const bv = document.querySelector(".bv");
    const rv = document.querySelector(".rv");

    for(let i=0; i<36; i++){
        hall.innerHTML += '    <div class="box"></div>';
    }

    const box = document.querySelectorAll(".box");

    for(let i=0; i<36; i++){
        box[i].addEventListener('click', ()=>{
            console.log(box[i].classList.contains("clicked"));
            if(box[i].classList.contains("clicked")){
                box[i].classList.remove("clicked");
                b-=1;
                r+=1;
                bv.innerHTML = b;
                rv.innerHTML = r;
            }
            else{
                box[i].classList.add("clicked");
                b+=1;
                r-=1;
                bv.innerHTML = b;
                rv.innerHTML = r;
            }
        });
    }