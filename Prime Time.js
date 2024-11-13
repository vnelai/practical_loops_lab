// Prime time

// Declare an arbitrary number, n.
let n = 4;
let n2 = n + 1; //Check first number after n

while (true) {
    if (n2 < 2) {
        console.log("Invalid");
        break;
    } else {
        let primeNumber = true; // Let's assume n2 is true
        for (let i = 2; i <= Math.sqrt(n2); i++) {
            if (n2 % i === 0) {
                primeNumber = false; 
                break; // Exit for loop if divisor found
            }
        } 
        if (primeNumber) {
            console.log(n2);
            break; // Exit while loop once prime number found
        } else {
            n2++; // Check next number
        }     
    }
}    
  