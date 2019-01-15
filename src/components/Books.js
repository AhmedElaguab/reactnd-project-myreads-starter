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
          this.props.books.map(book => {
            const shelf = book.shelf ? book.shelf : "none";
            const smallThumbnail =
              book.imageLinks && book.imageLinks.smallThumbnail
                ? book.imageLinks.smallThumbnail
                : "";
            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-thumb">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${smallThumbnail})`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={shelf}
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
                  <div className="book-details">
                    <h2
                      className="book-title"
                      title={book.subtitle ? book.subtitle : ""}
                    >
                      {book.title}
                    </h2>
                    <p>
                      <span>{book.publishedDate}</span> |{" "}
                      <span>{book.pageCount} pages</span>
                    </p>
                    <ul className="book-authors">
                      {book.authors ? (
                        book.authors.map(author => (
                          <li key={author}>{author}</li>
                        ))
                      ) : (
                        <li>Unknown author</li>
                      )}
                    </ul>
                    <ul className="book-categories">
                      {book.categories ? (
                        book.categories.map(categorie => (
                          <li key={categorie}>{categorie}</li>
                        ))
                      ) : (
                        <li>Unknown categories</li>
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p>No books :[</p>
        )}
      </ol>
    );
  }
}

export default Books;
