import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [signinSignup, setSigninSignup] = useState(true) 

  return (
    <>

        <button onClick={() => handleShow(true)} type="button" className="text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 lg:my-0 lg:w-40 sm:w-full py-2 flex justify-center items-center hover:bg-black-700">
        <svg className='w-4 h-4 mr-2 -ml-1 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/></svg>
            Sign in
        </button>

        {signinSignup ?
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
        <p>Not a member? <span className='cursor-pointer' onClick={() => setSigninSignup(false)}>Create an accout</span></p>
        </Modal.Footer>
      </Modal>
      :
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
      <p>Already a member? <span className='cursor-pointer' onClick={() => setSigninSignup(true)}>Sign in</span></p>
      </Modal.Footer>
    </Modal>}
    </>
  )
}
