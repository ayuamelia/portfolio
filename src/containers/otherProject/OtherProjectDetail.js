import React from "react";
import {useParams} from "react-router-dom";
import "./OtherProject.scss";
import {otherProjectSection} from "../../portfolio"; // adjust path if needed
import OtherProjectHeader from "../../components/header/OtherProjectHeader";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import AirflowDetail from "./AirflowDetail";
import OpenApiDetail from "./OpenApiDetail";
import N8nDetail from "./N8nDetail";
import GpsDetail from "./GpsDetail";
import HirelitDetail from "./HirelitDetail";
import PosCoffeeshopDetail from "./PosCoffeeshopDetail";

const OtherProjectDetail = () => {
  const {slug} = useParams();
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const changeTheme = () => setIsDark(!isDark);
  const detailComponents = {
    AirflowDetail: AirflowDetail
  };

  const otherProject = otherProjectSection.otherProjectCards.find(
    item => slugify(item.title) === slug
  );

  if (!otherProject) {
    return <div>Project not found.</div>;
  }
  const slugifiedTitle = slugify(otherProject.title);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark, changeTheme}}>
        <OtherProjectHeader />
          <div className="otherProject-detail-container">
            <h1>{otherProject.title}</h1>
            <p>{otherProject.subtitle}</p>
            <p>{otherProject.intro}</p>
        {slugifiedTitle === "airflow-dag-monitoring" ? (<AirflowDetail />) : slugifiedTitle === "open-api-document" ? (<OpenApiDetail />) : slugifiedTitle === "n8n-ai" ? (<N8nDetail />) : slugifiedTitle === "golek-pet-shop" ? (<GpsDetail />) :  slugifiedTitle === "hirelit-platform" ? (<HirelitDetail />) : slugifiedTitle === "pos-coffeeshop" ? (<PosCoffeeshopDetail />) : (
            <p>{otherProject.subtitle}</p>
            
          )}
          </div>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

// Helper to convert title into a URL-friendly slug
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default OtherProjectDetail;
