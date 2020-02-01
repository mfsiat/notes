# VUE JS Crash Course

> Doc on Vue JS

## Usage

- Its a progressive and performing J.S. Framework used for building UI's and Front-end applications.

- Its a **Single Page Application Framework**

- It is used for building User Interfaces.
- One Of the most famous.

## Why

- less learning curve
- easy
- fast and lightweight
- its a single page application then the DOM does the rest
- It has own router

## Must know before

- JS fundamentals(Object, Array, Conditions)
- ES6 module
- High order array method forEach etc
- Arrow Functions
- Fetch API and Promises.
- Vuex is for state management

## Installation

> npm install -g @vue/cli

- There is a cli for creating VUE apps

## Create Projects

> vue create project-name

- Beware of creating project names
- You can not use capital letters for creating vue apps

## Run Projects

- To run we can either use **npm serve** or **vue ui**
- We can use to ways
- But the vue ui gives us more flexibility and more control of the project
- Vue ui gives us more analytics

## Building Blocks

- In the src folder there is a file called main.js this file contains the imports and this file is the entry point.

- All the imports have to be placed here.

- Here we need to specify a **new instance which will call the app component inside the div or element with the id of app**.

- The basic skeleton of VUE is given below.

```JS
<template></template>
<script></script>
<style>
```

- We can **pass in different types of props from one component to other**

- Just Add the props inside the components tag name

- Then just declare the props where we want to use it
```js
// Prop Declare
<HelloWorld msg="This is being send in the HelloWorld Component">
// Prop Output 
<h1>{{ msg }}</h1>
```

- Remember We can put only one element inside a component. 

- We can't put multiple element inside a single component.

## Using Props 
> Why use props ? 
- We use props for various reasons
- Suppose think that we are making an app that passes data within different components 
- So how to pass them? 
- We can declare props and use them to pass data to those components
- We also use **template directives** to use those data to be viewed on the component. 

- *Like we have an array and we need to view them on our page*.
- So we declare the array then we need to bind it vie **v-bind** inside the template within the div or element then we can pass it to the component that we want or we can just declare the array inside the component and pass the data with a loop called **v-for** so that we can loop through the data and view them in our app. 

- Here via **v-bind** we are creating a *prop* and passing to another component. 

- Whenever we work with list in vue or react we face some eslint error. 

- Because whenever we work with multiple data that works with loop

- We need to specify a key to verify the data like an unique key 

- That key can be the data id, here we are binding the key.

- Code: 
```js
<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>{{todo.title}}</h3>
    </div>
  </div>
</template>
```
