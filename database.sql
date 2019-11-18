
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE,
    "password" VARCHAR (100),
    "isAdmin" BOOLEAN DEFAULT false,
    "resource_sunlight" INTEGER DEFAULT 0,
    "click_gather_sunlight" INTEGER DEFAULT 1,
    "per_second_gather_sunlight" INTEGER DEFAULT 1,
    "resource_sap" INTEGER DEFAULT 0,
);