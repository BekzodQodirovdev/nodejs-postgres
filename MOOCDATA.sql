CREATE DATABASE dars35vazifa;

\c dars35vazifa

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE IF NOT EXISTS selesmean (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    phone VARCHAR,
    category VARCHAR,
    addres VARCHAR
);

CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    price REAL,
    selesmean_id INT,
    FOREIGN KEY (selesmean_id) REFERENCES selesmean(id)
);


CREATE TABLE IF NOT EXISTS basket (
    id SERIAL PRIMARY KEY,
    user_id INT,
    product_id INT,
    quentity INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE IF NOT EXISTS coments (
    id SERIAL PRIMARY KEY,
    user_id INT,
    usertext INT,
    product_id INT,
    reyting INT CHECK (reyting >= 1 AND reyting <= 5),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);





-- INSERT INTO users (username,email,password) VALUES
--     ('bekzod123','bekzod@gmail.com','qwerty123');

-- INSERT INTO books (title,author,publication_date,genre,user_id) VALUES
--     ('The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10', 'Fiction', 1);


-- INSERT INTO comments (text,book_id,user_id) VALUES
--     ('Kitobga gab bo`lishi mimkin emas zo`r',3,1);


-- UPDATE books 
-- SET title = 'Great Gatsby'
-- WHERE id = 1;