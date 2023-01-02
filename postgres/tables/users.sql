BEGIN TRANSACTION;

CREATE TABLE users (
    id serial PRIMARY KEY,
    email text UNIQUE NOT NULL,
    joined TIMESTAMP NOT NULL,
    posts BIGINT DEFAULT 0,
    name text NOT NULL
);

COMMIT;