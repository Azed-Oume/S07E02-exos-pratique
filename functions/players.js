import {
  players as dataPlayers,
  players
} from '../datas/players.js';
import {
  scores as dataScores
} from '../datas/scores.js';
//?...................- EXO 1 -...................................................................................
// créer une function pour extraire les informations d'un joueur à partir de son id.
export function getPlayerById(idValue) {
  for (const player of dataPlayers) {
    if (player.id === idValue) {
      return player;
    }
  }
}

// créer une fonction pour extraire les informations d'un joueur à partir de son prénom ou de son nom ou de son id.
export function getPlayerByFullName(fullName) {
  for (const player of dataPlayers) {
    if (player.id === fullName || player.lastname === fullName || player.firstname === fullName) {
      return player;
    }
  }
}

//?...................- EXO 2 -...................................................................................
// .....................-- compter le nombre de parties gagnées par Maguy -- voir fichier scores.js...............
//?...................- EXO 3 -...................................................................................
//......................-- compter le nombre de parties jouées par un joueur -- voir fichier scores.js............
//?...................- EXO 3 -...................................................................................
//......................-- extraire la liste de tous les joueurs majeurs --.......................................
const majorBirthId = new Date("2003-07-08");
export function listOfMajorPlayers(birthId) {
  const majorPlayers = players.filter((player) => player.birth <= birthId);
  return majorPlayers;
}
const majorPlayers = listOfMajorPlayers(majorBirthId);
console.log(majorPlayers.length);
console.log(majorPlayers);