/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
 DROP DATABASE IF EXISTS movielist;

 CREATE DATABASE movielist;

 USE movielist;

 CREATE TABLE movies (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(30),
   release_date date,
   runtime INT,
   metascore INT,
   imdb_rating  DECIMAL(7,2),
   watched TINYINT(1)
 );

