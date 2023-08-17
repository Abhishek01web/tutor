import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CoursDetails = () => {

  const loc = useLocation();
  const [Data, setData] = useState(loc.state);
  // console.log(Data);
  const { id, Name, Image, Discription, Aamount, Tutor, Duration } = Data;

  const navigate = useNavigate();

  const enroll = () => {
    const locData = localStorage.getItem('email');
    console.log(locData);
    if(locData){
      navigate("/payment");
    } else {
      navigate("/register");
    }
  }

  return (
    <>
      <section className="details-container">
        <section className="details-heading">
          <h1>Course Details</h1>
        </section>
        <section className="detail-card-cointainer">
            <div className="detail-card">
              <div className="detail-img">
                <img src={Image} alt="images" className="card-media" />
              </div>
              <div className="details">
                <span className="card-circle subtle">{id}</span>
                <h1 className="heading-details">{Name}</h1>
                <span className="details-4u">Tutor : {Tutor}</span><br />
                <span className="details-4u">Duration: {Duration}</span><br />
                <span className="details-4u">Fee : {Aamount}</span><br />
                <span className="details-4u des"> {Discription}</span><br />
                <button className="enroll-btn" onClick={enroll}>Enroll Now</button>
              </div>
            </div>
        </section>
      </section>
    </>
  )
}

export default CoursDetails;
