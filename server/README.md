# Environment settings

- Download [Nodejs](https://nodejs.org/en/blog/release/v16.16.0) (version >= 16.0.0)
- Download [XAMPP](https://www.apachefriends.org/download.html) or MySQL

# Database

- Open XAMPP Control Panel
- Start **Apache** and **MySQL**
- Click **Admin** in **MySQL** and Create database named **SPSO**

## Install node_modules

    npm install

Install all libraries to use for Nodejs And ExpressJs

## Running Migrations

     npx sequelize-cli db:migrate

## Running Seeds

    npx sequelize-cli db:seed:all

## Run with localhost

    npm start

Backend is run on port **8080**
