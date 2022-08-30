import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return <div>{children}</div>
};



Container.prototype = { 
    children: PropTypes.node.isRequired
}

export default Container