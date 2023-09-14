import React, {useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    mes: ''
  });

  const handlchane = (e) => {
    const {name, value} = e.target;
    setFormData(regisData => ({
      ...regisData,
      [name]: value
    }));
  }

  const handleSubmit = event => {
    event.preventDefault();
      alert(`Your info => email = ${formData.email} message = ${formData.mes} `);
      window.location.reload();
  };

  return (
    <>
       <div>
      <div className='register'>
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit} className='register-form'>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email ?'
              value={formData.email}
              onChange={handlchane}
              required
            />
          </div>
          <div>
            <label htmlFor="mes">Your message : </label>
            <input
              type="text"
              id="mes"
              name="mes"
              placeholder='Enter your message ?'
              value={formData.password}
              onChange={handlchane}
              required
            />
          </div>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
    </>
    // <div className='contact'>
    //   <h1>Contact Us</h1>
    // </div>
  )
}

export default Contact;
