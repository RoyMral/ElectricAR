import EnergyInfo from "../Components/Energy/EnergyInfo";
import HeaderSecondary from "../Components/HeaderSecondary";
import * as textos from "../helpers/Textos";
import image from "../assets/img/headersecondary/bg-header-solar.jpg";
import Subtitles from "../Components/Subtitles";
import ImagesSolar from "../helpers/ImagesSolar";
import ModelContent from "../Components/Energy/ModelContent";
import EnergyInfoPlus from "../Components/Energy/EnergyInfoPlus";
import CardData from "../Components/Energy/CardData";
import Footer from "../Components/Footer";

function SolarPage() {
  const title = "Energía Solar";
  const { arImagesSolar } = ImagesSolar();

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
      <EnergyInfo title={title} textInfo={textos.solarInfoOne} />
      <Subtitles title="Panel Solar" />
      <ModelContent
        imageEnergyOne={arImagesSolar[0]}
        imageEnergyTwo=""
        texto="Fuente: Elaboración propia"
      />
      <Subtitles title="Colocación Panel Solar" />
      <EnergyInfoPlus texto={textos.solarInfoTwo} pathImg={arImagesSolar[1]} />
      <Subtitles title="Impacto de la Energía Solar" />
      <div className="flex w-[66.7%] m-auto">
        <CardData
          title="Socioeconómico"
          text={textos.cardSolarOne}
          pathImg={arImagesSolar[2]}
        />
        <CardData
          title="Medioambiental"
          text={textos.cardSolarTwo}
          pathImg={arImagesSolar[3]}
        />
      </div>
      <Footer />
    </>
  );
}

export default SolarPage;
