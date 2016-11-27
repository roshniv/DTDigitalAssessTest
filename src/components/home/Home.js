import React from 'react';

import HCard from './HCard';
import Form from './Form';

export default class Home extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <div id="homepage-wrapper">
        <div className = "container">
          <Form />          
        </div>
      </div>
    );
  }
}
