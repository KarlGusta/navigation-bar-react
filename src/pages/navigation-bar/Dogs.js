import React from 'react';
import '../../Styles.css';

const Dogs = () => {
    return (
        <div>
            <h3>Dogs</h3>
            <div>
                <img src={require("../../images/dogs.jpg")} className="photo" alt="Dog one" />
                <img src={require("../../images/dogs.jpg")} className="photo" alt="Dog two" />
            </div>
        </div>
    );
}

export default Dogs;