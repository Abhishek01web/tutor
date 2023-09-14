import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const regisData = useLocation();
    const [userData, setUserData] = useState(regisData.state);
    console.log(userData);
    // const {email , password} = userData; 
    // alert(`Your loing data email = ${email} pass = ${password}`);
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
      // const {emaill, passwordl} = formData;

      const navigate = useNavigate();
      const handleSubmit = event => {
        event.preventDefault();
          alert(`user credential => email = ${formData.email} pass = ${formData.password} `);
          localStorage.setItem('email', formData.email);
          if(userData){
            // const userCoursData = [
            //   userData,
            //   formData
            // ]
            navigate('/payment', {state: userData});
            window.location.reload();
          } else {
            navigate('/');
            window.location.reload();
          }
      };


  return (
    <div>
      <div className='register'>
        <h2>User Login</h2>
        <form onSubmit={handleSubmit} className='register-form'>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email ?'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Enter your password ?'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
