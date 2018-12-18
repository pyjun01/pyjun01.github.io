import React, { Component } from 'react';
import './App.css';
import Template from './components/Template.js';
import Palette from './components/Palette.js';
import Form from './components/Form.js';
import ItemList from './components/ItemList.js';

class App extends Component {

    id= 3;
    state= {
        input: '',
        todos: [
            { id: 0, text: 'react', checked: false, color: '#343a40'},
            { id: 1, text: 'react', checked: true, color: '#343a40'},
            { id: 2, text: 'react', checked: false, color: '#343a40'}
        ],
        color: [
            {id: 0, hex: '#343a40'},
            {id: 1, hex: '#f03e3e'},
            {id: 2, hex: '#12b886'},
            {id: 3, hex: '#228ae6'}
        ],
        SetColor: 0
    }

    handleChange= (e)=> {
        this.setState({
            input: e.target.value
        });
    }
    handleCreate= ()=> {
        const { input, todos, color, SetColor }= this.state;
        let c=color.find((ele)=>{return SetColor===ele.id});
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color: c.hex
            })
        });
    }
    handleKeyPress= (e)=> {
        if(e.key==="Enter")
            this.handleCreate();
    }
    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; // 선택한 객체
        const nextTodos = [...todos]; // 배열을 복사
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };
        this.setState({
            todos: nextTodos
        });
    }
    handleRemove= (id)=> {
        const { todos }= this.state;
        this.setState({
            todos: todos.filter(todo=> todo.id !== id)
        });
    }
    colorClick= (id)=> {
        this.setState({
            SetColor: id
        });
    }
    render() {
        const { todos, input, color, SetColor }= this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            colorClick
        }= this;
        return (
            <Template form={(
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />
            )} palette={(
                <Palette
                    color={color}
                    colorClick={colorClick}
                    check={SetColor}
                />
            )}
            >
                <ItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </Template>
        );
    }
}
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
export default App;
