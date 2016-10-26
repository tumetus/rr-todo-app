import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ListView extends Component {
  renderItems() {
    let ret = [];
    this.props.todos.map(todo => {
      let obj = (
        <li
          key={todo.text}
          onClick={() => this.props.toggleTodoDone(todo.text)}
          className={"todo" + (todo.done ? " done" : "")}
        >
          {todo.text}
        </li>
      );

      if (!todo.done) {
        ret.unshift(obj);
      } else {
        ret.push(obj);
      }
    });

    return ret;
  }

  render() {
      return (
        <div className="list-view">
          <div className="">
            <ul className="todo-list">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      );
  }
}

const mapStateToProps = ({ input }) => {
  return {
    	todos: input.todos
  };
};

export default connect(mapStateToProps, actions)(ListView);
