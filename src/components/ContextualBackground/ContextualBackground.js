'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('./ContextualBackground.scss');

export default class ContextualBackground extends React.Component {
    render() {
        return (
            <p className={this.props.class}>
                {this.props.children}
            </p>
        )
    }
}

ContextualBackground.propTypes = {
    class: PropTypes.string
}