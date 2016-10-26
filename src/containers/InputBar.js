import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class InputBar extends Component {
  handleChange(event) {
    event.preventDefault();
    let text = event.target.value;
    this.props.updateText(text);
  }

  render() {
    return (
      <div className="input-bar">
      <h3>Todo app</h3>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Buy food..."
              value={this.props.text}
              onChange={this.handleChange.bind(this)}
            />
            <button
              className="btn btn-default"
              onClick={() => this.props.addTodo()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ input }) => {
  return {
    text: input.text
  };
};

export default connect(mapStateToProps, actions)(InputBar);
