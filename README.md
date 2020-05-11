# DevCon  

Web Application developed with Node.js, React, Redux, and MongoDB hosted on Heroku.  
DevCon is a social network for developers.  

Link to project main page- https://dev-con-net.herokuapp.com/    
Link to my profile in the project - https://dev-con-net.herokuapp.com/profile/5e9d79ffdff32c08a4d73064    

architecture:

### Client side 
React, Javascript, HTML, CSS, Material UI.
Redux for state management.
Npm Packeges - react-router-dom, redux, react-redux, redux-thunk, redux-devtools-extention, moment, react-moment, uuid

### Server side
Node.js & Express Rest Api, MongoDB hosted on AWS.
Using Github API to fetch user repositories.
Npm Packages - express-validator, bcryptjs, config, gravatar, jsonwebtoken, mongoose, axios

### App Features

Signup - User fills name, email, password.
  email - for profile picture use a Gravatar email.
  password - Encrypted before entering the database.

Login - The user fills email and password, the client receives an authentication token from the server.

Alerts - Informs the user about actions like signup, login, comments...

Dashboard - The workspace of the user, create/update profile.

Profile - Contains users details, experience, education, picture, Github repositories.

Posts - The app wall where the users can upload posts, add comments, and like posts.

Developers - Shows an interactive list of all the users in the system.

