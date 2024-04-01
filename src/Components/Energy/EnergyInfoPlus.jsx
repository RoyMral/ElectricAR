import PropTypes from "prop-types";

function EnergyInfoPlus({ texto, pathImg }) {
  return (
    <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] text-white text-lg text-justify">
      <figure className="flex justify-center">
        <img src={pathImg} alt="" />
      </figure>
      <p className="bg-[rgba(15,64,114,0.8)] p-2">{texto}</p>
    </div>
  );
}

EnergyInfoPlus.propTypes = {
  texto: PropTypes.string.isRequired,
  pathImg: PropTypes.string.isRequired,
};

export default EnergyInfoPlus;
