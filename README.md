<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

<p align="center">
      <img src="https://travis-ci.com/amazingandyyy/mern.svg?branch=master" />
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

# Restaurant Review
This project is a restaurant review application using DAO as data patern 

## clone or download
```terminal
$ git clone https://github.com/noe-gif/Restaurant-Review.git
$ npm i
```

## project structure
```terminal
LICENSE
package.json
backend/
   package.json
   .env (to create .env, check [prepare your secret session])
frontend
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## frontend-side usage(PORT: 3000)
```terminal
$ cd client   // go to frontend folder
$ npm i       // npm install packages
$ npm run dev // run it locally

// deployment for frontend app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## backend-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a RESTREVIEWS_DB_URI in .env to connect to MongoDB)

```terminal
// in the root level
$ echo "RESTREVIEWS_DB_URI=YOUR_RESTREVIEWS_DB_URI" >> ./backend/.env
```

### Start

```terminal
$ cd backend   // go to backend folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the backend code to es5 js codes and generate a dist file
```

# Dependencies(tech-stacks)
frontend-side | backend-side
--- | ---
axios: ^0.15.3 | cors: ^2.8.5
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-router-dom: ^4.2.2 | mongoose: ^4.7.4

# Screenshots of this project

User visit public and Home page
![User visit public and Home page](http://i.imgur.com/ORCGHHY.png)

User can sign in or sign up
![User can sign in or sign up](http://i.imgur.com/rrmbU5I.png)

After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to account route](http://i.imgur.com/FzLB51u.png)

# Sample data and MongoDB interface

Collection of the database
![Collection](http://i.imgur.com/ORCGHHY.png)

MongoDB interface
![interface](http://i.imgur.com/rrmbU5I.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## File structure
#### `frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `backend` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `api` - These hold all of the callback functions that each route will call
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
