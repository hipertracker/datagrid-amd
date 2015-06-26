import React from 'react'
import DataTable from 'es6!app/modules/DataTable'
console.log('SHIT');

class DataTableContainer extends React.Component {
    render() {
        const styles = {height: 500, width: '100%', border: '1px solid gray'};
        return <DataTable columns={this.props.columns}
                          rows={this.props.rows}
                          style={styles}/>;
    }
}

export default DataTableContainer
