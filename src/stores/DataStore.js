import { observable, action } from "mobx";

export default class DataStore {
  @observable mail;
  @observable drawerOpen  = false;

  @action setMail = (value) => this.mail = value;
  @action setDrawer = (value) => this.drawerOpen = value;
}
