const body = document.querySelector("body");
const img = document.querySelector(".image");
const txt = document.querySelector(".text");

var image=[
    "https://wallpaperaccess.com/full/1761712.jpg",
    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123740332/original/934af649631a2dc8730f0b63cfed1e63908b6f08/create-anime-background-style.jpg",
    "https://wallpapercave.com/wp/wp2771916.jpg",
    "https://wallpapercave.com/wp/wp2760740.jpg"
];

function doubleClick(){
    var n = image.length;
    var ran = Math.floor(Math.random()*n);
    img.src = image[ran];
}


function mouseOver(){
    txt.style.color = "red";
    txt.style.backgroundColor = "black";
}


function mouseOut(){
    txt.style.color = "white";
    txt.style.backgroundColor = "red";
}

function resize(){
    body.style.backgroundColor="black";
    console.log("asas")
}
