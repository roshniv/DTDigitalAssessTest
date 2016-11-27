import React from 'react';
import { Input, Button } from 'react-bootstrap/lib';
import HCard from './HCard';

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
      email: null,
      phone: null,
      house: '',
      street: '',
      suburb: '',
      state: '',
      postcode: null,
      country: null
    };
  }

  updateGivenName =(e) => {
    this.setState({name: this.refs.name.getValue()});
  };

  updateSurName =(e) => {
    this.setState({surname: this.refs.surname.getValue()});
  };

  updateEmail =(e) => {
    this.setState({email: this.refs.email.getValue()});
  };

  updatePhone =(e) => {
    this.setState({phone: this.refs.phone.getValue()});
  };

  updateHouseName =(e) => {
    this.setState({house: this.refs.house.getValue()});
  };

  updateStreet =(e) => {
    this.setState({street: this.refs.street.getValue()});
  };

  updateSuburb =(e) => {
    this.setState({suburb: this.refs.suburb.getValue()});
  };

  updateState =(e) => {
    this.setState({state: this.refs.state.getValue()});
  };

  updatePostCode =(e) => {
    this.setState({postcode: this.refs.postcode.getValue()});
  };

  updateCountry =(e) => {
    this.setState({country: this.refs.country.getValue()});
  };

  uploadAvatar =(e) => {

  };

  createHCard =(e) => {

  };

  readURL = (e) => {
      if (e && e.target && e.target.files && e.target.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              document.getElementById("avatar").setAttribute('src', e.target.result);
              document.getElementById("avatar").setAttribute('style', 'width:100%');
              //document.getElementById("avatar").width='100%';
              document.getElementById("avatar").height='70';
          };

          reader.readAsDataURL(e.target.files[0]);
      }
  };

  render() {
    return (
    <div className="wrapper">
      <div className='col-md-6 col-sm-12 col-xs-12' id="form">
        <h2>hCard Builder</h2>
        <h5 className="grey-text sub-heading">PERSONAL DETAILS</h5>
        <hr className="form-separator"/>
        <div className="personal-details row">
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">GIVEN NAME</div>
            <div className="entry-box">
              <Input type="text" name="name" ref="name" onKeyUp={this.updateGivenName}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">SURNAME</div>
            <div className="entry-box">
              <Input type="text" name="surname" ref="surname" onKeyUp={this.updateSurName}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">EMAIL</div>
            <div className="entry-box">
              <Input type="text" name="email" ref="email" onKeyUp={this.updateEmail}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">PHONE</div>
            <div className="entry-box">
              <Input type="text" name="phone" ref="phone" onKeyUp={this.updatePhone}/>
            </div>
          </div>
        </div>

        <h5 className="grey-text sub-heading">ADDRESS</h5>
        <hr className="form-separator"/>
        <div className="house-details row">
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">HOUSE NAME OR #</div>
            <div className="entry-box">
              <Input type="text" name="house" ref="house" onKeyUp={this.updateHouseName}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">STREET</div>
            <div className="entry-box">
              <Input type="text" name="street" ref="street" onKeyUp={this.updateStreet}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">SUBURB</div>
            <div className="entry-box">
              <Input type="text" name="suburb" ref="suburb" onKeyUp={this.updateSuburb}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">STATE</div>
            <div className="entry-box">
              <Input type="text" name="state" ref="state" onKeyUp={this.updateState}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">POSTCODE</div>
            <div className="entry-box">
              <Input type="text" name="postcode" ref="postcode" onKeyUp={this.updatePostCode}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6-col-xs-6">
            <div className="box-title">COUNTRY</div>
            <div className="entry-box">
              <Input type="text" name="country" ref="country" onKeyUp={this.updateCountry}/>
            </div>
          </div>
        </div>
        <div className='align-center'>
            <Button
              bsStyle="info"
              onMouseDown={this.uploadAvatar.bind(this)}
            >Upload Avatar
              <Input type="file" name="avatar" ref="avatar" onChange={this.readURL}/>
            </Button>
            <Button
              className="btn btn-default"
              onMouseDown={this.createHCard.bind(this)}
            >Create hCard</Button>
        </div>
      </div>
      <HCard name={this.state.name} 
        surname={this.state.surname} 
        email={this.state.email} 
        phone={this.state.phone} 
        house={this.state.house} 
        street={this.state.street} 
        suburb={this.state.suburb} 
        state={this.state.state} 
        postcode={this.state.postcode} 
        country={this.state.country} />
    </div>
    );
  }
}
