import PropTypes from "prop-types";

function EnergyInfo({ title, textInfo }) {
  return (
    <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px]">
      <h2 className="text-center">Introducción a la {title}</h2>
      <p className="whitespace-pre-line">{textInfo}</p>
    </div>
  );
}

EnergyInfo.propTypes = {
  title: PropTypes.string.isRequired,
  textInfo: PropTypes.string.isRequired,
};

export default EnergyInfo;
