# YelpCamp

My take on the yelp camp from Colt's Web Developer Boot Camp.
It is a full stack application, with the ability to add/edit/comment and price different campgrounds.

This is cloned from my Heroku account, which is where I first wrote the code.

# Features

- Authorization and Authentication:

  - Ablitity to create user and password
  - Content protection; only "owners" of posts and/or comments can modify their own content

- Campground Management:

  - Basic creation of campground
  - Link campground photos
  - Pricing and Description
  
- User interaction:
  
  - Flash relevent information for user login/log-out, success, errors and authorization requirements
  - Responsive web design for different screen sizes
  
# Plan to add:

  - Extended information on campground (working on it)
  - Display campgorunds on Google maps
  - Search campgrounds
  - Personal profile page
  - Star rating system
  
# How to run:

Clone the repository to your local machine  

> `$ git clone https://github.com/nbanker/YelpCamp`  

Find the directory with the corresponding file name and run `$ npm install`  
You can then start the server by running `$ node app.js`  

The application will be available at `localhost:3000`

# Created with:  

- Node.js
- Bootstrap
- Express
- MongoDB
- Mongoose
- Passport
- Passport-local

# Platform:

 - Heroku
 
 # License
 
 **MIT**
