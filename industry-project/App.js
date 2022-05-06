import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PahoConnection from './components/PahoConnection';
import Testy1 from './components/Testy1';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.pompa}>
                <Testy1 />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },

    pompa: {},
});
