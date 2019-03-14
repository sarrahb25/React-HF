import React from 'react';
import { css } from 'emotion';
import { PICSUM_URL } from '../../constants';
import { withRouter } from 'react-router-dom';

const calculateUrl = (itemPictureProp) => {
    return (`${PICSUM_URL}/${itemPictureProp.width}/${itemPictureProp.height}?image=${itemPictureProp.id}`);
};

const goToDetailPicture = (itemPictureProp, history) => {
    history.push({
        pathname: `/image/${itemPictureProp.id}`,
        state: { urlPicture: calculateUrl(itemPictureProp),
                 pictureName: itemPictureProp.filename,
                 author: itemPictureProp.author
        }
    });
};


const  PictureItem =  (props) => {
    if (!props.itemPicture) return '';
    else {
        let {history} = props;
        return (
            <img className={css(styleImg)}
                 alt=""
                 src={calculateUrl(props.itemPicture)}
                 onClick={() => {
                    goToDetailPicture(props.itemPicture, history)
                 }}
            />
        );
    }
};

export default withRouter (PictureItem) ;

const styleImg  = {
    padding: '25px',
    margin: '30px 0px',
    width: '150px',
    height: '150px',
    cursor: 'pointer'
};