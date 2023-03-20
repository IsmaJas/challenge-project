import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {
  // navbars is extracted into separate array to prevent code dublication
  // this array can be kept in seperate file and can be used in the future like in footer
  const paths = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
  ];
  return (
    <>
      <BNavbar bg="light" expand={'sm'} className="mb-3">
        <Container fluid>
          <BNavbar.Brand href="#">Interview Challenge</BNavbar.Brand>
          <BNavbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xl'}`} />
          <BNavbar.Offcanvas
            id={`offcanvasNavbar-expand-${'xl'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
                Interview Challenge
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {paths.map((item) => (
                  <LinkContainer key={item.title + item.path} to={item.path}>
                    <Nav.Link>{item.title}</Nav.Link>
                  </LinkContainer>
                ))}
              </Nav>
            </Offcanvas.Body>
          </BNavbar.Offcanvas>
        </Container>
      </BNavbar>
    </>
  );
};

export default Navbar;
