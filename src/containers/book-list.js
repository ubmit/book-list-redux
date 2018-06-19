import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
// connect is a single property from react-redux

/* in general we want the most
   parent component that cares
   about a particular piece 
   of state to be a container */

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);