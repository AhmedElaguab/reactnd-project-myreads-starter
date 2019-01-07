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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks />} />
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
