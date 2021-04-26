import { observable, computed, action } from 'mobx';

export interface IStore {
  firstname: string,
  lastname: string,
  isOpenModal: boolean,
  fullName: () => string,
  changeFirstname: () => void,
  changeLastname: () => void
}

export class Store {
  @observable firstName = 'John';
  @observable lastName = 'Smith';
  @observable isOpenModal = false;

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @action changeFirstname (value:string) {
    this.firstName = value;
  }

  @action changeLastname (value:string) {
    this.lastName = value;
  }

  @action toggleModal () {
    this.isOpenModal = !this.isOpenModal;
  }
}

export const appStore = new Store();