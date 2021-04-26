import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Store } from '../store/Store';

interface ModalProps {
  store?: Store
}

@inject('store')
@observer
class Modal extends Component<ModalProps>  {
  
  handleCloseButton = () => {
    if (this.props.store.isOpenModal) {
      this.props.store.toggleModal();
      console.log('close');
    }
  }

  render() {
    return (
      <div className={"app"}>
        <h2>{ `Hello, ${this.props.store.fullName}!`}</h2>
        <button onClick={this.handleCloseButton}>Close</button>

      </div>
    )
  }
}

export default Modal;
