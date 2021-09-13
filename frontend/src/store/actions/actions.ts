import { AnyAction } from 'redux';
import { ACTION1 } from './actionTypes';

export const addTodo = (content: boolean): AnyAction => ({
    type: ACTION1,
    payload: content,
});
