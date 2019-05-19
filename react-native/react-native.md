# React-native Basics
React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, `state`, and `props`. If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
```
# Components
So this code is defining `HelloWorldApp`, a new `Component`. When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component. A component can be pretty simple - the only thing that's required is a `render` function which returns some JSX to render.

# Props
Most components can be customized when they are created, with different parameters. These creation parameters are called  `props`.

For example, one basic React Native component is the  `Image`. When you create an image, you can use a prop named  `source`  to control what image it shows.
Sample code: 
```js
export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
```

Notice the braces surrounding  `{pic}`  - these embed the variable  `pic`  into JSX. You can put any JavaScript expression inside braces in JSX.

