let n =0;
let m=0;
const result = document.querySelector(".answer");

function readValues(){
    n = parseInt(document.getElementById("v1").value);
    m = parseInt(document.getElementById("v2").value);
}

function addFun(){
    readValues();
    console.log(n+m);
    result.innerHTML = `Result: ${n+m}`;
    console.log(result.innerHTML);
}

document.getElementById("add").addEventListener("click", ()=>addFun());


function subFun(){
    readValues();
    result.innerHTML = `Result: ${n-m}`;
    console.log(result.innerHTML);
}

document.getElementById("sub").addEventListener("click", ()=>subFun());

function mulFun(){
    readValues();
    result.innerHTML = `Result: ${n*m}`;
    console.log(result.innerHTML);
}

document.getElementById("mul").addEventListener("click", ()=>mulFun());

function diviFun(){
    readValues();
    result.innerHTML = `Result: ${n/m}`;
    console.log(result.innerHTML);
}

document.getElementById("divi").addEventListener("click", ()=>diviFun());
