import React from 'react';
import '../../Styles.css';

const Cats = () => {
    return (
        <div>
            <h3>Cats</h3>
            <div>
                <img src = {require("../../images/cats.jpg")} className="photo" alt="cat one" />
                <img src= {require("../../images/cats.jpg")} className="photo" alt="cat two" />
            </div>
        </div>
    );
}

export default Cats;