import PropTypes from "prop-types";
import Swiper from "swiper";
import "swiper/css";
import "../assets/css/GroupImages.css";
function GroupImages({ arImages }) {
  let swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  return (
    <>
      <div
        style={{ backgroundImage: `url(${arImages[7]})` }}
        className="overflow-x-hidden swiper-container pt-12 pb-40 mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px]"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[0]}
              alt="biomasa"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[1]}
              alt="eolica"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[2]}
              alt="eolica-solar"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[3]}
              alt="geotermica-laspailasII"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[4]}
              alt="hidro-toro3"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[5]}
              alt="represa"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="md:w-[300px] md:h-[300px]"
              src={arImages[6]}
              alt="solarUno"
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

GroupImages.propTypes = {
  arImages: PropTypes.array,
};

export default GroupImages;
