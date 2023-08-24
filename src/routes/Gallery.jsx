import GroupImages from "../Components/GroupImages";
import HeaderSecondary from "../Components/HeaderSecondary";
import Subtitles from "../Components/Subtitles";
import image from "../assets/img/headersecondary/bg-header-gallery.png";
import biomasa from "../assets/img/gallery/biomasa.jpg";
import energyEolic from "../assets/img/gallery/energy-eolic.jpg";
import eolicasSolar from "../assets/img/gallery/eolicas-solar.jpg";
import geoLaspailasII from "../assets/img/gallery/geo-laspailasII.webp";
import toro3 from "../assets/img/gallery/hidroelectrica-toro3.jpg";
import represa from "../assets/img/gallery/represa.jpg";
import solarUno from "../assets/img/gallery/solar1.webp";
import bgGroupOne from "../assets/img/gallery/bg-groupone.jpg";

function Gallery() {
  let titulo = "Galería";
  let arImages = [
    biomasa,
    energyEolic,
    eolicasSolar,
    geoLaspailasII,
    toro3,
    represa,
    solarUno,
    bgGroupOne,
  ];
  return (
    <>
      <div>
        <HeaderSecondary titulo={titulo} image={image} />
        <Subtitles title="Tipos de energía" />
        <GroupImages arImages={arImages} />
        <Subtitles title="Proyectos Hidroeléctricos" />
        <Subtitles title="Plantas Geotérmicas" />
        <Subtitles title="Fuentes Renovables" />
      </div>
    </>
  );
}

export default Gallery;
