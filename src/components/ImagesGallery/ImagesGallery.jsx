import './index.css';
import ImagesGalleryItem from "components/ImagesGalleryItem";


import PropTypes from 'prop-types'

const ImagesGallery = ({ images ,largeURL}) => {
   return <ul className='imageGallery'>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
         <ImagesGalleryItem key={id} tag={tags} largeImageURL={largeImageURL} webformatURL={webformatURL} largeURL={largeURL} />
      ))};
   </ul>
};


ImagesGallery.prototype = {
   largeURL: PropTypes.func.isRequired,
   images: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ImagesGallery;


