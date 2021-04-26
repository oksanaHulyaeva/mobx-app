import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
//import { observable } from 'mobx';

import { Store } from '../store/Store';
const classNames = require('classnames');

interface FormProps {
  store?: Store
}

@inject('store')
@observer
class Form extends Component<FormProps>  {

  handleFirstname = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
      this.props.store.changeFirstname(value)
    }

  handleLastname = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
    this.props.store.changeLastname(value)
  }

  handleSayHiButton = () => {
    if (!this.props.store.isOpenModal
      && this.props.store.firstName 
      && this.props.store.lastName) {
      this.props.store.enableModal();
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
            value={this.props.store.firstName}
            onChange={this.handleFirstname}
            className={classNames("input", "app-form__input")}
            autoFocus={true}
            required
          />
          <input
            type="text"
            placeholder="Lastname"
            value={this.props.store.lastName}
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
