import React, { Component } from 'react';

class Form extends Component {
    render() {
        const { nameChange, numberChange, handleClick, clear, name, number }= this.props;
        return (
            <div>
                <input
                    value={clear? "": name}
                    type="text"
                    placeholder="name"
                    onChange={nameChange}
                />
                <input
                    value={clear? "": number}
                    type="text"
                    placeholder="number"
                    onChange={numberChange}
                />
                <button onClick={handleClick}>등록</button>
            </div>
        );
    }
}
export default Form;
