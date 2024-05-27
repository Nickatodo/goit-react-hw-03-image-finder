import React, { Component } from 'react';
import Modal from './Modal';

export default class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSelected: null,
      isModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(photo) {
    this.setState({ imgSelected: photo, isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let photos = this.props.content;
    const { imgSelected, isModalOpen } = this.state;
    return (
      <>
        {photos.map(photo => (
          <li className="ImageGalleryItem" id={photo.id} key={photo.id}>
            <img
              className="ImageGalleryItem-image"
              src={photo.webformatURL}
              alt="desc"
              onClick={() => this.openModal(photo)}
            />
          </li>
        ))}
        {isModalOpen && imgSelected && (
          <Modal image={imgSelected} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
