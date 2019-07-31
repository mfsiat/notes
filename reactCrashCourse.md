# Traversy Media React Crash course 2019
**React** is a JavaScript library created by *Facebook* and is used for building user interfaces (UIs) and front-end applications. **React** is often called a *framework* because of it's behavior and capabilities. 
> The code runs on the client side

## Why Use It? 
* Makes front-end JavaScript much easier 
* Uses self contained, independent components with their own state
* Much more interactive UIs
* Virtual DOM
* JSX - Easily incorporate JS in markup
* Easy to work with teams

### It may help to learn these first
* Classes 
* Destructuring
* High Order Array Methods - **forEach**, **map**, **filter**
* Arrow Functions
* Fetch API & Promises

## React State
* Components can have state which is an object that determines how that component renders and behaves.
* We can also have "**application level**" state by using a state manager like Redux or Reacts own **context API**.
```react
state = {
	title: 'xxx'
	body: 'xxx'
	isFeatured: true
}
```

## Create-React-App
* CLI tool for creating React applications
* Uses webpack but needs no configuration
* Comes bundled with a dev server with hot reload
* "**npm run build**" will compile all our code to something that browser can read

## Anatomy of a Component
* This is a class based component
* Structure::
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

