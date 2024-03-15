CREATE DATABASE `apolliculture`; 

USE `apolliculture`; 

--  users
CREATE  TABLE  `users` (
  `id` VARCHAR(100) NOT NULL DEFAULT(uuid()),
  `username` VARCHAR(30) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `admin` BOOLEAN NOT NULL,
PRIMARY KEY (`id`) );

--  orders
CREATE  TABLE  `orders` (
  `id` VARCHAR(100) NOT NULL DEFAULT(uuid()),
  `user_id` VARCHAR(100) NOT NULL,
  `order_date` DATE NOT NULL,
  `ammount` DOUBLE NOT NULL,
  foreign key (`user_id`) references `users`(`id`) on delete cascade on update cascade,
PRIMARY KEY (`id`) );

-- products
CREATE TABLE `products` (
  `id` VARCHAR(100) NOT NULL DEFAULT (uuid()),
  `name` VARCHAR(30) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `create_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `units_stock` INT NOT NULL,
  `user_id` VARCHAR(100) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (`id`)
);

--  order details
CREATE  TABLE  `order_details` (
  `id` VARCHAR(100) NOT NULL DEFAULT(uuid()),
  `order_id` VARCHAR(100) NOT NULL,
  `products_id` VARCHAR(100) NOT NULL,
  `price` DOUBLE NOT NULL,
  `quantity` INT NOT NULL,
  foreign key (`order_id`) references `orders`(`id`) on delete cascade on update cascade,
  foreign key (`products_id`) references `products`(`id`) on delete cascade on update cascade,
PRIMARY KEY (`id`) );

--  categories
CREATE  TABLE  `categories` (
  `id` VARCHAR(100) NOT NULL DEFAULT(uuid()),
  `user_id` VARCHAR(100) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `type` VARCHAR(30) NOT NULL,
  foreign key (`user_id`) references `users`(`id`) on delete cascade on update cascade,
PRIMARY KEY (`id`) );

-- insert de datos

INSERT INTO `users` (`username`, `password`, `first_name`, `last_name`, `email`, `admin`) VALUES
('yady', '1234', 'yady', 'sanchez',  'yady@gmail.com', 0),
('isac', '12345', 'isac', 'garcia',  'isac@gmail.com', 0),
('hannah', '7891', 'hannah', 'phillips',  'hannah@gmail.com', 1),
('denisse', '1234', 'denisse', 'navarro',  'denis@gmail.com', 1),
('laudy', '12345', 'laudy', 'navarrete',  'laudy@gmail.com', 1),
('juan', 'password123', 'Juan', 'Lopez', 'juan@example.com', 0),
('maria', 'qwerty11', 'Maria', 'Martinez', 'maria@example.com', 0),
('carlos', 'pass123', 'Carlos', 'Rodriguez', 'carlos@example.com', 0),
('laura', 'abc123', 'Laura', 'Gutierrez', 'laura@example.com', 1),
('pedro', 'password', 'Pedro', 'Sanchez', 'pedro@example.com', 1);

USE `apolliculture`; 
INSERT INTO `products` (`name`, `price`, `description`, `image`, `units_stock`, `user_id`) VALUES
('monofloral honey', 20.98, 'Under the name monofloral honey, we can include all those types of honey that are mainly composed of the nectar of a single species', '', 302, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('multifloral honey', 15.55, 'This is composed of a mixture of flowers that results in a honey with salty notes, acidic flavors, and floral and herbal aromas', '',  120,'31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('mesquite honey', 8.19, 'It can appear with a pale yellow or creamy white color, smells slightly of resin and wood', '', 10, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('orange blossom honey', 12.99, 'It can be seen with a light amber color and a pale yellow, smells like flowers and is sweet with a citrus touch', '',  330,'31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Propolis Extract', 25.99, 'Propolis is a resinous substance that bees collect from trees and use to seal gaps in the hive. Propolis extract is often used in natural remedies for its potential health benefits.', '', 150, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Beeswax Candles', 18.75, 'Beeswax candles are candles made from the wax produced by honey bees. They are known for their clean burning and natural aroma.', '', 251, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Royal Jelly', 35.50, 'Royal jelly is a gelatinous substance produced by worker honey bees. It is highly nutritious and is often consumed as a dietary supplement.', '', 200, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Bee Pollen', 22.49, 'Bee pollen is collected by honey bees from flowering plants. It is a highly nutritious food source and is often consumed for its potential health benefits.', '', 300, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Beekeeping Glove Protectors', 9.99, 'These glove protectors are specifically designed for beekeeping. They provide additional protection for hands and forearms during hive manipulation.', '', 550, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Bee Smokers', 29.75, 'Bee smokers are essential tools for beekeepers. They are used to calm bees and facilitate hive manipulation during inspection and honey collection.', '', 30, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Beekeeping Suits', 79.99, 'Beekeeping suits are garments designed to protect beekeepers from bee stings. They are made of durable materials and offer full coverage for maximum protection.', '', 205, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Beekeeping Brushes', 12.49, 'Beekeeping brushes are used to gently sweep bees off hive frames during inspection. They help keep bees calm and minimize the risk of stings.', '', 40, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Beekeeping Hive Tools', 14.99, 'Beekeeping hive tools are essential for manipulating beehives during inspections and honey harvesting. They help pry apart hive components and remove frames with ease.', '', 351, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Queen Bee Excluders', 8.49, 'Queen bee excluders are used in beekeeping to restrict the queen bee from laying eggs in certain parts of the hive. They help manage the population and prevent overcrowding.', '', 250, '31d93625-e1fe-11ee-b95b-9828a63b47d6'),
('Beekeeping Veils', 17.99, 'Beekeeping veils are protective gear worn over the head and face to prevent bee stings during hive inspections. They provide visibility while keeping bees at a safe distance.', '', 30, '31d93625-e1fe-11ee-b95b-9828a63b47d6');

INSERT INTO `categories` (`name`, `description`) VALUES
('honey', 'This category includes different types of honey.'),
('health', 'This category includes products derived from honey used in the healthcare sector.'),
('home', 'This category includes products derived from honey used in household applications.'),
('beekeeping', 'This category includes accessories necessary for beekeeping.');