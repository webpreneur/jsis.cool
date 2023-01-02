BEGIN TRANSACTION;

INSERT into users (
    name, email, posts, joined
    ) 
    values (
        'Jessie', 'jessie@gmail.com', 5, '2023-01-01'
    );
INSERT into login (hash, email) values ('hash', 'jessie@gmail.com');

COMMIT;