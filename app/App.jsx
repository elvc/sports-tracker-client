import React from 'react';
import Register from './register.jsx';
import Login from './login.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Build app here' };
  }

  render() {
    return <div>
      <p>{ this.state.someKey }</p>
    </div>;

  }

  componentDidMount() {
  }
}

export default App;
