import HeaderSecondary from "../Components/HeaderSecondary";
import * as textos from "../helpers/Textos";
import image from "../assets/img/headersecondary/bg-header-hidroelectric.jpg";
import EnergyInfo from "../Components/Energy/EnergyInfo";
import Subtitles from "../Components/Subtitles";
import ImagesHidro from "../helpers/ImagesHidro";
import ModelContent from "../Components/Energy/ModelContent";
import EnergyInfoPlus from "../Components/Energy/EnergyInfoPlus";
import CardData from "../Components/Energy/CardData";
import Footer from "../Components/Footer";

function HidroelectricaPage() {
  const title = "Energía Hidroeléctrica";
  const { arImagesHidro } = ImagesHidro();

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
      <EnergyInfo title={title} textInfo={textos.hidroInfoOne} />
      <Subtitles title="Represa Hidroeléctrica" />
      <ModelContent
        imageEnergyOne={arImagesHidro[0]}
        imageEnergyTwo={arImagesHidro[4]}
        texto="Fuente: Elaboración propia"
      />
      <Subtitles title="Proceso Energía Hidroeléctrica" />
      <EnergyInfoPlus texto={textos.hidroInfoTwo} pathImg={arImagesHidro[1]} />
      <Subtitles title="Impactos de la Energía Hidroeléctrica" />
      <div className="flex w-[66.7%] m-auto">
        <CardData
          title="Socioeconómico"
          text={textos.cardEolicOne}
          pathImg={arImagesHidro[2]}
        />
        <CardData
          title="Medioambiental"
          text={textos.cardEolicTwo}
          pathImg={arImagesHidro[3]}
        />
      </div>
      <Footer />
    </>
  );
}

export default HidroelectricaPage;
