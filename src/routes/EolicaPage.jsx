import HeaderSecondary from "../Components/HeaderSecondary";

import image from "../assets/img/headersecondary/bg-header-eolic.jpg";

function EolicaPage() {
  const title = "Energía Eólica";

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
    </>
  );
}

export default EolicaPage;
