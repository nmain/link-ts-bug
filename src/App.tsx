import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from "@material-ui/core/Link";
import MyLink, { MyLinkWithoutRefForwarding } from './MyLink';

class App extends Component {
  render() {
    return <div>
      {/* Works, but fails typecheck when the `as any` is removed */}
      <Link component={MyLink as any} href="//example.com">Clack me!</Link>
      {/* Passes typecheck, but fails at runtime -- can't ref a functional component */}
      <Link component={MyLinkWithoutRefForwarding} href="//example.com">Clack me!</Link>
    </div>;
  }
}

export default App;
