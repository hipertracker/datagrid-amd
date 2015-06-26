import React from 'react'
import DataGrid from 'react-datagrid'

class DataTable extends React.Component {
    render() {
        return <DataGrid columns={this.props.columns}
                         dataSource={this.props.rows}
                         idProperty="id"
                         style={this.props.style}/>
    }
}

export default DataTable
