import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";
import getImage from '../../utils/utils';
import calculateUrl from '../../utils/calculUrl';



class PictureItemDetail extends Component {

    state = {
        Picture:null
    };


    componentDidMount() {
        let  id = this.props.match.params.id;
        getImage().then(res => {
            const  section = res.data.slice(0,100);
            const found = (section).find(x => x.id === parseInt(id));
            this.setState({  Picture : found });
        })

    };


    render() {

        if (!this.state.Picture) return null; //spinner loading
        return (
            <div className={css(styles.pictureWrapper)}>
                <span className={css(styles.infoWrapper)}>
                      <Heading>Author : </Heading>

                          <SubHeading>{this.state.Picture.author}</SubHeading>

                </span>
                <img className={css(styles.imgStyle)}
                     src={calculateUrl(this.state.Picture)}
                     alt ="" />
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

