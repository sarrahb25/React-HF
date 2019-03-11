import React from 'react';
import { css } from 'emotion';

const calculateUrl = (itemPictureProp) => {
    return (`https://picsum.photos/ ${itemPictureProp.width} / ${itemPictureProp.height} ?image=  ${itemPictureProp.id}`);
}

const styleImg  = {
    padding: '25px',
    margin: '30px 0px',
    width: '150px',
    height: '150px',
    };

const  PictureItem = (props) => {

    return (
        props.itemPicture ? <img className={css(styleImg)} alt="" src={calculateUrl(props.itemPicture)} /> :''
    );
}

export default PictureItem;