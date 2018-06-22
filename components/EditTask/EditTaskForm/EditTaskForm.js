import React from "react";
import {Content, Form, Item, Input, Label, Switch, Button, Text, ListItem, Left, Right, List} from 'native-base';

export const EditTaskForm = ({body, title, done, onChange, onDelete}) => (
    <Content>
        <Content>
            <Button
                onPress={() => {onDelete()}}
                danger
            >
                <Text>
                    Удалить
                </Text>
            </Button>
        </Content>
        <Form>
            <Item floatingLabel>
                <Label>Заголовок</Label>
                <Input
                    value={title}
                    name="title"
                    onChangeText={(value) => {onChange({name: 'title', value})}}
                />
            </Item>
            <Item floatingLabel last>
                <Label>Текст</Label>
                <Input
                    value={body}
                    name="body"
                    multiline
                    onChangeText={(value) => {onChange({name: 'body', value})}}
                />
            </Item>
        </Form>
        <List>
            <ListItem>
                <Left>
                    <Text
                        style={{
                            width: 100
                        }}
                    >
                        Выполнена
                    </Text>
                </Left>
                <Right>
                    <Switch
                        style={{
                            width: 50
                        }}
                        value={done}
                        onValueChange={(value) => {onChange({name: 'done', value})}}
                    />
                </Right>
            </ListItem>
        </List>
    </Content>
)