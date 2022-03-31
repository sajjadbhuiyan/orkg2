import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PlayVideo() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
    <Link onClick={handleShow} to='#' className='text-gray-300 hover:text-gray-400'><FontAwesomeIcon icon={faPlayCircle} /> Play Video</Link> 

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>ORKG Introduction Video</Modal.Title>
      </Modal.Header>
      <Modal.Body className='w-full lg:h-80 sm:h-48'>
      <iframe className='w-full h-full p-1' src="https://www.youtube.com/embed/cOFp_vxbzjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal.Body>
    </Modal>
  </>
  )
}
