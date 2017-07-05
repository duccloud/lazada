'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class PhoneReviews extends React.Component {
    render() {
        return this.props.data && (
            <div>
                <p>
                    <b>Name: </b> 
                    <a  
                        className="seller-name" 
                        target="_blank" 
                        href={this.props.data.url}>
                        {this.props.data.name}
                    </a>
                </p>
                {this.props.data.rating &&
                    <p>
                        <b>Rating: </b> 
                        <span className="seller-rating">{this.props.data.rating}</span>
                    </p>
                }
                {this.props.data.size &&
                    <p>
                        <b>Size on LAZADA: </b> 
                        <span className="seller-size">{this.props.data.size}</span>
                    </p>
                }
                {(this.props.data.timeOn && this.props.data.timeOnUnitTime) &&
                    <p>
                        <b>Time on LAZADA: </b> 
                        <span className="seller-time">{this.props.data.timeOn} {this.props.data.timeOnUnitTime}</span>
                    </p>
                }
            </div>
        )
    }
}

PhoneReviews.propTypes = {
    data: PropTypes.object
}