import React, {useContext} from "react";
import "./OtherProject.scss";
import OtherProjectCard from "../../components/otherProjectCard/OtherProjectCard";
import {otherProjectSection} from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {Link} from "react-router-dom";
import Slider from "react-slick";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
export default function OtherProject() {
  const {isDark} = useContext(StyleContext);
  if (!otherProjectSection.display) {
    return null;
  }
  // SLIDER SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="otherProjects">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading otherProject-heading"
                  : "heading otherProject-heading"
              }
            >
              {otherProjectSection.title}
              <span className="wave-emoji">{emoji("🩵")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle otherProject-subtitle"
                  : "subTitle otherProject-subtitle"
              }
            >
              {otherProjectSection.subtitle}
            </p>
          </div>
          <Slider {...settings} className="achievement-slider">
            {otherProjectSection.otherProjectCards.map((card, i) => (
              <div key={i} className="achievement-slide">
                <OtherProjectCard
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Fade>
  );
}
