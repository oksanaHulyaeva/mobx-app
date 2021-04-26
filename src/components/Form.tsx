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

  handleSayHiButton = () => {
    if (!this.props.store.isOpenModal
      && this.props.store.firstName 
      && this.props.store.lastName) {
      this.props.store.toggleModal();
      console.log('open');
    }
  }

  handleFormSubmit = (event:React.FormEvent) => {
    event.preventDefault();
  }

  render() {
    return (
      <form
        className={"app__form"}
        onSubmit={this.handleFormSubmit}
      >
        <h2>{this.props.store.fullName}</h2>
        <input
          type="text"
          placeholder="Your firstname"
          value={this.name}
          onChange={this.handleFirstname}
          required
        />
        <input
          type="text"
          placeholder="Your lastname"
          value={this.surname}
          onChange={this.handleLastname}
          required
        />
        <button
          type="submit"
          onClick={this.handleSayHiButton}
          >
            Say Hi
        </button>
      </form>
    )
  }
}

export default Form;
