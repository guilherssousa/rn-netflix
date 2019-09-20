import React from 'react';

import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Main from '~/pages/Main';

Main.navigationoptions = {
    tabBarIcon: <Icon name="home" size={18} color="#FFF" />
}

const Routes = createAppContainer(createBottomTabNavigator({
    Início: Main,
    Buscas: Main,
    'Em Breve': Main,
    Downloads: Main,
    Mais: Main,
}, {tabBarOptions: {
        activeTintColor: '#FFF',
        inactiveTintColor: '#767676',
        activeBackgroundColor: '#1A1A1A',
        inactiveBackgroundColor: '#1A1A1A',
    }
}));

export default Routes;
