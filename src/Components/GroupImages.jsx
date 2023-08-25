import PropTypes from "prop-types";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "../assets/css/GroupImages.css";

register();
function GroupImages({ arImages }) {
  return (
    <>
      <div
        // style={{ backgroundImage: `url(${arImages[7]})` }}
        className="bg-black overflow-x-hidden mt-12 mb-40 mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px]"
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
              className="md:w-[300px] md:h-[300px]"
              src={arImages[0]}
              alt="biomasa"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[1]}
              alt="eolica"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[2]}
              alt="eolica-solar"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[3]}
              alt="geotermica-laspailasII"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[4]}
              alt="hidro-toro3"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[5]}
              alt="represa"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[6]}
              alt="solarUno"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}

GroupImages.propTypes = {
  arImages: PropTypes.array,
};

export default GroupImages;
