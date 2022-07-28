import {IListItem} from "./index";

export interface INewsItem extends IListItem {
  date  : string;
  tag?  : string | null;
  image : string;
  text  : string;
}

export interface INewsData {
  page  : number;
  total : number;
  data  : Array<INewsItem>;
}

export type TNewsRequest = Omit<INewsData, "data" | "total">
