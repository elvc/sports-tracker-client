import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Build app here' };
  }

  render() {
    return <p>{ this.state.someKey }</p>;
  }

  componentDidMount() {
  }
}

export default App;
