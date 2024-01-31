import React, { Component } from 'react';
import imagesService from 'service/imagesService';
import '../index.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ErrorAlert from './ErrorAlert/ErrorAlert';

class App extends Component {
  state = {
    images: [],
    totalImages: null,
    error: null,
    isLoading: false,
    searchedQuery: '',
    page: 1,
    modalIsOpen: false,
    imageUrl: '',
  };

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.searchedQuery !== this.state.searchedQuery) {
      this.getImages();
      return;
    }

    if (prevState.page !== this.state.page) {
      this.getImages();
      return;
    }
  }

  getImages = async () => {
    const { page, searchedQuery } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await imagesService.retreiveImages(page, searchedQuery);

      if (data.hits.length === 0) {
        throw new Error(
          `We are sorry. There is no data for your searched term: "${searchedQuery}"`
        );
      }

      this.setState(prev => {
        return {
          images: [...prev.images, ...data.hits],
          totalImages: data.totalHits,
        };
      });
    } catch ({ message }) {
      this.setState({ error: message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, error, modalIsOpen, imageUrl } = this.state;

    return (
      <div className="App">
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <section>
          {images.length > 0 && (
            <ImageGallery images={images} handleModal={this.openModal} />
          )}

          {isLoading && <Loader />}

          {error && <ErrorAlert error={error} />}
        </section>

        {this.checkLoadMore() && (
          <Button handleLoadMore={this.onClickLoadMore}>Load more...</Button>
        )}

        {modalIsOpen && <Modal url={imageUrl} closeModal={this.closeModal} />}
      </div>
    );
  }

  onFormSubmit = searchedTerm => {
    this.setState({
      searchedQuery: searchedTerm,
      page: 1,
      images: [],
      totalImages: 0,
      error: null,
    });
  };

  checkLoadMore = () => {
    return this.state.totalImages - this.state.page * 12 > 0;
  };

  onClickLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  openModal = url => {
    this.setState({ modalIsOpen: true, imageUrl: url });
    window.addEventListener('keydown', this.addCloseEvent);
  };

  addCloseEvent = event => {
    event.key === 'Escape' && this.closeModal();
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    window.removeEventListener('keydown', this.addCloseEvent);
  };
}

export default App;
