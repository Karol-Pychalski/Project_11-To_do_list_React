import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Column from '../Column/ColumnContainer.js';
import Container from '../Container/Container.js';

class List extends React.Component {

    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.node,
        description: PropTypes.node,
        columns: PropTypes.array,
        addColumn: PropTypes.func,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }


    render() {
        const {title, image, description, columns, addColumn} = this.props;
        return (
            <Container>
                <section className={styles.component}>       
                    <Hero  titleText={title} image={image} />
                    <div className={styles.description}>
                        {ReactHtmlParser(description)}
                    </div>

                    <div className={styles.columns}>
                        {columns.map(columnData => (
                            <Column key={columnData.id} {...columnData} />
                        ))}
                    </div>

                    <div className={styles.creator}>
                        <Creator text={settings.columnCreatorText} action={addColumn}/>   {/*props addColumn to dispatcher akcji z columnsRedux.js (12.4) */}
                    </div>

                    <Hero image={this.props.image} />
                </section>
            </Container>
        )
    }
}

export default List;
