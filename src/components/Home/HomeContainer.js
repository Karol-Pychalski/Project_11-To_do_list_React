import {connect} from 'react-redux';
import Home from './Home.js';

const mapStateToProps = state => ({             //funckja ta definiuje powiązanie propsów ze stanem
    title: state.app.title,
    subtitle: state.app.subtitle,
    lists: state.lists,
});

export default connect(mapStateToProps)(Home);   //odpowiada za połączenie komponentu App z magazynem (w ostatnim nawiasie podajemy komponent, który jest wykorzystywany w tym kontenerze)
