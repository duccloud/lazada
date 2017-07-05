'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('./PhoneHighlight.scss');

export default class PhoneHighlight extends React.Component {
  render() {
    return this.props.data && (
      <div>
        <p className="phone-highlight-warranty">
          {this.props.data.warranty}
        </p>
        <div 
          className="phone-highlight-details"
          dangerouslySetInnerHTML={{ __html: this.props.data.details }}
        />
      </div>
    )
  }
}

PhoneHighlight.propTypes = {
  data: PropTypes.object
}