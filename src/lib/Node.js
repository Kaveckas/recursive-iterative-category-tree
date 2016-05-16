class Node {
    /**
    * Create a tree node.
    * @param {Object} data - The unique data associated with the Node.
    */
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

module.exports = Node;
