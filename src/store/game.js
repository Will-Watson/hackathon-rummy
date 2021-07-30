import axios from 'axios';

const initialState = {
  deck: {},
};

//action types
const SHUFFLE = 'SHUFFLE';

//action creators
export const shuffle = (deck) => {
  return {
    type: SHUFFLE,
    deck,
  };
};

//thunks
export const shuffleDeck = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
      );
      console.log(data);
      dispatch(shuffle(data));
    } catch (error) {
      console.log(error);
    }
  };
};
//reducer

const game = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        deck: action.deck,
      };
    default:
      return state;
  }
};

export default game;
