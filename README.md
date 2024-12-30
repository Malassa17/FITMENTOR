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
plusieurs catégories de sports prédéfinis les cours et les coachs qui leur semblent les plus
adaptés pour eux à l’aide de filtres. L’application présentera ses cours à la manière par exemple
de Youtube. Avec des miniatures que nous appellerons ici des vignettes et des titres. Pour faire
un choix éclairé, les utilisateurs pourront laisser des commentaires sur les cours aux autres.
Après avoir fait leur choix, ils auront accès aux cours du coach sélectionné, qui seront situés dans
la page du cours directement.
Ce projet met donc en valeur la pratique du sport, depuis chez soi ou aux alentours de chez soi
en mettant en avant les sports individuels (plus adapté à ce format de cours particulier en ligne). Il
permet aussi une source éventuelle de revenu pour les coachs, même si comme nous le
détaillerons plus tard, il ne sera pas question dans le projet ici de mettre en place un système de
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
- Un répertoire src/data qui contiendra toutes les images/vignettes de l'application
- Un fichier main.jsx qui constitue le point d'entrée de l'application
- Un fichier App.jsx qui constitue ce qu'affiche l'application quand l'utilisateur rentre pour la première fois sur le site

Cette deuxième livraison de code vous donne l'occasion de regarder dans les détails mon travail fournit pour cette partie front-end de l'application.
Dans les faits, elle n'est pas exécutable/testable de votre côté. La connexion à la base mysql est gérée par des variables d'environement que je ne partage pas encore. 
Il s'agit simplement de mettre à dispositon le code pour que vous puissiez vous rendre compte de la manière dont est articulé le code pour faire fonctionner les visuels du site web. 

J'ai donc pris soins de mettre à disposition des captures d'écrans de l'application en marche pour montrer le visuel en action de mon application. Captures que vous pourrez retrouver dans le dossier
captures à la racine de cette archive.

Je suis en l'état satisfait des écrans visuellement. Cependant il reste comme vous le constaterez des réglages à faire pour que les résultats promis soient terminés lors de la livraison finale. 
Ces réglages concerneront principalement la page de cours, pas encore fonctionnelle. Le visuel de l'accueil avec tous les cours affiché, pour rendre le tout plus ergonomique. 

Vous pourrez retrouver le github de l'application à cette url : https://github.com/Malassa17/FITMENTOR
