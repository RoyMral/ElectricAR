import EnergyInfo from "../Components/Energy/EnergyInfo";
import Footer from "../Components/Footer";
import HeaderSecondary from "../Components/HeaderSecondary";
import * as textos from "../helpers/Textos";
import Subtitles from "../Components/Subtitles";
import ModelContent from "../Components/Energy/ModelContent";
import image from "../assets/img/headersecondary/bg-header-gertermic.jpg";
import ImagesGeotermic from "../helpers/ImagesGeotermic";

function GeotermicaPage() {
  const title = "Energía Geotérmica";
  const { arImagesGeotermic } = ImagesGeotermic();

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
      <EnergyInfo title={title} textInfo={textos.geotermicInfoOne} />
      <Subtitles title="Extractor Geotérmico" />
      <ModelContent
        imageEnergyOne={arImagesGeotermic[0]}
        imageEnergyTwo=""
        texto="Fuente: Elaboración propia"
      />
      <Subtitles title="Proceso Geotérmico" />
      <ModelContent
        imageEnergyOne={arImagesGeotermic[1]}
        imageEnergyTwo=""
        texto="Fuente: Elaboración propia"
      />
      <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] text-white bg-[rgba(15,64,114,0.8)] text-lg">
        <p>{textos.geotermicInfoTwo}</p>
      </div>
      <Footer />
    </>
  );
}

export default GeotermicaPage;
