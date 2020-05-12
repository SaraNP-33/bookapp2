CREATE DATABASE books_db;
USE books_db;

CREATE TABLE books (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR (255) NOT NULL,
    -- author VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);