// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Geotermica() {
  return (
    <div style={{ margin: "0 auto" }}>
      <a-scene arjs="sourceType: webcam;">
        <a-marker preset="hiro">
          <a-entity
            position="0 -0.5 0"
            scale="0.2 0.2 0.2"
            gltf-model={`url(/src/assets/ar/geotermica/geotermica.gltf)`}
            // gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            rotation="0 0 0"
            gesture-detector
          >
            {/* <a-sphere color="red" radius="5"></a-sphere> */}
          </a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default Geotermica;
