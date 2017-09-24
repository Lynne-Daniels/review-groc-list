DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE groceries (
  id INT NOT NULL AUTO_INCREMENT,
  quantity INT NOT NULL,
  description VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO groceries (quantity, description) VALUES (6, 'beer');