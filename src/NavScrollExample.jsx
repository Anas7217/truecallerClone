import { Box } from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './custom-navbar.css';
function NavScrollExample() {
  return (
    // <Box>

    //   <Navbar expand="lg" className="bg-body-tertiary">
    //     <Container fluid>
    //       <Navbar.Brand href="#"><i className='text-primary' style={{ fontWeight: 'bold' }}>truecaller</i></Navbar.Brand>
    //       <Navbar.Toggle aria-controls="navbarScroll" />
    //       <Navbar.Collapse id="navbarScroll">
    //         <Nav
    //           className="me-auto my-2 my-lg-0"
    //           style={{ maxHeight: '100px' }}
    //           navbarScroll
    //         >
    //           <Nav.Link href="#action1">Abouts us</Nav.Link>
    //           <NavDropdown title="Link" id="navbarScrollingDropdown">
    //             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action4">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action5">
    //               Something else here
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //           {/* <Nav.Link href="#" disabled>
    //             Link
    //           </Nav.Link> */}
    //           {/* <Nav.Link href="#action2">Privacy</Nav.Link>
    //           <Nav.Link href="#action2">Help</Nav.Link>
    //           <Nav.Link href="#action2">For Bussiness</Nav.Link> */}
    //           <Nav.Link href="#action2" style={{ fontWeight: 'bold', color: 'black' }}>Privacy</Nav.Link>
    //           <Nav.Link href="#action2" style={{ fontWeight: 'bold', color: 'white' }}>Help</Nav.Link>
    //           <Nav.Link href="#action2" style={{ fontWeight: 'bold', color: 'white' }}>For Business</Nav.Link>

    //         </Nav>
    //         <Form className="d-flex">
    //           <Form.Control
    //             type="search"
    //             placeholder="Search"
    //             className="me-2"
    //             aria-label="Search"
    //           />
    //           <Button variant="outline-success">Search</Button>
    //         </Form>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </Box>



    <Box>
      <Navbar expand="lg" className="bg">
        <Container fluid>
          <Navbar.Brand href="#"><i className='text-primary' style={{ fontWeight: 'bold', color: 'white' }}>truecaller</i></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ fontWeight: 'bold', color: 'black' }}>About Us</Nav.Link>
              <NavDropdown title={<span style={{ fontWeight: 'bold', color: 'black' }}>Features</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3" style={{ fontWeight: 'bold', color: 'black' }}>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4" style={{ fontWeight: 'bold', color: 'black' }}>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" style={{ fontWeight: 'bold', color: 'black' }}>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" style={{ fontWeight: 'bold', color: 'black' }}>Privacy</Nav.Link>
              <Nav.Link href="#action2" style={{ fontWeight: 'bold', color: 'black' }}>Help</Nav.Link>
              <Nav.Link href="#action2" style={{ fontWeight: 'bold', color: 'black' }}>For Business</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Box>




  );
}

export default NavScrollExample;




// import { Box } from '@chakra-ui/react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//   return (
//     <Box>


//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action2">Link</Nav.Link>
//               <NavDropdown title="Link" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Something else here
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#" disabled>
//                 Link
//               </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Box>
//   );
// }

// export default NavScrollExample;