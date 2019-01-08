import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class TodoOutput extends Component {
    constructor(props) {
        super(props)
        this.state = {
           data: []
        };
        this.refreshState();
        this.renderEditable = this.renderEditable.bind(this);
    }
    renderEditable(cellInfo) {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.data];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.data[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
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

    componentWillReceiveProps() {
        this.refreshState();
    }

  render() {
    const columns = [{
        Header: 'Date',
        accessor: 'date',
        key: 'date',
    }, {
        Header: 'Your Todos',
        accessor: 'todo',
        id: 'todo',
        Cell: this.renderEditable
    }, {
        Header: 'Manage',
        key: 'action',
        id:'manage',
    }];
    return (
        <ReactTable columns={columns} data={this.state.data} />
    );
  }
}

export default TodoOutput;