function Geotermica() {
  return (
    <a-scene>
      <a-marker preset="hiro">
        <a-entity position="0 0 0" scale="0.1 0.1 0.1">
          <a-sphere color="blue" radius="5"></a-sphere>
        </a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default Geotermica;
