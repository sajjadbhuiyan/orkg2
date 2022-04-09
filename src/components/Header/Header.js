import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Badge, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.svg';
import white_logo from '../../img/logo_white.svg';
import AddNew from '../AddNew/AddNew';
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
        <Navbar fixed='top'  expand="lg" className={ header ?'header active text-black': 'text-white sm:bg-nav-color lg:bg-transparent'}>
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
              
                <div className="md:block flex lg:mx-2 relative">
                  <input type="text" id="email-adress-icon" className="block p-2 pl-10 w-full border-none rounded-lg focus:ring  focus:ring-red-400 border text-gray-400" placeholder="Search..."/>
                  <div className="flex absolute inset-y-1 right-2 items-center py-1 pointer-events-none">
                    <svg className={header? "w-5 h-5 text-cus-orange":"w-5 h-5 text-gray-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
              </div>
              <AddNew header={header}></AddNew>
              
              <SignIn header={header}></SignIn>

      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
