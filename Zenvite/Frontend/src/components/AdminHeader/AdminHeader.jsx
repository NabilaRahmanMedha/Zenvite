import React, { useContext } from 'react';
import { Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import "../Header/header.css"; 

const adminNavLinks = [
  { path: '/admin/dashboard', display: 'Dashboard' },
  { path: '/admin/users', display: 'User Management' },
  { path: '/admin/events', display: 'Event Management' },
];

const AdminHeader = () => {
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
                {adminNavLinks.map((item, index) => (
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

          </div>
        </Row>
      </Container>
    </header>
  );
};

export default AdminHeader;
