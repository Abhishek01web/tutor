import React, { useState } from 'react';
import PaymentMethod from '../assets/Data/PaymentMethod';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Payment = () => {
  const loc = useLocation();
  const [coursData, setCoursData] = useState(loc.state)
  console.log(coursData);
  const user = localStorage.getItem('email');
  console.log(user);

  const navigate = useNavigate(); 

  const payNow = (data) => {
    const userData = [
      coursData,
      data
    ]
    navigate('/paymentform', {state:userData} )
  }

  return (
    <>
      {user && coursData ?
        <>
          <div className='payment'>
            <div className='user'>
              <h3>Welcome : {user}</h3>
            </div>
            <div className='paymethod'>
              <p>How would you like to pay ?</p>
              <div className='methods'>
                {
                  PaymentMethod.map((curEle) => {
                    const {id, name, image} = curEle
                    return(
                      <div onClick={() => payNow(curEle)} className='pay' key={id}> <p>{name}</p> <img src={image} alt={image} /></div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </> : <> 
        {
          navigate('/home')
        }
        </>

      }
    </>
  )
}

export default Payment;
