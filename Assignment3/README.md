# cs5610
## Iteration1

This Iteration is consisting of frontend, using React DOM Router, bootstrap and mongoDB and backend using nodejs and express as you can see, 
and at the end, i installed axios and mongoose to create the connection to the DB, 
but at this step i am not fetching data from DB, as currently i am getting data from note.js file. 

### to run the frontend and backend please use following command:

npm run dev

use following links to access the demo :


App : https://jote-it2.herokuapp.com/

Backend : https://jote-it3.herokuapp.com/

https://github.com/phoenix644/cs5610


this is the login page from the frontend:

![](screenshots/login.jpg)


after that if you click on my notes, you will be going to note list page(code is available : ./frontend/screens/mynotes/mynotes.js.
this page is responsive right now. 

![](screenshots/Mynotes%20page.jpg)


which the notes are fetching from this path :"/api/notes" from backend .
also you can get accesss directly using following URL: https://jote-it3.herokuapp.com/api/notes

## Iteration2

in the following of the last iteration i continue developing my web application by adding these features:
* Login/Logout
    Login page, add encryption
    add user model.
    adding JWTtoken to users.
    implement logout features.
* Register
    -register new user.
    
    
* MiddleWares 
    -Add two middle-ware to handle errors and protecting API from unauthorized access
    
    
* External WebAPI
    -implement a functionality to store and retrieve profile photos Cloudinary website.
    
* Redux
    -implementing Redux for manipulating the state in application using Redux for Login/Logout/Register features.
    
    
* CRUD
    -Implement the CRUD functionality to create update find and delete a new note(this feature has not added yet to the front end).
   

![](screenshots/loginpage.jpg)

![](screenshots/register.jpg)

![](screenshots/redux.jpg)

![](screenshots/createuser.jpg)

## Iteration3

in this final Iteration my App got comppleted.
following features added :

* Fetching notes.

* Create notes.
* showing note using react-markdown.

* Update and delete Notes.
* Delete Notes.
* Searching.
* Profile Page.
* Update UserProfile.
* showing list of users API in back-end.

