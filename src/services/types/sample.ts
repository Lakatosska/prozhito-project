import {IListItem} from "./index";

export interface ISamplePage {
  name: string;
}

export interface ISamplePageContent extends IListItem, ISamplePage {
  content: string;
}
