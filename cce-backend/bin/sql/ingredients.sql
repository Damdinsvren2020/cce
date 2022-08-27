CREATE TABLE ingredients (
  id        SERIAL PRIMARY KEY,
  info      json
);

INSERT INTO ingredients (info) VALUES (
  '{
    "salad": 0, 
    "bacon": 0, 
    "cheese": 0, 
    "meat": 0
  }'
);
