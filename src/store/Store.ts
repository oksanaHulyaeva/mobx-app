import { observable, computed, action } from 'mobx';

export interface IStore {
  firstname: string,
  lastname: string,
  fullName: () => string,
  changeFirstname: () => void,
  changeLastname: () => void
}

export class Store {
  @observable firstName = 'John';
  @observable lastName = 'Smith';

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @action changeFirstname (value:string) {
    this.firstName = value;
  }

  @action changeLastname (value:string) {
    this.lastName = value;
  }
}

export const appStore = new Store();