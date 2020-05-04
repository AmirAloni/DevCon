# DevCon  

Node.js Web Application during Development with React, Redux, and MongoDB.  
DevCon is a social network for developers.

architecture:

### Client side 
React, Javascript, HTML(responsive), CSS.
Redux for state management.
Npm Packeges - axios, react-router-dom, redux, react-redux, redux-thunk, redux-devtools-extention, moment, react-moment, uuid

### Server side
Node.js & Express Rest Api, MongoDB hosted on AWS.
Uses Github API to fetch user repositories.
Npm Packages - express-validator, bcryptjs, config, gravatar, jsonwebtoken, mongoose, axios

### App Features

Signup - User fills name, email, password.
  email - for profile picture use a Gravatar email.
  password - Encrypted before entering the database.

Login - The user fills email and password, the client receives an authentication token from the server.

Alerts - informs the user about actions like signup, login, comments...

Dashboard - the workspace of the user, create/update profile.

Profile - contains users details, experience, education, picture, Github repositories.

posts - the app wall where the users can upload posts, add comments, and like posts.

Developers - shows an interactive list of all the users in the system.

