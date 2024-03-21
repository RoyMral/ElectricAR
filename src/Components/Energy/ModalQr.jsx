import Modal from "react-modal";
import PropTypes from "prop-types";

function customStyles() {
  return {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      width: "50%",
      backgroundColor: "#00B5A1",
    },
  };
}

function ModalQr(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      style={customStyles()}
      contentLabel="Modal QR"
      appElement={document.getElementById("root")}
    >
      {props.children}
    </Modal>
  );
}

ModalQr.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalQr;
