import { FC } from "react";
import introStyles from "../intro/intro.module.css";

export interface IntroItemProps {
  title: string;
  text: string;
  action: string;
  link: string;
}

export const IntroItem: FC<IntroItemProps> = (props: IntroItemProps) => {

  return(
    <li className={introStyles.intro__card}>
      <h3 className={introStyles.intro__cardTitle}>{props.title}</h3>
      <p className={introStyles.intro__cardSubtitle}>
      {props.text}
      </p>
      <div className={introStyles.intro__linkContainer}>
        <p className={introStyles.intro__aboutLink}>{props.action}</p>
        <a href={props.link} className="button button_size-intro">
          <img
            src="images/Arrow_right_intro.svg"
            alt="Стрелка влево"
            className="arrow arrow_intro"
          />
        </a>
      </div>
    </li>
  )
}
