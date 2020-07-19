# Express JS Framework

- It's fast and unopinionated and minimalist web framework for node.js
- Express is a server-side or back-end framework
- It is used with react, angular, or vue to be used in combination to build full stack applications.

## What to know first

- JavaScript fundamentals (Object, arrays, Conditions)
- Basic Node.js & NPM

## Must have knowledge on

- HTTP status codes
- JSON
- High Order Array methods - **forEach**, **map**, **filter**
- Arrow Functions

## Basic Route Handling

- app.get(), app.post(), app.put(), app.delete()
- Access to params, query strings, url parts
- Express has a router so we can store routes in separate files and export
- We can parse incoming data with the Body Parser

```js
app.get('/', function(req, res) {
  // Fetch from database
  // Load pages
  // Return JSON
  // Full access to request and response
});
```

- _We can set the routing structure by ourselves, follow this code_

```js
// creating the route config
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```

- _But we will use static folder path_

```js
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
```

- **By using the static folder path system we can simply just put any file on the static folder and without configure the routes we can access them**

## Express Middleware

- These are functions which have access to the request and response object.
- Express has it's own middleware
- Execute any code
- Make changes to the request/response objects
- End response cycle
- call next middleware in the stack

- Middleware functions should have three parameters **req, res, next**

- When our server gets request the middleware fires up

## Install express

```js
npm install express
```

## Template for Express

- We will be using **express-handlebars** as view engine for express.

- In handlebars whatever we want to output we need to use **{{{}}}** and to use variable we need to use **{{}}**

- Syntax:

```js
// Handlebar Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Homepage Route
app.get('/', (req, res) => res.render('index'));
```

## Extra

- entry point is the index
- there are lots of function we need to specify the **port** which will be **listened by the express server**. We need to specify the port number.
- We will be using **nodemon** to prevent restarting the server again and again

- We can use custom scripts to define new task

- mainly we use express to create **json api** to connect front end to back end or render template where we can use dynamic data to create a dynamic app rather than just a static website.

- To run the server

```js
npm run dev
```

- I am not sure but files that are used as models are always uppercase.

- We will be using moment to handle the date.

- Here, this code will give us req.params.id as string but on our member.id which is a integer so our output will come out as void or [], aslo note that we have '===' which will catc that whether it's input and output are same or not. So we will have empty output.

```js
res.json(members.filter(member -> member.id === req.params.id))
```

- To solve this conflict we use **parseInt(req.params.id)**

- API also stands for those who serves the json

- **Create Member**: Whenever we want to create something on the server we need to make a post request to the server. We want to _send data_ and when we will _get data_ we will have it in the **req** object

- To get the request successfull we need a **body parser**

- This body parser can be identified by a middleware.

- To work with the back end we might do two things
  - we built an api to view some thing on the fornt end just serving **json**
  - or we gonna have a complete server side app where we use templates.
