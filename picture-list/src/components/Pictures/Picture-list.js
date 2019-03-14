import React, { Component } from 'react';
import PictureItem from './Picture-item';
import {LIMIT_LIST, PICSUM_URL} from '../../constants';
import { css } from 'emotion';
import getImage from '../../utils/utils';
import  Heading  from '../text/Heading';




class PicturesList extends Component {
    state = {
        pictures: []
    }

    componentDidMount() {
        getImage().then(res => {
            const pictures = res.data.slice(0,LIMIT_LIST);
            this.setState({ pictures });
        })
    };

    render() {
        // Parse List Picutres
        const pictureListItems = this.state.pictures.map((item, index) => {
            return <PictureItem   key={index} itemPicture = {item} history={this.props.history}/> ;
        });

        return (

            <React.Fragment>
                <Heading>
                    List of Pictures
                </Heading>
                <div  className={css(styles.rowStyle)}>
                    <div className={css(styles.columnStyle)}>
                        {pictureListItems}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default PicturesList;

const styles = {
    fontStyle: {
        textAlign : 'center',
        color: '#00BFFF',
        margin: '50px 0px'}
    ,
    columnStyle: {
        flex: '33.33%',
        padding: '5px',
    },
    rowStyle: {
        display: 'flex'
    }

};