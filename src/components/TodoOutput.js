import React, { Component } from 'react';
import '../App.css';


class TodoOutput extends Component {
    onDelete(key) {
    this.props.deleteFn(key);
    }
    render() {
        var data =this.props.todoArr;
        console.log(data);
        return (
            <div>
               {this.props.text}
               <button className="remove" onClick={this.props.removeItem}></button>
               
            </div>
        );
    }
}

export default TodoOutput;