import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Books from "./Books";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  getShelfBooks = shelf => {
    const shelfBooks = this.props.books.filter(book => book.shelf === shelf);
    return shelfBooks;
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <Books books={this.getShelfBooks("currentlyReading")} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <Books books={this.getShelfBooks("wantToRead")} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <Books books={this.getShelfBooks("read")} />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
