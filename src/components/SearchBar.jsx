import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.queryChange = this.queryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  queryChange() {
    this.props.onQuery(this.state.inputValue);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // Puedes manejar la búsqueda aquí si lo deseas
    this.queryChange();
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="SearchForm-button"
            onClick={this.queryChange}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
