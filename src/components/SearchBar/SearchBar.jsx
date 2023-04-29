import { Button } from 'components/Button/Button';
import { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm">
            <Button />
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
