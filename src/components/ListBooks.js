import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Books from "./Books";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfSelected: PropTypes.func.isRequired
  };

  getShelfBooks = shelf => {
    const shelfBooks = this.props.books.filter(book => book.shelf === shelf);
    return shelfBooks;
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <div className="container">
            <h1>MyReads</h1>
          </div>
        </div>
        <div className="list-books-content">
          <div className="container">
            <div className="bookshelf">
              <h2 className="bookshelf-title current">Currently Reading</h2>
              <div className="bookshelf-books">
                <Books
                  books={this.getShelfBooks("currentlyReading")}
                  onShelfSelected={this.props.onShelfSelected}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title want">Want to Read</h2>
              <div className="bookshelf-books">
                <Books
                  books={this.getShelfBooks("wantToRead")}
                  onShelfSelected={this.props.onShelfSelected}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title read">Read</h2>
              <div className="bookshelf-books">
                <Books
                  books={this.getShelfBooks("read")}
                  onShelfSelected={this.props.onShelfSelected}
                />
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
