import GroupImages from "../Components/GroupImages";
import HeaderSecondary from "../Components/HeaderSecondary";
import Subtitles from "../Components/Subtitles";
import image from "../assets/img/headersecondary/bg-header-gallery.png";
import ImportGroupOne from "../helpers/ImportGroupOne";
import ImportGroupTwo from "../helpers/ImportGroupTwo";

function Gallery() {
  let titulo = "Galería";
  const { arImagesGroupOne } = ImportGroupOne();

  const { arImagesGroupTwo } = ImportGroupTwo();

  return (
    <>
      <div>
        <HeaderSecondary titulo={titulo} image={image} />
        <Subtitles title="Tipos de energía" />
        <GroupImages arImagesGroup={arImagesGroupOne} />
        <Subtitles title="Proyectos Hidroeléctricos" />
        <GroupImages arImagesGroup={arImagesGroupTwo} />
        <Subtitles title="Plantas Geotérmicas" />
        <Subtitles title="Fuentes Renovables" />
      </div>
    </>
  );
}

export default Gallery;
