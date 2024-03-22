import EnergyInfo from "../Components/Energy/EnergyInfo";
import ModelContent from "../Components/Energy/ModelContent";
import HeaderSecondary from "../Components/HeaderSecondary";
import Subtitles from "../Components/Subtitles";

import image from "../assets/img/headersecondary/bg-header-eolic.jpg";
import * as textos from "../helpers/Textos";
import ImagesEolic from "../helpers/ImagesEolic";
import EnergyInfoPlus from "../Components/Energy/EnergyInfoPlus";
import CardData from "../Components/Energy/CardData";
import Footer from "../Components/Footer";

function EolicaPage() {
  const title = "Energía Eólica";
  const { arImagesEolic } = ImagesEolic();

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
      <EnergyInfo title={title} textInfo={textos.eolicInfoOne} />
      <Subtitles title="Torre Eólica" />
      <ModelContent
        imageEnergyOne={arImagesEolic[0]}
        imageEnergyTwo={arImagesEolic[1]}
        texto="Fuente: Elaboración propia"
      />
      <Subtitles title="Interior Turbina Eólica" />
      <EnergyInfoPlus texto={textos.eolicInfoTwo} pathImg={arImagesEolic[2]} />
      <Subtitles title="Impactos de la Energía Eólica" />
      <div className="flex w-[66.7%] m-auto">
        <CardData
          title="Socioeconómico"
          text={textos.cardEolicOne}
          pathImg={arImagesEolic[3]}
        />
        <CardData
          title="Medioambiental"
          text={textos.cardEolicTwo}
          pathImg={arImagesEolic[4]}
        />
      </div>
      <Footer />
    </>
  );
}

export default EolicaPage;
