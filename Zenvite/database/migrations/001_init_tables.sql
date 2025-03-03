-- Create database 
CREATE DATABASE IF NOT EXISTS `zenvite` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- Drop the existing 'users' table if it exists
DROP TABLE IF EXISTS `users`;

-- Create 'users' table 
CREATE TABLE IF NOT EXISTS `users` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Drop the existing 'events' 
DROP TABLE IF EXISTS `events`;

-- Create 'events' table 
CREATE TABLE IF NOT EXISTS `events` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `eventName` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `ticketPrice` DECIMAL(8, 2) NOT NULL,
    `date` DATE NOT NULL,
    `time` TIME NOT NULL,
    `description` TEXT NOT NULL,
    `poster` VARCHAR(255) DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Drop the existing 'personal_access_tokens' table 
DROP TABLE IF EXISTS `personal_access_tokens`;

-- Create 'personal_access_tokens' table 
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `tokenable_type` VARCHAR(255) NOT NULL,
    `tokenable_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `token` VARCHAR(64) UNIQUE NOT NULL,
    `abilities` TEXT DEFAULT NULL,
    `last_used_at` TIMESTAMP NULL DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX(`tokenable_type`, `tokenable_id`)
);

