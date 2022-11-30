/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useRouter, withRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from '@emotion/styled';

function NavbarUI() {
  const router = useRouter();
  const navigateToRegister = () => {
    router.push('/register');
  };
  return (
    <>
      <NavbarHeight bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img alt="Logo" src="/images/logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">For Renters</Nav.Link>
                <Nav.Link href="#">For Agents/Landlords</Nav.Link>
                <NavDropdown title="View more">
                  <NavDropdown.Item href="#">Pricing</NavDropdown.Item>
                  <NavDropdown.Item href="#">About</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <ButtonSignIn>
                  <Link passHref href="/register">
                    Sign In
                  </Link>
                </ButtonSignIn>

                <Link passHref href="/login">
                  {' '}
                  <ButtonLogin>Log In</ButtonLogin>
                </Link>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </NavbarHeight>
    </>
  );
}

export default withRouter(NavbarUI);

const NavbarHeight = styled(Navbar)`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  width: 100%;
  box-sizing: border-box;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0;
  left: auto;
  right: 0;
  background-color: #fcca4c;
  color: rgba(0, 0, 0, 0.87);
  height: 80px;
  background-color: #ffffff;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;
const ButtonSignIn = styled.button`
  color: #838383;
  background: none;
  outline: none;
  border: none;
  margin-right: 30px;
  margin-left: 20px;
  font-weight: 400;
  font-size: 16px;
`;
const ButtonLogin = styled.button`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.5;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 15px;
  border-radius: 4px;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #fcca4c;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.625rem;
  text-transform: none;
  font-size: 1rem;
  color: #ffffff;
  text-transform: none;
  background: #d19f21;
  border-radius: 3.125rem;
  text-align: center;
`;
