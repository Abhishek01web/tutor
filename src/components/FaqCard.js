import React, { useState } from "react";

const FaqCard = ({ qus, ans, index }) => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    setShow(!show);
  };

  return (
    <div className="faqcard">
      <div className="qus" onClick={() => handleClick(index)}>
        <span>{show ? "📖" : "📘"}</span>
        <h2>{qus}</h2>
      </div>
      <div className="ans">
        {index === activeIndex && <p>{ans}</p>}
      </div>
    </div>
  );
};

export default FaqCard;
