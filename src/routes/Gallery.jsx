import GroupImages from "../Components/GroupImages";
import GroupImagesEffect from "../Components/GroupImagesEffect";
import HeaderSecondary from "../Components/HeaderSecondary";
import Footer from "../Components/Footer";
import Subtitles from "../Components/Subtitles";
import image from "../assets/img/headersecondary/bg-header-gallery.png";
import ImportGroupOne from "../helpers/ImportGroupOne";
import ImportGroupTwo from "../helpers/ImportGroupTwo";
import ImportGroupThree from "../helpers/ImportGroupThree";
import ImportGroupFour from "../helpers/ImportGroupFour";
import GroupImagesStatic from "../Components/GroupImagesStatic";

function Gallery() {
  let titulo = "Galería";
  const { arImagesGroupOne } = ImportGroupOne();

  const { arImagesGroupTwo } = ImportGroupTwo();

  const { arImagesGroupThree } = ImportGroupThree();

  const { arImagesGroupFour } = ImportGroupFour();

  return (
    <>
      <div>
        <HeaderSecondary titulo={titulo} image={image} />
        <Subtitles title="Tipos de energía" />
        <GroupImages arImagesGroup={arImagesGroupOne} />
        <Subtitles title="Proyectos Hidroeléctricos" />
        <GroupImages arImagesGroup={arImagesGroupTwo} />
        <Subtitles title="Plantas Geotérmicas" />
        <GroupImagesEffect arImages={arImagesGroupThree} />
        <Subtitles title="Fuentes Renovables" />
        <GroupImagesStatic arImagesGroupFour={arImagesGroupFour} />
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
