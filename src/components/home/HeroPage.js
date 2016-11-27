import React from 'react';

import { ProgressBar, Button, DropdownButton, MenuItem } from 'react-bootstrap/lib';
import ProgressBarAction from '../../actions/ProgressBarAction';
import ProgressBarStore from '../../stores/ProgressBarStore';

export default class HeroPage extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null
    };
    this.barValues=[];
  }

  componentWillMount() {
    ProgressBarAction.fetch();
  }

  componentDidMount() {
    this.changeListener = this._onFetch.bind(this);
    ProgressBarStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    ProgressBarStore.removeChangeListener(this.changeListener);
  }

  _onFetch() {
    this.data = ProgressBarStore.getData();
    console.log(this.data);
    this.setState({data: this.data});
  }

  selectMenuItem(e) {
    console.log(e);
    console.log(document.getElementById("dropdown").value);
    console.log(this.data);
  }

  ChangeProgressBarValue(e) {
    var newData = this.data;
    var barValueToBeChanged = parseInt(document.getElementById("dropdown").value.charAt(document.getElementById("dropdown").value.length-1))-1;
    console.log(parseInt(e.target.textContent));
    this.barValues[barValueToBeChanged] = parseInt(parseInt(this.barValues[barValueToBeChanged]) + parseInt(e.target.textContent));
    if(this.barValues[barValueToBeChanged] < 0) {
      this.barValues[barValueToBeChanged] = 0;
    }
    newData.bars[barValueToBeChanged] = parseInt(parseInt(parseInt(this.barValues[barValueToBeChanged]) * parseInt(newData.limit))/100);
    ProgressBarStore.setdata(newData);
    this.setState({data: newData});
  }

  render() {
    if(this.data && this.data.bars && this.data.buttons) {
      var maxValue = this.data.limit;
      var self = this;
      self.barValues = [];
      return (
        <div className='container'>
          {this.data.bars.map(function (c, index, array) {
            var currentValue = parseInt(parseInt(c*100)/maxValue);
            self.barValues.push(currentValue);
            return <ProgressBar now={c} label={`${currentValue}%`} max={maxValue} id={"progress" + parseInt(index+1)} className={currentValue > 100 ? "error" : "success"}/>
          })}
          <select id="dropdown" onChange={self.selectMenuItem.bind(self)}>
            {this.data.bars.map(function (c, index, array) {
              return <option eventKey={index}>{'#progress' + parseInt(index+1)}</option>
            })}
          </select>
          {this.data.buttons.map(function (c, index, array) {
            return <Button bsSize="small" onClick={self.ChangeProgressBarValue.bind(self)}>{c}</Button>
          })}
        </div>
      );
    } else {
      return <div />
    }
  }
}
