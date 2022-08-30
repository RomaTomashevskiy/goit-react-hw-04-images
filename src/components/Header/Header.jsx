import './index.css';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return <header className='header'>{children}</header>
};


Header.prototype = {
    children: PropTypes.node.isRequired
};


export default Header;