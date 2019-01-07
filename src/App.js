import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  hundleShelfSelected = (shelf, book) => {
    const books = this.state.books.filter(b => b !== book);
    const selectedBook = book;
    selectedBook.shelf = shelf;
    books.push(selectedBook);

    this.setState({ books });
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <ListBooks
              books={this.state.books}
              onShelfSelected={this.hundleShelfSelected}
            />
          )}
        />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
}

export default BooksApp;
