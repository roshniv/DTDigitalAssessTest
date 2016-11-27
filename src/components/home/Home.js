import React from 'react';

import HeroPage from './HeroPage';

export default class Home extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div id="homepage-wrapper">
          <HeroPage referrerCode={this.props.location.query.code} email={this.props.location.query.email}/>
      </div>
    );
  }
}
