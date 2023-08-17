import React from "react";

const CourseCard = ({ courseData, ShowDetail }) => {

  return (
    <>
      <section className="main-card--cointainer">
        {courseData.map((curElem) => {
          const { id, Name, Category, Image, Discription, Aamount, Tutor, Duration } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {Category}</span>
                    <h2 className="card-title"> {Name} </h2>
                    <span className="card-author subtle">Fee : {Aamount}</span>
                    <span className="card-author subtle">Tutor : {Tutor}</span>
                    <span className="card-author subtle">Duration: {Duration}</span>
                    <span className="card-description subtle">
                      {Discription}
                    </span>
                    <div className="card-read">Learn</div>
                  </div>
                  <img src={Image} alt="images" className="card-media" />
                  <button className="card-tag" onClick={() => ShowDetail(curElem)}>Details</button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CourseCard;
