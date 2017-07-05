'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class PhoneVariant extends React.Component {
    render() {
        return this.props.data && (
            <div>
                {this.props.data.colors.map((imgUrl, index) => {
                    return <img key={`img${index}`} src={imgUrl} />
                })}
            </div>
        )
    }
}

PhoneVariant.propTypes = {
    data: PropTypes.object
}