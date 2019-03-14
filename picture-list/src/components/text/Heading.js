import { css } from 'emotion';
import React from 'react';


const styles = {
    fontStyle: {
        textAlign: 'center',
        color: '#32CD32',
        margin: '0px 0px',
        bodyText: 'SourceSansPro',
        fontSize: 'calc(14px + (40 - 20) * ((100vw - 300px) / (1600 - 300)))'
}

};

const Heading = ({children})  =>

{ return (
    <h1 className={css(styles.fontStyle)}>
        {children}
    </h1>
)};


export default Heading ;


