// https://gist.github.com/wofockham/dacf2da17c743afb2b17

// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectangleA = {
    length: 4,
    width: 4
};

const isSquare = function(rectangleA) {
    if (rectangleA.length == rectangleA.width) {
        return true;
    } else {    
        return false;
    }
};

const area = function(rectangleA) {
    return rectangleA.length * rectangleA.width;
};

const perimeter = function(rectangleA) {
    return 2 * (rectangleA.length + rectangleA.width);
};

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (triangle) {
    if (triangle.sideA == triangle.sideB && triangle.sideB == triangle.sideC && triangle.sideC == triangle.sideA) {
        return true;
    }
    else {
        return false;
    }
}

const isIsosceles = function (triangle){
    if (triangle.sideA == triangle.sideB) {
        return true; 
    }
    if (triangle.sideB == triangle.sideC) {
        return true; 
    }
    if (triangle.sideC == triangle.sideA) {
        return true; 
    }
    else {
        return false;
    }
};

const area = function (triangle) {
    const p = ((triangle.sideA + triangle.sideB + triangle.sideC)/2);
    return Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC) )
};

const isObtuse = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;

    if (c > a && b) {
        if (a*a + b*b > c*c) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (a > b && c) {
        if (b*b + c*c > a*a) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (b > c && a) {
        if (c*c + a*a > b*b) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55
// ```

const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",  
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (cart) {
    let total = 0;
    for (const item in cart) {
      total = total + Number(cart[item]) // Number converts a string to a number
      console.log(`A ${item} has been added at a price of $${cart[item]}`);
      console.log(`The new total is $${total}`)
    }
}

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

const validateCreditCard = function (number) {
    const cleanNumber = number.replace(/-/g, "");
    const ccValidityError = {
        creditcardNumber: '', 
        valid: '', 
        error: ''
    }

    ccValidityError.creditcardNumber = number

    const arrayCleanNumber = cleanNumber.split("");
    let total = 0 

    // console.log(arrayCleanNumber)
    
    for (let i = 0; i < arrayCleanNumber.length; i++) {
        total = total + Number(arrayCleanNumber[i])
        // console.log(total)
    };
    
    if (isNaN(cleanNumber)) {
        ccValidityError.valid = 'not valid';
        ccValidityError.error = 'What you have entered is not a number';

        console.log(`The credit card number of: ${ccValidityError.creditcardNumber}, Is ${ccValidityError.valid} because ${ccValidityError.error}`)
        // return 'Not a Number!';
    }
    else if (cleanNumber.length != 16) {
        ccValidityError.valid = 'not valid';
        ccValidityError.error = 'as the length needs to be 16 numbers in length';

        console.log(`The credit card number of: ${ccValidityError.creditcardNumber}, Is ${ccValidityError.valid} because ${ccValidityError.error}`)
        // return 'The length needs to be 16 numbers';
    }
    else if (total == 16) {
        ccValidityError.valid = 'not valid';
        ccValidityError.error = 'as you can not assign each number as 1';

        console.log(`The credit card number of: ${ccValidityError.creditcardNumber}, Is ${ccValidityError.valid} because ${ccValidityError.error}`)
        // return 'You can not assign each number as 1';
    }
    else if (Number(arrayCleanNumber[(arrayCleanNumber.length - 1)]% 2 != 0)) {
        ccValidityError.valid = 'not valid';
        ccValidityError.error = 'as the final digit must be even';

        console.log(`The credit card number of: ${ccValidityError.creditcardNumber}, Is ${ccValidityError.valid} because ${ccValidityError.error}`);

        // return 'The final digit must be even';
    }
    else if (Number(arrayCleanNumber[0]) * 16 == total) {
        ccValidityError.valid = 'not valid';
        ccValidityError.error = 'as the you can not have all the numbers the same digit';

        console.log(`The credit card number of: ${ccValidityError.creditcardNumber}, Is ${ccValidityError.valid} because ${ccValidityError.error}`);

        // return 'You can not have all the numbers the same digit';
    }
    else {
    ccValidityError.valid = 'valid';
    ccValidityError.error = 'as it meets all the criteria';

    console.log(`The credit card number of: ${ccValidityError.creditcardNumber}, Is ${ccValidityError.valid} because ${ccValidityError.error}`)
    }

    return ccValidityError
    // return Number(cleanNumber);

    // for (let i = 1; i < arrayCleanNumber.length; i++) {
    //     if (arrayCleanNumber[0] != arrayCleanNumber[i]) {
    //         console.log(arrayCleanNumber[0], arrayCleanNumber[i])
    //         return Number(cleanNumber);
    //     }
    //     else {
    //         return 'You need to have at least 2 digits'
    //     };
    // }
}

// <done> Remove hyphens
// <done> Check that the number entered is all numbers 
// <done> Check that it is 16 digits long 
// <done> Must have at least two different digits
// <done> Final digit must be even 
// <done> Sum of all digits must be greater than 16 
// The return must be an object indicating whether the credit card is valid, and if not, what the error is


// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working. 

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance. 

// ### Tips

// Don't overthink this. Shorter code is probably the answer. 

// ## Bonus

// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 

// ## Additional

// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them. 