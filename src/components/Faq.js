import React, { useState } from 'react';
import FaqData from '../assets/Data/FaqData';
import FaqCard from './FaqCard';

const Faq = () => {
  const [Data, setData] = useState(FaqData);
  return (
    <>
      <section className='faq'>
      <h2>frequently asked questions</h2>
        <section className='faq-main'>
        {Data.map((curEle) => {
          const { id } = curEle;
          return <FaqCard key={id} {...curEle} />
        })}
        </section>
      </section>
    </>
  )
}

export default Faq;
