import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const data = useLocation();
    const [payData, setPayData] = useState(data.state);

    const { Name, Category, Tutor, Aamount, Duration } = payData[0];
    console.log(payData);
    // console.log(Name);

    const [formData, setFormData] = useState({
        f_name: '',
        l_name: " ",
        emailp: '',
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
        alert(`user credential => first name = ${formData.f_name} last name = ${formData.l_name} email = ${formData.emailp} `);
        localStorage.setItem("f_name",formData.f_name);
        localStorage.setItem("l_name",formData.l_name);
        localStorage.setItem("emailp",formData.emailp);
        localStorage.setItem('Name', Name);
        localStorage.setItem('Category', Category);
        localStorage.setItem('Tutor', Tutor);
        localStorage.setItem('Aamount', Aamount);
        localStorage.setItem('Duration', Duration);
        
        navigate('/UserProfile');
        window.location.reload();
    };

    return (
        <>
            <div>
                <div className='register'>
                    <div className='enroll-details'>
                        {
                            Name ? <>
                                <h4>Cours Details </h4>
                                <p>Cours Name : {Name}</p>
                                <p>Cours Category : {Category}</p>
                                <p>Cours Tutor : {Tutor}</p>
                                <p>Cours Aamount : {Aamount}</p>
                                <p>Cours Duration : {Duration}</p>
                            </> : <>
                              <h4>Cours Not Selected ?</h4>
                            </>
                        }
                    </div>
                    <h2>Pay With : {payData[1].name}</h2>
                    <form onSubmit={handleSubmit} className='register-form'>
                        <div>
                            <label htmlFor="email">First Name : </label>
                            <input
                                type="text"
                                id="f_name"
                                name="f_name"
                                placeholder='Enter first name ?'
                                value={formData.f_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Last Name : </label>
                            <input
                                type="text"
                                id="l_name"
                                name="l_name"
                                placeholder='Enter lastname name ?'
                                value={formData.l_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                        <button type="submit">PayNow</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PaymentForm;
