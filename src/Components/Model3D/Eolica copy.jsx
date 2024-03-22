// import PropTypes from "prop-types";

// import * as THREE from "three";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Eolica() {
  const containerRef = useRef();
  const modelRef = useRef(null);

  useEffect(() => {
    // Configura la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Agrega una luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Agrega una luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Carga tu modelo GLTF
    const loader = new GLTFLoader();
    loader.load(
      "/src/assets/ar/eolica/torre-eolica.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    // Configura la cámara
    camera.position.z = 5;

    // Renderiza la escena
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación automática del modelo (por ejemplo, en el eje Y)
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
      }

      renderer.render(scene, camera);
    };
    animate();

    // Limpia el renderizador al desmontar el componente
    return () => {
      renderer.dispose();
    };
  }, []);
  return <div ref={containerRef} />;
  // <div style={{ margin: "0 auto" }}>
  //   <a-scene arjs="sourceType: webcam;">
  //     <a-marker preset="hiro">
  //       <a-entity
  //         position="0 0 1"
  //         // scale={`${scale} ${scale} ${scale}`}
  //         // gltf-model={`url(/src/assets/ar/eolica/torre-eolica.gltf)`}
  //         // gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
  //         // ref={sceneRef}
  //         rotation={`${x2} ${y2} ${z2}`}
  //         // gesture-detector
  //       >
  //         <a-gltf-model src="/src/assets/ar/eolica/torre-eolica.gltf" />
  //         {/* <a-sphere color="red" radius="5"></a-sphere> */}
  //       </a-entity>
  //     </a-marker>
  //     <a-entity camera></a-entity>
  //   </a-scene>
  // </div>
}

// Eolica.propTypes = {
//   x2: PropTypes.number.isRequired,
//   y2: PropTypes.number.isRequired,
//   z2: PropTypes.number.isRequired,
// };

export default Eolica;
