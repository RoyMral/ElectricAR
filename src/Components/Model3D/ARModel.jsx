import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ARModel({ values, pathModel }) {
  const { x2, y2, z2, scale } = values;
  const initialState = x2;
  const [rotate, setRotate] = useState(initialState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotate((prevRotate) => prevRotate + 3); // Incrementa la rotación automáticamente
    }, 50); // Intervalo de tiempo en milisegundos para la rotación automática

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []); // El efecto se ejecuta una vez al montar el componente

  return (
    <div style={{ margin: "0 auto" }}>
      <a-scene arjs="sourceType: webcam;">
        <a-marker preset="hiro">
          <a-entity
            position="-1 0 1"
            scale={`${scale} ${scale} ${scale}`}
            // gltf-model={`url(/src/assets/ar/eolica/torre-eolica.gltf)`}
            // gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            // ref={sceneRef}
            rotation={`${rotate} ${y2} ${z2}`}
          >
            <a-gltf-model src={pathModel} />
            {/* <a-sphere color="red" radius="5"></a-sphere> */}
          </a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

ARModel.propTypes = {
  values: PropTypes.object.isRequired,
  pathModel: PropTypes.string.isRequired,
};

export default ARModel;
