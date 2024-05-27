import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressKey);
  }

  pressKey = evt => {
    if (evt.key === 'Escape') {
      this.props.closeModal();
    }
  };

  backdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    let imgSelected = this.props.image;
    return (
      <div className="Overlay" onClick={this.backdropClick}>
        <div className="Modal">
          <img src={imgSelected.largeImageURL} alt="desc" />
        </div>
      </div>
    );
  }
}
