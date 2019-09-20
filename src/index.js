import React from 'react';

import { YellowBox, StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

YellowBox.ignoreWarnings([
    'componentWillMount',
    'Possible Unhandled',
    'Each child'
]);

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Routes />
    </>
);

export default App;
