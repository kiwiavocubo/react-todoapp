import React  from 'react';
import '../App.css';


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
       
        return (
            <div className="input-group mb-3">
                <input
                    className='form-control'
                    placeholder="What's your agenda today?"
                    value={this.state.inputText}
                    onKeyPress={this.addTodo.bind(this)}
                    onChange={this.changeInputVal.bind(this)}
                    ref={((input) => {this.textInput= input})}
                />
                 <div class="input-group-append">
                <button className='btn btn-outline-secondary' onClick={this.addTodoForBut.bind(this)}> Add </button>
            
                </div></div>
        );
    }
}
export default InputForm;