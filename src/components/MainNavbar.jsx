import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import ModalComponent from "./ModalComponent";
import { useState } from "react";
function MainNavbar(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleButtonClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSaveModal = (data) => {
    props.onModalDataUpdate(data); // pass the new modal data up to the parent component
    setModalData(data);
    handleCloseModal();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Contact App</Navbar.Brand>
        <Button variant="outline-success" onClick={handleButtonClick}>
          Add Contact
        </Button>
        <ModalComponent
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleSaveModal={handleSaveModal}
        />
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
