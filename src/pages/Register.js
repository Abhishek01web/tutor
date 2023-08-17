import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handlchane = (e) => {
    const {name, value} = e.target;
    setFormData(regisData => ({
      ...regisData,
      [name]: value
    }));
  }
  const navigate = useNavigate();
  const handlsubmit = () => {
    alert(`user credential => email = ${formData.email} pass = ${formData.password} `);
    navigate('/login', {state: formData});
  }

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   // You can add your login logic here
  //   console.log('Login submitted with data:', formData);
  // };


  return (
    <div>
      <div className='register'>
        <h2>User Registration</h2>
        <form onSubmit={handlsubmit} className='register-form'>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handlchane}
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
              onChange={handlchane}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
