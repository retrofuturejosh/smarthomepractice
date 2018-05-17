
import React from 'react';

import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

export default class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Plug')}
                    style={styles.listItem}>
                        <Text style={{fontSize: 35}}> some text </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        // fontSize: 50,
        height: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


{/* <Text> DEVICE MENU </Text>
<Button
  title="Go to PLUG"
  onPress={() => this.props.navigation.navigate('Plug')}
/> */}
