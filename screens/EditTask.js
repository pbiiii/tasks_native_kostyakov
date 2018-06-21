import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Text, Button, Alert } from 'react-native'
import { Actions } from "react-native-router-flux";
import {ActionCreators} from "redux-undo";
import {changeTaskEditForm, closeEditTaskModalAction, updateTaskAction} from "../store/tasks/actions";
import { Container } from 'native-base';
import { EditTaskForm } from "../components/EditTask";


class EditTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false
        }
    }
    handleChange = (e) => {
        this.props.changeTaskEditForm(e)
        this.setState({changed: true})
    }
    componentDidMount() {
        this.checkAuth()
        this.props.navigation.setParams({
            handleSave: () => this.onSave(),
            handleBack: () => this.onBack()
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.checkAuth()
        }
        console.log(this.props.state)
    }
    checkAuth() {
        if(!this.props.token) {
            return Actions.login()
        }
    }
    onSave() {

    }
    onBack() {
        if(!this.state.changed) {
            this.props.closeEditTaskModal()
            return Actions.tasks()
        } else {
            Alert.alert(
                'Подтвердите действие',
                'Имеются изменения. Выйти без сохранения',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {
                        text: 'OK',
                        onPress: () => {
                            this.props.closeEditTaskModal()
                            return Actions.tasks()
                        }
                    },
                ]
            );
        }
    }
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            headerRight: (
                <Button
                    title = "Save"
                    onPress = {() => params.handleSave && params.handleSave()}
                />
            ),
            headerLeft: (
                <Button
                    title = "< Back"
                    onPress = {() => params.handleBack && params.handleBack()}
                />
            )
        }
    }
    render() {
        return (
            <Container padder>
                <EditTaskForm
                    body={this.props.taskToEdit.body}
                    title={this.props.taskToEdit.title}
                    done={this.props.taskToEdit.done}
                    onChange={this.handleChange}
                />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskToEdit: state.editTask.present.taskToEdit,
        token: state.auth.token,
        state: state.editTask,
        // canUndo: state.editTask.past.length > 0,
        // canRedo: state.editTask.future.length > 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: bindActionCreators(updateTaskAction, dispatch),
        closeEditTaskModal: bindActionCreators(closeEditTaskModalAction, dispatch),
        changeTaskEditForm: bindActionCreators(changeTaskEditForm, dispatch),
        undo: () => dispatch(ActionCreators.undo()),
        redo: () => dispatch(ActionCreators.redo()),
        clearHistory: () => dispatch(ActionCreators.clearHistory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);