import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import dateFormat from 'dateformat';
import EditableLabel from 'react-inline-editing';

import {httpGet} from '../actions/http-get';

import {Table} from 'semantic-ui-react';
import './task-info.css';

class TaskInfo extends Component {
    // http get data from tasks.json
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

    // http put changes to server
    _handleFocusOut(props, text) {
        if(props.id) {
            props.name = text;
            console.log('props', props);
            axios.put('/updateTask', props).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log('Request failed with status code 404');
            });
        }
    }

    render(){
        if(this.props.tasks !== null && this.props.tasks.length > 0) {
            // parsing URL to define the task
            let task = this.props.tasks.find((x) => x.name === this.props.match.params.task);

            // checking tags
            let tags = task.tags ? task.tags.join(', ') : '';
            return (
                <div className = "taskInfo">
                    <Link to='/'>Go back</Link>
                    <Table celled color='black'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Tags</Table.HeaderCell>
                                <Table.HeaderCell>Actual effort</Table.HeaderCell>
                                <Table.HeaderCell>Estimated effort</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Due date</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><EditableLabel text={task.name} onFocusOut={this._handleFocusOut.bind(this, {id:task.id})}/></Table.Cell>
                                <Table.Cell>{tags}</Table.Cell>
                                <Table.Cell>{task.actual_effort.toString()}</Table.Cell>
                                <Table.Cell>{task.estimated_effort.toString()}</Table.Cell>
                                <Table.Cell>{task.description}</Table.Cell>
                                <Table.Cell>{dateFormat(task.due_date, "isoDate")}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            )
        }
        else
            return (
                <div className="left floated">
                    Loading...
                </div>
            )

        }
}

function mapStateToProps(state){
    return {
        tasks:state.tasks
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({httpGet:httpGet}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskInfo);