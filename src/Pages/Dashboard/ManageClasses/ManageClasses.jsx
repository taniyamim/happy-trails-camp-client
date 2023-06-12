import React, { useEffect } from 'react';

const ManageClasses = () => {

    useEffect(() => {
        fetch('http://localhost:5000/pendingClasses')
          .then(res => res.json())
          .then(data => console.log(data));
      }, []);




    return (
        <div>
            <h3>class</h3>
        </div>
    );
};

export default ManageClasses;