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