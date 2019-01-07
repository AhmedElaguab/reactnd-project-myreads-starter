import React, { Component } from "react";
import PropTypes from "prop-types";

class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  // Select shelf automatically
  selectShelf = shelf => {
    const shelves = [
      { value: "currentlyReading", string: "Currently Reading" },
      { value: "wantToRead", string: "Want to Read" },
      { value: "read", string: "Read" },
      { value: "none", string: "None" }
    ];

    return (
      <select value={shelf} onChange={() => {}}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelves.map(shelfOption => (
          <option value={shelfOption.value} key={shelfOption.value}>
            {shelfOption.string}
          </option>
        ))}
      </select>
    );
  };

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => (
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
                  {this.selectShelf(book.shelf)}
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
        ))}
      </ol>
    );
  }
}

export default Books;
