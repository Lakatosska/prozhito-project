import {IListItem} from "./index";

export interface IDiaryItem extends IListItem{
  name  : {
    field1: string,
    field2?: string
  };
  image : string;
  text  : string;
  tag?  : string;
}
