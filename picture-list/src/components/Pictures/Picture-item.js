import React from 'react';
import { css } from 'emotion';
import { withRouter } from 'react-router-dom';
import calculateUrl from '../../utils/calculUrl';


const goToDetailPicture = (itemPictureProp, history) => {
    history.push({
        pathname: `/image/${itemPictureProp.id}`,
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