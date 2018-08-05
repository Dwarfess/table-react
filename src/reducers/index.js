import {combineReducers} from 'redux';
import GetTasks from './get-tasks';

const allReducers = combineReducers({
    tasks: GetTasks
});

export default allReducers;