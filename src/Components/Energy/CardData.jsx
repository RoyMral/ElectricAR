import PropTypes from "prop-types";

function CardData({ title, text, pathImg }) {
  return (
    <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] text-white p-3 bg-[rgba(15,64,114,0.8)]">
      <h2 className="text-center bg-[rgba(15,64,114,0.8)] font-bold text-lg py-2">
        {title}
      </h2>
      <figure className="flex justify-center">
        <img src={pathImg} alt="" />
      </figure>
      <p className="text-justify">{text}</p>
    </div>
  );
}

CardData.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  pathImg: PropTypes.string.isRequired,
};

export default CardData;
