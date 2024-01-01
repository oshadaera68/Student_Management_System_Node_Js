DROP DATABASE IF EXISTS node_customer;
CREATE DATABASE IF NOT EXISTS node_customer;
USE node_customer;
#=============================
CREATE TABLE IF NOT EXISTS customer(
    nic VARCHAR(20) PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    address VARCHAR(100) NOT NULL,
    salary DOUBLE
);
SHOW TABLES;
DESC customer;
INSERT INTO customer VALUES('95','Kamal','Colombo',25000),
('985','Jagath','Kalutara',80000),
('785','Wasantha','Panadura',45000);

SELECT * FROM customer;