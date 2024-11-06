import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onTopicChange, mode }) => {
    const [menuActive, setMenuActive] = useState(false);
    const keytopics = ["Tech", "Sports", "Politics", "Trending", "World", "Business", "Science", "Health", "Entertainment"];

    const handleClick = (val) => {
        onTopicChange(val);
        setMenuActive(false); // Close the menu after selecting a topic
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive); // Toggle the menu visibility
    };

    return (
        <div className={`navbar_${mode}`}>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`menu menu_${mode} ${menuActive ? 'active' : 'hidden'}`}>
                {keytopics.map((topic) => (
                    <span
                        key={topic} 
                        onClick={() => handleClick(topic)} 
                        className={`keyTopic_${mode}`}
                    >
                        {topic}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
