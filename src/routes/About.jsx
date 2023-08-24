import AboutBodyContent from "../Components/AboutBodyContent";
import HeaderSecondary from "../Components/HeaderSecondary";
import Footer from "../Components/Footer";
import "../assets/css/About.css";
import image from "../assets/img/headersecondary/bg-header-about.jpg";

function About() {
  let titulo = "Sobre el proyecto";

  return (
    <>
      <div>
        <HeaderSecondary titulo={titulo} image={image} />
        <AboutBodyContent />
        <Footer />
      </div>
    </>
  );
}

export default About;
