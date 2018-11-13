import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,  // books - ends up as a key in global application state, and 
                        // its value is whatever is returned from BooksReducer,  
                        // i.e. from reducer_books
  activeBook: ActiveBookReducer
});

export default rootReducer;
