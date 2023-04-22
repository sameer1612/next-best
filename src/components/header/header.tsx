import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { getKey, saveKey } from "../../key-manager";

export default function Header() {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState<string | undefined>();

  useEffect(() => {
    const localKey = getKey();
    setKey(localKey);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    saveKey(key || "");
    handleClose();
  };

  return (
    <div className="header w-100 text-light position-absolute d-flex justify-content-between">
      <h4 className="m-3">
        <i className="bi bi-search-heart me-1"></i>
        NextBest
      </h4>
      <Button
        variant="transparent text-light"
        className="p-0"
        onClick={handleShow}
      >
        <i className="bi bi-gear h4 m-3"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OpenAI API Key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter your key here..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </Modal.Body>
        <div className="d-flex justify-content-between m-3">
          <a
            href="https://platform.openai.com/account/api-keys"
            target="_blank"
          >
            <Button variant="warning">Generate Key</Button>
          </a>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
}
