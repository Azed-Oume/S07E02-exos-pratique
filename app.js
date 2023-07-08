/**
 * Module dependencies.
 */
import * as fscores from './functions/scores.js';
import * as fplayers from './functions/players.js';
import {
    players
} from './datas/players.js';
import {
    scores
} from './datas/scores.js';
import {
    getPlayerByFullName
} from './functions/players.js';

console.log(fplayers.getPlayerById(5));
console.table(fscores.getAllVictoriesOfMaguy());
console.log("Le Nom de", fplayers.getPlayerByFullName("Uni"));
console.log("Le Prénom de", fplayers.getPlayerByFullName('Maguy'));
console.log("Ces Infos complete", fplayers.getPlayerByFullName(5));

console.log("Maguy a Gagné", fscores.lesVictoiresDeMaguy(), "Parties");
console.log("ce joueur a jouer", fscores.getNumberOfGamesPlayedByPlayer(5), "partie");


console.log("Ce joueur a perdue toutes ses partie", fscores.getAllVictoriesByPlayer(5));

console.log("list des joueurs majeur", fplayers.listOfMajorPlayers(Date));
const majorPlayers = fplayers.listOfMajorPlayers(2);
console.log(majorPlayers.length);
console.log(majorPlayers);