import PropTypes from "prop-types";
import "../assets/css/GroupImagesEffect.css";

function GroupImagesEffect({ arImages }) {
  return (
    <>
      <div className="container-box mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px]">
        <div className="box">
          <span style={{ "--i": "1" }}>
            <img src={arImages[0]} alt="estado-actual" />
          </span>
          <span style={{ "--i": "2" }}>
            <img src={arImages[1]} alt="estado-actual" />
          </span>
          <span style={{ "--i": "3" }}>
            <img src={arImages[2]} alt="estado-actual" />
          </span>
          <span style={{ "--i": "4" }}>
            <img src={arImages[3]} alt="estado-actual" />
          </span>
          <span style={{ "--i": "5" }}>
            <img src={arImages[4]} alt="estado-actual" />
          </span>
          <span style={{ "--i": "6" }}>
            <img src={arImages[5]} alt="estado-actual" />
          </span>
          <span style={{ "--i": "7" }}>
            <img src={arImages[6]} alt="estado-actual" />
          </span>
          <span style={{ "--i": "8" }}>
            <img src={arImages[7]} alt="estado-actual" />
          </span>
        </div>
      </div>
    </>
  );
}

GroupImagesEffect.propTypes = {
  arImages: PropTypes.array,
};

export default GroupImagesEffect;
