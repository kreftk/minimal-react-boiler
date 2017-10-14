import React from 'react';
import { render } from 'react-dom';

export default class Hello extends React.Component {
  render() {
    return 'Hello from React!';
  }
}

render(<Hello />, document.getElementById('react-primary'));