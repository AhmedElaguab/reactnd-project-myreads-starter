import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Books from "./Books";

class SearchBooks extends Component {
  state = {
    query: "",
    searchResultBooks: []
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
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
            <input
              onChange={e => this.hundleInputChange(e.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <Books books={this.state.searchResultBooks} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
