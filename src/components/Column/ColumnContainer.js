import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);      //zawiera 2 argumenty: state i propsId

const mapStateToProps = (state, props) => ({             //funckja ta definiuje powiązanie propsów ze stanem
    cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);   //odpowiada za połączenie komponentu List z magazynem (w ostatnim nawiasie podajemy komponent, który jest wykorzystywany w tym kontenerze)
