import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Store } from '../store/Store';
const classNames = require('classnames');

interface ModalProps {
  store?: Store
}

@inject('store')
@observer
class Modal extends Component<ModalProps>  {
  
  handleCloseButton = () => {
    if (this.props.store.isOpenModal) {
      this.props.store.disableModal();
      this.props.store.firstName = '';
      this.props.store.lastName = '';
    }
  }

  render() {
    return (
      <div className={classNames(
        this.props.store.isOpenModal ? "app-modal" : "hidden"
      )}>
        <div className={"app-modal__content"}>
          <h2 className={"app-modal__header"}>{ `Hello, ${this.props.store.fullName}!`}</h2>
          <button
            onClick={this.handleCloseButton}
            className={classNames("button", "app-modal__button")}
          >
            Close
          </button>
        </div>
      </div>
    )
  }
}

export default Modal;
