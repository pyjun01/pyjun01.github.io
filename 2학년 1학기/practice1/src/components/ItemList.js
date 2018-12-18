import React, { Component } from 'react';
import Item from './Item.js';

class ItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const { todos, onToggle, onRemove } = this.props;
        console.log(todos);
        const todoList = todos.map(
          ({id, text, checked, color}) => (
            <Item
              id={id}
              text={text}
              checked={checked}
              onToggle={onToggle}
              onRemove={onRemove}
              color={color}
              key={id}
            />
          )
        );

        return (
          <div>
            {todoList}
          </div>
        );
    }
}

export default ItemList;
