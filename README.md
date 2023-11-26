# lyter-ecommerce-backend 

Follow these steps to set up a working environment.

## 1. Clone the repository

`git clone https://github.com/Lityer-Inc/lyter-ecommerce-backend`

## 2. Install mysql

This is typically done with `sudo apt update` then `sudo apt install mysql-server`

## 3. Create a mysql database.

`sudo mysql -u root -p`

Then from the mysql> prompt,

`CREATE DATABASE your_database_name;`


## 4. Create DB user and assign privileges.

`CREATE USER 'new_username'@'localhost' IDENTIFIED BY 'password';`

`GRANT ALL PRIVILEGES ON your_database_name.* TO 'new_username'@'localhost';`

## 5. Customize model-database/database/database.js 

Modify this file to specify the DB name, user, and password.  You can check database-example.js in the same folder to see an example.

## 6. Run the backend.

Navigate into the top level of the cloned repo. Next run `npm install` and then `npm start`  For now, you will just run it one time to allow it to create the DB tables.

## 7. Manually registre the retailer, store, and default category.

From within mysql, run the following commands:

INSERT INTO retailers ( id, first_name, last_name, email, description, company, country, address, phone, password, socials_twitter, socials_facebook, socials_instagram, socials_linkedin, createdAt, updatedAt ) VALUES ( LPAD('1', 36, ' '), 'Alice', 'jones', 'alice.jones@example.com', 'a great retailer', 'Food Stuff Inc.', 'United States', '456 fake street, new york, NY 11022', '555-0123', 'mypwd123!', '@alicejones', 'alice.jones', 'alice_bob', 'alice-jones', NOW(), NOW() );

INSERT INTO stores ( id, retailerId, name, store_email, deliveryTime, description, createdAt, updatedAt ) VALUES ( LPAD('1', 36, ' '), LPAD('1', 36, ' '), 'A great store within the retailer', 'storeboss@Mystore.com', '2-3 business days', 'some store', NOW(), NOW() );

INSERT INTO categories ( id, name, createdAt, updatedAt ) VALUES ( LPAD('1', 36, ' '), 'Food Stuff', NOW(), NOW() );

## 8. After doing manual registration, run the backend app again.

Navigate into the top level of the cloned repo. Next run `npm install` and then `npm start` 

## 9. Run the front end grocery app or POS app from another terminal

## 19. Test the setup.

You should be able to create products on the POS and see them on the grocery app since they both should be accessing the backend DB.

