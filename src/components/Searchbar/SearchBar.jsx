import { useState } from 'react';
import './index.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import Header from 'components/Header';


const SearchBar = ({ onSubmit }) => {
    const [images, setImage] = useState('');

    const handleNameChange = e => {
        setImage(e.target.value.toLowerCase());
    };

    const onSubmitForm = e => {
        e.preventDefault();

        if (images.trim() === '') {
            return toast.error('Enter the name of the photo!');
        };
        onSubmit(images);
        e.target.reset();
    };

    return (
        <Header>
            <form className="searchForm" onSubmit={onSubmitForm}>
                <button type="submit" className="searchForm_button">
                    <span className="searchForm_button_label">Search</span>
                </button>

                <input
                    onChange={handleNameChange}
                    className="searchForm_input"
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                />
            </form> 
        </Header>
    )
}

SearchBar.prototype = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchBar;