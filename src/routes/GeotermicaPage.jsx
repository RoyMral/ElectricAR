import EnergyInfo from "../Components/Energy/EnergyInfo";
import Footer from "../Components/Footer";
import HeaderSecondary from "../Components/HeaderSecondary";

import image from "../assets/img/headersecondary/bg-header-gertermic.jpg";

function GeotermicaPage() {
  const title = "Energía Geotérmica";

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
      <EnergyInfo />
      <Footer />
    </>
  );
}

export default GeotermicaPage;
