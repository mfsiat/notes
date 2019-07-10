# React-navigation version - 3.x.x
* This time the components start with create.
* example: createSwitchNavigator, createAppContainer, createStackNavigator.
* For adding a navigator we need to import it and create it

```js
// <!-- First import -->
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// <!-- Then create it -->
const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen : WelcomeScreen }
});

<!-- we need to export the switchNavigator to something else -->
<!-- we can export to AppContainer -->
const AppContainer = createAppContainer(AppSwitchNavigator);

// <!-- add it inside -->
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
```

* To switch through pages we can just simply add a button and place the navigation value on the **onPrees**

code: 
```js
<Button title='Login' onPress={()=>this.props..navigation.navigate('Login')} />
// be sure to import the page or add the page on App.js
```


