import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';

export default class App extends Component {
  constructor() {
    super();
    this.state = { photos: [], query: '', loading: false };
    this.setQuery = this.setQuery.bind(this);
    this.searchGallery = this.searchGallery.bind(this);
    this.searchGalleryMore = this.searchGalleryMore.bind(this);
  }

  API_KEY = '44084395-bf6d64f8582b93ffa0a64f2d9';
  BASE_URL = 'https://pixabay.com/api/';
  PAGE = 1;

  async setQuery(setQuery) {
    await this.setState({ query: setQuery });
    this.searchGallery();
  }

  async searchGallery() {
    try {
      this.setState({ loading: true });
      let response = await axios.get(`${this.BASE_URL}`, {
        params: {
          key: this.API_KEY,
          q: this.state.query,
          page: this.PAGE,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      let datas = [...response.data.hits];
      let searchPhotos = [];
      for (const data in datas) {
        if (datas.hasOwnProperty.call(datas, data)) {
          const element = datas[data];
          searchPhotos.push({
            id: element.id,
            webformatURL: element.webformatURL,
            largeImageURL: element.largeImageURL,
          });
        }
      }
      await this.setState({ photos: searchPhotos });
    } catch (error) {
      alert('Ocurrio un error');
    } finally {
      this.setState({ loading: false });
    }
  }

  async searchGalleryMore() {
    try {
      this.setState({ loading: true });
      this.PAGE = this.PAGE + 1;
      let response = await axios.get(`${this.BASE_URL}`, {
        params: {
          key: this.API_KEY,
          q: this.state.query,
          page: this.PAGE,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      let datas = [...response.data.hits];
      let searchPhotos = [];
      for (const data in datas) {
        if (datas.hasOwnProperty.call(datas, data)) {
          const element = datas[data];
          searchPhotos.push({
            id: element.id,
            webformatURL: element.webformatURL,
            largeImageURL: element.largeImageURL,
          });
        }
      }
      let oldPhotos = [...this.state.photos];
      for (const photo in searchPhotos) {
        if (searchPhotos.hasOwnProperty.call(searchPhotos, photo)) {
          const elemento = searchPhotos[photo];
          oldPhotos.push({
            id: elemento.id,
            webformatURL: elemento.webformatURL,
            largeImageURL: elemento.largeImageURL,
          });
        }
      }
      await this.setState({ photos: oldPhotos });
    } catch (error) {
      alert('Ocurrio un error');
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <>
        <SearchBar onQuery={this.setQuery} />
        <Loader contents={this.state} />
        <ImageGallery contents={this.state} loadMore={this.searchGalleryMore} />
      </>
    );
  }
}
