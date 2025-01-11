# FITMENTOR
Dans le cadre de l’UE INF 4004 du Master 2 SAIM, un appel à projets nous a été soumis nous
invitant à remettre une proposition s’appuyant sur la thématique du sport.
Nous avons donc eu l’idée de nous inspirer d’une plateforme déjà existante : Fiverr. Cette
dernière permet la mise en relation de freelances avec des particuliers recherchant une
prestation bien précise. On peut y trouver par exemple des artistes graphistes et des
développeurs web, mais aussi des comédiens de voix off, entre autres. Notre principe
d’application réside dans la même fonctionnalité, simplement les freelances seront ici des coachs
sportifs, et les particuliers des clients voulant renforcer ou même découvrir une pratique sportive.
Ce site web permettra aux clients de s’identifier puis de choisir parmi
plusieurs catégories de sports prédéfinis les cours qui leur semblent les plus
adaptés pour eux à l’aide de filtres. L’application présentera ses cours à la manière par exemple
de Youtube. Avec des miniatures que nous appellerons ici des vignettes et des titres. Pour faire
un choix éclairé, les utilisateurs pourront laisser des commentaires sur les cours aux autres.
Après avoir fait leur choix, ils auront accès aux cours du coach sélectionné, qui seront situés dans
la page du cours directement.
Ce projet met donc en valeur la pratique du sport, depuis chez soi ou aux alentours de chez soi
en mettant en avant les sports individuels (plus adapté à ce format de cours particulier en ligne). Il
permet aussi une source éventuelle de revenu pour les coachs, même s'il ne sera pas question dans le projet ici de mettre en place un système de
paiement. Pour les utilisateurs, clients de mon application et des coachs qui postent leurs cours, il
s’agit de leur faciliter l’accès à une pratique sportive. Imaginons qu’un client soit situé loin à la
campagne, sans aucune possibilité d’avoir un club, un coach, une salle de sport à proximité.
Cette application lui permettra alors de se connecter avec un professeur qualifié pour qu’il puisse
profiter malgré sa situation d’une pratique sportive convenable.

## Vous trouverez dans cette archive :
- Un répertoire mysql contenant le schema relationnel de bdd et son script
- Un répertoire src contenant toutes les sources actuelles constituant mon projet

### Dans le répertoire src : 
- Les fichiers app.js et database.js qui forment le coeur du back-end de l'application
- Un répertoire fitmentor qui contient l'ensemble du code de la partie front-end de l'application

### Dans le répertoire fitmentor
- Un répertoire src/components qui contient tous les composants react
- Un répertoire src/pages qui contients toutes les pages et leurs fichiers de style css
- Un fichier main.jsx qui constitue le point d'entrée de l'application
- Un fichier App.jsx qui constitue ce qu'affiche l'application quand l'utilisateur rentre pour la première fois sur le site

Le site web déployé est disponible à cette url : https://fit-mentor-58c03730f873.herokuapp.com/

La base de données a été peuplé en conséquences pour que l'application soit testable.

Il vous sera possible de créer un compte, de vous connecter, de consulter l'offre des cours, de consulter un cours en particulier, d'ajouter ce cours en favoris, d'acheter ce cours.
De poster un commentaire si vous avez acheté le cours en question. De trouver les cours par catégorie de sport au travers d'une barre de recherche (tennis, course, musculation, cyclisme, callisthenie, foot, yoga).
Les contenus du cours sont présentés sous forme de liens mais rien ne se trouve derrière (je n'ai pas créé de véritables cours). 

Vous pourrez retrouver le github de l'application à cette url : https://github.com/Malassa17/FITMENTOR
