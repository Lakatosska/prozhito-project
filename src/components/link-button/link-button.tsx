import { FC } from "react";
import { Link, To } from "react-router-dom";
import "../../vendor/fonts/fonts.css";
import styles from "./link-button.module.css";
import arrowImgRight from "../../images/Arrow_right.svg";
import arrowImgLeft from "../../images/Arrow_left.svg";
import arrowImgWhite from "../../images/arrow_right_white.svg";
import arrowImgDisabled from "../../images/arrow_right_disabled.svg";
import arrowImgDisabledWhite from "../../images/arrow_right_disabled_white.svg";

export const LinkButton: FC<{
  to: To;
  type?: "rect" | "round";
  color?: boolean;
  colorText?: "white" | "black";
  arrow?: boolean;
  disabled?: boolean;
  direction?: "left" | "right";
  border?: boolean;
  children?: string | null;
  size?: "small" | "medium" | "large" | null;
}> = ({
  children = "Текст",
  to,
  disabled = false,
  color = true,
  colorText = "black",
  arrow = true,
  type = "rect",
  direction = "right",
  size = "medium",
  border = false,
}) => {
  if (type === "rect") {
    direction = "right";
    border = false;
    size = null;
  } else {
    children = null;
    arrow = true;
  }
  let className = `${styles.linkButton} ${styles["linkButton_type_" + type]} ${
    color
      ? ""
      : border
      ? `${styles.linkButton_color_transparent}  ${styles.linkButton_border}`
      : styles.linkButton_color_transparent
  } ${size ? styles["linkButton_size_" + size] : ""}`;

  let arrowPath = direction === "left" ? arrowImgLeft : arrowImgRight;

  if (colorText === "white") {
    arrowPath = arrowImgWhite;
    className += " " + styles.linkButton_colorText_white;
  }
  if (disabled) {
    if (type === "rect") {
      arrowPath =
        colorText === "white" ? arrowImgDisabledWhite : arrowImgDisabled;
    }
    className += " " + styles.linkButton_disabled;
  }

  const arrowImage = (
    <img
      src={arrowPath}
      alt={
        children ??
        `Кнопка со стрелкой на${direction === "left" ? "лево" : "право"}`
      }
      className={`${
        arrow ? styles.linkButton__arrow : styles.linkButton__arrow_hide
      }`}
    />
  );
  return (
    <Link to={to} className={className}>
      {children}
      {arrowImage}
    </Link>
  );
};
