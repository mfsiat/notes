# Traversy Media React Crash course 2019

**React** is a JavaScript library created by _Facebook_ and is used for building user interfaces (UIs) and front-end applications. **React** is often called a _framework_ because of it's behavior and capabilities.

> The code runs on the client side

## Why Use It?

- Makes front-end JavaScript much easier
- Uses self contained, independent components with their own state
- Much more interactive UIs
- Virtual DOM
- JSX - Easily incorporate JS in markup
- Easy to work with teams

### It may help to learn these first

- Classes
- Destructuring
- High Order Array Methods - **forEach**, **map**, **filter**
- Arrow Functions
- Fetch API & Promises

## React State

- Components can have state which is an object that determines how that component renders and behaves.
- We can also have "**application level**" state by using a state manager like Redux or Reacts own **context API**.

```react
state = {
	title: 'xxx'
	body: 'xxx'
	isFeatured: true
}
```

## Create-React-App

- CLI tool for creating React applications
- Uses webpack but needs no configuration
- Comes bundled with a dev server with hot reload
- "**npm run build**" will compile all our code to something that browser can read
- For creating a react app always use '-' instead of '\_' like the folder name should be **sample-react-app** or **sample-app** not **sample_app**.

## Anatomy of a Component

- This is a class based component
- Structure::

```react
Class Post extends React.Component {
	state = {
		title: 'Post One',
		body: 'This is my post'
	}

	render(){
		return (
			<div>
				<h3>{ this.state.title }</h3>
				<p>{ this.state.body }</p>
			</div>
		)
	}
}
```

## Some important Facts

- In **JSX** we can not use the class attribute, we need to use the **ClassName** attribute.

- syntax for class based react application

```react
Class AppName extends Component {
	render(){
		return (
			Code goes here
		)
	}
}

export default App;
```

- syntax for **function based** application

```react
function AppName(){
	return (
		code goes here
	)
}
export default AppName;

> In the latest react JS applications it is by default function based application to start with. The function based application is new on the latest build, so there could be some problems and also some conflicts with it. But we can use the class based application. There is an **extension** is VS code to convert the function based syntax to class based syntax. It's name is "**React pure to class**".

* Manually if we want to declare some state than we could declare it by const variable.
```
