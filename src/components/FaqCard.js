import React, { useState } from 'react'

const FaqCard = ({ qus, ans }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='faqcard'>
            <div className='qus'>
                <span onClick={() => setShow(!show)}>{show ? "📖" : "📘"}</span>
                <h2 onClick={() => setShow(!show)}>{qus}</h2>
            </div>
            <div className='ans'>
                {show && <p>{ans}</p>}
            </div>
        </div>
    )
}

export default FaqCard;
