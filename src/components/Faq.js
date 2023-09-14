import React from "react";
import FaqData from "../assets/Data/FaqData";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <>
      <section className="faq">
        <h2>frequently asked questions</h2>
        <section className="faq-main">
          {FaqData.map((curEle, i) => {
            const { id } = curEle;
            return <FaqCard key={id} {...curEle} index={i} />;
          })}
        </section>
      </section>
    </>
  );
};

export default Faq;
