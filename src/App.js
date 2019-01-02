import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      noteText: '',
      notes:[]
    }
  }

  updateNotetext(noteText){
    this.setState({noteText:noteText.target.value})
  }

  addNote(){
    if (this.state.noteText===''){return}

    let notesArr =this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText:''});
    this.textInput.focus();
}
  handleKeyPress =(event) =>{
    if (event.key==='Enter')
    {
      let notesArr =this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({ noteText:''});
    }
  }

  deleteNote(index) {
    let notesArr =this.state.notes;
    notesArr.splice(index,1);
    this.setState({ notes:notesArr})
  }

  render() {

    let notes = this.state.notes.map((val,key)=>{
      return <Note key={key} text={val}
      deleteMethod={()=>this.deleteNote(key)} />
    }) 
    return (
      <div className="container">
       <div className="header">React TODO Application</div>
       {notes}
       <div className="btn" onClick={this.addNote.bind(this)}>+</div>
       <input type="text" 
            ref={((input) => {this.textInput=input})}
            className="textInput"
            value={ this.state.noteText}
            onChange={noteText=>this.updateNotetext(noteText)}
            onKeyPress={this.handleKeyPress.bind(this)}
            placeholder="Enter Here..."
          />
        </div>
    );
  }
}

export default App;
