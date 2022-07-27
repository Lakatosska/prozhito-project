import {FC} from "react"
import { Link, To } from "react-router-dom"
import "../../vendor/fonts/fonts.css"
import linkButtonRoundStyles from "./LinkButtonRound.module.css"
import arrowImgRight from "../../images/Arrow_right.svg"
import arrowImgLeft from "../../images/Arrow_left.svg"

  export const LinkButtonRound: FC<{
  to: To,
  color?: boolean,
    disabled?: boolean,
    direction?: "right" | "left";
    border?: boolean,
    size?:"small"|"medium"|"large"
  }> = ({to, disabled = false, color = true,direction="right",border=false,size="large"}) => {
    const arrowImage: JSX.Element = <img src={direction === "left" ? arrowImgLeft : arrowImgRight} alt="arrow" className={linkButtonRoundStyles.arrow} />
    
    const linkSize = size === "large" ? linkButtonRoundStyles.link_size_large : size === "medium" ? linkButtonRoundStyles.link_size_medium : linkButtonRoundStyles.link_size_small;

    const className = `${linkButtonRoundStyles.link} ${color && linkButtonRoundStyles.link_color} ${disabled && linkButtonRoundStyles.link_disabled} ${border && linkButtonRoundStyles.link_border} ${linkSize}`;
  
  return <Link to={to} className={className}>
    <div className={linkButtonRoundStyles.link__contentContainer}>
     {arrowImage}
    </div>
  </Link>
  }