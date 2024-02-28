CREATE DATABASE `apolliculture`; 

USE `apolliculture`; 

--  users
CREATE  TABLE  `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `admin` BOOLEAN NOT NULL,
PRIMARY KEY (`id`) );

--  orders
CREATE  TABLE  `orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `order_date` DATE NOT NULL,
  `ammount` DOUBLE NOT NULL,
  foreign key (`user_id`) references `users`(`id`) on delete cascade on update cascade,
PRIMARY KEY (`id`) );

--  products
CREATE  TABLE  `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `create_date` DATE NOT NULL,
  `units_stock` INT NOT NULL,
  `user_id` INT NOT NULL,
  foreign key (`user_id`) references `users`(`id`) on delete cascade on update cascade,
PRIMARY KEY (`id`) );

--  order details
CREATE  TABLE  `order_details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `price` DOUBLE NOT NULL,
  `quantity` INT NOT NULL,
  foreign key (`order_id`) references `orders`(`id`) on delete cascade on update cascade,
  foreign key (`products_id`) references `products`(`id`) on delete cascade on update cascade,
PRIMARY KEY (`id`) );

--  categories
CREATE  TABLE  `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(500) NOT NULL,
  `type` VARCHAR(30) NOT NULL,
PRIMARY KEY (`id`) );

--  products categories
CREATE  TABLE  `products_categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  foreign key (`products_id`) references `products`(`id`) on delete cascade on update cascade,
  foreign key (`categories_id`) references `categories`(`id`) on delete cascade on update cascade,
PRIMARY KEY (`id`) );