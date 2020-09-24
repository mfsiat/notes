# React App

> a sample test app in react

- We have movie names on movie list component, which we need to pass down to movie component. So we can use props to pass down some data to another component. We are using props here.

## Context API

- When we have lots of component and a few data to pass through, passing this data to all those component are a headache. So we declare one context with the data then we just call the context on that specific component where we need it. These require **createContext**, **Provider**.

- Following is a sample code for context

```js
import React, { useState, createContext } from "react";

// we have declared context api and now we need to define it
// by using createContext, we need to create a new variable
// to init the context
export const MovieContext = createContext();

// this is the context api we need to export multiple things from here
export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Batman vs Superman",
      price: "20$",
      id: 2314
    },
    {
      name: "Game of Thrones",
      price: "50$",
      id: 2312
    },
    {
      name: "The Avemgers",
      price: "30$",
      id: 2315
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
```

- On the Return value we are returning MovieContext with the provider and passing the **values(States with data)** to all the children of the props. On the app.js we need to wrap the components under the Provider like

```js
// import
import { MovieProvider } from "./MovieContext";
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
```

- As long as the provider is wrapped around the components we can get access to the states on those components.

- And on the children where we need to pass the data there we need to call a new state and the data will be **useContext{MovieContext}** like the code below

```js
import { MovieContext } from "./MovieContext";
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} id={movie.id} />
      ))}
    </div>
  );
};
```

- Whenever we want to take an input the input will go like adding data, and adding data means this data needs to be store on state so to add something with manual input we need to create an event and add them to JSX. like the below

```js
const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Function for update the name of the movie
  const updateName = e => {
    setName(e.target.value);
  };

  // Function for change the price
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  // call updateName and updatePrice on JSX
  return (
    <form>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
```

## Downside of Context API

- if we want to change something in the context, everytime we update the code the components will re-render.
