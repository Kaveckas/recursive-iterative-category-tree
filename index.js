import React from 'react';
import { render } from 'react-dom';
import Tree from './src/lib/Tree';
import App from './src/App';

render(
    <App tree={new Tree('Root')} />,
    document.getElementById('app')
);
