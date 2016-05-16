import React from 'react';

const CategoryForm = ({ onSubmit }) => (
    <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Child" ref="child" />
        <input type="text" placeholder="Parent" ref="parent" />
        <select ref="type">
            <option value="iterate">Iterate</option>
            <option value="recurese">Recurse</option>
        </select>
        <button>Add</button>
    </form>
);
