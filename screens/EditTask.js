import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Text, Button, Alert } from 'react-native'
import { Actions } from "react-native-router-flux";
import {changeTaskEditForm, closeEditTaskModalAction, deleteTaskAction, updateTaskAction} from "../store/tasks/actions";
import { Container } from 'native-base';
import { EditTaskForm } from "../components/EditTask";
import {storage} from "../store/storage";


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
    }
    checkAuth = async () => {
        const token = await storage.token
        if(!token) {
            return Actions.login()
        }
    }
    onSave() {
        if(this.state.changed) {
            this.props.updateTask(this.props.taskToEdit)
        }
        this.props.closeEditTaskModal()
        return Actions.tasks()
    }
    onDelete = () => {
        Alert.alert(
            'Подтвердите действие',
            'Точно удалить?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {
                    text: 'OK',
                    onPress: () => {
                        this.props.deleteTask(this.props.taskToEdit)
                        this.props.closeEditTaskModal()
                        return Actions.tasks()
                    }
                },
            ]
        );
    }
    onBack() {
        if(!this.state.changed) {
            this.props.closeEditTaskModal()
            return Actions.tasks()
        } else {
            Alert.alert(
                'Подтвердите действие',
                'Имеются изменения. Выйти без сохранения?',
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
                    title = "Сохранить"
                    onPress = {() => params.handleSave && params.handleSave()}
                />
            ),
            headerLeft: (
                <Button
                    title = "< Назад"
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
                    onDelete={this.onDelete}
                />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskToEdit: state.editTask.taskToEdit,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: bindActionCreators(updateTaskAction, dispatch),
        closeEditTaskModal: bindActionCreators(closeEditTaskModalAction, dispatch),
        changeTaskEditForm: bindActionCreators(changeTaskEditForm, dispatch),
        deleteTask: bindActionCreators(deleteTaskAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);