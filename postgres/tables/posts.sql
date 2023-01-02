CREATE TABLE posts (
    id serial PRIMARY KEY,
    title TEXT,
    description TEXT,
    created TIMESTAMP NOT NULL,
);