import React, { useState } from 'react';
import logo from './images/logo.ico'
import dark_mode from './images/dark_mode.png'
import light_mode from './images/light_mode.png';
import './Header.css'; // Ensure you have corresponding styles

const Header = ({ onTopicChange, onModeChange, mode }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery) {
            onTopicChange(searchQuery); // Use search term to update topic
            setSearchQuery(''); // Clear input after search
        }
    };

    const [icon, setIcon] = useState(dark_mode);
    function handlemode() {
        onModeChange();
        if (icon == dark_mode) {
            setIcon(light_mode);

        }
        else {
            setIcon(dark_mode);
        }
    }

    return (
        <header className={`header_${mode}`}>
            <h1 className={`appTitle_${mode}`}>News App</h1>
            <form onSubmit={handleSearch} className={`searchForm_${mode}`}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for news..."
                    className={`searchInput_${mode}`}
                />
                <button type="submit" className={`searchButton_${mode}`}>
                    Search
                </button>
            </form>
            <div>
                <img onClick={handlemode} className='modeIcon' src={icon} />
            </div>
        </header>
    );
};

export default Header;
