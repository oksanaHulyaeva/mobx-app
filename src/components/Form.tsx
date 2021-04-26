import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

import { Store } from '../store/Store';

interface FormProps {
  store?: Store
}

@inject('store')
@observer
class Form extends Component<FormProps>  {
  @observable name:string = ''
  @observable surname:string = ''

  handleFirstname = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
      this.name = value
      this.props.store.changeFirstname(this.name)
    }

  handleLastname = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
    this.surname = value
    this.props.store.changeLastname(this.surname)
  }
  render() {
    return (
      <div className={"app"}>
        <h2>{this.props.store.fullName}</h2>
        <input type="text" value={this.name} onChange={this.handleFirstname}/>
        <input type="text" value={this.surname} onChange={this.handleLastname}/>
      </div>
    )
  }
}

export default Form;
