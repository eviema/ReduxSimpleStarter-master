import React, { Component } from 'react';
import { connect } from 'react-redux';

// make BookDetail a container because it does care about a piece of app state, 
// i.e. the currently selected book
class BookDetail extends Component {

    render() {
        // return early when activeBook is null on 1st app boot-up
        if (!this.props.activeBook) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for: </h3>
                <div>Title: {this.props.activeBook.title}</div>
                <div>Pages: {this.props.activeBook.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);