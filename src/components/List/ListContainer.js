import {connect} from 'react-redux';
import List from './List';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);      //zawiera 2 argumenty: state i propsId

const mapStateToProps = (state, props) => ({             //funckja ta definiuje powiązanie propsów ze stanem
    columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(List);   //odpowiada za połączenie komponentu List z magazynem (w ostatnim nawiasie podajemy komponent, który jest wykorzystywany w tym kontenerze)
