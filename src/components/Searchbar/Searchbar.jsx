import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const searchedTerm = form.search.value.trim();

    if (!searchedTerm) {
      alert('Please, write something !');
      return;
    }

    this.props.onFormSubmit(searchedTerm);
    form.reset();
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles['SearchForm-button']}>
            <BsSearch />
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
