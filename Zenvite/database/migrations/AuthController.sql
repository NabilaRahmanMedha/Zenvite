-- Creating users table if not already exists
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creating personal_access_tokens table if not already exists
CREATE TABLE IF NOT EXISTS personal_access_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- insert a new user 
INSERT INTO users (name, email, password)
VALUES ('userName', 'email@example.com', 'hashedPassword'); 

-- validate the login
-- password will be checked at the application level 
SELECT * FROM users WHERE email = 'email@example.com';  

-- deletes all tokens associated with the user upon logout.
DELETE FROM personal_access_tokens WHERE user_id = 'userId';  

-- deletes a user from the `users` table by the user's ID.
DELETE FROM users WHERE id = 'userId';

-- For testing purposes
SELECT * FROM users;

-- For testing purposes
SELECT * FROM personal_access_tokens;
