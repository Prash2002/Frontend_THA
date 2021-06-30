// 1. Write a JavaScript program to list the properties
// of a JavaScript object. 
//Sample object: 
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
}; 

console.log(Object.keys(student));

// 2. Write a JavaScript program to delete the rollno property
// from the following object. Also print the object before or 
//after deleting the property. 
//Sample object: 
const student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
}; 
console.log(student);
delete student.rollno;
console.log(student);

// 3. Write a JavaScript program to get the length of a 
// JavaScript object.  Sample object : 
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
}; 
console.log(Object.keys(student).length);

// 4. Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of 
//the following books. 
var library = [ 
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true 
    }, 
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true 
    }, 
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false 
    }
]; 

for(let item in library){
    console.log("Name" + library[item].title + "- "+ library[item].author +"\nReading Status? " +library[item].readingStatus);
}

// 5. Write a JavaScript program to get the volume of a Cylinder 
//with four decimal places using object classes. Volume of a 
//cylinder : V = πr2h where r is the radius and h is the height 
//of the cylinder. Try To Attempt : Difficult Level Increased 
const cylinder = {
    radius: 10,
    height: 20,
    volume: function(){
        return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
    }
};

console.log(cylinder.volume());

//6. Write a JavaScript program to sort an array of JavaScript 
//objects.  Sample Object : 

var library = [ 
    { 
        title: 'The Road Ahead', 
        author: 'Bill Gates', 
        libraryID: 1254 
    }, 
    { 
        title: 'Walter Isaacson', 
        author: 'Steve Jobs', 
        libraryID: 4264 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245 
    }
];

console.log(library.sort());
