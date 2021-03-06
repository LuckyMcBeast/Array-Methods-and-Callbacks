import { fifaData } from './fifa.js';
//console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following
 pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const twentyFourteen = fifaData.filter((item) => {
    return item.Year === 2014 && item.Stage === 'Final'})
const home = twentyFourteen[0]["Home Team Name"]
const away = twentyFourteen[0]["Away Team Name"]
const homeGoals = twentyFourteen[0]["Home Team Goals"]
const awayGoals = twentyFourteen[0]["Away Team Goals"]

console.log(`Home Team: ${home}`)
console.log(`Away Team: ${away}`)
console.log(`${home} Goals: ${homeGoals}`)
console.log(`${away} Goals: ${awayGoals}`)
console.log(`Winner: ${gameWinner(home, away, homeGoals, awayGoals)}`)

function gameWinner(hTeam, aTeam, hGoals, aGoals){
    if(hGoals>aGoals){return hTeam;}
    else if(aGoals>hGoals){return aTeam;}
    else {return "Tie";}
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument 
and returns an array of objects with only finals data */

function getFinals(data) {
   const finals = data.filter((item) => {
        return item.Stage === 'Final';
    })
    return finals;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback 
function `getFinals`, and returns an array called `years` containing all of the years in 
the dataset */

function getYears(getFinals) {
    const years = getFinals.map((item) => {
        return {Year : item.Year}
    })
    return years
};

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts 
the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. 
Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    const winners = getFinals.map((item) => {
        return {Winner : gameWinner(item["Home Team Name"], item["Away Team Name"],
         item["Home Team Goals"], item["Away Team Goals"])}
    })
    return winners;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` 
that accepts the following parameters and returns a set of strings "In {year}, {country} won 
the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


function getWinnersByYear(getWinners, getYears) {
    
    const winnersByYear = getWinners.map((winner, index) => {
        return {Winner : winner.Winner , Year : getYears[index].Year}
    })
    let winYeaStrings = []
    winnersByYear.forEach(winYea => {winYeaStrings.push(`In ${winYea.Year}, ${winYea.Winner} won the world cup!`)})
    return winYeaStrings;
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals 
scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeTeam = data.reduce((total, goals) => {
        return total += goals["Home Team Goals"]/data.length;
    }, 0)
    const awayTeam = data.reduce((total, goals) => {
        return total += goals["Away Team Goals"]/data.length;
    }, 0)

    return {"Home Team Avg" : homeTeam, "Away Team Avg" : awayTeam}
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters 
`data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getWinnersInitials(getFinals){
    const winners = getFinals.map((item) => {
        return {initials : gameWinner(item["Home Team Initials"], item["Away Team Initials"],
         item["Home Team Goals"], item["Away Team Goals"])}
    })
    return winners;
};


function getCountryWins(getWinnersInitials, teamInitials) {
    const countryWins = getWinnersInitials.filter((item) => {
       return teamInitials === item.initials;
    })
    return countryWins.length;
};

console.log(getCountryWins(getWinnersInitials(getFinals(fifaData)), "BRA"));


/* Stretch 3: Write a function called getGoals() that accepts 
a parameter `data` and returns the team with the most goals score per 
appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter 
`data` and calculates the team with the most goals scored against them per appearance
 (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any 
stretch goals of your chosing as listed in the README file. */
