const Queue = require('./Queue');
const Node = require('./Node');

class Tree {
    /**
     * Create a tree of nodes.
     * @param {Object} data - The data associated with the node.
     */
    constructor(data) {
        this._root = new Node(data);
    }

    /**
     * Add a Node to the Tree.
     * @param {*} data - Data associated with the new Node.
     * @param {*} target - Data associated with the parent Node.
     * @param {Function} traversal
     */
    add(data, target, traversal) {
        let child = new Node(data),
            parent = null;

        this.contains(node => {
            node.data === target ? parent = node : null;
        }, traversal);

        if (parent) {
            parent.children.push(child);
            child.parent = parent;
        } else {
            throw new Error(
                'Cannot assign child Node to non-existing parent Node.'
            );
        }
    }

    /**
     * Search a particular value in the Tree.
     * @param {Function} callback
     * @param {Function} traversal
     */
    contains(callback, traversal) {
        traversal.call(this, callback);
    }

    /**
     * Traverse a Tree recursively.
     * @param {Function} callback
     */
    recursiveTraverse(callback) {
        (function recurse(currentNode) {
            for (let child of currentNode.children) {
                recursiveTraverse(child);
            }
            callback(currentNode);
        })(this._root);
    }

    /**
     * Traverse a Tree iteratively.
     * @param  {Function} callback
     */
    iterativeTraverse(callback) {
        const queue = new Queue();
        queue.enqueue(this._root);

        let currentNode = queue.dequeue();

        while (currentNode) {
            for (let child of currentNode.children) {
                queue.enqueue(child);
            }
            callback(currentNode);
            currentNode = queue.dequeue();
        }
    }
}

module.exports = Tree;
