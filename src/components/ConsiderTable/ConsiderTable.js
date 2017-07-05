'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import PhoneBasicInfo from '../PhoneBasicInfo/PhoneBasicInfo';
import PhoneRatingReview from '../PhoneRatingReview/PhoneRatingReview';
import PhoneHighlight from '../PhoneHighlight/PhoneHighlight';
import PhoneSeller from '../PhoneSeller/PhoneSeller';
import PhoneVariant from '../PhoneVariant/PhoneVariant';
import PhoneSpecification from '../PhoneSpecification/PhoneSpecification';
import PhoneReviews from '../PhoneReviews/PhoneReviews';

require('./ConsiderTable.scss');

export default class ConsiderTable extends React.Component {
    render() {
        const product1 = this.props.data.product1;
        const product2 = this.props.data.product2;

        return (
            <table className="table table-bordered consider-table">
                <tbody>
                    <tr>
                        <th></th>
                        <td><PhoneBasicInfo data={product1.basicInfo} url={product1.url} /></td>
                        <td><PhoneBasicInfo data={product2.basicInfo} url={product2.url} /></td>
                    </tr>
                    <tr>
                        <th>Ratings & Reviews</th>
                        <td><PhoneRatingReview data={product1.rating} /></td>
                        <td><PhoneRatingReview data={product2.rating} /></td>
                    </tr>
                    <tr>
                        <th>Highlights</th>
                        <td><PhoneHighlight data={product1.highlight} /></td>
                        <td><PhoneHighlight data={product2.highlight} /></td>
                    </tr>
                    <tr>
                        <th>Seller</th>
                        <td><PhoneSeller data={product1.seller} /></td>
                        <td><PhoneSeller data={product2.seller} /></td>
                    </tr>
                    <tr>
                        <th>Variants</th>
                        <td><PhoneVariant data={product1.variant} /></td>
                        <td><PhoneVariant data={product2.variant} /></td>
                    </tr>
                    <tr>
                        <th>Specification</th>
                        <td><PhoneSpecification data={product1.specification} /></td>
                        <td><PhoneSpecification data={product2.specification} /></td>
                    </tr>
                    <tr>
                        <th>Top reviews</th>
                        <td><PhoneReviews data={product1.reviews} /></td>
                        <td><PhoneReviews data={product2.reviews} /></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

ConsiderTable.propTypes = {
  data: PropTypes.object
}