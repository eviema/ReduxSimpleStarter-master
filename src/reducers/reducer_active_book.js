// all reducers have two arguments, CURRENT state and action.
// NOTE: current state argument does NOT refer to entire APPLICATION state, 
// but the state that THIS reducer is responsible for and that is CURRENT.
export default function(state = null, action) { // ES6: if state is undefined, set it to null. 
                                            // null is an assignment OBJECT 
                                            // - representing no value.
                                            // undefined is a variable TYPE 
                                            // - variable declared but no value assignment
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            // NEVER MUTATE THE STATE in an action creator, e.g.
            // DON'T WRITE:
            // state.title = action.payload.title;
            // return state;
    }
    return state;
}

// when the user first boots the app up, no book is immediately selected, 
// state returned will be null/undefined.
// but redux does not allows it with reducers.
// they must return a non undefined value.