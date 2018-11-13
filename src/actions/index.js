export function selectBook(book) {
    // selectBook is an action creator that returns an action,
    // an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book       // payload: a piece of data that describes the action
    };
}