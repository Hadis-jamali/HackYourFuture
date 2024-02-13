-- Active: 1706363831540@@0.0.0.0@3306@hyf

------------------------------------- ***week1 databases homework**


INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
VALUES('my task','my desc','2017-10-15 13:05:09','2017-10-15 23:35:45','2017-12-25 19:42:15',3,4)

UPDATE task 
SET title = 'my updated task'
WHERE title = 'my task'

UPDATE task 
SET due_date = '2017-12-23 14:21:01'
WHERE title = 'my updated task'

UPDATE task 
SET status_id = '2'
WHERE title = 'my updated task'

UPDATE task 
SET status_id = '3'
WHERE title = 'my updated task'

DELETE from task
WHERE title = 'my updated task'


----------------Part 2

CREATE DATABASE school

CREATE table class(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    begins TIMESTAMP ,
    ends TIMESTAMP
)

CREATE table student(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    email varchar(50),
    phone varchar(10),
    class_id INT(6),
    FOREIGN KEY (class_id) REFERENCES class(id)
)


-------------------------------------- *** week2 DATABASES ***

INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
VALUES('my task','my desc','2017-10-15 13:05:09','2017-10-15 23:35:45','2017-12-25 19:42:15',3,4)


UPDATE task 
SET title = 'my updated task'
WHERE title = 'my task'


UPDATE task 
SET due_date = '2017-12-23 14:21:01'
WHERE title = 'my updated task'


UPDATE task 
SET status_id = '2'
WHERE title = 'my updated task'


UPDATE task 
SET status_id = '3'
WHERE title = 'my updated task'


DELETE from task
WHERE title = 'my updated task'


------------------------------------- Part 2

CREATE DATABASE school

CREATE TABLE class(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    begins TIMESTAMP ,
    ends TIMESTAMP
)


CREATE TABLE student(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    email varchar(50),
    phone varchar(10),
    class_id INT(6),
    FOREIGN KEY (class_id) REFERENCES class(id)
)

------------------------------------- Part 3

SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN USER ON user_task.user_id = user.id
WHERE user.email like '%@spotify.com'

SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN USER ON user_task.user_id = user.id
JOIN status ON status.id = task_id
WHERE user.name = 'Donald Duck'
  AND status.name = 'Not started'


SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN USER ON user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows'
  AND month(created) = 9

SELECT count(id),
       MONTH(created)
FROM task
GROUP BY MONTH(created)


----------------------------------  Part 4

CREATE DATABASE business

CREATE TABLE office(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    phone varchar(10),
    address varchar(50)
)

CREATE TABLE staff(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    phone varchar(10),
    office_id INT(6),
    FOREIGN KEY (office_id) REFERENCES office(id)
)

CREATE TABLE title(
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL
)

CREATE TABLE staff_title(
    staff_id INT(6),
    title_id INT(6),
    PRIMARY KEY(`staff_id`, `title_id`),
    FOREIGN KEY (staff_id) REFERENCES staff(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (title_id) REFERENCES title(id) ON DELETE CASCADE ON UPDATE CASCADE
)

--------------------------- MongoDb

-- db.users.insertOne({ name: "Lawan", email: "lawansubba@gmail.com"});
-- db.users.insertOne({ name: "harry", email: "harry@gmail.com", age: 20 });
-- db.users.insertOne({ name: "bob", email: "bob@gmail.com", age: 20, address: "Aarhus" });
-- db.users.insertOne({ name: "hadis", address: "riskov aarhus", age: 23, country: "Denmark" });


-- // -- MongoDb
-- db.users.find({name: 'bob'});
-- // -- MySQL Select * from users;



-- db.users.countDocuments({age:20});

-- db.users.updateOne({name :'bob'}, {$set :{age:30}}) ;

-- db.users.deleteOne({age:20});

-- db.users.updateOne({name :'hadis'}, {$set :{address:'alborg'}}) ;

-- db.users.find({name: 'hadis'});

-- db.users.updateOne({name :'hadis'}, {$set :{address:'alborg'}}) ;

-- db.users.deleteOne({address:'alborg'});

-- db.users.find({"age" : {"$gte" : 10, "$lte" : 30}});


----------------------------------------------------- week3 DATABASES

CREATE TABLE meal (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    description TEXT,
    location VARCHAR(100),
    `when` DATETIME,
    max_reservation INT(6),
    price DECIMAL,
    create_date DATE
);

CREATE TABLE reservation (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT(6),
    meal_id INT(6),
    FOREIGN KEY (meal_id) REFERENCES meal(id),
    created_date DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(50),         
    contact_email VARCHAR(100)        
);

CREATE TABLE review (
    id INT(6),
    title VARCHAR(20),
    description TEXT,
    meal_id INT(6),
    FOREIGN KEY (meal_id) REFERENCES meal(id),
    stars INT,
    create_date DATE
);

--------------------------------------- Meal

SELECT * FROM meal;

INSERT INTO meal(title,description,location,`when`,max_reservation,price,create_date)
VALUES('pizza','delicious italian food','Aarhus','2024-10-05 20:15:00',10,180,'2024-02-12')

SELECT * FROM meal
WHERE id = 1

UPDATE meal
SET location = 'alborg'
WHERE id = 1

DELETE from meal
WHERE id = 1

----------------------------------- Reservation

SELECT * FROM reservation;

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 2,'2024-07-06','60588894','Hadis','hadisjamali95@gmail.com');

SELECT * FROM reservation
WHERE id = 1

UPDATE reservation
SET contact_name = 'Reza'
WHERE id = 1

DELETE from meal
WHERE id = 1

----------------------------------------- Review

SELECT * FROM review;

INSERT INTO review (title, description, meal_id, stars, create_date)
VALUES ('pizaa', 'food was good',2, 3, '2024-02-12');

SELECT * FROM review
WHERE id = 1

UPDATE review
SET description = 'food was very bad'
WHERE id = 1

DELETE from review
WHERE id = 1