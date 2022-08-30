
import './index.css'
import PropTypes from 'prop-types'

function Error({ error }) {
    return <h1 className='error'>Oops... We did not find a picture with a name: {error}</h1>
};

export default Error;

Error.propTypes = { 
    error: PropTypes.string.isRequired
}