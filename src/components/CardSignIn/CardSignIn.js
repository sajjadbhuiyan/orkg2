import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function CardSignIn() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [signinSignup, setSigninSignup] = useState(true) 

  return (
    <>

        <button onClick={() => handleShow(true)} type="button" className="px-4 py-1 bg-gray-500 text-white rounded-md cursor-pointer">Sign Up</button>

        {signinSignup ?

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Sign Up</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Display Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Name"
        autoFocus
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Email address"
        autoFocus
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        autoFocus
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Confirm Passward</Form.Label>
      <Form.Control
        type="password"
        placeholder="Confirm Passward"
        autoFocus
      />
    </Form.Group>
    <Form.Group className="mb-1 flex text-sm" controlId="formBasicCheckbox">
      <Form.Check className='mr-2' type="checkbox" />
       <p className='m-0'>I accept the <Link to='#' className='text-red-400 no-underline hover:decoration-red-800 hover:underline hover:text-red-800'>Special Conditions ORKG</Link></p>
    </Form.Group>
    <Form.Group className="mb-1 flex text-sm" controlId="formBasicCheckbox">
      <Form.Check className='mr-2' type="checkbox" />
       <p className='m-0'>I agree to the processing of my personal data provided here by Technische Informationsbibliothek (TIB). In accordance with the <Link to='#' className='text-red-400 no-underline hover:decoration-red-800 hover:underline hover:text-red-800'>data protection declaration</Link> as well as <Link to='#' className='text-red-400 no-underline hover:decoration-red-800 hover:underline hover:text-red-800'>info sheet data protection</Link> the, the data is processed exclusively by TIB in order to provide services of our platform. </p>
    </Form.Group>
    <button className='w-full py-2 bg-red-400 text-bold text-white rounded-md my-2'>Sign Up</button>
  </Form>
</Modal.Body>
<Modal.Footer>
<p>Already a member? <span className='cursor-pointer' onClick={() => setSigninSignup(false)}>Sign in</span></p>
</Modal.Footer>
</Modal>
       
      :
    
 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
              />
            </Form.Group>
            <button className='w-full py-2 bg-red-400 text-bold text-white rounded-md my-2'>Sign In</button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <p>Not a member? <span className='cursor-pointer' onClick={() => setSigninSignup(true)}>Create an accout</span></p>
        </Modal.Footer>
      </Modal>}
    </>
  )
}
