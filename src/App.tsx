import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';

import { Store } from './store/Store';
import Form from './components/Form';
import Modal from './components/Modal'

class App extends Component  {
  store = new Store()
  render() {
    return (
      <Provider store={this.store}>
        <div className={"app"}>
          <h1>Introduce yourself, please :)</h1>
          <Form />
          <Modal />
        </div>
      </Provider>
    )
  }
}

export default App;

serviceWorker.unregister();