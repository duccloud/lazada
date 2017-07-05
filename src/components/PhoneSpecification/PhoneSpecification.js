'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('./PhoneSpecification.scss');

export default class PhoneSpecification extends React.Component {
    render() {
        return this.props.data && (
            <div className="wrapper-phone-spec">
                <p>{this.props.data.include}</p>
                <div
                    dangerouslySetInnerHTML={{__html: this.props.data.info}}
                />
            </div>
        )
    }
}

PhoneSpecification.propTypes = {
  data: PropTypes.object
}