import React from 'react';
import {render} from 'react-dom';

import Login from './login/index.jsx';

class App extends React.Component {
  render () {
    return (
        <Login />
    );
  }
}

render(
    <App />
    , document.getElementById('app')
);
