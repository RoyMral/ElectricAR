import PropTypes from "prop-types";

function Subtitles({ title }) {
  return (
    <h2 className="bg-[#00B5A1] py-2 text-white font-bold mx-auto text-center sm:w-[640px] md:text-3xl md:w-[768px] lg-w-[1024px]">
      {title}
    </h2>
  );
}

Subtitles.propTypes = {
  title: PropTypes.string,
};

export default Subtitles;
