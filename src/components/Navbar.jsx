import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCat } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="success">
        <Container>
          <Navbar.Brand>
            <Link to="/" className='text-decoration-none text-white ms-3'> 🏠Home</Link>
            <Link to="/Form" className='text-decoration-none text-white ms-3'> 📒 Registo</Link>
            <Link to="/" className='fs-4 text-decoration-none text-black'>Gatuno<FaCat /></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;