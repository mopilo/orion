import { PaperProvider } from 'react-native-paper';
import BottomTabNav from './src/navigation/BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </PaperProvider>
  );
}


