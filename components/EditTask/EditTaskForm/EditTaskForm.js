import React from "react";
import {Content, Form, Item, Input, Textarea, Label, Switch} from 'native-base';

export const EditTaskForm = ({body, title, done, onChange}) => (
    <Content>
        <Form>
            <Item floatingLabel>
                <Label>Заголовок</Label>
                <Input
                    value={title}
                    name="title"
                    onChangeText={() => {onChange({name: 'title', value: title})}}
                />
            </Item>
            <Item floatingLabel last>
                <Label>Текст</Label>
                <Input
                    value={body}
                    name="body"
                    multiline
                    onChangeText={() => {onChange({name: 'body', value: body})}}
                />
            </Item>
            <Label>Выполнена</Label>
            <Switch
                value={done}
                onValueChange={() => {onChange({name: 'done', value: done})}}
            />
        </Form>
    </Content>
)