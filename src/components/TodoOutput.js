import React, { Component } from 'react';
import { Table,Icon,Popconfirm} from 'antd';


class TodoOutput extends Component {
    constructor(props) {
        super(props)
        this.state = {
           data: []
        };
        this.refreshState();
    }
   
    getNowFormatDate() {
        var date = new Date();
        var dateSeperator = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + dateSeperator + month + dateSeperator + strDate;
        return currentdate;
    }

    refreshState() {
        var rows = [];
        for(var i=0; i < this.props.todo.length; i++) {
            var row = {
                key: i,
                date:this.getNowFormatDate(),
                todo:this.props.todo[i]
            };
            rows.push(row);
        }
        this.setState({
            data:rows
        });
    }

    onDelete(key){
     const data = [...this.state.data];
        this.setState({ data: data.filter(item => item.key !== key) });
    }
    componentWillReceiveProps() {
        this.refreshState();
    }

  render() {
      

    const columns = [{
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    }, {
        title: 'Todos',
        dataIndex: 'todo',
        key: 'todo',
    }, {
        title: 'Manage',
        key: 'action',
        render: (text, record) =>{ 
            return(
                this.state.data.length > 0 ?
              (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <a href="#"> <Icon type="delete"/></a>
            </Popconfirm>
              ) : null
        );
    },
    }];
    return (
        <Table columns={columns} dataSource={this.state.data} />
    );
}
}

export default TodoOutput;