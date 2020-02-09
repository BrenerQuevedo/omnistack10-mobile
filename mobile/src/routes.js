import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import Profile from './pages/Profile'


const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        Profile,
    })
);

export default Routes;