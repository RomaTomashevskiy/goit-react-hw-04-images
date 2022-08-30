import './index.css'


const ImagesGalleryItem = ({ webformatURL, tag , largeImageURL , largeURL}) => {
  return (
    <li className="imageGallery_Item " id='item'>
      <img
        className="imageGallery_Item_image "
        src={webformatURL}
        alt={tag}
        onClick={() => largeURL(largeImageURL)}
      />
    </li>
  );
};




export default ImagesGalleryItem;
