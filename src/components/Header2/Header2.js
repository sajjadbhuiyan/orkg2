import React, {useState } from 'react'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { Badge, Button, Container, Dropdown, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import white_logo from '../../img/logo_white.svg';

const Header2 = () => {
        // const [click, setClick] = useState(false);
        // const [button, setButton] = useState(true);
        const [header, setHeader] = useState(false);

        // const handleClick = () => setClick(!click);

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
        <Navbar className={header ? 'header active' : 'header'} expand="lg">
  <Container>
    <Navbar.Brand href="#">
    <img src={white_logo} alt='orkg'></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '300px' }}
        navbarScroll
      >
        {/* ====view==== */}
        <NavDropdown title="view" className='border-t border-gray-600 lg:border-t-0 lg:m-2 text-white'>
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
        <NavDropdown title="Tool" className='border-t border-gray-600  lg:border-t-0 lg:m-2'>
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
        <NavDropdown title="About" className='border-t border-gray-600  lg:border-t-0 lg:m-2 z-50 absolute'>
          <NavDropdown
            className='pl-2 sm:z-40 absolute'
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
      <Form className="d-flex mx-1">
        <InputGroup>
                <FormControl
                type='search'
                placeholder="search"
                className='focus:ring focus:ring-red-200 bg-white'
                />
            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></InputGroup.Text>
        </InputGroup>
      </Form>
        <Button className='px-4 mx-1 bg-white block' variant="light">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add New
        </Button>
        <Button className={header ? 'addbutton active mx-1' : 'addbutton mx-1'} variant="danger">
            <FontAwesomeIcon icon={faUserLarge}></FontAwesomeIcon> Sign In
        </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header2