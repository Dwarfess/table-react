import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import dateFormat from 'dateformat';

import {httpGet} from '../actions/http-get';

import {Table} from 'semantic-ui-react';

class TaskList extends Component {
    componentWillMount(){
        let that = this.props;
        that.httpGet([]);

        axios.get('/tasks.json').then(function (response) {
            that.httpGet(response.data);
            console.log(that.httpGet(response.data));
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        if (this.props.tasks !== null)
            return  (
                <Table celled selectable color='black'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Tags</Table.HeaderCell>
                            <Table.HeaderCell>Actual effort</Table.HeaderCell>
                            <Table.HeaderCell>Estimated effort</Table.HeaderCell>
                            <Table.HeaderCell>Due date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.props.tasks.filter(forFilter())
                                .map((task, index) => {
                                // checking tags
                                let tags = task.tags ? task.tags.join(', ') : '';
                                return (
                                    <Table.Row key={index+1}>
                                        <Table.Cell positive={!!task.is_high_priority}><Link to={task.name}>{task.name}</Link></Table.Cell>
                                        <Table.Cell>{tags}</Table.Cell>
                                        <Table.Cell>{task.actual_effort}</Table.Cell>
                                        <Table.Cell>{task.estimated_effort}</Table.Cell>
                                        <Table.Cell>{dateFormat(task.due_date, "isoDate")}</Table.Cell>
                                    </Table.Row>
                                    )}
                                )
                        }
                    </Table.Body>
                </Table>
            )
        else
            return (
                <div className="left floated">
                    Loading...
                </div>
            )
    }
}

// selects objects only with the value obj_status:active
function forFilter(){
    return (x) => x.obj_status === 'active';
}

function mapStateToProps(state){
    return {
        tasks:state.tasks
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({httpGet:httpGet}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskList);