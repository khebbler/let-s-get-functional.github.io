// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); // _ = {filter: ?, map:}

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/*var maleCount = function(array) {
    // Initializing count variable
    let count = 0;
    // Iterating through array
    for (let i = 0; i < array.length; i++) {
        // Checking if customer is male
        if (array[i].gender === 'male') {
            // Incrementing count variable
            count++;
        }
    }
    // Returning count variable
    return count;
};
*/

var maleCount = function(array) {
    let males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    })
    return males.length;
}


var femaleCount = function(array){
    let females = _.filter(array, function(customer) {
        return customer.gender === 'female';
    });
    return females.length;
}
/*
// using reduce
var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
        // accumulator = 1
        if (curernt.gender === 'female') {
            accumulator += 1; // accumulator = 2
        }
        return accumulator; // return 2
    }, 0);
    return females;
};
*/


/*
// callback
function(accumulator, current){

}, 0);

// seed => procides your return an initial datatype
    // need to return a number => make a seed of 0
    // need to return an array => mae a seed of []

*/

var oldestCustomer = function(array) {
    // Finding customer with highest age using reduce function
    let oldest = _.reduce(array, function(acc, customer) {
        // Checking if customer's age is higher than accumulator's age
        if (customer.age > acc.age) {
            // Returning current customer if true
            return customer;
        } else {
            // If not, returning accumulated customer
            return acc;
        }
    })
    // Returning name of oldest customer
    return oldest.name;
};

var youngestCustomer = function(array) {
    // Finding customer with the lowest age using reduce function
    let youngest = _.reduce(array, function(acc, customer) {
        // Checking if customer's age is lower than accumulator's age
        if (customer.age < acc.age) {
            // Returning current customer if true
            return customer;
        } else {
            // If not, returning accumulated customer
            return acc;
        }
    })
    // Returning name of youngest customer
    return youngest.name;
};

var averageBalance = function(array) {
}

/*
I: array, letter
O: number
*/

var firstLetterCount = function(customers, letter) {
    // Initialziing targetLetter & converting to loweracse
    var targetLetter = letter.toLowerCase();

    // Initializing count variable
    var count = 0;

    // Iterating through customers
    for (var i = 0; i < customers.length; i++) {

        // Initializing firstLetter and converting to lowercase
        var firstLetter = customers[i].name.charAt(0).toLowerCase();

        // Checking if firstLetter = targetLetter
        if (firstLetter === targetLetter) {
        // Incrementing count
        count++;
    }
  }
  // Returning count
  return count; 
}

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
