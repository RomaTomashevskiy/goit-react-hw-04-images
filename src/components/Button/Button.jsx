import './index.css';
import PropTypes from 'prop-types'


const Button = ({ addImages }) => {
    
    return <div className='box'>
        <button className='button' type='button' onClick={addImages}>Load more</button>
    </div>
};

Button.propTypes = {
    addImages : PropTypes.func.isRequired
}

export default Button;

