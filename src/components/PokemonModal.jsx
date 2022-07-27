import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import characterService from '../service/CharacterService';

function PokemonModal({ name, url }) {
    // weight, height, baseExperience
    const [show, setShow] = useState(false);
    const [pokeInfo, setPokeInfo] = useState([]);
    useEffect(() => {
        getPokemonById();
    }, []);
    const getPokemonById = async () => {
        const response = await characterService.getPokemonById(url)
            .catch((e) => console.log(e));
        setPokeInfo(response);
    }
    console.log('URL: ' + url);
    console.log('DATA: ' + pokeInfo);


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
                        <ListGroup.Item><strong>Weight:</strong> {pokeInfo.weight}</ListGroup.Item>
                        <ListGroup.Item><strong>Height:</strong> {pokeInfo.height}</ListGroup.Item>
                        <ListGroup.Item><strong>Base Experience:</strong> {pokeInfo.base_experience}</ListGroup.Item>
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