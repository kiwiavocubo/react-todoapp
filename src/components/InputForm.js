import React  from 'react';

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
        this.textInput.focus();
       
    }

    emitEmpty() {
        this.inputTextRef.focus();
        this.setState({ inputText: '' });
    }


    render (){
        const {inputText} = this.state;
        //const suffix = inputText? <button type="close-circle" onClick={this.emitEmpty.bind(this)}/> : null;
        return (
            <div>
                <input
                    placeholder="What's your agenda today?"
                   // suffix={suffix}
                    value={inputText}
                    //type="textarea"
                    style={{ width: 500 }}
                    onKeyPress={this.addTodo.bind(this)}
                    onChange={this.changeInputVal.bind(this)}
                    ref={((input) => {this.textInput= input})}
                />
                <button type="primary" onClick={this.addTodoForBut.bind(this)}>Add</button>
            </div>
        );
    }
}
export default InputForm;