CREATE TABLE account
(
    id SERIAL  PRIMARY KEY,
    sessionId varchar,
    usernameHash  varchar,
    lastName varchar,
    email varchar,
    passwordHash varchar,
    Avatar text
);


