import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import * as Scroll from 'react-scroll';
import Container from "./Container";
import SearchBar from "./Searchbar/SearchBar";
import ImagesGallery from "./ImagesGallery";
import Button from "./Button";
import Modal from "./Modal";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import SearchReminder from "./SearchReminder";

const BASE_URL = 'https://pixabay.com/api/?';

const params = new URLSearchParams({
  key: '27709698-8702f3c03ebf411985e528a26',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECTED: 'rejected',
}

const App = () => {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState(''); 
  const [status, setStatus] = useState(Status.IDLE);
  
  useEffect(() => {
    if (!query) return;
    setStatus(Status.PENDING);

    
    fetch(BASE_URL + `&q=${query}&page=${page}&` + params)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Error', res.status);
      })
      .then(data => {
        const images = data.hits.map(({ id, tags, webformatURL, largeImageURL }) => ({ id, tags, webformatURL, largeImageURL }));
        
        if (images.length === 0) {
          setStatus(Status.REJECTED)
        } else {
          setImages(s => [...s, ...images]);
          setStatus(Status.RESOLVE)
        }
      }).catch(error => error.message);
  }, [query, page]);

  const onSubmitForm = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);

  }
  const loadMore = () => {
    setPage(s => s + 1)
   if (status === 'resolve') {
      scrollPage()
    };
  };

  const onShowModal = () => {
    setShowModal(s => !s);
    
  };

  const largeImgItemClick = currentImg => {
    setLargeImg(currentImg);
    setShowModal(true)
  }

  const scrollPage = () => {
    const element = document.querySelector('#item');
    const height = element.offsetHeight;
    Scroll.animateScroll.scrollMore(height * 4, {
      smooth: 'linear',
    });
  };

  return (
    <Container>
      <SearchBar onSubmit={onSubmitForm} />
      {status === 'idle' && <SearchReminder/>} 
      {status === 'rejected' && <ErrorMessage error={query} />}
      {status === 'resolve' &&  <ImagesGallery images={images} largeURL={largeImgItemClick} />}
      {status === 'resolve' &&   <Button addImages={loadMore} />}
      {showModal && <Modal onClose={onShowModal}>
        <img src={largeImg} alt="" />
      </Modal>}
    
      {status === 'pending' && <Loader/>}
      
      <ToastContainer autoClose={2000} />
   
    </Container>
  );
};


export default App;