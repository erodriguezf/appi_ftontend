CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employes(
 id INT(11) NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(45) DEFAULT NULL,
 departamento VARCHAR(45) DEFAULT NULL,
 posición VARCHAR(45) DEFAULT NULL,
 supervisor VARCHAR(45) DEFAULT NULL,
 PRIMARY KEY(id)
);

DESCRIBE employes;

INSERT INTO employes value (4,'Antonia', 'Mecadeo', 'Secretaria', 'Isadora Rincón');


SELECT * FROM employes
