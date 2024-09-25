// console.log('loaded');


// let teamscores = window.localStorage.getItem('teamOneTotal');



// // let teamScore = 0;

// const teamOne = document.querySelector('.teamOne');

// // const teamTwo = document.querySelector('button.teamTwo');



// const teamOneScore = document.querySelector('.teamOneScore') || 0;
// const teamOneTotal = document.querySelector('.teamOneTotal') || 0;

// teamOne.addEventListener('click', plusPoints);

// // console.log(totaal);
// // console.log(teamTwo);


// teamOneTotal.innerHTML = window.localStorage.getItem('teamOneTotal');

// function plusPoints() {

//         let totaal = parseInt(window.localStorage.getItem('teamOneTotal') || 0);
//         localStorage.setItem('teamOneTotal', totaal+=3);

// // localStorage.clear();
//     teamOneTotal.innerHTML = window.localStorage.getItem('teamOneTotal');

//     console.log(window.localStorage.getItem('teamOneTotal'));
//     teamOneScore.innerHTML = 3;
//     // return totaal;
// }



// Functie om de opgeslagen scores uit localStorage te halen
function getStoredScores() {
    let storedScores = localStorage.getItem('teamScores');
    if (storedScores) {
        return JSON.parse(storedScores);
    } else {
        // Initialiseer scores als er nog niets is opgeslagen
        return {
            team1: 0,
            team2: 0,
            team3: 0,
            team4: 0,
            team5: 0,
            team6: 0,
            team7: 0,
            team8: 0,
            team9: 0,
            team10: 0,
            team11: 0,
            team12: 0
        };
    }
}

// Sla de scores op in localStorage
function saveScores(scores) {
    localStorage.setItem('teamScores', JSON.stringify(scores));
}

// Haal de scores op en sla ze op in een variabele
let teamScores = getStoredScores();

// Functie om de punten van een team bij te werken
function addPoints(team) {
    // Verhoog de score van het winnende team met 3 punten
    teamScores[team] += 3;
    
    // Update de puntenstand in de HTML
    document.getElementById(`${team}-points`).innerText = teamScores[team];
    
    // Sla de nieuwe scores op in localStorage
    saveScores(teamScores);
}

// Update de punten in de HTML bij het laden van de pagina
function updateScoresOnLoad() {
    for (let team in teamScores) {
        document.getElementById(`${team}-points`).innerText = teamScores[team];
    }
}

// Roep de functie aan om de scores bij het laden van de pagina te updaten
updateScoresOnLoad();


