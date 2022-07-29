import {FC} from "react";
import {dataAPI} from "../../services/api/data";

const SamplePage: FC<{name: string}> = ({name}) => {
  const {isLoading, data} = dataAPI.useGetSampleContentQuery(name);
  if (isLoading || !data || data.length === 0) {
    return null
  }
  return (
    <article className="article" dangerouslySetInnerHTML={{__html: data[0].content}}/>
  )
}

export default SamplePage
