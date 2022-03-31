import { Badge, Col, Container, Row } from "react-bootstrap";
import EU_LOGO from '../../img/poweredby/co-funded-h2020-horiz_en.png';
import EOSC_LOGO from '../../img/poweredby/EOSC.png';
import INFAI_LOGO from '../../img/poweredby/infAI.png';
import L3S_LOGO from '../../img/poweredby/L3S.png';
import LUH_LOGO from '../../img/poweredby/LUH.png';
import TIB_LOGO from '../../img/poweredby/TIB_Logo_EN.png';
import varticalLogo from "../../img/vertical_logo.svg";
import './Footer.css';


const Footer = () => (  
        <div className="footer_color">
            <Container>
            <footer className="pt-4 pb-4">
                <h1 className="sr-only">More information about ORKG</h1>
                <Row>
                    <Col md={3}>
                        <h2 className="h5">ORKG</h2>
                        <hr className="me-5" />
                        <Row>
                            <div className="float-start col-md-3">  
                                 <img className="w-28" src={varticalLogo} alt='vartical logo'></img>    
                            </div>
                            <div className="col-md-8 description">
                                The Open Research Knowledge Graph aims to describe research papers in a structured manner
                            </div>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <h2 className="h5">About</h2>
                        <hr className="me-5" />
                        <ul className="p-0" style={{ listStyle: 'none' }}>
                            <li>
                                <a href="about_us">About us</a>
                            </li>
                            <li>
                                <a href="Help_center">Help center</a>
                            </li>
                            <li>
                                <a href="data protecton">Data protection</a>
                            </li>
                            <li>
                                <a href="teams of use">Terms of use</a>
                            </li>
                            <li>
                                <a href="Imprint">Imprint</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h2 className="h5">Technical</h2>
                        <hr className="me-5" />
                        <ul className="p-0" style={{ listStyle: 'none' }}>
                            <li>
                                <a href="data access">Data Access</a>
                            </li>
                            <li>
                                <a href="changelog">Changelog</a>
                            </li>
                            <li>
                                <a href="gitlab">GitLab</a>
                            </li>
                            <li>
                                <a href="accessibility">Accessibility</a>
                            </li>
                            <li>
                                <a href="license">License</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h2 className="h5">More</h2>
                        <hr className="me-5" />
                        <ul className="p-0" style={{ listStyle: 'none' }}>
                            <li>
                                <a href="follow us">Follow us
                                    <svg className="ms-2 twitter inline" style={{width:"15px", height:"15px", fill:"gray",}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                </a>    
                            </li>
                            <li>
                                <a href="contact us">Contact us</a>
                            </li>
                            <li>
                                <a href="report an issue">Report an issue</a>
                            </li>
                            <li>
                                <i className="me-3">Version</i> <Badge color="info">GIT_VERSION</Badge>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr style={{ width: '70%', margin: '1rem auto' }} />

                <Row>
                    <Col className="lg:flex justify-center items-center" md={4} style={{ textAlign: 'center', marginRigh:'50px'}}>
                        <a href="https://www.tib.eu/en/" target="_blank" rel="noopener noreferrer">
                            <img src={TIB_LOGO} alt="Logo Technische Informationsbibliothek (TIB)" style={{ borderWidth: 0, height: '50px' }} />
                        </a>
                    </Col>
                    <Col md={8}>
                        <Row className="g-0">
                            <Col md={4} style={{ textAlign: 'center' }}>
                                <a href="https://www.uni-hannover.de/en/" target="_blank" rel="noopener noreferrer">
                                    <img src={LUH_LOGO} alt="Logo Leibniz University Hannover" style={{ borderWidth: 0, height: '45px' }} />
                                </a>
                            </Col>
                            <Col md={4} style={{ textAlign: 'center' }}>
                                <a href="https://www.l3s.de/en/" target="_blank" rel="noopener noreferrer">
                                    <img src={L3S_LOGO} alt="Logo L3S Research Center" style={{ borderWidth: 0, height: '50px' }} />
                                </a>
                            </Col>
                            <Col md={4} style={{ textAlign: 'center' }}>
                                <a href="https://infai.org/en/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={INFAI_LOGO}
                                        alt="Logo  Institute for Applied Informatics (InfAI)"
                                        style={{ borderWidth: 0, height: '45px' }}
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <hr style={{ width: '50%', margin: '1rem auto' }} />
                <Row>
                    <Col md={{ size: 3, order: 1, offset: 3 }} style={{ textAlign: 'center' }}>
                        <img
                            src={EU_LOGO}
                            alt="Co-funded by the Horizon 2020 programme of the European Union"
                            style={{ borderWidth: 0, height: '50px' }}
                        />
                    </Col>
                    <Col md={{ size: 3, order: 2, offset: 0 }} style={{ textAlign: 'center' }}>
                        <a
                            href="https://marketplace.eosc-portal.eu/services/open-research-knowledge-graph-orkg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={EOSC_LOGO} alt="European Open Science Cloud (EOSC)" style={{ borderWidth: 0, height: '45px' }} />
                        </a>
                    </Col>
                </Row>
                
            </footer>
        </Container>
        </div>
);

export default Footer;