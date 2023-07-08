# Le Club d'échecs de Maguy

En 2010, avec deux amis, Maguy décide de créer un club d'échecs dans son village.
Pour garder une trace de toutes les parties, elle note tout dans des fichiers javascript.

Dernièrement, le club a accueilli de nouveaux membres, et ils aimeraient bien connaitre le palmarès de chaque joueur, entre autres choses.

En théorie, tout est dans les fichiers, mais ce n'est pas facile d'extraire tout ça... Il va falloir aider Maguy.

## :one: Découverte

Dans le dossier `datas`, vous retrouvez les données qui ont été saisies par Maguy.

- quelle est la structure générale des données ?
- les données écrites dans `players.js` correspondent à quoi dans la réalité ?
- les données écrites dans `scores.js` correspondent à quoi dans la réalité ?

## :two: Mettre à jour les données

Maguy aimerait trouver un moyen de modifier les données des fichiers javascript sans éditer ces derniers. Est-il vraiment possible de le faire ? Si oui, comment devrions-nous nous y prendre ?

## :three: Dictionnaire des données

Pour bien comprendre, rien de mieux qu'un tableau qui décrit les données. J'ai commencé à les faire, mais il va falloir les terminer.

### players.js

| nom de la donnée | type de la donnée | description de la donnée        |
| ---------------- | ----------------- | ------------------------------- |
| firstname        | String            | Prénom du joueur                |
| lastname         | String            | Nom du joueur                   |
| id               | Number            | id du joueur                    |
| birth            | Date              | Date de Naissance du Joueur     |
| createdAt        | Date              | Date de la Création de la Ligne |

### scores.js

| nom de la donnée | type de la donnée | description de la donnée           |
| ---------------- | ----------------- | ---------------------------------- |
| winner           | Number            | id du joueur qui a gagné la partie |
| looser           | Number            | id du joueur qui a perdu la partie |
| createdAt        | Date              | Date de la Création de la Ligne    |

## :four: Extraire des données à la demande

Le répertoire `functions` contient les déclarations de fonctions qui permettent d'extraire des données des tableaux de données.

Il va falloir ajouter de nouvelles fonctions.

1. créer une fonction pour extraire les informations d'un joueur à partir de son prénom ou de son nom **_`c'est fait`_**.
   - déterminer dans quel fichier placer cette fonction
   - construire cette fonction et la tester dans `app.js`

Faire de même pour ces autres demandes :

2. compter le nombre de parties gagnées par Maguy **_`c'est fait`_**.
3. compter le nombre de parties jouées par un joueur **_`c'est fait`_**.
4. extraire la liste de toutes les parties perdues par un joueur **_`c'est fait`_**.
5. extraire la liste de tous les joueurs majeurs
6. extraire la liste de tous les joueurs qui ont rejoint le club avant 2022
7. extraire la liste de tous les joueurs et les trier par
   - ordre alphabétique
   - par age
   - par date d'entrée dans le club
8. calculer le pourcentage de victoires pour chaque joueur du club

## :lollipop: Bonus

Seulement si vous avez le temps, et que vous avez encore envie de coder :

- faire en sorte que les résultats des demandes précédentes affichent les dates au format **JJ/MM/AAAA**
- Quand on extrait les données des scores, faire en sorte que le nom et le prénom du joueur s'affichent en toute lettre sur la même ligne dans le tableau de résultats.
