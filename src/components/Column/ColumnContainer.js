import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';

//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);      //zawiera 2 argumenty: state i propsId

const mapStateToProps = (state, props) => ({             //funckja ta definiuje powiązanie propsów ze stanem
    cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({       //dodane z 12.5 funkcja ta ma dodawać karty do kolumn
    addCard: title => dispatch(createActionAddCard({
      columnId: props.id,
      title,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);   //odpowiada za połączenie komponentu List z magazynem (w ostatnim nawiasie podajemy komponent, który jest wykorzystywany w tym kontenerze)
