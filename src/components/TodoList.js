import React, {Component} from 'react';

class TodoList extends Component{

    changeTab (e){
        var type = e.target.getAttribute('type');
        this.setState({type:type})
    };
    getInitialState() {
        return {type:'all'};
    };
    
    render(){
        var style = {};
        if(this.props.items.length === 0){
            style = {display:'none'};
        }

        return (
            <div className="itemList">
            <div className="clearfix">
                {this.props.items.length} items
                <nav style={style}>
                    <a className={this.state.type === 'all'?'navTab active':'navTab'} type='all' onClick={this.changeTab}>ALL</a>
                    <a className={this.state.type === 'active'?'navTab active':'navTab'} type='active' onClick={this.changeTab}>ACTIVE</a>
                    <a className={this.state.type === 'done'?'navTab active':'navTab'} type='done' onClick={this.changeTab}>COMPLETE</a>
                </nav>
            </div>
            <ul>
                {this.props.items.map((item, index) => {
                        if(this.state.type === 'all'||this.state.type === item.status){
                            return <li key={index} id={index} className={item.status}>
                            <input type="checkbox" className="toggle" onChange={this.props.changeStatus} checked={item.status === 'done'}/>
                            <lable>{item.text}</lable>
                            <button className="remove" onClick={this.props.removeItem}></button>
                        </li>;
                        }
                    })
                }
            </ul>
        </div>
        );
            
    }
}
export default TodoList;