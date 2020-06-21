import React from 'react';
import { hot } from 'react-hot-loader'
import TodoList from './Components/TodoList/TodoList'
import './App.css';

const App = () => (
    <div className="App">
        <TodoList />
    </div>
);

export default hot(module)(App);