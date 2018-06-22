import React from 'react';
import {Container, Root} from 'native-base'
import {Scene, Router, Stack, Drawer} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import Screens from "./screens";

const ConnectedRouter = connect()(Router);
import {store} from "./store";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <ConnectedRouter>
                        <Stack>
                            <Stack
                                key="root"
                                tabs={true}
                            >
                                <Scene key="login" component={Screens.LoginScreen} title="Login"/>
                                <Scene key="register" component={Screens.RegisterScreen} title="Register"/>
                            </Stack>
                            <Drawer
                                initial
                                hideNavBar
                                key='menu'
                                contentComponent={Screens.Menu}
                            >
                                <Scene key="tasks" component={Screens.HomeScreen} title="Tasks"/>
                                <Scene key="editTask" component={Screens.EditTask} title="Edit task"/>
                            </Drawer>
                        </Stack>
                    </ConnectedRouter>
                </Root>
            </Provider>
        )
    }
}

export default App