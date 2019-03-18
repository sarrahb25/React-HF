import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";
import calculateUrl from '../../utils/calculUrl';
import { connect } from 'react-redux';
import { postsFetchData } from '../../store/actions/data_action';
import selectImageById from '../../store/selectors/selectImageById';


class PictureItemDetail extends Component {

    componentDidMount() {

        this.props.postsFetchData();

    };

    render() {


        if (!this.props.getPictureDetail1) return null; //spinner loading


        let author = this.props.getPictureDetail1.author ;

        return (
            <div className={css(styles.pictureWrapper)}>
                <span className={css(styles.infoWrapper)}>
                      <Heading>Author : </Heading>

                          <SubHeading>{author}</SubHeading>

                </span>
                <img className={css(styles.imgStyle)}
                     src={calculateUrl(this.props.getPictureDetail1)}
                     alt ="" />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {

    let  id = ownProps.match.params.id;
    const getPictureDetail1 = selectImageById(state.fieldData.pictures, id);

    return {
        fieldData: state.fieldData,
        getPictureDetail1 : getPictureDetail1
    }

};


export default connect(mapStateToProps, {postsFetchData})(PictureItemDetail);


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

