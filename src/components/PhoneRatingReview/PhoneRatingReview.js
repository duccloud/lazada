'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class PhoneRatingReview extends React.Component {
  render() {
    return this.props.data && (
      <div>
        <span className="phone-rating-review">
          {this.props.data}
        </span> 
        <i className="fa fa-star"></i>
      </div>
    )
  }
}

PhoneRatingReview.propTypes = {
  data: PropTypes.number
}