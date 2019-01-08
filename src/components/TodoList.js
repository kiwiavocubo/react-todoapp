
import React from 'react';
import InputForm from './InputForm';
import TodoOutPut from './TodoOutput';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoArr:[]
        }
    }

    handleChange(todo) {
        var rows = this.state.todoArr;
        rows.push(todo);

        this.setState({
            todoArr:rows
        });
    }
    render (){
        return (
            <div>
                <InputForm onAdd={this.handleChange.bind(this)}  />
                <TodoOutPut todo={this.state.todoArr} />
            </div>
        );
    }
}
export default TodoList;