import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function PokemonModal({ name, weight, height, baseExperience }) {

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
                        <ListGroup.Item><strong>Weight:</strong> {weight}</ListGroup.Item>
                        <ListGroup.Item><strong>Height:</strong> {height}</ListGroup.Item>
                        <ListGroup.Item><strong>Base Experience:</strong> {baseExperience}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-green" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PokemonModal