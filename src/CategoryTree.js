import React from 'react';

const CategoryTree = ({ tree }) => {
    return <ul>
        <li>
            {tree.data}
            {tree.children ?
                tree.children.map((child, index) => {
                    return <CategoryTree tree={child} key={index} />;
                })
            : null}
        </li>
    </ul>
};

export default CategoryTree;
