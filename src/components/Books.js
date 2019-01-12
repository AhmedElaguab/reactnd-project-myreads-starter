import React, { Component } from "react";
import PropTypes from "prop-types";

class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfSelected: PropTypes.func
  };

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.length > 0 ? (
          this.props.books.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={event =>
                        this.props.onShelfSelected(event.target.value, book)
                      }
                    >
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  {book.authors.map(author => (
                    <p key={author}>{author}</p>
                  ))}
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No books :[</p>
        )}
      </ol>
    );
  }
}

export default Books;
