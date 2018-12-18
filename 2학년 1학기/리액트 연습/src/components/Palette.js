import React, { Component } from 'react';
import './Palette.css';

class Palette extends React.Component {
    render() {
        const { color, colorClick, check }= this.props;
        const list= color.map(({id, hex})=>{
            return <div className={`color ${id===check? 'active': ''}`} onClick={()=> colorClick(id)} key={id} style={{backgroundColor: hex}}></div>;
        });
        return(
            <div className="palette">
                {list}
            </div>
        );
    }
}

export default Palette;
