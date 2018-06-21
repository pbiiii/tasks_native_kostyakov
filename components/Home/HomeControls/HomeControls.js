import React from 'react'
import { View, Button } from 'react-native'

export const HomeControls = ({onAddTask}) => (
    <View>
        <Button
            onPress={() => {
                onAddTask({
                    title : 'Без названия'
                })
            }}
            title="Добавить"
        />
    </View>
)