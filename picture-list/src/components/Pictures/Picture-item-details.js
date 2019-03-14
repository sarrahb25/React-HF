import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";

class PictureItemDetail extends Component {

    render() {
        console.log(this.props)
        let {urlPicture, author} = this.props.location.state;
        return (
            <div className={css(styles.pictureWrapper)}>
                <span className={css(styles.infoWrapper)}>
                      <Heading>Author : </Heading>
                      <span>
                          <SubHeading>{author}</SubHeading>
                      </span>
                </span>
                <img className={css(styles.imgStyle)} src={urlPicture} alt ="" />
            </div>
        );
    }
};

export default PictureItemDetail;

const styles = {
    pictureWrapper: {
        marginLeft: '10px 50px 10px 150px',
        marginRight: '10px 50px 10px 150px',
        padding: '10px 50px 10px 150px'
    },
    infoWrapper: {
        margin: '10px 50px 10px 150px',
        padding: '10px 50px 10px 150px'
    },
    columnStyle: {
        flex: '33.33%',
        padding: '5px',
    },
    imgStyle: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        maxWidth: '100%'
    }
};