import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Badge, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.svg';
import white_logo from '../../img/logo_white.svg';
import SignIn from '../SignIn/SignIn';

export default function Header() {

  const [header, setHeader] = useState(false);

  const changeBackground = () =>{
    if(window.scrollY >= 80){
        setHeader(true);
    }else{
        setHeader(false)
    }
}

window.addEventListener('scroll', changeBackground);

  
  return (
    <>
        <Navbar fixed='top'  expand="lg" className={ header ?'header active text-black': 'text-white sm:nav-color'}>
  <Container>
    <Navbar.Brand href="#">
    <img src={header? logo : white_logo} alt='orkg'></img>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav
        className="me-auto my-2 my-lg-0 text-white"
        style={{ maxHeight: '200px' }}
        navbarScroll
      >

        {/* ====view==== */}
        <NavDropdown title="view" className={header? 'border-t border-gray-600 lg:border-t-0 lg:m-2 sticky-nav-link':'border-t border-gray-600 lg:border-t-0 lg:m-2'}>
          <NavDropdown.Item href="#action3">Comparisons</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Papers</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Visualizations</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Reviews <Badge bg="info">Beta</Badge></NavDropdown.Item>
          <NavDropdown.Item href="#action4">Literature List <Badge bg="info">Beta</Badge></NavDropdown.Item>
          <NavDropdown.Item href="#action4">Benchmarks</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Research Field</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Observations <Badge bg="info">Beta</Badge>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action5">
            Organizations <Badge bg="info">Beta</Badge>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item disabled href="#action4" className='text-sm'>Advanced Views</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Resources</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Properties</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Classes</NavDropdown.Item>
        </NavDropdown>
        
        {/* =====tool===== */}
        <NavDropdown title="Tool" className={header? 'border-t border-gray-600 lg:border-t-0 lg:m-2 sticky-nav-link':'border-t border-gray-600 lg:border-t-0 lg:m-2'}>
          <NavDropdown.Item href="#action3">Tools overview</NavDropdown.Item>
          <NavDropdown.Item disabled href="#action4" className='text-sm'>Data entry</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Contribution editor</NavDropdown.Item>
          <NavDropdown.Item href="#action4">CSV import</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Survay table import</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Templates</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item disabled href="#action4" className='text-sm'>Data export</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Data access</NavDropdown.Item>
        </NavDropdown>

        {/* =====about==== */}
        <NavDropdown title="About" className={header? 'border-t border-gray-600 lg:border-t-0 lg:m-2 sticky-nav-link':'border-t border-gray-600 lg:border-t-0 lg:m-2'}>
          <NavDropdown
            className='pl-2'
            id="dropdown-button-drop-end"
            drop="end"
            title="About"
          >
            <Dropdown.Item>Overview</Dropdown.Item>
            <Dropdown.Item>Teams</Dropdown.Item>
            <Dropdown.Item>History</Dropdown.Item>
            <Dropdown.Item>Publications</Dropdown.Item>
            <Dropdown.Item>Workshopes</Dropdown.Item>
            <Dropdown.Item>Outreach</Dropdown.Item>
            <Dropdown.Item>ScienceGRAPH</Dropdown.Item>
          </NavDropdown>

          <NavDropdown
            className='pl-2'
            id="dropdown-button-drop-end"
            drop="end"
            title="Features"
          >
            <Dropdown.Item>Get Started</Dropdown.Item>
            <Dropdown.Item>Comparisons</Dropdown.Item>
            <Dropdown.Item>Reviews</Dropdown.Item>
            <Dropdown.Item>List</Dropdown.Item>
            <Dropdown.Item>Papers</Dropdown.Item>
            <Dropdown.Item>Templates</Dropdown.Item>
            <Dropdown.Item>Benchmarks</Dropdown.Item>
            <Dropdown.Item>Integration</Dropdown.Item>
          </NavDropdown>

          <NavDropdown
            className='pl-2'
            id="dropdown-button-drop-end"
            drop="end"
            title="Get Involved"
          >
            <Dropdown.Item>Get Involved</Dropdown.Item>
            <Dropdown.Item>Institures & Research Group</Dropdown.Item>
            <Dropdown.Item>Libraries</Dropdown.Item>
            <Dropdown.Item>Confarances and Journals</Dropdown.Item>
            <Dropdown.Item>Observations</Dropdown.Item>
            <Dropdown.Item>Curations Grants</Dropdown.Item>
            <Dropdown.Item>Jobs</Dropdown.Item>
            <Dropdown.Item>Theses Openings</Dropdown.Item>
          </NavDropdown>
          
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action3">Help Center</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Git Lab <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">Statitics</NavDropdown.Item>
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        

      </Nav>
      <div className='lg:flex sm:flex-none'>
              
              <div class="flex items-center justify-center">
                <div class="flex border-2 border-red-400 rounded-lg">
                    <input type="text" class="px-2 py-1 w-80 focus:ring-2 focus:ring-cus-orange rounded-lg" placeholder="Search..."/>
                    <button class="flex items-center justify-center px-2 bg-white">
                        <svg class="w-4 h-4 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
              </div>
            
              <button type="button" className={header ? "text-white bg-cus-orange focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 lg:my-0 lg:w-40 sm:w-full py-2 flex justify-center items-center":"text-black bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 lg:my-0 lg:w-40 sm:w-full py-2 flex justify-center items-center"}>
              <svg className={header ? 'w-4 h-4 mr-2 -ml-1 fill-white':'w-4 h-4 mr-2 -ml-1 fill-gray-900'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
                    Add New
              </button>
              
              <SignIn header={header}></SignIn>

      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
