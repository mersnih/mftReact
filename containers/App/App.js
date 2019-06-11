import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import list from '../../constants/datas'
import styles from './App.styles'

const App = () => (
        <View style = { styles.App}>
            <Text>{list[0].commentaire}</Text>
        </View>
)

export default App

