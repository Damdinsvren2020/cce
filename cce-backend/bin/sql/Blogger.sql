CREATE TABLE Blogger
(
 id SERIAL PRIMARY KEY,
 firstName VARCHAR,
 lastName VARCHAR,
 avatar VARCHAR
);
INSERT INTO Blogger (lastName,avatar)
VALUES ( 'ADMIN','avatar.jpg' );