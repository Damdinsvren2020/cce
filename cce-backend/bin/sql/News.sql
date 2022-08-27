CREATE TABLE News
(
 id SERIAL  PRIMARY KEY,
date timestamp,
text varchar,
title varchar,
publisher varchar,
categoryId int,
categoryName varchar,
image varchar,
che  boolean

);

ALTER TABLE News
ADD FOREIGN KEY (categoryName) REFERENCES Category(Name);
