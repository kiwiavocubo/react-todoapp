import React  from 'react';
import {Button,Input} from 'antd';


class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
           inputText:''
        }
    }

    addTodo(e) {
        if(e.key ==='Enter'){
        if(this.state.inputText) {
            this.props.onAdd(this.state.inputText);
            this.setState({ inputText: '' });
        }
    }
    }

    changeInputVal(e) {
        this.setState({
            inputText: e.target.value
        })
    }

    addTodoForBut() {
        if (this.state.inputText ===''){return}
        this.props.onAdd(this.state.inputText);
        this.setState({ inputText: '' });
        this.textInput.focus();
        
    }

    emitEmpty() {
        this.textInput.focus();
        this.setState({ inputText: '' });
    }


    render (){
        const {inputText} = this.state;
        return (
            <div>
                <Input
                    id = 'txtBox'
                    placeholder="What's your agenda today?"
                    value={inputText}
                    //type="textarea"
                    style={{ width: 500 }}
                    onKeyPress={this.addTodo.bind(this)}
                    onChange={this.changeInputVal.bind(this)}
                    ref={((input) => {this.textInput= input})}
                />
                <Button type="default" onClick={this.addTodoForBut.bind(this)}>Add</Button>
            </div>
        );
    }
}
export default InputForm;