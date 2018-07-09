import React from 'react';
import './Template.css';

const Template= ({form, palette,children})=> {
    return (
        <main className="Template">
            <div className="title">
                Todo List
            </div>
            <section className="form-wrapper">
                {palette}
                {form}
            </section>
            <section className="todo-wrapper">
                { children }
            </section>
        </main>
    );
};

export default Template;
