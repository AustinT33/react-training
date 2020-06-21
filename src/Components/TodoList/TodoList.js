import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import { removeTodo } from '../../Redux/actions';
import './TodoList.css';

const TodoList = ({ todos = [{ text: 'hello' }] }) => (
    <div className="list-wrapper">
    <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);