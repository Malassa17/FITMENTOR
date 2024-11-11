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
