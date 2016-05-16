import React, { Component, PropTypes } from 'react';
import CategoryTree from './CategoryTree';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tree: null
        };
    }

    componentWillMount() {
        this.mapTreeToState();
    }

    mapTreeToState() {
        let seen = [];

        const tree = JSON.stringify(this.props.tree._root, (key, value) => {
           if (value !== null && typeof value === 'object') {
                if (seen.indexOf(value) >= 0) {
                    return;
                }
                seen.push(value);
            }
            return value;
        });

        this.setState({ tree: JSON.parse(tree) });
    }

    onSubmit(event) {
        event.preventDefault();

        const { child, parent, type } = this.refs;
        const { tree } = this.props;

        tree.add(
            child.value,
            parent.value,
            type.value === 'iterate' ? tree.iterativeTraverse : tree.recursiveTraverse
        );

        child.value = '';
        parent.value = '';

        this.mapTreeToState();
    }

    render() {
        return <div>
            <CategoryTree tree={this.state.tree} />
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Child" ref="child" />
                <input type="text" placeholder="Parent" ref="parent" />
                <select ref="type">
                    <option value="iterate">Iterate</option>
                    <option value="recurese">Recurse</option>
                </select>
                <button>Add</button>
            </form>
        </div>
    }
}

App.propTypes = {
    tree: PropTypes.object.isRequired
};

export default App;
