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
    const shelves = [
      { title: "Currently Reading", slug: "currentlyReading" },
      { title: "Want To Read", slug: "wantToRead" },
      { title: "Read", slug: "read" }
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <div className="container">
            <h1>MyReads</h1>
          </div>
        </div>
        <div className="list-books-content">
          <div className="container">
            {shelves.map(shelf => (
              <div className="bookshelf" key={shelf.slug}>
                <h2 className={"bookshelf-title " + shelf.slug}>
                  {shelf.title}
                </h2>
                <div className="bookshelf-books">
                  <Books
                    books={this.getShelfBooks(shelf.slug)}
                    onShelfSelected={this.props.onShelfSelected}
                  />
                </div>
              </div>
            ))}
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
