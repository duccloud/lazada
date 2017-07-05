'use strict';

import React from 'react';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ConsiderBar from '../ConsiderBar/ConsiderBar';
import ConsiderTable from '../ConsiderTable/ConsiderTable';
import ContextualBackground from '../ContextualBackground/ContextualBackground';

require('./Layout.scss');

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      considerData: null,
      isSubmitting: false,
      errorMessage: null
    };

    this.handleSubmitConsiderInfo = this.handleSubmitConsiderInfo.bind(this);
  }

  handleConsiderInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmitConsiderInfo(product1, product2) {
    const self = this;
    const url = `/api/consider-products?product1=${product1}&product2=${product2}`;

    NProgress.start();
    this.setState({
      isSubmitting: true,
      errorMessage: null,
      considerData: null
    });

    axios.get(url)
      .then(function (response) {
        self.setState({
          considerData: response.data,
          isSubmitting: false
        });
        NProgress.done();
      })
      .catch(function (error) {
        self.setState({
          isSubmitting: false,
          errorMessage: error.response.data.error
        });
        NProgress.done();
      });
  }

  render() {
    return (
      <div>
        <ContextualBackground class='bg-info'>
          This tool is used to consider two random phone product urls from Lazada, for example:
          <br />
          - http://www.lazada.vn/samsung-galaxy-j3-lte4g-vang-hang-phan-phoi-chinh-thuc-5910528.html
          <br />
          - http://www.lazada.vn/samsung-galaxy-j5-prime-16gb-ram-2gb-den-hang-phanphoichinhthuc-2915281.html
        </ContextualBackground>
        <ReactCSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
        {this.state.errorMessage &&
          <ContextualBackground class='bg-danger'>
            {this.state.errorMessage}
          </ContextualBackground>
        }
        </ReactCSSTransitionGroup>
        <ConsiderBar
          onSubmitConsiderInfo={this.handleSubmitConsiderInfo}
          isSubmitting={this.state.isSubmitting}
        />
        <ReactCSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.state.considerData &&
            <ConsiderTable
              data={this.state.considerData}
            />
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}