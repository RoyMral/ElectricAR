import HeaderSecondary from "../Components/HeaderSecondary";

import image from "../assets/img/headersecondary/bg-header-solar.jpg";

function SolarPage() {
  const title = "Energía Solar";

  return (
    <>
      <HeaderSecondary titulo={title} image={image} />
    </>
  );
}

export default SolarPage;
