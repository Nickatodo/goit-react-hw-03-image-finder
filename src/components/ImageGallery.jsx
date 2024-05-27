import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';

export default class ImageGallery extends Component {
  render() {
    let galleryPhotos = [...this.props.contents.photos];
    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem content={galleryPhotos}></ImageGalleryItem>
        </ul>
        {galleryPhotos.length > 0 && (
          <Button onMore={this.props.loadMore}></Button>
        )}
      </>
    );
  }
}
