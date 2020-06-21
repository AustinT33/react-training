import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import { removeTodo, markTodoAsCompleted } from '../../Redux/actions';
import { displayAlert } from '../../Redux/thunks';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, onDisplayAlertClicked }) => (
    <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem 
        todo={todo} 
        onRemovePressed={onRemovePressed} 
        onCompletedPressed={onDisplayAlertClicked} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);