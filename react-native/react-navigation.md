# React-navigation version - 3.x.x
* This time the components start with create.
* example: createSwitchNavigator, createAppContainer, createStackNavigator.
* For adding a navigator we need to import it and create it

```react-native
<!-- First import -->
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

<!-- Then create it -->
const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen : WelcomeScreen }
});

<!-- we need to export the switchNavigator to something else -->
<!-- we can export to AppContainer -->
const AppContainer = createAppContainer(AppSwitchNavigator);

<!-- add it inside -->
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
```

