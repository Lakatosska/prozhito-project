import {FC, ReactElement} from "react";
import TabItem from "./tab-item";

type TProps = {
  children: Array<ReactElement>
}

const Tabs: FC<TProps> = ({ children }) => {
  return (
    <div>
      <ul style={{display: 'flex', flexDirection: "row", listStyleType: 'none'}}>
        {children.map((item) => (
          <TabItem
            value={item.props.value}
            selected={item.props.selected}
            setSelected={item.props.setSelected}
          />
        ))}
      </ul>
    </div>
  )
}

export default Tabs
