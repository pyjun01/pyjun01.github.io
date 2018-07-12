import React, { Component } from 'react';
import { Form, Item } from '../../components';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 2,
            name:'',
            number:'',
            list: [
                {
                    id: 0,
                    name:'박용준',
                    number:'010-2205-9795'
                },
                {
                    id: 1,
                    name:'박형진',
                    number:'010-1234-5678'
                },
            ],
            Clear: false
        };
    }
    nameChange= (v) =>{
        this.setState({
            name: v.target.value
        });
    }
    numberChange= (v) =>{
        this.setState({
            number: v.target.value
        });
    }
    handleClick= () =>{
        if(this.state.name.length>0 && this.state.number.length>0){
            console.log(this.state.list);
            this.state.list.push({
                id: this.state.id++,
                name: this.state.name,
                number: this.state.number
            });
            this.setState({
                Clear: true
            });
            this.setState({
                name: "",
                number: "",
                Clear: false
            });
        }
    }
    handleFilter= (v) =>{
        const words= v.target.value;
        const name_list= this.state.list.map((v) =>{
            return v.name;
        })
        const result = name_list.filter(word => word.indexOf(words));
    }
    render() {
        const { nameChange, numberChange, handleClick, handleFilter }= this;
        const { list, Clear, name, number }= this.state;

        const item= list.map((v) =>{
            return (
                <Item key={v.id} name={v.name} number={v.number} />
            );
        });

        return (
            <div>
                <Form
                    clear={Clear}
                    number={number}
                    name={name}
                    nameChange={nameChange}
                    numberChange={numberChange}
                    handleClick={handleClick}
                    handleFilter={handleFilter}
                />
                { item }
            </div>
        );
    }
}

export default Container;
