import {FC} from "react";
import {dataAPI} from "../../services/api/data";
import {useParams} from "react-router-dom";

const SamplePage: FC = () => {
  const {page} = useParams<{page?: string}>();
  const {isLoading, data} = dataAPI.useGetSampleContentQuery(page);
  if (isLoading || !data || data.length === 0) {
    return null;
  }
  return (
    <article className="article" dangerouslySetInnerHTML={{__html: data[0].content}}/>
  )
}

export default SamplePage
