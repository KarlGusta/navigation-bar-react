import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <li>
                {/* Link comes with the react-router-dom package */}
                <Link to="/">Dogs</Link>
            </li>
            <li>
                <Link to="/cats">Cats</Link>
            </li>
            <li>
                <Link to="/sheep">Sheep</Link>
            </li>
            <li>
                <Link to="/goats">Goats</Link>
            </li>
        </div>
    );
}

export default NavigationBar;