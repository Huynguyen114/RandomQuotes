import types from '../action/types';

const innitialState = {
  sentences: [],
  colors: []
};

function bibleReducer(state = innitialState, action) {
  switch (action.type) {
    case types.FETCH_SENTENCES:
      return {
        ...state,
        sentences: action.data[0].sentences,
        colors: action.data[0].colors
      };
    default:
      return state;
  }
}

export default bibleReducer;
