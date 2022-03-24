import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.svg';

export default function Header() {
  return (
    <>
        <Navbar expand="lg" className='menu lg:absolute sm:relative sm:bg-nav-color lg:bg-transparent sticky'>
  <Container>
    <Navbar.Brand href="#">
    <img src={logo} alt='orkg'></img>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll
      >

        {/* ====view==== */}
        <NavDropdown title="View" className='mx-2'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
          
    
          <NavDropdown
            className='pl-2'
            id="dropdown-button-drop-end"
            drop="end"
            title="dskk"
          >
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </NavDropdown>
    

        </NavDropdown>
        
        {/* =====tool===== */}
        <NavDropdown title="Tool" className='mx-2'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
          
    
          <NavDropdown
            className='pl-2'
            id="dropdown-button-drop-end"
            drop="end"
            title="dskk"
          >
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </NavDropdown>
    

        </NavDropdown>

        {/* =====about==== */}
        <NavDropdown title="About" className='mx-2'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
          
    
          <NavDropdown
            className='pl-2'
            id="dropdown-button-drop-end"
            drop="end"
            title="dskk"
          >
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </NavDropdown>
    

        </NavDropdown>
        

      </Nav>
      <div className='lg:flex sm:flex-none'>
              
              <div className="relative md:block flex lg:mx-2">
                  <input type="text" id="email-adress-icon" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                  <div className="flex absolute inset-y-1 left-0 items-center pl-3 py-1 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
              </div>

              <button type="button" className="text-zinc-900 bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 lg:my-0 lg:w-40 sm:w-full py-2 flex justify-center items-center">
              <svg className='w-4 h-4 mr-2 -ml-1 fill-gray-900 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
                    Add New
              </button>
              
              <button type="button" className="text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 lg:my-0 lg:w-40 sm:w-full py-2 flex justify-center items-center hover:bg-black-700">
              <svg className='w-4 h-4 mr-2 -ml-1 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/></svg>
                    Sign in
              </button>

      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
