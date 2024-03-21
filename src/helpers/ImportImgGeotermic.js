import image3DGeoOne from "../assets/ar/imgGeotermica/proceso-geotermica.png";
import imageQRGeoOne from "../assets/ar/imgGeotermica/qr-geotermica.png";
import image3DGeoTwo from "../assets/ar/imgGeotermica/industria-geo.png";
import imageQRGeoTwo from "../assets/ar/imgGeotermica/qr-geo-2.png";

function ImportImgEnergy() {
  let arImagesEnergy = [
    image3DGeoOne,
    imageQRGeoOne,
    image3DGeoTwo,
    imageQRGeoTwo,
  ];
  return {
    arImagesEnergy,
  };
}

export default ImportImgEnergy;
