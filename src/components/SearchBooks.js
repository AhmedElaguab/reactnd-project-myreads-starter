import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import Books from "./Books";

class SearchBooks extends Component {
  static propTypes = {
    onShelfSelected: PropTypes.func.isRequired
  };

  state = {
    query: "",
    searchResultBooks: [],
    books: []
  };

  hundleInputChange = query => {
    query = query.trimStart();
    this.setState({ query }, () => {
      this.hundleSearch();
    });
  };

  hundleSearch = () => {
    if (this.state.query) {
      BooksAPI.search(this.state.query).then(searchResultBooks => {
        if (Array.isArray(searchResultBooks) && searchResultBooks.length > 0) {
          this.state.books.forEach(booksBook => {
            searchResultBooks.forEach(searchResultBook => {
              if (booksBook.id === searchResultBook.id) {
                const idx = searchResultBooks.indexOf(searchResultBook);
                searchResultBooks.splice(idx, 1, booksBook);
              }
            });
          });
        }

        this.setState({ searchResultBooks });
      });
    } else {
      this.setState({ searchResultBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="container">
            <div className="search-books-bar-inner">
              <Link to="/" className="close-search">
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  onChange={e => this.hundleInputChange(e.target.value)}
                  type="text"
                  placeholder="Search by title or author"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search-books-results">
          <div className="container">
            <Books
              books={this.state.searchResultBooks}
              onShelfSelected={this.props.onShelfSelected}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
}

export default SearchBooks;
