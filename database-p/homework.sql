-- Active: 1706363831540@@0.0.0.0@3306@hyf
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
