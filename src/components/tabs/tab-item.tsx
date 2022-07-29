import {FC} from "react";
import {TJournalFilter} from "../../services/types/journal";
import {JOURNAL_ITEM_TYPE} from "../../constants";

type TTabItemProps = {
  value : TJournalFilter,
  selected : boolean,
  setSelected : (value: TJournalFilter) => void
}

const TabItem: FC<TTabItemProps> = ({value, selected, setSelected}) => {
  return (
    <li style={{padding: 10}}>
      <button style={{textDecoration: selected ? "underline" : "none"}} onClick={() => setSelected(value)}>{JOURNAL_ITEM_TYPE[value]}</button>
    </li>
  )
}

export default TabItem
