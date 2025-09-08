DROP TABLE users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(32), 
    phone VARCHAR(20) NOT NULL,
    role ENUM('driver', 'rider', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP TABLE users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255),  -- better to allow longer hashes (e.g., bcrypt 60 chars)
    phone VARCHAR(10) NOT NULL,
    role ENUM('driver', 'rider', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT chk_phone CHECK (phone REGEXP '^[6-9][0-9]{9}$'),
    CONSTRAINT chk_email CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')
);

INSERT INTO users (name, email, password, phone, role)
VALUES ('Sonu Rao', 'sonu@gmail.com', 'password' , '9876543210', 'rider');

INSERT INTO users (name, email, password, phone, role)
VALUES ('Monu Pande', 'monu@gmail.com', 'password' , '9786543210', 'rider');

SELECT * FROM users; 

