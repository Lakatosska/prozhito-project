import {IListItem} from "./index";

export type TNames = {
  field1: string,
  field2?: string
}

export interface IDiaryItem extends IListItem {
  name   : TNames;
  image  : string;
  text   : string;
  tag?   : string;
  sample : string;
}
