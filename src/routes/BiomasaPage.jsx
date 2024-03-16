import HeaderSecondary from "../Components/HeaderSecondary";

import image from "../assets/img/headersecondary/bg-header-biomasa.jpg";

function BiomasaPage() {
  const title = "Energía Biomasa";

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
    </>
  );
}

export default BiomasaPage;
