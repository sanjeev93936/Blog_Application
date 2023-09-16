<H1 align ="center" > MERN BLOG  </h1>
<h5  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal client and the Backend on the other terminal api)

In the first terminal

```
# --- Terminal ---

$ cd Client
$ npm install (to install frontend-side dependencies)
$ npm start (to start the frontend)
```

In the second terminal
- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials

```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Use cookies for storing the User information
- CRUD operations (Create, Read, Update and Delete)
- Upload user title, summary, images and content to the server using Create Post
- Author can update the existing post
- Use Mongoose for storing the data
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [React-Quill](https://www.npmjs.com/package/react-quill) - This is one of the most popular editor
- [React icons](https://react-icons.github.io/react-icons/) -
 Small library that helps you add icons  to your react apps.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Nodemon](https://www.npmjs.com/package/nodemon) -This will automatically restarting the node application                
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files 
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots 
### This is the Authentication Section
### Register
![Screenshot 2023-09-16 223125](https://github.com/sanjeev93936/Blog_Application/assets/108318474/f8899220-f80f-4bf4-b4a0-dcc2ea72217a)
### Login
![Screenshot 2023-09-16 223149](https://github.com/sanjeev93936/Blog_Application/assets/108318474/b82b437a-8549-4a9c-9818-95052eda35a4)
### This is the Home Section
![Screenshot 2023-09-16 223213](https://github.com/sanjeev93936/Blog_Application/assets/108318474/4512e6b7-b5dc-4bbf-8a4e-1a655449a43a)
![Screenshot 2023-09-16 223514](https://github.com/sanjeev93936/Blog_Application/assets/108318474/b500055f-0141-48bd-bf92-5eb476040a19)
### This is the Create new Post Section
![Screenshot 2023-09-16 223257](https://github.com/sanjeev93936/Blog_Application/assets/108318474/c998fc06-3e8d-406c-bc7b-ab739b6cb09b)
### This is the   Post Section
![Screenshot 2023-09-16 223420](https://github.com/sanjeev93936/Blog_Application/assets/108318474/900aadc2-fd03-4948-943c-75831553f618)
### This is the Update Post Section
![Screenshot 2023-09-16 223438](https://github.com/sanjeev93936/Blog_Application/assets/108318474/9df841a3-3740-421b-9317-b2bbdeaa4889)
![Screenshot 2023-09-16 223451](https://github.com/sanjeev93936/Blog_Application/assets/108318474/7de6cfd1-ed3b-484b-8e05-984ee96f6c30)

## Author
### Sanjeev Madhavarapu

<a href="https://linkedin.com/in/sanjeev-madhavarapu-92a389237/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://instagram.com/
sanjeev_madhavarapu" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="p_iconic_" height="30" width="40" /></a>
