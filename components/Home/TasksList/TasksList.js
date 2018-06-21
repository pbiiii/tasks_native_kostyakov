import React from 'react'
import { View, Text } from 'react-native'
import { TaskItem } from "..";
import { Content } from 'native-base';

export const TasksList = ({tasks, onTaskPress}) => (
    <Content>
        {
            (Array.isArray(tasks) && tasks.length > 0) ?
                tasks.map((task) => (
                    <TaskItem
                        task={task}
                        key={task.id}
                        onTaskPress={onTaskPress}
                    />
                )) :
                <Text>
                    There is no tasks yet!
                </Text>
        }
    </Content>
)