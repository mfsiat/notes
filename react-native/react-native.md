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
Your own components can also use `props`. This lets you make a single component that is used in many different places in your app, with slightly different properties in each place. Just refer to `this.props` in your `render` function. Here's an example:
```js
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
```

# State
There are two types of data that control a component: `props` and `state`. `props` are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

In general, you should initialize state in the constructor, and then call setState when you want to change it.

For example, let's say we want to make text that blinks all the time. The text itself gets set once when the blinking component gets created, so the text itself is a prop. The "whether the text is currently on or off" changes over time, so that should be kept in state.

```js
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
```
# Error handling for react native 

`Unable To Load Script From Assets index.android.bundle` for this error please make sure the emulatore 
avd is online and connected to the internet. 
Problem–> Unable To Load Script From Assets index.android.bundle. Make sure your bundle is packaged correctly or you’re running a packaged server.
This problem happens when we run the application using react-native run-android and it gets successfully installed in the device but either the development server has not started or if started, the installed app is unable to connect to the development server.

We have tried different solutions you can try it with your own.
Our first and the simple solution of “Unable To Load Script” problem is to check the following point

1. Check whether your device is online or not?
2. If you are running the application on the real device then the device should be on the same network where the development server is running.