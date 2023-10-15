import { PaperProvider } from 'react-native-paper';
import BottomTabNav from './src/navigation/BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <BottomTabNav />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}


