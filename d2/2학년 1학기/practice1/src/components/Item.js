import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text, checked, id, onToggle, onRemove, color }= this.props;
        console.log(color);
        return (
            <div className="todo-item" onClick={()=> onToggle(id)}>
                <div className="remove" onClick={(e)=> {
                    e.stopPropagation();
                    onRemove(id);
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div style={{color: color}}>{text}</div>
                </div>
                {checked && (<div className="check-mark">✓</div>)}
            </div>
        );
    }
}

export default Item;
