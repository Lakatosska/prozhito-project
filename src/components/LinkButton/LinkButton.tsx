import {FC, ReactNode} from "react"
import { Link, To } from "react-router-dom"
import "../../vendor/fonts/fonts.css"
import linkButtonStyles from "./LinkButton.module.css"
import arrowImg from "../../images/Arrow_right_intro.svg"
import arrowImgWhite from "../../images/Arrow_right_white.svg"
import arrowImgDisabled from "../../images/Arrow_right_disabled.svg"
import arrowImgDisabledWhite from "../../images/Arrow_right_disabled_white.svg"

  export const LinkButton: FC<{
  to: To,
  color?: boolean,
  colorText?:"white"|"black",
  arrow?:boolean,
  disabled?: boolean,
  children?:ReactNode,
  }> = ({ children, to, disabled = false, color = true, colorText = "black", arrow = true }) => {
  const arrowPath = colorText === "white" ? (disabled?arrowImgDisabledWhite:arrowImgWhite) : (disabled?arrowImgDisabled:arrowImg);

  let arrowImage: JSX.Element = <img src="" alt="" />;
  if (arrow) arrowImage = (<img src={arrowPath} alt="arrow" className={linkButtonStyles.link__arrow} />);
 
  
  const className = `${linkButtonStyles.link} ${!color && linkButtonStyles.link_transparent} ${colorText === "white" && linkButtonStyles.link_colorText_white} ${disabled&&linkButtonStyles.link_disabled}`
  
  return <Link to={to} className={className}>
    <div className={linkButtonStyles.link__contentContainer}>
    {children}
     {arrowImage}
    </div>
  </Link>
  }

  