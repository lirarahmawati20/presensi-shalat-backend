CREATE DATABASE presensi_shalat;
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    generation INT NOT NULL,
    present BOOLEAN DEFAULT FALSE NOT NULL
);

CREATE TABLE users (
    username text,
    password text
  );
