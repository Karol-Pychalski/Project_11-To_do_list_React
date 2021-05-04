import shortid from 'shortid';

//plik cardsRedux.js dodany w 12.5

// selectors
export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId).sort((a, b) => a.index - b.index);   //zmieniony w 13.4
//export const getCardsForSearchResults = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));  //dodane w 12.5, usunięte w 13.4


// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({payload: { ...payload, id: shortid.generate() }, type: ADD_CARD});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}