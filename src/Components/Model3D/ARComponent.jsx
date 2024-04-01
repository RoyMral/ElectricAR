import { useRef, useEffect } from "react";
// import { useFrame } from "react-three-fiber";
import { ARButton } from "three/examples/jsm/webxr/ARButton";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PropTypes from "prop-types";

const ARComponent = () => {
  const arButton = useRef();

  useEffect(() => {
    if (arButton.current)
      arButton.current.addEventListener("click", () =>
        console.log("AR session started")
      );
    return () => {
      if (arButton.current)
        arButton.current.removeEventListener("click", () =>
          console.log("AR session started")
        );
    };
  }, []);

  // useFrame(() => {
  //   // Tu lógica de animación o actualización de la escena en realidad aumentada
  // });

  return (
    <>
      <ARGLTFModel url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf" />
      <group>
        <primitive object={arButton.current} />
      </group>
    </>
  );
};

const ARGLTFModel = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  return <mesh>{gltf.scene.children}</mesh>;
};

ARGLTFModel.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ARComponent;
