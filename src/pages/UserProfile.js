import React, { useState } from 'react';

const UserProfile = () => {
    const f_name = localStorage.getItem('f_name');
    const l_name = localStorage.getItem('l_name');
    const Name = localStorage.getItem('Name');
    const Category = localStorage.getItem('Category');
    const Tutor = localStorage.getItem('Tutor');
    const Aamount = localStorage.getItem('Aamount');
    const Duration = localStorage.getItem('Duration');


    return (
        <>
            <div className='profile'>
                <div className='user'>
                    <h2>Welcome {f_name} {l_name}</h2>
                </div>
                <div className='enroll-details'>
                    {
                        Name ? <>
                            <h4>You Enroll in  </h4>
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
            </div>
        </>
    )
}

export default UserProfile;
