import React, { useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/images/logo.png';
import "./header.css";

const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/events', display: 'Events' },
  { path: '/about', display: 'About' },
];

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            
            {/* ========== Logo ========= */}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            {/* ========== Navigation Menu ========= */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-6">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink 
                      to={item.path} 
                      className={({ isActive }) => (isActive ? "active__link" : "")}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* ========== Right Side (Login/Profile Buttons) ========= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <Button className="btn secondary__btn">
                    <Link to='/profile'>Profile</Link>
                  </Button>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to='/login'>Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to='/register'>Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
