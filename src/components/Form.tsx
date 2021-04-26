import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

import { Store } from '../store/Store';
const classNames = require('classnames');

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
        className={"app-form"}
        onSubmit={this.handleFormSubmit}
      >
        <div className={"app-form__input-container"}>
          <input
            type="text"
            placeholder="Firstname"
            value={this.name}
            onChange={this.handleFirstname}
            className={classNames("input", "app-form__input")}
            autoFocus={true}
            required
          />
          <input
            type="text"
            placeholder="Lastname"
            value={this.surname}
            onChange={this.handleLastname}
            className={classNames("input", "app-form__input")}
            required
          />
        </div>
        <button
          type="submit"
          onClick={this.handleSayHiButton}
          className={classNames("button", "app-form__button")}
          >
            Say Hi
        </button>
      </form>
    )
  }
}

export default Form;
