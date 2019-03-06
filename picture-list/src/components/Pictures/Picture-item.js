import React, { Component } from 'react';
import { css } from 'emotion';


class PictureItem extends Component {


    itemPicture = this.props.itemPicture;

    render() {

        // get imgPicture if the url exist
        const imgPicture = this.itemPicture ? <img style={{width: '150px', height: '150px'}} className='picture-img' src = {'https://picsum.photos' + '/' + this.itemPicture.width + '/' + this.itemPicture.height + '?image=' + this.itemPicture.id}  alt = {this.itemPicture.filename} /> : '';

        return (
            <div className={css`
                    padding: 32px;
                    font-size: 24px;
                    border-radius: 4px; }`
                }
            >
                {imgPicture}
            </div>
        );
    }

}

export default PictureItem;