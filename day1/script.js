Array.from(document.querySelectorAll('button')).forEach(function(button) {
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


