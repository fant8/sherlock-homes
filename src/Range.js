import React, { Component } from 'react';

class Range extends Component{

    state={
        value:0,
    }

    handleChange = (e) => {
        const {handleRangeChange, label} = this.props;

        this.setState({value: e.target.value});

        handleRangeChange(label, parseInt(this.state.value) + 1);
    }

    render(){
        const {label} = this.props;
        return (
            <label id={label} className="label">
                Importance (between 1 to 10):
                <input
                    value={label}
                    id={label}
                    type="range"
                    min="0"
                    max="10"
                    value={this.state.value}
                    onChange={this.handleChange}
                /> 
            </label>   
        );
    }

}

export default Range;