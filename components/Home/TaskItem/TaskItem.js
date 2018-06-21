import React from 'react'
import {StyleSheet} from 'react-native'
import { Card, CardItem, Text, Button, Icon, Left, Right, Badge, Body } from 'native-base';

export const TaskItem = ({task, onTaskPress}) => (
        <Card
            success
        >
            <CardItem
                header
                bordered
            >
                <Left>
                    {
                        task.done ?
                            <Badge
                                success
                                style={styles.badge}
                            >
                                <Icon
                                    type="FontAwesome"
                                    name='check'
                                    style={styles.badgeIcon}
                                />
                            </Badge>
                            :
                            <Badge
                                warning
                                style={styles.badge}
                            >
                                <Icon
                                    type="FontAwesome"
                                    name='ellipsis-h'
                                    style={styles.badgeIcon}
                                />
                            </Badge>
                    }
                </Left>
                <Body>
                    <Text>
                        {`${task.id}. ${task.title}`}
                    </Text>
                </Body>
                <Right>
                    <Button
                        onPress={
                            () => {
                                onTaskPress({
                                    id: task.id || 0,
                                    body: task.body || '',
                                    title: task.title || '',
                                    done: task.done || false
                                })
                            }
                        }
                        rounded
                        small
                    >
                        <Icon
                            type="FontAwesome"
                            name='edit'
                            style={{
                                fontSize:12
                            }}
                        />
                    </Button>
                </Right>
            </CardItem>
            {
                task.body && task.body.length > 0 &&
                    <CardItem bordered>
                        <Left>
                            <Text>
                                {task.body}
                            </Text>
                        </Left>
                    </CardItem>
            }

        </Card>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 25,
    },
    taskItem: {
        padding: 10,
        backgroundColor: '#EFF2F7',
    },
    badge: {
        flex: 1,
        maxWidth: 30,
        maxHeight: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeIcon: {
        fontSize:12,
        color: '#fff'
    }
});