export function selectBook(book) {
  // selectBook is an Action Creator so it needs
  // to return an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
