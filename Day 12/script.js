const inp = document.querySelector("input");
const addbtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");
let n=0;

let delbtn=[];

addbtn.addEventListener('click', ()=>{
    if(inp.value===""){
        alert("TODO can't be empty");
    }
    else{
        n++;
        list.innerHTML += `<div class="item">
        
        <div class="checked material-icons-outlined">
            radio_button_unchecked
        </div>
        <div class="text"> ${inp.value} </div>
        <button class="material-icons-outlined delete">
            delete
        </button>
        </div>`;
        inp.value="";
    }
    delbtn= document.querySelectorAll(".delete");
    deleteTodo();
    chkbtn= document.querySelectorAll(".checked");
    chkTodo();
});

function deleteTodo(){
    delbtn.forEach((x)=>{
        x.addEventListener('click', (e)=>{
            e.target.parentElement.classList.add("remove");
            e.target.parentElement.ontransitionend = () => {
                e.target.parentElement.remove();
              };
        })
    })
     
}


function chkTodo(){
    
    chkbtn.forEach((x)=>{
        let y= x.parentElement.firstElementChild;
        y.addEventListener('click', (e)=>{
            console.log(e.target.nextElementSibling);
            if(e.target.nextElementSibling.classList.contains("done")){
                e.target.nextElementSibling.classList.remove("done");
                e.target.innerHTML = "radio_button_unchecked";
            }
            else{
                e.target.nextElementSibling.classList.add("done");
               e.target.innerHTML = "radio_button_checked";
            }
        })
        
   })
}

//TODO: add localStorage