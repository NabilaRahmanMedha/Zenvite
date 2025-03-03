import React, { useState,useContext } from 'react';

import{Container,Row,Col,Form,FormGroup,Button} from 'reactstrap';
import{Link,useNavigate} from 'react-router-dom'
import'../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext';

import { CommonSection } from '../shared/CommonSection';

const Login = () => {

  const [credentials, setCredentials]=useState({
    email:undefined,
    password: undefined
  });

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e=>{
    setCredentials(prev=>({ ...prev,[e.target.id]:e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
  
    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        alert(result.message || "Login failed");
        throw new Error(result.message || "Invalid login response");
      }
  
      console.log("Login success:", result);
  
      if (!result.user || !result.token) {
        throw new Error("Invalid response format from API");
      }
  
      // Dispatch formatted payload
      dispatch({ type: "LOGIN_SUCCESS", payload: { user: result.user, token: result.token } });
      navigate("/");
    } catch (err) {
      console.error("Login error:", err.message);
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <>
    <CommonSection title="Login"/>
    <section>
      <Container>
        <Row>
          <Col lg='8' className="m-auto">
            <div className='login__form'>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" placeholder="Email" required id="email" 
                  onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder="Password" required id="password" 
                  onChange={handleChange}/>
                </FormGroup> 
                <Button className="auth__btn" type="submit">Login</Button>
              </Form>
              <p>Don't have an account?<Link to='/register'>Create</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
};

export default Login;