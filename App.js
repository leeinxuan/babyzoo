import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Provider } from 'react-redux'; 
import store from './src/redux/store';


export default function App() {
  return (
    <SafeAreaProvider>
      
        <StatusBar />
        <Provider store={store}>
        <GluestackUIProvider config={config}>
        <Navigation />
        </GluestackUIProvider>
        </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:''
  },
});
