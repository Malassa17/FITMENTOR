CREATE DATABASE fitmentor_DB;
USE fitmentor_DB;

DROP TABLE clients;
DROP TABLE cours;
DROP TABLE coach;
DROP TABLE contenus;
DROP TABLE commentaires;

CREATE TABLE contenus (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(50)
);

CREATE TABLE cours (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(50) NOT NULL,
    img VARCHAR(50) NOT NULL,
    sport VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    irl BOOLEAN NOT NULL,
    contents INTEGER NOT NULL,

    FOREIGN KEY (contents) REFERENCES contenus(id)
);

CREATE TABLE commentaires (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(500),
    cours INTEGER NOT NULL,

    FOREIGN KEY (cours) REFERENCES cours(id)
);

CREATE TABLE coach (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    identifier VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    tel VARCHAR(10) NOT NULL, 
    cours INTEGER NOT NULL,

    FOREIGN KEY (cours) REFERENCES cours(id)
);

CREATE TABLE clients (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    identifier VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    favs INTEGER NOT NULL,
    cours INTEGER NOT NULL,

    FOREIGN KEY (favs) REFERENCES cours(id),
    FOREIGN KEY (cours) REFERENCES cours(id)
);