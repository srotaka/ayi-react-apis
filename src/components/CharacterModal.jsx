import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap/Button';

function CharacterModal({ name, species, gender, status, origin, location}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn btn-green" onClick={handleShow}>
        More info
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item><strong>Specie:</strong> {species}</ListGroup.Item>
            <ListGroup.Item><strong>Gender:</strong> {gender}</ListGroup.Item>
            <ListGroup.Item><strong>Status:</strong> {status}</ListGroup.Item>
            <ListGroup.Item><strong>Origin:</strong> {origin}</ListGroup.Item>
            <ListGroup.Item><strong>Location:</strong> {location}</ListGroup.Item>            
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>        
          <button type="button" className="btn btn-green"onClick={handleClose}>
            Close
          </button>          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CharacterModal