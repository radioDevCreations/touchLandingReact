import { FC, useEffect } from "react";
import "./HeroSection.scss";
import { Link } from "react-router-dom";

import { Button } from "../../Button/Button";

export interface HeroSectionProps {
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  imgSrc: string;
  alt: string;
  imgStart: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  imgSrc,
  alt,
  imgStart,
}) => {

  useEffect(() => {
    console.log("hero");
  }, [])
  return (
    <div
      className={
        lightBg
          ? "home__hero-section"
          : "home__hero-section home__hero-section--dark-bg"
      }
    >
      <div className="container">
        <div
          className="row home__hero-row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="col home__hero-content">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading heading--dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle home__hero-subtitle--dark"
                }
              >
                {description}
              </p>
              <Link to={"/sign-up"}>
                <Button buttonSize="button--wide" buttonColor="blue">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img src={imgSrc} alt={alt} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
