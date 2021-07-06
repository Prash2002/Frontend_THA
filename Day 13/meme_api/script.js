const im = document.querySelector(".img");
const tl = document.querySelector(".title");
let loading = true;


function displayMeme(image, title){
    im.style.background = `url('${image}')`;
    tl.innerHTML= title;
    console.log(image)
}


async function fetchMeme(){
    im.style.background = `url("https://i.pinimg.com/originals/4f/43/2d/4f432d9234988a5f33b26e0ba06bc6fe.gif")`;
    var data = await fetch('https://meme-api.herokuapp.com/gimme');
    var jsonData = await data.json();
    var image = jsonData.url;
    var title = jsonData.title;
    displayMeme(image, title);
}

fetchMeme();