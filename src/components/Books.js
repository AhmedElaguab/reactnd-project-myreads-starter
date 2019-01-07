import React, { Component } from "react";

class Books extends Component {
  componentDidMount() {
    console.log(this.props.books);
  }
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => (
          <li>
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
                  <select>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors.map(author => (
                  <p>{author}</p>
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
