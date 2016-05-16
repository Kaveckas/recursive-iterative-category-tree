import React, { PropTypes } from 'react';

const CategoryTree = ({ tree }) => (
    <ul>
        <li>
            {tree.data}
            {tree.children ?
                tree.children.map((child, index) => {
                    return <CategoryTree tree={child} key={index} />;
                })
            : null}
        </li>
    </ul>
);

CategoryTree.propTypes = {
    tree: PropTypes.object.isRequired
};

export default CategoryTree;
