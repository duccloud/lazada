'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class PhoneBasicInfo extends React.Component {
  render() {
    return this.props.data && (
      <div>
        <img
          className="cover"
          src={this.props.data.cover}
          alt={this.props.data.title}
        />
        <h4>
          <a
            className="phone-basic-info-title" 
            target="_blank" 
            href={this.props.url}>
            {this.props.data.title}
          </a>
        </h4>
        <div
          className="phone-basic-info-price"
          dangerouslySetInnerHTML={{ __html: this.props.data.price }}
        />
      </div>
    )
  }
}

PhoneBasicInfo.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
}