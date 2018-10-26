#Eat-inarary 
(working title)

##App description

Eat-inarary is a meal prep / recipe book app. With Eat-inarary, users should be able to:

* search for recipes using the Edamam api
* create a user account
* login and sign out of that account
* store their favorite recipes into a peronalized recipe book
* add custom recipes to their recipe book
* remove recipes they no longer want to keep in their recipe book 

##Deployment

Deployed through heroku at:

    (https://eatinarary.herokuapp.com/)

    //insert screenshot

##Tech Stack

The client was made using react, utilizing react libraries to implement different features.
* React-redux is used to handle state-management using actions and reducers.  
* Redux Thunk is used to create action creators, simplifying asynchrounous actions
* Redux-form is used to form submissions
* React-router is used to handle navigation between various endpoints of the client

Description of key parts of where project lives in the codebase

##Notes

####The root directory

*The primary component, App.js is the parent component of all other react components.  It also sets up react-router to link to different pages of the app.
*store.js is the primary source of information for the app, and combines the various reducers allowing other components to access specific pieces of state through props.
*index.css is the primary styling sheet for the App, and sets up a responsive design grid.
*index.js renders the app component and wraps <App /> and links it to index.css and the redux store
*loading-toaster.gif is just an adorable loading icon.  Really.  It's the best.
*validators.js provides validation function to be used on form inputs

####actions directory

Houses actions, action creators, and tests for actions

####components directory

Houses react components, stylesheets for react components, and component tests

####reducers

Houses reducers, which keep the inital state of the app.  
