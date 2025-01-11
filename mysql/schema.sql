--Schéma de création de base de données, utilisé également pour générer le shéma relationnel de base de données

CREATE DATABASE fitmentor_DB;
USE fitmentor_DB;

DROP TABLE obtenus;
DROP TABLE favoris;
DROP TABLE commentaires;
DROP TABLE contenus;
DROP TABLE cours;
DROP TABLE clients;
DROP TABLE coach;

CREATE TABLE coach (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    identifier VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    tel VARCHAR(10) NOT NULL
);

CREATE TABLE clients (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    identifier VARCHAR(50) NOT NULL,
    pass VARCHAR(500) NOT NULL
);

CREATE TABLE cours (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    img VARCHAR(50) NOT NULL,
    sport VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    irl BOOLEAN NOT NULL,
    coach INTEGER NOT NULL,

    FOREIGN KEY (coach) REFERENCES coach(id)
);

CREATE TABLE contenus (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(50) NOT NULL,
    cours INTEGER NOT NULL,

    FOREIGN KEY (cours) REFERENCES cours(id)
);

CREATE TABLE commentaires (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(1000),
    cours INTEGER NOT NULL,

    FOREIGN KEY (cours) REFERENCES cours(id)
);

CREATE TABLE favoris (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    client INTEGER NOT NULL,
    cours INTEGER NOT NULL,

    FOREIGN KEY (client) REFERENCES clients(id),
    FOREIGN KEY (cours) REFERENCES cours(id)
);

CREATE TABLE obtenus (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    client INTEGER NOT NULL,
    cours INTEGER NOT NULL,

    FOREIGN KEY (client) REFERENCES clients(id),
    FOREIGN KEY (cours) REFERENCES cours(id)
);

--Plusieurs coachs d'exemples
INSERT INTO coach (identifier, pass, mail, tel) VALUES ('Coach-Michael', 'pass', 'coaching-michael@gmail.com', '0606060606');
INSERT INTO coach (identifier, pass, mail, tel) VALUES ('Arianna', 'pass', 'arianna-yoga@gmail.com', '0606060606');
INSERT INTO coach (identifier, pass, mail, tel) VALUES ('Thomas', 'pass', 'thomas-football@gmail.com', '0606060606');
INSERT INTO coach (identifier, pass, mail, tel) VALUES ('Julien', 'pass', 'julien-tennis@gmail.com', '0606060606');
INSERT INTO coach (identifier, pass, mail, tel) VALUES ('Marie', 'pass', 'marie-martin@gmail.com', '0606060606');

--Tous les cours déjà enregistrés
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Coaching de musculation', '3 séances à la semaine de musculation pour débutant', 'musculation.jpg', 'musculation', 30, 1, 1);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Cours de yoga', 'Cours de yoga pour se détendre et apprendre à réguler ses énergies, 10 positions et 3 heures de contenus pratique', 'yoga.jpg', 'yoga', 100, 0, 2);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('FootBall', 'Apprendre à gérer le stress sur le terrain, approche de visualisation et de préparation de matchs', 'foot.jpg', 'foot', 50, 0, 3);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Callisthénie', 'Muscler son corps, apprendre les mouvements de bases', 'callisthenie.jpg', 'callisthenie', 75, 1, 1);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Cyclisme : bases du cyclisme', 'Tout ce que vous avez besoin de savoir niveau matériel et pratique pour commencer le sport', 'velo.jpg', 'cyclisme', 100, 0, 5);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Tennis techniques avancées', 'Apprendre à maîtriser les techniques avancées du tennis, 3 séances de 2 heures', 'tennis.jpg', 'tennis', 150, 0, 4);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('FootBall : préparation physique', 'Préparation physique pour bien apréhender avant le match, 3 séances de 2 heures', 'foot.jpg', 'foot', 100, 0, 3);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Tennis : le service', 'Tous savoir sur le service au tennis', 'tennis.jpg', 'tennis', 25, 0, 4);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Course à pied : marathon', 'Préparation pour un marathon, 10 séances', 'course.jpg', 'course', 200, 1, 5);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Yoga sportif', 'Cours de yoga sportif pour se dépenser, 3 heures de contenus pratique', 'yoga.jpg', 'yoga', 100, 0, 2);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Course à pied : footing quotidien', 'Se mettre à la course à pied étape par étape', 'course.jpg', 'course', 50, 1, 5);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Course à pied : chercher la performance', 'Cours de course à pied pour ceux qui recherchent la performance', 'course.jpg', 'course', 75, 1, 5);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Yoga : méditation', 'Cours de yoga pour apprendre à méditer', 'yoga.jpg', 'yoga', 50, 0, 2);
INSERT INTO cours (title, description, img, sport, price, irl, coach) VALUES ('Callisthénie pour pratiquants avancés', 'Un approfondissement de la pratique pour passer au stade supérieur dans votre approche de la discipline', 'callisthenie.jpg', 'callisthenie', 75, 1, 2);  

INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 1);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 2);
INSERT INTO contenus (content, cours) VALUES ('Lien pour le pdf', 2);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 3);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 4);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 5);
INSERT INTO contenus (content, cours) VALUES ('Lien pour le pdf', 5);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 6);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 7);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 8);
INSERT INTO contenus (content, cours) VALUES ('Lien pour le pdf', 8);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 9);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 10);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 11);
INSERT INTO contenus (content, cours) VALUES ('Lien pour le premier pdf', 11);
INSERT INTO contenus (content, cours) VALUES ('Lien pour le deuxième pdf', 11);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 12);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 13);
INSERT INTO contenus (content, cours) VALUES ('Lien vers la vidéo', 14);
INSERT INTO contenus (content, cours) VALUES ('Lien pour le pdf', 14);