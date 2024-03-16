import HeaderSecondary from "../Components/HeaderSecondary";

import image from "../assets/img/headersecondary/bg-header-hidroelectric.jpg";

function HidroelectricaPage() {
  const title = "Energía Hidroeléctrica";

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
    </>
  );
}

export default HidroelectricaPage;
