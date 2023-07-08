import {
   scores as dataScores,
   scores,
} from '../datas/scores.js';
import {
   players as dataplayers,
} from '../datas/players.js';
import {
   getPlayerByFullName
} from './players.js';



// console.table(dataScores);



//?...................- EXO 2 -...................................................................................
// compter le nombre de parties gagnées par Maguy
export function lesVictoiresDeMaguy() {
   let count = 0;
   for (let i = 0; i < scores.length; i++) {
      if (scores[i].winner === 5) {
         count++;
      }
   }
   // console.log(count);
   return count;
}
// extraire tous les parties qui ont été gagnées par Maguy

export function getAllVictoriesOfMaguy() {
   return dataScores.filter(score => score.winner === 5);
}

//?...................- EXO 3 -...................................................................................
//......................-- compter le nombre de parties jouées par un joueur --...................................
export function getNumberOfGamesPlayedByPlayer(playerId) {
   return scores.reduce((count, score) => {
      if (score.winner === playerId || score.looser === playerId) {
         return count + 1;
      }
      return count;
   }, 0);
}
//* Dans cette fonction, la méthode reduce est utilisée sur le tableau scores. La fonction de rappel reçoit deux arguments :
//*  count (qui est l'accumulateur) et score (qui est l'élément du tableau en cours de traitement). Si l'ID du joueur spécifié:
//*  (playerId) correspond à l'ID du gagnant (score.winner) ou à l'ID du perdant (score.looser) du jeu, Alors la fonction de rappel
//*  renvoie count + 1 pour incrémenter le nombre total de parties jouées. Sinon, elle renvoie simplement count.


//?...................- EXO 4 -...................................................................................
//......................-- extraire la liste de toutes les parties perdues par un joueur --.......................
export function getAllVictoriesByPlayer(playerId) {
   const player = getPlayerByFullName(playerId);
   if (player) {
      console.log("Le joueur", player.firstname, "a perdu certaine de ces parties.");
   } else {
      console.log("Aucun joueur trouvé avec l'ID", playerId);
   }
   const lostGames = dataScores.filter(score => score.looser === playerId);
   console.log("la list complete des parties pérdu", lostGames);
}