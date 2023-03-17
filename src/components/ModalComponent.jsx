import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function ModalComponent(props) {
  const { showModal, handleCloseModal, handleSaveModal } = props;

  const [modalData, setModalData] = useState({});

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveButtonClick = () => {
    handleSaveModal(modalData);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="horizontal" gap={2}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={modalData.name || ""}
              onChange={handleModalInputChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={modalData.phone || ""}
              onChange={handleModalInputChange}
            />
          </div>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveButtonClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
