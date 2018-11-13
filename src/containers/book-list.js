import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // make sure actions returned from action creators 
                                        // end up flowing through all the different reducers


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
        })
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// this components needs be aware of the app state (i.e. book list)
// so we decide to promote this component to a container
// by mapping state to props and 
// hook our component together using connect()() like below
function mapStateToProps(state) { // APPLICATION STATE
    // whatever is returned will show up as props
    // inside of BookList
    return {    // return an object
        books: state.books  // will be available in this container component 
                            // as this.props.books (same name as the left hand side "books")
    };
}

// Anything returned from this function will end up as props
// on the BookList container, 
// i.e. selectBook (one on left in 1st param of bindActionCreators)
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed 
    // to all of the reducers of the app
    return bindActionCreators({ selectBook: selectBook }, dispatch); 
                                // left sB: name by ourselvies. when we use it in this container,
                                // we're calling the action creator selectBook (one on right)
                                // right sB: actual imported action creator
                                // dispatch: take action and send it to reducers
}

// promote BookList from a component to a container
// connect()() returns a container
// mapDispatchToProps: this container needs to know about this new dispatch method, selectBook.
                    // make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);