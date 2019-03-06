import React, { Component } from 'react';
import axios from 'axios';
import PictureItem from './Picture-item';
import {urlSrc, limitList} from '../../constants';
import { Row } from 'react-styled-flexboxgrid';

class PicturesList extends Component {
    state = {
        pictures: []
    }

    componentDidMount() {
        axios.get(`${urlSrc}/list`)
            .then(res => {
                const pictures = res.data.slice(1,limitList);
                this.setState({ pictures });
            })
    }

    render() {
        // Parse List Picutres
        const pictureListItems = this.state.pictures.map((item, index) => {
            return <PictureItem key={`index${index}`} itemPicture = {item} /> ;
        });

        return (
            // render at the same level
            <React.Fragment>
                <h1 className="title-pictures-list"> List of Pictures</h1>
                    <Row>
                        {pictureListItems}
                    </Row>
            </React.Fragment>
        );
    }
}


export default PicturesList;