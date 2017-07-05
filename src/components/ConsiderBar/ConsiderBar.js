'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('./ConsiderBar.scss');

export default class ConsiderBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product1: '',
            product2: '',
        };

        this.handleConsiderInputChange = this.handleConsiderInputChange.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    handleConsiderInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmitButton() {
        this.props.onSubmitConsiderInfo(this.state.product1, this.state.product2);
    }

    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="product1" className="col-sm-2 control-label">
                        Product 1
                        <span className="sp-required"> *</span>
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="product1"
                            onChange={this.handleConsiderInputChange}
                            type="text"
                            className="form-control">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="product2" className="col-sm-2 control-label">
                        Product 2
                        <span className="sp-required"> *</span>
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="product2"
                            onChange={this.handleConsiderInputChange}
                            type="text"
                            className="form-control">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button
                            onClick={this.handleSubmitButton}
                            type="button"
                            className="btn btn-primary"
                            disabled={this.props.isSubmitting || (!this.state.product1 || !this.state.product2)}
                        >
                            Compare
                            </button>
                    </div>
                </div>
            </form>
        )
    }
}

ConsiderBar.propTypes = {
    onSubmitConsiderInfo: PropTypes.func,
    isSubmitting: PropTypes.bool,
}