import React from 'react';
import { render } from 'react-dom';
import { PropTypes } from 'react-router';

export default class App extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <div id="content">
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = { history: PropTypes.history }
