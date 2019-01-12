import React from 'react';
import InputForm from './InputForm';
import TodoOutPut from './TodoOutput';
import '../App.css';

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
    deleteFn(key){
        let data=this.state.todoArr;
        data.splice(key,1);
        this.setState({todoArr:data})
        //this.setState({todoArr:data.filter(item => item.key !== key) });
    }
    
    render (){
        return (
            <div>
                <InputForm onAdd={this.handleChange.bind(this)}  />
                <div className="itemList">
                {this.state.todoArr.map((val,key)=>{
                    return <li key={key} id={key}>
                    <TodoOutPut key={key} text={val}
                        removeItem ={ () => this.deleteFn(key)}
                    />
                    </li>
                })}
                </div>
            </div>
        );
    }
}
export default TodoList;