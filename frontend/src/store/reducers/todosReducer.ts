import { AnyAction } from 'redux';
import { ACTION1, ACTION2 } from '../actions/actionTypes';

export type NoteState = {
    isOn: boolean
}

const initialState: NoteState = {
    isOn: false,
};

export const todosReducer = (state = initialState, action: AnyAction): NoteState => {
    switch (action.type) {
        case ACTION1: {
            return { ...state, isOn: action.payload };
        }
        case ACTION2: {
            return { ...state, isOn: action.payload };
        }
        default:
            return state;
    }
};
