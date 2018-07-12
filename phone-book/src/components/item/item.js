import React, { Component } from 'react';
import './item.css';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { key, name, number, handleModify, handleDelete }= this.props;
        return (
            <div className="item">
                <b>{name}</b>
                <p>{number}</p>
                <button onClick={handleModify}>수정</button>
                <button onClick={handleDelete}>삭제</button>
            </div>
        )
    }
}

export default Item;
