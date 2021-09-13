import { Provider } from 'react-redux';
import store from '../../store/store';
import AddTodo from './AddTodo/AddTodo';

export const Sandbox = (): JSX.Element => {
    console.log('Sandbox');
    return (
        <div>
            <Provider store={store}>
                SandBox
                <AddTodo />
            </Provider>
        </div>
    );
};
