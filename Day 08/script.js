const center = document.querySelector(".frame");
for(let i=0; i<400; i++){
	center.innerHTML += "<div class='box'></div>";
}

const box = document.querySelectorAll(".box");

// design:
box[129].classList.add("boxclick");
box[130].classList.add("boxclick");
box[148].classList.add("boxclick");
box[149].classList.add("boxclick");
box[150].classList.add("boxclick");
box[151].classList.add("boxclick");
box[167].classList.add("boxclick");
box[168].classList.add("boxclick");
box[169].classList.add("boxclick");
box[170].classList.add("boxclick");
box[171].classList.add("boxclick");
box[172].classList.add("boxclick");
box[186].classList.add("boxclick");
box[187].classList.add("boxclick");
box[189].classList.add("boxclick");
box[190].classList.add("boxclick");
box[192].classList.add("boxclick");
box[193].classList.add("boxclick");
box[206].classList.add("boxclick");
box[207].classList.add("boxclick");
box[208].classList.add("boxclick");
box[209].classList.add("boxclick");
box[210].classList.add("boxclick");
box[211].classList.add("boxclick");
box[212].classList.add("boxclick");
box[213].classList.add("boxclick");
box[228].classList.add("boxclick");
box[231].classList.add("boxclick");
box[247].classList.add("boxclick");
box[249].classList.add("boxclick");
box[250].classList.add("boxclick");
box[252].classList.add("boxclick");
box[266].classList.add("boxclick");
box[268].classList.add("boxclick");
box[271].classList.add("boxclick");
box[273].classList.add("boxclick");

for(let i=0; i<400; i++){
	box[i].addEventListener('click',()=>{
		if(box[i].classList.contains("boxclick")){
			box[i].classList.remove("boxclick");
		}
		else{
			box[i].classList.add("boxclick");
			console.log(i+" clicked");			
		}
	});
}