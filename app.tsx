import * as React from 'react';
import * as ReactDOM from 'react-dom';

import FirstComponent from './src/FirstComponent';
import UserComponent from './src/UserComponent';

ReactDOM.render(
  <div>
    <h1>Hello, Welcom to the first page</h1>
    <FirstComponent />
    <UserComponent
      name="Alex Kwon"
      age={26}
      address="Seoul"
      dob={new Date()}
    />
  </div>,
  document.getElementById('root')
);