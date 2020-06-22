import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions';

export const loadTools = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const res = await fetch('http://localhost:8080/todos');
        const todos = await res.json();

        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
}