import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native'

AppRegistry.registerComponent('tasks_native_kostyakov', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])