# lyter-ecommerce-backend 

You can run the backend with the tyipcal `npm install` and `npm start` commands.  

You can  cusotmize model-database/database/database.js to point to a working or local instance of the database.
After running initially, the backend should create database tables bsaed on the models.  

 ## Registration

Registration of retailer , store, and a basic category is still not integrated, so you should manually populate these tables as follows (Make sure to create the tables first by running the backend at least once).

INSERT INTO retailers ( id, first_name, last_name, email, description, company, country, address, phone, password, socials_twitter, socials_facebook, socials_instagram, socials_linkedin, createdAt, updatedAt ) VALUES ( LPAD('1', 36, ' '), 'Alice', 'jones', 'alice.jones@example.com', 'a great retailer', 'Food Stuff Inc.', 'United States', '456 fake street, new york, NY 11022', '555-0123', 'mypwd123!', '@alicejones', 'alice.jones', 'alice_bob', 'alice-jones', NOW(), NOW() );

INSERT INTO stores ( id, retailerId, name, store_email, deliveryTime, description, createdAt, updatedAt ) VALUES ( LPAD('1', 36, ' '), LPAD('1', 36, ' '), 'A great store within the retailer', 'storeboss@Mystore.com', '2-3 business days', 'some store', NOW(), NOW() );

INSERT INTO categories ( id, name, createdAt, updatedAt ) VALUES ( LPAD('1', 36, ' '), 'Food Stuff', NOW(), NOW() );

