import { useState } from "react";
import ModalQr from "./ModalQr";
import PropTypes from "prop-types";

function ModelContent(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] sm:flex sm:flex-col sm:justify-center sm:items-center">
      <div className="mt-4">
        <img src={props.imageEnergyOne} alt="" />
      </div>
      <p className="text-left w-[80%]">{props.texto}</p>
      <div>
        <button
          className="font-bold text-2xl bg-[#00B5A1] px-5 py-3 my-3 rounded-xl text-white hover:bg-[rgb(0,181,161,0.8)]"
          onClick={openModal}
        >
          Ver en Realidad Aumentada
        </button>
        <ModalQr isOpen={modalIsOpen} onClose={closeModal}>
          <div className="flex flex-col justify-center items-center p-2 gap-2 text-white">
            <h1 className="font-bold text-2xl mb-2">
              Use un dispositivo móvil para escanear el código QR
            </h1>
            <p className="text-lg">
              Apunta la cámara de tu dispositivo móvil al código QR
            </p>
            <figure>
              <img
                src={props.imageEnergyTwo}
                alt="qr link"
                className="text-center"
              />
            </figure>
            <p>
              Luego da click sobre la siguiente{" "}
              <a
                className="font-bold text-2xl text-red-700"
                href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png"
              >
                Imagen
              </a>{" "}
              apunta la cámara a la imagen que aparece para que a continuación
              puedas ver este modelo en tu espacio utilizando realidad
              aumentada.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-[#0F4072] text-white hover:bg-[#264967] transition-all"
            >
              Cerrar
            </button>
          </div>
        </ModalQr>
      </div>
    </div>
  );
}

ModelContent.propTypes = {
  imageEnergyOne: PropTypes.string.isRequired,
  imageEnergyTwo: PropTypes.string.isRequired,

  texto: PropTypes.string,
};

export default ModelContent;
