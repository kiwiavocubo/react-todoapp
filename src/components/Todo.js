import React from 'react';
import TodoList from './TodoList';
import { render, findDOMNode } from 'react-dom';

class Todo extends React.Component{

    getInitialState(){
        var itemsFromStorage = localStorage.getItem('TODOs')?window.JSON.parse(localStorage.getItem('TODOs')):[];
        return {items: itemsFromStorage, text: ''};
    };
    onChange(e){
        this.setState({text: e.target.value});
    };
    handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{text: this.state.text, status:'active'}]);
        var nextText = '';
        var itemJson = JSON.stringify(nextItems);
        localStorage.setItem('TODOs',itemJson);
        this.setState({items: nextItems, text: nextText});
    };
    changeStatus(e) {
        var key = e.target.parentNode.getAttribute('id');
        var items = this.state.items;
        var status = this.state.items[key]['status'];
        if (status === 'done'){
            items[key]['status'] = 'active';
        }else{
            items[key]['status'] = 'done';
        }
        this.changeStates(items);
    };
    changeStates(items) {
        this.setState({items: items});
        localStorage.setItem('TODOs',JSON.stringify(items));
    };
    removeItem(e) {
        var key = e.target.parentNode.getAttribute('id');
        var items = this.state.items;
        items.splice(key, 1);
        this.changeStates(items);
    };
    render(){
        return(
            <div>
       <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.onChange} value={this.state.text} placeholder="What's your agenda today?"/>
                    <button>{'Add'}</button>
                </form>
                <TodoList items={this.state.items} changeStatus={this.changeStatus.bind(this)} removeItem={this.removeItem}/>     
        </div>
        );
    }
}
export default Todo;