CREATE DATABASE fitmentor_DB;
USE fitmentor_DB;

CREATE TABLE cours (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL
);

INSERT INTO cours (title)
VALUES
('Vélo compétitif');