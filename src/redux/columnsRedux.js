import shortid from 'shortid';

// selectors (funkcja getColumnsForList jest selektorem, która wybiera kolumny z danej listy; wykorzystywana w ListContainers.js do przefiltrowania kolumn zawierających odp. parametr listId)
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';                                     //W stałej reducerName zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje
const createActionName = name => `app/${reducerName}/${name}`;     //funkcja createActionName używająca stałej reducerName. Będzie potrzebna w każdym pliku z reduksowymi akcjami i reducerem. Służy ona do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów (więcej w 12.4)

// action types (nazwy akcji z dużych liter oddzielonych _)
export const ADD_COLUMN = createActionName('ADD_COLUMN');          //nazwa akcji przyjmie wartość 'app/columns/ADD_COLUMN'

// action creators (stworzenie akcji - wysłanie jej do mapDispatchToProps w ListContainer.js, będzie wykorzystana do stworzenia dispatchera akcji, który będzie zapisany w propsie addColumn
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer (opisany w 12.4: Reducer)
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}