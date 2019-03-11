import React, { Component } from 'react';
import axios from 'axios';
import PictureItem from './Picture-item';
import {PICSUM_URL, LIMIT_LIST} from '../../constants';
import { css } from 'emotion';

const styles = {
    fontStyle :{
    textAlign : 'center',
    color : '#00BFFF',
    margin : '50px 0px'}
    ,
    columnStyle :{
        flex: '33.33%',
        padding: '5px',
    },

    };

class PicturesList extends Component {
    state = {
        pictures: []
    }

    componentDidMount() {
        axios.get(`${PICSUM_URL}/list`)
            .then(res => {
                const pictures = res.data.slice(1,LIMIT_LIST);
                this.setState({ pictures });
            })
    }

    render() {
        // Parse List Picutres
        const pictureListItems = this.state.pictures.map((item, index) => {
            return <PictureItem key={`index${index}`} itemPicture = {item} /> ;
        });

        return (

            <React.Fragment>
                <h1 className={css(styles.fontStyle)}>
                    List of Pictures
                </h1>
                <div  className={css`display: flex;`}>
                    <div className={css(styles.columnStyle)}>
                        {pictureListItems}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PicturesList;