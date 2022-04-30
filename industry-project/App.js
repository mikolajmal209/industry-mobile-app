import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PahoConnection from './components/PahoConnection';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.pompa}>
                <PahoConnection />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },

    pompa: {},
});
