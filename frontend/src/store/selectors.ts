import { AppState } from './store';

export const getTodos = (store: AppState): boolean => store.todosReducer.isOn;
