CREATE TABLE account(
	id				SERIAL PRIMARY KEY,
	"usernameHash"	CHARACTER(64),
	email			VARCHAR,
	"passwordHash"	CHARACTER(64),
	"sessionId"		CHARACTER(64)
);