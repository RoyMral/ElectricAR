import HeaderSecondary from "../Components/HeaderSecondary";

import image from "../assets/img/headersecondary/bg-header-gertermic.jpg";

function GeotermicaPage() {
  const title = "Energía Geotérmica";

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
    </>
  );
}

export default GeotermicaPage;
