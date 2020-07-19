## Work with Hooks

> Doc on react hooks

- React hooks are a combination of **state** and **LifeCycle Method**. Well in _React Hooks_ we can use both of this functionality in the same time and at the same place.

- suppose we have an app in which we need to change a name or take input.

- so what should we do? we take the name and store it somewhere. In **JS** we don't need database for this simple stuff. we can just save it on cache or whatever they say i could not remember it now.

- so we call the state or save them on state and change the _state_ with **componentDidMount** or **LifeCycle Method** and do our work.

- but with react hooks we don't need to init them separately we can use them both in the same place together.

- It allows us to use state and other features without having class.

- Now we can have a state within the functional based component with the u state hook.

### Init

```js
import React from 'react';

const Test = () => {
  // we init the hooks with variable
  // here name and setName are defined or set to an empty String
  // this setName will act as an onChange event from our input form
  // so that we could change the name which was init as empty string
  const [name, setName] = useState('');

  // here the input takes the value and adds the value on setName
  // on typing the input value and event fires up and the target get a value which
  // then fetched as the setName and it goes to the state and changes them
  return (
    <div>
      <input onChange={(event) => setName(event.target.value)} />
    </div>
  );
};
```
