import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../../../store/actions/actions';
import { AppState } from '../../../store/store';

const mapDispatch = { addTodo };
const mapState = (state: AppState) => ({
    // get what states you want from store in redux
    isOn: state.todosReducer.isOn,
});

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

type AddTodoProps = PropsFromRedux & {
    backgroundColor?: string
}

type AddTodoState = {
    input: string;
};

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
    readonly state: AddTodoState = {
        input: '',
    };

    componentDidUpdate() {
        console.log('update');
    }

    updateInput = (value: string) => {
        this.setState({ input: value });
    };

    handleAddTodo = () => {
        this.props.addTodo(!this.props.isOn);
        this.setState({ input: '' });
    };

    render() {
        const { input } = this.state;
        const { isOn } = this.props;

        return (
            <>
                <input
                    onChange={(e) => this.updateInput(e.target.value)}
                    value={input}
                />
                <button type="button" className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
                <div>{isOn ? 'hello' : 'hi'}</div>
            </>
        );
    }
}

export default connector(AddTodo);
