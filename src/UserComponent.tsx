import * as React from 'react';

import UserInterface from './UserInterface';

export default class UserComponent extends React.Component<UserInterface, {}> {
  constructor(props: UserInterface) {
    super(props);
  }

  render() {
    const { name, age, address, dob } = this.props;
    return (
      <div>
        <h1>User Component</h1>
          Hello, {name}
          <br />
          You are {age} years old.
          <br />
          You live at: {address}
          <br />
          You were born: {dob.toDateString()}
      </div>
    );
  }
}