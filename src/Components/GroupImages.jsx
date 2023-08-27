import PropTypes from "prop-types";
import { register } from "swiper/element/bundle";
import "swiper/css";

register();
function GroupImages({ arImagesGroup }) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${arImagesGroup[7]})` }}
        className="bg-center bg-cover bg-no-repeat pt-12 pb-40 my-5 mx-auto h-[300px] md:h-full sm:w-[640px] md:w-[768px] lg:w-[1024px]"
      >
        <swiper-container
          effect={"coverflow"}
          navigation={true}
          slides-per-view="3"
          speed="500"
          loop="true"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <swiper-slide>
            <img
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-90"
              src={arImagesGroup[0]}
              alt="biomasa"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-90"
              src={arImagesGroup[1]}
              alt="eolica"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-90"
              src={arImagesGroup[2]}
              alt="eolica-solar"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-90"
              src={arImagesGroup[3]}
              alt="geotermica-laspailasII"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-90"
              src={arImagesGroup[4]}
              alt="hidro-toro3"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-90"
              src={arImagesGroup[5]}
              alt="represa"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-90"
              src={arImagesGroup[6]}
              alt="solarUno"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}

GroupImages.propTypes = {
  arImagesGroup: PropTypes.array,
};

export default GroupImages;
