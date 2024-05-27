import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.props.onMore();
  }

  render() {
    return (
      <button type="button" className="Button" onClick={this.loadMore}>
        <span>Load More</span>
      </button>
    );
  }
}
