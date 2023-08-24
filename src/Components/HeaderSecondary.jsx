import PropTypes from "prop-types";
import NavBar from "./NavBar";
import "../assets/css/HeaderSecondary.css";

function HeaderSecondary({ titulo, image }) {
  let urlImage = `url(${image})`;

  return (
    <header
      style={{
        backgroundImage: `${urlImage}`,
      }}
      className="header-secondary border border-sky-950 text-white mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px]"
    >
      <div className="nav-bar">
        <NavBar></NavBar>
      </div>
      <h1 className="text-center font-bold relative text-xl mt-[19px] mb-[30px] sm:text-2xl sm:mt-[29px] sm:mb-[48px] md:mt-[39px] md:mb-[58px] md:text-4xl lg:mt-[49px] lg:mb-[68px]">
        {titulo}
      </h1>
    </header>
  );
}

HeaderSecondary.propTypes = {
  titulo: PropTypes.string,
  image: PropTypes.string,
};

export default HeaderSecondary;
