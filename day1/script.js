Array.from(document.querySelectorAll('button')).forEach(function(button, index) {
    console.log(index);
    button.addEventListener("click", function(){
       alert('alert');
     });
   });
/*
Array.from simplifies DOM manipulation and working with multiple variables
let button = document.querySelector("button");
button.addEventListener("click", function(){
    alert();
});

let button2 = document.querySelector("button");
button.addEventListener("click", function(){
    alert();
});
let button3 = document.querySelector("button");
button.addEventListener("click", function(){
    alert();
});
let button4 = document.querySelector("button");
button.addEventListener("click", function(){
    alert();
});
*/

//data type examples
//    ["any", "kind", "of", "data"]
//    [1, 2, 3, 4]
//    document
//    console
// let ourArray = ["any", "kind", "of", "data"];
// ourArray.forEach

/* NOTES
Array.from( //Array class object & from method

    document.querySelectorAll('button')

)
    
    .forEach( // Array forEach method - Array specific for loop

        function(button) { //anonymous function for each item in the array
            //the parameter is representative of each item

        button.addEventListener("click", function(){
        alert('alert');
    });
}
);
*/

//create an array of animals
let animals = ["cats", "dogs"];
//reassign array's index of 0
animals[0] = "tigers";
//assign a value to the array's index of 5
animals[5] = "frogs"
//print the array
console.log(animals);
//print the array's index of 2
console.log(animals[2]);
//output all the animals in the array
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
//use a for loop to output the names and the index

//use the forEach method to do the same