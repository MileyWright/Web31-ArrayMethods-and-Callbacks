import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(fifaData[828]['Home Team Name'])
console.log(fifaData[828]['Away Team Name'])
console.log(fifaData[828]['Home Team Goals'])
console.log(fifaData[828]['Away Team Goals'])
console.log(fifaData[828]['Win conditions'])



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(item => {
        return item.Stage === "Final"
    })
};
console.log('Task 2:' , getFinals(fifaData))

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    const year = cb.map(item => {
        return item.Year
    })
    return year
};

console.log('Task 3:', getYears(getFinals(fifaData)));



/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
   const winners = cb.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Name']
        } else if(item['Home Team Goals'] < item['Away Team Goals']) {
            return item['Away Team Name']
        } else if(item['Home Team Goals'] === item['Away Team Goals']) {
            return item['Win conditions']
        } 
    })
    return winners
};

console.log('Tasks 5:', getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log(getYears(getFinals(fifaData)).length)
function getAllWinners(cb1, cb2) {
    for(let i=0; i < cb1.length; i++){
        let year = cb2[i];
        let country = cb1[i];
        console.log(`In ${year}, ${country} won the world cup!`)
    }
};

getAllWinners(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData)) );

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, TI) {
    const winners = data.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Initials']
        } else if(item['Home Team Goals'] < item['Away Team Goals']) {
            return item['Away Team Initials']
        } 
    })
    let arr = winners.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});
    return arr[TI]

};

console.log(getCountryWins(getFinals(fifaData), "BRA"));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */