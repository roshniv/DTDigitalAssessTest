import React from 'react';

export default class HCard extends React.Component {

  constructor() {
    super();
    this.state = {
      success: false
    };
  }

  successListener() {
    this.setState({success: true});
  };


  render() {
    return (
      <div className='col-md-6 col-sm-12 col-xs-12' id="card">
        <div className="title">HCARD PREVIEW</div>
        <div className="card-preview">
          <div className="card-header">
            <div className="name">{this.props.name + " " + this.props.surname}</div>
            <div className="avatar-wrapper">
              <img className="avatar" id="avatar"/>
            </div>
          </div>

          <div className="card-content">
            <div className="row">
              <div className="col-md-2 col-sm-3 col-xs-3 entry-title"> EMAIL </div>
              <div className="col-md-10 col-sm-9 col-xs-9 entry-value"> {this.props.email} </div>
            </div>
            <hr className="card-separator" />
            <div className="row">
              <div className="col-md-2 col-sm-3 col-xs-3 entry-title"> PHONE </div>
              <div className="col-md-10 col-sm-9 col-xs-9 entry-value"> {this.props.phone} </div>
            </div>
            <hr className="card-separator" />
            <div className="row">
              <div className="col-md-2 col-sm-3 col-xs-3 entry-title"> ADDRESS </div>
              <div className="col-md-10 col-sm-9 col-xs-9 entry-value"> {this.props.house + " " + this.props.street} </div>
            </div>
            <hr className="card-separator" />
            <div className="row">
              <div className="col-md-2 col-sm-3 col-xs-3 entry-title"> &nbsp;&nbsp; </div>
              <div className="col-md-10 col-sm-9 col-xs-9 entry-value"> {this.props.suburb + ", " + this.props.state} </div>
            </div>
            <hr className="card-separator" />
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="col-md-4 col-sm-6 col-xs-6 entry-title"> POSTCODE </div>
                <div className="col-md-8 col-sm-6 col-xs-6 entry-value"> {this.props.postcode} </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="col-md-4 col-sm-6 col-xs-6 entry-title"> COUNTRY </div>
                <div className="col-md-8 col-sm-6 col-xs-6 entry-value"> {this.props.country} </div>
              </div>
            </div>
            <hr className="card-separator" />
          </div>
        </div>
      </div>
    );
  }
}
