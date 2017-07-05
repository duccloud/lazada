'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('./PhoneReviews.scss');

export default class PhoneReviews extends React.Component {
    render() {
        return this.props.data && (
            <div>
                {this.props.data.map((item, index) => {
                    return (
                        <div className="phone-review-item" key={`review${index}`}>
                            <h5 className="title">
                                <span className="phone-review-item-rating">{item.rating}</span> 
                                <i className="fa fa-star"></i>
                                <span className="phone-review-item-title">{item.title}</span>
                            </h5>
                            <p className="phone-review-item-detail">{item.detail}</p>
                            <p>
                                <b className="phone-review-item-author">{item.author}</b> - 
                                <span className="phone-review-item-date">{item.date}</span>
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

PhoneReviews.propTypes = {
  data: PropTypes.array
}