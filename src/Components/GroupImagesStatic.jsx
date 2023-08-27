import PropTypes from "prop-types";

function GroupImagesStatic({ arImagesGroupFour }) {
  return (
    <>
      <div className="mx-auto my-5 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:w-[640px] md:w-[768px] lg:w-[1024px]">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            className="w-full h-full duration-500  hover:scale-[200%]"
            src={arImagesGroupFour[0]}
            alt=""
          />
        </div>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            className="w-full h-full duration-500 hover:scale-[200%]"
            src={arImagesGroupFour[1]}
            alt=""
          />
        </div>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            className="w-full h-full duration-500 hover:scale-[200%]"
            src={arImagesGroupFour[2]}
            alt=""
          />
        </div>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            className="w-full h-full duration-500 hover:scale-[200%]"
            src={arImagesGroupFour[3]}
            alt=""
          />
        </div>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            className="w-full h-full duration-500 hover:scale-[200%]"
            src={arImagesGroupFour[4]}
            alt=""
          />
        </div>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            className="w-full h-full duration-500 hover:scale-[200%]"
            src={arImagesGroupFour[5]}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

GroupImagesStatic.propTypes = {
  arImagesGroupFour: PropTypes.array,
};

export default GroupImagesStatic;
