import EnergyInfo from "../Components/Energy/EnergyInfo";
import ModelContent from "../Components/Energy/ModelContent";
import HeaderSecondary from "../Components/HeaderSecondary";
import Subtitles from "../Components/Subtitles";

import image from "../assets/img/headersecondary/bg-header-eolic.jpg";
import * as textos from "../helpers/Textos";
import ImagesEolic from "../helpers/ImagesEolic";

function EolicaPage() {
  const title = "Energía Eólica";
  const { arImagesEolic } = ImagesEolic();

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
      <EnergyInfo title={title} textInfo={textos.solarInfoOne} />
      <Subtitles title="Torre Eólica" />
      <ModelContent
        imageEnergyOne={arImagesEolic[0]}
        imageEnergyTwo={arImagesEolic[1]}
        texto="Fuente: Elaboración propia"
      />
    </>
  );
}

export default EolicaPage;
