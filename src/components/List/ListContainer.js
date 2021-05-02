import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';
//import getCardsForColumn from '../../redux/cardsRedux.js'; //?


const mapStateToProps = (state, props) => ({             //funckja ta definiuje powiązanie propsów ze stanem (dodaje propsy komponentu List) / state - argument oznaczający cały stan aplikacji
    columns: getColumnsForList(state, props.id),         //getColumnsForList przefiltrowuje kolumny zawierające odp. parametr listId - ma powiązanie w columnsRedux.js
    //cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({       //dodane z 12.4 (zw. z reducer), funkcja ta dodaje propsy komponentu o wartościach będących funkcjami wysyłającymi akcje do magazynu (dispatch - wysyłanie) - ma za zad. wysyłać akcje
    addColumn: title => dispatch(createActionAddColumn({    //createActionAddColumn to kreator akcji z obietkem jako argumentem o parametrach listId i title - ten obiekt zostanie wykorzystany jako payload w columnsRedux.js (12.4)
      listId: props.id,
      title,
    })),
  });

export default connect(mapStateToProps, mapDispatchToProps)(List);   //odpowiada za połączenie komponentu List z magazynem (w ostatnim nawiasie podajemy komponent, który jest wykorzystywany w tym kontenerze)
