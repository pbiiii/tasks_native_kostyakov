import React from 'react'
import { connect } from 'react-redux';
import { fetchTasksAction, addTaskAction, deleteTaskAction, changeTaskDoneStatusAction, openEditTaskModalAction} from "../store/tasks/actions/index";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";
import { HomeControls, TasksList } from "../components/Home";
import { Container } from 'native-base';

class Home extends React.Component {
    componentDidMount() {
        if(!this.props.token) {
            return Actions.login()
        }
        return this.props.fetchTasks()
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            if(!this.props.token) {
                return Actions.login()
            }
            if(this.props.modalVisible) {
                return Actions.editTask()
            }
        }
    }
    render() {
        return (
            <Container padder>
                <HomeControls
                    onAddTask={this.props.addTask}
                />
                <TasksList
                    tasks={this.props.tasks}
                    onTaskPress={this.props.openEditTaskModal}
                />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        modalVisible: state.editTask.modalVisible,
        token: state.auth.token.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: bindActionCreators(fetchTasksAction, dispatch),
        addTask: bindActionCreators(addTaskAction, dispatch),
        deleteTask: bindActionCreators(deleteTaskAction, dispatch),
        changeTaskDoneStatus: bindActionCreators(changeTaskDoneStatusAction, dispatch),
        openEditTaskModal: bindActionCreators(openEditTaskModalAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);