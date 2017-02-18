-- Create new user and password for development. 
CREATE USER node_pg WITH PASSWORD {INSERT YOUR PASSWORD};

-- Create new development database.
CREATE DATABASE recipe_book_db;

-- Grant all recipe_book_db privileges to node_pg user.
GRANT ALL PRIVILEGES ON DATABASE recipe_book_db to node_pg;

-- Create new table to store recipes.
CREATE TABLE IF NOT EXISTS recipes(
  recipe_id             SERIAL            PRIMARY KEY,
  recipe_name           character(255)    NOT NULL,
  recipe_ingredients    text              NOT NULL,
  recipe_directions     text              NOT NULL
);