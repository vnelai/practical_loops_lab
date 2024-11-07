// Practical Loops ALAB 308.3.1

// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// Case 1: (Best way in my opinion due to the efficiency )
for (let i = 1; i <= 100; i++){
    console.log(i);
}
// Case 2:
let i = 1;
while (i <= 100){
    console.log(i);
    i++
}

// If a number is divisible by 3, log “Fizz.”
// Case 1: (Best way in my opinion compact and efficient)
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }  
}

// Case 2:
let i= 1;
while (i <= 100) {
    if (i % 3 == 0) {
       console.log("Fizz");
    }
    i++ ; 
}

// If a number is divisible by 5, log “Buzz.”
// Case 1: (Best case due to efficiency)
for (i = 1; i <=  100; i++) {
    if (i % 5 == 0) {
        console.log("Buzz");
    }
}

let i = 1;
while (i <= 100) {
    if (i % 5 == 0) {
        console.log("Buzz");
    }
    i++;
}


// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// Case 1: (Base case due to efficiency)
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    }
}

// Case 2:
let i = 1;
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz")
    }
    i++ ;
}

// If a number is not divisible by either 3 or 5, log the number.
// Case 1: (Best case due to efficiency)
for ( let i = 1; i <= 100; i++) {
    if (i % 3 != 0 && i % 5 != 0 ){
        console.log(i);
    }
}

// Case 2:
let i = 1;
while (i <=100){
    if (i % 3 !=0 && i % 5 != 0) {
        console.log(i);
    }
    i++;
}